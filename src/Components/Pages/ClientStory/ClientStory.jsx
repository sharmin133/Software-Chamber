import React from 'react';

const ClientStory = () => {
  return (
    <section className="bg-white py-20 px-6">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="inline-block bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          Smarter idea, instant solutions
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-black leading-tight">
          Don't just take our word for it. <br />
          Hear what our clients say
        </h2>
      </div>

      {/* Testimonial Card */}
      <div className="bg-gray-100 rounded-xl p-8 max-w-3xl mx-auto shadow-md">
        <p className="text-lg text-gray-700 italic mb-6">
          "Sed sit varius neque turpis enim ut metus consectetur. Tortor urna risus phasellus nec. In facilisis pulvinar sagittis odio nibh condimentum aliquet commodo."
        </p>

        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="Alex Larkins"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-semibold text-gray-900">Alex Larkins</p>
              <p className="text-sm text-gray-500">Art Director at Airbnb</p>
            </div>
          </div>

          <div className="text-gray-400 text-sm font-bold uppercase tracking-wide">
            Airbnb
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientStory;