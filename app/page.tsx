import { Hero } from "@/components/hero";
import { ProblemSection } from "@/components/problem-section";
import { CasesSection } from "@/components/cases-section";
import { PricingSection } from "@/components/pricing-section";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <ProblemSection />
        <CasesSection />
        <FaqSection />
        <PricingSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
