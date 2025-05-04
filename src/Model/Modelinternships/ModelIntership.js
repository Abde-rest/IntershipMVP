// models/Internship.js

///لو صعبت عليا دمج طلبات مع الفرصة التدريبية راح ادمجها
// applicants: [
//   {
//     user: ObjectId,
//     status: "قيد المراجعة",
//     appliedAt: Date,
//     ...
//   }
// ]
import mongoose from "mongoose";

const internshipSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    mode: {
      type: String,
      enum: ["Remote", "In-office", "Hybrid"],
      required: true,
    },
    field: {
      type: String,
      enum: [
        "Technology",
        "Engineering",
        "Design",
        "Marketing",
        "Finance",
        "Healthcare",
        "Education",
        "Other",
      ],
      required: true,
    },
    duration: { type: String, required: true }, // مدة التدريب
    companyID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    startDate: {
      //تاريخ بداية التدريب
      type: Date,
      required: true,
    },
    endDate: {
      // تاريخ نهاية التدريب
      type: Date,
      required: true,
    },
    // تاريخ اخر اجل للتسجيل
    applicationDeadline: {
      type: Date,
      require: false,
    },
    Applicants: {
      type: Number,
      default: 0,
    },
    // skillsRequired: ['HTML', 'CSS', 'JavaScript', 'React'],
    // stipend: '30,000 DZD / شهر',
  },
  { timestamps: true }
);

export default mongoose.models.Internship ||
  mongoose.model("Internship", internshipSchema);
