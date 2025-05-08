import dbConnect from "@/lib/Dbconnect";

import Internship from "@/Model/Modelinternships/ModelIntership";
import ModelCompany from "@/Model/ModelCompany/ModelCompany";

// get All  Data Intership  for this company

//  خطاء كبيييير  لايحب ارجاع منلة السر هنا هاذا خطير يحب عليا حذفعا قبل الارسال
export async function GET() {
  try {
    await dbConnect();
    const data = await Internship.find().populate("companyID");   
    return new Response(JSON.stringify(data), {
      status: 201,
    });
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
