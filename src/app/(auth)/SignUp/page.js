import UiSingUpWithGoogle from "../Comopont/UiSingUpWithGoogle";
import SingUp from "./SingUp";
const page = () => {
  return (
    <>
      <div>
        <main className="container mx-auto px-6 pt-20 pb-16">
          <div className="flex min-h-[150px] items-center justify-center">
            <div className="grid lg:grid-cols-2 gap-8 w-full max-w-5xl">
              {/* Illustration Section */}
              <div className="hidden lg:flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#f7bc4b20] to-transparent rounded-2xl" />
                <div className="relative space-y-6 text-center">
                  <div className="w-full h-64 bg-[#f7bc4b10] rounded-2xl flex items-center justify-center">
                    <svg
                      className="w-40 h-40 text-[#9049D4]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[#334457]">
                      تعلم بأمان وثقة
                    </h2>
                    <p className="mt-2 text-[#33445799]">
                      نوفر لك بيئة تعليمية آمنة ومتكاملة للوصول إلى أهدافك
                    </p>
                  </div>
                </div>
              </div>
              {/* Form Section */}
              <div className="glass rounded-2xl p-8">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6">
                  <div className="flex flex-col space-y-2 text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-[#334457]">
                      إنشاء حساب جديد
                    </h1>
                    <p className="text-sm text-[#33445799]">
                      قم بإنشاء حسابك للوصول إلى جميع الدروس والمحتويات
                    </p>
                  </div>
                  <UiSingUpWithGoogle />
                  <SingUp />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default page;
