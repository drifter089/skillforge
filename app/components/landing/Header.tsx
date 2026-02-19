"use client";

import { useState } from "react";
import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { Logo } from "../Logo";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Header */}
      <header className="absolute top-0 left-0 right-0 z-50 hidden md:block bg-white/80 backdrop-blur-md border-b border-slate-100">
        <Container>
          <nav className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 group">
              <Logo size="sm" className="w-8 h-8 transition-transform group-hover:scale-105" />
              <span className="font-bold text-lg text-slate-900">
                MatricMaths
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#features" className="text-slate-600 hover:text-slate-900 font-medium transition-colors text-sm">
                Features
              </a>
              <a href="#how-it-works" className="text-slate-600 hover:text-slate-900 font-medium transition-colors text-sm">
                How It Works
              </a>
              <a href="#testimonials" className="text-slate-600 hover:text-slate-900 font-medium transition-colors text-sm">
                Results
              </a>
              <a href="#faq" className="text-slate-600 hover:text-slate-900 font-medium transition-colors text-sm">
                FAQ
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              <SignedOut>
                <Link
                  href="/sign-in"
                  className="text-sm text-slate-600 hover:text-slate-900 font-medium transition-colors"
                >
                  Sign In
                </Link>
                <Button as="link" href="/onboarding" variant="primary" size="sm">
                  Free Classes
                </Button>
              </SignedOut>
              <SignedIn>
                <Link
                  href="/dashboard"
                  className="text-slate-600 hover:text-violet-600 font-medium transition-colors mr-2"
                >
                  Dashboard
                </Link>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10"
                    }
                  }}
                />
              </SignedIn>
            </div>
          </nav>
        </Container>
      </header>

      {/* Mobile Header Bar */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <Container>
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex items-center gap-2">
              <Logo size="sm" className="w-7 h-7" />
              <span className="font-bold text-slate-900">MatricMaths</span>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile Full-screen Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-white pt-16">
          <div className="flex flex-col items-center justify-center h-full gap-6 px-6 -mt-16">
            {/* Navigation Links */}
            <nav className="flex flex-col items-center gap-4 mb-8">
              <a
                href="#features"
                className="text-lg text-slate-600 hover:text-slate-900 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-lg text-slate-600 hover:text-slate-900 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-lg text-slate-600 hover:text-slate-900 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Results
              </a>
              <a
                href="#faq"
                className="text-lg text-slate-600 hover:text-slate-900 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
            </nav>

            {/* Auth Section */}
            <div className="flex flex-col items-center gap-4 w-full max-w-xs">
              <SignedOut>
                <Link
                  href="/sign-in"
                  className="w-full text-center py-3 text-slate-600 hover:text-slate-900 font-medium border border-slate-200 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Button as="link" href="/onboarding" variant="primary" size="md" className="w-full">
                  Free Classes for 1 Month
                </Button>
              </SignedOut>
              <SignedIn>
                <Button as="link" href="/dashboard" variant="primary" size="md" className="w-full">
                  Dashboard
                </Button>
                <div className="flex items-center gap-3 mt-2">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-12 h-12"
                      }
                    }}
                  />
                  <span className="text-slate-600">Your Account</span>
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
