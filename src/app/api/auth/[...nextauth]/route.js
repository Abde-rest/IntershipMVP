import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "@/lib/Dbconnect";
import User from "@/Model/ModelUser/ModelUser";
import bcrypt from "bcryptjs";
import Company from "@/Model/ModelCompany/ModelCompany";
// import { MongoDBAdapter } from "@auth/mongodb-adapter";
// import clientPromise from "@/lib/mongodb";
// Where Is Adapter MongoDb
// Ther is Problem Her

export let authoption = {
  // adapter: MongoDBAdapter(clientPromise), // لحفظ ظمستخدم Google
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        try {
          await dbConnect();
          const { email, password, userType } = credentials;

          if (userType === "company") {
            const company = await Company.findOne({ email });
            if (!company) {
              throw new Error("حساب الشركة غير موجود ! رجاء انشئ حساب");
            }

            const isValidPasswordCompany = await bcrypt.compare(
              password,
              company.password
            );

            if (!isValidPasswordCompany) {
              throw new Error("كلمة المرور غير صحيحة");
            }

            return {
              id: company._id.toString(),
              name: company.company_name,
              email: company.email,
              image: company.logo,
              role: company.role,
            };
          }

          const user = await User.findOne({ email });
          if (!user) {
            throw new Error("الحساب غير موجود !! رجاء أنشئ حساب");
          }

          const isValidPassword = await bcrypt.compare(password, user.password);
          if (!isValidPassword) {
            throw new Error("كلمة المرور غير صحيحة");
          }

          return {
            id: user._id.toString(),
            name: user.Full_name,
            email: user.email,
            image: user.logo,
            role: user.role,
          };
        } catch (error) {
          console.error("Authentication error:", error);
          throw error;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "select_account",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // الجلسة تستمر لمدة 30 يومًا
  },
  callbacks: {
    async signIn({ user, account }) {
      try {
        // إذا كان تسجيل الدخول عبر Google
        if (account?.provider === "google" && user) {
          await dbConnect();
          // التحقق مما إذا كان المستخدم موجودًا
          let existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            // إنشاء مستخدم جديد
            existingUser = await User.create({
              Full_name: user.name,
              email: user.email,
              profile_image: user.image,
              role: "user",
              // يمكنك إضافة حقول افتراضية أخرى إذا لزم الأمر
              createdAt: new Date(),
            });
          }

          // تحديث بيانات المستخدم لتتضمن id وrole
          user.id = existingUser._id.toString();
          user.role = existingUser.role;
        }
        return true; // السماح بتسجيل الدخول
      } catch (er) {
        console.error("Error in signIn callback:", er);
        return false; // رفض تسجيل الدخول إذا حدث خطأ
      }
    },
    async jwt({ token, user }) {
      // عند تسجيل الدخول لأول مرة
      if (user) {
        token.id = user.id;
        token.role = user.role; // 👈 تخزين الدور داخل التوكن
      }

      return token;
    },
    async session({ session, token }) {
      // لااعرف لماذا لم تنشئ عند الشركات

      session.user.id = token.id;
      session.user.role = token.role;

      return session;
    },
  },
};

const handler = NextAuth(authoption);

export { handler as GET, handler as POST };
