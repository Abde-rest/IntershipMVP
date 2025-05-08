import Link from "next/link";
import Brand from "../Brand";
import NavLink from "../NavLink";
import { FaArrowRight } from "react-icons/fa";
import MenuPhoneUi from "@/app/(auth)/Comopont/MenuPoneUi.js/MenuPhoneUi";
import { navigation } from "@/Data/ListWilaya";
import { getServerSession } from "next-auth";
import { authoption } from "@/app/api/auth/[...nextauth]/route";
import "@/app/globals.css";
const Navbar = async () => {
  const session = await getServerSession(authoption);
  const user = session?.user;
  // {
  //   name: 'عبد الباقي الأشهبي',
  //   email: 'abdethomes20048@gmail.com',
  //   image: 'https://lh3.googleusercontent.com/a/ACg8ocKCBqQ_I837viWtpExcojqEJrEDv_YiqjIyqYByJ4fBMMVXphgv=s96-c',
  //   id: '67ffe5757273016d637fa00d',
  //   role: 'user'  or Company


  return (
    <header className={`flex items-center justify-between px-5 `}>
      <nav className={` w-full  md:text-sm  `}>
        <div className="flex  justify-between items-center mx-auto md:flex">
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Brand />
            {/* <SinOutBtn /> */}
            <div className="md:hidden">
              <button
                role="button"
                aria-label="Open the menu"
                className="text-gray-500 hover:text-gray-800"></button>
            </div>
          </div>
          <div className={` pb-3 mt-8  hidden md:pb-0 md:mt-0 md:block `}>
            <ul className="text-gray-700 flex gap-2 items-center justify-end  md:flex   md:text-gray-600 md:font-medium">
              {navigation.map((item, idx) => {
                return (
                  <li key={idx} className="duration-150 hover:text-gray-900">
                    <Link href={item.path} className="block">
                      {item.title}
                    </Link>
                  </li>
                );
              })}

              <li className="flex gap-2">
                {!user ? (
                  <>
                    <NavLink
                      href="/Form-company/SingUp"
                      className=" font-medium flex  hover:bg-slate-100 items-center gap-2 text-sm text-black ">
                      SingUp Company
                      <FaArrowRight />
                    </NavLink>{" "}
                    <NavLink
                      href="/SignUp"
                      className="block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 md:inline">
                      SingUp
                    </NavLink>{" "}
                  </>
                ) : (
                  <NavLink
                    href={`${
                      user.role === "user"
                        ? "/Dahborde_user"
                        : "/Dahborde_company/JopIntership"
                    }`}
                    className=" font-medium flex  items-center gap-2 text-sm text-white

 bg-gray-800 hover:bg-gray-600 active:bg-gray-900 

">
                    Dahborde
                    <FaArrowRight />
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <MenuPhoneUi />
    </header>
  );
};

export default Navbar;
