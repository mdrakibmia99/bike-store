import { Outlet } from "react-router-dom";
import { useState } from "react";
import DashboardSidebar from "../dashboard/DashboardSidebar";





export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);




  return (
    <div className="flex h-screen">
      <div
        className={`bg-gray-800 text-white ${
          isSidebarOpen ? "w-64 block" : "hidden"
        } transition-all duration-300 overflow-y-auto`}
      >
        <div className="p-4 text-lg font-semibold border-b border-gray-700">
          ROYAL KNIGHT
        </div>
      <DashboardSidebar/>
      </div>
      <div className="flex-1 flex flex-col">
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
        <div className="flex-1 bg-gray-50 overflow-y-auto p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

// const data =              {(item.subMenu as any) ? (
//   <>
//     <div
//       className="hover:bg-gray-700 p-2 cursor-pointer flex justify-between items-center"
//       onClick={() => toggleSubMenu(item.name)}
//     >
//       {item.name}
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth="1.5"
//         stroke="currentColor"
//         className={`w-5 h-5 transform ${
//           expandedMenu === item.name ? "rotate-180" : "rotate-0"
//         } transition-transform duration-300`}
//       >
//         <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
//       </svg>
//     </div>
//     {expandedMenu === item.name && (
//       <ul className="ml-4 mt-2 space-y-2">
//         {item.subMenu.map((sub) => (
//           <li key={sub.name}>
//             <Link
//               to={sub.path}
//               className={`block p-2 rounded-md ${
//                 isActive(sub.path) ? "bg-gray-700" : "hover:bg-gray-700"
//               }`}
//             >
//               {sub.name}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     )}
//   </>
// ) : (
//   <Link
//     to={item.path as string}
//     className={`block p-2 rounded-md ${
//       isActive(item.path as string) ? "bg-gray-700" : "hover:bg-gray-700"
//     }`}
//   >
//     {item.name}
//   </Link>
// )}
