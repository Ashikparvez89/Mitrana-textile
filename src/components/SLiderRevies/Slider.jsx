"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./styles.css";
import { review } from "../../lib/review.js";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";
const Slider = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  console.log(review);
  return (
    <div className="container mx-auto py-20">
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">What our client says</h1>
        <h1 className="text-3xl">Here are some Reviews from our client</h1>
      </div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {review.map((reviews, index) => {
          return (
            <SwiperSlide key={index}>
              <section className="bg-white dark:bg-gray-900 py-10 ">
                <div className="container mx-auto">
                  <main className="relative z-20 flex flex-col md:flex-row md:items-center lg:justify-center">
                    <div className="absolute w-full bg-gradient-to-r from-slate-100 via-slate-300 to-slate-300 -z-10 md:h-96 rounded-2xl"></div>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-center md:space-x-6 rounded-2xl bg-white p-6 shadow-lg md:shadow-sm md:bg-transparent md:p-0 lg:space-x-12 lg:px-12 lg:py-8 mt-[25em] lg:mt-2 md:mt-2">
                      <img
                        className="h-[18em] md:w-48 lg:h-64 lg:w-64 rounded-full object-cover shadow-md"
                        src={reviews?.coupleImageFile}
                        alt="client photo"
                      />
                      <div className="mt-4 md:mt-0 md:ml-6">
                        <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between mb-4">
                          <div>
                            <p className="text-xl font-medium text-black">
                              {reviews?.name}
                            </p>
                            <p className="text-blue-500"></p>
                          </div>
                          <div className="mt-2 md:mt-0">
                            <Rating
                              style={{ maxWidth: 180 }}
                              value={reviews?.rating}
                              readOnly
                            />
                          </div>
                        </div>
                        <p className="text-md text-[#66451c] font-semibold">
                          <span className="text-4xl md:text-5xl lg:text-6xl block">
                            <FaQuoteLeft />
                          </span>
                          {reviews?.successStoryReview}
                        </p>
                      </div>
                    </div>
                  </main>
                </div>
              </section>
            </SwiperSlide>
          );
        })}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
