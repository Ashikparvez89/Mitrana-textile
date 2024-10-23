"use client";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { FaPhoneSquareAlt } from "react-icons/fa";
import Aos from "aos";
import "./counter.css";

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
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
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="py-20 bg-gradient-to-br from-[#ffe4e6] to-[#ffe5f0]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
            <div className="lg:w-2/4 relative">
              <div className="">
                <img
                  className="rounded-2xl shadow-lg"
                  src="https://i.postimg.cc/cJk262P5/IMG20241022201649.png"
                  alt="Knitting"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-[#2e2a1f] text-2xl sm:text-3xl lg:text-5xl font-bold">
                Welcome to
              </h1>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#ff8a8c] font-bold my-4">
                Knit Master
              </h1>
              <p className="font-bold text-[#2e2a1f] text-lg lg:text-xl">
                Your one-stop solution for all knitting patterns, tutorials, and
                tools. Unlock your potential to create beautiful designs for any
                skill level.
              </p>
              <p className="text-[#2e2a1f] font-bold my-6 text-lg lg:text-xl">
                <span className="text-[#ff4e4a]">Start knitting today</span> and
                bring your creative ideas to life with our easy-to-follow guides
                and expert advice.
              </p>
              <hr />
              <p className="text-[#2e2a1f] font-bold my-8 text-lg lg:text-xl">
                Join a community of passionate knitters and discover thousands
                of patterns tailored to your unique style.
              </p>

              {/* Inquiry Section */}
              <div className="flex flex-col sm:flex-row justify-between gap-6 mt-4">
                <div className="flex justify-center gap-5 items-center">
                  <span className="text-4xl text-[#ff8a8c]">
                    <FaPhoneSquareAlt />
                  </span>
                  <div>
                    <h1 className="text-xl font-semibold">Support Hotline</h1>
                    <h1 className="font-bold">+1234567890</h1>
                  </div>
                </div>
                <div className="flex justify-center gap-5 items-center">
                  <span className="text-4xl text-[#ff8a8c]">
                    <FaPhoneSquareAlt />
                  </span>
                  <div>
                    <h1 className="text-xl font-semibold">Help Desk</h1>
                    <h1 className="font-bold">+1234567890</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Counter Section */}
          <div className="relative z-10 flex flex-col justify-center items-center text-center mt-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <dl className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 overflow-hidden rounded-2xl text-center">
                  {/* First Counter */}
                  <div className="flex flex-col bg-white bg-opacity-70 backdrop-blur-sm py-8 px-6 sm:px-8 border border-[#e2e0d1] shadow-md hover:scale-105 transition-transform">
                    <dd className="order-first text-3xl font-semibold tracking-tight text-[#2e2a1f]">
                      {counterOn && (
                        <CountUp start={0} end={5000} duration={4} />
                      )}
                    </dd>
                    <dt className="text-sm font-semibold leading-6 text-gray-700">
                      Patterns Available
                    </dt>
                  </div>
                  {/* Second Counter */}
                  <div className="flex flex-col bg-white bg-opacity-70 backdrop-blur-sm py-8 px-6 sm:px-8 border border-[#e2e0d1] shadow-md hover:scale-105 transition-transform">
                    <dd className="order-first text-3xl font-semibold tracking-tight text-[#2e2a1f]">
                      {counterOn && (
                        <CountUp start={0} end={1200} duration={2} />
                      )}
                    </dd>
                    <dt className="text-sm font-semibold leading-6 text-gray-700">
                      Tutorials Published
                    </dt>
                  </div>
                  {/* Third Counter */}
                  <div className="flex flex-col bg-white bg-opacity-70 backdrop-blur-sm py-8 px-6 sm:px-8 border border-[#e2e0d1] shadow-md hover:scale-105 transition-transform">
                    <dd className="order-first text-3xl font-semibold tracking-tight text-[#2e2a1f]">
                      {counterOn && (
                        <CountUp start={0} end={350} duration={2} />
                      )}
                    </dd>
                    <dt className="text-sm font-semibold leading-6 text-gray-700">
                      Expert Designers
                    </dt>
                  </div>
                  {/* Fourth Counter */}
                  <div className="flex flex-col bg-white bg-opacity-70 backdrop-blur-sm py-8 px-6 sm:px-8 border border-[#e2e0d1] shadow-md hover:scale-105 transition-transform">
                    <dd className="order-first text-3xl font-semibold tracking-tight text-[#2e2a1f]">
                      {counterOn && (
                        <CountUp start={0} end={15000} duration={2} />
                      )}
                    </dd>
                    <dt className="text-sm font-semibold leading-6 text-gray-700">
                      Happy Knitters
                    </dt>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
};

export default Counter;
