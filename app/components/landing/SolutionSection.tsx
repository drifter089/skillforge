import { Container } from "./ui/Container";

const features = [
  {
    title: "Live Classes with Real Teachers",
    description: "Ask questions, get answers immediately. Not another YouTube video you'll skip.",
  },
  {
    title: "Small Classes, Big Impact",
    description: "Only 25 students per class. Your teacher knows your name and where you need help.",
  },
  {
    title: "CAPS Exam Experts",
    description: "We know the exact format, question styles, and marking rubrics. No surprises at exam time.",
  },
  {
    title: "Never Fall Behind",
    description: "Every class is recorded. Load shedding? Sick day? Catch up anytime.",
  }
];

export function SolutionSection() {
  return (
    <section id="features" className="py-20 sm:py-24 md:py-32 bg-[var(--background)]">
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4">
            How Classes Actually Work
          </h2>
          <p className="text-base sm:text-lg text-[var(--muted-foreground)]">
            Real teachers. Small classes. Proven results.
          </p>
        </div>

        {/* Features - Stacked Layout */}
        <div className="space-y-8 sm:space-y-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 pb-8 sm:pb-10 border-b border-[var(--border)] last:border-0 last:pb-0"
            >
              {/* Number indicator */}
              <div className="flex-shrink-0">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-violet-100 text-violet-600 font-semibold text-sm">
                  {index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 sm:max-w-xl">
                <h3 className="text-lg sm:text-xl font-semibold text-[var(--foreground)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
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
