"use client";

import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { FaGlobe, FaCheckCircle } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa6";
import { FaSackDollar } from "react-icons/fa6";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-5rem)] flex flex-col justify-center py-8 sm:py-12 md:py-20 pt-24 sm:pt-32 md:pt-40">
      {/* Pure White Background */}
      <div className="absolute inset-0 bg-white -z-10" />

      <div className="container px-4 sm:px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-border shadow-sm">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs sm:text-sm font-medium text-foreground">
                Accepting 2 new founders for Dec
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance">
              Launch your MVP in{" "}
              <span className="block text-primary mt-1 sm:mt-2 pb-1 sm:pb-2">15 days.</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              We help founders go from <span className="font-semibold text-foreground">idea → product</span> with end-to-end design, development, and launch support. No fluff, just shipping.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                asChild
              >
                <Link href="/#pricing">
                  <FaRegCalendarCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="hidden sm:inline">Book Free Strategy Call</span>
                  <span className="sm:hidden">Book Strategy Call</span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base font-semibold border-2 hover:bg-accent/10 hover:border-accent hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                asChild
              >
                <Link href="https://wa.me/your-number" target="_blank">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  <span className="sm:ml-0 ml-2">WhatsApp Us</span>
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="pt-2 sm:pt-4 space-y-3 sm:space-y-4">
              <p className="text-[10px] sm:text-xs font-bold tracking-wider text-muted-foreground uppercase">
                Trusted by Funded Founders
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6">
                <div className="flex items-center gap-2">
                  <FaCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-foreground">
                    20+ MVPs Built
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaGlobe className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-foreground">
                    Global Clients
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FaSackDollar className="w-4 h-4 sm:w-5 sm:h-5 text-primary shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-foreground">
                    Funded Startups
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Professional Dashboard Mockup */}
          <div className="relative block mt-8 lg:mt-0 animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
            <div className="relative max-w-lg mx-auto lg:max-w-none">
              {/* Browser Window Mockup */}
              <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl border border-border overflow-hidden">
                {/* Browser Chrome */}
                <div className="bg-gray-50 px-3 sm:px-4 py-2 sm:py-2.5 flex items-center gap-1.5 sm:gap-2 border-b border-border">
                  <div className="flex gap-1 sm:gap-1.5">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-400" />
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 mx-2 sm:mx-3">
                    <div className="bg-white rounded-md px-2 sm:px-3 py-1 sm:py-1.5 text-[9px] sm:text-[10px] text-muted-foreground border border-border/50 flex items-center gap-1.5 sm:gap-2">
                      <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green-500" />
                      <span className="truncate">app.yourstartup.com</span>
                    </div>
                  </div>
                </div>

                {/* Modern SaaS Dashboard */}
                <div className="aspect-[4/3] bg-gray-50 p-3 sm:p-4 md:p-6">
                  {/* Dashboard Header */}
                  <div className="mb-2 sm:mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-foreground">Dashboard</h3>
                      <p className="text-[9px] sm:text-[10px] text-muted-foreground">Last 30 days</p>
                    </div>
                    <div className="flex gap-1.5 sm:gap-2">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-white border border-border flex items-center justify-center">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary/20" />
                      </div>
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-white border border-border flex items-center justify-center">
                        <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-accent/20" />
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-2 sm:mb-4">
                    {/* Revenue Card */}
                    <div className="bg-white rounded-lg p-2 sm:p-3 border border-border shadow-sm">
                      <div className="text-[8px] sm:text-[9px] font-medium text-muted-foreground mb-1 sm:mb-1.5">Revenue</div>
                      <div className="text-sm sm:text-lg font-bold text-primary mb-0.5 sm:mb-1">$42.8K</div>
                      <div className="flex items-center gap-0.5 sm:gap-1">
                        <div className="w-0 h-0 border-l-[2px] sm:border-l-[3px] border-l-transparent border-r-[2px] sm:border-r-[3px] border-r-transparent border-b-[3px] sm:border-b-[4px] border-b-accent" />
                        <span className="text-[8px] sm:text-[9px] font-semibold text-accent">+24%</span>
                      </div>
                    </div>

                    {/* Users Card */}
                    <div className="bg-white rounded-lg p-2 sm:p-3 border border-border shadow-sm">
                      <div className="text-[8px] sm:text-[9px] font-medium text-muted-foreground mb-1 sm:mb-1.5">Users</div>
                      <div className="text-sm sm:text-lg font-bold text-primary mb-0.5 sm:mb-1">2.4K</div>
                      <div className="flex items-center gap-0.5 sm:gap-1">
                        <div className="w-0 h-0 border-l-[2px] sm:border-l-[3px] border-l-transparent border-r-[2px] sm:border-r-[3px] border-r-transparent border-b-[3px] sm:border-b-[4px] border-b-accent" />
                        <span className="text-[8px] sm:text-[9px] font-semibold text-accent">+18%</span>
                      </div>
                    </div>

                    {/* Conversion Card */}
                    <div className="bg-white rounded-lg p-2 sm:p-3 border border-border shadow-sm">
                      <div className="text-[8px] sm:text-[9px] font-medium text-muted-foreground mb-1 sm:mb-1.5">Conversion</div>
                      <div className="text-sm sm:text-lg font-bold text-primary mb-0.5 sm:mb-1">3.2%</div>
                      <div className="flex items-center gap-0.5 sm:gap-1">
                        <div className="w-0 h-0 border-l-[2px] sm:border-l-[3px] border-l-transparent border-r-[2px] sm:border-r-[3px] border-r-transparent border-b-[3px] sm:border-b-[4px] border-b-accent" />
                        <span className="text-[8px] sm:text-[9px] font-semibold text-accent">+5%</span>
                      </div>
                    </div>
                  </div>

                  {/* Main Chart Area */}
                  <div className="bg-white rounded-lg p-2 sm:p-3 md:p-4 border border-border shadow-sm mb-2 sm:mb-3">
                    <div className="flex items-center justify-between mb-2 sm:mb-3">
                      <div className="text-[10px] sm:text-xs font-semibold text-foreground">Revenue Trend</div>
                      <div className="flex gap-1.5 sm:gap-2">
                        <div className="flex items-center gap-1 sm:gap-1.5">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary" />
                          <span className="text-[8px] sm:text-[9px] text-muted-foreground">Revenue</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-1.5">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-secondary" />
                          <span className="text-[8px] sm:text-[9px] text-muted-foreground">Target</span>
                        </div>
                      </div>
                    </div>
                    {/* Line Chart Visualization */}
                    <div className="h-16 sm:h-20 relative">
                      <svg className="w-full h-full" viewBox="0 0 200 60" preserveAspectRatio="none">
                        {/* Grid lines */}
                        <line x1="0" y1="15" x2="200" y2="15" stroke="#e5e7eb" strokeWidth="0.5" />
                        <line x1="0" y1="30" x2="200" y2="30" stroke="#e5e7eb" strokeWidth="0.5" />
                        <line x1="0" y1="45" x2="200" y2="45" stroke="#e5e7eb" strokeWidth="0.5" />
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
                    <div className="bg-white rounded-lg p-2 sm:p-3 border border-border shadow-sm">
                      <div className="text-[10px] sm:text-xs font-semibold text-foreground mb-1.5 sm:mb-2">Recent Activity</div>
                      <div className="space-y-1.5 sm:space-y-2">
                        {[
                          { icon: "✓", text: "New user signup", time: "2m ago" },
                          { icon: "💰", text: "Payment received", time: "5m ago" },
                        ].map((item, i) => (
                          <div key={i} className="flex items-center gap-1.5 sm:gap-2">
                            <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-primary/10 flex items-center justify-center text-[7px] sm:text-[8px]">
                              {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-[8px] sm:text-[9px] font-medium text-foreground truncate">{item.text}</div>
                              <div className="text-[7px] sm:text-[8px] text-muted-foreground">{item.time}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="bg-white rounded-lg p-2 sm:p-3 border border-border shadow-sm">
                      <div className="text-[10px] sm:text-xs font-semibold text-foreground mb-1.5 sm:mb-2">Quick Stats</div>
                      <div className="space-y-1.5 sm:space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[8px] sm:text-[9px] text-muted-foreground">MRR</span>
                          <span className="text-[9px] sm:text-[10px] font-bold text-primary">$3.2K</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-[8px] sm:text-[9px] text-muted-foreground">Churn</span>
                          <span className="text-[9px] sm:text-[10px] font-bold text-accent">2.1%</span>
                        </div>
                        <div className="h-1 sm:h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: "68%" }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Success Badge - Top Left */}
              <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 bg-white rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl border border-border px-2 py-1.5 sm:px-3 sm:py-2 gap-1.5 sm:gap-2 z-10 hidden sm:flex items-center">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent animate-pulse" />
                <div>
                  <div className="text-[9px] sm:text-[10px] font-bold text-foreground">Live</div>
                  <div className="text-[8px] sm:text-[9px] text-muted-foreground">Shipped in 15 Days</div>
                </div>
              </div>

              {/* Floating Growth Badge - Bottom Right */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-white rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl border border-border px-2 py-1.5 sm:px-3 sm:py-2 gap-1.5 sm:gap-2 z-10 hidden sm:flex items-center">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-[9px] sm:text-[10px]">📈</span>
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] font-bold text-foreground">Growth</div>
                  <div className="text-[8px] sm:text-[9px] text-accent font-bold">+127% This Month</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
