"use client";
import Image from "next/image";
import { FaFonticons, FaRegCaretSquareLeft } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const HerdaerDah = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <div>
      {/* Header */}

      <div className="flex justify-between h-full items-center  p-3">
        <div className="flex items-center gap-3">
          <button
            onClick={toggleSidebar}
            className="p-2 hover:bg-slate-200 rounded-md cursor-pointer transition-colors">
            {isSidebarOpen ? (
              <IoClose className="w-5 h-5" />
            ) : (
              <TiThMenu className="w-5 h-5" />
            )}
          </button>
          <div className="relative flex items-center">
            <div className="absolute pl-2">
              <IoSearchOutline className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search projects"
              className="pr-4 py-2 rounded-md border text-sm pl-8"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hover:bg-slate-200 rounded-full    cursor-pointer p-2">
            <MdOutlineNotificationsNone className="w-5 h-5" />
          </div>
          <div className="w-9 h-9 shadow-md bg-slate-300 rounded-full"></div>
          {/* <Image
            className="w-9 h-9 shadow-md bg-slate-300 rounded-full"
            src={""}
            alt="Profila"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default HerdaerDah;
