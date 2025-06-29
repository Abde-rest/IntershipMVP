"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  FaArrowLeft,
  FaLinkedin,
  FaGithub,
  FaPhone,
  FaFileUpload,
  FaCheckCircle,
  FaTimes,
  FaFile,
  FaArrowRight,
  FaInfoCircle,
  FaLightbulb,
  FaUsers,
  FaGraduationCap,
  FaStar,
} from "react-icons/fa";
import SuccessModal from "../../Component/Modal/SuccessModal";
import "@uploadcare/react-uploader/core.css";
import { toast } from "react-toastify";

export default function ApplyPage({ id, data }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const [formErrors, setFormErrors] = useState({});

  const fileInputRef = useRef(null);
  // File data
  const [cvFile, setcvFile] = useState();
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [fileType, setFileType] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    phone: "",
    linkedin: "",
    github: "",
  });

  // Simulate upload progress when a file is selected
  useEffect(() => {
    if (isUploading && uploadProgress < 100) {
      const timer = setTimeout(() => {
        setUploadProgress((prevProgress) => {
          const newProgress = prevProgress + 5;
          if (newProgress >= 100) {
            setIsUploading(false);
            return 100;
          }
          return newProgress;
        });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [isUploading, uploadProgress]);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setFormErrors({ ...formErrors, cv: "File size should be less than 5MB" });
      setFileName("");
      setcvFile(null);

      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    // Format file size
    const fileSizeKB = file.size / 1024;
    const fileSizeMB = fileSizeKB / 1024;
    const formattedSize =
      fileSizeMB >= 1
        ? `${fileSizeMB.toFixed(2)} MB`
        : `${fileSizeKB.toFixed(2)} KB`;

    setFileName(file.name);
    setFileSize(formattedSize);
    setFileType(file.name.split(".").pop()?.toUpperCase() || "");
    setFormErrors({ ...formErrors, cv: undefined });
    setcvFile(e.target.files?.[0]);

    // Start upload simulation
    setUploadProgress(0);
    setIsUploading(true);
  };

  const removeFile = () => {
    setFileName("");
    setFileSize("");
    setFileType("");
    setUploadProgress(0);
    setIsUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: undefined,
      });
    }
  };

  const validateForm = () => {
    const errors = {};

    // Validate CV
    if (!fileName) {
      errors.cv = "Please upload your CV";
    }

    // Validate phone number (simple validation)
    if (!formData.phone) {
      errors.phone = "Phone number is required";
    } else if (
      !/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im.test(
        formData.phone
      )
    ) {
      errors.phone = "Please enter a valid phone number";
    }

    // Validate LinkedIn URL (if provided)
    if (formData.linkedin && !formData.linkedin.includes("linkedin.com/")) {
      errors.linkedin = "Please enter a valid LinkedIn URL";
    }

    // Validate GitHub URL (if provided)
    if (formData.github && !formData.github.includes("github.com/")) {
      errors.github = "Please enter a valid GitHub URL";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // In a real application, you would send the form data to your server
      const formDataToSend = new FormData();
      formDataToSend.append("cv", cvFile);
      formDataToSend.append("id", id);
      formDataToSend.append("companyId", data.companyID);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("linkedin", formData.linkedin);
      formDataToSend.append("github", formData.github);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/ApplyPage/apply`,
        {
          method: "POST",
          body: formDataToSend,
        }
      );
      const resulte = await response.json();

      if (response.ok) {
        setShowSuccessModal(true);
        toast.success(resulte.messgae, {
          pauseOnHover: false,
        });
      } else {
        toast.warn(resulte.messgae, {
          pauseOnHover: false,
        });
      }
    } catch (error) {
      toast.warn(
        "There was an error submitting your application. Please try again.",
        {
          pauseOnHover: false,
        }
      );
    } finally {
      // Notifaction
      setIsSubmitting(false);
    }
  };

  const benefits = [
    {
      icon: <FaUsers className="text-2xl text-[#a855f5]" />,
      title: "خبرة عملية",
      description: "اكتسب خبرة عملية في بيئة عمل حقيقية",
    },
    {
      icon: <FaGraduationCap className="text-2xl text-[#a855f5]" />,
      title: "تطوير المهارات",
      description: "تعلم مهارات جديدة وتطوير المهارات الحالية",
    },
    {
      icon: <FaStar className="text-2xl text-[#a855f5]" />,
      title: "فرص توظيف",
      description: "فرصة للتوظيف الدائم بعد انتهاء فترة التدريب",
    },
  ];

  const requirements = [
    "معرفة أساسية في مجال التخصص",
    "القدرة على العمل ضمن فريق",
    "مهارات تواصل جيدة",
    "الالتزام والموثوقية",
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="">
        <div className="container mx-auto px-4 md:px-6 border bg-primary py-6 border-gray-200 shadow rounded-md">
          <div className="flex items-center justify-between">
            <Link
              href="/Explore"
              className="flex items-center text-sm md:text-xl hover:text-black/50 transition-colors">
              <FaArrowLeft className="mr-2" />
              <span>Back to Internships</span>
            </Link>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold mt-4">
            Apply for {data.title}
          </h1>
          <p className="mt-2">
            {data.field} • {data.location}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 md:p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <FaFileUpload className="text-blue-600 text-xl" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">
                      Application Form
                    </h2>
                    <p className="text-gray-500">
                      Please complete the form below to apply
                    </p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* CV Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Upload CV <span className="text-red-500">*</span>
                    </label>

                    {!fileName ? (
                      // File upload button when no file is selected
                      <div className="mt-1">
                        <input
                          name="file"
                          type="file"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          className="sr-only"
                          required
                        />
                        <div
                          onClick={() => fileInputRef.current?.click()}
                          className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition-colors">
                          <FaFileUpload className="h-10 w-10 text-gray-400 mb-3" />
                          <p className="text-sm font-medium text-gray-700">
                            Click to upload your file
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            Any file type (Max. 5MB)
                          </p>
                        </div>
                      </div>
                    ) : (
                      // File preview when a file is selected
                      <div className="mt-1">
                        <div
                          className={`border border-gray-200 rounded-lg p-4 ${
                            isUploading || uploadProgress < 100
                              ? "bg-gray-50"
                              : "bg-green-50 border-green-200"
                          }`}>
                          <div className="flex items-start justify-between">
                            <div className="flex items-center">
                              <div
                                className={`${
                                  isUploading || uploadProgress < 100
                                    ? "bg-blue-100"
                                    : "bg-green-100"
                                } p-2 rounded-md mr-3`}>
                                <FaFile
                                  className={`h-6 w-6 ${
                                    isUploading || uploadProgress < 100
                                      ? "text-blue-600"
                                      : "text-green-600"
                                  }`}
                                />
                              </div>
                              <div>
                                <p className="text-sm font-medium text-gray-800 truncate max-w-[200px] md:max-w-md">
                                  {fileName}
                                </p>
                                <div className="flex items-center text-xs text-gray-500 mt-1">
                                  <span
                                    className={`${
                                      isUploading || uploadProgress < 100
                                        ? "bg-blue-100 text-blue-800"
                                        : "bg-green-100 text-green-800"
                                    } px-2 py-0.5 rounded-full text-xs font-medium mr-2`}>
                                    {fileType}
                                  </span>
                                  <span>{fileSize}</span>
                                  {uploadProgress === 100 && !isUploading && (
                                    <span className="ml-2 text-green-600 flex items-center">
                                      <FaCheckCircle className="h-3 w-3 mr-1" />{" "}
                                      Uploaded
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                            <button
                              type="button"
                              onClick={removeFile}
                              className="text-gray-400 hover:text-red-500 transition-colors"
                              aria-label="Remove file">
                              <FaTimes className="h-5 w-5" />
                            </button>
                          </div>

                          {/* Upload progress bar - only show when uploading */}
                          {(isUploading || uploadProgress < 100) && (
                            <div className="mt-3">
                              <div className="w-full bg-gray-200 rounded-full h-1.5">
                                <div
                                  className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
                                  style={{ width: `${uploadProgress}%` }}></div>
                              </div>
                              <div className="flex justify-between items-center mt-1">
                                <span className="text-xs text-gray-500">
                                  {isUploading
                                    ? "Uploading..."
                                    : uploadProgress < 100
                                    ? "Processing..."
                                    : ""}
                                </span>
                                <span className="text-xs text-gray-500">
                                  {uploadProgress}%
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {formErrors.cv && (
                      <p className="mt-1 text-sm text-red-600">
                        {formErrors.cv}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaPhone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-2 sm:text-sm border border-gray-300 rounded-md"
                        placeholder="+1 (555) 123-4567"
                        required
                      />
                    </div>
                    {formErrors.phone && (
                      <p className="mt-1 text-sm text-red-600">
                        {formErrors.phone}
                      </p>
                    )}
                  </div>

                  {/* LinkedIn Profile */}
                  <div>
                    <label
                      htmlFor="linkedin"
                      className="block text-sm font-medium text-gray-700 mb-1">
                      LinkedIn Profile (Optional)
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaLinkedin className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="url"
                        name="linkedin"
                        id="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-2 sm:text-sm border border-gray-300 rounded-md"
                        placeholder="https://linkedin.com/in/yourprofile"
                      />
                    </div>
                    {formErrors.linkedin && (
                      <p className="mt-1 text-sm text-red-600">
                        {formErrors.linkedin}
                      </p>
                    )}
                  </div>

                  {/* GitHub Profile */}
                  <div>
                    <label
                      htmlFor="github"
                      className="block text-sm font-medium text-gray-700 mb-1">
                      GitHub Profile (Optional)
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaGithub className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="url"
                        name="github"
                        id="github"
                        value={formData.github}
                        onChange={handleInputChange}
                        className="focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-3 py-2 sm:text-sm border border-gray-300 rounded-md"
                        placeholder="https://github.com/yourusername"
                      />
                    </div>
                    {formErrors.github && (
                      <p className="mt-1 text-sm text-red-600">
                        {formErrors.github}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}>
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24">
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        "Submit Application"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Requirements Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FaInfoCircle className="text-[#a855f5]" />
                المتطلبات
              </h3>
              <ul className="space-y-3">
                {requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits Section */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <FaLightbulb className="text-[#a855f5]" />
                مميزات التدريب
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1">{benefit.icon}</div>
                    <div>
                      <h4 className="font-medium text-gray-800">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">معلومات إضافية</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <p>• مدة التدريب: {data.duration}</p>
                <p>• نوع العمل: {data.mode}</p>
                <p>
                  • آخر موعد للتقديم:{" "}
                  {new Date(data.applicationDeadline).toLocaleDateString()}
                </p>
                <p>• سيتم مراجعة طلبك خلال 5-7 أيام عمل</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <SuccessModal
          setShowSuccessModal={setShowSuccessModal}
          btncontent={"Go to Dahborde"}
          href={"/"}
        />
      )}
    </main>
  );
}
