
import { MonthlySalesGraph } from "@/components/dashboard/admin/MonthlySalesGraph";
import { OrderStatusChart } from "@/components/dashboard/admin/OrderStatusChartOrderStatusChart";
import { VisitorGraph } from "@/components/dashboard/admin/VisitorGraph";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";// Assuming you have an API hook
import { Skeleton } from "@/components/ui/skeleton";
import { useAllUserQuery } from "@/redux/features/Admin/allUsers/allUserApi";
import { useAllOrdersQuery, useRevenueQuery } from "@/redux/features/order/orderApi";
import { useAllProductsQuery } from "@/redux/features/products/productApi";

const AdminDashboardIndex = () => {
    const {isLoading:productLoading,data:productData}=useAllProductsQuery(undefined)
     const { isLoading:userLoading, data:userData } = useAllUserQuery(undefined);
    const {isLoading:orderLoading,data:orderData}=useAllOrdersQuery(undefined)
    const {isLoading:revenueLoading,data:revenueData}=useRevenueQuery(undefined)
//  console.log(revenueData,"revenue data")
    return (
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productLoading || orderLoading || revenueLoading ||userLoading ? (
              // Skeleton loaders while fetching data
              Array.from({ length: 4 }).map((_, index) => (
                <Skeleton key={index} className="h-24 w-full rounded-lg" />
              ))
            ) : (
              <>
                <StatsCard title="Total Products" value={productData?.meta?.total || 0} />
                <StatsCard title="Total Users" value={ userData?.meta?.total || 0} />
                <StatsCard title="Total Orders" value={ orderData?.meta?.total || 0} />
                <StatsCard title="Total Revenue" value={`$${revenueData?.data?.totalRevenue ||0}`} />
              </>
            )}
          </div>
          <h2 className="text-5xl text-center font-semibold mt-5">Chart</h2>
          <div className="grid grid-col-1 md:grid-cols-2 gap-10 py-10">
          <VisitorGraph/>
          <OrderStatusChart/>
          </div>
          <MonthlySalesGraph/>
        </div>
      );
};

export default AdminDashboardIndex;




// Reusable Stats Card Component
const StatsCard = ({ title, value }: { title: string; value: string | number }) => {
  return (
    <Card className="shadow-md border rounded-xl">
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
};


