// src/components/Dashboard.js

import React from 'react';



const BannerContent = () => {
  return (
  <div className="relative w-[500px] h-[500px] bg-gradient-to-br from-green-200 via-pink-200 to-blue-200 overflow-hidden flex items-center justify-center p-4">

  {/* Layer 1 (bottom-most) */}
  <div className="absolute top-35 left-15 w-[350px] h-[350px] rounded-[40px] bg-white/10 backdrop-blur-md shadow-2xl border border-white/30 z-10" />

  {/* Layer 2 (middle) */}
  <div className="absolute top-20 left-12 w-[370px] h-[370px] rounded-[40px] bg-white/10 backdrop-blur-md shadow-2xl border border-white/30 z-20" />

  {/* Layer 3 (top-most) */}
  <div className="absolute top-5 left-10 w-[390px] h-[390px] rounded-[40px] bg-white/10 backdrop-blur-md shadow-2xl border border-white/30 z-30" />

  {/* Fourth Layer (Content) - This is the main part with the text and timeline */}
  <div className="absolute top-0 left-0 w-full h-full p-8 flex items-center justify-center z-40 text-white font-sans">
    <div className="relative w-full h-full p-4">
      {/* Content grid */}
      <div className="grid grid-cols-2 gap-4 items-stretch h-full">
        
        {/* Left section - Timeline and Cards */}
        <div className="flex flex-col space-y-2 h-full">
          <div className="flex justify-between items-center text-gray-400 font-bold mb-2">
            <span className="text-sm">Aug</span>
            <span className="text-sm">Sep</span>
            <span className="text-sm">Oct</span>
          </div>

          {/* Timeline boxes with gradient colors */}
          <div className="space-y-2 flex-1">
            <div className="bg-[#2a304e] p-2 rounded-lg text-gray-200 text-sm">Mobile app</div>
            <div className="bg-gradient-to-r from-[#4a5585] to-[#6074aa] p-2 rounded-lg shadow-md border border-blue-400 text-white text-sm cursor-pointer">Software</div>
            <div className="bg-gradient-to-r from-[#327788] to-[#429d91] p-2 rounded-lg text-white text-sm cursor-pointer">Website</div>
          </div>
        </div>

        {/* Right section - Main Description Card */}
        <div className="flex flex-col justify-between h-full">
          <div className="flex flex-col">
            <h3 className="text-base md:text-lg font-bold text-gray-100 mb-1">Software Service Solutions</h3>
            <p className="text-gray-400 text-xs leading-relaxed">
              Plan, track, and manage projects with precision tools.
            </p>
          </div>
          <button className="self-start mt-4 px-4 py-2 text-xs font-semibold text-white bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300">
            Discover
          </button>
        </div>
      </div>
    </div>
  </div>

</div>
      
    //   <div className="relative z-40 max-w-xl w-full bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl shadow-xl px-10 py-12 text-center text-white">
    //     <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow">Plan Your Project</h2>
    //     <p className="text-base md:text-lg mb-6 drop-shadow">
    //       Organize and manage your tasks efficiently using our modern timeline interface.
    //     </p>
    //     <button className="mt-2 px-6 py-2 rounded-full bg-purple-500/70 hover:bg-purple-600 transition-colors text-white font-semibold shadow-lg">
    //       Get Started
    //     </button>
      
  );
};

export default BannerContent;