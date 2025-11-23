"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Zap, Star } from "lucide-react";
import Link from "next/link";
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
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          Launch Your Product in <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Just 15 Days.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          We turn your idea into a market-ready product fast. No fluff, no endless meetings. Just high-quality code that converts.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <Button size="lg" className="h-12 px-8 text-base group cta-primary" asChild>
            <Link href="/#pricing">
              Start Your Launch
              <Rocket className="ml-2 h-4 w-4 group-hover:-translate-y-1 group-hover:rotate-12 transition-all duration-300" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base cta-secondary" asChild>
            <Link href="/#process">
              How it Works
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 flex flex-col items-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          <div className="flex -space-x-4">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                className="inline-block h-10 w-10 rounded-full ring-2 ring-background"
                src={`https://i.pravatar.cc/100?img=${i + 10}`}
                alt="Founder"
              />
            ))}
          </div>
          <div className="flex items-center gap-1 text-sm font-medium">
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <span className="text-muted-foreground ml-2">Trusted by 10+ founders</span>
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-16 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
          <ClientLogos />
        </div>
      </div>
    </section>
  );
}
