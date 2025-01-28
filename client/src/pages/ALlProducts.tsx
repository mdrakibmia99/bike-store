import { useState } from "react";
import bikeImge from '@/assets/images/home/bike-1.jpg'
import { FieldValues } from "react-hook-form";
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
];

export default function ALlProducts() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    brand: "",
    category: "",
    priceRange: [0, 3000],
    availability: "",
  });

  const handleSearch = (e:FieldValues) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleFilterChange = (e:FieldValues) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearchTerm =
      product.name.toLowerCase().includes(searchTerm) ||
      product.brand.toLowerCase().includes(searchTerm) ||
      product.category.toLowerCase().includes(searchTerm);

    const matchesBrand = filters.brand ? product.brand === filters.brand : true;
    const matchesCategory =
      filters.category ? product.category === filters.category : true;
    const matchesPrice =
      product.price >= filters.priceRange[0] &&
      product.price <= filters.priceRange[1];
    const matchesAvailability =
      filters.availability
        ? product.availability === filters.availability
        : true;

    return (
      matchesSearchTerm &&
      matchesBrand &&
      matchesCategory &&
      matchesPrice &&
      matchesAvailability
    );
  });

  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">All Products</h1>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search by brand, name, or category"
            className="p-2 border border-gray-300 rounded-md flex-1"
            onChange={handleSearch}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition-all"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-bold mb-2">{product.name}</h2>
              <p className="text-sm text-gray-600 mb-1">Brand: {product.brand}</p>
              <p className="text-sm text-gray-600 mb-1">Model: {product.model}</p>
              <p className="text-sm text-gray-600 mb-1">Category: {product.category}</p>
              <p className="text-sm text-gray-600 mb-3">Price: ${product.price}</p>
              <button className="bg-primary-red text-white py-1 px-3 rounded-md hover:bg-primary-red transition">
                View Details
              </button>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center mt-8 text-gray-500">
            No products match your search or filter criteria.
          </div>
        )}
      </div>
    </div>
  );
}
