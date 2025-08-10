import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FAQSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-white py-20 px-12" data-aos="fade-up">
      {/* Section Title */}
      <h2 className="text-3xl md:text-5xl font-bold text-center text-black max-w-4xl mx-auto mb-10">
        Comprehensive Answers to the Most Common Questions{" "}
        <span className="text-gray-600">About Our</span> Services and How We{" "}
        <span className="text-gray-600">Work</span>
      </h2>

      <div className="flex justify-between items-center mb-8 ">
        <h2 className="text-4xl md:text-6xl text-black font-bold">FAQ</h2>
        <div className="flex items-center justify-baseline gap-2 ">
          <div className="text-black font-semibold ">All FAQ</div>

          <div className="w-8 h-8 bg-gray-300 text-black rounded-full flex items-center justify-center cursor-pointer">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-dashed border-gray-400 my-10" />
      {/* Accordion */}
      <div className="mx-auto space-y-5">
        {/* FAQ Item 1 */}
        <div
          className="collapse collapse-arrow rounded-md bg-white text-black"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-2xl font-medium peer-checked:text-green-600">
            What software development services does your company offer?
          </div>
          <div className="collapse-content text-xl">
            <p>
              We provide end-to-end design and development services tailored to
              your business needs, including branding, UI/UX design, web and
              mobile app development, and more.
            </p>
          </div>
        </div>

        {/* FAQ Item 2 */}
        <div
          className="collapse collapse-arrow rounded-md bg-white text-black"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-2xl font-medium peer-checked:text-green-600">
            What industries do you specialize in?
          </div>
          <div className="collapse-content text-xl">
            <p>
              We provide end-to-end design and development services tailored to
              your business needs, including branding, UI/UX design, web and
              mobile app development, and more.
            </p>
          </div>
        </div>

        {/* FAQ Item 3 */}
        <div
          className="collapse collapse-arrow rounded-md bg-white text-black"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-2xl font-medium peer-checked:text-green-600">
            What sets your company apart from the competition?
          </div>
          <div className="collapse-content text-xl">
            <p>Project timelines vary depending on complexity but typically range from 2 weeks to 3 months.</p>
          </div>
        </div>

        {/* FAQ Item 4 */}
        <div
          className="collapse collapse-arrow rounded-md bg-white text-black"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-2xl font-medium peer-checked:text-green-600">
            Is my project idea and information kept confidential?
          </div>
          <div className="collapse-content text-xl">
            <p>Yes, we offer maintenance and support services to ensure your product runs smoothly after launch.</p>
          </div>
        </div>

        {/* FAQ Item 5 */}
        <div
          className="collapse collapse-arrow rounded-md bg-white text-black"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <input type="checkbox" className="peer" />
          <div className="collapse-title text-2xl font-medium peer-checked:text-green-600">
            What is your pricing model?
          </div>
          <div className="collapse-content text-xl">
            <p>
              We offer both fixed-price and hourly models depending on project
              scope. We ensure transparency and flexibility in our pricing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
