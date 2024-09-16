import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MenuDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchProducts = async () => {
      try {
        const response = await fetch("/menu.json"); // Adjust path if needed
        const data = await response.json();

        // Find the product with the matching id
        const foundProduct = data?.find((item) => item._id === id);
        setProduct(foundProduct);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, [id]);

  return (
    <div>
      <div className="bg-gray-100 dark:bg-gray-800 py-8 pt-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            {/* Product Image Section */}
            <div className="md:flex-1 px-4">
              <div className="h-[460px]  rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={product?.image}
                  alt={product?.name}
                />
              </div>
              <div className="flex -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                    Add to Cart
                  </button>
                </div>
                <div className="w-1/2 px-2">
                  <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                    Add to Wishlist
                  </button>
                </div>
              </div>
            </div>

            {/* Product Info Section */}
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                {product?.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {product?.recipe}
              </p>
              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Price:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    ${product?.price}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700 dark:text-gray-300">
                    Availability:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                    In Stock
                  </span>
                </div>
              </div>
              <div className="mb-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Category:
                </span>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                  {product?.category}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuDetails;
