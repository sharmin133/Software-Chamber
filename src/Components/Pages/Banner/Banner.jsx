import React from "react";
import BannerContent from "./BannerContent";

const Banner = () => {
  return (
    <section className=" text-white px-4 md:px-12 pt-20 pb-28 relative overflow-hidden">
      {/* Tagline */}
      <div className="text-center mb-4">
        <span className="inline-block bg-[#1f1f2e] text-cyan-400 text-xs px-4 py-1 rounded-full">
          💡 Smarter idea, instant solutions
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-center text-3xl md:text-5xl font-bold leading-tight mb-6">
        We are your{" "}
        <span className="text-cyan-400">Software Development 💻👨‍💻</span> Team
        <br />
        in The Cloud
      </h1>

      {/* Contact Button */}
      <div className="text-center mb-12">
        <button className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-cyan-400 hover:text-white transition">
          Contact Us →
        </button>
      </div>

<div className="flex items-center justify-center"> <BannerContent></BannerContent> </div>
      
    </section>
  );
};

export default Banner;
