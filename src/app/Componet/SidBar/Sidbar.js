"use client";
import Link from "next/link";
import {
  FaBolt,
  FaHandHolding,
  FaSignOutAlt,
  FaUserCircle,
} from "react-icons/fa";
import { usePathname } from "next/navigation";
import { PiBagSimpleFill } from "react-icons/pi";
import { MdSpaceDashboard } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import SinOutBtn from "../btn/SinOutBtn";

const Sidbar = ({ toggleSidebar, isSidebarOpen }) => {
  // This use for get the current pathname to check if the current pathname is active
  const pathname = usePathname();
  return (
    <aside className="min-w-64 h-full top-0 bg-white shadow-md">
      <div className="pt-5 pb-5 relative bg-blue-100">
        {/* Close Button - Hidden on md and up screens */}
        {isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="md:hidden absolute top-4 right-4 p-2 hover:bg-blue-200 rounded-full transition-colors">
            <IoClose className="w-5 h-5 text-gray-600" />
          </button>
        )}

        <div className="w-10 h-10 m-auto text-center rounded-full bg-gradient-to-r from-purple-600 to-blue-500 flex items-center justify-center">
          <FaBolt className="w-6 h-6 text-white" />
        </div>
        {/* Info  */}
        <div className="flex justify-center text-center mb-3 items-center space-x-2">
          <div>
            <p className="font-semibold text-sm text-black relative">
              Compnay{" "}
            </p>
            <p className="text-xs text-gray-400"></p>
          </div>
        </div>
      </div>

      <ul className="space-y-4 text-gray-700 ml-3 font-semibold p-2 top-5 relative">
        <Link href={"/Dahborde_company/Dahborde"}>
          <li
            className={` ${
              pathname === "/Dahborde_company/Dahborde" ? "bg-gray-100" : ""
            } hover:bg-gray-100 py-2 w-full p-2 px-2 rounded flex gap-3`}>
            <MdSpaceDashboard size={20} /> Dashboard
          </li>
        </Link>
        <Link href={`/Dahborde_company/JopIntership`}>
          <li
            className={` ${
              pathname === "/Dahborde_company/JopIntership" ? "bg-gray-100" : ""
            } hover:bg-gray-100 py-2 w-full p-2 px-2 rounded flex gap-3`}>
            <PiBagSimpleFill size={20} /> Internships
          </li>
        </Link>
        <Link href={"/Dahborde_company/Application"}>
          <li
            className={` ${
              pathname === "/Dahborde_company/Application" ? "bg-gray-100" : ""
            } hover:bg-gray-100 py-2 w-full p-2 px-2 rounded flex gap-3`}>
            <FaHandHolding size={20} /> Application
          </li>
        </Link>
        <div className="mt-6 px-4">
          <div className={"h-px bg-gray-200 my-2"}></div>
        </div>
        {/* <Link href={"/"}>
          <li
            className={` ${
              pathname === "/Dahborde_company/Settings" ? "bg-gray-100" : ""
            } hover:bg-gray-100 py-2 w-full p-2 px-2 rounded flex gap-3`}>
            <IoIosSettings size={20} /> Settings
          </li>
        </Link> */}
        {/* <Link href={"/"}>
          <li
            className={` ${
              pathname === "/Dahborde_company/Profile" ? "bg-gray-100" : ""
            } hover:bg-gray-100 py-2 w-full p-2 px-2 rounded flex gap-3`}>
            <FaUserCircle size={20} /> Profile
          </li>
        </Link> */}

        <li className="hover:bg-gray-100 py-2 w-full p-2 px-2 rounded flex items-center gap-1">
          <FaSignOutAlt size={20} />
          <SinOutBtn />
        </li>
      </ul>
    </aside>
  );
};

export default Sidbar;
