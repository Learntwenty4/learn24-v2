export default function FounderMessage() {
  return (
    <section className="px-10 py-20 bg-white text-center">
      <div className="max-w-2xl mx-auto">
        {/* Heading */}
     <h2 className="text-5xl font-bold text-gray-900 mb-6 group cursor-default">
  Message From{" "}
  <span className="text-indigo-600 relative inline-block transition-colors duration-300 group-hover:text-indigo-700">
    Founder
    <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
  </span>
</h2>

        {/* Trust badges */}
       <div className="flex items-center justify-center gap-0 mb-10 divide-x divide-gray-200">
  <div className="flex items-center gap-2 px-6">
    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M5 21V7l8-4v18M13 21V11l6 3v7M9 9v.01M9 12v.01M9 15v.01" />
    </svg>
    <span className="text-gray-800 font-semibold tracking-wide text-[15px]">2X Founder</span>
  </div>

  <div className="flex items-center gap-2 px-6">
    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
    <span className="text-gray-800 font-semibold tracking-wide text-[15px]">4X Author</span>
  </div>

  <div className="flex items-center gap-2 px-6">
    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a4 4 0 10-4-4" />
    </svg>
    <span className="text-gray-800 font-semibold tracking-wide text-[15px]">5M Community</span>
  </div>
</div>

        {/* Video Box */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8">
          <img
            src="/founder-video-thumb.jpg"
            alt="Founder Message"
            className="w-full h-[400px] object-cover"
          />
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition">
              <svg className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
          Become A Learn24 Member
        </button>
      </div>
    </section>
  );
}