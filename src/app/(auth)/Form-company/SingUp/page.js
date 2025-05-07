import Image from "next/image";
import SingUp from "./SingUp";
import IntersipImage from "@/public/Intershipe/Intership.jpg";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
export default function page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="bg-black/20 w-full h-screen hidden md:block ">
        <Image className="w-full h-full" src={IntersipImage} alt="Intership" />
        {/* Text  */}
      </div>
      <div className="pr-4 pl-4 pb-4  h-screen overflow-y-scroll">
        <div className="bg-white  shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gray-800 p-6">
            <h2 className="text-2xl font-bold text-white">تسجيل الشركات</h2>
            <p className="text-gray-300 mt-2">
              Create your company account to get started
            </p>
          </div>
          <SingUp />
        </div>
        <div className="flex items-center m-auto text-center mt-4 justify-center gap-2">
          <Link href={"/Form-company/Login"} className="text-center  text-sm">
            Login company{" "}
          </Link>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
}
