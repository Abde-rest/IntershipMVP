import { getServerSession } from "next-auth";

import { authoption } from "@/app/api/auth/[...nextauth]/route";
import JopIntership from "./Content";

// Notification
// تستطيع فضل الدوال الخاصة crud في ملف منفصل  للتنضيم
// احتاج الى اضافة pagination  في عرض ال carts
// Import :
// غند انشاء فرصة تدريبية تكون  هناك ايام قبل ان تموت اذا يجب ان اقوم بمنطق معين يقوم بنزع العملية وتخزين العملية السابقة
const page = async () => {

  return (
    <div>
      <JopIntership />
    </div>
  );
};

export default page;
