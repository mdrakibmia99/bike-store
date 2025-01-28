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
import ProductCreate from "@/pages/Dashboard/ProductCreate";
import FAQPage from "@/pages/FAQPage";


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
        path: "/faqs",
        element: <FAQPage />,
      },
      {
        path:'/login',
        element: <Login/>
      },
      {
        path:'/signup',
        element: <SignUpPage/>
      },
    ],
  },
  {
  path:'/dashboard',
  element: <DashboardLayout/>,
  children:[
    {
      path: "/dashboard/orders/all",
      element: < ProductCreate/>,
    }]
  },
  

  {
  path: "*",
    element: <NotFoundPage/>,
  },
  
]);
