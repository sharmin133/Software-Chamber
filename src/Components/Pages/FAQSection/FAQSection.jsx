import React from 'react';

const FAQSection = () => {
  return (
    <section className="bg-white py-20 px-6">
  {/* Section Title */}
  <h2 className="text-3xl md:text-5xl font-bold text-center text-black max-w-4xl mx-auto mb-10">
    Comprehensive Answers to the Most Common Questions About Our Services and How We Work
  </h2>

  {/* Accordion */}
  <div className="max-w-3xl mx-auto space-y-4">
    {/* FAQ Item 1 */}
    <div className="collapse collapse-plus border border-black rounded-md bg-white text-black">
      <input type="checkbox" className="peer" />
      <div className="collapse-title text-lg font-medium peer-checked:text-green-600">
        What services do you offer?
      </div>
      <div className="collapse-content">
        <p>We provide end-to-end design and development services tailored to your business needs, including branding, UI/UX design, web and mobile app development, and more.</p>
      </div>
    </div>

    {/* FAQ Item 2 */}
    <div className="collapse collapse-plus border border-black rounded-md bg-white text-black">
      <input type="checkbox" className="peer" />
      <div className="collapse-title text-lg font-medium peer-checked:text-green-600">
        How long does a typical project take?
      </div>
      <div className="collapse-content">
        <p>Project timelines vary depending on complexity but typically range from 2 weeks to 3 months.</p>
      </div>
    </div>

    {/* FAQ Item 3 */}
    <div className="collapse collapse-plus border border-black rounded-md bg-white text-black">
      <input type="checkbox" className="peer" />
      <div className="collapse-title text-lg font-medium peer-checked:text-green-600">
        Do you provide post-launch support?
      </div>
      <div className="collapse-content">
        <p>Yes, we offer maintenance and support services to ensure your product runs smoothly after launch.</p>
      </div>
    </div>

    {/* FAQ Item 4 */}
    <div className="collapse collapse-plus border border-black rounded-md bg-white text-black">
      <input type="checkbox" className="peer" />
      <div className="collapse-title text-lg font-medium peer-checked:text-green-600">
        What is your pricing model?
      </div>
      <div className="collapse-content">
        <p>We offer both fixed-price and hourly models depending on project scope. We ensure transparency and flexibility in our pricing.</p>
      </div>
    </div>
  </div>
</section>
  );
};

export default FAQSection;