import { Container } from "./ui/Container";
import { Card, CardContent } from "./ui/Card";

const testimonials = [
  {
    quote: "I went from 34% to 58% in one term. I was about to drop maths and do Maths Lit. My mom found this and made me try it. After 3 months, I passed for the first time since Grade 9.",
    name: "Thabo M.",
    detail: "Grade 11, Soweto",
    improvement: "+24%",
    avatar: "T"
  },
  {
    quote: "Finally, a teacher who explains properly. In school, I'm scared to ask questions because everyone will laugh. Here, I can ask anything. The teacher actually waits for me to understand.",
    name: "Nosipho K.",
    detail: "Grade 12, Durban",
    improvement: "Now confident",
    avatar: "N"
  },
  {
    quote: "Worth every cent. I was paying R400/hour for a private tutor once a week. Now I get 8+ hours of teaching a month for less than R1,500. And the quality is just as good.",
    name: "Parent",
    detail: "Cape Town",
    improvement: "Saved R3,000+/mo",
    avatar: "P"
  }
];

const stats = [
  { value: "+16", label: "marks average improvement", icon: "trending" },
  { value: "73%", label: "feel confident in maths", icon: "smile" },
  { value: "89%", label: "would recommend to friends", icon: "check" },
];

export function SocialProof() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[var(--background)]">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
            Real Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] mb-5">
            From Struggling to{" "}
            <span className="text-gradient">Confident</span>
          </h2>
          <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto">
            Real results from our pilot group of 84 students.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[var(--foreground)] mb-2">
                {stat.value}
              </div>
              <p className="text-sm md:text-base text-[var(--muted-foreground)]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Transformation Journey Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card padding="none" className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Before */}
              <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-[var(--border-subtle)]">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-rose-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-rose-400 uppercase tracking-wider">Before</span>
                </div>
                <div className="text-6xl md:text-7xl font-extrabold text-[var(--foreground)] mb-2">38%</div>
                <p className="text-[var(--muted-foreground)]">Average starting mark</p>
                <div className="mt-6 flex items-center gap-2 text-[var(--muted-foreground)] text-sm">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Struggling to pass
                </div>
              </div>

              {/* After */}
              <div className="p-8 md:p-10 bg-emerald-500/5 relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold text-emerald-400 uppercase tracking-wider">After 3 Months</span>
                </div>
                <div className="text-6xl md:text-7xl font-extrabold text-[var(--foreground)] mb-2">54%</div>
                <p className="text-[var(--muted-foreground)]">Average mark achieved</p>
                <div className="mt-6 flex items-center gap-2 text-emerald-400 text-sm font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Passing with confidence
                </div>
                {/* Improvement badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg shadow-emerald-500/25">
                    +16 pts
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} hover padding="lg" className="relative">
              {/* Improvement badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-emerald-500/10 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
                  {testimonial.improvement}
                </span>
              </div>

              <CardContent>
                {/* Quote icon */}
                <div className="w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <blockquote className="text-[var(--muted-foreground)] mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-[var(--border-subtle)]">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--foreground)]">{testimonial.name}</div>
                    <div className="text-sm text-[var(--muted-foreground)]">{testimonial.detail}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-[var(--muted-foreground)] text-sm mt-12">
          *Based on pilot group data, 2025. Individual results may vary.
        </p>
      </Container>
    </section>
  );
}
