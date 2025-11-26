"use client";

import { Button } from "@/components/ui/button";
import { Rocket, CheckCircle2, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ClientLogos } from "./client-logos";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-5rem)] flex flex-col justify-center py-12 md:py-20 pt-32 md:pt-40">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
      </div>

      <div className="container px-4 mx-auto text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100 text-balance">
          Launch Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">MVP in 15 Days</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300 leading-relaxed">
          From idea to live product. We take care of design, development, and deployment so you can focus on growth.
        </p>

        {/* Microproof Line */}
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-400">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
            <span className="text-sm md:text-base">
              <span className="font-semibold text-foreground">20+</span>
              <span className="text-muted-foreground ml-1">MVPs Built</span>
            </span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-colors">
            <TrendingUp className="w-4 h-4 text-primary shrink-0" />
            <span className="text-sm md:text-base">
              <span className="font-semibold text-foreground">3</span>
              <span className="text-muted-foreground ml-1">Clients Raised Pre-Seed</span>
            </span>
          </div>
        </div>

        <div className="flex items-center justify-center animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          <Button size="lg" className="h-12 px-8 text-base group cta-primary hover:shadow-xl hover:scale-105 transition-all duration-300" asChild>
            <Link href="/#pricing">
              Start Your Launch
              <Rocket className="ml-2 h-4 w-4 group-hover:-translate-y-1 group-hover:rotate-12 transition-all duration-300" />
            </Link>
          </Button>
        </div>

        {/* Social Proof - Stacked Avatars */}
        <div className="mt-12 flex items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-700">
          <div className="flex -space-x-3">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className="relative w-10 h-10 rounded-full ring-2 ring-background overflow-hidden hover:scale-110 transition-transform duration-300 cursor-pointer z-0 hover:z-10"
              >
                <Image
                  src={`/images/hero/founder-${i + 1}.jpg`}
                  alt="Founder"
                  fill
                  className="object-cover"
                  sizes="40px"
                />
              </div>
            ))}
          </div>
          <div className="text-left">
            <p className="text-sm font-medium text-foreground">
              Trusted by founders
            </p>
            <p className="text-xs text-muted-foreground">
              20+ MVPs launched
            </p>
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-1000">
          <ClientLogos />
        </div>
      </div>
    </section>
  );
}
