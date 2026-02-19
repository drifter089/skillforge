"use client";

import { Container } from "./ui/Container";

const features = [
  {
    title: "Live Classes with Real Teachers",
    description: "Ask questions, get answers immediately. Not another YouTube video you'll skip.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="11" r="3" fill="currentColor"/>
        <path d="M6 22L12 18L18 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "bg-red-50 text-red-500 border-red-100",
  },
  {
    title: "Small Classes, Big Impact",
    description: "Only 25 students per class. Your teacher knows your name and where you need help.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="17" cy="7" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M3 21V18C3 15.79 4.79 14 7 14H11C13.21 14 15 15.79 15 18V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M17 14C19.21 14 21 15.79 21 18V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    color: "bg-blue-50 text-blue-500 border-blue-100",
  },
  {
    title: "CAPS Exam Experts",
    description: "We know the exact format, question styles, and marking rubrics. No surprises at exam time.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "bg-emerald-50 text-emerald-500 border-emerald-100",
  },
  {
    title: "Never Fall Behind",
    description: "Every class is recorded. Load shedding? Sick day? Catch up anytime.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 9L15 12L10 15V9Z" fill="currentColor"/>
      </svg>
    ),
    color: "bg-violet-50 text-violet-500 border-violet-100",
  }
];

export function SolutionSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-slate-50">
      <Container>
        {/* Section Header - Centered */}
        <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          <p className="text-base font-semibold text-violet-600 uppercase tracking-wider mb-3">
            What you get
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Not just another YouTube video.
          </h2>
          <p className="text-lg text-slate-600">
            Everything is built around one thing — getting you from struggling to passing.
          </p>
        </div>

        {/* Features Grid - 2x2 */}
        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all"
            >
              {/* Icon */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl border flex items-center justify-center ${feature.color}`}>
                {feature.icon}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900 mb-1.5">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
