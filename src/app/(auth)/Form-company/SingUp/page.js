import Image from "next/image";
import SingUp from "./SingUp";
import IntersipImage from "@/public/Intershipe/Intership.jpg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import NavLink from "@/components/ui/NavLink";
export default function page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-black/20 w-full h-screen hidden md:block ">
        <Image className="w-full h-full" src={IntersipImage} alt="Intership" />
        {/* Text  */}
      </div>
      <div className="pr-4 pl-4 pb-4  h-screen overflow-y-scroll">
        <div className="bg-white  shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gray-800 p-4 md:p-6">
           
            <div className="flex items-center justify-between  text-white">
              <h2 className="text-2xl font-bold ">تسجيل الشركات</h2>

              <NavLink
                href="/Form-company/Login"
                className=" text-sm md:font-medium flex  hover:bg-slate-100 hover:text-black items-center gap-2  ">
                SingIn Company
                <FaArrowRight />
              </NavLink>
            </div>
            <p className="text-gray-300 mt-2 pr-5">
              Create your company account to get started
            </p>
          </div>
          <SingUp />
        </div>
      </div>
    </div>
  );
}
