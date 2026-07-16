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

function FlipCard({ step, tiltDeg, flipped, onClick, onHoverStart, onHoverEnd, className, style }) {
  return (
    <div
      className={`cursor-pointer ${className}`}
      style={{ perspective: '1000px', ...style }}
      onClick={onClick}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      <div
        className="absolute inset-0 bg-[#A7C7F2] rounded-2xl"
        style={{ transform: `rotate(${tiltDeg}deg)` }}
      ></div>
      <div
        className="relative w-full h-full transition-transform duration-500 ease-in-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        <div
          className="absolute inset-0 bg-white rounded-2xl shadow-lg flex flex-col justify-center items-start p-5 hover:shadow-2xl transition-shadow"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <span className="text-2xl md:text-3xl font-bold text-[#5B4FE9] mb-3">{step.num}</span>
          <h3 className="text-base md:text-xl font-bold text-gray-900">{step.title}</h3>
        </div>
        <div
          className="absolute inset-0 bg-[#8B7FF5] rounded-2xl shadow-lg flex items-center justify-center p-5"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          <p className="text-white text-xs md:text-sm text-center leading-relaxed">{step.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default function HowToBegin() {
  const sectionRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(-1);
  const [clicked, setClicked] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setOpen(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    function measure() { setIsMobile(window.innerWidth < 1024); }
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  return (
    <section ref={sectionRef} className="relative z-10 bg-[#F3F6FA] px-6 py-20 md:py-24 overflow-hidden">
      <div className="max-w-2xl mx-auto text-center mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          How to <span className="text-[#5B4FE9]">Begin</span> Your Learning Experience
        </h2>
        <p className="text-gray-500 text-sm md:text-base">
          Here's how Learn24 guides you from curious to confident, one step at a time.
        </p>
      </div>

      {isMobile ? (
        // Mobile/tablet: clean 2-column grid, fade+slide in, tap to flip
        <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-xl mx-auto">
          {steps.map((step, index) => (
            <FlipCard
              key={step.num}
              step={step}
              tiltDeg={tilt[index]}
              flipped={clicked === index}
              onClick={() => setClicked(clicked === index ? -1 : index)}
              className="relative h-44 sm:h-56 transition-all duration-500 ease-out"
              style={{
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: `${index * 120}ms`,
              }}
            />
          ))}
        </div>
      ) : (
        // Desktop: overlapping fan-to-grid with hover flip + click peel
        <div className="relative flex justify-center max-w-5xl mx-auto h-72 md:h-80">
          {steps.map((step, index) => {
            const isClicked = clicked === index;
            const start = fanStart[index];
            const end = gridEnd[index];
            const x = open ? end.x : start.x;
            const y = open ? (isClicked ? end.y + 40 : end.y) : start.y;
            const rotate = open ? 0 : start.rotate;

            return (
              <FlipCard
                key={step.num}
                step={step}
                tiltDeg={tilt[index]}
                flipped={hovered === index}
                onClick={() => setClicked(isClicked ? -1 : index)}
                onHoverStart={() => setHovered(index)}
                onHoverEnd={() => setHovered(-1)}
                className="absolute top-0 left-1/2 w-56 h-72 transition-all duration-500 ease-out"
                style={{
                  transform: `translateX(-50%) translate(${x}px, ${y}px)`,
                  transitionDelay: open ? `${index * 120}ms` : '0ms',
                  zIndex: isClicked ? 5 : hovered === index ? 20 : 10 + index,
                }}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}