import { CTA } from "@/components/landing/cta";
import { FAQ } from "@/components/landing/faq";
import { Hero } from "@/components/landing/hero";
import { Pricing } from "@/components/landing/pricing";
import { Process } from "@/components/landing/process";


export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Hero />

      <Process />
      <Pricing />
      <FAQ />
      <CTA />


    </main>
  );
}
