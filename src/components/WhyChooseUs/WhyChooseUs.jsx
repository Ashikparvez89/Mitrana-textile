"use client";
import React, { useEffect } from "react";
import "./whychooose.css"; // Import your CSS file
import Aos from "aos";

const WhyChooseUs = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out-sine",
      delay: 0,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="py-10 my-20 md:mt-24 lg:mt-72">
      <div
        data-aos="fade-up"
        className="bg-gradient-to-r from-slate-500 to-slate-800 pt-[5.5em] pb-[40em] lg:py-[12.5em] flex justify-center items-center flex-col relative custom-before"
      >
        <h1 className="text-[#ffb400] text-xl md:text-2xl font-bold">
          #1 Digital Knitting Solution Company
        </h1>
        <h1 className="text-4xl md:text-5xl font-bold text-[#FFFF00] my-4">
          Why Choose Us
        </h1>
        <h1 className="text-[#c6be4d] text-lg md:text-xl font-bold text-center px-4">
          Innovative, Reliable, and Trusted Knitting Solutions Worldwide.
        </h1>

        <div className="absolute bottom-[-8em] z-10 w-full px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-4">
            <div className="bg-white py-5 px-8 flex flex-col justify-center items-center gap-5 rounded-md shadow-xl">
              <img
                className="max-w-[20%]"
                src="https://i.postimg.cc/9FPdD4Nf/prize.png"
                alt="Most Trusted"
              />
              <h1 className="text-[#66451c] text-lg font-bold text-center">
                Most Trusted
              </h1>
              <p className="text-[#66451c] text-md font-semibold max-w-[16em] mx-auto text-center">
                Trusted by knitting enthusiasts and professionals across the
                globe for innovative digital solutions.
              </p>
            </div>
            <div className="bg-white py-5 px-8 flex flex-col justify-center items-center gap-5 rounded-md shadow-xl">
              <img
                className="max-w-[20%]"
                src="https://i.postimg.cc/Z5TrpT1x/trust.png"
                alt="2000+ Projects"
              />
              <h1 className="text-[#66451c] text-lg font-bold text-center">
                2000+ Projects
              </h1>
              <p className="text-[#66451c] text-md font-semibold max-w-[16em] mx-auto text-center">
                Successfully completed over 2000 knitting projects worldwide
                with top-tier quality.
              </p>
            </div>
            <div className="bg-white py-5 px-8 flex flex-col justify-center items-center gap-5 rounded-md shadow-xl">
              <img
                className="max-w-[20%]"
                src="https://i.postimg.cc/fRBYvGsn/rings.png"
                alt="Genuine Solutions"
              />
              <h1 className="text-[#66451c] text-lg font-bold text-center">
                Genuine Solutions
              </h1>
              <p className="text-[#66451c] text-md font-semibold max-w-[16em] mx-auto text-center">
                We offer genuine, cutting-edge knitting solutions, ensuring 100%
                customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
