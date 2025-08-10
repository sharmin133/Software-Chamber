import React from 'react';
import { FaCheckCircle } from 'react-icons/fa'; // Assuming you have react-icons installed

const BannerContent = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden flex items-center justify-center p-4">

      {/* Layer 1 (bottom-most) - Centered, but slightly offset vertically */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[35%] w-[700px] h-[350px] rounded-[40px] bg-white/10 backdrop-blur-md shadow-2xl border border-white/30 z-10" />

      {/* Layer 2 (middle) - Centered, but slightly offset vertically */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[740px] h-[370px] rounded-[40px] bg-white/10 backdrop-blur-md shadow-2xl border border-white/30 z-20" />

      {/* Layer 3 (top-most) - Centered, but slightly offset vertically */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[780px] h-[390px] rounded-[40px] bg-white/10 backdrop-blur-md shadow-2xl border border-white/30 z-30" />

      {/* Fourth Layer (Content) - This is the main part with the text and timeline, also centered */}
      <div className="absolute top-0 left-0 w-full h-full p-8 flex items-center justify-center z-40 text-white font-sans">
        <div className="relative w-full h-full p-4 flex items-center justify-center">
          
          {/* Main Container */}
          <div className="flex gap-16">

            {/* Left Buttons Container */}
<div className="flex flex-col justify-around items-end gap-4 mr-6 relative">
  <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-white/10 text-white text-sm font-medium shadow-inner hover:shadow-lg hover:scale-105 transition-transform duration-300 w-[240px] relative z-20">
    <FaCheckCircle className="text-green-400" />
    Website Development
    {/* Connector line from this button */}
    <span className="absolute top-1/2 -right-20 w-20 h-8 -translate-y-1/2">
 <svg
  viewBox="0 0 80 32"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="w-full h-full"
>
  <path
    d="M80 4 H30 L10 28 H0"
    stroke="rgba(255,255,255,0.5)"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
</span>
  </button>
  <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-white/10 text-white text-sm font-medium shadow-inner hover:shadow-lg hover:scale-105 transition-transform duration-300 w-[240px] relative z-20">
    <FaCheckCircle className="text-green-400" />
    Mobile App Development
    {/* Connector line from this button */}
   <span className="absolute top-1/2 -right-20 w-20 h-8 -translate-y-1/2">
 <svg
  viewBox="0 0 80 32"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="w-full h-full"
>
  <path
    d="M80 4 H30 L10 28 H0"
    stroke="rgba(255,255,255,0.5)"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
</span>

  </button>
</div>
         <div className='flex gap-2'>
             
            {/* Left Card (Timeline) */}
            <div className="relative w-[400px] rounded-3xl bg-gradient-to-r from-[#22C1AD]/0 via-[#22C1AD]/50 to-[#22C1AD]/0 p-8 px-12 backdrop-blur-lg border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.5)]">
              
              {/* Months */}
              <div className="flex justify-between text-gray-300 text-sm font-medium mb-6">
                <span>Aug</span>
                <span>Sep</span>
                <span>Oct</span>
              </div>

              {/* Vertical Lines with Circles */}
              <div className="absolute left-0 right-0 top-[73px] bottom-0 flex justify-around px-6 pointer-events-none">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="flex flex-col items-center">
                    {/* Circle at top of line */}
                    <span className="w-2 h-2 rounded-full bg-white/50 shadow-[0_0_6px_rgba(255,255,255,0.6)] mb-2"></span>
                    {/* Line */}
                    <span className="w-[1px] flex-1 bg-white/10"></span>
                  </div>
                ))}
              </div>

              {/* Bars */}
              <div className="relative flex flex-col gap-6 mt-8">
                <div className="w-[70%] px-4 py-2 rounded-lg bg-[#1e293b]/60 border border-white/20 text-white text-sm shadow-lg">
                  <button className='p-2 bg-[#1e293b]/20 rounded-xl '>Mobile app</button>
                </div>
                <div className="w-[60%] ml-auto px-4 py-2 rounded-lg bg-gradient-to-r from-[#3bb1d3] to-[#2a819c] border border-white/20 text-white text-sm shadow-lg">
                 <button className='p-2  px-4 rounded-xl bg-white/20 '> Software</button>
                </div>
                <div className="w-[80%] px-4 py-2 rounded-lg bg-gradient-to-r from-[#3b9bd3] to-[#4dd37a] border border-white/20 text-white text-sm shadow-lg">
                  <button className='p-2  px-4 rounded-xl bg-white/20 '> Website</button>
                </div>
              </div>
            </div>

            {/* Right Card (Description) */}
            <div className="flex flex-col justify-between rounded-xl p-10 w-[350px] backdrop-blur-lg ">
              
              <div>

                <h2 className="text-white font-bold text-3xl mb-2">
                  Software Service Solutions
                </h2>
                
                <p className="text-gray-400 text-xl leading-relaxed">
                  Plan, track, and manage projects with precision tools.
                </p>
              </div>
              

              
              <button className="mt-6 px-6 py-2 rounded-full bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-white/10 text-white font-medium shadow-inner hover:shadow-lg hover:scale-105 transition-transform duration-300">
                Discover
              </button>


               <span className="absolute bottom-50 -right-22 w-20 h-8 -translate-y-1/2">
 <svg
  viewBox="0 0 80 32"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="w-full h-full"
>
  <path
    d="M80 4 H30 L10 28 H0"
    stroke="rgba(255,255,255,0.5)"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
</span>



<span className="absolute bottom-8 -right-22 w-20 h-8 -translate-y-1/2">
 <svg
  viewBox="0 0 80 32"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  className="w-full h-full"
>
  <path
    d="M80 4 H30 L10 28 H0"
    stroke="rgba(255,255,255,0.5)"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
</span>
         </div>
              
            </div>

            
            
            {/* Right Buttons Container */}
            <div className="flex flex-col justify-around items-start gap-4 ml-6">
              
                <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-white/10 text-white text-sm font-medium shadow-inner hover:shadow-lg hover:scale-105 transition-transform duration-300 w-[240px]">
                    <FaCheckCircle className="text-green-400" />
                    UI/UX Engineering
                </button>
                <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-white/10 text-white text-sm font-medium shadow-inner hover:shadow-lg hover:scale-105 transition-transform duration-300 w-[240px]">
                    <FaCheckCircle className="text-green-400" />
                    Software Services
                </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default BannerContent;