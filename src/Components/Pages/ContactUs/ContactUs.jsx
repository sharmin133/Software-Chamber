import React from 'react';
import { IoArrowForwardOutline } from 'react-icons/io5';

const ContactUs = () => {
  return (
    <div className="bg-white min-h-screen p-8 md:p-16">
      {/* Header Section */}
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
          Let’s talk about your next <br />
          <span className="text-gray-500">project. We’re here to help.</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
          Deliver personalized experiences to your customers with AI-powered recommendation engines and dynamic content generation.
        </p>
      </div>

      {/* Main Content: Image and Form */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 max-w-6xl mx-auto bg-white rounded-lg shadow-xl p-8">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/AllPicture/Rectangle 240648291.png"
            alt="Man smiling with a bun hairstyle"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Right Side: Form */}
        <div className="w-full lg:w-1/2">
          <form className="space-y-4">
            {/* Input Fields */}
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-4 bg-gray-100 text-black font-semibold rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-4 bg-gray-100 text-black font-semibold rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 bg-gray-100 text-black font-semibold rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            {/* Phone Number */}
            <div className="flex space-x-2">
              <select className="p-4 bg-gray-100 text-black font-semibold rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500">
                <option>+1</option>
                <option>+880</option>
                <option>+44</option>
              </select>
              <input
                type="tel"
                placeholder="Phone"
                className="flex-grow p-4 bg-gray-100 text-black font-semibold rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Job Title */}
            <input
              type="text"
              placeholder="Job Title"
              className="w-full p-4 bg-gray-100 text-black font-semibold rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

            {/* Message */}
            <textarea
              placeholder="Your message"
              rows="4"
              className="w-full p-4 bg-gray-100 text-black font-semibold rounded-lg border border-gray-300 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
            ></textarea>

            {/* Submit button */}
            <div className="flex justify-start">
              <button
                type="submit"
                className="btn bg-teal-500 text-white font-semibold border-0 hover:bg-teal-600 rounded-full normal-case flex items-center px-6 py-3"
              >
                Submit
                <IoArrowForwardOutline className="ml-2 w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;