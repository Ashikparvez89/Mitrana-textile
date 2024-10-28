"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaHandHoldingHeart, FaUser } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io";
import { LiaMeetup } from "react-icons/lia";
import {
  FaHandshakeSimpleSlash,
  FaMagnifyingGlassMinus,
} from "react-icons/fa6";

const HowItWorks = () => {
  return (
    <div className="py-10 relative bg-gradient-to-r from-[#fdfcf9] to-[#fefbf2]">
      <div className="max-w-3xl mx-auto text-center mt-16">
        <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-2 border-t-4 border-b-4 border-purple-600 py-4">
          How Do we work with you....
        </h1>
        <p className="text-lg text-gray-800 mb-8">
          Unleash your creativity with our online knitting solutions.
        </p>
      </div>
      {/* Timeline */}
      <VerticalTimeline>
        {/* Step 1 */}
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(to right, #ffe469, #feaa49)",
            color: "#000000",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(102, 69, 28)" }}
          date={
            <img
              src="https://i.postimg.cc/rFVrBr05/rings.png"
              alt="Step 1"
              className="w-24 h-auto mx-auto md:float-left"
            />
          }
          iconStyle={{ background: "rgb(255, 228, 104)", color: "#d35893" }}
          icon={<FaUser />}
        >
          <h1 className="text-2xl md:text-3xl font-bold">Create an Account</h1>
          <p className="text-red-500 font-semibold mt-3 mb-5">
            Join our community
          </p>
          <p className="text-base md:text-lg font-medium">
            Sign up to access a world of knitting patterns and resources
            tailored for you.
          </p>
        </VerticalTimelineElement>

        {/* Step 2 */}
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(to right, #6f6e6c, #131212)",
            color: "#fff",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgb(102, 69, 28)" }}
          date={
            <img
              src="https://i.postimg.cc/vZRsGfMJ/th.jpg"
              alt="Step 2"
              className="w-24 h-auto mx-auto md:float-right"
            />
          }
          iconStyle={{ background: "rgb(255, 228, 104)", color: "#d35893" }}
          icon={<FaMagnifyingGlassMinus />}
        >
          <h1 className="text-2xl md:text-3xl font-bold">Browse Patterns</h1>
          <p className="text-red-500 font-semibold mt-3 mb-5">
            Find your inspiration
          </p>
          <p className="text-base md:text-lg font-medium">
            Explore a variety of knitting patterns, from beginner to advanced
            levels.
          </p>
        </VerticalTimelineElement>

        {/* Step 3 */}
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(to right, #ffc1d4, #8ad9fc)",
            color: "#66451c",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgb(102, 69, 28)" }}
          date={
            <img
              src="https://i.postimg.cc/NfdHBjmS/love-birds.png"
              alt="Step 3"
              className="w-24 h-auto mx-auto md:float-left"
            />
          }
          iconStyle={{ background: "rgb(255, 228, 104)", color: "#d35893" }}
          icon={<FaHandHoldingHeart />}
        >
          <h1 className="text-2xl md:text-3xl font-bold">
            Get Help from Experts
          </h1>
          <p className="text-red-500 font-semibold mt-3 mb-5">
            We&apos;re here for you
          </p>
          <p className="text-base md:text-lg font-medium">
            Connect with experienced knitters for tips and support throughout
            your projects.
          </p>
        </VerticalTimelineElement>

        {/* Step 4 */}
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(to right, #ff8a8c, #8ad9fc)",
            color: "#66451c",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgb(102, 69, 28)" }}
          date={
            <img
              src="https://i.postimg.cc/WznJD2KD/network.png"
              alt="Step 4"
              className="w-24 h-auto mx-auto md:float-right"
            />
          }
          iconStyle={{ background: "rgb(255, 228, 104)", color: "#d35893" }}
          icon={<IoIosInformationCircle />}
        >
          <h1 className="text-2xl md:text-3xl font-bold">Order Materials</h1>
          <p className="text-red-500 font-semibold mt-3 mb-5">
            Get the right supplies
          </p>
          <p className="text-base md:text-lg font-medium">
            Easily purchase high-quality yarns and tools directly through our
            platform.
          </p>
        </VerticalTimelineElement>

        {/* Step 5 */}
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(to right, #ffe469, #feaa49)",
            color: "#66451c",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgb(102, 69, 28)" }}
          date={
            <img
              src="https://i.postimg.cc/FsKjfBbY/chat.png"
              alt="Step 5"
              className="w-24 h-auto mx-auto md:float-left"
            />
          }
          iconStyle={{ background: "rgb(255, 228, 104)", color: "#d35893" }}
          icon={<LiaMeetup />}
        >
          <h1 className="text-2xl md:text-3xl font-bold">Start Knitting</h1>
          <p className="text-red-500 font-semibold mt-3 mb-5">
            Bring your project to life
          </p>
          <p className="text-base md:text-lg font-medium">
            Follow the patterns and create beautiful knitted items with our
            guidance.
          </p>
        </VerticalTimelineElement>

        {/* Step 6 */}
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "linear-gradient(to right, #fefcfb, #feaa49)",
            color: "#66451c",
          }}
          contentArrowStyle={{ borderRight: "7px solid rgb(102, 69, 28)" }}
          date={
            <img
              src="https://i.postimg.cc/Y0ZwGmFm/pngtree-kids-share-and-help-each-other-png-image-8970623.png"
              alt="Step 6"
              className="w-24 h-auto mx-auto md:float-right"
            />
          }
          iconStyle={{ background: "rgb(255, 228, 104)", color: "#d35893" }}
          icon={<FaHandshakeSimpleSlash />}
        >
          <h1 className="text-2xl md:text-3xl font-bold">
            Share Your Creations
          </h1>
          <p className="text-red-500 font-semibold mt-3 mb-5">
            Show off your work
          </p>
          <p className="text-base md:text-lg font-medium">
            Join our community to share your finished projects and inspire
            others.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default HowItWorks;
