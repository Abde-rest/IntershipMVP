import dbConnect from "@/lib/Dbconnect";
import ModalApplication from "@/Model/ModelApplecate/ModelApplecate";

// Her Regect or accept the  appliction
export async function POST(request) {
  const { id, status } = await request.json();
  console.log(id);
  console.log(status);
  try {
    await dbConnect();

    const Application = await ModalApplication.findOneAndUpdate(
      {
        _id: id,
      },
      { status: status }
    );

    // if (result.isStored) {
    //   await dbConnect();

    //   await ModalApplication.create({
    //     internshipID: idIntership,
    //     user: user.id,
    //     companyId: companyId,
    //     cvUrl: {
    //       url: result.cdnUrl,
    //       uuid: result.uuid,
    //     },
    //     phone: phone,
    //     LinksSoch: {
    //       linkedin: linkedin,
    //       github: github,
    //     },
    //   });

    //   return new Response(
    //     JSON.stringify({ messgae: "تم  طلب التقديم بنجاح ", status: true }),
    //     {
    //       status: 201,
    //     }
    //   );
    //   // return new Response.redirect(/"/");
    // }
    if (Application) {
      return new Response(
        JSON.stringify({
          messgae: "تم تنفيذ الاجراء ",
          status: false,
        }),
        {
          status: 201,
        }
      );
    } else {
      return new Response(
        JSON.stringify({
          messgae: "لم يتم تنفيذ الاجراء ",
          status: false,
        }),
        {
          status: 201,
        }
      );
    }
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
