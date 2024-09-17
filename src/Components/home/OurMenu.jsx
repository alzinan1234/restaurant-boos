import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { displayedProducts } from "../../App";

const OurMenu = () => {
  const [products, setProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  // Limit the number of products shown if `showAll` is false

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 font sm:grid-cols-2 md:grid-cols-2 gap-10  items-center justify-items-center">
        {displayedProducts.map((product) => (
          <div
            key={product._id}
            className="bg-white p-4 w-full flex-col justify-center items-center flex rounded-lg shadow-2xl shadow-orange-900 border border-transparent hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-105"
          >
            <div className=" flex gap-4 w-[100%]">
              <div className="w-[100%]  ">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-auto rounded-t-lg border-4 w-[100%]"
                />
              </div>
              <div className="relative">
                <h2 className="text-xl font-semibold mt-4 uppercase">
                  {product.name}
                </h2>
                <div className="flex gap-3 justify-center items-center">
                  <p className="text-gray-700 mt-2">{product.recipe}</p>
                  <p className="font-bold mt-4 text-lg text-red-700">
                    ${product.price}
                  </p>
                </div>
                <Link
                  to={`/menu/${product?._id}`}
                  className="flex hover:bg-red-700 cursor-pointer bg-[#EF4444] text-white font-bold h-[40px] w-[100%] justify-center items-center absolute bottom-0"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show 'Show All' button only if there are more than 8 products */}
      {displayedProducts.length > 8 && !showAll && (
        <button
          className="mt-8 px-6 py-2 bg-red-500  text-white font-bold rounded-lg hover:bg-red-800  transition-all duration-300"
          onClick={() => setShowAll(true)}
        >
          View Full Menu
        </button>
      )}
    </div>
  );
};

export default OurMenu;
