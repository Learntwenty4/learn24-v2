'use client';

const features = [
  {
    title: "Expert Mentor Guidance",
    points: ["1-on-1 Q&A sessions", "Feedback on projects", "Mentor-led workshops"],
    stat1: { value: "29+", label: "Active Mentors" },
    stat2: { value: "4.9", label: "Average Rating" },
    desc: "Get expert feedback and support directly from experienced industry mentors.",
  },
  {
    title: "Career-Focused Curriculum",
    points: ["Job-ready learning paths", "Portfolio templates", "Resume prep tools"],
    stat1: { value: "78%", label: "Career Growth" },
    stat2: { value: "120+", label: "Mentor Rating" },
    desc: "Courses tailored for job success with real tools, portfolios, and career prep.",
  },
  {
    title: "Flexible Learning Access",
    points: ["Mobile & desktop ready", "Offline downloads", "Lifetime access"],
    stat1: { value: "99%", label: "Uptime Rate" },
    stat2: { value: "24/7", label: "Platform Access" },
    desc: "Study anytime, anywhere with self-paced access across all your devices.",
  },
  {
    title: "Real-World Lessons",
    points: ["Project-based lessons", "Downloadable resources", "Skill-driven tasks"],
    stat1: { value: "92%", label: "Uptime Rate" },
    stat2: { value: "300+", label: "Platform Access" },
    desc: "Learn through real-world tasks that sharpen your skills and build confidence.",
  },
];

function FeatureCard({ feature }) {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-8 w-full h-[420px] flex flex-col justify-between overflow-hidden">
      <div>
        <h3 className="text-xl md:text-3xl font-bold text-gray-900 mb-5 md:mb-6 leading-tight">
          {feature.title}
        </h3>

        <div className="flex gap-4 md:gap-6 mb-6">
          <ul className="space-y-3 flex-1">
            {feature.points.map((point, i) => (
              <li key={i} className="flex items-center gap-2 text-gray-700 text-sm md:text-base">
                <span className="w-5 h-5 rounded-full bg-[#5B4FE9]/10 text-[#5B4FE9] flex items-center justify-center text-xs flex-shrink-0">
                  ✓
                </span>
                {point}
              </li>
            ))}
          </ul>
          <div className="w-20 h-20 md:w-32 md:h-32 bg-gray-100 rounded-2xl flex-shrink-0"></div>
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-6 pt-4 border-t border-gray-100">
        <div>
          <p className="text-lg md:text-2xl font-bold text-gray-900">{feature.stat1.value}</p>
          <p className="text-xs text-gray-500">{feature.stat1.label}</p>
        </div>
        <div>
          <p className="text-lg md:text-2xl font-bold text-gray-900">{feature.stat2.value}</p>
          <p className="text-xs text-gray-500">{feature.stat2.label}</p>
        </div>
        <p className="text-xs text-gray-500 flex-1 hidden sm:block">{feature.desc}</p>
      </div>
    </div>
  );
}

export default function WhyLearn24() {
  return (
    <section className="bg-[#F9F8FF] px-6 md:px-10 py-20">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Why <span className="text-[#5B4FE9]">Learn24</span>
        </h2>
        <p className="text-gray-500 text-sm">
          We're a learning platform dedicated to helping you upskill and grow —
          with expert mentors and flexible, practical courses.
        </p>
      </div>

      {/* Desktop: 2 columns side by side, each column has its own sticky-overlap stack */}
      <div className="hidden md:grid grid-cols-2 gap-10 max-w-5xl mx-auto">
        <div className="flex flex-col gap-52">
          {[features[0], features[2]].map((f) => (
            <div key={f.title} className="sticky top-28">
              <FeatureCard feature={f} />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-52">
          {[features[1], features[3]].map((f) => (
            <div key={f.title} className="sticky top-28">
              <FeatureCard feature={f} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: single column, all 4 cards stack with sticky-overlap */}
      <div className="flex flex-col gap-32 md:hidden max-w-md mx-auto">
        {features.map((f, i) => (
          <div key={f.title} className="sticky top-20" style={{ zIndex: i + 1 }}>
            <FeatureCard feature={f} />
          </div>
        ))}
      </div>
    </section>
  );
}