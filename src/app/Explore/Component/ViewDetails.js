import React from "react";
import { LuFileSearch } from "react-icons/lu";

const ViewDetails = ({
  internship,
  setisOpenModelVewi,
  setDataVewiIntership,
}) => {
  return (
    <button
      onClick={() => {
        setDataVewiIntership(internship);
        setisOpenModelVewi(true);
      }}
      className="px-4 flex gap-2 items-center py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
      <LuFileSearch />
      View Details
    </button>
  );
};

export default ViewDetails;
