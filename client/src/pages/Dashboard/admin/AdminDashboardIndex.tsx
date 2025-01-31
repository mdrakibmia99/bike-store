import { SellGraph } from "@/components/dashboard/admin/SellGraph";
import { VisitorGraph } from "@/components/dashboard/admin/VisitorGraph";

const AdminDashboardIndex = () => {
    return (
        <div>
            <VisitorGraph/>
            <SellGraph/>
        </div>
    );
};

export default AdminDashboardIndex;