import { useEffect, useState } from "react";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from "../../assets/navbar/logo.png";

import "./Navbar.css";
import { Link } from "react-router-dom";
import { BsMenuButton } from "react-icons/bs";

const NavBar = () => {
  const [navState, setNavState] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false); // State to control cart toggle
  const [menuOpen, setMenuOpen] = useState(false); // State to control cart toggle
  const [totalQTY, setTotalQTY] = useState(0); // Local state for cart quantity

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

  // Function to toggle the cart state
  const onCartToggle = () => {
    setCartOpen((prevCartOpen) => !prevCartOpen);
  };
  const onMenuToggle = () => {
    setMenuOpen((menuOpen) => !menuOpen);
  };

  return (
    <>
      {/* NavBar */}
      <header
        className={
          !navState
            ? "absolute top-0 left-0 right-0 opacity-100 z-50 bg-transparent"
            : "fixed top-0 left-0 right-0 flex items-center justify-center opacity-100 z-[200] bg-[#000000ca]"
        }
      >
        <nav className="flex px-2 md:px-5 w-[100%] items-center justify-between py-[8px] md:h-[70px] bg-[#00000032] ">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className={`md:w-[150px] w-[100px] h-auto transition-transform duration-300 ${
                navState ? "" : ""
              }`}
            />
          </div>

          {/* Search Input Field */}
          <div
            className={`${
              searchOpen ? "block" : "hidden"
            } absolute top-0 left-0 right-0 mx-auto mt-2 px-4  lg:px-8 w-full max-w-md flex items-center gap-2 justify-between`}
          >
            <input
              type="text"
              placeholder="Search..."
              className="w-full p-2 border rounded-md shadow-md bg-[#0000003e]  text-white placeholder-white"
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="text-white bg-black cursor-pointer rounded p-1"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Desktop and Mobile Menu */}
          <div className="flex items-center gap-3">
            <div className="md:flex gap-3 hidden">
              <Link
                className=" uppercase text-[#fff] font-[500] text-[14px] hover:text-orange-600 duration-300"
                to={"/"}
              >
                Home
              </Link>
              <Link
                className=" uppercase text-[#fff] font-[500] text-[14px] hover:text-orange-600 duration-300"
                to={"/"}
              >
                Our Menu
              </Link>
              <Link
                className=" uppercase text-[#fff] font-[500] text-[14px] hover:text-orange-600 duration-300"
                to={"/"}
              >
                Our Shop
              </Link>
              <Link
                className=" uppercase text-[#fff] font-[500] text-[14px] hover:text-orange-600 duration-300"
                to={"/"}
              >
                Contact
              </Link>
              <Link
                className=" uppercase text-[#fff] font-[500] text-[14px] hover:text-orange-600 duration-300"
                to={"/"}
              >
                About
              </Link>
            </div>
            {/* Search Icon */}
            <button
              type="button"
              className={`flex items-center ms-3 me-1 rounded-full transition-colors duration-300 ${
                navState ? "text-white" : "text-white hover:text-orange-600"
              }`}
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <MagnifyingGlassIcon className="w-6 h-6" />
            </button>

            {/* Cart Icon */}
            <button
              type="button"
              onClick={onCartToggle} // Toggle cart visibility
              className="relative flex items-center  rounded-full transition-transform duration-300 active:scale-110"
            >
              <ShoppingBagIcon
                className={`w-6 h-6 ${
                  navState ? "text-white" : "text-white hover:text-orange-600"
                }`}
              />
              <div
                className={`absolute top-[-8px] right-[-8px] flex items-center justify-center w-5 h-5 text-xs font-medium rounded-full ${
                  navState
                    ? "bg-slate-900 text-white shadow-slate-900"
                    : "bg-white text-slate-900 shadow-slate-100"
                }`}
              >
                {totalQTY}
              </div>
            </button>
            <button
              type="button"
              onClick={onMenuToggle} // Toggle cart visibility
              className="relative flex md:hidden items-center  rounded-full transition-transform duration-300 active:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#fff"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
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
      </header>

      {/* Cart Modal (conditionally rendered based on cartOpen state) */}
      <div
        className={`fixed top-0 inset-0  z-50 flex justify-end items-start transition-transform duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="bg-white p-4 w-[90%] max-w-lg rounded-lg shadow-lg borders mt-12">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Your Cart</h2>
            <button
              onClick={onCartToggle}
              className="text-black p-1 hover:bg-gray-200 rounded-full"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>
          {/* Cart Items (You can replace this with dynamic cart item rendering) */}
          <p>Your cart is currently empty.</p>
          <button
            className="mt-4 w-full bg-black text-white py-2 rounded-md"
            onClick={onCartToggle}
          >
            Close Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
