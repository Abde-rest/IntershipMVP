"use client";
import Link from "next/link";
import { useState } from "react";

import Image from "next/image";
import { signIn } from "next-auth/react";
import Spinner from "@/app/Componet/spinnerUi/spinner";

// Probem Her Validation Email Is not strong

const SingUp = () => {
  // Icons Eyes for password
  let [isShow, setisShow] = useState(false);
  let [SpinnerisShow, setSpinnerisShow] = useState(false);
  // SingUp Fetch to api  router

  // resulte  is SingUp message
  let [MessageIfSingUp, setMessageIfSingUp] = useState({
    message: null,
    statusMesage: null,
  });

  let [DataUserSingUp, setDataUserSingUp] = useState({
    Full_name: null,
    email: null,
    password: null,
  });

  // Eror Message validation
  const [errors, setErrors] = useState({
    Full_name: null,
    email: null,
    password: null,
  });
  // name
  const [SucessIconsname, setSucessIconsname] = useState();
  // Email
  const [SucessIconsemail, setSucessIconsEmail] = useState();
  // password
  const [SucessIconspassword, setSucessIconspassword] = useState();

  // دالة التحقق من صحة البيانات
  const validate = () => {
    const newErrors = { Full_name: null, email: null, password: null };

    // validet name just its  Found
    // and we are need the length > 5
    if (DataUserSingUp.Full_name) {
      setSucessIconsname(true);
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(DataUserSingUp.email)) {
      newErrors.email = "صيغة البريد الألكتروني غير صحيحة ";
      setSucessIconsEmail(false);
    } else {
      setSucessIconsEmail(true);
    }

    // validate password
    if (!/^.{8,}$/.test(DataUserSingUp.password)) {
      newErrors.password = "يجب أن تحتوي كلمة المرور على اكثر من  8  أحرف  .";
      setSucessIconspassword(false);
    } else {
      setSucessIconspassword(true);
    }
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  // إرسال البيانات إلى الخادم
  const HandelSingUp = async (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }
    setSpinnerisShow(true);

    const res = await fetch("/api/SingUpUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(DataUserSingUp),
    });

    const result = await res.json();

    if (res.ok) {
      setMessageIfSingUp({
        message: result.message,
        statusMesage: true,
      });
      setSpinnerisShow(false);

      // Login The User after SingUp
      // Beacuse Get the session

      await signIn("credentials", {
        email: DataUserSingUp.email,
        password: DataUserSingUp.password,
        userType: "user",
        
        redirect: true, //  إعادة التوجيه التلقائي
        callbackUrl: "/Explore", // وجهة إعادة التوجيه الى صفحة explore
      });
    } else {
      setMessageIfSingUp({
        message: result.message,
        statusMesage: false,
      });
      setSpinnerisShow(false);
      console.log("  هناك مشكلة في عملية اضافة المستخدم ");
    }
  };
  return (
    <form onSubmit={(e) => HandelSingUp(e)} className="relative">
      {MessageIfSingUp.statusMesage === true && (
        <div className="text-center text-sm bg-Suscces/70 p-2 mt-1 rounded-sm">
          <p> ... {MessageIfSingUp.message} جاري تحويلك </p>
        </div>
      )}
      {MessageIfSingUp.statusMesage === false && (
        <div className="text-center text-sm bg-red-400/70 p-2  mt-1 rounded-sm">
          {MessageIfSingUp.message}
        </div>
      )}

      {/* name  */}
      <label
        htmlFor="website-admin"
        className="block mb-2  text-[#334457] text-right">
        الأسم الكامل
      </label>
      <div className="mb-3 relative  ">
        {SucessIconsname === true && (
          <Image
            className="w-5 h-5 absolute top-1/2  -translate-y-1/2 -left-7"
            src={require("@/public/FormIcons/checked.png")}
            alt="checked"
          />
        )}
        {/* {SucessIconsname === false && (
          <Image
            className="w-5 h-5  top-1/2  -translate-y-5 absolute  -left-7"
            src={require("@/public/FormIcons/delete.png")}
            alt="checked"
          />
        )} */}

        <div className="flex">
          <input
            type="text"
            dir="rtl"
            onChange={(e) =>
              setDataUserSingUp({
                ...DataUserSingUp,
                Full_name: e.target.value,
              })
            }
            required
            name="NameUser"
            className="outline-none text-right rtl  placeholder:text-black/40 border-black/50 border-2 border-r-0 rounded-l-md    flex-1 min-w-0  text-sm p-2.5 bg-primary"
            placeholder="محمد علي "
          />
          <span className="inline-flex items-center px-3 text-sm  border-black/50 border-2 border-l-0   rounded-r-lg  bg-primaryV2/80 ">
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
        {errors.email && (
          <p className="text-red-500 text-sm mt-2 text-end">{errors.email}</p>
        )}
      </div>

      {/* Email */}
      <label
        htmlFor="website-admin"
        className="block mb-2 mt-4   text-[#334457] text-right">
        البريد الالكتروني
      </label>
      <div className="mb-3 relative  ">
        {SucessIconsemail === true && (
          <Image
            className="w-5 h-5 absolute top-1/2  -translate-y-1/2 -left-7"
            src={require("@/public/FormIcons/checked.png")}
            alt="checked"
          />
        )}
        {SucessIconsemail === false && (
          <Image
            className="w-5 h-5  top-1/2  -translate-y-5 absolute  -left-7"
            src={require("@/public/FormIcons/delete.png")}
            alt="checked"
          />
        )}

        <div className="flex">
          <input
            type="email"
            dir="rtl"
            onChange={(e) =>
              setDataUserSingUp({
                ...DataUserSingUp,
                email: e.target.value,
              })
            }
            required
            name="EmailUser"
            className="outline-none text-right rtl  placeholder:text-black/40 border-black/50 border-2 border-r-0 rounded-l-md    flex-1 min-w-0  text-sm p-2.5 bg-primary"
            placeholder="example@gmail.com"
          />
          <span className="inline-flex items-center px-3 text-sm  border-black/50 border-2 border-l-0   rounded-r-lg  bg-primaryV2/80 ">
            <svg
              className="w-4 h-4 text-black "
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
                  fill="#080341"></path>{" "}
              </g>
            </svg>
          </span>
        </div>
        {errors.email && (
          <p className="text-red-500 text-sm mt-2 text-end">{errors.email}</p>
        )}
      </div>

      {/* Password  */}

      <label
        htmlFor="website-admin"
        className="block mb-2 text-[#334457] text-right ">
        كلمة السر
      </label>
      <div className="relative ">
        {SucessIconspassword === true && (
          <Image
            className="w-5 h-5 absolute top-1/2  -translate-y-1/2 -left-7"
            src={require("@/public/FormIcons/checked.png")}
            alt="checked"
          />
        )}
        {SucessIconspassword === false && (
          <Image
            className="w-5 h-5  top-1/2  -translate-y-8 absolute  -left-7"
            src={require("@/public/FormIcons/delete.png")}
            alt="checked"
          />
        )}
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
                setDataUserSingUp({
                  ...DataUserSingUp,
                  password: e.target.value,
                })
              }
              required
              name="PasswordUser"
              className="outline-none text-right rtl pl-10  placeholder:text-black/30 border-black/50 border-2 border-r-0 rounded-l-md   block flex-1 min-w-0 w-full text-sm p-2.5 bg-primary"
              placeholder="********"
            />
          </div>
          <span className="inline-flex items-center px-3 text-sm  border-black/50 border-2 border-l-0   rounded-r-lg  bg-primaryV2/80 ">
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
        {errors.password && (
          <p className="text-red-500 text-xs text-end">{errors.password}</p>
        )}
      </div>

      {/* زر التتسحيل  */}

      <button
        type="submit"
        // className="  py-2 px-4 rounded-md  cursor-pointer  block mt-6 mb-0 hover:bg-primaryV2/70 bg-primaryV2 "
        className="w-full  bg-primaryV2 text-black py-2 mt-3 rounded-md hover:bg-primaryV2/70">
        {SpinnerisShow ? (
          <Spinner className={"w-4 h-4"} />
        ) : (
          <div className=" rounded">إنشاء حساب</div>
        )}
      </button>

      <div className="text-center text-sm text-[#33445799] mt-5">
        لديك حساب بالفعل؟{" "}
        <Link href="/Login" className="text-[#f7bc4b] hover:underline">
          تسجيل الدخول
        </Link>
      </div>
    </form>
  );
};

export default SingUp;
