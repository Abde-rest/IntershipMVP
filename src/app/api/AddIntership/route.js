import dbConnect from "@/lib/Dbconnect";
import Internship from "@/Model/Modelinternships/ModelIntership";
import { getServerSession } from "next-auth";
import { authoption } from "../auth/[...nextauth]/route";

export async function POST(req) {
  const { user } = await getServerSession(authoption);
  const id = user.id;
  console.log(id);

  let {
    title,
    description,
    location,
    mode,
    duration,
    field,
    startIntership,
    endIntership,
    Deadline,
  } = await req.json();
  //   //  // التحقق من البيانات

  if (
    !title ||
    !description ||
    !location ||
    !mode ||
    !field ||
    !duration ||
    !startIntership ||
    !endIntership
  ) {
    return new Response(
      JSON.stringify({ message: "تأكد من ارسال البيانات رجاء " }),
      {
        status: 405,
      }
    );
  }

  try {
    await dbConnect();

    // Add Intership
    await Internship.create({
      title: title,
      description: description,
      location: location,
      mode: mode,
      field: field,
      duration: duration,
      companyID: id,
      startDate: startIntership,
      endDate: endIntership,
      applicationDeadline: Deadline,
    });

    return new Response(JSON.stringify({ message: "تم أنشاء الحساب بنجاج " }), {
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
