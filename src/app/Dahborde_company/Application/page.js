import { IoIosSearch } from "react-icons/io";
import FilterDrobDowen from "./compont/FilterDrobDowen";
import Content from "./content";

export default function page({ searchParams }) {
  return (
    <div className="container mx-auto py-10 px-4  overflow-x-hidden ">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold mb-6">Internship Applications</h1>
        <FilterDrobDowen />
      </div>

      <div className="relative mb-6">
        <form className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <IoIosSearch className="h-4 w-4" />
          </div>
          <input
            type="search"
            placeholder="Search by name or email..."
            name="q"
            // defaultValue={query}
            className="pl-10 pr-4 py-2 w-full md:w-80 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </form>
      </div>
      <Content />
    </div>
  );
}
