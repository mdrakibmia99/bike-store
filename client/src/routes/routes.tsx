import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import Login from "../pages/Login";
import SignUpPage from "../pages/SignUpPage";
import Royal from "@/pages/Royal";

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
    path:'/done',
    element: <Royal/>
  },
  {
  path: "*",
    element: <NotFoundPage/>,
  },
  
]);
