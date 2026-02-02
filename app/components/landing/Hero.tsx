"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

// Math-themed SVG components
function PiSymbol({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
      <text x="40" y="52" textAnchor="middle" fill="currentColor" fontSize="36" fontWeight="bold" fontFamily="serif">π</text>
    </svg>
  );
}

function SigmaSymbol({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="38" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
      <text x="40" y="54" textAnchor="middle" fill="currentColor" fontSize="40" fontWeight="bold" fontFamily="serif">Σ</text>
    </svg>
  );
}

function SquareRoot({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 90 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 40 L18 55 L38 12 L85 12" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <text x="60" y="45" fill="currentColor" fontSize="24" fontWeight="600" fontFamily="serif" fontStyle="italic">x</text>
    </svg>
  );
}

function IntegralSymbol({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M35 10 C25 10 25 25 25 45 C25 65 25 80 15 80" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
      <circle cx="38" cy="10" r="4" fill="currentColor" />
      <circle cx="12" cy="80" r="4" fill="currentColor" />
    </svg>
  );
}

function DeltaSymbol({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M35 8 L65 62 L5 62 Z" stroke="currentColor" strokeWidth="3" fill="currentColor" fillOpacity="0.08" strokeLinejoin="round" />
    </svg>
  );
}

function InfinitySymbol({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 25C25 12 38 12 45 25C52 38 65 38 65 25C65 12 78 12 78 25C78 38 65 38 58 25C51 12 38 12 25 25Z" stroke="currentColor" strokeWidth="3.5" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function GraphIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="64" height="64" rx="6" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" />
      {/* Grid lines */}
      <path d="M8 40 L72 40 M40 8 L40 72" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" />
      {/* Parabola */}
      <path d="M15 65 Q40 5 65 65" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Vertex point */}
      <circle cx="40" cy="15" r="4" fill="currentColor" />
    </svg>
  );
}

function SineWave({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 30 Q15 5 30 30 Q45 55 60 30 Q75 5 90 30 Q105 55 120 30" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function PythagorasIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Triangle */}
      <path d="M10 70 L10 20 L70 70 Z" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.06" />
      {/* Right angle marker */}
      <path d="M10 60 L20 60 L20 70" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Labels */}
      <text x="5" y="48" fill="currentColor" fontSize="14" fontWeight="bold" fontFamily="serif" fontStyle="italic">a</text>
      <text x="38" y="78" fill="currentColor" fontSize="14" fontWeight="bold" fontFamily="serif" fontStyle="italic">b</text>
      <text x="42" y="40" fill="currentColor" fontSize="14" fontWeight="bold" fontFamily="serif" fontStyle="italic">c</text>
    </svg>
  );
}

function FractionSymbol({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="30" y="28" textAnchor="middle" fill="currentColor" fontSize="24" fontWeight="bold" fontFamily="serif" fontStyle="italic">x</text>
      <path d="M10 40 L50 40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <text x="30" y="68" textAnchor="middle" fill="currentColor" fontSize="24" fontWeight="bold" fontFamily="serif" fontStyle="italic">y</text>
    </svg>
  );
}

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const mathSymbolsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate content on load
      gsap.from(contentRef.current?.children || [], {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });

      // Animate math symbols
      const symbols = mathSymbolsRef.current?.querySelectorAll(".math-symbol");
      if (symbols) {
        gsap.from(symbols, {
          scale: 0,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          delay: 0.5,
        });

        // Floating animation for each symbol
        symbols.forEach((symbol, index) => {
          const randomX = (Math.random() - 0.5) * 30;
          const randomY = (Math.random() - 0.5) * 40;
          const duration = 4 + Math.random() * 3;
          const delay = index * 0.2;

          gsap.to(symbol, {
            y: randomY,
            x: randomX,
            rotation: (Math.random() - 0.5) * 15,
            duration: duration,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            delay: delay,
          });
        });
      }

      // Animate background blobs
      const blobs = heroRef.current?.querySelectorAll(".bg-blob");
      blobs?.forEach((blob, index) => {
        gsap.to(blob, {
          scale: 1.1 + Math.random() * 0.2,
          x: (Math.random() - 0.5) * 50,
          y: (Math.random() - 0.5) * 50,
          duration: 8 + index * 2,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />

      {/* Animated background blobs */}
      <div className="bg-blob absolute top-10 left-10 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30" />
      <div className="bg-blob absolute bottom-10 right-10 w-96 h-96 bg-indigo-200 rounded-full blur-3xl opacity-25" />
      <div className="bg-blob absolute top-1/2 left-1/3 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20" />

      {/* Math Symbols Container */}
      <div ref={mathSymbolsRef} className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left Side - visible on all screens with responsive sizes */}
        <PiSymbol className="math-symbol absolute top-[15%] left-[2%] sm:left-[5%] w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-blue-500/50 sm:text-blue-500/60" />
        <SigmaSymbol className="math-symbol absolute top-[55%] sm:top-[50%] left-[1%] sm:left-[3%] w-9 h-9 sm:w-11 sm:h-11 lg:w-14 lg:h-14 text-indigo-500/40 sm:text-indigo-500/50" />
        <IntegralSymbol className="math-symbol absolute bottom-[20%] sm:bottom-[25%] left-[5%] sm:left-[8%] w-7 h-11 sm:w-8 sm:h-13 lg:w-10 lg:h-16 text-blue-600/40 sm:text-blue-600/50" />
        <GraphIcon className="math-symbol absolute top-[30%] sm:top-[25%] left-[8%] sm:left-[12%] w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-blue-400/30 sm:text-blue-400/40 hidden sm:block" />
        <FractionSymbol className="math-symbol absolute bottom-[35%] sm:bottom-[40%] left-[12%] sm:left-[15%] w-8 h-12 sm:w-10 sm:h-14 lg:w-12 lg:h-16 text-indigo-400/35 sm:text-indigo-400/45 hidden md:block" />

        {/* Right Side - visible on all screens with responsive sizes */}
        <SquareRoot className="math-symbol absolute top-[12%] right-[2%] sm:right-[6%] w-14 h-11 sm:w-16 sm:h-13 lg:w-20 lg:h-16 text-blue-500/45 sm:text-blue-500/55" />
        <DeltaSymbol className="math-symbol absolute top-[50%] sm:top-[45%] right-[1%] sm:right-[4%] w-10 h-10 sm:w-11 sm:h-11 lg:w-14 lg:h-14 text-indigo-500/40 sm:text-indigo-500/50" />
        <InfinitySymbol className="math-symbol absolute bottom-[25%] sm:bottom-[30%] right-[5%] sm:right-[8%] w-14 h-7 sm:w-16 sm:h-8 lg:w-20 lg:h-10 text-blue-400/35 sm:text-blue-400/45" />
        <SineWave className="math-symbol absolute top-[28%] right-[10%] sm:right-[14%] w-16 h-8 sm:w-20 sm:h-10 lg:w-24 lg:h-12 text-indigo-400/30 sm:text-indigo-400/40 hidden sm:block" />
        <PythagorasIcon className="math-symbol absolute bottom-[12%] sm:bottom-[15%] right-[8%] sm:right-[12%] w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-blue-500/30 sm:text-blue-500/40 hidden md:block" />

        {/* Small floating dots - visible on all screens */}
        <div className="math-symbol absolute top-[35%] left-[18%] sm:left-[20%] w-2 h-2 sm:w-3 sm:h-3 bg-blue-400/40 sm:bg-blue-400/50 rounded-full" />
        <div className="math-symbol absolute top-[65%] sm:top-[60%] right-[18%] sm:right-[20%] w-2 h-2 bg-indigo-400/50 sm:bg-indigo-400/60 rounded-full" />
        <div className="math-symbol absolute bottom-[45%] left-[22%] sm:left-[25%] w-3 h-3 sm:w-4 sm:h-4 bg-purple-400/30 sm:bg-purple-400/40 rounded-full" />
        <div className="math-symbol absolute top-[20%] right-[22%] sm:right-[25%] w-2 h-2 sm:w-3 sm:h-3 bg-blue-500/40 sm:bg-blue-500/50 rounded-full" />
      </div>

      <Container className="relative z-10">
        <div ref={contentRef} className="max-w-3xl mx-auto text-center px-2">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Now enrolling for 2026
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-4 sm:mb-6">
            Private math tutor,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              but affordable.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-slate-600 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed">
            For the price of one hour of private tutoring, you get an entire month of live classes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button as="link" href="/onboarding" variant="primary" size="lg" className="w-full sm:w-auto">
              Book Free Onboarding Call
            </Button>
            <Button as="anchor" href="#how-it-works" variant="outline" size="lg" className="w-full sm:w-auto">
              See How It Works
            </Button>
          </div>

          {/* Urgency text */}
          <p className="mt-5 sm:mt-6 text-sm font-medium text-orange-600">
            Limited seats available for first batch
          </p>
        </div>
      </Container>
    </section>
  );
}
