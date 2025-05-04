import dbConnect from "@/lib/Dbconnect";
import Internship from "@/Model/Modelinternships/ModelIntership";

export async function DELETE(req) {
  const  _id  = await req.json();
  console.log(_id);

  try {
    await dbConnect();
    await Internship.deleteOne({ _id: _id });
    return new Response(JSON.stringify({ message: "تم الحذف بنجاح   " }), {
      status: 201,
    });
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({ message: "لم يتم الاظافة رجاء حاول مرة اخرى " }),
      {
        status: 400,
      }
    );
  }
}
