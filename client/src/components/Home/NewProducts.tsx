import bikeImge from '@/assets/images/home/bike-1.jpg'
import { Link } from 'react-router-dom';
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
    {
      id: 5,
      name: "Cruiser Elite 800",
      brand: "Brand B",
      model: "2020",
      price: 800,
      category: "Cruiser",
      availability: "In Stock",
      image: bikeImge,
    },
    {
      id: 5,
      name: "Cruiser Elite 800",
      brand: "Brand B",
      model: "2020",
      price: 800,
      category: "Cruiser",
      availability: "In Stock",
      image: bikeImge,
    },
    {
      id: 5,
      name: "Cruiser Elite 800",
      brand: "Brand B",
      model: "2020",
      price: 800,
      category: "Cruiser",
      availability: "In Stock",
      image: bikeImge,
    },
    {
      id: 5,
      name: "Cruiser Elite 800",
      brand: "Brand B",
      model: "2020",
      price: 800,
      category: "Cruiser",
      availability: "In Stock",
      image: bikeImge,
    },
    {
      id: 5,
      name: "Cruiser Elite 800",
      brand: "Brand B",
      model: "2020",
      price: 800,
      category: "Cruiser",
      availability: "In Stock",
      image: bikeImge,
    },
    {
      id: 5,
      name: "Cruiser Elite 800",
      brand: "Brand B",
      model: "2020",
      price: 800,
      category: "Cruiser",
      availability: "In Stock",
      image: bikeImge,
    },
    {
      id: 5,
      name: "Cruiser Elite 800",
      brand: "Brand B",
      model: "2020",
      price: 800,
      category: "Cruiser",
      availability: "In Stock",
      image: bikeImge,
    },
    {
      id: 5,
      name: "Cruiser Elite 800",
      brand: "Brand B",
      model: "2020",
      price: 800,
      category: "Cruiser",
      availability: "In Stock",
      image: bikeImge,
    },
  ];
const NewProducts = () => {
     // Sample cart items
 
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {products.slice(0, 6).map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-md  p-4 hover:shadow-lg transition-all"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4 hover:scale-[1.10] transition-all duration-300 cursor-pointer"
              />
              <h2 className="text-lg font-bold mb-2">{product.name}</h2>
              <p className="text-lg font-medium text-gray-600 mb-3 ">Model: <span className="">{product.model}</span> </p>
              <p className="text-lg font-medium text-gray-600 mb-3">Price: <span className="font-bold pr-1 text-xl text-primary-black">{product.price}</span>tk </p>
             <Link to={'/details/'+product.id}>
              <button className="bg-primary-red cursor-pointer text-white  px-3 rounded-md hover:bg-red-700 transition w-full py-2">
                View Details
              </button>
             </Link>
            </div>
          ))}
        </div>
    );
};

export default NewProducts;