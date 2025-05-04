import dbConnect from "@/lib/Dbconnect";

import Application from "@/Model/ModelApplecate/ModelApplecate";
// تحتاج
import Internship from "@/Model/Modelinternships/ModelIntership";
import { getServerSession } from "next-auth";
import { authoption } from "../auth/[...nextauth]/route";

// get All  Data Intership  for this company
// Big Proplem : اذا انا حذفت الفرصة التدريبة سوف يحدث خطاء internshipID  هو null  id
// وانا استخدم بيانات داخلها في عرض الطلبات
export async function GET(req) {
  const { user } = await getServerSession(authoption);
  const id = user.id;
  try {
    await dbConnect();
    const data = await Application.find({ companyId: id }).populate(
      "internshipID"
    );

    console.log(data);
    // [
    //     {
    //       LinksSoch: {
    //         linkedin: 'https://www.linkedin.com/in/dummy-link-775982111/',
    //         github: ''
    //       },
    //       _id: new ObjectId('68111c9917e91d2f08cdd3eb'),
    //       internshipID: {
    //         _id: new ObjectId('680be85c438a1b22916cf814'),
    //         title: 'Front end developer',
    //         description: 'نحتاج الى شخص ماهر يستطيع صناعة  تصمايم حيدة وتجاوبة معا معرفة لمكتبات حديثة ',
    //         location: 'Ain el beel ',
    //         mode: 'Remote',
    //         field: 'Engineering',
    //         duration: '3 Month',
    //         companyID: new ObjectId('680b8e5392ff1a4100e462e4'),
    //         startDate: 2025-04-25T00:00:00.000Z,
    //         endDate: 2025-04-30T00:00:00.000Z,
    //         applicationDeadline: 2025-06-05T00:00:00.000Z,
    //         Applicants: 0,
    //         createdAt: 2025-04-25T19:54:04.215Z,
    //         updatedAt: 2025-04-25T19:54:04.215Z,
    //         __v: 0
    //       },
    //       user: new ObjectId('680b8e5392ff1a4100e462e4'),
    //       companyId: new ObjectId('680b8e5392ff1a4100e462e4'),
    //       status: 'قيد المراجعة',
    //       cvUrl: 'https://ucarecdn.com/2e4c5813-04a0-48a1-99ce-cf48a9dabdd9/',
    //       phone: 213773430842,
    //       createdAt: 2025-04-29T18:38:17.642Z,
    //       updatedAt: 2025-04-29T18:38:17.642Z,
    //       __v: 0
    //     }
    //   ]
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
