"use client";
import HerdaerDah from "@/app/Componet/Header/HerdaerDah";
import Sidbar from "@/app/Componet/SidBar/Sidbar";
import { useState } from "react";

export default function DahbordeLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-[#F9FAFB] min-h-screen">
      {/* Backdrop for mobile */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`w-64 bg-gray-800 text-white fixed top-0 h-screen transition-transform duration-300 ease-in-out z-40
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <Sidbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      </div>

      {/* Main Content */}
      <div
        className={`transition-all duration-300 ${
          isSidebarOpen ? "lg:ml-64" : "lg:ml-0"
        }`}>
        {/* Header */}
        <div
          className={`h-16 bg-white shadow fixed top-0 transition-all duration-300 z-10
          ${isSidebarOpen ? "lg:left-64" : "lg:left-0"} left-0 right-0`}>
          <HerdaerDah
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />
        </div>

        {/* Content */}
        <main className="overflow-x-auto mt-16 p-4 w-full">{children}</main>
      </div>
    </div>
  );
}
