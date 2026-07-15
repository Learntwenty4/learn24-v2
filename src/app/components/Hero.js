export default function Hero() {
  return (
    <section
      className="relative bg-[#FBF7F0] px-10 py-14 text-center bg-cover bg-center"
      style={{ backgroundImage: "url('assets/hero-bg.jpg')" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/50"></div>

      <div className="relative max-w-4xl mx-auto">
        {/* Small badge */}
        <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-6 shadow-sm">
          <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
          <span className="text-sm font-medium text-gray-700">
            10,000+ Students Already Learning
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-5">
          Learn Today,<br />
          Grow <span className="text-indigo-600">Every Day</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          Master in-demand skills with practical, industry-focused courses that prepare you for real career success.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4">
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
            Explore Courses
          </button>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold text-lg border border-gray-300 hover:bg-gray-50 transition">
            Free Demo
          </button>
        </div>
      </div>
    </section>
  );
}