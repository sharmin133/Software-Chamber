import React, { useEffect } from "react";
import { PiStarThin } from "react-icons/pi";
import AOS from "aos";
import "aos/dist/aos.css";

const ClientStory = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div
      className="bg-gradient-to-t from-[#22C1AD]/20 to-[#1E1E1E] py-20 px-6"
      data-aos="fade-up"
    >
      <div className="text-center mb-4" data-aos="fade-up" data-aos-delay="100">
        <span className="inline-block bg-gradient-to-r from-[#35354f] to-[#1f1f2e] text-cyan-400 text-xs px-2 py-2 rounded-full border border-blue-400">
          <p className="flex gap-3 justify-center items-center">
            <span>
              <PiStarThin fill="yellow" />
            </span>{" "}
            <span>Smarter idea, instant solutions</span>
          </p>
        </span>
      </div>

      <div
        className="text-center max-w-3xl mx-auto mb-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Don’t just take our word for it. Hear what{" "}
          <span className="text-gray-200">our clients say </span>
        </h2>
      </div>


      <div
        className="bg-gradient-to-t from-[#22C1AD]/20 to-[#1E1E1E] rounded-xl p-8 max-w-3xl mx-auto shadow-2xl"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <p className="md:text-lg text-white italic mb-6">
          "Sed sit varius neque turpis enim ut metus consectetur. Tortor urna
          risus phasellus nec. In facilisis pulvinar sagittis odio nibh
          condimentum aliquet commodo."
        </p>

        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center">
            <img
              src="https://i.ibb.co.com/hR4vq0hP/Base.png"
              alt="Alex Larkins"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold text-white">Alex Larkins</p>
              <p className="text-sm text-gray-300">Art Director at Airbnb</p>
            </div>
          </div>

          <div className="text-gray-300 text-sm font-bold uppercase tracking-wide">
            Airbnb
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientStory;
