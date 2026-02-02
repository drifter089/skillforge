"use client";

import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { Logo } from "../Logo";

export function FooterCTA() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Don't Let Maths Hold You Back.
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-10">
            Your future is worth 2 hours a week.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button as="link" href="/onboarding" variant="primary" size="lg">
              Book Free Onboarding Call
            </Button>
            <Button as="anchor" href="#how-it-works" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              See How It Works
            </Button>
          </div>

          {/* Contact info */}
          <div className="flex justify-center text-slate-400">
            <a href="mailto:akshat@threxon.org" className="flex items-center justify-center gap-2 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              akshat@threxon.org
            </a>
          </div>
        </div>
      </Container>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-slate-700">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Logo size="sm" />
              <span>MatricMaths</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
            <p>© 2026 MatricMaths. All rights reserved.</p>
          </div>
        </Container>
      </div>
    </section>
  );
}
