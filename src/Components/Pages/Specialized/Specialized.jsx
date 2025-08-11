import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Specialized = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white text-gray-800 p-8">
      {/* Header Section */}
      <div className="text-center mb-16" data-aos="fade-down">
        <h1 className=" text-3xl md:text-5xl font-bold mb-4 text-center">
          <span>
            ✨ At Software Chamber,
            <span className="text-gray-400"> we specialize</span> in turning
            complex challenges into elegant{" "}
            <span className="text-gray-400"> digital solutions</span>
          </span>
        </h1>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Stats Section */}
        <div className="md:pl-12  flex gap-3 md:flex-col space-y-2  md:space-y-12" data-aos="fade-right" data-aos-delay="100">
          <div >
            <h3 className=" text-3xl md:text-5xl font-bold">20+</h3>
            <p className="text-gray-600 text-xl md:text-2xl">Tech Partners</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-5xl font-bold">150+</h3>
            <p className="text-gray-600   text-xl md:text-2xl ">Project Completed</p>
          </div>
          <div>
            <h3 className="text-3xl md:text-5xl font-bold">1K+</h3>
            <p className="text-gray-600   text-xl md:text-2xl">Satisfied Customers</p>
          </div>
        </div>

        {/* Center Image Section */}
        <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="200">
          <img
            src="/AllPicture/Rectangle 6.png"
            alt="Team at Software Chamber"
            className="md:w-96 md:h-96 w-64 h-64 rounded-xl shadow-lg"
          />
        </div>

        {/* Right Features Section */}
        <div className="space-y-6" data-aos="fade-left" data-aos-delay="300">
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
      <div className="w-8 h-8  rounded-full bg-green-500 text-white flex items-center justify-center font-bold ">
        {number}
      </div>
      <div>
        <h4 className="font-semibold text-xl md:text-2xl">{title}</h4>
        <p className="md:text-xl text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Specialized;
