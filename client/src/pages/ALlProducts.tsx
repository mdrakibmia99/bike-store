import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAllProductsQuery } from "@/redux/features/products/productApi";
import Loading from "@/components/Loading";
import { BiCart } from "react-icons/bi";
import { Badge } from "@/components/ui/badge";
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/features/cart/cartSlice";


export default function ALlProducts() {
  // const [searchTerm, setSearchTerm] = useState("");
  const {data,isLoading}= useAllProductsQuery(undefined)
  const dispatch= useAppDispatch()
  const [filters, setFilters] = useState({
    brand: "",
    category: "",
    priceRange: [0, 3000],
    availability: "",
  });

  // const handleSearch = (e:FieldValues) => {
  //   // setSearchTerm(e.target.value.toLowerCase());
    
  // };

  const handleFilterChange = (e:FieldValues) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // const filteredProducts = data?.data?.filter((product) => {
  //   const matchesSearchTerm =
  //     product.name.toLowerCase().includes(searchTerm) ||
  //     product.brand.toLowerCase().includes(searchTerm) ||
  //     product.category.toLowerCase().includes(searchTerm);

  //   const matchesBrand = filters.brand ? product.brand === filters.brand : true;
  //   const matchesCategory =
  //     filters.category ? product.category === filters.category : true;
  //   const matchesPrice =
  //     product.price >= filters.priceRange[0] &&
  //     product.price <= filters.priceRange[1];



  //   return (
  //     matchesSearchTerm &&
  //     matchesBrand &&
  //     matchesCategory &&
  //     matchesPrice 
  //   );
  // });
  if(isLoading){
    return <Loading/>
  }

  return (
    <div className="bg-gray-100 min-h-screen ">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold py-4 text-primary-red text-center">All Products</h1>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search by brand, name, or category"
            className="p-2 border border-gray-300 rounded-md flex-1"
            // onChange={handleSearch}
          />

          {/* Filters */}
          <select
            name="brand"
            className="p-2 border border-gray-300 rounded-md"
            onChange={handleFilterChange}
          >
            <option value="">All Brands</option>
            <option value="Brand A">Brand A</option>
            <option value="Brand B">Brand B</option>
            <option value="Brand C">Brand C</option>
          </select>

          <select
            name="category"
            className="p-2 border border-gray-300 rounded-md"
            onChange={handleFilterChange}
          >
            <option value="">All Categories</option>
            <option value="Mountain">Mountain</option>
            <option value="Road">Road</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Cruiser">Cruiser</option>
          </select>

          <select
            name="availability"
            className="p-2 border border-gray-300 rounded-md"
            onChange={handleFilterChange}
          >
            <option value="">All Availability</option>
            <option value="In Stock">In Stock</option>
            <option value="Out of Stock">Out of Stock</option>
          </select>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {data?.data?.map((product) => (
        <div
          key={product?._id}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-all p-4 border border-gray-200"
        >
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-44 object-cover rounded-md hover:scale-[1.05] transition-all duration-300 cursor-pointer"
            />
            {/* Stock Badge */}
            <Badge
              className={`absolute top-2 left-2 px-3 py-1 text-xs font-semibold ${
                product?.inStock
                  ? "bg-green-600 text-white"
                  : "bg-red-600 text-white"
              }`}
            >
              {product.inStock? 'In Stock':'Out of Stock'}
            </Badge>
          </div>

          <div className="p-3">
            <h2 className="text-lg font-bold mb-1">{product.name}</h2>
            <p className="text-sm text-gray-600 my-3">Model: {product.model}</p>
            <p className="text-lg font-medium text-gray-800">
              Price: <span className="font-bold text-primary-red">{product.price} tk</span>
            </p>

            <div className="mt-3 flex gap-2">
              {/* View Details Button */}
              <Link to={`/details/${product._id}`} className="flex-1">
                <button className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition-all">
                  View Details
                </button>
              </Link>

              {/* Add to Cart Button */}
              <button
                className={`p-2 rounded-md ${
                  !product?.inStock
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-primary-red hover:bg-red-700"
                } transition-all`}
                disabled={!product?.inStock}
                onClick={()=> dispatch(addToCart({...product,selectQuantity:1}))}
              >
                <BiCart className="text-white text-lg" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

        {/* {filteredProducts?.length === 0 && (
          <div className="text-center mt-8 text-gray-500">
            No products match your search or filter criteria.
          </div>
        )} */}
      </div>
    </div>
  );
}
