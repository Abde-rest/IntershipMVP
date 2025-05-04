"use client";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import Spinner from "@/app/Componet/spinnerUi/spinner";

import { useRouter } from "next/navigation";

// Problem Her Logic Validtion Email and Password  Is Not Her
const Login = () => {
  // const router = useRouter();
  // const session = useSession();
  let router = useRouter();
  // Eyes password
  let [isShow, setisShow] = useState(false);
  let [SpinnerisShow, setSpinnerisShow] = useState(false);
  // resulte  is Login message
  let [MessageIflogin, setMessageIflogin] = useState({
    message: null,
    statusMesage: null,
  });
  // login Fetch to api  router
  let [DataUserLogin, setDataUserLogin] = useState({
    email: "",
    password: "",
  });
  async function HandelLogin(e) {
    e.preventDefault();
    setSpinnerisShow(true);

    const result = await signIn("credentials", {
      email: DataUserLogin.email,
      password: DataUserLogin.password,
      userType: "user",
      redirect: false, // اذا كانت true
      // وحدث خطاء راح يحولك الى صفحة الخطاء
      // callbackUrl: "/Explore",
    });

    if (result.ok) {
      // Her Your Add The Message State
      setMessageIflogin({
        message: "... تم تسجيل الدخول بنجاح جاري تحويلك",
        statusMesage: true,
      });
      setSpinnerisShow(false);
      router.push("/Explore");
    } else {
      // Her Your Add The Message State
      setMessageIflogin({
        message: result.error,
        // message: result.message,
        statusMesage: false,
      });
      setSpinnerisShow(false);
    }
  }
  return (
    <form onSubmit={(e) => HandelLogin(e)}>
      {MessageIflogin.statusMesage === true && (
        <div className="text-center text-xs bg-Suscces p-2 mt-1 rounded-sm">
          <p> ... {MessageIflogin.message} جاري تحويلك </p>
        </div>
      )}
      {MessageIflogin.statusMesage === false && (
        <div className="text-center text-xs bg-red-400 p-2  mt-1 rounded-sm">
          {MessageIflogin.message}
        </div>
      )}

      {/* Name  */}
      <label
        htmlFor="website-admin"
        className="block mb-2 mt-4   text-[#334457] text-right">
        البريد الالكتروني
      </label>
      <div className="flex mb-3  ">
        <input
          type="email"
          dir="rtl"
          onChange={(e) =>
            setDataUserLogin({
              ...DataUserLogin,
              email: e.target.value,
            })
          }
          name="emailUser"
          required
          className="outline-none text-right rtl  placeholder:text-black/40 border-black/50 border-2 border-r-0 rounded-l-md   block flex-1 min-w-0 w-full text-sm p-2.5 bg-primary"
          placeholder="example@gmail.com"
        />
        <span className="inline-flex items-center px-3 text-sm  border-black/50 border-2 border-l-0   rounded-r-lg  bg-primaryV2 ">
          <svg
            className="w-4 h-4 text-black "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
          </svg>
        </span>
      </div>

      {/* Password  */}
      <label
        htmlFor="website-admin"
        className="block mb-2 text-[#334457] text-right ">
        كلمة السر
      </label>
      <div className="flex mb-3 relative ">
        <div className="w-full">
          {isShow ? (
            <div
              onClick={() => setisShow(!isShow)}
              className=" p-1 absolute w-6 h-6 top-1/2 -translate-y-1/2 left-3 cursor-pointer rounded-full flex items-center justify-center">
              <svg
                className=" "
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.42012 12.7132C2.28394 12.4975 2.21584 12.3897 2.17772 12.2234C2.14909 12.0985 2.14909 11.9015 2.17772 11.7766C2.21584 11.6103 2.28394 11.5025 2.42012 11.2868C3.54553 9.50484 6.8954 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7766C21.8517 11.9015 21.8517 12.0985 21.8231 12.2234C21.785 12.3897 21.7169 12.4975 21.5807 12.7132C20.4553 14.4952 17.1054 19 12.0004 19C6.8954 19 3.54553 14.4952 2.42012 12.7132Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.0004 15C13.6573 15 15.0004 13.6569 15.0004 12C15.0004 10.3431 13.6573 9 12.0004 9C10.3435 9 9.0004 10.3431 9.0004 12C9.0004 13.6569 10.3435 15 12.0004 15Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          ) : (
            <div
              onClick={() => setisShow(!isShow)}
              className="hover:bg-black/20 p-1 absolute w-6 h-6 top-1/2 -translate-y-1/2 left-3 cursor-pointer rounded-full flex items-center justify-center">
              <svg
                className=" "
                aria-hidden="true"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10.7429 5.09232C11.1494 5.03223 11.5686 5 12.0004 5C17.1054 5 20.4553 9.50484 21.5807 11.2868C21.7169 11.5025 21.785 11.6103 21.8231 11.7767C21.8518 11.9016 21.8517 12.0987 21.8231 12.2236C21.7849 12.3899 21.7164 12.4985 21.5792 12.7156C21.2793 13.1901 20.8222 13.8571 20.2165 14.5805M6.72432 6.71504C4.56225 8.1817 3.09445 10.2194 2.42111 11.2853C2.28428 11.5019 2.21587 11.6102 2.17774 11.7765C2.1491 11.9014 2.14909 12.0984 2.17771 12.2234C2.21583 12.3897 2.28393 12.4975 2.42013 12.7132C3.54554 14.4952 6.89541 19 12.0004 19C14.0588 19 15.8319 18.2676 17.2888 17.2766M3.00042 3L21.0004 21M9.8791 9.87868C9.3362 10.4216 9.00042 11.1716 9.00042 12C9.00042 13.6569 10.3436 15 12.0004 15C12.8288 15 13.5788 14.6642 14.1217 14.1213"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
          <input
            type={isShow ? "text" : "password"}
            dir="rtl"
            onChange={(e) =>
              setDataUserLogin({
                ...DataUserLogin,
                password: e.target.value,
              })
            }
            name="PasswordUser"
            required
            className="outline-none text-right rtl pl-10  placeholder:text-black/40 border-black border-2 border-r-0 rounded-l-md   block flex-1 min-w-0 w-full text-sm p-2.5 bg-primary"
            placeholder="***********"
          />
        </div>

        <span className="inline-flex items-center px-3 text-sm  border-black/50 border-2 border-l-0   rounded-r-lg  bg-primaryV2 ">
          <svg
            className="w-4 h-4 text-black "
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17 8.99994C17 8.48812 16.8047 7.9763 16.4142 7.58579C16.0237 7.19526 15.5118 7 15 7M15 15C18.3137 15 21 12.3137 21 9C21 5.68629 18.3137 3 15 3C11.6863 3 9 5.68629 9 9C9 9.27368 9.01832 9.54308 9.05381 9.80704C9.11218 10.2412 9.14136 10.4583 9.12172 10.5956C9.10125 10.7387 9.0752 10.8157 9.00469 10.9419C8.937 11.063 8.81771 11.1823 8.57913 11.4209L3.46863 16.5314C3.29568 16.7043 3.2092 16.7908 3.14736 16.8917C3.09253 16.9812 3.05213 17.0787 3.02763 17.1808C3 17.2959 3 17.4182 3 17.6627V19.4C3 19.9601 3 20.2401 3.10899 20.454C3.20487 20.6422 3.35785 20.7951 3.54601 20.891C3.75992 21 4.03995 21 4.6 21H7V19H9V17H11L12.5791 15.4209C12.8177 15.1823 12.937 15.063 13.0581 14.9953C13.1843 14.9248 13.2613 14.8987 13.4044 14.8783C13.5417 14.8586 13.7588 14.8878 14.193 14.9462C14.4569 14.9817 14.7263 15 15 15Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>

      <button
        type="submit"
        // className="  py-2 px-4 rounded-md  cursor-pointer  block mt-6 mb-0 bg-primaryV2 hover:bg-primaryV2/80"
        className="w-full  bg-primaryV2 text-black py-2 mt-3 rounded-md hover:bg-primaryV2/80">
        {SpinnerisShow ? (
          <Spinner className={"w-4 h-4"} />
        ) : (
          <div className="rounded"> تسجيل الدخول</div>
        )}
      </button>

      <div className="text-center text-sm text-[#33445799] mt-5">
        ليس لديك حساب ؟
        <Link href="/SignUp" className="text-[#f7bc4b] hover:underline">
          أنشاء حساب
        </Link>
      </div>
    </form>
  );
};

export default Login;
