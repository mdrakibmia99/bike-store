import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white ${
          isSidebarOpen ? "w-64 block" : "hidden"
        } transition-all duration-300 overflow-y-auto`}
      >
        <div className="p-4 text-lg font-semibold border-b border-gray-700">
          ROYAL KNIGHT
        </div>

        <ul className="mt-4 space-y-2 px-2">
          <li className="hover:bg-gray-700 p-2 cursor-pointer">Dashboard</li>
          <li className="hover:bg-gray-700 p-2 cursor-pointer">Orders</li>
          <li className="hover:bg-gray-700 p-2 cursor-pointer">Products</li>
          <li className="hover:bg-gray-700 p-2 cursor-pointer">Customers</li>
          <li className="hover:bg-gray-700 p-2 cursor-pointer">Reports</li>
          <li className="hover:bg-gray-700 p-2 cursor-pointer">Settings</li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col ">
        {/* Navbar */}
        <div className="bg-gray-100 h-16 px-4 flex items-center justify-between shadow-md ">
          <button
            className="text-gray-700 p-2 focus:outline-none"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 6h16.5m-16.5 6h16.5"
              />
            </svg>
          </button>
          <h1 className={`text-xl font-semibold ${isSidebarOpen? 'hidden md:block':'block'}`}>Dashboard</h1>
          <div>
            <button className="text-gray-700 font-medium pr-10">Logout</button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 bg-gray-50 overflow-y-auto p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
