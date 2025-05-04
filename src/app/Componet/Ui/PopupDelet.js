"use client";
import { IoWarningOutline } from "react-icons/io5";
import Spinner from "../spinnerUi/spinner";
const PopupDelet = ({
  setIsDeletModalOpen,
  handleDeletInternship,
  IsshowSpinner,
}) => {
  return (
    <div className="flex items-center justify-center  ">
      <div className="rounded-xl bg-white shadow-md p-6 ">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0">
            {/* Replace with actual image/icon if needed */}
            <div className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center">
              <IoWarningOutline className="w-7 h-7" />
            </div>
          </div>
          <div>
            <h2 className="font-bold text-gray-900">Warning!</h2>
            <p className="text-base text-gray-600 mt-1">
              You will lose all of your data by deleting this. <br />
              This action cannot be undone.
            </p>
            <div className="mt-4 flex justify-end gap-2">
              <button
                onClick={() => setIsDeletModalOpen(false)}
                className="px-4 py-2  font-semibold rounded-md bg-gray-100 text-gray-800 hover:bg-gray-200">
                Cancel
              </button>
              <button
                onClick={() => handleDeletInternship()}
                className="px-4 py-2  font-semibold rounded-md bg-red-500/70 text-white hover:bg-red-600">
                {IsshowSpinner ? <Spinner /> : "Yes,Delet"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupDelet;
