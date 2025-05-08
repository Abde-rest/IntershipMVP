// "This component is client Bescuse the Layout is Clicent "
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineNotificationsNone } from "react-icons/md";
import BtnMenuDahIconsAndClose from "./BtnMenuDahIconsAndClose";
import Image from "next/image";
import { GetDataInterships } from "@/app/utils/GetDataInterships";
import Spinner from "../spinnerUi/spinner";
const HerdaerDah = ({ toggleSidebar, isSidebarOpen }) => {
  // Get data Company
  const { data, error, isLoading } = GetDataInterships(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/GetDataCompany`
  );
  return (
    <div>
      {/* Header */}
      <div className="flex justify-between h-full items-center  p-3">
        <div className="flex items-center gap-3">
          <BtnMenuDahIconsAndClose
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />
          <div className="relative flex items-center">
            <div className="absolute pl-2">
              <IoSearchOutline className="w-5 h-5" />
            </div>
            <input
              type="text"
              placeholder="Search projects"
              className="pr-4 py-2 rounded-md border text-sm pl-8"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hover:bg-slate-200 rounded-full  cursor-pointer p-2">
            <MdOutlineNotificationsNone className="w-5 h-5" />
          </div>
          {isLoading ? (
            <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
          ) : (
            <Image
              className=" roucfnded-full"
              src={data?.logo || ""}
              alt="Profila"
              width={36}
              height={38}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HerdaerDah;
