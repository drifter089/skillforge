"use client";

import { useState } from "react";
import { SignedIn, SignedOut, SignUpButton } from "@clerk/nextjs";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

const grades = [
  { value: "grade10", label: "Grade 10" },
  { value: "grade11", label: "Grade 11" },
  { value: "grade12", label: "Grade 12" },
  { value: "rewrite", label: "Matric Rewrite" }
];

const classSizes = [
  { value: "1-on-1", label: "1-on-1 Private", description: "Personalized attention" },
  { value: "small-group", label: "Small Group (2-4)", description: "Collaborative learning" },
  { value: "group", label: "Group (5-8)", description: "Most affordable" }
];

// Cal.com booking URL - replace with your actual link
const CALCOM_BOOKING_URL = "https://cal.com/YOUR_USERNAME/onboarding";

export function SignupForm() {
  const [grade, setGrade] = useState("");
  const [classSize, setClassSize] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Store form data in localStorage for post-booking retrieval
    localStorage.setItem("onboardingData", JSON.stringify({
      grade,
      classSize,
      timestamp: new Date().toISOString()
    }));

    // Build Cal.com URL with query parameters
    const bookingUrl = new URL(CALCOM_BOOKING_URL);
    bookingUrl.searchParams.set("grade", grade);
    bookingUrl.searchParams.set("classSize", classSize);

    // Redirect to Cal.com
    window.location.href = bookingUrl.toString();
  };

  return (
    <section id="signup" className="py-16 md:py-28 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 md:mb-4">
            Book Your Free Onboarding Call
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto px-2">
            Let's find the right learning path for you.
          </p>
        </div>

        {/* Signed Out State */}
        <SignedOut>
          <div className="max-w-lg mx-auto text-center px-2">
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Please sign in to continue
              </h3>
              <p className="text-slate-600 mb-6">
                Create an account to book your free onboarding session and get started.
              </p>
              <SignUpButton mode="modal">
                <Button variant="primary" size="lg" className="w-full">
                  Sign Up with Google
                </Button>
              </SignUpButton>
            </div>
          </div>
        </SignedOut>

        {/* Signed In State - Show Form */}
        <SignedIn>
          <div className="max-w-lg mx-auto px-2">
            <form onSubmit={handleSubmit} className="bg-slate-50 rounded-2xl p-5 sm:p-6 md:p-8">
              {/* Grade Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  What grade are you in? <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {grades.map((g) => (
                    <label
                      key={g.value}
                      className={`
                        flex items-center justify-center p-3 sm:p-4 rounded-lg border-2 cursor-pointer transition-colors active:scale-[0.98]
                        ${grade === g.value
                          ? "border-blue-500 bg-blue-50 text-blue-700"
                          : "border-slate-200 bg-white hover:border-slate-300 active:bg-slate-50"
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
                      <span className="font-medium text-sm sm:text-base">{g.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Class Size Preference */}
              <div className="mb-6 sm:mb-8">
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Preferred class size? <span className="text-red-500">*</span>
                </label>
                <div className="space-y-2 sm:space-y-3">
                  {classSizes.map((size) => (
                    <label
                      key={size.value}
                      className={`
                        flex items-start gap-3 p-3 sm:p-4 rounded-lg border-2 cursor-pointer transition-colors active:scale-[0.99]
                        ${classSize === size.value
                          ? "border-blue-500 bg-blue-50"
                          : "border-slate-200 bg-white hover:border-slate-300 active:bg-slate-50"
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
                        <div className="font-medium text-slate-900 text-sm sm:text-base">{size.label}</div>
                        <div className="text-xs sm:text-sm text-slate-500">{size.description}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={!grade || !classSize || isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Redirecting to booking...
                  </span>
                ) : (
                  "Book Free Onboarding Call"
                )}
              </Button>

              <p className="mt-4 text-center text-sm text-slate-500">
                Takes 15 minutes. We'll discuss your goals and find the right plan.
              </p>
            </form>
          </div>
        </SignedIn>
      </Container>
    </section>
  );
}
