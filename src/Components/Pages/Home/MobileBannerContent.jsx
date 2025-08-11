import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Connector = ({ direction }) => {
  // Different connector paths based on position
  const pathMap = {
    "top-left": "M20 0 V40 L0 60",
    "top-right": "M40 0 V40 L80 60",
    "bottom-left": "M40 60 V20 L0 0",
    "bottom-right": "M40 60 V20 L80 0",
  };

  const positionClass = {
    "top-left": "absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[99%]",
    "top-right": "absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[99%]",
    "bottom-left": "absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[99%]",
    "bottom-right": "absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[99%]",
  };

  return (
    <svg
      className={positionClass[direction]}
      width="80"
      height="60"
      viewBox="0 0 80 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={pathMap[direction]}
        stroke="rgba(255,255,255,0.6)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const MobileBannerContent = () => {
  return (
    <div className="relative w-full min-h-[500px] overflow-hidden flex items-center justify-center p-2 md:hidden">
      {/* Background Glass Layers */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[35%] w-[300px] h-[160px] rounded-[30px] bg-white/10 backdrop-blur-md shadow-2xl border border-white/30 z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[320px] h-[170px] rounded-[30px] bg-white/10 backdrop-blur-md shadow-2xl border border-white/30 z-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] w-[340px] h-[180px] rounded-[30px] bg-white/10 backdrop-blur-md shadow-2xl border border-white/30 z-30" />

      {/* Content Layer */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-4 z-40 text-white">
        {/* Top Buttons */}
        <div className="flex mb-20 gap-2 w-full justify-center">
          <button  className="relative flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-white/10 text-xs font-medium shadow-inner">
            <FaCheckCircle className="text-green-400" />
            Website Development
            <Connector direction="top-left" />
          </button>
          <button className="relative flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-white/10 text-xs font-medium shadow-inner">
            <FaCheckCircle className="text-green-400" />
            Mobile App Development
            <Connector direction="top-right" />
          </button>
        </div>

        {/* Cards */}
        <div className="flex gap-3 items-center">
          {/* Left Card */}
          <div className="relative w-[150px] h-[120px] rounded-2xl bg-gradient-to-r from-[#22C1AD]/0 via-[#22C1AD]/50 to-[#22C1AD]/0 p-3 backdrop-blur-lg border border-white/10 shadow-[0_0_20px_rgba(0,0,0,0.5)]">
            <div className="flex justify-between text-gray-300 text-[10px] font-medium mb-2">
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
            </div>
            <div className="absolute left-0 right-0 top-[27px] bottom-0 flex justify-around pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="w-2 h-1.5 rounded-full bg-white/50 shadow-[0_0_4px_rgba(255,255,255,0.6)] mb-1"></span>
                  <span className="w-[1px] flex-1 bg-white/10"></span>
                </div>
              ))}
            </div>
            <div className="relative flex flex-col gap-1 mt-2">
              <div className="w-[40%] px-1 py-0.5 rounded-lg bg-[#1e293b]/60 border border-white/20 text-[10px] shadow-lg">
                <button className="px-1 bg-[#1e293b]/20 rounded">Mobile</button>
              </div>
              <div className="w-[45%] px-1 py-0.5 ml-auto rounded-lg bg-gradient-to-r from-[#3bb1d3] to-[#2a819c] border border-white/20 text-[10px] shadow-lg">
                <button className="px-1 bg-white/20 rounded">Software</button>
              </div>
              <div className="w-[40%] px-1 py-0.5 rounded-lg bg-gradient-to-r from-[#3b9bd3] to-[#4dd37a] border border-white/20 text-[10px] shadow-lg">
                <button className="px-1 bg-white/20 rounded">Website</button>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="flex flex-col justify-between rounded-xl p-2 w-[170px] backdrop-blur-lg bg-[#1e293b]/20 border border-white/10 shadow-lg">
            <div>
              <h2 className="text-white font-bold">Software Service</h2>
              <p className="text-gray-400 text-sm">
                Plan, track, and manage projects.
              </p>
            </div>
            <button className="mt-2 py-2 rounded-full bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-white/10 text-xs shadow-inner">
              Discover
            </button>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex gap-4 mt-20 justify-center">
          <button className="relative flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-white/10 text-xs font-medium shadow-inner">
            <FaCheckCircle className="text-green-400" />
            UI/UX Engineering
            <Connector direction="bottom-left" />
          </button>
          <button className="relative flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-white/10 text-xs font-medium shadow-inner">
            <FaCheckCircle className="text-green-400" />
            Software Services
            <Connector direction="bottom-right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileBannerContent;
