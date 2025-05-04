"use client";

import Spinner from "@/app/Componet/spinnerUi/spinner";

const Footer_Form_Add_Intership = ({ setIsAddModalOpen, IsshowSpinner }) => {
  return (
    <div className="p-4 border-t border-gray-200 flex justify-end space-x-2">
      <button
        onClick={() => setIsAddModalOpen(false)}
        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none">
        Cancel
      </button>

      <button className="px-4 cursor-pointer py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none">
        {IsshowSpinner ? <Spinner /> : "Send Internship"}
      </button>
    </div>
  );
};

export default Footer_Form_Add_Intership;
