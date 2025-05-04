// 🔍 3. فلترة / بحث
// فلترة الوظائف حسب الحالة (نشطة، منتهية، مسودة)

// بحث عن إعلان معين حسب الاسم أو القسم

// 📊 2. قائمة فرص التدريب المنشورة
// يمكنك عرض الوظائف في شكل cards أو table، وكل إعلان يعرض:

// تُعرض على شكل بطاقات (Cards) أو جدول (Table).

// كل فرصة تدريب تحتوي على:

// العنصر	مثال أو وصف
// 📌 العنوان	"تدريب مطور Frontend"
// 🏢 اسم القسم	"تطوير الويب - React.js"
// 📅 تاريخ النشر	"2025-04-19"
// ⏰ مدة التدريب	"3 أشهر"
// 🌍 نوع التدريب	حضوري / عن بعد / هجين
// 🧑‍🎓 عدد المتقدمين	"35"
// ✅ الحالة	نشط / منتهي
// ⚙️ العمليات	تعديل
// 📋 3. نموذج إنشاء/تعديل فرصة تدريب (Internship Form)
// الحقول الأساسية:

// الحقل	النوع
// 🧾 عنوان التدريب	نص
// 📝 وصف التدريب	Textarea
// 🧠 المهارات المطلوبة	Checkboxes أو tags
// 🕒 مدة التدريب	اختيار من 1 إلى 6 أشهر
// 🧑‍💻 نوع التدريب	حضوري / عن بعد / هجين
// 📅 تاريخ بدء التدريب	اختيار تاريخ
// 📅 تاريخ انتهاء التقديم	اختيار تاريخ
// 📥 ملف أو صورة غلاف	تحميل صورة (اختياري)

"use client";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Form_add_intershipe from "../comopnent/form_add_intershipe";
import InternshipCards from "./InternshipCards";
import { FaPlus } from "react-icons/fa6";
import { GetDataInterships } from "@/app/utils/GetDataInterships";

export default function JopIntership() {
  // Get Data With SWR

  const { data, error, isLoading } = GetDataInterships(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/GetAllDataIntership_Dahborde_Company`
  );
  const [filter, setFilter] = useState("All");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter internships based on selected filter
  // const filteredInternships = internships.filter((internship) => {
  //   if (filter === "All") return true;
  //   return internship.location === filter;
  // });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">
          Internship Opportunities
        </h1>
        <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          {/* Custom Filter Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none">
              Filter: {filter} ▼
            </button>
            {isFilterOpen && (
              <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200">
                <ul className="py-1">
                  <li
                    className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setFilter("All");
                      setIsFilterOpen(false);
                    }}>
                    All
                  </li>
                  <li
                    className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setFilter("Remote");
                      setIsFilterOpen(false);
                    }}>
                    Remote
                  </li>
                  <li
                    className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setFilter("In-office");
                      setIsFilterOpen(false);
                    }}>
                    In-office
                  </li>
                  <li
                    className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setFilter("Hybrid");
                      setIsFilterOpen(false);
                    }}>
                    Hybrid
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Add Internship Button */}
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="w-full flex items-center gap-2 sm:w-auto px-4  text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none">
            <FaPlus />
            New
          </button>
        </div>
      </div>

      {/* Internship Cards Grid */}
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredInternships.map((internship) => (
          <div
            key={internship.id}
            className="border border-gray-200 rounded-lg shadow-md overflow-hidden bg-white flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold">{internship.title}</h3>
            </div>
            <div className="p-4 flex-grow">
              <p className="text-sm text-gray-600 mb-4">
                {internship.description}
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Location:</span>
                  <span className="text-sm">{internship.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Duration:</span>
                  <span className="text-sm">{internship.duration}</span>
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-sm text-gray-500">
                    👥 {internship.applicants} applicants
                  </span>
                </div>
              </div>
            </div>
            <div className="p-4 border-t border-gray-200 flex justify-between">
              <button
                onClick={() => {
                  setEditingInternship(internship);
                  setIsEditModalOpen(true);
                }}
                className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none">
                ✏️ Edit
              </button>
              <button
                onClick={() => handleDeleteInternship(internship.id)}
                className="px-3 py-1 text-sm text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none">
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div> */}

      <InternshipCards DataCards={data} error={error} isLoading={isLoading} />

      {/* {filteredInternships.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No internship opportunities found.</p>
        </div>
      )} */}

      {/* Add Internship Modal */}
      {isAddModalOpen && (
        <div className="fixed   text-start inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white   rounded-lg shadow-lg max-w-md w-full">
            <div className="p-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Add New Internship</h2>
                {/* close Btn  */}
                <button
                  onClick={() => setIsAddModalOpen(false)}
                  className="text-gray-500 p-2 rounded-full hover:bg-gray-200 focus:outline-none">
                  <IoMdClose />
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Fill in the details for the new internship opportunity.
              </p>
            </div>

            <Form_add_intershipe
              isAddModalOpen={isAddModalOpen}
              setIsAddModalOpen={setIsAddModalOpen}
            />
          </div>
        </div>
      )}
    </div>
  );
}
