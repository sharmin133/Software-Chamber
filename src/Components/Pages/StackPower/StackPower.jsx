import React, { useEffect } from "react";
import { FaSpotify, FaDropbox, FaSlack, FaAmazon, FaUserTie } from "react-icons/fa";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { PiStarThin } from "react-icons/pi";
import AutoScrollLogo from "./AutoScrollLogo";
import AOS from "aos";
import "aos/dist/aos.css";

const StackPower = () => {
  const buttonColor = "#2CCEBA";

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div
      className="bg-gradient-to-t from-[#22C1AD]/10 to-[#1E1E1E] py-16 md:py-24"
      data-aos="fade-up"
    >
      <div className="px-12 pb-20 flex justify-between items-start gap-16">
        {/* Left Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-center leading-snug md:w-1/2">
          Our Stack Powers of the{" "}
          <span className="text-gray-400">World’s</span> Most{" "}
          <span className="text-gray-400">Beloved Companies</span>
        </h2>

        {/* Right Buttons Grid */}
        <div className="grid grid-cols-2 gap-6 md:w-1/2">
          {/* First row */}
          <button
            className="flex items-end gap-3 rounded-full font-medium px-5 py-3"
            style={{ backgroundColor: buttonColor, color: "white" }}
          >
            <FaSpotify
              size={20}
              color="#1DB954"
              className="bg-white w-8 h-8 rounded-full"
            />{" "}
            Spotify
          </button>
          <button
            className="flex items-center gap-3 rounded-full font-medium px-5 py-3"
            style={{ backgroundColor: buttonColor, color: "white" }}
          >
            <FaDropbox
              size={20}
              color="#0061FF"
              className="bg-white w-8 h-8 rounded-full"
            />{" "}
            Dropbox
          </button>

          {/* Second row */}
          <button
            className="flex items-start gap-3 rounded-full font-medium px-5 py-3"
            style={{
              backgroundColor: buttonColor,
              color: "white",
              marginLeft: "10%",
            }}
          >
            <FaSlack
              size={20}
              color="#4A154B"
              className="bg-white w-8 h-8 rounded-full"
            />{" "}
            Slack
          </button>
          <button
            className="flex items-center gap-3 rounded-full font-medium px-5 py-3"
            style={{ backgroundColor: buttonColor, color: "white" }}
          >
            <FaAmazon
              size={20}
              color="#FF9900"
              className="bg-white w-8 h-8 rounded-full"
            />{" "}
            Flipkart
          </button>

          {/* Third row - single button */}
          <button
            className="flex items-center gap-3 rounded-full font-medium px-5 py-3 justify-center col-span-2 md:col-span-1 md:justify-start"
            style={{
              backgroundColor: buttonColor,
              color: "white",
              marginLeft: "20%",
            }}
          >
            <FaUserTie
              size={20}
              color="#E91E63"
              className="bg-white w-8 h-8 rounded-full"
            />{" "}
            TalentQl
          </button>
        </div>
      </div>

      <div
        className="bg-gradient-to-t from-[#1E1E1E] to-[#22C1AD]/30 rounded-xl p-8 max-w-4xl mx-auto shadow-2xl flex flex-col justify-center items-center px-4 py-8"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="flex justify-center p-6 mb-6">
          <img
            src="https://i.ibb.co.com/PvVx04qM/Logo-Icon-Wrapper.png"
            alt="Logo"
            className="w-24"
          />
        </div>

        <h2 className="text-2xl md:text-4xl p text-center font-semibold mb-6 p-4 sm:px-4 text-white">
          Uncover the Design and Development Projects{" "}
          <span className="text-gray-400">That Set Us Apart</span>
        </h2>

        <button className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white px-6 py-3 rounded-full border border-gray-500 hover:bg-cyan-600 transition w-full sm:w-auto max-w-xs">
          <p className="flex items-center gap-2 justify-center text-sm sm:text-base md:text-lg">
            <span>Contact Us</span>
            <span className="p-2 bg-white rounded-full">
              <LuCircleArrowOutUpRight className="text-black text-xs sm:text-sm md:text-base" />
            </span>
          </p>
        </button>
      </div>

      <div>
        <div className="text-center mb-4 py-12" data-aos="fade-up" data-aos-delay="400">
          <span className="inline-block bg-gradient-to-r from-[#35354f] to-[#1f1f2e] text-cyan-400 text-xs px-2 py-2 rounded-full border border-blue-400">
            <p className="flex gap-3 justify-center items-center">
              <span>
                <PiStarThin fill="yellow" />
              </span>{" "}
              <span>Smarter idea, instant solutions</span>
            </p>
          </span>
        </div>
        <AutoScrollLogo />
      </div>
    </div>
  );
};

export default StackPower;
