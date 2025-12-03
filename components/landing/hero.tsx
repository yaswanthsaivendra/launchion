"use client";

import { Button } from "@/components/ui/button";
import { FaGlobe, FaCheckCircle } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { SiGooglemeet } from "react-icons/si";
import { FileText } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] flex-col justify-center overflow-hidden bg-gradient-to-b from-purple-50/50 via-white to-white py-8 pt-24 sm:py-12 sm:pt-32 md:py-20 md:pt-40">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="from-primary/5 absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br to-transparent blur-3xl" />
        <div className="from-secondary/5 absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <div className="animate-in fade-in slide-in-from-bottom-8 space-y-6 text-center duration-700 sm:space-y-8 lg:text-left">
            {/* Top Badge */}
            <div className="border-primary/20 bg-primary/5 inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm">
              <div className="bg-primary h-2 w-2 animate-pulse rounded-full" />
              <span className="text-foreground text-sm font-medium">
                Accepting 2 new founders for Dec
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Launch your MVP in{" "}
              <span className="text-primary mt-1 block pb-1 sm:mt-2 sm:pb-2">
                21 days.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed sm:text-xl lg:mx-0">
              We help founders go from{" "}
              <span className="text-foreground font-semibold">
                idea → product
              </span>{" "}
              with end-to-end design, development, and launch support. No fluff,
              just shipping.
            </p>

            {/* CTAs */}
            <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 text-base font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                asChild
              >
                <Link
                  href="https://cal.com/shubham-verma/mvp-discussion-with-shubham"
                  target="_blank"
                >
                  <SiGooglemeet className="h-5 w-5" />
                  Book Strategy Call
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-primary/5 hover:border-primary h-12 border-2 px-8 text-base font-semibold transition-all duration-300 hover:scale-105 hover:text-black"
                asChild
              >
                <Link href="https://tally.so/r/RGWJZ4" target="_blank">
                  <FileText className="h-5 w-5" />
                  Start Project
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-4 pt-4">
              <p className="text-muted-foreground text-xs font-semibold tracking-wider uppercase">
                Trusted by Funded Founders
              </p>
              <div className="flex flex-wrap justify-center gap-6 lg:justify-start">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-primary h-5 w-5 shrink-0" />
                  <span className="text-foreground text-sm font-semibold">
                    20+ MVPs Built
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaGlobe className="text-primary h-5 w-5 shrink-0" />
                  <span className="text-foreground text-sm font-semibold">
                    Global Clients
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaSackDollar className="text-primary h-5 w-5 shrink-0" />
                  <span className="text-foreground text-sm font-semibold">
                    Funded Startups
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 3D Illustration Style */}
          <div className="animate-in fade-in slide-in-from-right-8 relative mt-8 hidden delay-300 duration-1000 lg:mt-0 lg:block">
            <div className="relative mx-auto aspect-square max-w-lg">
              {/* Background Glow */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                <div className="from-primary/20 via-secondary/10 absolute -top-20 -right-20 h-96 w-96 animate-pulse rounded-full bg-gradient-to-br to-transparent blur-3xl" />
                <div
                  className="from-accent/15 absolute -bottom-20 -left-20 h-96 w-96 animate-pulse rounded-full bg-gradient-to-tr to-transparent blur-3xl"
                  style={{ animationDelay: "1s" }}
                />
              </div>

              {/* Main 3D Card */}
              <div className="relative">
                {/* Central Feature Card */}
                <div className="border-primary/20 relative mx-auto w-full max-w-md rounded-3xl border-2 bg-gradient-to-br from-white to-purple-50/30 p-8 shadow-2xl backdrop-blur-sm">
                  {/* Icon/Logo */}
                  <div className="from-primary to-secondary mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg">
                    <svg
                      className="h-10 w-10 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>

                  {/* Title */}
                  <h3 className="text-foreground mb-2 text-2xl font-bold">
                    Ship in 21 Days
                  </h3>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                    From idea to production-ready MVP with modern tech stack
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary/5 border-primary/10 rounded-xl border p-4">
                      <div className="text-primary mb-1 text-3xl font-bold">
                        20+
                      </div>
                      <div className="text-muted-foreground text-xs font-medium">
                        MVPs Launched
                      </div>
                    </div>
                    <div className="bg-secondary/5 border-secondary/10 rounded-xl border p-4">
                      <div className="text-secondary mb-1 text-3xl font-bold">
                        100%
                      </div>
                      <div className="text-muted-foreground text-xs font-medium">
                        Success Rate
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge - Top Right */}
                <div
                  className="border-primary/20 to-primary/5 animate-in fade-in zoom-in absolute -top-4 -right-4 rounded-2xl border bg-gradient-to-br from-white px-4 py-3 shadow-xl backdrop-blur-sm"
                  style={{ animationDelay: "0.5s", animationDuration: "1s" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="bg-accent h-2 w-2 animate-pulse rounded-full" />
                    <span className="text-foreground text-sm font-semibold">
                      Live Projects
                    </span>
                  </div>
                </div>

                {/* Floating Badge - Bottom Left */}
                <div
                  className="border-secondary/20 to-secondary/5 animate-in fade-in zoom-in absolute -bottom-4 -left-4 rounded-2xl border bg-gradient-to-br from-white px-4 py-3 shadow-xl backdrop-blur-sm"
                  style={{ animationDelay: "0.7s", animationDuration: "1s" }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🚀</span>
                    <div>
                      <div className="text-foreground text-xs font-bold">
                        Fast Delivery
                      </div>
                      <div className="text-muted-foreground text-[10px]">
                        21 Days Average
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="from-primary/10 absolute -top-8 left-1/4 h-16 w-16 rounded-full bg-gradient-to-br to-transparent blur-xl" />
                <div className="from-secondary/10 absolute right-1/4 -bottom-8 h-20 w-20 rounded-full bg-gradient-to-br to-transparent blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
