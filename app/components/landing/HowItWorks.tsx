import { Container } from "./ui/Container";

const steps = [
  {
    number: "01",
    title: "Schedule Your Onboarding Call",
    description: "Book a free call with us. We'll understand your goals, current level, and what you need to succeed.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Get Your Custom Learning Path",
    description: "We'll assess your strengths and gaps, then create a personalized study plan designed just for you.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Join Classes & Start Improving",
    description: "Attend live classes, practice with guidance, and watch your marks improve week after week.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-slate-800">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            From sign-up to results in 3 simple steps.
          </p>
        </div>

        {/* Steps - Desktop */}
        <div className="hidden lg:block relative">
          {/* Connecting line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-900 via-indigo-500 to-indigo-900" />

          <div className="grid grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step card */}
                <div className="bg-slate-800/50 rounded-2xl p-6 shadow-sm relative z-10">
                  {/* Number circle */}
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 mx-auto">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-400 mb-4 mx-auto">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-white mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 text-sm text-center">
                    {step.description}
                  </p>
                </div>

                {/* Arrow connector (not on last item) */}
                {index < steps.length - 1 && (
                  <div className="absolute top-24 -right-4 w-8 h-8 text-indigo-400 z-20">
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Steps - Mobile/Tablet */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="relative flex gap-6">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-indigo-500/30 my-2" />
                )}
              </div>

              {/* Content */}
              <div className="bg-slate-800/50 rounded-2xl p-6 shadow-sm flex-1 mb-2">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-300 text-sm">
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
