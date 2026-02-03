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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-900">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Everything you need to know about our tutoring programme.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-xl border border-slate-700/50 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-700/30 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0">
                    {openIndex === index ? (
                      <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </span>
                </button>
                <div
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
                  `}
                >
                  <div className="px-6 pb-6 text-slate-300">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-12 text-center p-8 bg-indigo-500/10 rounded-2xl border border-indigo-500/20">
            <h3 className="font-bold text-white mb-2">Still have questions?</h3>
            <p className="text-slate-300 mb-4">
              We're here to help. Send us an email and we'll get back to you.
            </p>
            <a
              href="mailto:akshat@threxon.org"
              className="inline-flex items-center gap-2 text-indigo-400 font-semibold hover:text-indigo-300"
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
