import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  const cards = [
    {
      title: "Web & Mobile App Development",
      text: "We build responsive, user-centric web and mobile applications tailored to your business goals using the latest technologies.",
      bg: "bg-gray-100 text-black",
      hoverBg: "hover:bg-teal-500",
      arrowColor: "text-black",
      animation: "fade-right",
    },
    {
      title: "Application Software Services",
      text: "We offer comprehensive application software services, from planning to deployment, ensuring high performance and usability.",
      bg: "bg-gray-100 text-black",
      hoverBg: "hover:bg-teal-500",
      arrowColor: "text-black",
      animation: "zoom-in",
    },
    {
      title: "Software Coding & Optimization",
      text: "Our team improves existing software with clean, optimized code to enhance speed, scalability, and performance.",
      bg: "bg-gray-100 text-black",
      hoverBg: "hover:bg-teal-500",
      arrowColor: "text-black",
      animation: "fade-left",
    },
  ];

  return (
    <div className="p-8 md:p-16 bg-white">
      {/* Header Section */}
      <div
        className="flex justify-between items-center mb-12 md:mb-20"
        data-aos="fade-down"
      >
        <h2 className="text-3xl md:text-6xl text-black font-bold">
          Services
          <span className="text-green-400 md:ml-4 ml-1 md:text-5xl">✨</span>
        </h2>
        <div className="flex items-center gap-2">
          <div className="text-black font-normal md:font-semibold">
            All Services
          </div>
          <div className="w-8 h-8 bg-gray-300 text-black rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-400 transition">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 items-center justify-center">
        {cards.map((card, i) => (
          <div
            key={i}
            data-aos={card.animation}
            className={`${card.bg} ${card.hoverBg} p-8 md:p-12 rounded-3xl w-full md:w-1/3 transition-all duration-300 hover:scale-105`}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {card.title}
            </h3>
            <p className="text-black">{card.text}</p>
            <div
              className={`w-12 h-12 bg-white ${card.arrowColor} rounded-full flex items-center justify-center cursor-pointer mt-8`}
            >
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
