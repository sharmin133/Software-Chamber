import React from 'react';
// import './SoftwareDevelopmentProcess.css'; // We'll create this file for the circular layout

const globeImage = 'https://i.imgur.com/your-globe-image-here.png'; // Replace with a real image URL or local path

const Development = () => {
  return (
    <div className="bg-[#f0f9ff] text-gray-800 font-sans py-16 md:py-24 overflow-hidden">
      {/* Small Badge */}
      <div className="flex justify-center mb-6">
        <span className="bg-green-700 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center space-x-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
          </svg>
          <span>Smarter idea, instant solutions</span>
        </span>
      </div>

      {/* Header Text */}
      <div className="text-center mb-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Our Software <br className="md:hidden" /> Development Process
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Deliver personalized experiences to your customers with AI-powered recommendation engines and dynamic content generation.
        </p>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mb-16">
        <button className="bg-gray-800 text-white rounded-full px-6 py-3 flex items-center space-x-2 transition-transform hover:scale-105">
          <span>Contact Us</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M11 3a1 1 0 100 2h3.586l-4.293 4.293a1 1 0 001.414 1.414L16 6.414V10a1 1 0 102 0V3a1 1 0 00-1-1h-7z"></path>
            <path d="M4 11a1 1 0 100 2h1a1 1 0 100-2H4zm-1 4a1 1 0 100 2h1a1 1 0 100-2H3zm5-4a1 1 0 100 2h1a1 1 0 100-2H8zm-1 4a1 1 0 100 2h1a1 1 0 100-2H7zm5-4a1 1 0 100 2h1a1 1 0 100-2h-1zm-1 4a1 1 0 100 2h1a1 1 0 100-2h-1zm-3-4a1 1 0 100 2h1a1 1 0 100-2h-1zm-1 4a1 1 0 100 2h1a1 1 0 100-2H7z"></path>
          </svg>
        </button>
      </div>

      {/* Process Visualization Section */}
      <div className="relative w-full max-w-5xl mx-auto flex justify-center mt-12 md:mt-24">
        {/* The Globe Image */}
        <img
          src={globeImage}
          alt="Globe"
          className="w-full md:w-3/4 max-w-2xl animate-pulse-slow"
        />

        {/* Process Steps */}
        <div className="process-steps">
          {/* Use CSS positioning for each step */}
          <div className="step step-1">
            <span className="step-number">1</span>
            <span className="step-label">Code</span>
          </div>
          <div className="step step-2">
            <span className="step-number">2</span>
            <span className="step-label">Build</span>
          </div>
          <div className="step step-3">
            <span className="step-number">3</span>
            <span className="step-label">Test</span>
          </div>
          <div className="step step-4">
            <span className="step-number">4</span>
            <span className="step-label">Release</span>
          </div>
          <div className="step step-5">
            <span className="step-number">5</span>
            <span className="step-label">Deploy</span>
          </div>
          <div className="step step-6">
            <span className="step-number">6</span>
            <span className="step-label">Monitor</span>
          </div>
          <div className="step step-7">
            <span className="step-number">7</span>
            <span className="step-label">Build</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Development;