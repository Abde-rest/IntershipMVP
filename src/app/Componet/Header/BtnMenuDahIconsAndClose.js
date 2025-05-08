"use client";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

const BtnMenuDahIconsAndClose = ({ toggleSidebar, isSidebarOpen }) => {
  return (
    <button
      onClick={toggleSidebar}
      className="p-2 hover:bg-slate-200 rounded-md cursor-pointer transition-colors">
      {isSidebarOpen ? (
        <IoClose className="w-5 h-5" />
      ) : (
        <TiThMenu className="w-5 h-5" />
      )}
    </button>
  );
};

export default BtnMenuDahIconsAndClose;
