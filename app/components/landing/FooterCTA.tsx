"use client";

import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { Logo } from "../Logo";

export function FooterCTA() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-sm font-medium text-amber-400">Limited spots available</span>
          </span>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--foreground)] mb-6">
            Your Future Starts with{" "}
            <span className="text-gradient">One Decision</span>
          </h2>
          <p className="text-xl md:text-2xl text-[var(--muted-foreground)] mb-10">
            2 hours a week. That&apos;s all it takes to change your matric results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button as="link" href="/onboarding" variant="primary" size="lg" className="group">
              <span>Free Private Classes for 1 Month</span>
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <Button as="link" href="/onboarding" variant="outline" size="lg">
              Talk to Us First
            </Button>
          </div>

          {/* Contact info */}
          <div className="flex justify-center">
            <a
              href="mailto:akshat@threxon.org"
              className="flex items-center gap-2 text-[var(--muted-foreground)] hover:text-indigo-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              akshat@threxon.org
            </a>
          </div>
        </div>
      </Container>

      {/* Footer */}
      <div className="mt-20 border-t border-slate-200">
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
      </div>
    </section>
  );
}
