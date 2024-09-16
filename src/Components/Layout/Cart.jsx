/* eslint-disable react/prop-types */

import { removeFromLocalStorage } from "./LocalStorage";

const Cart = ({ cartItem }) => {
  // Calculate total price
  const getTotalPrice = () => {
    return cartItem.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="p-4 max-w-xl mx-auto mt-16">
      {cartItem.length > 0 ? (
        cartItem.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden mb-4 borders relative"
          >
            <div className="flex items-center mb-4 p-4">
              <img
                className="h-16 w-16 object-contain rounded-lg mr-4"
                src={item.image}
                alt={item.name}
              />
              <div className="flex-1">
                <h2 className="text-lg font-bold">{item.name}</h2>
                <span className="text-gray-600">${item.price.toFixed(2)}</span>
              </div>
              <h1
                onClick={() => removeFromLocalStorage(item._id)} // Fix: pass a function reference
                className="absolute right-4 top-5 cursor-pointer hover:text-red-700"
              >
                X
              </h1>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      )}

      {cartItem.length > 0 && (
        <div className="mt-4 bg-white shadow-lg rounded-lg overflow-hidden p-4">
          <div className="flex justify-between items-center">
            <span className="font-bold text-lg">Grand Total:</span>
            <span className="font-bold text-lg">${getTotalPrice()}</span>
          </div>
          <button className="block w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
