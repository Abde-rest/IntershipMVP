import dbConnect from "@/lib/Dbconnect";
import bcrypt from "bcryptjs";
import User from "@/Model/ModelUser/ModelUser";

// ماهي الفكرة التي يطبقونها بعد التسجيل اي كيف يعطي الجلسة

// Problem Her =>  How can Validtion Email ? Is Rialty ?
// adpter MongoDb  => لتحزين الجلسة
export async function POST(req) {
  // logic SingUp
  let {
    Full_name,
    email,
    password,
    //   Rols,
  } = await req.json();
  //  // التحقق من البيانات
  if (!Full_name || !email || !password) {
    return new Response(
      JSON.stringify({ message: "تأكد من ارسال البيانات رجاء " }),
      {
        status: 400,
      }
    );
  }

  try {
    await dbConnect();

    // Find Email
    let checkUser = await User.findOne({ email: email });

    if (checkUser) {
      console.log(" :  تم ايجاد المستخدم ");
      console.log(checkUser);
      return new Response(JSON.stringify({ message: "الحساب موجود بالفعل " }), {
        status: 400,
      });
    }
    // bcrypt The password
    // التشفير احادي الاتجاه لايمكن فك تشفيره
    const hashedPassword = await bcrypt.hash(password, 10);

    // add User In dataBase
    await User.create({
      Full_name: Full_name,
      email: email,
      password: hashedPassword,
    });

    return new Response(JSON.stringify({ message: "تم أنشاء الحساب بنجاج " }), {
      status: 201,
    });

    // إعادة التوجيه إلى صفحة لوحة التحكم
    // return res.redirect(`/Dashboard_company/${company._id}`);
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
