import { Outlet } from "react-router-dom";
import { useState } from "react";
import DashboardSidebar from "../dashboard/DashboardSidebar";
import { useAppDispatch } from "@/redux/hooks";
import { useLogOutMutation } from "@/redux/features/auth/authApi";
import { logout } from "@/redux/features/auth/authSlice";
import { toast } from "sonner";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dispatch = useAppDispatch();
  const [logOut] = useLogOutMutation();

  const handleLogOut = async () => {
    dispatch(logout());
    toast.success("Logged out!");
    await logOut({});
  };

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 bg-gray-800 text-white transition-all duration-300 overflow-y-auto 
          ${isSidebarOpen ? "w-64" : "w-0"} md:w-64 md:relative`}
      >
        <div className="p-4 text-lg font-semibold border-b border-gray-700">
          ROYAL KNIGHT
        </div>
        <DashboardSidebar />
      </div>

      {/* Sidebar overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* ✅ Fixed Navbar */}
        <div className="bg-gray-100 h-16 px-4 flex items-center justify-between shadow-md fixed top-0 left-0 right-0 z-30 md:relative">
          {/* Sidebar Toggle Button */}
          <button
            className="text-gray-700 p-2 focus:outline-none md:hidden"
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

          <h1 className="text-xl font-semibold">Dashboard</h1>

          {/* Logout Button */}
          <button onClick={handleLogOut} className="text-gray-700 font-medium pr-10">
            Logout
          </button>
        </div>

        {/* ✅ Scrollable Content */}
        <div className="flex-1 bg-gray-50 overflow-auto p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
