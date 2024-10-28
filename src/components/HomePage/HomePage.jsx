import React from "react";

import DownloadApp from "../DownloadApp/DownloadApp";
import Banner from "../Banner/Banner";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Counter from "../Counter/Counter";
import Products from "../Products/Products";
import HowItWorks from "../HowItworks/HowItWorks";
import ServicesCard from "../ServicesCard/ServicesCard";

import Slider from "../SLiderRevies/Slider";
import Partner from "../Ourpartner/Partner";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Counter></Counter>
      <Products></Products>
      <HowItWorks></HowItWorks>
      <ServicesCard></ServicesCard>
      <WhyChooseUs></WhyChooseUs>
      <Partner></Partner>
      <Slider></Slider>
      <DownloadApp></DownloadApp>
    </div>
  );
};

export default HomePage;
