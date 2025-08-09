import React from "react";
import { FaStar } from "react-icons/fa";

const Development = () => {
  const steps = [
    { id: 1, label: "Code" },
    { id: 2, label: "Build" },
    { id: 3, label: "Test" },
    { id: 4, label: "Release" },
    { id: 5, label: "Deploy" },
    { id: 6, label: "Monitor" },
    { id: 7, label: "Build" },
  ];

  // geometry for arc placement (matching the example layout)
  const arc = {
    width: 800,
    height: 380,
    centerX: 400,
    centerY: 320,
    radius: 300,
  };

  return (
    <div className="relative flex flex-col items-center text-center bg-black text-white overflow-hidden pt-12 pb-28">
      {/* soft green radial glow */}
      <div className="absolute -top-36 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] rounded-full blur-[160px] bg-gradient-to-r from-emerald-400/30 via-teal-400/25 to-cyan-400/15 pointer-events-none" />

      {/* small tag */}
      <div className="z-10 mt-6 inline-flex items-center gap-2 bg-black/60 px-4 py-1 rounded-full border border-white/10">
        <FaStar className="text-sm text-emerald-300" />
        <span className="text-sm text-gray-100">Smarter Idea, instant solutions</span>
      </div>

      {/* headings */}
      <h2 className="z-10 mt-6 text-4xl md:text-5xl font-extrabold">
        <span className="text-white">Our </span>
        <span className="text-emerald-300">Software</span>
      </h2>
      <h2 className="z-10 -mt-1 text-4xl md:text-5xl font-extrabold text-emerald-200/70">
        Development Process
      </h2>

      <p className="z-10 mt-4 max-w-xl text-gray-400 px-6">
        Deliver personalized experiences to your customers with AI-powered
        recommendation engines and dynamic content generation.
      </p>

      {/* contact button (daisyUI) */}
      <div className="z-10 mt-6">
        <button className="btn btn-neutral btn-md rounded-full px-6">Contact Us</button>
      </div>

      {/* arc + globe container */}
      <div className="relative mt-14 w-full max-w-[900px] h-[420px]">
        {/* dotted curved path */}
        <svg
          viewBox={`0 0 ${arc.width} ${arc.height}`}
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          aria-hidden
        >
          {/* main dashed arc */}
          <path
            d={`M40,${arc.height - 40} Q${arc.centerX},-120 ${arc.width - 40},${arc.height - 40}`}
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="2"
            strokeDasharray="6 8"
            fill="none"
          />
          {/* dotted accent (slightly above) */}
          <path
            d={`M70,${arc.height - 60} Q${arc.centerX},-80 ${arc.width - 70},${arc.height - 60}`}
            stroke="rgba(56,189,248,0.6)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="1 22"
            fill="none"
            opacity="0.25"
          />
        </svg>

        {/* step nodes placed along the arc */}
        {steps.map((step, i) => {
          // distribute from 0..pi (left -> right along a semi-circle-ish curve)
          const t = i / (steps.length - 1); // 0..1
          const angle = Math.PI * t; // 0..π
          const x = arc.centerX + arc.radius * Math.cos(angle);
          const y = arc.centerY - arc.radius * Math.sin(angle);

          // small rotation so labels face outward slightly
          const rotateDeg = (t - 0.5) * -35;

          return (
            <div
              key={step.id}
              className="absolute flex flex-col items-center w-max -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${(x / arc.width) * 100}%`,
                top: `${(y / arc.height) * 100}%`,
                transform: `translate(-50%, -50%) rotate(${rotateDeg}deg)`,
              }}
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800/80 border border-white/10 flex items-center justify-center text-sm md:text-base font-semibold">
                {step.id}
              </div>

              <span
                className="mt-2 text-xs md:text-sm font-medium text-emerald-300 whitespace-nowrap"
                style={{ transform: `rotate(${ -rotateDeg }deg)` }} // un-rotate the label text
              >
                {step.label}
              </span>
            </div>
          );
        })}

        {/* globe / circle at bottom center */}
        <div
          className="absolute left-1/2 -translate-x-1/2"
          style={{ top: `${(arc.centerY + 40) / arc.height * 100}%` }}
        >
          <div className="relative w-[340px] h-[340px] rounded-full bg-gradient-to-b from-emerald-900/80 to-slate-900/80 border border-emerald-600/30 overflow-hidden">
            {/* dotted globe pattern (simple stylistic representation) */}
            <svg viewBox="0 0 300 300" className="w-full h-full opacity-60">
              <defs>
                <linearGradient id="g" x1="0" x2="1">
                  <stop offset="0%" stopColor="#6EE7B7" stopOpacity="0.06" />
                  <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.06" />
                </linearGradient>
              </defs>

              <circle cx="150" cy="150" r="140" fill="url(#g)" />

              {/* a few dotted patterns to mimic world dots */}
              <g fill="rgba(255,255,255,0.06)">
                <circle cx="105" cy="110" r="2" />
                <circle cx="115" cy="128" r="1.8" />
                <circle cx="130" cy="100" r="1.6" />
                <circle cx="160" cy="140" r="1.8" />
                <circle cx="190" cy="100" r="2" />
                <circle cx="200" cy="150" r="1.6" />
                <circle cx="140" cy="180" r="1.8" />
                <circle cx="100" cy="170" r="1.5" />
                <circle cx="180" cy="190" r="1.7" />
              </g>
            </svg>

            {/* subtle inner glow */}
            <div className="absolute inset-0 rounded-full shadow-[inset_0_40px_80px rgba(16,185,129,0.06)] pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development;
