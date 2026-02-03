import { Container } from "./ui/Container";

const steps = [
  {
    number: "1",
    title: "Schedule Your Onboarding Call",
    description: "Book a free call with us. We'll understand your goals, current level, and what you need to succeed.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    number: "2",
    title: "Get Your Custom Learning Path",
    description: "We'll assess your strengths and gaps, then create a personalized study plan designed just for you.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  {
    number: "3",
    title: "Join Classes & Start Improving",
    description: "Attend live classes, practice with guidance, and watch your marks improve week after week.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-slate-900">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 font-medium mb-3 tracking-wide uppercase text-sm">
            Simple Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            From sign-up to results in 3 simple steps
          </p>
        </div>

        {/* Steps - Desktop */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                {/* Connector line between cards - rendered first with z-0 */}
                {index < steps.length - 1 && (
                  <div className="absolute top-14 left-[calc(50%+60px)] w-[calc(100%-60px)] flex items-center z-0">
                    <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/60 to-indigo-500/20" />
                    <svg className="w-4 h-4 text-indigo-500/60 -ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}

                {/* Step card - z-10 to render above connector */}
                <div className="relative z-10 bg-slate-800/60 border border-slate-700/50 rounded-2xl p-8 h-full transition-all duration-300 hover:border-indigo-500/30 hover:bg-slate-800/80">
                  {/* Top row: Number + Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center text-white font-semibold text-lg">
                      {step.number}
                    </div>
                    <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Steps - Mobile/Tablet */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Vertical connector - z-0 to render behind card */}
              {index < steps.length - 1 && (
                <div className="absolute left-5 top-[72px] w-px h-[calc(100%-40px)] bg-gradient-to-b from-indigo-500/40 to-transparent z-0" />
              )}

              {/* Card - z-10 to render above connector */}
              <div className="relative z-10 bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6">
                <div className="flex items-start gap-5">
                  {/* Number */}
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center text-white font-semibold flex-shrink-0">
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">
                        {step.title}
                      </h3>
                      <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 flex-shrink-0">
                        {step.icon}
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
