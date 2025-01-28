import Banner from "@/components/Home/Banner";
import NewProducts from "@/components/Home/NewProducts";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner/>
      <div className="my-16">
      <h2 className="text-center text-5xl font-semibold text-primary-red mb-16">NEW BIKES</h2>
      <NewProducts/>
        <div className="flex justify-center mt-8">
          <Link to='/bikes'>
          <button className=" py-2 px-3 rounded-md text-primary-red text-lg font-semibold border-2 border-primary-red hover:bg-primary-red hover:text-white duration-300 ">VIEW ALL</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
