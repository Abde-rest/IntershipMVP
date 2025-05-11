import dbConnect from "@/lib/Dbconnect";
import ModalApplication from "@/Model/ModelApplecate/ModelApplecate";
import { uploadFile } from "@uploadcare/upload-client";
import { getServerSession } from "next-auth";
import { authoption } from "../../auth/[...nextauth]/route";
import ModelIntership from "@/Model/Modelinternships/ModelIntership";

// Save cv in  cloudinary
// and svae the url in databse
// يجب عليه ان يقوم ب طلب فرصة تدريبة واجدو فقط لكل intership
// تعديل ال ui بناء على ذالك

export async function POST(request) {
  const PUBLIC_KEY = "0f99376cae58b72d4e2f";

  try {
    const formData = await request.formData();
    const phone = formData.get("phone"); // 'file' هو اسم الحقل في النموذج
    const cv = formData.get("cv"); // 'file' هو اسم الحقل في النموذج
    const companyId = formData.get("companyId"); // 'file' هو اسم الحقل في النموذج
    const idIntership = formData.get("id"); // 'file' هو اسم الحقل في النموذج
    const linkedin = formData.get("linkedin"); // 'file' هو اسم الحقل في النموذج
    const github = formData.get("github"); // 'file' هو اسم الحقل في النموذج
    const { user } = await getServerSession(authoption);

    if (!cv || !phone) {
      return new Response(
        JSON.stringify({
          message: " لم يتم ارسال الملف او الرقم ",
        }),
        {
          status: 400,
        }
      );
    }

    await dbConnect();
    // check The user is Sunmit the same appliction
    const Application = await ModalApplication.findOne({
      internshipID: idIntership,
      user: user.id,
    });

    if (Application) {
      return new Response(
        JSON.stringify({
          messgae: "سبقة ارسال الطلب في هاته الفرصة التدريبية ",
          status: false,
        }),
        {
          status: 401,
        }
      );
    }

    // 2. تحويل الملف إلى buffer
    const arrayBuffer = await cv.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const result = await uploadFile(buffer, {
      publicKey: PUBLIC_KEY,
      fileName: cv.name,
      store: "auto", // لتخزين الملف مباشرة
    });

    // UploadcareFile {
    //   uuid: '0b005838-d189-4d51-bc67-a4fd9e57a933',
    //   name: 'word12.docx',
    //   size: 14331,
    //   isStored: true,
    //   isImage: false,
    //   mimeType: 'application/octet-stream',
    //   cdnUrl: 'https://ucarecdn.com/0b005838-d189-4d51-bc67-a4fd9e57a933/',
    //   s3Url: null,
    //   originalFilename: 'طلب الخطي مكتوب ب word (1) (2).docx',
    //   imageInfo: null,
    //   videoInfo: null,
    //   contentInfo: {
    //     mime: {
    //       mime: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    //       type: 'application',
    //       subtype: 'vnd.openxmlformats-officedocument.wordprocessingml.document'
    //     }
    //   },
    //   metadata: {},
    //   s3Bucket: null,
    //   defaultEffects: null
    // }

    if (result.isStored) {
      await ModalApplication.create({
        internshipID: idIntership,
        user: user.id,
        companyId: companyId,
        cvUrl: {
          url: result.cdnUrl,
          uuid: result.uuid,
        },
        phone: phone,
        LinksSoch: {
          linkedin: linkedin,
          github: github,
        },
      });

      // add The Number of Applicants
      const AddPlusApplicants = await ModelIntership.findByIdAndUpdate(
        idIntership,
        {
          $inc: { Applicants: 1 },
        }
      );

      if (AddPlusApplicants) {
        return new Response(
          JSON.stringify({ messgae: "تم  طلب التقديم بنجاح ", status: true }),
          {
            status: 201,
          }
        );
      } else {
        return new Response(
          JSON.stringify({
            messgae: "حدث خطاء في عملية طلب التقديم ",
            status: false,
          }),
          {
            status: 201,
          }
        );
      }
    }
    return new Response(
      JSON.stringify({
        messgae: "لم يتم طلب التقديم ! رجاء حاول مرة اخرى ",
        status: false,
      }),
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        message: "حدث خطاء غير متوقع !! رجاء حاول مرة اخرى ",
        status: false,
      }),
      {
        status: 400,
      }
    );
  }
}
