/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from "../../assets/navbar/logo.png";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { getFromLocalStorage } from "./LocalStorage";

const NavBar = () => {
  const [navState, setNavState] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [totalQTY, setTotalQTY] = useState(0);

  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);
    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  const onCartToggle = () => {
    setCartOpen((prevCartOpen) => !prevCartOpen);
  };

  const onMenuToggle = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  const cartItem = getFromLocalStorage();

  useEffect(() => {}, [cartItem]);

  return (
    <>
      <header
        className={`${
          !navState
            ? "absolute top-0 left-0 right-0 z-50 bg-transparent"
            : "fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90"
        } transition-all duration-300`}
      >
        <nav className="flex items-center justify-between w-full p-4 md:px-8 md:py-4 bg-transparent">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="w-24 md:w-36 transition-transform duration-300"
            />
          </div>

          {/* Links and Icons */}
          <div className="flex gap-6">
            <div className="hidden md:flex items-center gap-6">
              <Link
                className="text-white uppercase font-medium text-sm hover:text-orange-600 transition duration-300"
                to={`/`}
              >
                HOME
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-6">
              {["Our Menu", "Our Shop", "Contact", "About"].map(
                (link, index) => (
                  <Link
                    key={index}
                    className="text-white uppercase font-medium text-sm hover:text-orange-600 transition duration-300"
                    to={`/${link.toLowerCase().replace(" ", "-")}`}
                  >
                    {link}
                  </Link>
                )
              )}
            </div>
          </div>
          {/* Mobile Menu & Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Search Icon */}
            <div
              className={`relative flex items-center ${
                searchOpen ? `` : `overflow-hidden`
              }`}
            >
              <button
                className={`${
                  navState ? "text-white" : "text-white"
                } transition-colors duration-300 hover:text-orange-600`}
                onClick={() => setSearchOpen(!searchOpen)}
              >
                {searchOpen ? (
                  <button
                    onClick={() => setSearchOpen(false)}
                    className="text-white  p-1 relative z-[1000] ms-1 rounded-full"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                ) : (
                  <MagnifyingGlassIcon className="w-6 h-6" />
                )}
              </button>

              <div
                className={`absolute right-0 top-0 h-full  bg-transparent bg-opacity-60 transition-transform duration-500 ease-in-out flex items-center ${
                  searchOpen ? "translate-x-0 " : "translate-x-full"
                }`}
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-[150px] md:w-64 px-2 py-[4px] border bg-transparent bg-opacity-60 text-white placeholder-white focus:outline-none"
                />
              </div>
            </div>

            {/* Cart Icon */}
            <button
              onClick={onCartToggle}
              className="relative text-white hover:text-orange-600 transition-transform duration-300"
            >
              <ShoppingBagIcon className="w-6 h-6" />
              <div className="absolute top-[-8px] right-[-8px] flex items-center justify-center w-5 h-5 text-xs font-medium bg-white text-black rounded-full">
                {cartItem?.length}
              </div>
            </button>

            {/* Mobile Menu Icon */}
            <button onClick={onMenuToggle} className="text-white md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-[70px] left-0 right-0 bg-black bg-opacity-90 md:hidden flex flex-col items-center py-4 space-y-4">
            <div className=" md:flex items-center gap-6">
              <Link
                className="text-white uppercase font-medium text-lg hover:text-orange-600"
                to={`/`}
              >
                HOME
              </Link>
            </div>

            {["OurMenu", "Our Shop", "Contact", "About"].map((link, index) => (
              <Link
                key={index}
                className="text-white uppercase font-medium text-lg hover:text-orange-600"
                to={`/${link.toLowerCase().replace(" ", "-")}`}
                onClick={onMenuToggle}
              >
                {link}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Cart Modal */}
      <div
        className={`fixed top-0 inset-0 z-50 flex justify-end transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-white w-[90%] max-w-md h-screen p-6 overflow-y-auto shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Your Cart</h2>
            <button onClick={onCartToggle} className="p-1">
              <XMarkIcon className="w-6 h-6 text-gray-500" />
            </button>
          </div>
          {/* -------- all item --------- */}
          <Cart cartItem={cartItem} />
        </div>
      </div>
    </>
  );
};

export default NavBar;
