import Link from "next/link";
import React from "react";
import { VscGitStashApply } from "react-icons/vsc";

const ApplyButton = ({ id }) => {
  return (
    <Link
      href={`/Explore/apply/${id}`}
      className="px-4 flex w-full text-center m-auto items-center gap-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
      <VscGitStashApply />
      Apply
    </Link>
  );
};

export default ApplyButton;
