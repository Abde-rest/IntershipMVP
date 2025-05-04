import React from "react";
import Heding from "../Heding/Heding";
import Link from "next/link";
import { FaBusinessTime, FaCode, FaQuidditch } from "react-icons/fa";
import Image from "next/image";
import { MdDesignServices, MdOutlineWbIncandescent } from "react-icons/md";
import NavLink from "@/components/ui/NavLink";

// icosn form React icon
const categories = [
  {
    title: "Personal Development",
    icon: <FaCode />,
  },
  {
    title: "Business Management",
    icon: <FaBusinessTime />,
  },
  { title: "Arts & Design", icon: <MdDesignServices /> },

  { title: "UI/UX Design", icon: <FaQuidditch /> },
  {
    title: "Graphic Design",
    icon: <MdOutlineWbIncandescent />,
  },
  // {
  //   title: "Digital Marketing",
  //   color: "bg-pink-200",
  //   icon: "/path/to/icon6.svg",
  // },
  // {
  //   title: "Exclusive man",
  //   color: "bg-indigo-100",
  //   icon: "/path/to/icon7.svg",
  // },
  // {
  //   title: "Product Design",
  //   color: "bg-orange-100",
  //   icon: "/path/to/icon8.svg",
  // },
  // {
  //   title: "Video & Photography",
  //   color: "bg-blue-100",
  //   icon: "/path/to/icon9.svg",
  // },
];

export default function CategoriesGrid() {
  return (
    <section className="py-10 px-4 mt-10">
      <div className="text-center mb-6">
        <Heding HedingProp={"Categories"} />
        <h2 className="text-3xl font-bold text-gray-800">
          Browse By Categories
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-,x-auto">
        {categories.map((cat, index) => (
          <Link
            href={"/"}
            key={index}
            className={`flex items-center gap-4 p-4 hover:${cat.color} duration-100   shadow-sm rounded-lg border border-black `}>
            <div
              className={`w-10 h-10 rounded-full border-2 border-current flex items-center justify-center }`}>
              {cat.icon}
            </div>
            <span className="font-semibold text-gray-700">{cat.title}</span>
          </Link>
        ))}
      </div>
      <NavLink
        href="/get-started"
        className="text-white m-auto text-center w-fit block mt-4 bg-gray-800 hover:bg-gray-600 active:bg-gray-900 ">
        Explore
      </NavLink>
    </section>
  );
}
