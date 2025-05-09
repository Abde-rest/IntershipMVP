// "This compoemt is client "
import { navigation } from "@/Data/ListWilaya";
import Link from "next/link";
import BtnCloseMenuPhone from "./BtnCloseMenuPhone";
import { useSession } from "next-auth/react";
import NavLink from "@/components/ui/NavLink";
import { FaArrowRight, FaSignOutAlt } from "react-icons/fa";
import Spinner from "../../spinnerUi/spinner";
import SinOutBtn from "../../btn/SinOutBtn";

const MenuPhone = ({ setOpenMenu, OpenMenu }) => {
  const { data, status } = useSession();
  const user = data?.user;
  console.log(user);
  return (
    <div
      className={` top-0 text-center right-0 w-full z-50  ${
        OpenMenu ? "fixed" : "hidden"
      }`}>
      <BtnCloseMenuPhone setOpenMenu={setOpenMenu} />
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
          {status === "loading" ? (
            <div>
              <Spinner />
            </div>
          ) : (
            <li>
              {status === "authenticated" ? (
                <>
                  <NavLink
                    href={`${
                      user.role === "user"
                        ? "/Dahborde_user"
                        : "/Dahborde_company/JopIntership"
                    }`}
                    className="font-medium flex items-center gap-2 text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 ">
                    Dahborde
                    <FaArrowRight />
                  </NavLink>
                  <div className="flex items-center justify-between gap-2 mt-2 w-full p-2  rounded-md bg-red-400  text-white">
                    <SinOutBtn />
                    <FaSignOutAlt size={20} />
                  </div>
                </>
              ) : (
                <>
                  {" "}
                  <NavLink
                    href="/Form-company/SingUp"
                    className=" font-medium flex  mb-2 hover:bg-slate-100 items-center gap-2 text-sm text-black ">
                    SingUp Company
                    <FaArrowRight />
                  </NavLink>
                  <NavLink
                    href="/SignUp"
                    className="block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 md:inline">
                    SingUp
                  </NavLink>
                </>
              )}
            </li>
          )}
        </div>
      </ul>
    </div>
  );
};

export default MenuPhone;
