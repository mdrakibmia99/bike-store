import bikeImge from "@/assets/images/home/bike-1.jpg";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "Mountain Bike X200",
    brand: "Brand A",
    model: "2023",
    price: 1200,
    category: "Mountain",
    availability: "In Stock",
    image: bikeImge,
  },
  {
    id: 2,
    name: "Roadster 5000",
    brand: "Brand B",
    model: "2022",
    price: 950,
    category: "Road",
    availability: "Out of Stock",
    image: bikeImge,
  },
  {
    id: 3,
    name: "Electric Glide E100",
    brand: "Brand C",
    model: "2023",
    price: 2500,
    category: "Electric",
    availability: "In Stock",
    image: bikeImge,
  },
  {
    id: 4,
    name: "Hybrid Flex Pro",
    brand: "Brand A",
    model: "2021",
    price: 1100,
    category: "Hybrid",
    availability: "In Stock",
    image: bikeImge,
  },
];

const NewProducts = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all p-4 border border-gray-200"
        >
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md hover:scale-[1.05] transition-all duration-300 cursor-pointer"
            />
            {/* Stock Badge */}
            <Badge
              className={`absolute top-2 left-2 px-3 py-1 text-xs font-semibold ${
                product.availability === "In Stock"
                  ? "bg-green-600 text-white"
                  : "bg-red-600 text-white"
              }`}
            >
              {product.availability}
            </Badge>
          </div>

          <div className="p-3">
            <h2 className="text-lg font-bold mb-1">{product.name}</h2>
            <p className="text-sm text-gray-600 mb-2">Model: {product.model}</p>
            <p className="text-lg font-medium text-gray-800">
              Price: <span className="font-bold text-primary-red">{product.price} tk</span>
            </p>

            <div className="mt-3 flex gap-2">
              {/* View Details Button */}
              <Link to={`/details/${product.id}`} className="flex-1">
                <button className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all">
                  View Details
                </button>
              </Link>

              {/* Add to Cart Button */}
              <button
                className={`p-2 rounded-md ${
                  product.availability === "Out of Stock"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary-red hover:bg-red-700"
                } transition-all`}
                disabled={product.availability === "Out of Stock"}
              >
                <BiCart className="text-white text-lg" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewProducts;
