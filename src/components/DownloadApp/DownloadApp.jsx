import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";

const DownloadApp = () => {
  return (
    <div className="bg-gradient-to-r from-pink-100 to-blue-100 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="flex flex-col justify-center gap-6 lg:gap-8">
          <div className="text-left">
            <h2 className="text-4xl font-bold text-[#66451c] mb-4 leading-tight">
              Download Our App
            </h2>
            <p className="text-lg text-[#66451c] mb-6 max-w-md">
              Experience seamless connectivity and manage your account with
              ease. Download our app today!
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:gap-6 justify-center items-center">
            <img
              className="w-48 lg:w-full"
              src="https://i.postimg.cc/MGxFkx5p/play-store-logo.png"
              alt=""
            />
            <img
              className="w-48 lg:w-full"
              src="https://i.postimg.cc/GpQSdNgJ/app-store-logo.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-full max-w-xs lg:max-w-md">
          <img
            src="https://i.postimg.cc/0NtdpJGV/Mobile-Apps-for-Knitters-feat.png"
            alt="App Promotion"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
