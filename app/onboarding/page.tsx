"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Cal, { getCalApi } from "@calcom/embed-react";

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

  // Show calendar after form submission
  if (showCalendar) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          {/* Header */}
          <div className="text-center mb-6">
            <a href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <span className="font-bold text-xl text-slate-900">MatricMaths</span>
            </a>
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
              calLink="akshat-mittal-dev/30min"
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
      <div className="max-w-lg mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-8">
          <a href="/" className="inline-flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <span className="font-bold text-xl text-slate-900">MatricMaths</span>
          </a>
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
