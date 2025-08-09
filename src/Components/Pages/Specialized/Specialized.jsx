import React from 'react';

const Specialized = () => {
    return (
       <div className="bg-white text-gray-800  p-8">
      {/* Header Section */}
      <div className="text-center mb-16">
    <h1 className="text-4xl md:text-6xl font-bold mb-4 w-7xl text-center">
  
    <span>
     ✨ At Software Chamber,<span className='text-gray-400'> we specialize</span> in turning complex challenges into elegant <span className='text-gray-400'> digital solutions</span> 
    </span>
 
</h1>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start  space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Stats Section */}
        <div className=" space-y-8 ]">
          <div>
            <h3 className="text-5xl font-bold">20+</h3>
            <p className="text-gray-600 text-2xl">Tech Partners</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">150+</h3>
            <p className="text-gray-600 text-2xl ">Project Completed</p>
          </div>
          <div>
            <h3 className="text-5xl font-bold">1K+</h3>
            <p className="text-gray-600 text-2xl">Satisfied Customers</p>
          </div>
        </div>

        {/* Center Image Section */}
        <div className="flex  w-full md:w-auto">
          {/* Replace with your image */}
          <img 
            src="/AllPicture/Rectangle 6.png"
            alt="Team at Software Chamber"
            className="w-96 h-96 rounded-xl shadow-lg"
          />
        </div>

        {/* Right Features Section */}
        <div className=" space-y-6">
          <FeatureItem
            number="1"
            title="Your Team in the cloud"
            description="We Hire Best and brightest Talents to build world class technology"
          />
          <FeatureItem
            number="2"
            title="Grow more with less"
            description="We have a competitive pricing structure"
          />
          <FeatureItem
            number="3"
            title="Weekly sprint and reviews"
            description="Our fast review and feedback loop is designed to keep in you in the driver’s seat"
          />
          <FeatureItem
            number="4"
            title="Communication First"
            description="We use modern tools and services to collaborate"
          />
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ number, title, description }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-bold text-sm">
        {number}
      </div>
      <div>
        <h4 className="font-semibold text-2xl">{title}</h4>
        <p className="text-xl text-gray-600">{description}</p>
      </div>
    </div>
    );
};

export default Specialized;