// logo: { type: String ,defaulte :"lisnke form cloudniry " },
const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema(
  {
    company_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // لضمان عدم تكرار الشركات
    },
    password: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    phone: { type: String },
    NIF: { type: Number, required: true },
    RC: { type: Number, required: true },
    description: { type: String, required: true },
    location: {
      country: {
        type: String,
        default: "الجزائر ",
      },
      city: { type: String, required: true },
      address: { type: String, required: true },
    },
    field: {
      type: String,
      required: true, // مجال العمل مثلاً: تكنولوجيا، هندسة...
    },
    logo: { type: String },
    social: {
      linkedin: String,
      facebook: String,
      twitter: String,
    },
    employees: { type: Number }, // عدد الموضفين
    foundedYear: { type: Number }, //   // سنة التأسيس
    // rcNumber: { type: String, required: true, unique: true },   // رقم السجل التجاري
    // nif: { type: String, required: true, unique: true },         // الرقم الجبائي
    // nis: { type: String },                                       // اختياري
    // documents: { type: String }, // رابط لتحميل ملف (PDF/صورة) للسجل التجاري
    // isVerified: { type: Boolean, default: false }, // بعد المراجعة
    role: {
      type: String,
      default: "company", // لتحديد أن هذا المستخدم هو شركة
    },
  },
  { timestamps: true }
);

export default mongoose.models.Company ||
  mongoose.model("Company", CompanySchema);
