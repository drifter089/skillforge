"use client";

import { useState } from "react";
import { Container } from "./ui/Container";

const faqs = [
  {
    question: "I'm really bad at maths. Will this actually help?",
    answer: "If you're willing to show up and try, yes. We've seen students go from failing (below 30%) to passing (50%+) in one term. The key is consistent attendance and asking questions when you're stuck. We're here to help you understand, not judge you."
  },
  {
    question: "What if I don't understand something in class?",
    answer: "Ask. That's what we're here for. In a class of 25, your teacher can actually stop and explain. Plus, you can watch the recording and email your teacher afterwards."
  },
  {
    question: "Do I need a computer?",
    answer: "No. You can join classes from your phone. A computer is better if you have one, but not required. We're also working on zero-rated data partnerships with mobile networks."
  },
  {
    question: "Is this for CAPS or IEB?",
    answer: "We teach CAPS curriculum, which is what 95%+ of SA students follow. IEB students will find most content relevant, though some topics may differ slightly."
  },
  {
    question: "I'm doing a matric rewrite. Can I join?",
    answer: "Absolutely. We have batches specifically for rewrite students. You're not alone in this journey."
  },
  {
    question: "How do I know my child is actually attending?",
    answer: "You'll receive a weekly attendance report. We also notify you if your child misses two classes in a row. We want them to succeed as much as you do."
  },
  {
    question: "What if my child doesn't improve?",
    answer: "If your child attends at least 80% of classes for 3 months and doesn't improve, we'll give you the 4th month free to keep working. We're confident in our teaching."
  },
  {
    question: "Can I switch tiers?",
    answer: "Yes. Upgrade anytime. Downgrade at the end of any month. We want you on the plan that works best for you."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-20 bg-white">
      <Container>
        {/* Section Header - Centered */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-base font-semibold text-purple-600 uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
            Common questions.
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-[680px] mx-auto">
          <div className="flex flex-col gap-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <span
                    className={`
                      flex-shrink-0 w-6 h-6 rounded-full bg-slate-100
                      flex items-center justify-center text-slate-500
                      transition-transform duration-300
                      ${openIndex === index ? "rotate-45" : ""}
                    `}
                  >
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${openIndex === index ? "max-h-96" : "max-h-0"}
                  `}
                >
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-10 text-center p-8 bg-slate-50 rounded-2xl border border-slate-200">
            <h3 className="font-semibold text-lg text-slate-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-slate-600 mb-4">
              We&apos;re here to help. Send us an email and we&apos;ll get back to you.
            </p>
            <a
              href="mailto:akshat@threxon.org"
              className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:text-violet-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email us at akshat@threxon.org
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
