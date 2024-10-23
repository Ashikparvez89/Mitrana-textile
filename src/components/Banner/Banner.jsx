"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Typewriter } from "react-simple-typewriter";
import { Slide } from "react-awesome-reveal";

const Carousel = dynamic(
  () => import("react-responsive-carousel").then((mod) => mod.Carousel),
  { ssr: false }
);

const Banner = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Don't render on the server
  }
  const handleDone = () => {};
  const handleType = () => {};

  return (
    <div>
      <div>
        <Carousel
          autoPlay={true}
          swipeable={true}
          emulateTouch={true}
          infiniteLoop={false}
          showThumbs={false}
        >
          <div className="">
            <div
              className="h-[50vh] lg:min-h-screen flex items-center bg-cover bg-no-repeat  bg-[15%] md:bg-[40%] lg:bg-[50%] xl:bg-left-top "
              style={{
                backgroundImage:
                  "url(https://i.postimg.cc/cJk262P5/IMG20241022201649.png)",
              }}
            >
              <div className="absolute flex h-full w-full gap-5 items-center  bg-gradient-to-r  from-[rgba(23,10,21,0.2)] to-[#151515] rounded-xl">
                <div className="text-neutral-content">
                  <div className="max-w-md lg:max-w-2xl ml-3 md:ml-10 lg:ml-28 xl:ml-40 space-y-5 lg:space-y-10 absolute top-[31%] right-[2%] lg:top-[27%] lg:right-[10%] text-left">
                    <h1
                      className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold text-white"
                      style={{
                        paddingTop: "5rem",
                        margin: "auto 0",
                        fontWeight: "normal",
                      }}
                    >
                      Artistry in{" "}
                      <span style={{ color: "blue", fontWeight: "bold" }}>
                        <Typewriter
                          words={["Match", "Partner", "Soulmate", "Dream"]}
                          loop={5}
                          cursor
                          cursorStyle="_"
                          typeSpeed={70}
                          deleteSpeed={50}
                          delaySpeed={1000}
                          onLoopDone={handleDone}
                          onType={handleType}
                        />
                      </span>
                    </h1>
                    <Slide>
                      {" "}
                      <p className="mb-2 max-w-96 md:max-w-sm lg:max-w-md text-white text-md lg:text-lg font-semibold">
                        Your perfect match is just a click away. Start your
                        journey to find love and companionship with our trusted
                        partner search platform.
                      </p>
                    </Slide>
                    <a className="btn font-semibold text-lg outline-none border-none text-red hover:before:bg-red relative h-[50px] w-40 overflow-hidden border border-red-500 bg-[#112a46] px-3 text-[#C6DAF1] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full">
                      <span className="relative">Explore</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SLide-2 */}

          <div className="">
            <div
              className="h-[50vh] lg:min-h-screen flex items-center bg-cover bg-no-repeat  bg-[15%] md:bg-[40%] lg:bg-[50%] xl:bg-left-top "
              style={{
                backgroundImage:
                  "url(https://i.postimg.cc/8CZWSjNk/lalit-kumar-P3z-EXBwabw-A-unsplash.jpg)",
              }}
            >
              <div className="absolute flex h-full w-full gap-5 items-center  bg-gradient-to-r  from-[rgba(23,10,21,0.2)] to-[#151515] rounded-xl">
                <div className="text-neutral-content">
                  <div className="max-w-md lg:max-w-2xl ml-3 md:ml-10 lg:ml-28 xl:ml-40 space-y-5 lg:space-y-10 absolute top-[31%] right-[2%] lg:top-[27%] lg:right-[10%] text-left">
                    <h1
                      className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold text-white"
                      style={{
                        paddingTop: "5rem",
                        margin: "auto 0",
                        fontWeight: "normal",
                      }}
                    >
                      Artistry in{" "}
                      <span style={{ color: "blue", fontWeight: "bold" }}>
                        <Typewriter
                          words={["Match", "Partner", "Soulmate", "Dream"]}
                          loop={5}
                          cursor
                          cursorStyle="_"
                          typeSpeed={70}
                          deleteSpeed={50}
                          delaySpeed={1000}
                          onLoopDone={handleDone}
                          onType={handleType}
                        />
                      </span>
                    </h1>
                    <Slide>
                      {" "}
                      <p className="mb-2 max-w-96 md:max-w-sm lg:max-w-md text-white text-md lg:text-lg font-semibold">
                        Your perfect match is just a click away. Start your
                        journey to find love and companionship with our trusted
                        partner search platform.
                      </p>
                    </Slide>
                    <a className="btn font-semibold text-lg outline-none border-none text-red hover:before:bg-red border-red-500 relative h-[50px] w-40 overflow-hidden border  bg-[#112a46] px-3 text-[#C6DAF1] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full">
                      <span className="relative">Explore</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* slide-3 */}

          <div className="">
            <div
              className="h-[50vh] lg:min-h-screen flex items-center bg-cover bg-no-repeat  bg-[15%] md:bg-[40%] lg:bg-[50%] xl:bg-left-top "
              style={{
                backgroundImage:
                  "url(https://i.postimg.cc/XJX574Yf/lalit-kumar-t-HBMF6-YMo-E-unsplash.jpg)",
              }}
            >
              <div className="absolute flex h-full w-full gap-5 items-center  bg-gradient-to-r  from-[rgba(23,10,21,0.2)] to-[#151515] rounded-xl">
                <div className="text-neutral-content">
                  <div className="max-w-md lg:max-w-2xl ml-3 md:ml-10 lg:ml-28 xl:ml-40 space-y-5 lg:space-y-10 absolute top-[31%] lg:top-[27%] right-[2%] lg:right-[10%] text-left">
                    <h1
                      className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold text-white"
                      style={{
                        paddingTop: "5rem",
                        margin: "auto 0",
                        fontWeight: "normal",
                      }}
                    >
                      Artistry in{" "}
                      <span style={{ color: "blue", fontWeight: "bold" }}>
                        <Typewriter
                          words={["Match", "Partner", "Soulmate", "Dream"]}
                          loop={5}
                          cursor
                          cursorStyle="_"
                          typeSpeed={70}
                          deleteSpeed={50}
                          delaySpeed={1000}
                          onLoopDone={handleDone}
                          onType={handleType}
                        />
                      </span>
                    </h1>
                    <Slide>
                      {" "}
                      <p className="mb-2 max-w-96 md:max-w-sm lg:max-w-md text-white text-md lg:text-lg font-semibold">
                        Whether you&apos;re looking for friendship or true love,
                        our platform helps you connect with those who share your
                        values and interests.
                      </p>
                    </Slide>
                    <a className="btn font-semibold text-lg outline-none border-none text-red hover:before:bg-red relative h-[50px] w-40 overflow-hidden border border-red-500 bg-[#112a46] px-3 text-[#C6DAF1] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full">
                      <span className="relative">Explore</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SLide-4 */}
          {/* 
          <div className="">
            <div
              className="h-[50vh] lg:min-h-screen flex items-center bg-cover bg-no-repeat  bg-[15%] md:bg-[40%] lg:bg-[60%] xl:bg-left-top "
              style={{
                backgroundImage:
                  "url(https://i.ibb.co/HH2HycD/63a6901b3b07c1671860251.png)",
              }}
            >
              <div className="absolute flex h-full w-full gap-5 items-center  bg-gradient-to-r  from-[rgba(23,10,21,0.2)] to-[#151515] rounded-xl">
                <div className="text-neutral-content">
                  <div className="max-w-2xl lg:max-w-2xl ml-3 md:ml-10 lg:ml-28 xl:ml-40 space-y-5 lg:space-y-10 absolute top-[31%] lg:top-[27%] right-[2%] text-left">
                    <h1
                      className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold text-white"
                      style={{
                        paddingTop: "5rem",
                        margin: "auto 0",
                        fontWeight: "normal",
                      }}
                    >
                      Artistry in{" "}
                      <span style={{ color: "blue", fontWeight: "bold" }}>
                        <Typewriter
                          words={["Match", "Partner", "Soulmate", "Dream"]}
                          loop={5}
                          cursor
                          cursorStyle="_"
                          typeSpeed={70}
                          deleteSpeed={50}
                          delaySpeed={1000}
                          onLoopDone={handleDone}
                          onType={handleType}
                        />
                      </span>
                    </h1>
                    <Slide>
                      {" "}
                      <p className="mb-2 max-w-96 md:max-w-sm lg:max-w-md text-white text-md lg:text-lg font-semibold">
                        Build meaningful relationships with our personalized
                        matching service. Find your perfect partner today.
                      </p>
                    </Slide>
                    <a className="btn font-semibold text-lg outline-none border-none text-red hover:before:bg-red  relative h-[50px] w-40 overflow-hidden border border-red-500 bg-[#112a46] px-3 text-[#C6DAF1] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full">
                      <span className="relative">Explore</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </Carousel>
      </div>
    </div>
  );
};

export default Banner;
