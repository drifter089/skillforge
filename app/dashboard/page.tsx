"use client";

import { useEffect, useState } from "react";
import { useUser, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Logo } from "@/app/components/Logo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
];

interface Student {
  id: string;
  email: string | null;
  grade: string | null;
  classSize: string | null;
  bookingStatus: string;
  bookedAt: string | null;
}

const gradeLabels: Record<string, string> = {
  grade10: "Grade 10",
  grade11: "Grade 11",
  grade12: "Grade 12",
  rewrite: "Matric Rewrite",
};

const classSizeLabels: Record<string, string> = {
  "1-on-1": "1-on-1 Private",
  "small-group": "Small Group (2-4)",
  group: "Group (5-8)",
};

export default function DashboardPage() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [student, setStudent] = useState<Student | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isLoaded && user) {
      fetch("/api/student")
        .then((res) => res.json())
        .then((data) => {
          setStudent(data.student);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    } else if (isLoaded && !user) {
      router.push("/sign-in");
    }
  }, [isLoaded, user, router]);

  if (!isLoaded || isLoading) {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
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
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "w-10 h-10",
                  },
                }}
              />
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
                <div className="flex items-center gap-3 pt-3 mt-2 border-t border-slate-200 px-2">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8",
                      },
                    }}
                  />
                  <span className="text-sm text-slate-600">Account</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
            Welcome back, {user?.firstName || "Student"}!
          </h1>
          <p className="text-slate-600">
            Here's your learning dashboard.
          </p>
        </div>

        {/* Booking Status Card */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-6">
          {student?.bookingStatus === "booked" ? (
            <>
              {/* Booked State */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-green-600"
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
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-1">
                    Your onboarding call is scheduled!
                  </h2>
                  <p className="text-slate-600 mb-4">
                    We'll see you soon to discuss your learning goals and get you started.
                  </p>

                  {/* Booking Details */}
                  <div className="bg-slate-50 rounded-lg p-4 space-y-2">
                    {student.grade && (
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Grade:</span>
                        <span className="font-medium text-slate-900">
                          {gradeLabels[student.grade] || student.grade}
                        </span>
                      </div>
                    )}
                    {student.classSize && (
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Preferred Class:</span>
                        <span className="font-medium text-slate-900">
                          {classSizeLabels[student.classSize] || student.classSize}
                        </span>
                      </div>
                    )}
                    {student.bookedAt && (
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">Booked on:</span>
                        <span className="font-medium text-slate-900">
                          {new Date(student.bookedAt).toLocaleDateString("en-ZA", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* Pending State */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-orange-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-1">
                    Complete your onboarding
                  </h2>
                  <p className="text-slate-600 mb-4">
                    Book your free onboarding call to get started with MatricMaths.
                  </p>
                  <Link
                    href="/onboarding"
                    className="inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-colors"
                  >
                    Complete Onboarding
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Quick Links */}
        <div className="flex justify-center">
          <a
            href="mailto:akshat@threxon.org"
            className="bg-white rounded-xl p-5 flex items-center gap-4 hover:shadow-md transition-shadow"
          >
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <svg
                className="w-5 h-5 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div>
              <div className="font-medium text-slate-900">Email Support</div>
              <div className="text-sm text-slate-500">akshat@threxon.org</div>
            </div>
          </a>
        </div>
      </main>
    </div>
  );
}
