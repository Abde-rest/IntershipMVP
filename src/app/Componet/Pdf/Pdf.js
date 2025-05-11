"use client";
import dynamic from "next/dynamic";

const PDFDownload = dynamic(() => import("./PDFDownload"), {
  ssr: false,
  loading: () => <p>جاري تحميل مكون PDF...</p>,
});
const Pdf = ({ application }) => {
  return <PDFDownload application={application} />;
};

export default Pdf;
