"use client";

import { IoCloseSharp } from "react-icons/io5";

const BtnCloseMenuPhone = ({ setOpenMenu }) => {
  return (
    <div
      onClick={() => setOpenMenu(false)}
      className="p-1  cursor-pointer fixed border-black/20 border w-fit top-10 right-10 rounded-full">
      <IoCloseSharp size={25} />
    </div>
  );
};

export default BtnCloseMenuPhone;
