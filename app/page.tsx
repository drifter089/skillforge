import { Header } from "./components/landing/Header";
import { Hero } from "./components/landing/Hero";
import { ProblemSection } from "./components/landing/ProblemSection";
import { SolutionSection } from "./components/landing/SolutionSection";
import { HowItWorks } from "./components/landing/HowItWorks";
import { Pricing } from "./components/landing/Pricing";
import { SocialProof } from "./components/landing/SocialProof";
import { SignupForm } from "./components/landing/SignupForm";
import { FAQ } from "./components/landing/FAQ";
import { FooterCTA } from "./components/landing/FooterCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <Pricing />
        <SocialProof />
        <SignupForm />
        <FAQ />
        <FooterCTA />
      </main>
    </>
  );
}
