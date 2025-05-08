const page = () => {
  return (
    <div>
      <div className="flex flex-col h-screen w-full bg-gray-50">
        <div>
          <div className="text-center bg-green-300 p-2">
            جميع البيانات هيا وهمية قريبا ...
          </div>
          <main className="flex-1 overflow-auto p-4 md:p-6 mb-5">
            {/* {} Dashboard Header {} */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 sm:mb-0">
                Dashboard
              </h1>
              <div className="text-sm text-gray-500">Welcome back</div>
            </div>
            {/* {} Stat Cards {} */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* {} Active Internships Card {} */}
              <div className="overflow-hidden rounded-md border border-gray-200 bg-white shadow">
                <div className="flex flex-row items-center justify-between pb-1 sm:pb-2 space-y-0 p-4">
                  <div className="text-xs sm:text-sm font-medium text-gray-500">
                    Active Internships
                  </div>
                  <div className="text-company-500">
                    {/* {} Briefcase Icon (replace with your icon) {} */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <rect
                        x="2"
                        y="7"
                        width="20"
                        height="14"
                        rx="2"
                        ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <div className="text-xl sm:text-2xl font-bold">24</div>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
                    Currently active positions
                  </p>
                </div>
              </div>
              {/* {} New Applicants Card {} */}
              <div className="overflow-hidden rounded-md border border-gray-200 bg-white shadow">
                <div className="flex flex-row items-center justify-between pb-1 sm:pb-2 space-y-0 p-4">
                  <div className="text-xs sm:text-sm font-medium text-gray-500">
                    New Applicants
                  </div>
                  <div className="text-company-500">
                    {/* {} User Plus Icon (replace with your icon) {} */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="8.5" cy="7" r="4"></circle>
                      <line x1="20" y1="8" x2="20" y2="14"></line>
                      <line x1="23" y1="11" x2="17" y2="11"></line>
                    </svg>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <div className="text-xl sm:text-2xl font-bold">36</div>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
                    Applications this week
                  </p>
                </div>
              </div>
              {/* {} Interviews Card {} */}
              <div className="overflow-hidden rounded-md border border-gray-200 bg-white shadow">
                <div className="flex flex-row items-center justify-between pb-1 sm:pb-2 space-y-0 p-4">
                  <div className="text-xs sm:text-sm font-medium text-gray-500">
                    Interviews Scheduled
                  </div>
                  <div className="text-company-500">
                    {/* {} Clock Icon (replace with your icon) {} */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <div className="text-xl sm:text-2xl font-bold">12</div>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
                    For the next 7 days
                  </p>
                </div>
              </div>
              {/* {} Positions Filled Card {} */}
              <div className="overflow-hidden rounded-md border border-gray-200 bg-white shadow">
                <div className="flex flex-row items-center justify-between pb-1 sm:pb-2 space-y-0 p-4">
                  <div className="text-xs sm:text-sm font-medium text-gray-500">
                    Positions Filled
                  </div>
                  <div className="text-company-500">
                    {/* {} Check Check Icon (replace with your icon) {} */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M9 11l3 3L22 4"></path>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>
                    </svg>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <div className="text-xl sm:text-2xl font-bold">8</div>
                  <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
                    This month
                  </p>
                </div>
              </div>
            </div>
            {/* {} Recent Applications and Fill Rate {} */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {/* {} Recent Applications Card {} */}
              <div className="rounded-md border border-gray-200 bg-white shadow overflow-hidden">
                <div className="p-4 pb-2 border-b border-gray-100">
                  <h2 className="text-lg sm:text-xl font-semibold">
                    Recent Applications
                  </h2>
                </div>
                <div className="p-4">
                  <div className="space-y-3 sm:space-y-4">
                    {/* {} Application Item {} */}
                    <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 bg-gray-50 rounded-md">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-company-100 flex items-center justify-center text-company-700 font-medium">
                        M
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm sm:text-base truncate">
                          Michael Chen
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500 truncate">
                          Frontend Developer
                        </div>
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                        Today
                      </div>
                    </div>
                    {/* {} More application items... (repeat structure above) {} */}
                    <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 bg-gray-50 rounded-md">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-company-100 flex items-center justify-center text-company-700 font-medium">
                        S
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm sm:text-base truncate">
                          Sarah Johnson
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500 truncate">
                          Data Analyst
                        </div>
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                        Yesterday
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 bg-gray-50 rounded-md">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-company-100 flex items-center justify-center text-company-700 font-medium">
                        D
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm sm:text-base truncate">
                          David Brown
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500 truncate">
                          UX Designer
                        </div>
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                        2 days ago
                      </div>
                    </div>
                    <div className="flex items-center gap-3 sm:gap-4 p-2 sm:p-3 bg-gray-50 rounded-md">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-company-100 flex items-center justify-center text-company-700 font-medium">
                        E
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-sm sm:text-base truncate">
                          Emma Wilson
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500 truncate">
                          Marketing Intern
                        </div>
                      </div>
                      <div className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                        3 days ago
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* {} Positions Fill Rate Card {} */}
              <div className="rounded-md border border-gray-200 bg-white shadow overflow-hidden">
                <div className="p-4 pb-2 border-b border-gray-100">
                  <h2 className="text-lg sm:text-xl font-semibold">
                    Positions Fill Rate
                  </h2>
                </div>
                <div className="p-4">
                  <div className="space-y-3 sm:space-y-4">
                    {/* {} Position Fill Item {} */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="truncate">Software Development</span>
                        <span className="font-medium whitespace-nowrap">
                          4/6 filled
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="bg-company-500 h-full rounded-full"
                          //   style="width: 66.6%"
                        ></div>
                      </div>
                    </div>
                    {/* {} More position fill items... (repeat structure above) {} */}
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="truncate">Marketing</span>
                        <span className="font-medium whitespace-nowrap">
                          2/4 filled
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="bg-company-500 h-full rounded-full"
                          //   style="width: 50%"
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="truncate">Data Analysis</span>
                        <span className="font-medium whitespace-nowrap">
                          3/5 filled
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="bg-company-500 h-full rounded-full"
                          //   style="width: 60%"
                        ></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="truncate">UX/UI Design</span>
                        <span className="font-medium whitespace-nowrap">
                          1/3 filled
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="bg-company-500 h-full rounded-full"
                          //   style="width: 33.3%"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* {} Recent Activities {} */}
            <div className="rounded-md border border-gray-200 bg-white shadow overflow-hidden">
              <div className="p-4 pb-2 border-b border-gray-100">
                <h2 className="text-lg sm:text-xl font-semibold">
                  Recent Activities
                </h2>
              </div>
              <div className="p-4">
                <div className="space-y-3 sm:space-y-4">
                  {/* {} Activity Item {} */}
                  <div className="flex gap-3">
                    <div className="w-1 bg-company-200 rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">
                        {/* New internship position created: 'Mobile Developer' */}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        2 hours ago
                      </p>
                    </div>
                  </div>
                  {/* {} More activity items... (repeat structure above) {} */}
                  <div className="flex gap-3">
                    <div className="w-1 bg-company-200 rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">
                        Interview scheduled with Emma Wilson
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        5 hours ago
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1 bg-company-200 rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">
                        Michael Chen application approved
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        Yesterday
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1 bg-company-200 rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">
                        Sarah Johnson submitted required documents
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        Yesterday
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="w-1 bg-company-200 rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">
                        {/* New internship position created: 'Content Writer' */}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        2 days ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default page;
