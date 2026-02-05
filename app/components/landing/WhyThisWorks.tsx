import { Container } from "./ui/Container";

const methodologyPoints = [
  {
    number: "01",
    title: "Real-Time Teacher Interaction",
    description: "Videos cannot answer your questions at 9pm before a test. Our teachers can. Every class is live, interactive, and designed for you to participate actively.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    highlight: "Ask questions, get answers"
  },
  {
    number: "02",
    title: "CAPS Exam Experts",
    description: "Our teachers don't just know maths - they know the exact format, question styles, and marking rubrics of the matric exam. We prepare you for the real thing, not generic problems.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    highlight: "Built for SA curriculum"
  },
  {
    number: "03",
    title: "No Surprises at Exam Time",
    description: "Weekly progress tracking means you always know where you stand. We identify gaps early so you can fix them before it's too late. Walk into your exam confident.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    highlight: "Track every step"
  },
  {
    number: "04",
    title: "Catch Up Anytime",
    description: "Load shedding? Sick day? Life happens. Every class is recorded. Pause, rewind, watch it again. You won't fall behind because you missed one session.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    highlight: "Never miss a lesson"
  }
];

export function WhyThisWorks() {
  return (
    <section className="py-24 md:py-32 bg-[var(--background)] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-indigo-500/5 to-transparent rounded-full blur-3xl" />

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
            Our Methodology
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] mb-5">
            Why This{" "}
            <span className="text-gradient">Actually Works</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">
            We&apos;ve studied what makes students succeed.
            Here&apos;s how we&apos;ve built that into every lesson.
          </p>
        </div>

        {/* Methodology Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {methodologyPoints.map((point, index) => (
            <div
              key={index}
              className="group relative p-6 lg:p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--card-border)] hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Number badge */}
              <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-lg">
                {point.number}
              </div>

              <div className="flex flex-col sm:flex-row gap-5">
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                  {point.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-2">
                    {point.title}
                  </h3>
                  <p className="text-[var(--muted-foreground)] leading-relaxed mb-3">
                    {point.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-400">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {point.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="mt-16 text-center">
          <blockquote className="relative max-w-3xl mx-auto">
            <svg className="absolute -top-4 -left-4 w-8 h-8 text-indigo-500/20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl text-[var(--foreground)] font-medium italic">
              &ldquo;Struggling to understand calculus or algebra?{" "}
              <span className="text-[var(--muted-foreground)]">You&apos;re not alone.</span>{" "}
              We break difficult concepts into simple, manageable steps.&rdquo;
            </p>
          </blockquote>
        </div>
      </Container>
    </section>
  );
}
