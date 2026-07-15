'use client';
import { useEffect, useRef, useState } from 'react';

const steps = [
  { num: "01", title: "Browse Courses", desc: "Explore our wide range of categories and find the course that matches your goals and interests." },
  { num: "02", title: "Enroll Instantly", desc: "Sign up in just a few clicks and get instant access to all course materials and resources." },
  { num: "03", title: "Learn at Your Pace", desc: "Watch videos, complete tasks, and practice anytime, anywhere all on your schedule." },
  { num: "04", title: "Earn Your Certificate", desc: "Finish the course and receive a certificate to showcase your new skills and boost your career." },
];

const fanStart = [
  { rotate: -10, x: -30, y: 0 },
  { rotate: -3,  x: -10, y: 0 },
  { rotate: 4,   x: 10,  y: 0 },
  { rotate: 11,  x: 30,  y: 0 },
];

const gridEnd = [
  { x: -330, y: 30 },
  { x: -110, y: -30 },
  { x: 110,  y: 30 },
  { x: 330,  y: -30 },
];

const tilt = [-6, 4, -4, 6];

export default function HowToBegin() {
  const sectionRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(-1);
  const [clicked, setClicked] = useState(-1);

  // Repeatable trigger: opens when 40% visible, closes when scrolled away
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setOpen(entry.isIntersecting),
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 bg-[#F3F6FA] px-6 py-24 overflow-hidden">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          How to <span className="text-[#5B4FE9]">Begin</span> Your Learning Experience
        </h2>
        <p className="text-gray-500">
          Here's how Learn24 guides you from curious to confident, one step at a time.
        </p>
      </div>

      <div className="relative flex justify-center max-w-5xl mx-auto h-72 md:h-80">
        {steps.map((step, index) => {
          const isFlipped = hovered === index;
          const isClicked = clicked === index;
          const start = fanStart[index];
          const end = gridEnd[index];
          const x = open ? end.x : start.x;
          const y = open ? (isClicked ? end.y + 40 : end.y) : start.y;
          const rotate = open ? 0 : start.rotate;

          return (
            <div
              key={step.num}
              className="absolute top-0 left-1/2 w-48 h-64 md:w-56 md:h-72 transition-all duration-500 ease-out cursor-pointer"
              style={{
                perspective: '1000px',
                transform: `translateX(-50%) translate(${x}px, ${y}px)`,
                transitionDelay: open ? `${index * 120}ms` : '0ms',
                zIndex: isClicked ? 5 : hovered === index ? 20 : 10 + index,
              }}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(-1)}
              onClick={() => setClicked(isClicked ? -1 : index)}
            >
              <div
                className="absolute inset-0 bg-[#A7C7F2] rounded-2xl"
                style={{ transform: `rotate(${tilt[index]}deg)` }}
              ></div>

              <div
                className="relative w-full h-full transition-transform duration-500 ease-in-out"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
              >
                <div
                  className="absolute inset-0 bg-white rounded-2xl shadow-lg flex flex-col justify-center items-start p-6 hover:shadow-2xl transition-shadow"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <span className="text-3xl font-bold text-[#5B4FE9] mb-4">{step.num}</span>
                  <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                </div>

                <div
                  className="absolute inset-0 bg-[#8B7FF5] rounded-2xl shadow-lg flex items-center justify-center p-6"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <p className="text-white text-sm text-center leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
