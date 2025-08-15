import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const cards = [
    { title: "Efficiency", text: "Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs." },
    { title: "Adaptability", text: "We provide flexible solutions that evolve with your business requirements and user expectations." },
    { title: "Scalability", text: "Our solutions grow with your business, ensuring reliability and performance at any scale." },
    { title: "Precision", text: "Delivering accurate, detail-oriented solutions that meet high standards of quality." },
    { title: "Innovation", text: "We constantly innovate to provide cutting-edge solutions for evolving markets." },
    { title: "Reliability", text: "Trusted solutions ensuring uptime, security, and performance." },
  ];

  return (
    <div className="bg-white text-gray-800 font-sans py-16 md:py-24 px-4 sm:px-8">
      {/* Header */}
      <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Softwarechamber</h1>
        <p className="text-gray-500 text-xl max-w-2xl mx-auto">
          Deliver personalized experiences to your customers with AI-powered recommendation engines and dynamic content generation.
        </p>
      </div>

      {/* Swiper */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          spaceBetween={30}
          slidesPerView={4}
          loop={false}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {cards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="bg-gray-100 p-8 rounded-3xl relative transition-transform hover:scale-105 duration-300">
                <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                <p className="text-gray-600">{card.text}</p>
              </div>
            </SwiperSlide>
          ))}

          {/* Custom Navigation Buttons with modern look */}
          <div className="swiper-button-prev absolute top-1/2 -left-4 transform -translate-y-1/2 bg-teal-500 hover:bg-teal-600 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg cursor-pointer z-10">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div className="swiper-button-next absolute top-1/2 -right-4 transform -translate-y-1/2 bg-teal-500 hover:bg-teal-600 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg cursor-pointer z-10">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default ChooseUs;
