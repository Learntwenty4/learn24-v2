'use client';
import { useEffect, useRef, useState } from 'react';

const testimonials = [
  { name: "Ananya Sharma", role: "EXCEL LEARNER", review: "Learn24's Excel course completely changed how I work with data. The hands-on projects helped me automate reports at my job." },
  { name: "Rohan Verma", role: "SQL STUDENT", review: "I struggled with SQL for months before joining Learn24. The structured roadmap and doubt support made all the difference." },
  { name: "Priya Nair", role: "POWER BI CERTIFIED", review: "The Power BI course is incredibly well structured. Everything was explained with real business examples." },
  { name: "Arjun Mehta", role: "TABLEAU LEARNER", review: "Tableau felt overwhelming until I found Learn24. The instructors break down complex visualizations into simple steps." },
  { name: "Sneha Iyer", role: "AI BOOTCAMP GRAD", review: "The AI Bootcamp gave me practical, real-world skills. I landed my first ML internship right after finishing." },
];

const testimonials2 = [
  { name: "Karan Malhotra", role: "DIGITAL MARKETING STUDENT", review: "Learn24's Digital Marketing course helped me start freelancing within a month of completing it." },
  { name: "Ishita Desai", role: "VIDEO EDITING LEARNER", review: "I went from knowing nothing about editing to producing professional content for clients." },
  { name: "Vikram Singh", role: "EXCEL & SQL LEARNER", review: "Doing both courses together gave me a huge edge in interviews. The projects felt exactly like real work." },
  { name: "Meera Kulkarni", role: "POWER BI STUDENT", review: "Clear explanations and constant mentor support. I built my first live dashboard within the second week." },
  { name: "Aditya Rao", role: "AI BOOTCAMP LEARNER", review: "The mentors were always available for doubts. Best decision I made for my career this year." },
];

function Stars() {
  return (
    <div className="flex gap-1 justify-center mb-5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#F5B800]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ t }) {
  return (
     <div className="flex-shrink-0 w-full md:w-[300px] bg-white rounded-2xl border border-gray-100 p-6 md:p-8 flex flex-col items-center text-center md:mx-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.1)] transition-shadow duration-300">
      <div className="w-16 h-16 rounded-full bg-gray-200 mb-4"></div>
      <h4 className="font-bold text-gray-900 text-lg">{t.name}</h4>
      <p className="text-xs text-gray-500 font-medium tracking-wider uppercase mb-3">{t.role}</p>
      <Stars />
      <p className="text-gray-600 text-sm leading-relaxed">"{t.review}"</p>
    </div>
  );
}

export default function Testimonials() {

  const [offset, setOffset] = useState(0);
    const mod = (n, m) => ((n % m) + m) % m;
  const lastScroll = useRef(0);


  useEffect(() => {
    lastScroll.current = window.scrollY;

    function handleScroll() {
      const current = window.scrollY;
      const delta = current - lastScroll.current;
      lastScroll.current = current;

      setOffset((prev) => prev + delta * 0.6);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-white py-24 md:py-32 overflow-hidden">
    <div className="max-w-2xl mx-auto text-center px-6 mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5B4FE9] mb-3">
          Testimonials
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Loved by <span className="text-[#5B4FE9]">Learners</span> Worldwide
        </h2>

        <p className="mt-4 text-base md:text-lg text-gray-500 max-w-xl mx-auto">
          Thousands of students trust Learn24 to build practical skills and achieve their career goals.
        </p>
      </div>

     {/* Mobile: simple stacked column */}
      <div className="flex flex-col gap-6 px-6 md:hidden">
        {[...testimonials, ...testimonials2].slice(0, 4).map((t, i) => (
          <Card key={i} t={t} />
        ))}
      </div>

      {/* Desktop/Tablet: scroll-linked rows */}
      <div className="hidden md:block">
        <div className="relative w-full mb-10 overflow-hidden">
          <div
            className="flex w-max"
            style={{ transform: `translateX(${-mod(offset, 2000)}px)` }}
          >
            {[...testimonials, ...testimonials, ...testimonials].map((t, i) => (
              <Card key={i} t={t} />
            ))}
          </div>
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex w-max"
            style={{ transform: `translateX(${mod(offset, 2000) - 2000}px)` }}
          >
            {[...testimonials2, ...testimonials2, ...testimonials2].map((t, i) => (
              <Card key={i} t={t} />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}