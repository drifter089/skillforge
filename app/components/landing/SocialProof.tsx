"use client";

import { Container } from "./ui/Container";

const stats = [
  { value: "+16", label: "Marks average improvement" },
  { value: "73%", label: "Feel confident in maths" },
  { value: "89%", label: "Would recommend to a friend" },
];

const testimonials = [
  {
    quote: "I went from 34% to 58% in one term. I was about to drop maths and do Maths Lit. After 3 months, I passed for the first time since Grade 9.",
    name: "Thabo M.",
    location: "Grade 11, Soweto",
    badge: "+24%",
  },
  {
    quote: "Finally, a teacher who explains properly. In school, I'm scared to ask questions. Here, I can ask anything. The teacher actually waits for me to understand.",
    name: "Nosipho K.",
    location: "Grade 12, Durban",
    badge: "Confident",
  },
  {
    quote: "Worth every cent. I was paying R400/hour for a private tutor once a week. Now I get 8+ hours of teaching a month for less. Quality is just as good.",
    name: "Parent",
    location: "Cape Town",
    badge: "Value",
  },
];

export function SocialProof() {
  return (
    <>
      {/* Results Section */}
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

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <Container>
          {/* Section Header - Left Aligned */}
          <div className="mb-12 md:mb-16">
            <p className="text-base font-semibold text-purple-600 uppercase tracking-wider mb-3">
              Student Stories
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
              Hear it from them.
            </h2>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col"
              >
                {/* Stars */}
                <p className="text-yellow-400 text-lg mb-4">★★★★★</p>

                {/* Quote */}
                <p className="text-slate-600 italic leading-relaxed flex-1 mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Divider */}
                <div className="border-t border-slate-200 pt-4">
                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-slate-900">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.location}</p>
                    </div>
                    <span className="bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full">
                      {testimonial.badge}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <p className="text-sm text-slate-500 mt-8">
            *Based on pilot group data, 2025. Individual results may vary.
          </p>
        </Container>
      </section>
    </>
  );
}
