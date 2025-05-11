// logo: { type: String ,defaulte :"lisnke form cloudniry " },
import mongoose from "mongoose";

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
    logo: {
      type: String,
      default:
        "https://ucarecdn.com/4b7272ed-ce76-43e1-91ff-f7a1e34eb4da/user1.png",
    },

    social: {
      linkedin: String,
      facebook: String,
      twitter: String,
    },
    employees: { type: Number }, // عدد الموضفين
    foundedYear: { type: Number }, //   // سنة التأسيس

    role: {
      type: String,
      default: "company", // لتحديد أن هذا المستخدم هو شركة
    },
  },
  { timestamps: true }
);

// Check if the model exists before creating a new one
// let Company;
// try {
//   Company = mongoose.model("Company");
// } catch {
//   Company = mongoose.model("Company", CompanySchema);
// }
export default mongoose.models.Company ||
  mongoose.model("Company", CompanySchema);
