"use client";

import { FaDraftingCompass, FaPencilRuler } from "react-icons/fa";
import {
  FaCode,
  FaRocket,
  FaBolt,
  FaHandHoldingDollar,
  FaHeadset,
} from "react-icons/fa6";

export function ProcessSection() {
  const processSteps = [
    {
      icon: FaDraftingCompass,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      days: "Day 1-2",
      title: "Product Strategy",
      description:
        "Requirements, User flows, Tech plan. We define exactly what to build.",
    },
    {
      icon: FaPencilRuler,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
      days: "Day 3-5",
      title: "UI/UX Design",
      description:
        "Wireframes to High-fidelity screens. Beautiful, functional design.",
    },
    {
      icon: FaCode,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      days: "Day 6-14",
      title: "Development & QA",
      description:
        "Frontend, Backend, APIs, Integrations. Rigorous testing & fixes.",
    },
    {
      icon: FaRocket,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      days: "Day 21",
      title: "Launch & Handover",
      description: "Deployment, Hosting, Full Code Handover. You are live.",
      isHighlight: true,
    },
  ];

  const features = [
    {
      icon: FaBolt,
      title: "Execution First",
      description:
        "We don't just consult. We build. Our team is optimized for speed without breaking things.",
    },
    {
      icon: FaHandHoldingDollar,
      title: "Predictable Pricing",
      description:
        "No hourly billing surprises. Fixed cost for a fixed scope. You know exactly what you pay.",
    },
    {
      icon: FaHeadset,
      title: "Post-Launch Support",
      description:
        "We don't disappear. We offer maintenance and support packages to help you scale.",
    },
  ];

  return (
    <section
      className="bg-background overflow-hidden py-12 sm:py-16 md:py-20"
      id="process"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="animate-in fade-in slide-in-from-bottom-8 mx-auto mb-12 max-w-3xl text-center duration-700 sm:mb-16">
          <h2 className="mb-3 px-2 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">
            How We Build an MVP in <span className="text-primary">21 Days</span>
          </h2>
          <p className="text-muted-foreground px-2 text-base sm:text-lg">
            Turn your idea into a live product in record time. We handle
            Strategy, Design, Dev, and Launch in a focused 21-day sprint.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative mb-16 sm:mb-20 md:mb-24">
          {/* Connector Line (Desktop only) */}
          <div className="absolute top-12 left-0 -z-10 hidden h-[2px] w-full bg-slate-200 lg:block" />

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`bg-background relative rounded-xl border p-5 sm:p-6 ${step.isHighlight ? "border-primary ring-primary/20 shadow-lg ring-1" : "border-border shadow-sm"} animate-in fade-in slide-in-from-bottom-8 flex h-full flex-col transition-all duration-300 duration-700 hover:shadow-md`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "both",
                }}
              >
                {step.isHighlight && (
                  <div className="bg-primary text-primary-foreground absolute -top-2.5 right-3 rounded px-2.5 py-0.5 text-[10px] font-bold shadow-sm sm:-top-3 sm:right-4 sm:px-3 sm:py-1 sm:text-xs">
                    GO LIVE
                  </div>
                )}

                <div
                  className={`h-10 w-10 rounded-lg sm:h-12 sm:w-12 ${step.iconBg} mb-3 flex items-center justify-center transition-transform duration-300 hover:scale-110 sm:mb-4`}
                >
                  <step.icon
                    className={`h-5 w-5 sm:h-6 sm:w-6 ${step.iconColor}`}
                  />
                </div>

                <div className="mb-2 sm:mb-3">
                  <span className="bg-muted text-muted-foreground inline-block rounded px-2 py-0.5 text-[10px] font-bold sm:py-1 sm:text-xs">
                    {step.days}
                  </span>
                </div>

                <h3 className="mb-2 text-base font-bold sm:text-lg">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed sm:text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-in fade-in slide-in-from-bottom-8 rounded-2xl bg-slate-50 p-6 text-center transition-all duration-300 duration-700 hover:bg-slate-100 hover:shadow-lg sm:p-8"
              style={{
                animationDelay: `${processSteps.length * 100 + index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm transition-transform duration-300 hover:scale-110 sm:mb-6 sm:h-14 sm:w-14">
                <feature.icon className="text-primary h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <h3 className="mb-2 text-lg font-bold sm:mb-3 sm:text-xl">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mx-auto max-w-xs text-xs leading-relaxed sm:text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
