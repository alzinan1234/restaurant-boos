/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";

// Function to handle adding product to local storage
const SaladData = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchProducts = async () => {
      try {
        const response = await fetch("../../../public/menu.json"); // Replace with actual API URL
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  // Limit the number of products shown if `showAll` is false
  const displayedProducts = showAll ? products : products.slice(0, 8);

  return (
    <div className="flex flex-col items-center px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 w-full">
        {displayedProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white p-4 w-full flex flex-col items-center rounded-lg shadow-2xl border border-transparent hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-105"
          >
            <div className="w-full">
              <img
                src={product.image}
                alt={product.name}
                className="h-auto rounded-t-lg border-4 w-full"
              />
            </div>
            <div className="text-center mt-4">
              <h2 className="text-lg md:text-xl font-semibold uppercase">
                {product.name}
              </h2>
              <p className="text-sm md:text-base text-gray-700 mt-2">
                {product.recipe}
              </p>
              <p className="font-bold text-md md:text-lg mt-4 text-red-700">
                ${product.price}
              </p>
              <button className="mt-4 w-full text-sm md:text-base p-3 bg-pink-700 rounded shadow text-white hover:bg-red-700 transition-colors duration-300">
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show 'Show All' button only if there are more than 8 products */}
      {products.length > 8 && !showAll && (
        <button
          className="mt-8 px-6 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-800 transition-all duration-300"
          onClick={() => setShowAll(true)}
        >
          View Full Menu
        </button>
      )}
    </div>
  );
};

export default SaladData;
