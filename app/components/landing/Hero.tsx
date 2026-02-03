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
      <div className="absolute inset-0 bg-slate-900" />

      <Container className="relative z-10">
        <div ref={contentRef} className="max-w-3xl mx-auto text-center px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
            Private math tutor,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-300">
              but affordable.
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            For the price of one hour of private tutoring, you get an entire month of live classes.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button as="link" href="/onboarding" variant="primary" size="lg" className="w-full sm:w-auto">
              Book Free Onboarding Call
            </Button>
            <Button as="anchor" href="#how-it-works" variant="outline" size="lg" className="w-full sm:w-auto border-indigo-400 text-indigo-300 hover:bg-indigo-500/10">
              See How It Works
            </Button>
          </div>

          <p className="mt-5 sm:mt-6 text-sm font-medium text-indigo-400">
            Limited seats available for first batch
          </p>
        </div>

        <div ref={imageRef} className="mt-12 md:mt-16 max-w-4xl mx-auto px-4">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-black/50 ring-1 ring-white/10">
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
