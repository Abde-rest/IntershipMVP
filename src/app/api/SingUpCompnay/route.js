import dbConnect from "@/lib/Dbconnect";
import ModelCompany from "@/Model/ModelCompany/ModelCompany";
import bcrypt from "bcryptjs";
import { uploadFile } from "@uploadcare/upload-client";
// Save Logo in cloudinary
// Validet if logo amd phone is Found
// Validae the nIF AND Rc  is Realty ?
// استعمال نفس الايميل في كل من المستخدم والشركة مسموح به ؟
// Problem Her =>  How can Validtion Email ? Is Rialty ?
// adpter MongoDb  => لتحزين الجلسة
export async function POST(request) {
  const formData = await request.formData();
  const company_name = formData.get("company_name");
  const NIF = formData.get("NIF");
  const RC = formData.get("RC");
  const email = formData.get("email");
  const password = formData.get("password");
  const phone = formData.get("phone");
  const description = formData.get("description");
  const city = formData.get("city");
  const address = formData.get("address");
  const field = formData.get("field");
  const logo = formData.get("logo");

  if (
    // الحقول الحمراء في الطلب
    !company_name ||
    !NIF ||
    !RC ||
    !email ||
    !password ||
    !description ||
    !city ||
    !address ||
    !field
  ) {
    return new Response(
      JSON.stringify({ message: "تأكد من ارسال البيانات رجاء " }),
      {
        status: 400,
      }
    );
  }
  try {
    await dbConnect();
    // Check if email, NIF, or RC already exists in a single query
    const existingCompany = await ModelCompany.findOne({
      $or: [{ email: email }, { NIF: NIF }, { RC: RC }],
    });

    if (existingCompany) {
      return new Response(JSON.stringify({ message: "الحساب موجود بالفعل" }), {
        status: 400,
      });
    }

    // bcrypt The password
    const hashedPassword = await bcrypt.hash(password, 10);

    // if (logo) {
    //   const arrayBuffer = await logo.arrayBuffer();
    //   const buffer = Buffer.from(arrayBuffer);
    //   const result = await uploadFile(buffer, {
    //     publicKey: process.env.PUBLIC_KEY,
    //     fileName: logo.name,
    //     store: "auto", // لتخزين الملف مباشرة
    //   });
    // }
    // if (result.isStored) {
    // add User In dataBase
    await ModelCompany.create({
      company_name: company_name,
      email: email,
      password: hashedPassword,
      phone: phone, // Mybe not found
      NIF: NIF,
      RC: RC,
      description: description,
      location: {
        city: city,
        address: address,
      },
      field: field,
      // logo: logo, // Mybe not found
    });

    return new Response(
      JSON.stringify({
        message: "تم أنشاء الحساب بنجاج ",
      }),
      {
        status: 201,
      }
    );
    // } else {
    //   return new Response(
    //     JSON.stringify({
    //       message: " لم يتم تحميل الصورة بنجاح || حاول مرة أخرى",
    //     }),
    //     {
    //       status: 400,
    //     }
    //   );
    // }
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "حدث خطاء غير متوقع !! رجاء حاول مرة اخرى " }),
      {
        status: 400,
      }
    );
  }
}
