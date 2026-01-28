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
    answer: "Ask. That's what we're here for. In a class of 25, your teacher can actually stop and explain. Plus, you can watch the recording, and message your WhatsApp group or teacher afterwards."
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
    <section id="faq" className="py-20 md:py-28 bg-slate-50">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about our tutoring programme.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0">
                    {openIndex === index ? (
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <div className="px-6 pb-6 text-slate-600">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div className="mt-12 text-center p-8 bg-blue-50 rounded-2xl">
            <h3 className="font-bold text-slate-900 mb-2">Still have questions?</h3>
            <p className="text-slate-600 mb-4">
              We're here to help. Send us a WhatsApp message and we'll get back to you.
            </p>
            <a
              href="https://wa.me/27000000000"
              className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
