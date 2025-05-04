import dbConnect from "@/lib/Dbconnect";

import Internship from "@/Model/Modelinternships/ModelIntership";

// get  just One  Intership for page apply
export async function POST(req) {
  const id = await req.json();

  try {
    await dbConnect();
    const data = await Internship.findOne({ _id: id });
    // {
    //   _id: '680be85c438a1b22916cf814',
    //   title: 'Front end developer',
    //   description: 'نحتاج الى شخص ماهر يستطيع صناعة  تصمايم حيدة وتجاوبة معا معرفة لمكتبات حديثة ',
    //   location: 'Ain el beel ',
    //   mode: 'Remote',
    //   field: 'Engineering',
    //   duration: '3 Month',
    //   companyID: '680b8e5392ff1a4100e462e4',
    //   startDate: '2025-04-25T00:00:00.000Z',
    //   endDate: '2025-04-30T00:00:00.000Z',
    //   applicationDeadline: '2025-06-05T00:00:00.000Z',
    //   Applicants: 0,
    //   createdAt: '2025-04-25T19:54:04.215Z',
    //   updatedAt: '2025-04-25T19:54:04.215Z',
    //   __v: 0
    // }
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
