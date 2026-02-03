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

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Header - hidden on mobile */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden md:block bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
        <Container>
          <nav className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <Logo size="sm" className="w-10 h-10 transition-transform group-hover:scale-105" />
              <span className="font-bold text-xl text-white">
                MatricMaths
              </span>
            </Link>

            {/* Center Navigation */}
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 hover:text-indigo-400 font-medium transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-indigo-400 after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Auth Buttons */}
            <div className="flex items-center gap-3">
              <SignedOut>
                <Button as="link" href="/sign-in" variant="ghost" size="sm" className="text-slate-300 hover:text-white hover:bg-slate-800">
                  Sign In
                </Button>
                <Button as="link" href="/onboarding" variant="primary" size="sm">
                  Book Free Lesson
                </Button>
              </SignedOut>
              <SignedIn>
                <Link
                  href="/dashboard"
                  className="text-slate-300 hover:text-indigo-400 font-medium transition-colors mr-2"
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

      {/* Mobile Menu Button - only visible on mobile */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-50 p-3 rounded-full bg-slate-900/80 backdrop-blur-md shadow-lg border border-slate-700/50 transition-all hover:bg-slate-800 hover:shadow-xl"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? (
          <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Full-screen Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-lg">
          <div className="flex flex-col items-center justify-center h-full gap-6 px-6">
            <Link href="/" className="flex items-center gap-3 mb-4" onClick={() => setMobileMenuOpen(false)}>
              <Logo size="sm" className="w-12 h-12" />
              <span className="font-bold text-2xl text-white">MatricMaths</span>
            </Link>

            {/* Navigation Links */}
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl text-slate-300 hover:text-indigo-400 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Auth Section */}
            <div className="flex flex-col items-center gap-4 mt-6 w-full max-w-xs">
              <SignedOut>
                <Button as="link" href="/sign-in" variant="outline" size="md" className="w-full border-slate-600 text-slate-300">
                  Sign In
                </Button>
                <Button as="link" href="/onboarding" variant="primary" size="md" className="w-full">
                  Book Free Lesson
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
                  <span className="text-slate-400">Your Account</span>
                </div>
              </SignedIn>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
