import React from "react";
import Heding from "../Heding/Heding";
import {
  FaBusinessTime,
  FaCode,
  FaQuidditch,
  FaDigitalTachograph,
} from "react-icons/fa";
import { MdDesignServices, MdOutlineWbIncandescent } from "react-icons/md";
import NavLink from "@/components/ui/NavLink";

// icosn form React icon
const categories = [
  {
    title: "Personal Development",
    icon: <FaCode />,
    description: "Enhance your skills and grow professionally",
  },
  {
    title: "Business Management",
    icon: <FaBusinessTime />,
    description: "Learn essential business and management skills",
  },
  {
    title: "Arts & Design",
    icon: <MdDesignServices />,
    description: "Express creativity through various art forms",
  },
  {
    title: "UI/UX Design",
    icon: <FaQuidditch />,
    description: "Create beautiful and functional user interfaces",
  },
  {
    title: "Graphic Design",
    icon: <MdOutlineWbIncandescent />,
    description: "Master visual communication and design",
  },
  {
    title: "Digital Marketing",
    icon: <FaDigitalTachograph />,
    description: "Learn modern marketing strategies and tools",
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
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Find your perfect internship opportunity and start your professional
          journey today.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 p-4 hover:bg-gray-50 transition-colors duration-300 shadow-sm rounded-lg border border-gray-200 cursor-default">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center">
                {cat.icon}
              </div>
              <span className="font-semibold text-gray-700">{cat.title}</span>
            </div>
            <p className="text-sm text-gray-500 pl-14">{cat.description}</p>
          </div>
        ))}
      </div>
      <NavLink
        href="/Explore"
        className="text-white m-auto text-center w-fit block mt-4 bg-gray-800 hover:bg-gray-600 active:bg-gray-900">
        Explore
      </NavLink>
    </section>
  );
}
