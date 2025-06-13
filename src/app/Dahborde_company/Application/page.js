import { IoIosSearch } from "react-icons/io";
import FilterDrobDowen from "./compont/FilterDrobDowen";
import Content from "./content";
import DescptionPage from "../comopnent/DescptionPage";

export default function page({ searchParams }) {
  return (
    <div className="container mx-auto py-10 px-4  overflow-x-hidden ">
      <div className="flex items-center justify-between mb-4 flex-col md:flex-row">
        <div>
          <h1 className="text-2xl font-bold">Internship Applications</h1>
          <DescptionPage text="This page displays all internship applications submitted by users" />
        </div>
        {/* <FilterDrobDowen /> */}
      </div>

      <div className="relative mb-6 mt-3">
        {/* <form className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <IoIosSearch className="h-4 w-4" />
          </div>
          <input
            type="search"
            placeholder="Search Tilte Internship"
            name="q"
            // defaultValue={query}
            className="pl-10 pr-4 py-2 w-full md:w-80 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </form> */}
      </div>
      <Content />
    </div>
  );
}
