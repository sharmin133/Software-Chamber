import React from "react";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { PiStarThin } from "react-icons/pi";

const Development = () => {
 

 

  return (

      <div className="relative flex flex-col items-center text-center bg-black text-white overflow-hidden pt-12 ">
      {/* soft green radial glow */}
      <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full blur-[160px] bg-gradient-to-r from-emerald-400/30 via-teal-400/25 to-cyan-400/15 pointer-events-none" />

      {/* small tag */}
       <div className="text-center mb-4">
              <span className="inline-block bg-gradient-to-r from-[#35354f] to-[#1f1f2e] text-cyan-400 text-xs px-2 py-2 rounded-full border border-blue-400">
               <p className="flex gap-3 justify-center items-center"> <span><PiStarThin fill="yellow" /></span>  <span>Smarter idea, instant solutions</span></p>
              </span>
            </div>

      {/* headings */}
      <h2 className=" mt-6 text-4xl md:text-6xl bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent font-semibold">
        Our Software Development Process
      </h2>

      <p className="z-10 mt-4 max-w-xl text-gray-400 px-6">
        Deliver personalized experiences to your customers with AI-powered
        recommendation engines and dynamic content generation.
      </p>

      {/* contact button (daisyUI) */}
      <div className=" mt-6">
       <button className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white px-4 py-2 rounded-full border border-gray-500 hover:bg-cyan-600 transition">
                     <p className='flex items-center gap-2'><span>Contact Us</span> <span className='p-2 bg-white rounded-full'><LuCircleArrowOutUpRight className="text-black"  /></span></p>
                   </button>
      </div>

<div className="mt-12">

  <img className="max-w-4xl" src="https://i.ibb.co.com/bj6ymWcr/Group-1000003451.png" alt="" />
</div>
    
    
    </div>

  );
};

export default Development;