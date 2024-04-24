import React, { useState, useEffect, useContext } from 'react';
import { RiShoppingCart2Line } from 'react-icons/ri'; // Importing cart icon from React Icons
import Logo from '../assets/Logo.jpg'; // Assuming Logo component is defined elsewhere
import { CartContext } from '../context/CartContext'; // Importing the CartContext
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(CartContext); // Accessing the cart state from the CartContext

  // Calculate the total number of items in the cart
  const cartItemCount = cart?.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center lg:hidden">
          <button
            className="text-white ml-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex items-center justify-center lg:hidden"> {/* Centering the logo */}
          <img src={Logo} className="h-8" /> {/* Assuming Logo component displays the website logo */}
        </div>
        <div className="flex items-center lg:hidden relative">
          <Link to={'/cart'}>
            <RiShoppingCart2Line className="text-white mr-4" size={24} /> {/* Using the cart icon */}
            {cartItemCount > 0 && (
              <div className="absolute top-0 right-2 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                {cartItemCount}
              </div>
            )}
          </Link>
        </div>
        <div className="hidden lg:flex items-center">

          <img src={Logo} className="h-10  mr-4" /> {/* Assuming Logo component displays the website logo */}
          <Link to={'/'} className="text-white mr-4">
           Home
          </Link>
          <a href="#" className="text-white mr-4">Products</a>
          <a href="#" className="text-white mr-4">About</a>
        </div>
        <div className="hidden lg:flex items-center relative">
          <a href="#" className="text-white mr-4">Login</a>
          <a href="#" className="text-white bg-blue-500 hover:bg-blue-600 py-2 px-4 rounded">
            <Link to={"/sell"}> Sell </Link>
          </a>
          <Link to={'/cart'}>
            <RiShoppingCart2Line className="text-white ml-4" size={24} /> {/* Using the cart icon */}
            {cartItemCount > 0 && (
              <div className="absolute top-1 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center">
                {cartItemCount}
              </div>
            )}
          </Link>
        </div>
      </div>
      {/* Responsive Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden">
          <Link to={'/'} className="block py-2 px-4 text-white">
          Home
          </Link>
          <a href="#" className="block py-2 px-4 text-white">Products</a>
          <a href="#" className="block py-2 px-4 text-white">About</a>
          <a href="#" className="block py-2 px-4 text-white">Login</a>
          <a href="#" className="block py-2 px-4 text-white bg-blue-500 hover:bg-blue-600 rounded">
            Sell
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
