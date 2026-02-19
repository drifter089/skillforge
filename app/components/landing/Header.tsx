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
import { ThemeToggle } from "./ui/ThemeToggle";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Header - hidden on mobile */}
      <header className="absolute top-0 left-0 right-0 z-50 hidden md:block bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border-subtle)]/30">
        <Container>
          <nav className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3 group">
              <Logo size="sm" className="w-8 h-8 transition-transform group-hover:scale-105" />
              <span className="font-bold text-lg text-[var(--foreground)]">
                MatricMaths
              </span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              <a href="#features" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] font-medium transition-colors text-sm">
                Features
              </a>
              <a href="#how-it-works" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] font-medium transition-colors text-sm">
                How It Works
              </a>
              <a href="#testimonials" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] font-medium transition-colors text-sm">
                Results
              </a>
              <a href="#faq" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)] font-medium transition-colors text-sm">
                FAQ
              </a>
            </div>

            {/* Auth Buttons & Theme Toggle */}
            <div className="flex items-center gap-4">
              <ThemeToggle />
              <SignedOut>
                <Link
                  href="/sign-in"
                  className="text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
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
                  className="text-[var(--muted-foreground)] hover:text-indigo-400 font-medium transition-colors mr-2"
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
      <header className="md:hidden fixed top-0 left-0 right-0 z-40 bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border-subtle)]/30">
        <Container>
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex items-center gap-2">
              <Logo size="sm" className="w-7 h-7" />
              <span className="font-bold text-[var(--foreground)]">MatricMaths</span>
            </Link>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-[var(--background-secondary)] border border-[var(--border-subtle)] transition-all hover:bg-[var(--background-tertiary)]"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-5 h-5 text-[var(--foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-[var(--foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Full-screen Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-[var(--background)]/98 backdrop-blur-lg pt-16">
          <div className="flex flex-col items-center justify-center h-full gap-6 px-6 -mt-16">
            {/* Navigation Links */}
            <nav className="flex flex-col items-center gap-4 mb-8">
              <a
                href="#features"
                className="text-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="text-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="#testimonials"
                className="text-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Results
              </a>
              <a
                href="#faq"
                className="text-lg text-[var(--muted-foreground)] hover:text-[var(--foreground)] font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </a>
            </nav>

            {/* Auth Section */}
            <div className="flex flex-col items-center gap-4 w-full max-w-xs">
              <SignedOut>
                <Button as="link" href="/sign-in" variant="outline" size="md" className="w-full">
                  Sign In
                </Button>
                <Button as="link" href="/onboarding" variant="primary" size="md" className="w-full">
                  Free Private Classes for 1 Month
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
                  <span className="text-[var(--muted-foreground)]">Your Account</span>
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
