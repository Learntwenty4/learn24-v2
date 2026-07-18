'use client';
import { useEffect, useRef, useState, useMemo } from 'react';

const courses = [
  { id: 1, title: "Freelancing Basics", instructor: "PRIYA SHARMA", price: "₹1,999", level: "All Levels", videos: 21, hours: "5 Hours" },
  { id: 2, title: "Instagram Growth", instructor: "ROHIT MEHTA", price: "₹1,499", level: "Medium", videos: 22, hours: "5 Hours" },
  { id: 3, title: "Personal Finance", instructor: "ANJALI RAO", price: "₹999", level: "Beginner", videos: 18, hours: "4 Hours" },
  { id: 4, title: "Content Writing", instructor: "KAVYA IYER", price: "₹1,299", level: "All Levels", videos: 20, hours: "5 Hours" },
  { id: 5, title: "Public Speaking", instructor: "ARJUN DAS", price: "₹1,799", level: "Medium", videos: 24, hours: "6 Hours" },
  { id: 6, title: "Web Development", instructor: "DAVID TAN", price: "₹2,499", level: "Medium", videos: 25, hours: "6 Hours" },
];

const CARD_WIDTH = 300;
const ROW_GAP = 32;

function CourseCard({ course, style, cardRef }) {
  return (
    <div
      ref={cardRef}
      className="absolute top-1/2 left-1/2 bg-white rounded-2xl shadow-lg overflow-hidden"
      style={{ width: CARD_WIDTH, ...style }}
    >
      <div className="relative h-32 bg-gray-100">
        <span className="absolute top-3 left-3 bg-white text-gray-800 text-xs font-medium px-3 py-1.5 rounded-full shadow">
          {course.level}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-1">
          <h3 className="text-base font-bold text-gray-900">{course.title}</h3>
          <span className="text-base font-bold text-[#5B4FE9]">{course.price}</span>
        </div>
        <p className="text-xs text-gray-500 font-medium mb-2 tracking-wide">{course.instructor}</p>
        <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
          <span>{course.videos} Videos</span>
          <span>{course.hours}</span>
        </div>
        <button className="w-full border-2 border-[#5B4FE9] text-[#5B4FE9] font-semibold py-2 rounded-full text-sm hover:bg-[#5B4FE9] hover:text-white transition">
          View Course
        </button>
      </div>
    </div>
  );
}

export default function TopCourses() {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);
  const [progress, setProgress] = useState(0);
  const [cardHeight, setCardHeight] = useState(340);
  const [containerWidth, setContainerWidth] = useState(1000);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const el = wrapperRef.current;
      if (!el || isMobile) return;
      const scrollableDistance = el.offsetHeight - window.innerHeight;
      let raw = -el.getBoundingClientRect().top / scrollableDistance;
      raw = Math.min(1, Math.max(0, raw));
      setProgress(1 - Math.pow(1 - raw, 4));
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  useEffect(() => {
    function measure() {
      setIsMobile(window.innerWidth < 768);
      if (containerRef.current) setContainerWidth(containerRef.current.offsetWidth);
    }
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    const ro = new ResizeObserver(() => {
      const heights = cardRefs.current.filter(Boolean).map((el) => el.offsetHeight);
      if (heights.length) setCardHeight(Math.max(...heights));
    });
    cardRefs.current.forEach((el) => el && ro.observe(el));
    return () => ro.disconnect();
  }, []);

  // Column offset based on actual measured container width (responsive!)
  const colOffset = Math.max(0, containerWidth / 2 - CARD_WIDTH / 2 - 20);
  const rowOffset = (cardHeight + ROW_GAP) / 2;

  const fanStart = [
    { rotate: -16, x: -colOffset * 0.9, y: 40 },
    { rotate: -9,  x: -colOffset * 0.55, y: 10 },
    { rotate: -3,  x: -colOffset * 0.2, y: -10 },
    { rotate: 4,   x: colOffset * 0.2,  y: -10 },
    { rotate: 10,  x: colOffset * 0.55, y: 10 },
    { rotate: 17,  x: colOffset * 0.9,  y: 40 },
  ];

  const gridEnd = [
    { x: -colOffset, y: -rowOffset },
    { x: 0,           y: -rowOffset },
    { x: colOffset,   y: -rowOffset },
    { x: -colOffset,  y: rowOffset },
    { x: 0,            y: rowOffset },
    { x: colOffset,   y: rowOffset },
  ];

  // Mobile: simple static grid, no animation, fully responsive
  if (isMobile) {
    return (
      <section className="px-6 py-16 bg-white">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Our <span className="text-[#5B4FE9]">Top Rated</span> Courses
          </h2>
        </div>
        <div className="flex flex-col gap-6 max-w-md mx-auto">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} style={{ position: 'static', width: '100%' }} />
          ))}
        </div>
      </section>
    );
  }

  // Desktop: fan-to-grid scroll animation
  return (
    <div ref={wrapperRef} style={{ height: '200vh' }} className="relative z-0 bg-white">
      <div className="sticky top-0 min-h-screen flex flex-col items-center justify-center py-16 px-6">
        <div ref={headingRef} className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900">
            Our <span className="text-[#5B4FE9]">Top Rated</span> Courses
          </h2>
        </div>

        <div ref={containerRef} className="relative w-full max-w-5xl" style={{ height: cardHeight * 2 + ROW_GAP }}>
          {courses.map((course, index) => {
            const start = fanStart[index];
            const end = gridEnd[index];
            const x = start.x + (end.x - start.x) * progress;
            const y = start.y + (end.y - start.y) * progress;
            const rotate = start.rotate * (1 - progress);
            const opacity = 0.85 + progress * 0.15;

            return (
              <CourseCard
                key={course.id}
                course={course}
                cardRef={(el) => (cardRefs.current[index] = el)}
                style={{
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${rotate}deg)`,
                  opacity,
                  zIndex: index,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}