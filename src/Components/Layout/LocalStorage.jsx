// localStorageUtils.js

// Function to add or update product in local storage
export const addToLocalStorage = (product) => {
  const key = "add-to-product";
  const storedItems = JSON.parse(localStorage.getItem(key)) || [];

  const productIndex = storedItems.findIndex(
    (item) => item._id === product._id
  );

  if (productIndex !== -1) {
    storedItems[productIndex].quantity += 1;
  } else {
    storedItems.push({ ...product, quantity: 1 });
  }

  localStorage.setItem(key, JSON.stringify(storedItems));
};

// Function to retrieve items from local storage
export const getFromLocalStorage = () => {
  const key = "add-to-product";
  const storedItems = JSON.parse(localStorage.getItem(key)) || [];
  return storedItems;
};

// Function to remove an item from local storage by its ID
export const removeFromLocalStorage = (productId) => {
  const key = "add-to-product";
  const storedItems = JSON.parse(localStorage.getItem(key)) || [];

  const updatedItems = storedItems.filter((item) => item._id !== productId);

  localStorage.setItem(key, JSON.stringify(updatedItems));
};
