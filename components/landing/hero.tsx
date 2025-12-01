"use client";

import { Button } from "@/components/ui/button";
import { FaGlobe, FaCheckCircle } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { SiGooglemeet } from "react-icons/si";
import { FileText } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] flex-col justify-center overflow-hidden py-8 pt-24 sm:py-12 sm:pt-32 md:py-20 md:pt-40">
      {/* Pure White Background */}
      <div className="absolute inset-0 -z-10 bg-white" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Content */}
          <div className="animate-in fade-in slide-in-from-bottom-8 space-y-6 text-center duration-700 sm:space-y-8 lg:text-left">
            {/* Top Badge */}
            <div className="border-border inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1.5 shadow-sm sm:px-4 sm:py-2">
              <div className="bg-primary h-2 w-2 animate-pulse rounded-full" />
              <span className="text-foreground text-xs font-medium sm:text-sm">
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
            <p className="text-muted-foreground mx-auto max-w-xl text-base leading-relaxed sm:text-lg md:text-xl lg:mx-0">
              We help founders go from{" "}
              <span className="text-foreground font-semibold">
                idea → product
              </span>{" "}
              with end-to-end design, development, and launch support. No fluff,
              just shipping.
            </p>

            {/* CTAs */}
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4 lg:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground h-11 w-full px-6 text-sm font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:h-12 sm:w-auto sm:px-8 sm:text-base"
                asChild
              >
                <Link
                  href="https://cal.com/shubham-verma/mvp-discussion-with-shubham"
                  target="_blank"
                >
                  <SiGooglemeet className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="hidden sm:inline">Book Strategy Call</span>
                  <span className="sm:hidden">Book Call</span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="hover:bg-accent/10 hover:border-accent h-11 w-full border-2 px-6 text-sm font-semibold transition-all duration-300 hover:scale-105 sm:h-12 sm:w-auto sm:px-8 sm:text-base"
                asChild
              >
                <Link href="https://tally.so/r/RGWJZ4" target="_blank">
                  <FileText className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="ml-2 sm:ml-0">Start Project</span>
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="space-y-3 pt-2 sm:space-y-4 sm:pt-4">
              <p className="text-muted-foreground text-[10px] font-bold tracking-wider uppercase sm:text-xs">
                Trusted by Funded Founders
              </p>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:justify-start">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="text-primary h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                  <span className="text-foreground text-xs font-semibold sm:text-sm">
                    20+ MVPs Built
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaGlobe className="text-primary h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                  <span className="text-foreground text-xs font-semibold sm:text-sm">
                    Global Clients
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaSackDollar className="text-primary h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                  <span className="text-foreground text-xs font-semibold sm:text-sm">
                    Funded Startups
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Professional Dashboard Mockup */}
          <div className="animate-in fade-in slide-in-from-right-8 relative mt-8 block delay-300 duration-1000 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Browser Window Mockup */}
              <div className="border-border relative overflow-hidden rounded-xl border bg-white shadow-xl sm:rounded-2xl sm:shadow-2xl">
                {/* Browser Chrome */}
                <div className="border-border flex items-center gap-1.5 border-b bg-gray-50 px-3 py-2 sm:gap-2 sm:px-4 sm:py-2.5">
                  <div className="flex gap-1 sm:gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-red-400 sm:h-2.5 sm:w-2.5" />
                    <div className="h-2 w-2 rounded-full bg-yellow-400 sm:h-2.5 sm:w-2.5" />
                    <div className="h-2 w-2 rounded-full bg-green-400 sm:h-2.5 sm:w-2.5" />
                  </div>
                  <div className="mx-2 flex-1 sm:mx-3">
                    <div className="text-muted-foreground border-border/50 flex items-center gap-1.5 rounded-md border bg-white px-2 py-1 text-[9px] sm:gap-2 sm:px-3 sm:py-1.5 sm:text-[10px]">
                      <div className="h-1 w-1 rounded-full bg-green-500 sm:h-1.5 sm:w-1.5" />
                      <span className="truncate">app.yourstartup.com</span>
                    </div>
                  </div>
                </div>

                {/* Modern SaaS Dashboard */}
                <div className="aspect-[4/3] bg-gray-50 p-3 sm:p-4 md:p-6">
                  {/* Dashboard Header */}
                  <div className="mb-2 flex items-center justify-between sm:mb-4">
                    <div>
                      <h3 className="text-foreground text-xs font-bold sm:text-sm">
                        Dashboard
                      </h3>
                      <p className="text-muted-foreground text-[9px] sm:text-[10px]">
                        Last 30 days
                      </p>
                    </div>
                    <div className="flex gap-1.5 sm:gap-2">
                      <div className="border-border flex h-5 w-5 items-center justify-center rounded border bg-white sm:h-6 sm:w-6">
                        <div className="bg-primary/20 h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3" />
                      </div>
                      <div className="border-border flex h-5 w-5 items-center justify-center rounded border bg-white sm:h-6 sm:w-6">
                        <div className="bg-accent/20 h-2.5 w-2.5 rounded-full sm:h-3 sm:w-3" />
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="mb-2 grid grid-cols-3 gap-2 sm:mb-4 sm:gap-3">
                    {/* Revenue Card */}
                    <div className="border-border rounded-lg border bg-white p-2 shadow-sm sm:p-3">
                      <div className="text-muted-foreground mb-1 text-[8px] font-medium sm:mb-1.5 sm:text-[9px]">
                        Revenue
                      </div>
                      <div className="text-primary mb-0.5 text-sm font-bold sm:mb-1 sm:text-lg">
                        $42.8K
                      </div>
                      <div className="flex items-center gap-0.5 sm:gap-1">
                        <div className="border-b-accent h-0 w-0 border-r-[2px] border-b-[3px] border-l-[2px] border-r-transparent border-l-transparent sm:border-r-[3px] sm:border-b-[4px] sm:border-l-[3px]" />
                        <span className="text-accent text-[8px] font-semibold sm:text-[9px]">
                          +24%
                        </span>
                      </div>
                    </div>

                    {/* Users Card */}
                    <div className="border-border rounded-lg border bg-white p-2 shadow-sm sm:p-3">
                      <div className="text-muted-foreground mb-1 text-[8px] font-medium sm:mb-1.5 sm:text-[9px]">
                        Users
                      </div>
                      <div className="text-primary mb-0.5 text-sm font-bold sm:mb-1 sm:text-lg">
                        2.4K
                      </div>
                      <div className="flex items-center gap-0.5 sm:gap-1">
                        <div className="border-b-accent h-0 w-0 border-r-[2px] border-b-[3px] border-l-[2px] border-r-transparent border-l-transparent sm:border-r-[3px] sm:border-b-[4px] sm:border-l-[3px]" />
                        <span className="text-accent text-[8px] font-semibold sm:text-[9px]">
                          +18%
                        </span>
                      </div>
                    </div>

                    {/* Conversion Card */}
                    <div className="border-border rounded-lg border bg-white p-2 shadow-sm sm:p-3">
                      <div className="text-muted-foreground mb-1 text-[8px] font-medium sm:mb-1.5 sm:text-[9px]">
                        Conversion
                      </div>
                      <div className="text-primary mb-0.5 text-sm font-bold sm:mb-1 sm:text-lg">
                        3.2%
                      </div>
                      <div className="flex items-center gap-0.5 sm:gap-1">
                        <div className="border-b-accent h-0 w-0 border-r-[2px] border-b-[3px] border-l-[2px] border-r-transparent border-l-transparent sm:border-r-[3px] sm:border-b-[4px] sm:border-l-[3px]" />
                        <span className="text-accent text-[8px] font-semibold sm:text-[9px]">
                          +5%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Main Chart Area */}
                  <div className="border-border mb-2 rounded-lg border bg-white p-2 shadow-sm sm:mb-3 sm:p-3 md:p-4">
                    <div className="mb-2 flex items-center justify-between sm:mb-3">
                      <div className="text-foreground text-[10px] font-semibold sm:text-xs">
                        Revenue Trend
                      </div>
                      <div className="flex gap-1.5 sm:gap-2">
                        <div className="flex items-center gap-1 sm:gap-1.5">
                          <div className="bg-primary h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2" />
                          <span className="text-muted-foreground text-[8px] sm:text-[9px]">
                            Revenue
                          </span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-1.5">
                          <div className="bg-secondary h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2" />
                          <span className="text-muted-foreground text-[8px] sm:text-[9px]">
                            Target
                          </span>
                        </div>
                      </div>
                    </div>
                    {/* Line Chart Visualization */}
                    <div className="relative h-16 sm:h-20">
                      <svg
                        className="h-full w-full"
                        viewBox="0 0 200 60"
                        preserveAspectRatio="none"
                      >
                        {/* Grid lines */}
                        <line
                          x1="0"
                          y1="15"
                          x2="200"
                          y2="15"
                          stroke="#e5e7eb"
                          strokeWidth="0.5"
                        />
                        <line
                          x1="0"
                          y1="30"
                          x2="200"
                          y2="30"
                          stroke="#e5e7eb"
                          strokeWidth="0.5"
                        />
                        <line
                          x1="0"
                          y1="45"
                          x2="200"
                          y2="45"
                          stroke="#e5e7eb"
                          strokeWidth="0.5"
                        />
                        {/* Revenue line */}
                        <path
                          d="M 10 50 Q 50 40, 70 35 T 130 25 T 190 20"
                          fill="none"
                          stroke="#0066FF"
                          strokeWidth="2"
                          className="animate-pulse"
                        />
                        {/* Target line */}
                        <path
                          d="M 10 45 Q 50 38, 70 33 T 130 23 T 190 18"
                          fill="none"
                          stroke="#00D4FF"
                          strokeWidth="1.5"
                          strokeDasharray="3,3"
                        />
                        {/* Data points */}
                        <circle cx="10" cy="50" r="2" fill="#0066FF" />
                        <circle cx="70" cy="35" r="2" fill="#0066FF" />
                        <circle cx="130" cy="25" r="2" fill="#0066FF" />
                        <circle cx="190" cy="20" r="2.5" fill="#0066FF" />
                      </svg>
                    </div>
                  </div>

                  {/* Activity Section */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {/* Recent Activity */}
                    <div className="border-border rounded-lg border bg-white p-2 shadow-sm sm:p-3">
                      <div className="text-foreground mb-1.5 text-[10px] font-semibold sm:mb-2 sm:text-xs">
                        Recent Activity
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        {[
                          {
                            icon: "✓",
                            text: "New user signup",
                            time: "2m ago",
                          },
                          {
                            icon: "💰",
                            text: "Payment received",
                            time: "5m ago",
                          },
                        ].map((item, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-1.5 sm:gap-2"
                          >
                            <div className="bg-primary/10 flex h-3 w-3 items-center justify-center rounded-full text-[7px] sm:h-4 sm:w-4 sm:text-[8px]">
                              {item.icon}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="text-foreground truncate text-[8px] font-medium sm:text-[9px]">
                                {item.text}
                              </div>
                              <div className="text-muted-foreground text-[7px] sm:text-[8px]">
                                {item.time}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="border-border rounded-lg border bg-white p-2 shadow-sm sm:p-3">
                      <div className="text-foreground mb-1.5 text-[10px] font-semibold sm:mb-2 sm:text-xs">
                        Quick Stats
                      </div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground text-[8px] sm:text-[9px]">
                            MRR
                          </span>
                          <span className="text-primary text-[9px] font-bold sm:text-[10px]">
                            $3.2K
                          </span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-muted-foreground text-[8px] sm:text-[9px]">
                            Churn
                          </span>
                          <span className="text-accent text-[9px] font-bold sm:text-[10px]">
                            2.1%
                          </span>
                        </div>
                        <div className="h-1 overflow-hidden rounded-full bg-gray-100 sm:h-1.5">
                          <div
                            className="bg-primary h-full rounded-full"
                            style={{ width: "68%" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Success Badge - Top Left */}
              <div className="border-border absolute -top-2 -left-2 z-10 hidden items-center gap-1.5 rounded-lg border bg-white px-2 py-1.5 shadow-lg sm:-top-3 sm:-left-3 sm:flex sm:gap-2 sm:rounded-xl sm:px-3 sm:py-2 sm:shadow-xl">
                <div className="bg-accent h-1.5 w-1.5 animate-pulse rounded-full sm:h-2 sm:w-2" />
                <div>
                  <div className="text-foreground text-[9px] font-bold sm:text-[10px]">
                    Live
                  </div>
                  <div className="text-muted-foreground text-[8px] sm:text-[9px]">
                    Shipped in 21 Days
                  </div>
                </div>
              </div>

              {/* Floating Growth Badge - Bottom Right */}
              <div className="border-border absolute -right-2 -bottom-2 z-10 hidden items-center gap-1.5 rounded-lg border bg-white px-2 py-1.5 shadow-lg sm:-right-3 sm:-bottom-3 sm:flex sm:gap-2 sm:rounded-xl sm:px-3 sm:py-2 sm:shadow-xl">
                <div className="from-primary to-secondary flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br sm:h-6 sm:w-6">
                  <span className="text-[9px] sm:text-[10px]">📈</span>
                </div>
                <div>
                  <div className="text-foreground text-[9px] font-bold sm:text-[10px]">
                    Growth
                  </div>
                  <div className="text-accent text-[8px] font-bold sm:text-[9px]">
                    +127% This Month
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
