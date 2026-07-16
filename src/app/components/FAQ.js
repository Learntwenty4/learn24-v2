'use client';
import { useState } from 'react';

const faqs = [
  { q: "What is Learn24?", a: "Learn24 is an online learning platform offering practical, industry-relevant courses taught by experienced instructors." },
  { q: "Are the courses self-paced?", a: "Yes, all courses are self-paced. You can learn anytime, anywhere, and revisit lessons whenever you need." },
  { q: "Do I get a certificate after completing a course?", a: "Absolutely. You'll receive a certificate upon successful completion, which you can add to your resume or LinkedIn." },
  { q: "Can I access the courses on mobile devices?", a: "Yes, Learn24 is fully responsive and works seamlessly on mobile, tablet, and desktop devices." },
  { q: "Who are the mentors on Learn24?", a: "Our mentors are industry professionals with real-world experience in their respective fields." },
  { q: "What payment methods are accepted?", a: "We accept all major credit/debit cards, UPI, and net banking through our secure payment gateway." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white px-6 md:px-10 py-16 md:py-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Left: sticky heading (desktop), normal on mobile */}
        <div className="md:sticky md:top-24 md:self-start text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-md mx-auto md:mx-0">
            Find quick answers to common questions about Learn24, our courses,
            learning process, and platform features.
          </p>
        </div>

        {/* Right: FAQ accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.q}
                onClick={() => toggle(index)}
                className={`rounded-2xl px-5 md:px-7 py-4 md:py-6 cursor-pointer transition-all duration-300 border ${
                  isOpen
                    ? 'bg-[#EEF2FF] border-[#5B4FE9]/20 shadow-md'
                    : 'bg-gray-50 border-transparent hover:bg-[#F5F3FF] hover:border-[#5B4FE9]/10'
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="font-semibold text-gray-900 text-sm md:text-lg">
                    {item.q}
                  </h3>
                  <span
                    className="text-[#5B4FE9] text-2xl font-light flex-shrink-0 transition-transform duration-300"
                    style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  >
                    +
                  </span>
                </div>

                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed pt-3">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}