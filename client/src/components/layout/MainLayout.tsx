import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/Footer";
import ScrollToTop from "../shared/ScrollToTop";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen px-4 md:px-0">
      <ScrollToTop />
      <Navbar />
      {/* Main content */}
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
