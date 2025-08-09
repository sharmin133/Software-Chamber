import React from 'react';

const ChooseUs = () => {
  return (
    <div className="bg-white text-gray-800 font-sans py-16 md:py-24 px-4 sm:px-8">
      {/* Header Section */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Why Choose  Softwarechamber
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Deliver personalized experiences to your customers with AI-powered recommendation engines and dynamic content generation.
        </p>
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mb-16">
        <button className="bg-teal-500 text-white rounded-full px-6 py-3 flex items-center space-x-2 transition-transform hover:scale-105">
          <span>Let's Discuss</span>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"></path>
          </svg>
        </button>
      </div>

      {/* Cards Section with Navigation */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Card 1: Efficiency */}
          <div className="bg-gray-100 p-8 rounded-3xl relative transition-transform hover:scale-105 duration-300">
            <div className="absolute top-8 right-8 w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Efficiency</h3>
            <p className="text-gray-600">
              Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.
            </p>
          </div>

          {/* Card 2: Adaptability */}
          <div className="bg-gray-100 p-8 rounded-3xl relative transition-transform hover:scale-105 duration-300">
            <div className="absolute top-8 right-8 w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a5 5 0 00-5 5v2a2 2 0 00-2 2v5a2 2 0 002 2h10a2 2 0 002-2v-5a2 2 0 00-2-2V7a5 5 0 00-5-5zM9 7v2h2V7a1 1 0 00-2 0zm1 4a1 1 0 100 2h1a1 1 0 100-2h-1zm-1 4a1 1 0 100 2h1a1 1 0 100-2h-1zm-3-4a1 1 0 100 2h1a1 1 0 100-2H7zm-1 4a1 1 0 100 2h1a1 1 0 100-2H6zm5-4a1 1 0 100 2h1a1 1 0 100-2h-1zm-1 4a1 1 0 100 2h1a1 1 0 100-2h-1z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Adaptability</h3>
            <p className="text-gray-600">
              Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.
            </p>
          </div>

          {/* Card 3: Scalability */}
          <div className="bg-gray-100 p-8 rounded-3xl relative transition-transform hover:scale-105 duration-300">
            <div className="absolute top-8 right-8 w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Scalability</h3>
            <p className="text-gray-600">
              Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.
            </p>
          </div>

          {/* Card 4: Precision */}
          <div className="bg-gray-100 p-8 rounded-3xl relative transition-transform hover:scale-105 duration-300">
            <div className="absolute top-8 right-8 w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                <path d="M2 12a2 2 0 002 2h1v1a2 2 0 002 2h1a2 2 0 002-2v-1h1a2 2 0 002-2v-1h-1a2 2 0 00-2-2h-1a2 2 0 00-2 2v1H4a2 2 0 00-2 2z"></path>
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">Precision</h3>
            <p className="text-gray-600">
              Software Chamber specializes in creating powerful, scalable, and secure e-commerce solutions tailored to business needs.
            </p>
          </div>
        </div>

        {/* Navigation Arrows (Optional, for a carousel) */}
        <button className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow hidden lg:block">
          <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path>
          </svg>
        </button>
        <button className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow hidden lg:block">
          <svg className="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ChooseUs;