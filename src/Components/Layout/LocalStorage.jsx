// LocalStorage.jsx

// Utility to manage localStorage updates and notify listeners
class LocalStorageManager {
  constructor() {
    this.listeners = [];
  }

  // Add a listener that will be called whenever localStorage is updated
  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  // Notify all listeners about the change
  notifyListeners() {
    const storedItems = this.getFromLocalStorage();
    this.listeners.forEach((listener) => listener(storedItems));
  }

  // Function to add or update product in local storage
  addToLocalStorage2(product) {
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
    this.notifyListeners();
  }

  // Function to retrieve items from local storage
  getFromLocalStorage() {
    const key = "add-to-product";
    return JSON.parse(localStorage.getItem(key)) || [];
  }

  // Function to remove an item from local storage by its ID
  removeFromLocalStorage(productId) {
    const key = "add-to-product";
    let storedItems = JSON.parse(localStorage.getItem(key)) || [];

    storedItems = storedItems.filter((item) => item._id !== productId);

    localStorage.setItem(key, JSON.stringify(storedItems));
    this.notifyListeners(); // Notify listeners after update
  }
}

// Create a global instance of LocalStorageManager
export const localStorageManager = new LocalStorageManager();
