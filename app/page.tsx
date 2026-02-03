import { Hero } from "./components/landing/Hero";
import { SolutionSection } from "./components/landing/SolutionSection";
import { HowItWorks } from "./components/landing/HowItWorks";
import { SocialProof } from "./components/landing/SocialProof";
import { SignupForm } from "./components/landing/SignupForm";
import { FAQ } from "./components/landing/FAQ";
import { FooterCTA } from "./components/landing/FooterCTA";

export default function Home() {
  return (
    <main>
        <Hero />
        <SolutionSection />
        <HowItWorks />
        <SocialProof />
        <SignupForm />
        <FAQ />
        <FooterCTA />
    </main>
  );
}
