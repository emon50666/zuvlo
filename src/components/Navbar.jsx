import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

import logo from "../assets/logo.png";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" absolute w-full  ">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center py-4">
          {/* Left Side - Logo */}
          <div>
            <Link to="/">
              <img src={logo} alt="Logo" className="w-32" />
            </Link>
          </div>

          {/* Right Side - Menu Items & Button */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-red-600">
              Fanvue Ai
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-red-600">
              Our Mission
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-red-600">
              Support
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-600">
              Login
            </Link>
            <button className="bg-gradient-to-r from-[#F92716] to-[#C51003] text-white px-7 py-2 rounded-full hover:from-[#C51003] hover:to-[#F92716]">
              Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <IoCloseOutline size={28} /> : <FaBarsStaggered size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-2">
            <Link to="/" className="block text-gray-700 hover:text-red-600">
              Fanvue Ai
            </Link>
            <Link to="/about" className="block text-gray-700 hover:text-red-600">
              Our Mission
            </Link>
            <Link to="/services" className="block text-gray-700 hover:text-red-600">
              Support
            </Link>
            <Link to="/contact" className="block text-gray-700 hover:text-red-600">
              Login
            </Link>
            <button className="w-full bg-gradient-to-r from-[#F92716] to-[#C51003] text-white px-4 py-2 rounded-full hover:from-[#C51003] hover:to-[#F92716]">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
