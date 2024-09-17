/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import { displayedProducts } from "../../App";

// Function to handle adding product to local storage
const ShopAllData = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

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
    </div>
  );
};

export default ShopAllData;
