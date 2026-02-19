"use client";

import { Container } from "./ui/Container";

const stats = [
  { value: "+16", label: "Marks average improvement" },
  { value: "73%", label: "Feel confident in maths" },
  { value: "89%", label: "Would recommend to a friend" },
];

export function SocialProof() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-white">
      <Container>
        {/* Section Header - Centered */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-base font-semibold text-purple-600 uppercase tracking-wider mb-3">
            Real Results
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            From struggling to passing.
          </h2>
          <p className="text-lg text-slate-700 max-w-lg mx-auto">
            Real data from our pilot group of 84 students over 3 months.
          </p>
        </div>

        {/* Showcase Card - Vertical Layout */}
        <div className="max-w-xl mx-auto mb-8">
          <div className="bg-[#F0FAF6] rounded-3xl p-8 md:p-12">
            <div className="flex flex-col items-center">
              {/* Before Section */}
              <div className="text-center mb-2">
                <p className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-3">
                  Before
                </p>
                <p className="font-[family-name:var(--font-heading)] text-6xl md:text-7xl lg:text-8xl font-bold text-slate-400 mb-2">
                  38%
                </p>
                <p className="text-base text-slate-500">
                  Average starting mark
                </p>
              </div>

              {/* Connector Line with Badge */}
              <div className="flex flex-col items-center my-4">
                <div className="w-px h-8 bg-emerald-500"></div>
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500 text-white font-bold text-sm">
                  +16 pts
                </span>
                <div className="w-px h-8 bg-emerald-500"></div>
              </div>

              {/* After Section */}
              <div className="text-center mt-2">
                <p className="text-sm font-medium text-slate-400 uppercase tracking-wider mb-3">
                  After 3 Months
                </p>
                <p className="font-[family-name:var(--font-heading)] text-6xl md:text-7xl lg:text-8xl font-bold text-emerald-500 mb-2">
                  54%
                </p>
                <p className="text-base text-slate-500">
                  Average mark achieved
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#F0FAF6] rounded-2xl p-6 md:p-8 text-center"
            >
              <p className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl font-bold text-slate-800 mb-2">
                {stat.value}
              </p>
              <p className="text-sm md:text-base text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
