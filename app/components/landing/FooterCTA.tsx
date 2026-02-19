"use client";

import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { ArrowRight } from "lucide-react";

export function FooterCTA() {
  return (
    <>
      {/* CTA Section */}
      <section className="py-[72px] md:py-[120px] bg-slate-50">
        <Container>
          <div className="text-center max-w-[700px] mx-auto">
            {/* Heading */}
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              2 hours a week.
              <br />
              That&apos;s <span className="text-violet-600">all it takes.</span>
            </h2>

            {/* Subtitle */}
            <p className="font-(family-name:--font-body) text-lg md:text-xl text-slate-500 mb-10">
              Your first month of private classes is completely free. No card needed,
              <br className="hidden md:block" /> no commitment.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <Button as="link" href="/onboarding" variant="primary" size="lg" className="gap-2">
                Start Free for 1 Month
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button as="link" href="/onboarding" variant="outline" size="lg">
                Talk to Us First
              </Button>
            </div>

            {/* Email link */}
            <p className="text-slate-500">
              Or email us at{" "}
              <a
                href="mailto:akshat@threxon.org"
                className="text-violet-600 hover:text-violet-700 transition-colors"
              >
                akshat@threxon.org
              </a>
            </p>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white">
        <Container>
          <div className="flex justify-between items-center py-8">
            <p className="text-base text-slate-600">
              © 2026 <span className="font-[family-name:var(--font-heading)] font-semibold">MatricMaths</span>. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-base text-slate-500 hover:text-violet-600 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-base text-slate-500 hover:text-violet-600 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}
