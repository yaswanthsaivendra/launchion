import { CTA } from "@/components/landing/cta";
import { FAQ } from "@/components/landing/faq";
import { Hero } from "@/components/landing/hero";
import { Pricing } from "@/components/landing/pricing";
import { ProcessSection } from "@/components/landing/process-section";
import { WorkSection } from "@/components/landing/work-section";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Hero />

      <WorkSection />
      <ProcessSection />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}
