"use client";
import Spinner from "@/app/Componet/spinnerUi/spinner";
import handleAction from "@/app/utils/Action_Dah_company_Applction";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Reject_Application = ({ idapplication }) => {
  const [SpinnerShow, setSpinner] = useState(false);
  return (
    <button
      onClick={() => {
        setSpinner(true);
        handleAction({
          id: idapplication,
          status: "Rejected",
        });
      }}
      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md flex items-center">
      {SpinnerShow ? (
        <Spinner />
      ) : (
        <div className="flex items-center gap-1">
          <FaTimes className="mr-1" />
          Rejected
        </div>
      )}
    </button>
  );
};

export default Reject_Application;
