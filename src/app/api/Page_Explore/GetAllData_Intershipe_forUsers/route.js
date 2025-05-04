import dbConnect from "@/lib/Dbconnect";

import Internship from "@/Model/Modelinternships/ModelIntership";
import ModelCompany from "@/Model/ModelCompany/ModelCompany";

// get All  Data Intership  for this company

//  خطاء كبيييير  لايحب ارجاع منلة السر هنا هاذا خطير يحب عليا حذفعا قبل الارسال
export async function GET() {
  try {
    await dbConnect();
    const data = await Internship.find().populate("companyID");
    console.log(data);
    // [

    //   {
    //     _id: new ObjectId('680b8e7892ff1a4100e462e8'),
    //     title: 'Front end Dev ',
    //     description: '1111111111111',
    //     location: '1111111111111',
    //     mode: 'Remote',
    //     field: 'Healthcare',
    //     duration: '1111111111111',
    //     companyID:
    //

    // {
    //   "company_name": "1111111111",
    //   "email": "abc@gmail.com",
    //   "password": "$2b$10$GfBFHcitqCdAHfIh7h7bY.D8CoepJIaFyuVvYxZX6GY3MZtqkEfYi",
    //   "phone": "+213773430842",
    //   "NIF": 1111111111111111,
    //   "RC": 11111111,
    //   "description": "1111111111",
    //   "location": {
    //     "city": "أم البواقي",
    //     "address": "Quartier Houari Boumediène",
    //     "country": "الجزائر "
    //   },
    //   "field": "design",
    //   "logo": null,
    //   "role": "company",
    //   "createdAt": {
    //     "$date": "2025-04-24T23:23:03.352Z"
    //   },
    //   "updatedAt": {
    //     "$date": "2025-04-24T23:23:03.352Z"
    //   },

    //     },
    //     startDate: 2025-04-25T00:00:00.000Z,
    //     endDate: 2025-04-25T00:00:00.000Z,
    //     applicationDeadline: 2025-04-25T00:00:00.000Z,
    //     Applicants: 0,
    //     createdAt: 2025-04-25T13:30:32.604Z,
    //     updatedAt: 2025-04-25T13:30:32.604Z,
    //     __v: 0
    //   }
    // ]

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
