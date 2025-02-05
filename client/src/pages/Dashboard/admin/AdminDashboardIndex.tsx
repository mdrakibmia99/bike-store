import { MonthlySalesGraph } from "@/components/dashboard/admin/MonthlySalesGraph";
import OrderHistoryGraph from "@/components/dashboard/admin/OrderHistoryGraph";
import { OrderStatusChart } from "@/components/dashboard/admin/OrderStatusChart";
import { VisitorGraph } from "@/components/dashboard/admin/VisitorGraph";
import { Card,  CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useAllUserQuery } from "@/redux/features/Admin/allUsers/allUserApi";
import { useAllOrdersQuery, useRevenueQuery } from "@/redux/features/order/orderApi";
import { useAllProductsQuery } from "@/redux/features/products/productApi";
import { FaBox, FaUsers, FaShoppingCart, FaDollarSign } from "react-icons/fa";

const AdminDashboardIndex = () => {
    const {isLoading:productLoading,data:productData}=useAllProductsQuery(undefined);
    const { isLoading:userLoading, data:userData } = useAllUserQuery(undefined);
    const {isLoading:orderLoading,data:orderData}=useAllOrdersQuery(undefined);
    const {isLoading:revenueLoading,data:revenueData}=useRevenueQuery(undefined);

    return (
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productLoading || orderLoading || revenueLoading || userLoading ? (
              Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={index} className="h-32 w-full rounded-lg" />
              ))
            ) : (
              <>
                <StatsCard icon={<FaBox />} title="Total Products" value={productData?.meta?.total || 0} />
                <StatsCard icon={<FaUsers />} title="Total Users" value={userData?.meta?.total || 0} />
                <StatsCard icon={<FaShoppingCart />} title="Total Orders" value={orderData?.meta?.total || 0} />
                <StatsCard icon={<FaDollarSign />} title="Total Revenue" value={`tk ${revenueData?.data?.totalRevenue || 0}`} />
              </>
            )}
          </div>
          
          <h2 className="text-5xl text-center font-semibold mt-5">Chart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-10">
            <VisitorGraph/>
            <OrderStatusChart/>
          </div>
          <MonthlySalesGraph/>
          <div>
            <OrderHistoryGraph/>
          </div>
        </div>
      );
};

export default AdminDashboardIndex;

// Reusable Stats Card Component
const StatsCard = ({ icon, title, value }: { icon: JSX.Element; title: string; value: string | number }) => {
  return (
    <Card className="shadow-md border rounded-xl flex flex-col items-center p-4  py-5 text-center">
      <div className="text-4xl text-orange-600 mb-2">{icon}</div>
      <CardHeader>
        <CardTitle className="text-3xl font-semibold">{title}</CardTitle>
      </CardHeader>
      {/* <CardContent> */}
        <p className="text-2xl font-bold">{value}</p>
      {/* </CardContent> */}
    </Card>
  );
};
