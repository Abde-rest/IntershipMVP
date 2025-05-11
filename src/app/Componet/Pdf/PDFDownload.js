"use client";
import dynamic from "next/dynamic";
import { PDFDownloadLink } from "@react-pdf/renderer";

import { useState } from "react";
import { TrainingAcceptancePDF } from "./Invoice";
// Create a dynamic component that only loads on the client side
const PDFDownload = ({ application }) => {
  const [error, setError] = useState(null);
  // [
  //   {
  //     cvUrl: {
  //       url: 'https://ucarecdn.com/34ec9543-613e-409f-9e88-4c550973d620/',
  //       uuid: '34ec9543-613e-409f-9e88-4c550973d620'
  //     },
  //     LinksSoch: { linkedin: '', github: '' },
  //     _id: new ObjectId('681fb304f2cf2094bcda798d'),
  //     internshipID: {
  //       _id: new ObjectId('681fb2cff2cf2094bcda7984'),
  //       title: 'Front nd ',
  //       description: 'signature',
  //       location: 'signature',
  //       mode: 'In-office',
  //       field: 'Marketing',
  //       duration: 'signature',
  //       companyID: new ObjectId('681e31da7dabc43dbf83bdf9'),
  //       startDate: 2025-05-10T00:00:00.000Z,
  //       endDate: 2025-05-10T00:00:00.000Z,
  //       applicationDeadline: 2025-06-04T00:00:00.000Z,
  //       Applicants: 1,
  //       createdAt: 2025-05-10T20:10:55.160Z,
  //       updatedAt: 2025-05-10T20:11:48.243Z,
  //       __v: 0
  //     },
  //     user: new ObjectId('681e31da7dabc43dbf83bdf9'),
  //     companyId: null,
  //     status: 'pending',
  //     phone: 213773430842,
  //     createdAt: 2025-05-10T20:11:48.215Z,
  //     updatedAt: 2025-05-10T20:11:48.215Z,
  //     __v: 0
  //   }
  // ]
  const agreementData = {
    companyName: application.companyId?.company_name,
    studentName: application.user?.Full_name,
    agreementDate: new Date().toLocaleDateString(),
    trainingProgram: application.internshipID.title,
    duration: application.internshipID.duration,
    startDate: application.internshipID.startDate.split("T")[0], //2025-05-10
    endDate: application.internshipID.endDate.split("T")[0], //2025-05-10
  };

  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }

  return (
    <div className="flex justify-center items-center">
      <PDFDownloadLink
        document={<TrainingAcceptancePDF agreement={agreementData} />}
        fileName="training-acceptance.pdf"
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200"
        onError={(error) => setError(error)}>
        {({ loading }) => (
          <button disabled={loading} className="flex items-center gap-2">
            {loading ? (
              <>
                <span>Loading...</span>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </>
            ) : (
              "Download Acceptance Agreement"
            )}
          </button>
        )}
      </PDFDownloadLink>
    </div>
  );
};

// Export the component with dynamic import and no SSR
export default dynamic(() => Promise.resolve(PDFDownload), {
  ssr: false,
});
