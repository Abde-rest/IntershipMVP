"use client";
import Image from "next/image";
import IntersipImage from "@/public/Intershipe/Intership.jpg";
import Login from "./Login";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import NavLink from "@/components/ui/NavLink";
export default function page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-black/20 w-full h-screen hidden md:block ">
        <Image className="w-full h-full" src={IntersipImage} alt="Intership" />
        {/* Text  */}
      </div>
      <div className="pr-4 pl-4 pb-4   h-screen overflow-y-scroll">
        <div className="bg-white  shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gray-800 p-4 md:p-6">
            <div className="flex items-center justify-between text-white">
              <h2 className=" text-xl md:text-2xl font-bold">تسجيل الدخول الشركات</h2>
              <NavLink
                href={"/Form-company/SingUp"}
                className="text-sm md:font-medium flex w-fit  hover:bg-slate-100 hover:text-black items-center  ">
                SingUp Company
                <FaArrowRight />
              </NavLink>
            </div>

            <p className="text-gray-300 mt-2 pr-5">
              Create your company account to get started
            </p>
          </div>
          <SessionProvider>
            <Login />
          </SessionProvider>
        </div>
      </div>
    </div>
  );
}
