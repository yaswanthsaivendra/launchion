import { CTA } from "@/components/landing/cta";
import { FAQ } from "@/components/landing/faq";
import { Hero } from "@/components/landing/hero";
import { Pricing } from "@/components/landing/pricing";
import { ClientLogos } from "@/components/landing/client-logos";
import { ProcessSection } from "@/components/landing/process-section";
import { WorkSection } from "@/components/landing/work-section";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Hero />

      <section className="border-border/40 border-b py-10">
        <div className="container mx-auto px-4 text-center">
          <ClientLogos />
        </div>
      </section>

      <WorkSection />
      <ProcessSection />
      <Pricing />
      <FAQ />
      <CTA />
    </main>
  );
}
