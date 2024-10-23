import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPhoneVolume,
} from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-200 to-blue-200 text-white py-8">
      <section className="pt-16 pb-7">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pb-14 border-b-2 border-gray-200">
            <div className="flex flex-col gap-8 xl:gap-14 w-full lg:max-w-full mx-auto">
              <div className="flex flex-col gap-8">
                <h2 className="font-manrope font-bold text-4xl leading-snug text-gray-900 max-[470px]:text-center">
                  Let’s Build Something Together!
                </h2>
                <p className="text-base font-normal text-gray-500 max-[470px]:text-center">
                  Start your next project with us and bring your ideas to life.
                </p>
                {/* Social Media Links */}
                <div className="flex gap-4 justify-center md:justify-start lg:justify-start">
                  <span className="bg-[#3b5998] p-2 rounded-lg">
                    <FaFacebook />
                  </span>
                  <span className="bg-[#1da1f2] p-2 rounded-lg">
                    <FaTwitter />
                  </span>
                  <span className="bg-[#e1306c] p-2 rounded-lg">
                    <FaInstagram />
                  </span>
                  <span className="bg-[#0077b5] p-2 rounded-lg">
                    <FaLinkedin />
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <button className="flex items-center justify-center gap-2 py-3 pr-5 pl-7 rounded-full text-base font-semibold text-white bg-yellow-800 shadow-sm transition-all duration-500 hover:shadow-yellow-300 hover:bg-yellow-900">
                  Get Started
                  <MdKeyboardDoubleArrowRight />
                </button>
                <button className="flex items-center justify-center gap-2 border-2 border-yellow-800 py-2.5 pr-5 pl-7 rounded-full text-base font-semibold text-yellow-800 bg-white shadow-sm transition-all duration-500 hover:shadow-yellow-300 hover:bg-yellow-800 hover:text-white">
                  Contact Us
                  <FaPhoneVolume />
                </button>
              </div>
            </div>

            {/* Footer Links */}
            <div className="w-full lg:max-w-full mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6 sm:gap-20 md:gap-10 xl:gap-24">
              {/* First Column */}

              <div className="">
                <h6 className="text-lg font-medium text-gray-900 mb-7 text-center sm:text-left">
                  Our Services
                </h6>
                <ul className="flex flex-col items-center sm:items-start gap-6">
                  <li>
                    <a
                      href="#"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-yellow-800"
                    >
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-yellow-800"
                    >
                      App Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-yellow-800"
                    >
                      UI/UX Design
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-yellow-800"
                    >
                      Branding
                    </a>
                  </li>
                </ul>
              </div>

              {/* Second Column */}
              <div className="">
                <h6 className="text-lg font-medium text-gray-900 mb-7 text-center sm:text-left">
                  Explore
                </h6>
                <ul className="flex flex-col items-center sm:items-start gap-6">
                  <li>
                    <a
                      href="#"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-yellow-800"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-yellow-800"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-yellow-800"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-base font-normal text-gray-600 transition-all duration-300 hover:text-yellow-800"
                    >
                      Support
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-7">
            <p className="font-normal text-sm text-gray-500">
              © 2023 Your Company, All Rights Reserved.
            </p>
            <ul className="flex items-center gap-6">
              <li>
                <a
                  href="#"
                  className="text-gray-500 text-sm font-normal transition-all duration-300 hover:text-yellow-800"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 text-sm font-normal transition-all duration-300 hover:text-yellow-800"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-500 text-sm font-normal transition-all duration-300 hover:text-yellow-800"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
