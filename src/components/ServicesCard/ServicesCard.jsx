import React from "react";
import { FaCheck, FaYarn } from "react-icons/fa"; // Importing yarn icon for knitting

const ServicesCard = () => {
  return (
    <div className="">
      <div className="max-w-3xl mx-auto text-center mt-16">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 border-t-4 border-b-4 border-purple-600 py-4">
          Digital Knitting Services
        </h1>
        <p className="text-lg text-gray-800 mb-8">
          Unleash your creativity with our online knitting solutions.
        </p>
      </div>
      <div className="container mx-auto flex justify-between">
        {/* Card 1 */}
        <div className="">
          <div
            data-aos="fade-up-left"
            className="flex flex-col items-center p-4 sm:p-8 border rounded-3xl bg-[#f3f4f6] border-gray-300 shadow-lg m-2 flex-1 max-w-md transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-lg sm:text-xl font-medium text-[#ff3366] mb-2">
              Beginner Knitting Kit
            </h2>
            <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-500">
              <span className="text-3xl sm:text-4xl font-bold text-[#ff3366]">
                Basic Support
              </span>{" "}
            </p>
            <p className="font-bold text-[#ff3366]">
              Everything You Need to Start
            </p>
            <div className="px-6 py-4 transition-colors duration-300 rounded-lg">
              <p className="mt-4 text-gray-700">
                A perfect starter pack for those looking to dive into the world
                of knitting.
              </p>
              <div className="mt-8 space-y-8">
                <div className="flex items-center">
                  <span className="text-green-500">
                    <FaCheck />
                  </span>
                  <span className="mx-4 text-gray-700">
                    Yarn, Needles, and Patterns
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500">
                    <FaCheck />
                  </span>
                  <span className="mx-4 text-gray-700">Online Tutorials</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500">
                    <FaCheck />
                  </span>
                  <span className="mx-4 text-gray-700">Community Support</span>
                </div>
              </div>
              <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#ff3366] rounded-md hover:bg-[#e62e56] focus:outline-none focus:bg-[#e62e56]">
                Get Started
              </button>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="">
          <div
            data-aos="fade-up-left"
            className="flex flex-col items-center p-4 sm:p-8 border rounded-3xl bg-[#f3f4f6] border-gray-300 shadow-lg m-2 flex-1 max-w-md transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-lg sm:text-xl font-medium text-[#ff3366] mb-2">
              Intermediate Knitting Workshop
            </h2>
            <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-500">
              <span className="text-3xl sm:text-4xl font-bold text-[#ff3366]">
                Intermidiete Support
              </span>{" "}
            </p>
            <p className="font-bold text-[#ff3366]">Enhance Your Skills</p>
            <div className="px-6 py-4 transition-colors duration-300 rounded-lg">
              <p className="mt-4 text-gray-700">
                Ideal for knitters looking to level up their skills with guided
                instruction.
              </p>
              <div className="mt-8 space-y-8">
                <div className="flex items-center">
                  <span className="text-green-500">
                    <FaCheck />
                  </span>
                  <span className="mx-4 text-gray-700">Expert Guidance</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500">
                    <FaCheck />
                  </span>
                  <span className="mx-4 text-gray-700">
                    Advanced Techniques
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500">
                    <FaCheck />
                  </span>
                  <span className="mx-4 text-gray-700">Materials Provided</span>
                </div>
              </div>
              <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#ff3366] rounded-md hover:bg-[#e62e56] focus:outline-none focus:bg-[#e62e56]">
                Join Workshop
              </button>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="">
          <div
            data-aos="fade-up-left"
            className="flex flex-col items-center p-4 sm:p-8 border rounded-3xl bg-[#f3f4f6] border-gray-300 shadow-lg m-2 flex-1 max-w-md transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <h2 className="text-lg sm:text-xl font-medium text-[#ff3366] mb-2">
              Custom Knitting Patterns
            </h2>
            <p className="text-lg sm:text-xl text-center mb-8 mt-4 text-gray-500">
              <span className="text-3xl sm:text-4xl font-bold text-[#ff3366]">
                Premium and Ultimate
              </span>{" "}
            </p>
            <p className="font-bold text-[#ff3366]">
              Unique Designs Tailored to You
            </p>
            <div className="px-6 py-4 transition-colors duration-300 rounded-lg">
              <p className="mt-4 text-gray-700">
                Get personalized knitting patterns designed just for you based
                on your preferences.
              </p>
              <div className="mt-8 space-y-8">
                <div className="flex items-center">
                  <span className="text-green-500">
                    <FaCheck />
                  </span>
                  <span className="mx-4 text-gray-700">Tailored Designs</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500">
                    <FaCheck />
                  </span>
                  <span className="mx-4 text-gray-700">Flexible Formats</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-500">
                    <FaCheck />
                  </span>
                  <span className="mx-4 text-gray-700">Support Available</span>
                </div>
              </div>
              <button className="w-full px-4 py-2 mt-10 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#ff3366] rounded-md hover:bg-[#e62e56] focus:outline-none focus:bg-[#e62e56]">
                Order Pattern
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
