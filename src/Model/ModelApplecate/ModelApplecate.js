const { default: mongoose } = require("mongoose");

// الطلبات
const applicationSchema = new mongoose.Schema(
  {
    internshipID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Internship",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "Rejected", "Accepted"],
      default: "pending",
    },
    cvUrl: {
      url: String,
      uuid: String,
    },
    phone: {
      type: Number,
      require: true,
    },
    LinksSoch: {
      linkedin: String,
      github: String,
    },
  },
  { timestamps: true }
);

module.exports =
  mongoose.models.application ||
  mongoose.model("Application", applicationSchema);
