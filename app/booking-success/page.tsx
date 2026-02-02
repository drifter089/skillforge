"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function BookingSuccessPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(3);

  // Countdown timer
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      router.push("/dashboard");
    }
  }, [countdown, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-4">
      <div className="max-w-md w-full text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Success Message */}
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
          Booking Confirmed!
        </h1>
        <p className="text-slate-600 mb-8">
          Your onboarding call has been scheduled. We'll see you soon!
        </p>

        {/* Redirect Notice */}
        <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
          <p className="text-slate-600">
            Redirecting to your dashboard in{" "}
            <span className="font-bold text-blue-600">{countdown}</span>{" "}
            {countdown === 1 ? "second" : "seconds"}...
          </p>
        </div>

        {/* Manual Link */}
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          Go to Dashboard Now
        </Link>
      </div>
    </div>
  );
}
