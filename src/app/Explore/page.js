"use client";
import ContentExplore from "./Content";
import {
  FaBullhorn,
  FaStar,
  FaGraduationCap,
  FaLaptopCode,
  FaUsers,
  FaTrophy,
  FaBriefcase,
  FaRocket,
  FaLightbulb,
  FaCode,
  FaTimes,
  FaChevronLeft,
} from "react-icons/fa";
import { useState } from "react";

const Page = () => {
  const [isAdsOpen, setIsAdsOpen] = useState(false);

  const advertisements = [
    {
      title: "فرص تدريب مميزة",
      description: "انضم إلى برنامج التدريب الصيفي مع كبرى الشركات",
      icon: <FaStar className="text-yellow-500" />,
      urgent: true,
    },
    {
      title: "ورشة عمل مجانية",
      description: "تعلم أساسيات التطوير الويب مع خبراء الصناعة",
      icon: <FaLaptopCode className="text-blue-500" />,
      urgent: false,
    },
    {
      title: "منحة تدريبية",
      description: "فرصة للحصول على تدريب مدفوع في مجال الذكاء الاصطناعي",
      icon: <FaGraduationCap className="text-green-500" />,
      urgent: true,
    },
    {
      title: "مسابقة برمجية",
      description: "شارك في مسابقة البرمجة السنوية واربح جوائز قيمة",
      icon: <FaTrophy className="text-purple-500" />,
      urgent: true,
    },
    {
      title: "فرصة عمل مباشرة",
      description: "وظائف شاغرة للمطورين المبتدئين في شركات رائدة",
      icon: <FaBriefcase className="text-indigo-500" />,
      urgent: false,
    },
    {
      title: "معسكر تدريبي",
      description: "معسكر صيفي مكثف في مجال تطوير الويب",
      icon: <FaRocket className="text-orange-500" />,
      urgent: true,
    },
    {
      title: "برنامج تأهيلي",
      description: "برنامج تأهيل مهني للخريجين الجدد",
      icon: <FaLightbulb className="text-pink-500" />,
      urgent: false,
    },
    {
      title: "دورة متقدمة",
      description: "تعلم تطوير تطبيقات الموبايل مع أفضل المدربين",
      icon: <FaCode className="text-teal-500" />,
      urgent: true,
    },
    {
      title: "مجموعة دراسة",
      description: "انضم إلى مجموعة دراسة للتحضير لمقابلات العمل",
      icon: <FaUsers className="text-red-500" />,
      urgent: false,
    },
  ];

  return (
    <div>
      <div className="min-h-screen">
        {/* زر الإعلانات في الجانب الأيمن السفلي */}
        <button
          onClick={() => setIsAdsOpen(true)}
          className="fixed bottom-4 right-4 z-40 flex items-center gap-2 px-4 py-2  text-white rounded-full shadow-lg bg-[#a855f5] transition-colors">
          <FaBullhorn className="text-xl" />
          <span className="font-bold">الإعلانات</span>
        </button>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 gap-8">
            {/* القسم الرئيسي */}
            <div>
              <header className="mb-8">
                <h1 className="text-3xl font-bold mb-2">Explore Internships</h1>
                <p className="text-gray-600">
                  Find the perfect internship opportunity to kickstart your
                  career
                </p>
              </header>
              <ContentExplore />
            </div>
          </div>
        </div>

        {/* السايدبار */}
        <div
          className={`fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out z-50 ${
            isAdsOpen ? "translate-x-0" : "translate-x-full"
          }`}>
          {/* زر إغلاق السايدبار */}
          <button
            onClick={() => setIsAdsOpen(false)}
            className="absolute top-4 left-4 flex items-center gap-2 px-4 py-2 bg-[#a855f5] text-white rounded-full">
            <FaChevronLeft />
            <span>رجوع</span>
          </button>

          {/* محتوى الإعلانات */}
          <div className="h-full overflow-y-auto p-8 custom-scrollbar">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 flex items-center justify-end gap-2">
                <FaBullhorn className="text-[#a855f5]" />
                الإعلانات المميزة
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advertisements.map((ad, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">{ad.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-gray-900">
                            {ad.title}
                          </h3>
                          {ad.urgent && (
                            <span className="animate-pulse bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                              عاجل
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {ad.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ddd;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ccc;
        }
        @keyframes pulse {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Page;
