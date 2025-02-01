import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import { useAllUserQuery } from "@/redux/features/Admin/allUsers/allUserApi";

import { useState } from "react";

import { FaTimes, FaCheck } from "react-icons/fa"; 

export function AllUsers() {
  const { isLoading, data } = useAllUserQuery(undefined);
 
  const [search, setSearch] = useState("");

  const filteredData = data?.data?.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  const dataLength = filteredData?.length;
  if (isLoading) return <Loading/>;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex justify-between items-center pr-1">
     
      <input
      className="p-2 my-3 border-black border-2 text-black rounded-md"
      type="text"
      placeholder="Search name..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
      </div>
      <table className="w-full  text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-50 uppercase bg-slate-700  ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
             Phone
            </th>
            <th scope="col" className="px-6 py-3">
             Address
            </th>
            <th scope="col" className="px-6 py-3">
             Role
            </th>
            <th scope="col" className="px-6 py-3">
              Active
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        {(dataLength as number) > 0 && (
          <tbody>
            {filteredData?.map((item) => (
              <tr className="odd:bg-white  even:bg-gray-50 0 border-b  border-gray-200">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  <img src={item?.profileImage} className="w-8 h-8 rounded-full" alt="product Image" />
                </th>
                <td className="px-6 py-4">{item?.name}</td>
                <td className="px-6 py-4">{item?.email}</td>
                <td className="px-6 py-4"> {item?.phone}</td>
                <td className="px-6 py-4">{item?.address}</td>
                <td className="px-6 py-4">{item?.role}</td>
                <td className="px-6 py-4">{item?.isBlocked?<FaTimes className="w-4 text-red-500"/> : <FaCheck className="w-4 text-green-500"/>}</td>
                <td className="px-6 py-4">
                {item?.isBlocked? <Button className="bg-green-600 hover:bg-green-700">Active</Button> : <Button className="bg-red-600 hover:bg-red-700">Block</Button>}
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      {dataLength === 0 && (
        <div className="w-full h-[150px] grid place-items-center text-2xl ">
          <p>Not Found any Product</p>
        </div>
      )}
    </div>
  );
}
