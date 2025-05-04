import dbConnect from "@/lib/Dbconnect";

import Internship from "@/Model/Modelinternships/ModelIntership";
import { getServerSession } from "next-auth";
import { authoption } from "../auth/[...nextauth]/route";

// get All  Data Intership  for this company
export async function GET(req) {
  const { user } = await getServerSession(authoption);
  const id = user.id;
  try {
    await dbConnect();
    const data = await Internship.find({ companyID: id }).sort({
      createdAt: -1,
    });
    // يعني ترتيب تنازلي (من الأحدث إلى الأقدم) sort({
    //   createdAt: -1,
    // });
    console.log(data);
    // [
    //   {
    //     _id: new ObjectId('6808d5731f6590e82e2b278c'),
    //     title: '2',
    //     description: '2',
    //     location: '2',
    //     mode: 'Remote',
    //     duration: '2',
    //     companyID: new ObjectId('6808d5401f6590e82e2b2788'),
    //     startDate: 2025-04-23T00:00:00.000Z,
    //     endDate: 2025-04-23T00:00:00.000Z,
    //     applicationDeadline: 2025-04-23T00:00:00.000Z,
    //     createdAt: 2025-04-23T11:56:35.346Z,
    //     updatedAt: 2025-04-23T11:56:35.346Z,
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
