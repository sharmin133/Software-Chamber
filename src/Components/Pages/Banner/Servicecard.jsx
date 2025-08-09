// src/components/ServiceCard.js

import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-[#242944] p-6 rounded-2xl flex items-start space-x-4 transition-transform transform hover:scale-105 duration-300 ease-in-out">
      <div className="flex-shrink-0 text-4xl mt-1">
        {icon}
      </div>
      <div>
        <h4 className="text-md font-semibold text-gray-50">{title}</h4>
        <p className="text-sm text-gray-400 mt-1">{description}</p>
        <button className="mt-4 text-sm text-[#00bcd4] font-semibold hover:underline">
          Discover
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;