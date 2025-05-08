"use client";
import MenuPhone from "@/app/Componet/Header/MenuPhone/MenuPhone";
import { LuSquareMenu } from "react-icons/lu";
import { useState } from "react";
import { SessionProvider } from "next-auth/react";

const MenuPhoneUi = () => {
  const [OpenMenu, setOpenMenu] = useState(false);
  return (
    <div>
      {/* Menu icons in  Phone */}
      <div className={`md:hidden`}>
        <LuSquareMenu
          onClick={() => setOpenMenu(true)}
          size={30}
          className={`cursor-pointer`}
        />
      </div>
      {/* Menu in  Phone */}
      <SessionProvider>
        <MenuPhone setOpenMenu={setOpenMenu} OpenMenu={OpenMenu} />
      </SessionProvider>
    </div>
  );
};

export default MenuPhoneUi;
