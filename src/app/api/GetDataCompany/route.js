import dbConnect from "@/lib/Dbconnect";

import Company from "@/Model/ModelCompany/ModelCompany";
import { getServerSession } from "next-auth";
import { authoption } from "@/app/api/auth/[...nextauth]/route";
// Her Is Get Data Company
export async function GET() {
  const { user } = await getServerSession(authoption);
  const id = user.id;

  try {
    await dbConnect();
    const data = await Company.findOne({
      _id: id,
    }).select("logo -_id");
    // Projection
    // logo: 'https://ucarecdn.com/4b7272ed-ce76-43e1-91ff-f7a1e34eb4da/user1.png'

    if (data) {
      console.log("data : GetDataCompany");
      console.log(data);
      return new Response(JSON.stringify(data), {
        status: 201,
      });
    } else {
      return new Response(JSON.stringify({ message: "لا يوجد بيانات" }), {
        status: 400,
      });
    }
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
