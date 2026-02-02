"use client";

import { useState, useEffect } from "react";
import { useUser, UserButton, SignedIn, SignedOut } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Logo } from "@/app/components/Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
];

const grades = [
  { value: "grade10", label: "Grade 10" },
  { value: "grade11", label: "Grade 11" },
  { value: "grade12", label: "Grade 12" },
  { value: "rewrite", label: "Matric Rewrite" },
];

const classSizes = [
  {
    value: "1-on-1",
    label: "1-on-1 Private",
    description: "Personalized attention",
  },
  {
    value: "small-group",
    label: "Small Group (2-4)",
    description: "Collaborative learning",
  },
  { value: "group", label: "Group (5-8)", description: "Most affordable" },
];

export default function OnboardingPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [grade, setGrade] = useState("");
  const [classSize, setClassSize] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isLoaded && user) {
      // Check if user already has a booking
      fetch("/api/student")
        .then((res) => res.json())
        .then((data) => {
          if (data.student?.bookingStatus === "booked") {
            router.push("/dashboard");
          } else {
            setIsChecking(false);
          }
        })
        .catch(() => setIsChecking(false));
    } else if (isLoaded && !user) {
      setIsChecking(false);
    }
  }, [isLoaded, user, router]);

  // Set up Cal.com event listener for booking success
  useEffect(() => {
    if (showCalendar) {
      (async function () {
        const cal = await getCalApi();
        cal("on", {
          action: "bookingSuccessful",
          callback: async () => {
            // Update booking status in database
            try {
              await fetch("/api/student/booking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: "booked" }),
              });
            } catch (error) {
              console.error("Error updating booking status:", error);
            }
            // Redirect to dashboard
            router.push("/booking-success");
          },
        });
      })();
    }
  }, [showCalendar, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save student data to database
      const response = await fetch("/api/student", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: user?.primaryEmailAddress?.emailAddress,
          grade,
          classSize,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save data");
      }

      // Show the calendar embed instead of redirecting
      setShowCalendar(true);
      setIsSubmitting(false);
    } catch (error) {
      console.error("Error saving student data:", error);
      setIsSubmitting(false);
    }
  };

  if (!isLoaded || isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="flex flex-col items-center gap-4">
          <svg className="animate-spin w-8 h-8 text-blue-600" viewBox="0 0 24 24">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Header component for reuse
  const Header = () => (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="max-w-4xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Logo size="sm" className="sm:w-10 sm:h-10" />
            <span className="font-bold text-xl text-slate-900 hidden sm:block">MatricMaths</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                  },
                }}
              />
            </SignedIn>
            <SignedOut>
              <Link
                href="/sign-in"
                className="text-slate-600 hover:text-blue-600 font-medium transition-colors"
              >
                Sign In
              </Link>
            </SignedOut>
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
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 mt-3 border-t border-slate-200">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-slate-600 hover:text-blue-600 hover:bg-slate-100 font-medium py-2 px-2 rounded-lg transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 mt-2 border-t border-slate-200 px-2">
                <SignedIn>
                  <div className="flex items-center gap-3">
                    <UserButton
                      appearance={{
                        elements: {
                          avatarBox: "w-8 h-8",
                        },
                      }}
                    />
                    <span className="text-sm text-slate-600">Account</span>
                  </div>
                </SignedIn>
                <SignedOut>
                  <Link
                    href="/sign-in"
                    className="block text-slate-600 hover:text-blue-600 font-medium py-2"
                  >
                    Sign In
                  </Link>
                </SignedOut>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );

  // Show calendar after form submission
  if (showCalendar) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          {/* Title */}
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              Pick a Time That Works for You
            </h1>
            <p className="text-slate-600">
              Select a date and time for your free onboarding call.
            </p>
          </div>

          {/* Cal.com Embed */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <Cal
              calLink="akshat-mittal-e63erx/30min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{
                name: user?.fullName || "",
                email: user?.primaryEmailAddress?.emailAddress || "",
                notes: `Grade: ${grade}, Class Size: ${classSize}`,
                theme: "light",
              }}
            />
          </div>

          {/* Back button */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowCalendar(false)}
              className="text-slate-600 hover:text-slate-900 font-medium"
            >
              &larr; Back to form
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Header />
      <div className="max-w-lg mx-auto px-4 py-8 md:py-12">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
            Book Your Free Onboarding Call
          </h1>
          <p className="text-slate-600">
            Let's find the right learning path for you.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-lg p-6 sm:p-8"
        >
          {/* Grade Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-700 mb-3">
              What grade are you in? <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              {grades.map((g) => (
                <label
                  key={g.value}
                  className={`
                    flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-colors
                    ${
                      grade === g.value
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }
                  `}
                >
                  <input
                    type="radio"
                    name="grade"
                    value={g.value}
                    checked={grade === g.value}
                    onChange={(e) => setGrade(e.target.value)}
                    className="sr-only"
                    required
                  />
                  <span className="font-medium">{g.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Class Size Preference */}
          <div className="mb-8">
            <label className="block text-sm font-medium text-slate-700 mb-3">
              Preferred class size? <span className="text-red-500">*</span>
            </label>
            <div className="space-y-3">
              {classSizes.map((size) => (
                <label
                  key={size.value}
                  className={`
                    flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-colors
                    ${
                      classSize === size.value
                        ? "border-blue-500 bg-blue-50"
                        : "border-slate-200 bg-white hover:border-slate-300"
                    }
                  `}
                >
                  <input
                    type="radio"
                    name="classSize"
                    value={size.value}
                    checked={classSize === size.value}
                    onChange={(e) => setClassSize(e.target.value)}
                    className="sr-only"
                    required
                  />
                  <div>
                    <div className="font-medium text-slate-900">{size.label}</div>
                    <div className="text-sm text-slate-500">{size.description}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!grade || !classSize || isSubmitting}
            className="w-full px-8 py-4 text-lg font-semibold rounded-lg bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 shadow-lg shadow-orange-500/25 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Loading calendar...
              </span>
            ) : (
              "Continue to Book Call"
            )}
          </button>

          <p className="mt-4 text-center text-sm text-slate-500">
            Takes 15 minutes. We'll discuss your goals and find the right plan.
          </p>
        </form>
      </div>
    </div>
  );
}
