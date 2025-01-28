import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const location = useLocation();

  const toggleSubMenu = (menu: string) => {
    setExpandedMenu((prev) => (prev === menu ? null : menu));
  };

  const isActive = (path: string) => location.pathname === path;
  // const isSubmenuActive = (paths: string[]) => paths.includes(location.pathname);

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
          {/* Dashboard */}
          <li>
            <Link
              to="/dashboard"
              className={`block p-2 rounded-md ${
                isActive("/dashboard") ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
            >
              Dashboard
            </Link>
          </li>

          {/* Orders with Submenu */}
          <li>
            <div
              className="hover:bg-gray-700 p-2 cursor-pointer flex justify-between items-center"
              onClick={() => toggleSubMenu("Orders")}
            >
              Orders
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-5 h-5 transform ${
                  expandedMenu === "Orders" ? "rotate-180" : "rotate-0"
                } transition-transform duration-300`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            {expandedMenu === "Orders" && (
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <Link
                    to="/dashboard/orders/all"
                    className={`block p-2 rounded-md ${
                      isActive("/dashboard/orders/all")
                        ? "bg-gray-700"
                        : "hover:bg-gray-700"
                    }`}
                  >
                    All Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/orders/pending"
                    className={`block p-2 rounded-md ${
                      isActive("/orders/pending")
                        ? "bg-gray-700"
                        : "hover:bg-gray-700"
                    }`}
                  >
                    Pending Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/orders/completed"
                    className={`block p-2 rounded-md ${
                      isActive("/orders/completed")
                        ? "bg-gray-700"
                        : "hover:bg-gray-700"
                    }`}
                  >
                    Completed Orders
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Products with Submenu */}
          <li>
            <div
              className="hover:bg-gray-700 p-2 cursor-pointer flex justify-between items-center"
              onClick={() => toggleSubMenu("Products")}
            >
              Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className={`w-5 h-5 transform ${
                  expandedMenu === "Products" ? "rotate-180" : "rotate-0"
                } transition-transform duration-300`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
            {expandedMenu === "Products" && (
              <ul className="ml-4 mt-2 space-y-2">
                <li>
                  <Link
                    to="/products/all"
                    className={`block p-2 rounded-md ${
                      isActive("/products/all")
                        ? "bg-gray-700"
                        : "hover:bg-gray-700"
                    }`}
                  >
                    ALL PRODUCTS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/new"
                    className={`block p-2 rounded-md ${
                      isActive("/products/new")
                        ? "bg-gray-700"
                        : "hover:bg-gray-700"
                    }`}
                  >
                    Add New Product
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/categories"
                    className={`block p-2 rounded-md ${
                      isActive("/products/categories")
                        ? "bg-gray-700"
                        : "hover:bg-gray-700"
                    }`}
                  >
                    Categories
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Customers */}
          <li>
            <Link
              to="/customers"
              className={`block p-2 rounded-md ${
                isActive("/customers") ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
            >
              Customers
            </Link>
          </li>

          {/* Reports */}
          <li>
            <Link
              to="/reports"
              className={`block p-2 rounded-md ${
                isActive("/reports") ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
            >
              Reports
            </Link>
          </li>

          {/* Settings */}
          <li>
            <Link
              to="/settings"
              className={`block p-2 rounded-md ${
                isActive("/settings") ? "bg-gray-700" : "hover:bg-gray-700"
              }`}
            >
              Settings
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="bg-gray-100 h-16 px-4 flex items-center justify-between shadow-md">
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
          <h1 className="text-xl font-semibold">Dashboard</h1>
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
