import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

const tiers = [
  {
    name: "Foundation",
    badge: "FREE",
    price: "R0",
    period: "/month",
    description: "For students who need to get started but can't pay yet.",
    features: [
      "1 live class per week (50 students)",
      "Recordings of all classes",
      "Siyavula textbook access",
      "Community discussion forum",
      "Weekly practice quiz"
    ],
    cta: "Join Free Tier",
    variant: "outline" as const,
    popular: false
  },
  {
    name: "Confident",
    badge: "STANDARD",
    price: "R1,299",
    period: "/month",
    annualPrice: "R999/month if paid annually",
    description: "Everything you need to pass matric maths.",
    features: [
      "2 live classes per week (25 students max)",
      "All class recordings",
      "Study group with your batch",
      "Weekly homework review",
      "Monthly progress report",
      "Exam prep workshops",
      "Teacher responds within 24 hours"
    ],
    cta: "Join Standard",
    variant: "primary" as const,
    popular: true
  },
  {
    name: "Distinction",
    badge: "PREMIUM",
    price: "R2,299",
    period: "/month",
    annualPrice: "R1,799/month if paid annually",
    description: "For students aiming for 70%+ or university admission.",
    features: [
      "Everything in Standard, PLUS:",
      "Smaller classes (15 students max)",
      "Weekly 15-min 1:1 teacher check-in",
      "Priority email support (2 hours)",
      "Personalised study plan",
      "Extra exam technique sessions",
      "University application guidance"
    ],
    cta: "Join Premium",
    variant: "secondary" as const,
    popular: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Choose Your Path to Passing
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Three plans. One goal: Get you ready for matric.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`
                relative rounded-2xl border-2 p-8
                ${tier.popular
                  ? "border-orange-500 bg-gradient-to-b from-orange-50 to-white shadow-xl scale-105 z-10"
                  : "border-slate-200 bg-white"
                }
              `}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tier badge */}
              <div className="mb-4">
                <span className={`
                  text-xs font-bold px-3 py-1 rounded-full
                  ${tier.badge === "FREE" ? "bg-green-100 text-green-700" : ""}
                  ${tier.badge === "STANDARD" ? "bg-blue-100 text-blue-700" : ""}
                  ${tier.badge === "PREMIUM" ? "bg-purple-100 text-purple-700" : ""}
                `}>
                  {tier.badge}
                </span>
              </div>

              {/* Name and price */}
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{tier.name}</h3>
              <div className="mb-2">
                <span className="text-4xl font-bold text-slate-900">{tier.price}</span>
                <span className="text-slate-500">{tier.period}</span>
              </div>
              {tier.annualPrice && (
                <p className="text-sm text-green-600 font-medium mb-4">{tier.annualPrice}</p>
              )}
              {!tier.annualPrice && <div className="h-6 mb-4" />}

              {/* Description */}
              <p className="text-slate-600 mb-6">{tier.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                as="anchor"
                href="#signup"
                variant={tier.variant}
                size="lg"
                className="w-full"
              >
                {tier.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* FAQ note */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-slate-50 rounded-2xl p-8">
            <h4 className="font-bold text-slate-900 mb-4">Common Questions</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-medium text-slate-900">Why is this cheaper than private tutoring?</p>
                <p className="text-slate-600">Private tutoring is 1-on-1. We teach in small groups of 25, so the cost is shared. You still get attention and interaction, at a fraction of the price.</p>
              </div>
              <div>
                <p className="font-medium text-slate-900">What if I can't afford any tier?</p>
                <p className="text-slate-600">Start with our Free tier. If you attend consistently and show commitment, we offer scholarships to move up. Money shouldn't be the barrier.</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
