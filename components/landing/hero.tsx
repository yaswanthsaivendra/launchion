"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ClientLogos } from "@/components/landing/client-logos";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-start overflow-hidden bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30 pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-32 md:pb-24 lg:pt-36">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-gradient-to-br from-blue-100/20 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-pink-100/20 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        {/* Centered Content */}
        <div className="animate-in fade-in slide-in-from-bottom-8 mx-auto max-w-5xl space-y-8 text-center duration-700 sm:space-y-4 md:space-y-4">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
            <div className="bg-primary h-2 w-2 animate-pulse rounded-full" />
            <span className="text-sm font-medium text-gray-700">
              Available for New Projects
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-sans text-5xl leading-tight font-bold tracking-tight text-gray-900 sm:text-6xl md:text-7xl lg:text-8xl">
            Launch your MVP in{" "}
            <span className="text-primary block">21 days.</span>
          </h1>

          {/* Subheading */}
          <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed font-light text-gray-600 sm:text-xl">
            We help founders go from{" "}
            <span className="font-semibold text-gray-900">idea → product</span>{" "}
            with end-to-end design, development, and launch support. No fluff,
            just shipping.
          </p>

          {/* CTAs */}
          <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row sm:gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 h-12 rounded-full px-8 font-sans text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:h-14 sm:px-10 sm:text-lg"
              asChild
            >
              <Link href="https://tally.so/r/RGWJZ4" target="_blank">
                Start Project
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="hover:border-primary hover:text-primary h-12 rounded-full border-2 border-gray-300 bg-white/50 px-8 font-sans text-base font-semibold text-gray-900 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white sm:h-14 sm:px-10 sm:text-lg"
              asChild
            >
              <Link href="#pricing">View Pricing</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="space-y-4 pt-4">
            <p className="text-xs font-semibold tracking-wider text-gray-500 uppercase">
              Trusted by Funded Founders
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2">
                <svg
                  className="text-primary h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-sans text-sm font-semibold text-gray-700">
                  20+ MVPs Built
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="text-primary h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-sans text-sm font-semibold text-gray-700">
                  Global Clients
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="text-primary h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-sans text-sm font-semibold text-gray-700">
                  Funded Startups
                </span>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-8 pt-12 sm:grid-cols-4 sm:gap-12 md:pt-16">
            <div className="space-y-2">
              <div className="font-sans text-3xl font-bold text-gray-900 sm:text-4xl">
                21 Days
              </div>
              <div className="font-sans text-xs font-medium tracking-wide text-gray-500 uppercase">
                Delivery
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-sans text-3xl font-bold text-gray-900 sm:text-4xl">
                $2M+
              </div>
              <div className="font-sans text-xs font-medium tracking-wide text-gray-500 uppercase">
                Raised by Clients
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-sans text-3xl font-bold text-gray-900 sm:text-4xl">
                15+
              </div>
              <div className="font-sans text-xs font-medium tracking-wide text-gray-500 uppercase">
                Shipped Launches
              </div>
            </div>
            <div className="space-y-2">
              <div className="font-sans text-3xl font-bold text-gray-900 sm:text-4xl">
                4.9/5
              </div>
              <div className="font-sans text-xs font-medium tracking-wide text-gray-500 uppercase">
                Star Rating
              </div>
            </div>
          </div>

          {/* Client Logos Section */}
          <div className="pt-16 sm:pt-20 md:pt-24">
            <ClientLogos />
          </div>
        </div>
      </div>
    </section>
  );
}
