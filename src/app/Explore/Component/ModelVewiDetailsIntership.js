import Image from "next/image";
import {
  FaBuilding,
  FaCalendarAlt,
  FaCalendarDay,
  FaClock,
  FaGlobe,
  FaMapMarkerAlt,
  FaPhone,
  FaTimes,
} from "react-icons/fa";
import ApplyButton from "./ApplyButton";
const ModelVewiDetailsIntership = ({
  setisOpenModelVewi,
  DataVewiIntership,
}) => {
  return (
    <div>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 transition-opacity duration-400 `}>
        <div
          className={`bg-white rounded-lg shadow-xl w-[90%] h-[90%] max-h-[90vh] overflow-hidden relative transition-all duration-400 `}
          role="dialog"
          aria-modal="true">
          <button
            onClick={() => setisOpenModelVewi(false)}
            className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-gray-200 text-gray-800 rounded-full p-1.5 shadow-md transition-all hover:scale-110"
            aria-label="Close modal">
            <FaTimes className="h-4 w-4" />
          </button>
          <div className="flex flex-col md:flex-row h-full">
            {/* Image Section - Left side on desktop, top on mobile */}
            <div className="md:w-2/5 relative h-64 md:h-auto bg-blue-100">
              <Image
                src="/placeholder.svg?height=600&width=400"
                alt="Internship opportunity"
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                <h2 className="text-2xl font-bold text-white">
                  {/* Software Development Internship */}
                  {DataVewiIntership.title}
                </h2>
                <p className="text-sm text-white/80">Summer 2024 Opportunity</p>
              </div>
            </div>

            {/* Content Section with fixed height to accommodate button */}
            <div className="md:w-3/5 flex flex-col h-full">
              {/* Scrollable content area */}
              <div className="overflow-y-auto flex-grow">
                <div className="p-6">
                  {/* Header - Only visible on mobile */}
                  <div className="mb-6 md:hidden">
                    <h2 className="text-xl font-bold text-gray-900">
                      {DataVewiIntership.title}
                    </h2>
                    <p className="text-sm text-gray-500">
                      Summer 2024 Opportunity
                    </p>
                  </div>

                  {/* Internship Details Section */}
                  <div className="mb-6 space-y-4">
                    <h3 className="text-lg font-semibold border-b pb-2 text-gray-800">
                      Internship Details
                    </h3>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <FaMapMarkerAlt className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-800">Location</p>
                          <p className="text-sm text-gray-600">
                            {DataVewiIntership.location}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <FaClock className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-800">Duration</p>
                          <p className="text-sm text-gray-600">
                            {" "}
                            {DataVewiIntership.duration}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <FaGlobe className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-800">Mode</p>
                          <p className="text-sm text-gray-600">
                            {DataVewiIntership.mode}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <FaBuilding className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-800">Field</p>
                          <p className="text-sm text-gray-600">
                            {DataVewiIntership.field}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <FaCalendarAlt className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-800">
                            Start Date
                          </p>
                          <p className="text-sm text-gray-600">
                            {DataVewiIntership.startDate}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <FaCalendarDay className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-800">End Date</p>
                          <p className="text-sm text-gray-600">
                            {DataVewiIntership.endDate}
                          </p>
                        </div>
                      </div>

                      <div className="pt-2">
                        <p className="font-medium text-gray-800">Description</p>
                        <p className="text-sm text-gray-600 mt-1">
                          {DataVewiIntership.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Company Information Section */}
                  <div className="mb-6 space-y-4">
                    <h3 className="text-lg font-semibold border-b pb-2 text-gray-800">
                      Company Information
                    </h3>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <FaBuilding className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-800">
                            Company Name
                          </p>
                          <p className="text-sm text-gray-600">
                            {DataVewiIntership.companyID.company_name}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <FaPhone className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-800">
                            Phone Number
                          </p>
                          <p className="text-sm text-gray-600">
                            {DataVewiIntership.companyID.phone}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <FaMapMarkerAlt className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-800">City</p>
                          <p className="text-sm text-gray-600">
                            {DataVewiIntership.companyID.location.city}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <FaMapMarkerAlt className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-gray-800">Address</p>
                          <p className="text-sm text-gray-600">
                            {DataVewiIntership.companyID.location.address}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Apply Button - Fixed outside scrolling area */}
              <div className="flex-shrink-0 bg-white py-4 px-6 border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
                <ApplyButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelVewiDetailsIntership;
