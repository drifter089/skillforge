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

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/50">
      <Container>
        <nav className="flex items-center justify-between h-12 sm:h-16 md:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg sm:rounded-xl flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-base sm:text-lg">M</span>
            </div>
            <span className="font-bold text-xl text-slate-900 hidden sm:block">
              MatricMaths
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <SignedOut>
              <Button as="link" href="/sign-in" variant="ghost" size="sm">
                Sign In
              </Button>
              <Button as="link" href="/onboarding" variant="primary" size="sm">
                Book Free Lesson
              </Button>
            </SignedOut>
            <SignedIn>
              <Link
                href="/dashboard"
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors mr-2"
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-slate-200 bg-slate-50/50">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-600 hover:text-blue-600 hover:bg-slate-100 font-medium py-2 px-2 rounded-lg transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-3 mt-2 border-t border-slate-200">
                <SignedOut>
                  <Button as="link" href="/sign-in" variant="outline" size="sm" className="w-full">
                    Sign In
                  </Button>
                  <Button as="link" href="/onboarding" variant="primary" size="sm" className="w-full">
                    Get Started
                  </Button>
                </SignedOut>
                <SignedIn>
                  <Button as="link" href="/dashboard" variant="outline" size="sm" className="w-full">
                    Dashboard
                  </Button>
                  <div className="flex justify-center pt-2">
                    <UserButton />
                  </div>
                </SignedIn>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
