import Link from "next/link";
import React from "react";
import { VscGitStashApply } from "react-icons/vsc";

const ApplyButton = ({ id }) => {
  return (
    <Link
      href={`/Explore/apply/${id}`}
      className="px-4 flex w-full text-center justify-center m-auto items-center gap-2 py-2 bg-[#a855f5] text-white rounded-md hover:bg-[#a855f5]/80 transition-colors">
      <div className="flex items-center gap-2 shadow-md">
        <VscGitStashApply />
        Apply
      </div>
    </Link>
  );
};

export default ApplyButton;
