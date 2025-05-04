// Her logic SingUp Company
// I nned validtion with =>  Zod + React Hook Form
"use client";

import { wilayas } from "@/Data/ListWilaya";
import { signIn } from "next-auth/react";
import { useState } from "react";

const SingUp = () => {
  // Icons Eyes for password
  let [isShow, setisShow] = useState(false);
  // resulte  is SingUp message
  let [MessageIfSingUp, setMessageIfSingUp] = useState({
    message: null,
    statusMesage: null,
  });
  let [DataComapnyForm, setDataComapnyForm] = useState({
    company_name: null,
    NIF: null,
    RC: null,
    email: null,
    password: null,
    phone: null,
    description: null,
    city: null,
    address: null,
    field: null,
    logo: null,
  });
  const [SpinnerisShow, setSpinnerisShow] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSpinnerisShow(true);
    // Her validtion Every Input use mybe zod + React query
    const res = await fetch("/api/SingUpCompnay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(DataComapnyForm),
    });
    const result = await res.json();
    if (res.ok) {
      setMessageIfSingUp({
        message: result.message,
        statusMesage: true,
      });
      setSpinnerisShow(false);
      await signIn("credentials", {
        email: DataComapnyForm.email,
        password: DataComapnyForm.password,
        userType: "company",
        // Her redirect
        redirect: true, //  إعادة التوجيه التلقائي
        callbackUrl: `/Dahborde_company/Dahborde`, // وجهة إعادة التوجيه الى صفحة explore
      });
    } else {
      setMessageIfSingUp({
        message: result.message,
        statusMesage: false,
      });
      setSpinnerisShow(false);
    }
  }

  return (
    <form className="p-6 space-y-6 " onSubmit={(e) => handleSubmit(e)}>
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
      {/* Company Name */}
      <div>
        <label
          htmlFor="companyName"
          className="block text-sm font-medium text-gray-700 mb-1">
          Company Name <span className="text-red-500">*</span>
        </label>
        <input
          id="companyName"
          type="text"
          // ${
          //     errors.companyName ? "border-red-500" : "border-gray-300"
          //   }
          onChange={(e) =>
            setDataComapnyForm({
              ...DataComapnyForm,
              company_name: e.target.value,
            })
          }
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
          placeholder="Enter your company name"
          // {...register("companyName", { required: "Company name is required" })}
        />
        {/* {errors.companyName && (
    <p className="mt-1 text-sm text-red-500">{errors.companyName.message as string}</p>
  )} */}
      </div>
      {/* Nif  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="NIF"
            className="block text-sm font-medium text-gray-700 mb-1">
            NIF <span className="text-red-500">*</span>
          </label>
          <input
            id="NIF"
            type="text"
            //   ${
            //     errors.email ? "border-red-500" : "border-gray-300"
            //   }
            onChange={(e) =>
              setDataComapnyForm({ ...DataComapnyForm, NIF: e.target.value })
            }
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors `}
            placeholder="15 Number..."
            //   {...register("email", {
            //     required: "Email is required",
            //     pattern: {
            //       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            //       message: "Invalid email address",
            //     },
            //   })}
          />
          {/* {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message as string}</p>} */}
        </div>
        {/* * Rc   ؤقم السجل التجاري  */}
        <div>
          <label
            htmlFor="RC"
            className="block text-sm font-medium text-gray-700 mb-1">
            RC <span className="text-red-500">*</span>
          </label>
          <input
            id="RC"
            type="RC"
            //   ${
            //     errors.password ? "border-red-500" : "border-gray-300"
            //   }
            onChange={(e) =>
              setDataComapnyForm({ ...DataComapnyForm, RC: e.target.value })
            }
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
            placeholder="12 Number..."
            //   {...register("password", {
            //     required: "Password is required",
            //     minLength: {
            //       value: 8,
            //       message: "Password must be at least 8 characters",
            //     },
            //   })}
          />
          {/* {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message as string}</p>} */}
        </div>
      </div>

      {/* Email and Password */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            //   ${
            //     errors.email ? "border-red-500" : "border-gray-300"
            //   }
            onChange={(e) =>
              setDataComapnyForm({ ...DataComapnyForm, email: e.target.value })
            }
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors `}
            placeholder="your@email.com"
            //   {...register("email", {
            //     required: "Email is required",
            //     pattern: {
            //       value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            //       message: "Invalid email address",
            //     },
            //   })}
          />
          {/* {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message as string}</p>} */}
        </div>
        {/* Password */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1">
            Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            {" "}
            {isShow ? (
              <div
                onClick={() => setisShow(!isShow)}
                className=" p-1 absolute w-6 h-6 top-1/2  cursor-pointer rounded-full flex items-center justify-end">
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
                className="hover:bg-black/20 p-1 absolute w-6 h-6 top-1/2 cursor-pointer rounded-full flex items-center justify-end">
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
              id="password"
              type={isShow ? "text" : "password"}
              //   ${
              //     errors.password ? "border-red-500" : "border-gray-300"
              //   }
              onChange={(e) =>
                setDataComapnyForm({
                  ...DataComapnyForm,
                  password: e.target.value,
                })
              }
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
              placeholder="••••••••"
              //   {...register("password", {
              //     required: "Password is required",
              //     minLength: {
              //       value: 8,
              //       message: "Password must be at least 8 characters",
              //     },
              //   })}
            />
          </div>
          {/* {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message as string}</p>} */}
        </div>
      </div>
      {/* Phone and Location */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
            {/* <span className="text-red-500">*</span> */}
          </label>
          <input
            id="phone"
            type="text"
            //   ${
            //     errors.phone ? "border-red-500" : "border-gray-300"
            //   }
            onChange={(e) =>
              setDataComapnyForm({ ...DataComapnyForm, phone: e.target.value })
            }
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors `}
            placeholder="+1 (555) 123-4567"
            //   {...register("phone", { required: "Phone number is required" })}
          />
          {/* {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message as string}</p>} */}
        </div>

        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 mb-1">
            City <span className="text-red-500">*</span>
          </label>
          {/* <input
            id="location"
            type="text"
            //   ${
            //     errors.location ? "border-red-500" : "border-gray-300"
            //   }
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
            placeholder="City, Country"
            //   {...register("location", { required: "Location is required" })}
          /> */}
          <select
            name="wilaya"
            id="wilaya"
            onChange={(e) =>
              setDataComapnyForm({ ...DataComapnyForm, city: e.target.value })
            }
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}>
            <option value="">اختر الولاية</option>
            {wilayas.map((w) => (
              <option key={w.code} value={w.name}>
                {w.name}
              </option>
            ))}
          </select>

          {/* {errors.location && <p className="mt-1 text-sm text-red-500">{errors.location.message as string}</p>} */}
        </div>
      </div>
      {/* ADDRES and Sector */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700 mb-1">
            address <span className="text-red-500">*</span>
          </label>
          <input
            id="address"
            type="text"
            onChange={(e) =>
              setDataComapnyForm({
                ...DataComapnyForm,
                address: e.target.value,
              })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            placeholder="بئر توتة"
            //   {...register("website")}
          />
        </div>

        <div>
          <label
            htmlFor="sector"
            className="block text-sm font-medium text-gray-700 mb-1">
            Company Field / Sector <span className="text-red-500">*</span>
          </label>
          <select
            id="sector"
            //   ${
            //     errors.sector ? "border-red-500" : "border-gray-300"
            //   }
            onChange={(e) =>
              setDataComapnyForm({ ...DataComapnyForm, field: e.target.value })
            }
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors `}
            //   {...register("sector", { required: "Please select a sector" })}
          >
            <option value="">Select a sector</option>
            <option value="technology">Technology</option>
            <option value="engineering">Engineering</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
            <option value="finance">Finance</option>
            <option value="healthcare">Healthcare</option>
            <option value="education">Education</option>
            <option value="other">Other</option>
          </select>
          {/* {errors.sector && <p className="mt-1 text-sm text-red-500">{errors.sector.message as string}</p>} */}
        </div>
      </div>
      {/* Description */}
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700 mb-1">
          Company Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          rows={4}
          // ${
          //     errors.description ? "border-red-500" : "border-gray-300"
          //   }
          onChange={(e) =>
            setDataComapnyForm({
              ...DataComapnyForm,
              description: e.target.value,
            })
          }
          className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors `}
          placeholder="Tell us about your company..."
          // {...register("description", { required: "Description is required" })}
        ></textarea>
        {/* {errors.description && (
    <p className="mt-1 text-sm text-red-500">{errors.description.message as string}</p>
  )} */}
      </div>
      {/* Logo Upload */}
      <div>
        <label
          htmlFor="logo"
          className="block text-sm font-medium text-gray-700 mb-1">
          Company Logo
        </label>
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <div className="relative border border-gray-300 rounded-lg overflow-hidden">
              <input
                id="logo"
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setDataComapnyForm({
                    ...DataComapnyForm,
                    logo: e.target.value,
                  })
                }
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                //   onChange={handleLogoChange}
                //   {...register("logo")}
              />
              <div className="p-4 text-center">
                <div className="flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-gray-400">
                  PNG, JPG, GIF up to 10MB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          // disabled={SpinnerisShow}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-70">
          {SpinnerisShow ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing...
            </span>
          ) : (
            "Register Company"
          )}
        </button>
      </div>
      <p className="text-center text-sm text-gray-500 mt-4">
        By registering, you agree to our{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>
      </p>
    </form>
  );
};

export default SingUp;
