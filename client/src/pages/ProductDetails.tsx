import { useParams, Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { Badge } from "@/components/ui/badge";
import bikeImge from "@/assets/images/home/bike-1.jpg";

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
    description: "The Mountain Bike X200 is built for rugged terrain, offering excellent suspension and durability for extreme trails.",
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
    description: "The Roadster 5000 is a lightweight road bike with a carbon fiber frame, perfect for speed and endurance rides.",
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
    description: "Experience the future of cycling with the Electric Glide E100, featuring a powerful motor and long battery life.",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="text-center text-red-600 text-xl mt-10">Product not found!</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Side - Image */}
          <div className="relative shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-[300px] md:h-[450px] object-cover" />
            <Badge
              className={`absolute top-3 right-3 px-3 py-1 text-sm font-semibold ${
                product.availability === "In Stock" ? "bg-green-600 text-white" : "bg-red-600 text-white"
              }`}
            >
              {product.availability}
            </Badge>
          </div>

          {/* Right Side - Details */}
          <div className="p-6 flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">{product.name}</h1>
            <p className="text-gray-500 text-sm md:text-base mb-2">{product.category} Bike | Model: {product.model}</p>

            <p className="text-lg font-medium text-gray-600 mt-2">
              <span className="font-semibold">Brand:</span> {product.brand}
            </p>
            <p className="text-lg font-medium text-gray-600">
              <span className="font-semibold">Price:</span>{" "}
              <span className="text-primary-red font-bold text-xl">{product.price} tk</span>
            </p>

            <p className="mt-4 text-gray-700">{product.description}</p>

            {/* Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              {/* Add to Cart Button */}
              <button
                className={`flex items-center gap-2 px-4 py-2 rounded-md text-white font-semibold ${
                  product.availability === "Out of Stock"
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary-red hover:bg-red-700"
                } transition-all`}
                disabled={product.availability === "Out of Stock"}
              >
                <BiCart className="text-xl hover:scale-[1.05]" /> Add to Cart
              </button>

              {/* Go Back Button */}
              <Link to="/cart">
                <button className="px-4 py-2 border bg-gray-900 text-white  rounded-md font-semibold hover:scale-[1.05] hover:text-white duration-300 transition">
                  Order
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
