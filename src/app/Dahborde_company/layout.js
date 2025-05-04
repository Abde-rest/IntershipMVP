import HerdaerDah from "@/app/Componet/Header/HerdaerDah";
import Sidbar from "@/app/Componet/SidBar/Sidbar";

export default async function DahbordeLayout({ children, params }) {
  // await params;
  // const id = params.id;
  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      {/* الشريط الجانبي */}
      <div className="w-64 bg-gray-800 text-white fixed top-0 h-screen">
        <Sidbar />
      </div>

      {/* المحتوى الرئيسي */}
      <div className="ml-64">
        {/* الرأس */}
        <div className="h-16 bg-white shadow fixed top-0 left-64 right-0 z-10">
          <HerdaerDah />
        </div>

        {/* المحتوى */}
        <main className=" overflow-x-auto mt-16 p-4 w-full">{children}</main>
      </div>
    </div>
  );
}
