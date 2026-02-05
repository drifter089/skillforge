import { Hero } from "./components/landing/Hero";
import { ProblemSection } from "./components/landing/ProblemSection";
import { SolutionSection } from "./components/landing/SolutionSection";
import { WhyThisWorks } from "./components/landing/WhyThisWorks";
import { HowItWorks } from "./components/landing/HowItWorks";
import { SocialProof } from "./components/landing/SocialProof";
import { FAQ } from "./components/landing/FAQ";
import { FooterCTA } from "./components/landing/FooterCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <WhyThisWorks />
      <HowItWorks />
      <SocialProof />
      <FAQ />
      <FooterCTA />
    </main>
  );
}
