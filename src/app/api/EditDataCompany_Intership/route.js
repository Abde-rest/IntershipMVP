import dbConnect from "@/lib/Dbconnect";
import Internship from "@/Model/Modelinternships/ModelIntership";
// كنت اتسطيع هنا اضافة تحديث لعنصر واجد بدل ما اغير جميع العناصر بحيث ارسل object ونديرو ...sperd
export async function POST(req) {
  // Put not post
  const {
    _id,
    title,
    description,
    location,
    mode,
    duration,
    startDate,
    endDate,
    applicationDeadline,
  } = await req.json();
  //   //   //  // التحقق من البيانات

  try {
    await dbConnect();

    await Internship.findByIdAndUpdate(_id, {
      title: title,
      description: description,
      location: location,
      mode: mode,
      duration: duration,
      startDate: startDate,
      endDate: endDate,
      applicationDeadline: applicationDeadline,
    });
    return new Response(JSON.stringify({ message: "تم التعديل  بنجاج " }), {
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
