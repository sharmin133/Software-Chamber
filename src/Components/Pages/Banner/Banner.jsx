import React, { useEffect } from "react";
import BannerContent from "./BannerContent";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { PiStarThin } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/1fC0ynHx/Frame-2147227302.png')",
      }}
      className="bg-cover bg-center text-white px-4 md:px-6 pt-6 pb-16 md:pb-28 relative overflow-hidden"
    >
      {/* Top Bar */}
      <div className="px-4 md:px-12 pb-4 flex justify-between items-center gap-4">
        <img
          className="w-20 md:w-40"
          src="/AllPicture/Frame 2147226406.png"
          alt="Logo"
        />

        <div className="flex items-center gap-3">
          <button className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white px-3 md:px-4 py-2 rounded-full border border-gray-500 hover:bg-cyan-600 transition text-sm md:text-base whitespace-nowrap">
            <p className="flex items-center gap-2">
              <span>Contact Us</span>
              <span className="p-1.5 md:p-2 bg-white rounded-full">
                <LuCircleArrowOutUpRight className="text-black" />
              </span>
            </p>
          </button>
          <img
            className="w-8 md:w-10"
            src="https://i.ibb.co.com/1G72H07B/Frame-2147227254.png"
            alt="Icon"
          />
        </div>
      </div>

      {/* Tagline */}
      <div className="text-center mb-4">
        <span className="inline-block bg-gradient-to-r from-[#35354f] to-[#1f1f2e] text-cyan-400 text-xs md:text-sm px-3 py-2 rounded-full border border-blue-400">
          <p className="flex gap-2 md:gap-3 justify-center items-center">
            <PiStarThin fill="yellow" />
            <span>Smarter idea, instant solutions</span>
          </p>
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl lg:text-6xl text-center font-bold bg-gradient-to-r from-[#00FFE0] to-[#FFFFFF] bg-clip-text text-transparent px-4 md:px-12 py-6 md:py-12 leading-snug">
        We are your Software
        <br />
        <span className="inline-flex items-center gap-3 flex-wrap justify-center">
          <span>Development</span>
          <span className="flex items-end">
            <img
              className="w-16 md:w-20 lg:w-24"
              src="https://i.ibb.co.com/k2Pm9yWb/Frame-2147227301.png"
              alt="Development Icon"
            />
          </span>
        </span>
        Team
        <br />
        <span className="text-white">in The Cloud</span>
      </h1>

      {/* Contact Button */}
      <div className="text-center mt-4 md:mt-6">
        <button className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white px-4 md:px-6 py-2 rounded-full border border-gray-500 hover:bg-cyan-600 transition text-sm md:text-base">
          <p className="flex items-center gap-2 justify-center">
            <span>Contact Us</span>
            <span className="p-1.5 md:p-2 bg-white rounded-full">
              <LuCircleArrowOutUpRight className="text-black" />
            </span>
          </p>
        </button>
      </div>

      <BannerContent />
    </div>
  );
};

export default Banner;
