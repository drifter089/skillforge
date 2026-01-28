"use client";

import { useActionState } from "react";
import { submitSignup, SignupFormState } from "@/app/actions/submitSignup";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

const grades = [
  { value: "grade10", label: "Grade 10" },
  { value: "grade11", label: "Grade 11" },
  { value: "grade12", label: "Grade 12" },
  { value: "rewrite", label: "Matric Rewrite" }
];

const provinces = [
  { value: "eastern-cape", label: "Eastern Cape" },
  { value: "free-state", label: "Free State" },
  { value: "gauteng", label: "Gauteng" },
  { value: "kwazulu-natal", label: "KwaZulu-Natal" },
  { value: "limpopo", label: "Limpopo" },
  { value: "mpumalanga", label: "Mpumalanga" },
  { value: "northern-cape", label: "Northern Cape" },
  { value: "north-west", label: "North West" },
  { value: "western-cape", label: "Western Cape" }
];

const currentMarks = [
  { value: "below-30", label: "Below 30%" },
  { value: "30-40", label: "30% - 40%" },
  { value: "40-50", label: "40% - 50%" },
  { value: "50-60", label: "50% - 60%" },
  { value: "60-70", label: "60% - 70%" },
  { value: "above-70", label: "Above 70%" },
  { value: "dont-know", label: "I don't know" }
];

const tierInterests = [
  { value: "free", label: "Free", description: "Get started at no cost" },
  { value: "standard", label: "Standard (R1,299/mo)", description: "Most popular" },
  { value: "premium", label: "Premium (R2,299/mo)", description: "Intensive support" },
  { value: "not-sure", label: "Not sure yet", description: "Help me decide" }
];

const referralSources = [
  { value: "tiktok", label: "TikTok" },
  { value: "instagram", label: "Instagram" },
  { value: "facebook", label: "Facebook" },
  { value: "friend", label: "Friend or Family" },
  { value: "teacher", label: "Teacher" },
  { value: "google", label: "Google Search" },
  { value: "other", label: "Other" }
];

interface InputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
}

function Input({ label, name, type = "text", placeholder, required, error }: InputProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        className={`
          w-full px-4 py-3 rounded-lg border transition-colors
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          ${error
            ? "border-red-300 bg-red-50"
            : "border-slate-300 bg-white hover:border-slate-400"
          }
        `}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

interface SelectProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  required?: boolean;
  error?: string;
}

function Select({ label, name, options, required, error }: SelectProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-slate-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className={`
          w-full px-4 py-3 rounded-lg border transition-colors appearance-none bg-white
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          ${error
            ? "border-red-300 bg-red-50"
            : "border-slate-300 hover:border-slate-400"
          }
        `}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
          backgroundPosition: "right 0.75rem center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "1.5em 1.5em",
          paddingRight: "2.5rem"
        }}
      >
        <option value="" disabled>Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

export function SignupForm() {
  const [state, formAction, isPending] = useActionState<SignupFormState | null, FormData>(
    submitSignup,
    null
  );

  if (state?.success) {
    return (
      <section id="signup" className="py-20 md:py-28 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              You're on the Waitlist!
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              {state.message}
            </p>
            <div className="bg-blue-50 rounded-xl p-6 text-left">
              <h3 className="font-semibold text-slate-900 mb-2">What happens next?</h3>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">1.</span>
                  <span>We'll send you a WhatsApp message to confirm your spot</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">2.</span>
                  <span>You'll get updates as we prepare to launch</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">3.</span>
                  <span>Early access members get priority class placement</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section id="signup" className="py-20 md:py-28 bg-white">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Pass Matric Maths?
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Join the waitlist. Be first when we launch.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <form action={formAction} className="bg-slate-50 rounded-2xl p-6 md:p-8">
            {/* Error message */}
            {state?.success === false && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 font-medium">{state.message}</p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              {/* Full Name */}
              <Input
                label="Full Name"
                name="name"
                placeholder="Your full name"
                required
                error={state?.errors?.name}
              />

              {/* WhatsApp Number */}
              <Input
                label="WhatsApp Number"
                name="whatsapp"
                type="tel"
                placeholder="0612345678"
                required
                error={state?.errors?.whatsapp}
              />

              {/* Email */}
              <Input
                label="Email Address"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                error={state?.errors?.email}
              />

              {/* Grade */}
              <Select
                label="Grade"
                name="grade"
                options={grades}
                required
                error={state?.errors?.grade}
              />

              {/* Province */}
              <Select
                label="Province"
                name="province"
                options={provinces}
                required
                error={state?.errors?.province}
              />

              {/* Current Mark */}
              <Select
                label="Current Maths Mark (estimate)"
                name="currentMark"
                options={currentMarks}
                required
                error={state?.errors?.currentMark}
              />
            </div>

            {/* Tier Interest - Radio buttons */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Which tier interests you? <span className="text-red-500">*</span>
              </label>
              <div className="grid sm:grid-cols-2 gap-3">
                {tierInterests.map((tier) => (
                  <label
                    key={tier.value}
                    className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-200 cursor-pointer hover:border-blue-300 transition-colors has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50"
                  >
                    <input
                      type="radio"
                      name="tierInterest"
                      value={tier.value}
                      className="mt-1 w-4 h-4 text-blue-600 border-slate-300 focus:ring-blue-500"
                    />
                    <div>
                      <div className="font-medium text-slate-900">{tier.label}</div>
                      <div className="text-sm text-slate-500">{tier.description}</div>
                    </div>
                  </label>
                ))}
              </div>
              {state?.errors?.tierInterest && (
                <p className="mt-1 text-sm text-red-600">{state.errors.tierInterest}</p>
              )}
            </div>

            {/* Referral Source */}
            <div className="mt-6">
              <Select
                label="How did you hear about us?"
                name="referralSource"
                options={referralSources}
                required
                error={state?.errors?.referralSource}
              />
            </div>

            {/* Submit Button */}
            <div className="mt-8">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={isPending}
              >
                {isPending ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Joining Waitlist...
                  </span>
                ) : (
                  "Join the Waitlist — It's Free"
                )}
              </Button>
            </div>

            {/* Privacy note */}
            <p className="mt-4 text-center text-sm text-slate-500">
              No payment required. We'll contact you when classes open.
              Your information is safe and won't be shared.
            </p>
          </form>

          {/* Urgency note */}
          <div className="mt-6 text-center">
            <p className="text-sm text-slate-600">
              <span className="font-semibold text-orange-600">Limited spots:</span>{" "}
              Only 175 spots available for our first intake. 87 students already on the waitlist for Grade 12.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
