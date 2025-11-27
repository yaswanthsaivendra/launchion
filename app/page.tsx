import { CTA } from "@/components/landing/cta";
import { FAQ } from "@/components/landing/faq";
import { Hero } from "@/components/landing/hero";
import { Pricing } from "@/components/landing/pricing";
import { ClientLogos } from "@/components/landing/client-logos";
import { ProcessSection } from "@/components/landing/process-section";
import { Testimonials } from "@/components/landing/testimonials";


export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Hero />

      <section className="py-10 border-b border-border/40">
        <div className="container px-4 mx-auto text-center">
          <ClientLogos />
        </div>
      </section>

      <ProcessSection />

      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />


    </main>
  );
}
