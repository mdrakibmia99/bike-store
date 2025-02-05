import Banner from "@/components/Home/Banner";
import BikeDesign from "@/components/Home/BikeDesign";
import BikeService from "@/components/Home/BikeService";
import NewProducts from "@/components/Home/NewProducts";
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="bg-gray-100">
      <Banner />
      <div className="container mx-auto my-16 px-4 md:px-0">
        <h2 className=" text-center text-3xl md:text-5xl font-bold text-primary-black mb-16">
          Feature Product
        </h2>
        <NewProducts />
        <div className="flex justify-center mt-8">
          <Link to="/bikes">
            <button className=" py-2 px-3 rounded-md text-primary-red text-lg font-semibold border-2 border-primary-red hover:bg-primary-red hover:text-white duration-300 ">
              VIEW ALL
            </button>
          </Link>
        </div>
      </div>

      <div>
        <BikeDesign/>
      </div>
      <div>
        <BikeService />
      </div>
    </div>
  );
};

export default Home;
