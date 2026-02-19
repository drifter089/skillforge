"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate left content
      gsap.from(contentRef.current?.children || [], {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
      });

      // Animate image
      gsap.from(imageRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-20 pb-12 sm:pt-24 sm:pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background - 60% base color */}
      <div className="absolute inset-0 bg-[var(--background)]" />

      {/* Subtle accent gradient - reduced on mobile */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-500/5 to-transparent opacity-50 sm:opacity-100" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div ref={contentRef} className="text-center lg:text-left">
            {/* February Intake Badge - 10% accent (emerald) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4 sm:mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">February intake open</span>
            </div>

            {/* Headline - with explicit heading font */}
            <h1 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[var(--foreground)] leading-[1.15] mb-4 sm:mb-6">
              Pass Matric Maths{" "}
              <br className="hidden sm:block" />
              with{" "}
              <span className="text-violet-600 dark:text-violet-400">Confidence</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[var(--muted-foreground)] mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Live classes, personal attention, and the support you need to walk into your exam confident.{" "}
              <span className="text-[var(--foreground)] font-semibold">No surprises.</span>
            </p>

            {/* CTA Buttons - Better touch targets */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Button as="link" href="/onboarding" variant="primary" size="lg" className="group w-full sm:w-auto min-h-[48px]">
                <span>Free Classes for 1 Month</span>
                <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <Button as="anchor" href="#how-it-works" variant="outline" size="lg" className="w-full sm:w-auto min-h-[48px]">
                See How It Works
              </Button>
            </div>

            {/* Trust Points - Better mobile layout */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-x-4 sm:gap-y-2 text-sm text-[var(--muted-foreground)]">
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Live teachers
              </span>
              <span className="hidden sm:inline text-[var(--border)]">·</span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                25 max per class
              </span>
              <span className="hidden sm:inline text-[var(--border)]">·</span>
              <span className="inline-flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                All classes recorded
              </span>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div ref={imageRef} className="relative lg:pl-4">
            {/* Image Container - responsive aspect ratios */}
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl shadow-black/10 dark:shadow-black/40">
              {/* Wider on mobile (16:10), standard on desktop (4:3) */}
              <div className="aspect-[16/10] sm:aspect-[4/3] relative">
                <Image
                  src="/Image/heropic.jpg"
                  alt="Students learning maths in an engaging online class"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

              {/* Stats Card - responsive sizing, better dark mode contrast */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-2.5 sm:p-3 shadow-lg border border-slate-200/50 dark:border-slate-600/50">
                <div className="flex items-center gap-2 sm:gap-2.5">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">+16 marks</p>
                    <p className="text-[10px] sm:text-xs text-slate-600 dark:text-slate-400">avg improvement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative glow behind image - reduced on mobile */}
            <div className="absolute -inset-2 sm:-inset-4 -z-10 bg-gradient-to-r from-violet-500/15 to-indigo-500/15 sm:from-violet-500/20 sm:to-indigo-500/20 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl" />
          </div>
        </div>
      </Container>
    </section>
  );
}
