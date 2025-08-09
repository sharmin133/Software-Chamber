import React from 'react';

const Services = () => {
  return (
    <div className="text-white p-8 md:p-16 bg-white ">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-12 md:mb-20">
        <h2 className="text-4xl md:text-6xl text-black font-bold">
          Services
          <span className="text-green-400 ml-4 text-5xl">✨</span>
        </h2>
       <div className='flex items-center justify-baseline gap-2  '>
        <div className='text-black font-semibold '>All Services</div>

        <div className="w-8 h-8 bg-gray-300 text-black rounded-full flex items-center justify-center cursor-pointer">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          
        </div>
           </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-8 items-center justify-center">
        
        {/* Card 1 */}
        <div className="bg-gray-100 text-black p-8 md:p-12 rounded-3xl w-full md:w-1/3 transition-transform duration-300 hover:scale-105">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Web & Mobile App Development</h3>
          <p className="text-gray-700">
            We build responsive, user-centric web and mobile applications tailored to your business goals using the latest technologies.
          </p>
          <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center cursor-pointer mt-8">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>

        {/* Card 2 (Highlighted) */}
        <div className="bg-teal-500 text-white p-8 md:p-12 rounded-3xl w-full md:w-1/3 transition-transform duration-300 hover:scale-105">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Application Software Services</h3>
          <p>
            We offer comprehensive application software services, from planning to deployment, ensuring high performance and usability.
          </p>
          <div className="w-12 h-12 bg-white text-teal-500 rounded-full flex items-center justify-center cursor-pointer mt-8">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-100 text-black p-8 md:p-12 rounded-3xl w-full md:w-1/3 transition-transform duration-300 hover:scale-105">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Software Coding & Optimization</h3>
          <p className="text-gray-700">
            Our team improves existing software with clean, optimized code to enhance speed, scalability, and performance.
          </p>
          <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center cursor-pointer mt-8">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Services;
