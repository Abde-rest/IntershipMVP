"use client";
import { useState } from "react";

const FilterDrobDowen = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filter, setFilter] = useState("pending");
  return (
    <div className="relative">
      <button
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none">
        Filter: {filter} ▼
      </button>
      {isFilterOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200">
          <ul className="py-1">
            <li
              className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setFilter("All");
                setIsFilterOpen(false);
              }}>
              All
            </li>
            <li
              className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setFilter("pending");
                setIsFilterOpen(false);
              }}>
              pending
            </li>
            <li
              className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setFilter("Reject");
                setIsFilterOpen(false);
              }}>
              Reject
            </li>
            <li
              className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setFilter("Accept");
                setIsFilterOpen(false);
              }}>
              Accept
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FilterDrobDowen;
