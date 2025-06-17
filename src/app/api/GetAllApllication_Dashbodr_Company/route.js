import dbConnect from "@/lib/Dbconnect";

import Application from "@/Model/ModelApplecate/ModelApplecate";
// تحتاج
import Internship from "@/Model/Modelinternships/ModelIntership";
import Company from "@/Model/ModelCompany/ModelCompany";
import user from "@/Model/ModelUser/ModelUser";

import { getServerSession } from "next-auth";
import { authoption } from "../auth/[...nextauth]/route";

// get All  Data Intership  for this company
// Big Proplem : اذا انا حذفت الفرصة التدريبة سوف يحدث خطاء internshipID  هو null  id
// وانا استخدم بيانات داخلها في عرض الطلبات
export async function GET(req) {
  const { user } = await getServerSession(authoption);
  const id = user.id;
  console.log("Company id");
  console.log(id);
  try {
    await dbConnect();
    const data = await Application.find({ companyId: id })
      .populate({
        path: "user",
        select: "Full_name email",
      })
      .populate("internshipID")
      .populate({
        path: "companyId",
        select: "company_name",
      });

    console.log("Data comapnay name and Intership Id and aplliction ");
    console.log(data);
    // [
    //   {
    //     cvUrl: {
    //       url: 'https://ucarecdn.com/34ec9543-613e-409f-9e88-4c550973d620/',
    //       uuid: '34ec9543-613e-409f-9e88-4c550973d620'
    //     },
    //     LinksSoch: { linkedin: '', github: '' },
    //     _id: new ObjectId('681fb304f2cf2094bcda798d'),
    //     internshipID: {
    //       _id: new ObjectId('681fb2cff2cf2094bcda7984'),
    //       title: 'Front nd ',
    //       description: 'signature',
    //       location: 'signature',
    //       mode: 'In-office',
    //       field: 'Marketing',
    //       duration: 'signature',
    //       companyID: new ObjectId('681e31da7dabc43dbf83bdf9'),
    //       startDate: 2025-05-10T00:00:00.000Z,
    //       endDate: 2025-05-10T00:00:00.000Z,
    //       applicationDeadline: 2025-06-04T00:00:00.000Z,
    //       Applicants: 1,
    //       createdAt: 2025-05-10T20:10:55.160Z,
    //       updatedAt: 2025-05-10T20:11:48.243Z,
    //       __v: 0
    //     },
    //     user: new ObjectId('681e31da7dabc43dbf83bdf9'),
    //     companyId: null,
    //     status: 'pending',
    //     phone: 213773430842,
    //     createdAt: 2025-05-10T20:11:48.215Z,
    //     updatedAt: 2025-05-10T20:11:48.215Z,
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
