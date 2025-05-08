import React from "react";
import ApplyPage from "./Content";

const page = async ({ params }) => {
  //  في لوحة التحكم الخاصة ب الشركة يجب احظار طلبات التدريب
  // هل الطلبات السابقة سوف احفضها ام سوف امسحها من قاعدة البيانات

  const { id } = await params;
  // Get Just One  Data Intership
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/ApplyPage/GetDataforApplyPage`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(id),
    }
  );
  const data = await res.json();
  // {
  //   _id: '680be85c438a1b22916cf814',
  //   title: 'Front end developer',
  //   description: 'نحتاج الى شخص ماهر يستطيع صناعة  تصمايم حيدة وتجاوبة معا معرفة لمكتبات حديثة ',
  //   location: 'Ain el beel ',
  //   mode: 'Remote',
  //   field: 'Engineering',
  //   duration: '3 Month',
  //   companyID: '680b8e5392ff1a4100e462e4',
  //   startDate: '2025-04-25T00:00:00.000Z',
  //   endDate: '2025-04-30T00:00:00.000Z',
  //   applicationDeadline: '2025-06-05T00:00:00.000Z',
  //   Applicants: 0,
  //   createdAt: '2025-04-25T19:54:04.215Z',
  //   updatedAt: '2025-04-25T19:54:04.215Z',
  //   __v: 0
  // }

  return (
    <div>
      {/* Content  */}
      <ApplyPage id={id} data={data} />
    </div>
  );
};

export default page;
