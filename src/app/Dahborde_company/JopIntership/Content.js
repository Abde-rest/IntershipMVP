"use client";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import Form_add_intershipe from "../comopnent/form_add_intershipe";
import InternshipCards from "./InternshipCards";
import { FaPlus } from "react-icons/fa6";
import { GetDataInterships } from "@/app/utils/GetDataInterships";
import DescptionPage from "../comopnent/DescptionPage";

export default function JopIntership() {
  // Get Data With SWR

  const { data, error, isLoading } = GetDataInterships(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/GetAllDataIntership_Dahborde_Company`
  );
  const [filter, setFilter] = useState("All");
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold mb-4 sm:mb-0">
            Internship Opportunities
          </h1>
          <DescptionPage text="This page displays all internship opportunities available for users to apply to." />
        </div>
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
            className="w-full flex items-center gap-2 sm:w-auto px-4 py-2  justify-center text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none">
            <FaPlus />
            New
          </button>
        </div>
      </div>

      <InternshipCards DataCards={data} error={error} isLoading={isLoading} />

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
