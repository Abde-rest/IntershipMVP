"use client";
import Image from "next/image";
import IntersipImage from "@/public/Intershipe/Intership.jpg";
import Login from "./Login";
import { SessionProvider } from "next-auth/react";
import Link from "next/link";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
export default function page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-black/20 w-full h-screen hidden md:block ">
        <Image className="w-full h-full" src={IntersipImage} alt="Intership" />
        {/* Text  */}
      </div>
      <div className="pr-4 pl-4 pb-4   h-screen overflow-y-scroll">
        <div className="bg-white  shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gray-800 p-6">
            <h2 className="text-2xl font-bold text-white">
              تسجيل الدخول الشركات
            </h2>

            <p className="text-gray-300 mt-2">
              Create your company account to get started
            </p>
          </div>
          <SessionProvider>
            <Login />
          </SessionProvider>
        </div>
        <div className="flex items-center m-auto text-center mt-4 justify-center gap-2">
          <Link href={"/Form-company/SingUp"} className="text-center  text-sm">
            SingUp company{" "}
          </Link>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
}
