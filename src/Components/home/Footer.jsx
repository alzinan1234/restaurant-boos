import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 px-5">
      <div className="container mx-auto py-8">
        {/* CTA Section */}
        <div className="border-b border-gray-700 pb-5">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 mb-6 md:mb-0 flex items-start">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-orange-500 text-3xl mr-4 mt-1" />
                <div>
                  <h4 className="text-white text-lg font-semibold">Find us</h4>
                  <p className="text-gray-500">
                    1010 Avenue, SW 54321, Chandigarh
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0 flex items-start">
              <div className="flex items-start">
                <FaPhone className="text-orange-500 text-3xl mr-4 mt-1" />
                <div>
                  <h4 className="text-white text-lg font-semibold">Call us</h4>
                  <p className="text-gray-500">9876543210</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0 flex items-start">
              <div className="flex items-start">
                <FiMail className="text-orange-500 text-3xl mr-4 mt-1" />
                <div>
                  <h4 className="text-white text-lg font-semibold">Mail us</h4>
                  <p className="text-gray-500">mail@info.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="py-5">
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <div className="mb-6">
                <a href="index.html">
                  <img
                    src="https://i.ibb.co/QDy827D/ak-logo.png"
                    alt="logo"
                    className="max-w-xs"
                  />
                </a>
              </div>
              <p className="text-gray-500 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div>
                <span className="text-white font-semibold text-xl block mb-4">
                  Follow us
                </span>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="text-white text-lg bg-blue-600 p-2 rounded-full"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    className="text-white text-lg bg-blue-400 p-2 rounded-full"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="#"
                    aria-label="Google Plus"
                    className="text-white text-lg bg-red-600 p-2 rounded-full"
                  >
                    <FaGooglePlusG />
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-white text-xl font-semibold mb-4">
                Useful Links
              </h3>
              <ul className="list-none space-y-2">
                <li>
                  <a href="#" className="text-gray-500 hover:text-orange-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-orange-500">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-orange-500">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-orange-500">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-orange-500">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-orange-500">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-orange-500">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-orange-500">
                    Expert Team
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-orange-500">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-500 hover:text-orange-500">
                    Latest News
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-white text-xl font-semibold mb-4">
                Subscribe
              </h3>
              <p className="text-gray-500 mb-4">
                Don’t miss to subscribe to our new feeds, kindly fill the form
                below.
              </p>
              <form action="#" className="relative flex">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="w-full py-3 px-6 bg-gray-800 border border-gray-800 text-white placeholder-gray-500 rounded-l"
                />
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-3 rounded-r absolute right-0 top-0 flex items-center justify-center"
                  aria-label="Subscribe"
                ></button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Area */}
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          <p className="text-gray-500 text-sm">
            Copyright &copy; 2018, All Right Reserved{" "}
            <a
              href="https://codepen.io/anupkumar92/"
              className="text-orange-500"
            >
              Anup
            </a>
          </p>
          <div className="hidden lg:flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-orange-500 text-sm">
              Home
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500 text-sm">
              Terms
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500 text-sm">
              Privacy
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500 text-sm">
              Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-500 text-sm">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
