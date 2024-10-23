import React from "react";

import DownloadApp from "../DownloadApp/DownloadApp";
import Banner from "../Banner/Banner";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import Counter from "../Counter/Counter";
import Products from "../Products/Products";
import HowItWorks from "../HowItworks/HowItWorks";
import ServicesCard from "../ServicesCard/ServicesCard";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <ServicesCard></ServicesCard>
      <Products></Products>
      <WhyChooseUs></WhyChooseUs>
      <Counter></Counter>
      <DownloadApp></DownloadApp>
    </div>
  );
};

export default HomePage;
