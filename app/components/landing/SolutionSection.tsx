import { Container } from "./ui/Container";
import { Card, CardContent } from "./ui/Card";

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Live Classes with Real Teachers",
    description: "Ask questions, get answers immediately. Not another YouTube video you'll skip.",
    highlight: "Live",
    color: "indigo"
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Small Classes, Big Impact",
    description: "Only 25 students per class. Your teacher knows your name and where you need help.",
    highlight: "25 max",
    color: "violet"
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "CAPS Exam Experts",
    description: "We know the exact format, question styles, and marking rubrics. No surprises at exam time.",
    highlight: "CAPS",
    color: "emerald"
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Never Fall Behind",
    description: "Every class is recorded. Load shedding? Sick day? Catch up anytime.",
    highlight: "Recorded",
    color: "amber"
  }
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  indigo: { bg: "bg-indigo-500/10", text: "text-indigo-400", border: "border-indigo-500/30" },
  violet: { bg: "bg-violet-500/10", text: "text-violet-400", border: "border-violet-500/30" },
  emerald: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/30" },
  amber: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/30" },
};

export function SolutionSection() {
  return (
    <section id="features" className="py-24 md:py-32 bg-[var(--background-secondary)]">
      <Container>
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] mb-5">
            What You <span className="text-gradient">Get</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-xl mx-auto">
            Real teachers. Small classes. Proven results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const colors = colorClasses[feature.color];
            return (
              <Card key={index} hover padding="lg" className="relative group">
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 ${colors.bg} ${colors.text} text-xs font-bold rounded-full border ${colors.border}`}>
                    {feature.highlight}
                  </span>
                </div>

                <CardContent>
                  <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center ${colors.text} mb-5 group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>

                  <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">
                    {feature.title}
                  </h3>

                  <p className="text-[var(--muted-foreground)] leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
