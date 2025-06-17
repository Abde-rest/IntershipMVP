import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import Accept_Application from "../action_Appliction/Accept_Application";
import Reject_Application from "../action_Appliction/Reject_Application";
import Pdf from "@/app/Componet/Pdf/Pdf";
import PDFDownload from "@/app/Componet/Pdf/PDFDownload";
export default function resulteTable({ data, error }) {
  console.log("Data Application :");
  console.log(data);

  return (
    <>
      {error && <div>{error}</div>}
      {data && (
        <div className="overflow-x-auto rounded-lg border  border-gray-200   ">
          <table className="w-full divide-y divide-gray-200 ">
            <thead className="bg-gray-50 sticky top-0">
              <tr>
                <th
                  scope="col"
                  className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Id
                </th>
                <th
                  scope="col"
                  className=" py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title Internship
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CV
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Links
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Applied At
                </th>
                <th
                  scope="col"
                  className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 max-h-96 w-full">
              {data.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-10 text-center text-sm text-gray-500">
                    No resulte found.
                  </td>
                </tr>
              ) : (
                data.map((application, index) => (
                  <tr key={application._id} className="hover:bg-gray-50">
                    <td className=" px-2 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td
                      className={` py-4 whitespace-nowrap text-sm font-medium text-gray-900
                  ${
                    application?.internshipID ? null : "bg-red-200 text-center"
                  }`}>
                      {application?.internshipID !== null
                        ? application?.internshipID?.title
                        : "تم حذف الفرصة التدريبة"}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                      {application?.phone}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="relative group">
                        <a
                          href={` https://docs.google.com/gview?url=${application?.cvUrl?.url}&embedded=true`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center p-2 rounded-full hover:bg-gray-100">
                          <LuExternalLink className="h-4 w-4 text-gray-500" />
                          <span className="sr-only">View CV</span>
                        </a>
                        <div className="absolute z-10 invisible group-hover:visible bg-black text-white text-xs rounded py-1 px-2 -mt-1 left-10">
                          View CV
                        </div>
                      </div>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-2">
                        {application?.LinksSoch?.linkedin && (
                          <div className="relative group">
                            <a
                              href={application?.LinksSoch?.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center p-2 rounded-full hover:bg-gray-100">
                              <FaLinkedin className="h-4 w-4 text-gray-500" />
                              <span className="sr-only">LinkedIn</span>
                            </a>
                            <div className="absolute z-10 invisible group-hover:visible bg-black text-white text-xs rounded py-1 px-2 -mt-1 left-10">
                              LinkedIn Profile
                            </div>
                          </div>
                        )}
                        {application?.LinksSoch?.github && (
                          <div className="relative group">
                            <a
                              href={application?.LinksSoch?.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center p-2 rounded-full hover:bg-gray-100">
                              <FaGithub className="h-4 w-4 text-gray-500" />
                              <span className="sr-only">GitHub</span>
                            </a>
                            <div className="absolute z-10 invisible group-hover:visible bg-black text-white text-xs rounded py-1 px-2 -mt-1 left-10">
                              GitHub Profile
                            </div>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(application?.createdAt).toLocaleDateString(
                        undefined,
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }
                      )}
                    </td>
                    <td className="px-2 py-4 whitespace-nowrap text-sm">
                      {application?.status === "accepted" && (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Accepted
                        </span>
                      )}
                      {application?.status === "Rejected" && (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Rejected
                        </span>
                      )}
                      {application?.status === "pending" && (
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex space-x-2">
                        {application?.status === "pending" ? (
                          <>
                            <Accept_Application
                              idapplication={application?._id}
                            />
                            <Reject_Application
                              idapplication={application?._id}
                            />
                          </>
                        ) : (
                          // "تم اتخاذ الاجراء "
                          <PDFDownload application={application} />
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}
