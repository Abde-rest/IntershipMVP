"use client";
import MenuPhone from "@/app/Componet/Header/MenuPhone/MenuPhone";
import { useState } from "react";
import { LuSquareMenu } from "react-icons/lu";

const MenuPhoneUi = () => {
  const [OpenMenu, setOpenMenu] = useState(false);
  return (
    <div>
      {" "}
      <div className={`md:hidden`}>
        <LuSquareMenu
          onClick={() => setOpenMenu(true)}
          size={30}
          className={`cursor-pointer`}
        />
      </div>
      <MenuPhone
        setOpenMenu={setOpenMenu}
        OpenMenu={OpenMenu}
      />
    </div>
  );
};

export default MenuPhoneUi;
