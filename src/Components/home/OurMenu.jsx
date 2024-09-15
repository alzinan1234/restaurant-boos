import React, { useState, useEffect } from "react";

const OurMenu = () => {
  const [products, setProducts] = useState([]);

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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-3 p-3 items-center justify-items-center">
      {products.map((product) => (
        <div
          key={product._id}
          className="bg-white p-4 w-[500px] gap-3 justify-center items-center h-[200px] flex rounded-lg shadow-2xl shadow-orange-900 border border-transparent hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-105"
        >
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-t-lg"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
            <p className="text-gray-700 mt-2">{product.recipe}</p>
            <p className="font-bold mt-4 text-lg">${product.price}</p>
            <p className="text-sm text-gray-600 mt-1">{product.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OurMenu;
