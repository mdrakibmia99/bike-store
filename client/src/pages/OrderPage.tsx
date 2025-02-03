import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useAuthMeQuery } from "@/redux/features/auth/authApi";
import Loading from "@/components/Loading";

const OrderPage = () => {
  const navigate = useNavigate();
  const { isLoading, data } = useAuthMeQuery(undefined);

  // Mock user data (Replace with actual user state from API)
 

  // State for user input
  const [userDetails, setUserDetails] = useState({
    name: data?.data?.name || "",
    email: data?.data?.email || "",
    phone: data?.data?.phone || "",
    address: data?.data?.address || "",
  });

  // Mock cart data (Replace with actual cart state)
  const cartData = {
    totalQuantity: 3,
    totalPrice: 1500,
    items: [{ id: 1, name: "Bike 1", price: 500 }],
  };
  if(isLoading){
    return <Loading/>
}
console.log(data,'user data')
  return (
    <div className="container mx-auto p-4 lg:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* User Details - Left Side */}
        <div className="w-full">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>User Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input
                  placeholder="Full Name"
                  value={userDetails.name}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, name: e.target.value })
                  }
                />
                <Input
                  placeholder="Email"
                  value={userDetails.email}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, email: e.target.value })
                  }
                />
                <Input
                  placeholder="Phone"
                  value={userDetails.phone}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, phone: e.target.value })
                  }
                />
                <Input
                  placeholder="Address"
                  value={userDetails.address}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, address: e.target.value })
                  }
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary - Right Side */}
        <div className="w-full">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2 text-lg">
              <span>Total Products:</span>
              <span className="font-semibold">{cartData?.totalQuantity}</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Total Price:</span>
              <span className="text-2xl text-green-600">
                Tk.{cartData?.totalPrice}
              </span>
            </div>
            {cartData?.items.length > 0 && (
              <Button
                className="w-full text-white bg-primary-red mt-4"
                onClick={() => navigate("/order")}
              >
                Checkout
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
