"use client";

import Spinner from "@/app/Componet/spinnerUi/spinner";
import handleAction from "@/app/utils/Action_Dah_company_Applction";
import { useState } from "react";

import { FaCheck } from "react-icons/fa";

const Accept_Application = ({ idapplication }) => {
  const [SpinnerShow, setSpinner] = useState(false);
  return (
    <button
      onClick={() => {
        setSpinner(true);
        handleAction({
          id: idapplication,
          status: "accepted",
        });
      }}
      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md flex items-center">
      {SpinnerShow ? (
        <Spinner />
      ) : (
        <div className="flex items-center gap-1">
          <FaCheck className="mr-1" />
          Accepted
        </div>
      )}
    </button>
  );
};

export default Accept_Application;
