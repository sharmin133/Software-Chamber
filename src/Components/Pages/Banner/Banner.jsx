import React from "react";
import BannerContent from "./BannerContent";
import { LuCircleArrowOutUpRight } from "react-icons/lu";
import { PiStarThin } from "react-icons/pi";

const Banner = () => {
  return (
  



      <section  style={{ backgroundImage: "url('https://i.ibb.co.com/1fC0ynHx/Frame-2147227302.png')" }} className="bg-cover bg-center text-white px-4 md:px-6 pt-12 pb-28 relative overflow-hidden">
       <div className=" text-white px-6 md:px-12 md:pb-12  flex justify-between items-center shadow-sm">
          <img src="/AllPicture/Frame 2147226406.png" alt="" />
            
      
            {/* Contact Button */}
            <button className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white px-4 py-2 rounded-full border border-gray-500 hover:bg-cyan-600 transition">
              <p className='flex items-center gap-2'><span>Contact Us</span> <span className='p-2 bg-white rounded-full'><LuCircleArrowOutUpRight className="text-black"  /></span></p>
            </button>
          </div>
      
      {/* Tagline */}
      <div className="text-center mb-4">
        <span className="inline-block bg-gradient-to-r from-[#35354f] to-[#1f1f2e] text-cyan-400 text-xs px-2 py-2 rounded-full border border-blue-400">
         <p className="flex gap-3 justify-center items-center"> <span><PiStarThin fill="yellow" /></span>  <span>Smarter idea, instant solutions</span></p>
        </span>
      </div>

      {/* Heading */}

   <h1 className=" text-6xl text-center font-bold bg-gradient-to-r from-[#00FFE0] to-[#FFFFFF] bg-clip-text text-transparent p-12 ">
  We are your Software {''}
  <br />
  <span className="inline-flex items-center gap-3">
    <span>Development</span>
   <span className="flex items-end">
  <img
    className="w-24"
    src="https://i.ibb.co.com/k2Pm9yWb/Frame-2147227301.png"
    alt="Development Icon"
  />
</span>
  </span>{' '}
  Team
  <br />
 
   in The Cloud
</h1>

      {/* Contact Button */}
      <div className="text-center ">
         <button className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white px-4 py-2 rounded-full border border-gray-500 hover:bg-cyan-600 transition">
              <p className='flex items-center gap-2'><span>Contact Us</span> <span className='p-2 bg-white rounded-full'><LuCircleArrowOutUpRight className="text-black"  /></span></p>
            </button>
      </div>

 <BannerContent></BannerContent>
      
    </section>
   
  );
};

export default Banner;
