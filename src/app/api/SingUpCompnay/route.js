import dbConnect from "@/lib/Dbconnect";
import ModelCompany from "@/Model/ModelCompany/ModelCompany";
import bcrypt from "bcryptjs";

// Save Logo in cloudinary
// Validet if logo amd phone is Found
// Validae the nIF AND Rc  is Realty ?
// استعمال نفس الايميل في كل من المستخدم والشركة مسموح به ؟
// Problem Her =>  How can Validtion Email ? Is Rialty ?
// adpter MongoDb  => لتحزين الجلسة
export async function POST(req) {
  //    logic SingUp
  let {
    company_name,
    NIF,
    RC,
    email,
    password,
    phone,
    description,
    city,
    address,
    field,
    logo,
  } = await req.json();
  //   //  // التحقق من البيانات
  if (
    // الحقول الحمراء في الطلب
    !company_name ||
    !NIF ||
    !RC ||
    !email ||
    !password ||
    !description ||
    !city ||
    !address ||
    !field
  ) {
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
    const checEmailCompany = await ModelCompany.findOne({ email: email });
    // Find NIF
    const checNIFCompany = await ModelCompany.findOne({ NIF: NIF });
    // Find RC
    const checRCCompany = await ModelCompany.findOne({ RC: RC });
    // Check Rc NIF And  Email
    if (checEmailCompany) {
      console.log(" :  تم ايجاد الشركة  ");
      return new Response(JSON.stringify({ message: "الحساب موجود بالفعل " }), {
        status: 400,
      });
    }
    if (checNIFCompany) {
      console.log(" :  تم ايجاد   nif الشركة  ");

      return new Response(JSON.stringify({ message: "الحساب موجود بالفعل " }), {
        status: 400,
      });
    }
    if (checRCCompany) {
      console.log(" :  تم ايجاد   Rc الشركة  ");
      return new Response(JSON.stringify({ message: "الحساب موجود بالفعل " }), {
        status: 400,
      });
    }
    // bcrypt The password
    const hashedPassword = await bcrypt.hash(password, 10);
    // add User In dataBase
    const DataCompany = await ModelCompany.create({
      company_name: company_name,
      email: email,
      password: hashedPassword,
      phone: phone, // Mybe not found
      NIF: NIF,
      RC: RC,
      description: description,
      location: {
        city: city,
        address: address,
      },
      field: field,
      logo: logo, // Mybe not found
    });
    return new Response(
      JSON.stringify({
        message: "تم أنشاء الحساب بنجاج ",
      }),
      {
        status: 201,
      }
    );
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
