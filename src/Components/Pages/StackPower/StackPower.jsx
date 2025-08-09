import React from 'react';
import { FaSpotify, FaDropbox, FaSlack, FaAmazon, FaUserTie } from 'react-icons/fa';

const StackPower = () => {
  const buttonColor = "#2CCEBA";

  return (
    <div className="bg-black px-6 py-16 md:py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

        {/* Left Title */}
        <h2 className="text-3xl md:text-5xl font-bold  leading-snug md:w-1/2">
          Our Stack Powers of the  <span className='text-gray-400'>World’s</span> Most <span className='text-gray-400'>Beloved Companies</span>
        </h2>

        {/* Right Buttons Grid */}
        <div className="grid grid-cols-2 gap-6 md:w-1/2">
          {/* First row */}
          <button
            className="flex items-end gap-3 rounded-full font-medium px-5 py-3"
            style={{ backgroundColor: buttonColor, color: 'white' }}
          >
            <FaSpotify size={20} color="#1DB954" /> {/* Spotify green */}
            Spotify
          </button>
          <button
            className="flex items-center gap-3 rounded-full font-medium px-5 py-3"
            style={{ backgroundColor: buttonColor, color: 'white' }}
          >
            <FaDropbox size={20} color="#0061FF" /> {/* Dropbox blue */}
            Dropbox
          </button>

          {/* Second row */}
          <button
            className="flex items-start gap-3 rounded-full font-medium px-5 py-3"
            style={{ backgroundColor: buttonColor, color: 'white' }}
          >
            <FaSlack size={20} color="#4A154B" /> {/* Slack purple */}
            Slack
          </button>
          <button
            className="flex items-center gap-3 rounded-full font-medium px-5 py-3"
            style={{ backgroundColor: buttonColor, color: 'white' }}
          >
            <FaAmazon size={20} color="#FF9900" /> {/* Amazon orange for Flipkart */}
            Flipkart
          </button>

          {/* Third row - single button */}
          <button
            className="flex items-center gap-3 rounded-full font-medium px-5 py-3 justify-center col-span-2 md:col-span-1 md:justify-start"
            style={{
              backgroundColor: buttonColor,
              color: 'white',
              marginLeft: '20%',  // off-center for little "aloomelo" effect
            }}
          >
            <FaUserTie size={20} color="#E91E63" /> {/* Pink for TalentQl */}
            TalentQl
          </button>
        </div>
      </div>
    </div>
  );
};

export default StackPower;

