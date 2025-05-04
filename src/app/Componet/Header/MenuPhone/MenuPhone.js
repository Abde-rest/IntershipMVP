"use client";
import NavLink from "@/components/ui/NavLink";
import { navigation } from "@/Data/ListWilaya";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";

const MenuPhone = ({ setOpenMenu, OpenMenu }) => {
  return (
    <div
      className={` top-0 text-center right-0 w-full  ${
        OpenMenu ? "fixed" : "hidden"
      }`}>
      <div
        onClick={() => setOpenMenu(false)}
        className="p-1  cursor-pointer fixed border-black/20 border w-fit top-10 right-10 rounded-full">
        <IoCloseSharp size={25} />
      </div>
      <ul className="text-gray-700  gap-2 bg-white h-screen  flex items-center justify-center  md:text-gray-600 md:font-medium">
        <div>
          {" "}
          {navigation.map((item, idx) => {
            return (
              <li key={idx} className="duration-150 mb-3 hover:text-gray-900">
                <Link href={item.path} className="block">
                  {item.title}
                </Link>
              </li>
            );
          })}
          <li>
            <NavLink
              href="/Form-company/SingUp"
              className=" font-medium flex  mb-2 hover:bg-slate-100 items-center gap-2 text-sm text-black ">
              SingUp Company
              <FaArrowRight />
            </NavLink>{" "}
            <NavLink
              href="/SignUp"
              className="block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 md:inline">
              SingUp
            </NavLink>{" "}
          </li>
        </div>
      </ul>
    </div>
  );
};

export default MenuPhone;
