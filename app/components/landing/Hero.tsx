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
      gsap.from(contentRef.current?.children || [], {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      gsap.from(imageRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.4,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />

      <Container className="relative z-10">
        <div ref={contentRef} className="max-w-3xl mx-auto text-center px-2">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            For Grades 9-12
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4 sm:mb-6">
            Private math tutor,{" "}
            <span className="text-blue-600">
              but affordable.
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            For the price of one hour of private tutoring, you get an entire month of live classes.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button as="link" href="/onboarding" variant="primary" size="lg" className="w-full sm:w-auto">
              Book Free Onboarding Call
            </Button>
            <Button as="anchor" href="#how-it-works" variant="outline" size="lg" className="w-full sm:w-auto">
              See How It Works
            </Button>
          </div>

          <p className="mt-5 sm:mt-6 text-sm font-medium text-orange-600">
            Limited seats available for first batch
          </p>
        </div>

        <div ref={imageRef} className="mt-12 md:mt-16 max-w-4xl mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10">
            <Image
              src="/Generated Image February 03, 2026 - 10_35AM.jpeg"
              alt="Math teacher explaining concepts including algebra, geometry, calculus, statistics and probability"
              width={1200}
              height={675}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
