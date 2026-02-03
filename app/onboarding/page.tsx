"use client";

import { useState, useEffect } from "react";
import { useUser, SignInButton } from "@clerk/nextjs";
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
            // Save all student data and update booking status in one call
            try {
              await fetch("/api/student/booking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  status: "booked",
                  email: user?.primaryEmailAddress?.emailAddress,
                  grade,
                  classSize,
                }),
              });
            } catch (error) {
              console.error("Error updating booking status:", error);
            }
            // Go directly to dashboard with success flag
            router.push("/dashboard?booked=true");
          },
        });
      })();
    }
  }, [showCalendar, router, user, grade, classSize]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Show calendar immediately - data will be saved on booking success
    setShowCalendar(true);
  };

  if (!isLoaded || isChecking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950">
        <div className="flex flex-col items-center gap-4">
          <svg className="animate-spin w-8 h-8 text-indigo-400" viewBox="0 0 24 24">
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
          <p className="text-slate-300">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 pt-20">
        <div className="max-w-lg mx-auto px-4 py-8 md:py-12">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg shadow-black/20 border border-slate-700/50 p-8 text-center">
            <div className="w-16 h-16 bg-indigo-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-indigo-500/30">
              <svg
                className="w-8 h-8 text-indigo-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
              Sign In to Continue
            </h1>
            <p className="text-slate-300 mb-8">
              Create an account or sign in to book your free onboarding call and
              get started with personalized math tutoring.
            </p>
            <SignInButton mode="modal">
              <button className="w-full px-8 py-4 text-lg font-semibold rounded-lg bg-violet-600 text-white hover:bg-violet-700 active:bg-violet-800 shadow-lg shadow-violet-500/25 transition-all duration-200">
                Sign In to Book Call
              </button>
            </SignInButton>
            <p className="mt-4 text-sm text-slate-400">
              Quick sign-up with Google. Takes less than 30 seconds.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Show calendar after form submission
  if (showCalendar) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 pt-20">
        <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
          {/* Title */}
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Pick a Time That Works for You
            </h1>
            <p className="text-slate-300">
              Select a date and time for your free onboarding call.
            </p>
          </div>

          {/* Cal.com Embed */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg shadow-black/20 border border-slate-700/50 overflow-hidden">
            <Cal
              calLink="akshat-mittal-e63erx/30min"
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{
                name: user?.fullName || "",
                email: user?.primaryEmailAddress?.emailAddress || "",
                notes: `Grade: ${grade}, Class Size: ${classSize}`,
                theme: "dark",
              }}
            />
          </div>

          {/* Back button */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setShowCalendar(false)}
              className="text-slate-400 hover:text-white font-medium transition-colors"
            >
              &larr; Back to form
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-indigo-950 pt-20">
      <div className="max-w-lg mx-auto px-4 py-8 md:py-12">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Book Your Free Onboarding Call
          </h1>
          <p className="text-slate-300">
            Let's find the right learning path for you.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-lg shadow-black/20 border border-slate-700/50 p-6 sm:p-8"
        >
          {/* Grade Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-slate-300 mb-3">
              What grade are you in? <span className="text-red-400">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              {grades.map((g) => (
                <label
                  key={g.value}
                  className={`
                    flex items-center justify-center p-4 rounded-lg border-2 cursor-pointer transition-colors
                    ${
                      grade === g.value
                        ? "border-indigo-500 bg-indigo-500/20 text-indigo-300"
                        : "border-slate-600 bg-slate-700/50 text-slate-300 hover:border-slate-500"
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
            <label className="block text-sm font-medium text-slate-300 mb-3">
              Preferred class size? <span className="text-red-400">*</span>
            </label>
            <div className="space-y-3">
              {classSizes.map((size) => (
                <label
                  key={size.value}
                  className={`
                    flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-colors
                    ${
                      classSize === size.value
                        ? "border-indigo-500 bg-indigo-500/20"
                        : "border-slate-600 bg-slate-700/50 hover:border-slate-500"
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
                    <div className={`font-medium ${classSize === size.value ? "text-indigo-300" : "text-white"}`}>{size.label}</div>
                    <div className="text-sm text-slate-400">{size.description}</div>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!grade || !classSize}
            className="w-full px-8 py-4 text-lg font-semibold rounded-lg bg-violet-600 text-white hover:bg-violet-700 active:bg-violet-800 shadow-lg shadow-violet-500/25 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue to Book Call
          </button>

          <p className="mt-4 text-center text-sm text-slate-400">
            Takes 15 minutes. We'll discuss your goals and find the right plan.
          </p>
        </form>
      </div>
    </div>
  );
}
