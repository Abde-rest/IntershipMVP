const mongoose = require("mongoose");

// create Shecma
const userSchema = new mongoose.Schema(
  {
    // Her Your Add The Photo or img User if your need that
    Full_name: {
      type: mongoose.Schema.Types.Mixed, // هنا نستخدم Mixed للسماح بأي نوع من البيانات
      required: true,
    },
    email: {
      type: mongoose.Schema.Types.Mixed, // هنا نستخدم Mixed للسماح بأي نوع من البيانات
      required: true,
      unique: true 
    },
    password: {
      type: mongoose.Schema.Types.Mixed, // هنا نستخدم Mixed للسماح بأي نوع من البيانات
      required: false,
      default: "Thsi Account SingIn With Google ",
    },
    role: {
      type: String,
      enum: ["user", "admin"], // القيم المسموح بها فقط
      default: "user",
      // اي مستخدم يسجل في الموقع تلقشائيا هو مستخدم
      // في حالة التسجيل من بوابة المستخدمين
    },
    profile_image: {
      type: String,
      required: false,
    },
    bio: {
      type: String,
      required: false,
      default: "انا شخص مهتم بالتعلم والبحث عن فرص جديدة ",
    },
    phone: {
      type: Number,
      required: false,
    },
    education_level: {
      type: String,
      required: false,
    },
    Skills: {
      type: [String],
      required: false,
    },
  },
  { timestamps: true } // يقوم بإضافة حقلين تلقائيًا لكل سجل douc
  // createdAt
  // updatedAt
);

let User;
try {
  User = mongoose.model("User");
} catch (error) {
  User = mongoose.model("User", userSchema);
}

module.exports = User;
