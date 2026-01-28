import { Container } from "./ui/Container";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-200 rounded-full blur-3xl opacity-30" />

      <Container className="relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
            </span>
            Now enrolling for 2026
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
            From Struggling to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
              Confident.
            </span>
            <br />
            <span className="text-slate-700">
              Live Matric Maths Classes That Actually Work.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Small classes. Real teachers. Results you can see.
          </p>

          {/* Value props */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm md:text-base text-slate-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Only 25 students per class</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>12+ hours monthly</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>From R1,299/month</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button as="anchor" href="#signup" variant="primary" size="lg">
              Join the Waitlist — Get Early Access
            </Button>
            <Button as="anchor" href="#pricing" variant="outline" size="lg">
              See How It Works
            </Button>
          </div>

          {/* Social proof mini */}
          <p className="mt-10 text-sm text-slate-500">
            Join <span className="font-semibold text-slate-700">500+</span> students already on the waitlist
          </p>
        </div>
      </Container>
    </section>
  );
}
