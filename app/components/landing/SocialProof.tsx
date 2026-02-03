import { Container } from "./ui/Container";

const stats = [
  { value: "38%", label: "Average starting mark", suffix: "" },
  { value: "54%", label: "Average after 3 months", suffix: "", highlight: true },
  { value: "73%", label: "Feel confident in maths", suffix: "" },
  { value: "15+", label: "Percentage points improvement", suffix: "pts" }
];

const testimonials = [
  {
    quote: "I went from 34% to 58% in one term. I was about to drop maths and do Maths Lit. My mom found this and made me try it. After 3 months, I passed for the first time since Grade 9.",
    name: "Thabo M.",
    detail: "Grade 11, Soweto",
    improvement: "+24%"
  },
  {
    quote: "Finally, a teacher who explains properly. In school, I'm scared to ask questions because everyone will laugh. Here, I can ask anything. The teacher actually waits for me to understand.",
    name: "Nosipho K.",
    detail: "Grade 12, Durban",
    improvement: "Now confident"
  },
  {
    quote: "Worth every cent. I was paying R400/hour for a private tutor once a week. Now I get 8+ hours of teaching a month for less than R1,500. And the quality is just as good.",
    name: "Parent",
    detail: "Cape Town",
    improvement: "Saved R3,000+/mo"
  }
];

export function SocialProof() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-indigo-600 to-indigo-800 text-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Students Like You Are Already Improving
          </h2>
          <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
            Real results from our pilot group of 84 students.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`
                text-center p-6 rounded-2xl
                ${stat.highlight ? "bg-white/20 ring-2 ring-white/50" : "bg-white/10"}
              `}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
                <span className="text-2xl">{stat.suffix}</span>
              </div>
              <div className="text-indigo-100 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-slate-900"
            >
              {/* Improvement badge */}
              <div className="mb-4">
                <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">
                  {testimonial.improvement}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-slate-700 mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-violet-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-500">{testimonial.detail}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-indigo-200 text-sm mt-12">
          *Based on pilot group data, 2025. Individual results may vary.
        </p>
      </Container>
    </section>
  );
}
