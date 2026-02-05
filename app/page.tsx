import { Hero } from "./components/landing/Hero";
import { SolutionSection } from "./components/landing/SolutionSection";
import { SocialProof } from "./components/landing/SocialProof";
import { FAQ } from "./components/landing/FAQ";
import { FooterCTA } from "./components/landing/FooterCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <SolutionSection />
      <SocialProof />
      <FAQ />
      <FooterCTA />
    </main>
  );
}
