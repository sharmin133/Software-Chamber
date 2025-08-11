import React, { useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-t from-[#22C1AD]/10 to-[#1E1E1E]">
      <h2
        className=" text-3xl md:text-6xl p-5 md:pb-10 font-bold"
        data-aos="fade-up"
      >
        LET'S TALK
      </h2>
      <div
        className="grid md:grid-cols-3 p-6"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="flex flex-col max-w-xs gap-10">
          <p className="text-gray-200">
            A new era of energy, elegance, and elite competition begins here.
            Where passion meets performance on the court like never before.
          </p>

 <div className="md:hidden">
          <img
            className="w-64 h-64 object-cover rounded-2xl"
            src="/AllPicture/Rectangle 22852.png"
            alt="Footer Visual"
          />
        </div>
          <div className="py-4">

            <h2 className="text-2xl text-white mb-4">Social media</h2>

            <div className="grid grid-cols-3 gap-4">
              {[
                "Instagram",
                "Twitter",
                "Tiktok",
                "Facebook",
                "Linkedin",
                "Youtube",
              ].map((platform) => (
                <div
                  key={platform}
                  className="flex items-center gap-2 cursor-pointer group transition duration-300"
                >
                  <p className="text-white group-hover:text-cyan-400 transition duration-300">
                    {platform}
                  </p>
                  <MdArrowOutward className="text-gray-400 group-hover:text-cyan-400 transition duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 text-gray-300">
          <div>
            <h2 className="md:text-2xl text-white mb-2">ADDRESS</h2>
            <p>1901 thornridge Cir, Shiloh, Hawaii 81063</p>
          </div>

          <div>
            <h2 className="text-2xl text-white mb-2">PHONE</h2>
            <p>[+1] 872-298-3989</p>
          </div>

          <div>
            <h2 className="text-2xl text-white mb-2">EMAIL</h2>
            <p>hello@tranzit.com</p>
          </div>
        </div>

        <div className="hidden md:block">
          <img
            className="w-64 h-64 object-cover rounded-2xl"
            src="/AllPicture/Rectangle 22852.png"
            alt="Footer Visual"
          />
        </div>
      </div>

      <hr
        className="border-t-2 border-dashed border-gray-400 md:my-10 md:px-12"
        data-aos="fade-up"
        data-aos-delay="200"
      />

      <div
        className="flex justify-between pb-20"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <p className="text-center px-6">2024 Software Chamber All Right Reserved</p>
        <div className="flex gap-10 px-12">
          <p className="cursor-pointer hover:text-cyan-400 transition duration-300">
            Privacy Policy
          </p>
          <p className="cursor-pointer hover:text-cyan-400 transition duration-300">
            Terms & Conditions
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
