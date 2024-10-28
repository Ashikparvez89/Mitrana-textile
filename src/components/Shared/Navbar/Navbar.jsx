import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="font-poppins">
      {/* Navbar with gradient background */}
      <div className="navbar bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 text-white shadow-lg">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Dropdown for mobile view */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            {/* Updated dropdown width */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white text-gray-800 rounded-box z-[1] mt-3 w-64 p-3 shadow-md"
            >
              <li className="hover:text-purple-500 transition duration-200">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:text-purple-500 transition duration-200">
                <Link href="/about">About Us</Link>
              </li>
              <li className="hover:text-purple-500 transition duration-200">
                <Link href="services">Services</Link>
              </li>
              <li className="hover:text-purple-500 transition duration-200">
                <Link href="/products">Products</Link>
              </li>
            </ul>
          </div>
          {/* Updated logo with a clean color */}
          <Link href="/" className="text-3xl lg:text-4xl font-bold text-white">
            Mitrana<sup className="text-[18px] text-red-600">TM</sup>{" "}
          </Link>
        </div>

        {/* Navbar Center (for desktop view) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-4">
            <li className="hover:text-yellow-300 transition duration-200">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-yellow-300 transition duration-200">
              <Link href="/about">About Us</Link>
            </li>
            <li className="hover:text-yellow-300 transition duration-200">
              <Link href="/services">Services</Link>
            </li>
            <li className="hover:text-yellow-300 transition duration-200">
              <Link href="/products">Products</Link>
            </li>
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          <a className="btn bg-gradient-to-r from-purple-500 to-pink-500 border-none text-white rounded-lg shadow-md hover:scale-105 transform transition duration-300">
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
