"use client";
import { useState } from "react";
import {
  FiSearch,
  FiMapPin,
  FiCalendar,
  FiBriefcase,
  FiFilter,
  FiChevronDown,
} from "react-icons/fi";
import { GiDuration } from "react-icons/gi";
import Image from "next/image";
import ViewDetails from "./Component/ViewDetails";
import ApplyButton from "./Component/ApplyButton";
import ModelVewiDetailsIntership from "./Component/ModelVewiDetailsIntership";
import { GetDataInterships } from "../utils/GetDataInterships";
// صفحة التسجيل singup and login amd With google كلهم لديهم /Explore اذا حبيت تبدل الاسم من بعد
const ContentExplore = () => {
  // const router = useRouter();
  const { data, error, isLoading } = GetDataInterships(
    `/api/Page_Explore/GetAllData_Intershipe_forUsers`
  );
  // [

  //   {
  //     _id: new ObjectId('680b8e7892ff1a4100e462e8'),
  //     title: 'Front end Dev ',
  //     description: '1111111111111',
  //     location: '1111111111111',
  //     mode: 'Remote',
  //     field: 'Healthcare',
  //     duration: '1111111111111',
  //     companyID:
  //

  // {
  //   "company_name": "1111111111",
  //   "email": "abc@gmail.com",
  //   "password": "$2b$10$GfBFHcitqCdAHfIh7h7bY.D8CoepJIaFyuVvYxZX6GY3MZtqkEfYi",
  //   "phone": "+213773430842",
  //   "NIF": 1111111111111111,
  //   "RC": 11111111,
  //   "description": "1111111111",
  //   "location": {
  //     "city": "أم البواقي",
  //     "address": "Quartier Houari Boumediène",
  //     "country": "الجزائر "
  //   },
  //   "field": "design",
  //   "logo": null,
  //   "role": "company",
  //   "createdAt": {
  //     "$date": "2025-04-24T23:23:03.352Z"
  //   },
  //   "updatedAt": {
  //     "$date": "2025-04-24T23:23:03.352Z"
  //   },

  //     },
  //     startDate: 2025-04-25T00:00:00.000Z,
  //     endDate: 2025-04-25T00:00:00.000Z,
  //     applicationDeadline: 2025-04-25T00:00:00.000Z,
  //     Applicants: 0,
  //     createdAt: 2025-04-25T13:30:32.604Z,
  //     updatedAt: 2025-04-25T13:30:32.604Z,
  //     __v: 0
  //   }
  // ]

  // const { user } = await getServerSession(authoption);
  // with Credential
  //   {
  //     name: 'abdou',
  //     email: 'abdethom5454es20048@gmail.com',
  //     image: undefined,
  //     id: 106443405781528740230,
  //     role: 'user'
  // }
  // with google
  // {
  //   name: 'عبد الباقي الأشهبي',
  //   email: 'abdethomes20048@gmail.com',
  //   image: 'https://lh3.googleusercontent.com/a/ACg8ocKCBqQ_I837viWtpExcojqEJrEDv_YiqjIyqYByJ4fBMMVXphgv=s96-c',
  //   id: '106443405781528740230',
  //    role: 'user'
  // }

  const [isOpenModelVewi, setisOpenModelVewi] = useState(false);

  const [DataVewiIntership, setDataVewiIntership] = useState();
  // const [filteredInternships, setFilteredInternships] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [sortBy, setSortBy] = useState("deadline");
  const [searchQuery, setSearchQuery] = useState("");
  // Available categories and locations for filters
  const categories = [
    "Design",
    "Development",
    "Marketing",
    "Business",
    "Data Science",
  ];
  const locations = [
    "Remote",
    "New York",
    "San Francisco",
    "London",
    "Berlin",
    "Tokyo",
  ];

  // Fetch internships data
  // useEffect(() => {
  //   const fetchInternships = async () => {
  //     // Simulate API call with timeout
  //     await new Promise((resolve) => setTimeout(resolve, 1500));

  //     // Mock data
  //     const mockInternships = [
  //       {
  //         id: "1",
  //         title: "Frontend Developer Intern",
  //         company: "TechCorp",
  //         description:
  //           "Join our team to build modern web applications using React, Next.js and other cutting-edge technologies.",
  //         location: "Remote",
  //         deadline: "2023-12-15",
  //         category: "Development",
  //       },
  //       {
  //         id: "2",
  //         title: "UX/UI Design Intern",
  //         company: "DesignHub",
  //         description:
  //           "Work on real-world projects and learn the principles of user-centered design in a collaborative environment.",
  //         location: "New York",
  //         deadline: "2023-11-30",
  //         category: "Design",
  //       },
  //       {
  //         id: "3",
  //         title: "Digital Marketing Intern",
  //         company: "GrowthLabs",
  //         description:
  //           "Learn how to create and execute digital marketing campaigns across various platforms and channels.",
  //         location: "London",
  //         deadline: "2023-12-10",
  //         category: "Marketing",
  //       },
  //       {
  //         id: "4",
  //         title: "Backend Developer Intern",
  //         company: "ServerStack",
  //         description:
  //           "Develop scalable backend services and APIs using Node.js, Express, and MongoDB.",
  //         location: "San Francisco",
  //         deadline: "2023-12-20",
  //         category: "Development",
  //       },
  //       {
  //         id: "5",
  //         title: "Product Management Intern",
  //         company: "ProductForge",
  //         description:
  //           "Learn the end-to-end product development lifecycle and collaborate with cross-functional teams.",
  //         location: "Berlin",
  //         deadline: "2023-11-25",
  //         category: "Business",
  //       },
  //       {
  //         id: "6",
  //         title: "Data Science Intern",
  //         company: "DataMinds",
  //         description:
  //           "Apply machine learning and statistical analysis to solve real-world business problems.",
  //         location: "Remote",
  //         deadline: "2023-12-05",
  //         category: "Data Science",
  //       },
  //       {
  //         id: "7",
  //         title: "Mobile App Developer Intern",
  //         company: "AppWorks",
  //         description:
  //           "Develop cross-platform mobile applications using React Native and related technologies.",
  //         location: "Tokyo",
  //         deadline: "2023-12-18",
  //         category: "Development",
  //       },
  //       {
  //         id: "8",
  //         title: "Content Marketing Intern",
  //         company: "ContentCraft",
  //         description:
  //           "Create engaging content for various digital platforms and learn content strategy fundamentals.",
  //         location: "London",
  //         deadline: "2023-12-01",
  //         category: "Marketing",
  //       },
  //     ];

  //     setInternships(mockInternships);
  //     setFilteredInternships(mockInternships);
  //     setIsLoading(false);
  //   };

  //   fetchInternships();
  // }, []);

  // Apply filters and sorting
  // useEffect(() => {
  //   let results = [...internships];

  //   // Apply category filter
  //   if (categoryFilter !== "all") {
  //     results = results.filter(
  //       (internship) => internship.category === categoryFilter
  //     );
  //   }

  //   // Apply location filter
  //   if (locationFilter !== "all") {
  //     results = results.filter(
  //       (internship) => internship.location === locationFilter
  //     );
  //   }

  //   // Apply search query
  //   if (searchQuery) {
  //     const query = searchQuery.toLowerCase();
  //     results = results.filter(
  //       (internship) =>
  //         internship.title.toLowerCase().includes(query) ||
  //         internship.company.toLowerCase().includes(query) ||
  //         internship.description.toLowerCase().includes(query)
  //     );
  //   }

  //   // Apply sorting
  //   if (sortBy === "deadline") {
  //     results.sort(
  //       (a, b) =>
  //         new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
  //     );
  //   } else if (sortBy === "recent") {
  //     // For demo purposes, we'll just reverse the order
  //     results.reverse();
  //   }

  //   setFilteredInternships(results);
  // }, [internships, categoryFilter, locationFilter, sortBy, searchQuery]);

  // Format date to be more readable
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  return (
    <div>
      {/* Filter Bar */}
      <div className="bg-white rounded-lg shadow-sm p-4 mb-8">
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <div className="relative flex-grow">
            <FiSearch
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search internships..."
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500/50"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:w-2/3">
            {/* Category Dropdown */}
            <div className="relative">
              <select
                className="w-full appearance-none bg-white border rounded-md py-2 pl-10 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}>
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <FiBriefcase
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <FiChevronDown className="text-gray-400" size={16} />
              </div>
            </div>

            {/* Location Dropdown */}
            <div className="relative">
              <select
                className="w-full appearance-none bg-white border rounded-md py-2 pl-10 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}>
                <option value="all">All Locations</option>
                {locations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
              <FiMapPin
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <FiChevronDown className="text-gray-400" size={16} />
              </div>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <select
                className="w-full appearance-none bg-white border rounded-md py-2 pl-10 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}>
                <option value="deadline">Deadline (Soonest)</option>
                <option value="recent">Most Recent</option>
              </select>
              <FiFilter
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <FiChevronDown className="text-gray-400" size={16} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">
          {isLoading
            ? "Loading internships..."
            : `Showing ${data.length} internships`}
        </p>
        <button
          onClick={() => {
            setCategoryFilter("all");
            setLocationFilter("all");
            setSortBy("deadline");
            setSearchQuery("");
          }}
          className="flex items-center px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
          <FiFilter className="mr-2" size={16} />
          Reset Filters
        </button>
      </div>

      {/* Loading State */}
      {/* {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 pb-2">
                <div className="h-6 w-3/4 mb-2 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="px-4 pb-2">
                <div className="h-4 w-full mb-2 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-full mb-2 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
                <div className="flex items-center mt-4">
                  <div className="h-4 w-4 mr-2 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="flex items-center mt-2">
                  <div className="h-4 w-4 mr-2 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="h-4 w-1/4 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
              <div className="p-4 border-t">
                <div className="flex justify-between w-full">
                  <div className="h-9 w-24 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-9 w-24 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )} */}

      {/* Empty State */}
      {/* {!isLoading && filteredInternships.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <FiFilter className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium mb-2">No internships found</h3>
          <p className="text-gray-500 mb-6">
            Try adjusting your search or filter criteria to find more
            opportunities.
          </p>
          <button
            onClick={() => {
              setCategoryFilter("all");
              setLocationFilter("all");
              setSortBy("deadline");
              setSearchQuery("");
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Reset All Filters
          </button>
        </div>
      )} */}

      {/* Internship Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="p-4 pb-2">
                <div className="h-6 w-3/4 mb-2 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-1/2 bg-gray-200 rounded animate-pulse"></div>
              </div>
              <div className="px-4 pb-2">
                <div className="h-4 w-full mb-2 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-full mb-2 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse"></div>
                <div className="flex items-center mt-4">
                  <div className="h-4 w-4 mr-2 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="h-4 w-1/3 bg-gray-200 rounded animate-pulse"></div>
                </div>
                <div className="flex items-center mt-2">
                  <div className="h-4 w-4 mr-2 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="h-4 w-1/4 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
              <div className="p-4 border-t">
                <div className="flex justify-between w-full">
                  <div className="h-9 w-24 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-9 w-24 bg-gray-200 rounded animate-pulse"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : data.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((internship) => {
            return (
              <div
                key={internship._id}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-4 pb-2">
                  <div className="flex justify-between items-center ">
                    {/* Company info with logo */}
                    <div className="flex items-center mt-2">
                      <div className="relative h-10 w-10 rounded-full overflow-hidden bg-gray-100 border border-gray-200">
                        <Image
                          src={internship.companyLogo || "/placeholder.svg"}
                          alt={`${internship.company} logo`}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="ml-3 font-medium text-gray-700">
                          {internship.companyID.company_name}
                        </span>
                        <span className="ml-3 text-sm  text-gray-400">
                          {/* {internship.description} */}
                          company That is That solution
                        </span>
                      </div>
                    </div>
                    {/* category */}
                    <span className="inline-block px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                      {internship.field}
                    </span>
                  </div>

                  {/* title */}
                  <h3 className="font-bold text-lg truncate  pt-2">
                    {internship.title}
                  </h3>
                </div>

                <div className="px-4 pb-2">
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {internship.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <FiMapPin className="mr-2" size={16} />
                    {internship.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-1">
                    <GiDuration className="mr-2" size={16} />
                    {internship.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <FiCalendar className="mr-2" size={16} />
                    <span className="mr-2"> Deadline:</span>
                    {formatDate(internship.applicationDeadline)}
                  </div>
                </div>
                <div className="p-4 border-t flex justify-between">
                  <ViewDetails
                    internship={internship}
                    setisOpenModelVewi={setisOpenModelVewi}
                    setDataVewiIntership={setDataVewiIntership}
                  />

                  <div className="flex items-center gap-2">
                    <ApplyButton id={internship._id} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <FiFilter className="h-8 w-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium mb-2">No internships found </h3>

          {error && error}
          <button
            onClick={() => {
              window.location.reload();
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Refrech
          </button>
        </div>
      )}
      {/* Open when  click the Btn Vewi Details  */}
      {isOpenModelVewi && (
        <ModelVewiDetailsIntership
          setisOpenModelVewi={setisOpenModelVewi}
          DataVewiIntership={DataVewiIntership}
        />
      )}
    </div>
  );
};

export default ContentExplore;
