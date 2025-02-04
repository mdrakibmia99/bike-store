import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import {
  useAllOrdersQuery,
  useVerifyOrderMutation,
} from "@/redux/features/order/orderApi";
import { useState } from "react";
import { toast } from "sonner";

const OrderAdmin = () => {
  const { data, isLoading } = useAllOrdersQuery(undefined);
  const [verifyOrder] = useVerifyOrderMutation();

  const [search, setSearch] = useState("");

  const filteredData = data?.data?.filter((item) =>
    item._id.toLowerCase().includes(search.toLowerCase())
  );
  const dataLength = filteredData?.length;
  const handleVerify=async(orderId:string)=>{
   const toastId= toast.loading("verifying...")
    const res=  await verifyOrder({ order_id: orderId })
    if(res?.data){
     toast.success("Order verified successfully.", { id: toastId })
    }else{
      toast.error("Failed to verify order.", { id: toastId })
    }
  }
  if (isLoading) return <Loading />;
  console.log(data, "all order");
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex justify-between items-center pr-1">
        <input
          className="p-2 my-3 border-black border-2 text-black rounded-md"
          type="text"
          placeholder="Search id..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <table className="w-full  text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-50 uppercase bg-slate-700  ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              user Email
            </th>
            <th scope="col" className="px-6 py-3">
              product Details
            </th>
            <th scope="col" className="px-6 py-3">
              Transaction Id
            </th>

            <th scope="col" className="px-6 py-3">
              Status
            </th>

            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        {(dataLength as number) > 0 && (
          <tbody>
            {filteredData?.map((item) => (
              <tr key={item?._id} className="odd:bg-white  even:bg-gray-50 0 border-b  border-gray-200">
                <td className="px-6 py-4">{item?._id}</td>
                <td className="px-6 py-4">{item?.user?.email}</td>
                <td className="px-6 py-4">
                  {item?.products.map((product,index) => (
                    <div key={index} className="flex gap-2 justify-between">
                      <p>{product?.product?.name}</p>
                      <p>| {product?.product?.brand}</p>
                      <p>| {product?.product?.category}</p>
                      <p className="text-red-500">
                        | {product?.product?.quantity}
                      </p>
                    </div>
                  ))}
                </td>
                <td className="px-6 py-4">{item?.transaction?.id}</td>
                <td className="px-6 py-4">{item?.status}</td>
                <td className="px-6 py-4">
                  {item?.status.toLowerCase() === "pending" ? (
                    <Button
                      onClick={() =>
                       handleVerify(item?.transaction?.id)
                      }
                    >
                      Verify Order
                    </Button>
                  ) : (
                    <Button>Verified</Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
      {dataLength === 0 && (
        <div className="w-full h-[150px] grid place-items-center text-2xl ">
          <p>Not Found any order</p>
        </div>
      )}
    </div>
  );
};

export default OrderAdmin;
