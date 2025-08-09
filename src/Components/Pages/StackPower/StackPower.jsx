import React from 'react';

const StackPower = () => {
  return (
    <div className="bg-white px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Left Title */}
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-snug md:w-1/2">
          Our Stack Powers of the World’s Most Beloved Companies
        </h2>

        {/* Right Buttons */}
        <div className=" flex flex-col gap-4">
          <button className=" py-3 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 ">
            Spotify
          </button>
          <button className="px-5 py-3 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition">
            Dropbox
          </button>
          <button className="px-5 py-3 bg-purple-500 text-white rounded-full font-medium hover:bg-purple-600 transition">
            Slack
          </button>
          <button className="px-5 py-3 bg-yellow-500 text-black rounded-full font-medium hover:bg-yellow-600 transition">
            Flipkart
          </button>
          <button className="px-5 py-3 bg-pink-500 text-white rounded-full font-medium hover:bg-pink-600 transition">
            TalentQl
          </button>
        </div>
      </div>




     
  <div className="bg-amber-200  rounded-3xl shadow-xl px-8 py-12 max-w-4xl w-full text-center">
    {/* Top Badge */}
    <p className="inline-block bg-green-100 text-green-600 font-semibold px-4 py-1 rounded-full mb-4">
      Smarter Idea, instant solutions
    </p>

    {/* Heading */}
    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
      Uncover the Design and Development Projects That Set Us Apart
    </h2>

    {/* Button */}
    <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded-full text-lg font-medium hover:bg-green-700 transition">
      Contact Us
    </button>
  </div>



    </div>
  );
};

export default StackPower;
