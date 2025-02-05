import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import Login from "../pages/Login";
import SignUpPage from "../pages/SignUpPage";
import ALlProducts from "@/pages/ALlProducts";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import DashboardLayout from "@/components/layout/DashboardLayout";
import FAQPage from "@/pages/FAQPage";
import CartPage from "@/pages/CartPage";
import ProductDetails from "@/pages/ProductDetails";
import DashboardProtected from "@/utils/DashboardProtected";
import AdminDashboardIndex from "@/pages/Dashboard/admin/AdminDashboardIndex";
import AdminProducts from "@/pages/Dashboard/admin/AdminProducts";

import ProfileUpdate from "@/pages/Dashboard/ProfileUpdate";
import { AllUsers } from "@/pages/Dashboard/admin/AllUsers";
import PrivetUserRoute from "@/utils/PrivetUserRoute";
import OrderPage from "@/pages/Order/OrderPage";
import OrderResponse from "@/pages/Order/OrderResponse";
import OrderAdmin from "@/pages/Dashboard/admin/OrderAdmin";
import UserOrders from "@/pages/Dashboard/user/UserOrders";
import UserDashboardIndex from "@/pages/Dashboard/user/UserDashboardIndex";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bikes",
        element: <ALlProducts />,
      },
      {
        path: "/service",
        element: <Services />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element:  <CartPage />,
      },
      {
        path: "/order",
        element: <PrivetUserRoute><OrderPage/></PrivetUserRoute> ,
      },
      {
        path: "/response",
        element: <PrivetUserRoute><OrderResponse/></PrivetUserRoute> ,
      },
      {
        path: "/details/:id",
        element: <ProductDetails />,
      },
      
      {
        path: "/faqs",
        element: <FAQPage />,
      },
     
    
    ],
  },
  {
  path:'/admin/dashboard',
  element: <DashboardProtected role="admin"><DashboardLayout/></DashboardProtected> ,
  children:[
    {
      path: "/admin/dashboard",
      element: <AdminDashboardIndex/>,
    },
    {
      path: "/admin/dashboard/products",
      element: <AdminProducts/>,
    },
    {
      path: "/admin/dashboard/orders",
      element: <OrderAdmin/>,
    },
    {
      path: "/admin/dashboard/customer",
      element: <AllUsers/>,
    },
    {
      path: "/admin/dashboard/profile-setting",
      element: <ProfileUpdate/>,
    },
  ]
  },
  {
  path:'/user/dashboard',
  element: <DashboardProtected role="customer"><DashboardLayout/></DashboardProtected>,
  children:[
    {
      path: "/user/dashboard",
      element: <UserDashboardIndex/>,
    },
    {
      path: "/user/dashboard/viewOrders",
      element: <UserOrders/>,
    },
    {
      path: "/user/dashboard/profile-setting",
      element: < ProfileUpdate/>,
    }
   
  
  ]
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/signup',
    element: <SignUpPage/>
  },
  

  {
  path: "*",
    element: <NotFoundPage/>,
  },
  
]);
