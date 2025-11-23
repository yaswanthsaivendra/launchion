"use client";

import { CheckCircle2, Code2, Rocket, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const steps = [
    {
        icon: Search,
        title: "Discovery & Design",
        days: "Days 1-3",
        description:
            "We deep dive into your idea, define core features, and design a high-converting UI/UX.",
        number: 1,
    },
    {
        icon: Code2,
        title: "Development Sprint",
        days: "Days 4-10",
        description:
            "Our senior engineers build your MVP using our battle-tested boilerplate. Speed without technical debt.",
        number: 2,
    },
    {
        icon: CheckCircle2,
        title: "Testing & Refinement",
        days: "Days 11-14",
        description:
            "Rigorous QA testing, bug fixing, and performance optimization to ensure a smooth launch.",
        number: 3,
    },
    {
        icon: Rocket,
        title: "Launch",
        days: "Day 15",
        description:
            "We deploy your MVP to production, set up analytics, and hand over the keys. You are live.",
        number: 4,
    },
];

export function Process() {
    const [activeStep, setActiveStep] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute("data-index") || "0");
                        setActiveStep(index);
                    }
                });
            },
            { threshold: 0.5 }
        );

        const stepElements = sectionRef.current?.querySelectorAll("[data-index]");
        stepElements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="process" className="py-24 relative overflow-hidden" ref={sectionRef}>
            <div className="container px-4 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        From Idea to <span className="text-primary">Live Product</span> in 15 Days
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        We've optimized every step of the development process to deliver speed without
                        compromising quality.
                    </p>
                </div>

                {/* Desktop Zig-Zag Timeline */}
                <div className="hidden lg:block relative max-w-6xl mx-auto">
                    {steps.map((step, index) => {
                        const isLeft = index % 2 === 0;
                        const isLast = index === steps.length - 1;

                        return (
                            <div
                                key={index}
                                data-index={index}
                                className="relative mb-24 last:mb-0"
                            >
                                {/* Connector Line */}
                                {!isLast && (
                                    <svg
                                        className="absolute left-1/2 w-1/2 h-24 pointer-events-none"
                                        style={{
                                            top: "100%",
                                            transform: isLeft ? "translateX(-50%)" : "translateX(-50%) scaleX(-1)",
                                        }}
                                        viewBox="0 0 400 100"
                                        preserveAspectRatio="none"
                                    >
                                        <path
                                            d="M 200 0 Q 300 50, 400 100"
                                            stroke="currentColor"
                                            strokeWidth="3"
                                            fill="none"
                                            strokeDasharray="10 10"
                                            className="text-primary/30"
                                        />
                                    </svg>
                                )}

                                <div className={`flex items-center gap-8 ${isLeft ? "" : "flex-row-reverse"}`}>
                                    {/* Content Card */}
                                    <div className="flex-1">
                                        <div
                                            className={`bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 ${activeStep === index ? "ring-2 ring-primary/20" : ""
                                                }`}
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                                                    <step.icon className="h-8 w-8 text-primary" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="inline-block px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-bold mb-3 border border-border">
                                                        {step.days}
                                                    </div>
                                                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                                                    <p className="text-muted-foreground leading-relaxed">
                                                        {step.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Number Circle */}
                                    <div className="relative z-10">
                                        <div
                                            className={`w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold shadow-lg transition-all duration-300 ${activeStep === index ? "scale-125" : ""
                                                }`}
                                        >
                                            {step.number}
                                        </div>
                                    </div>

                                    {/* Spacer */}
                                    <div className="flex-1" />
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Mobile Vertical Timeline */}
                <div className="lg:hidden relative max-w-2xl mx-auto">
                    {/* Dotted Line with Gradient */}
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/10 via-primary/30 to-primary/10" />
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 border-l-2 border-dashed border-primary/40" />

                    {steps.map((step, index) => {
                        const isLast = index === steps.length - 1;

                        return (
                            <div
                                key={index}
                                data-index={index}
                                className="relative pl-20 pb-16 last:pb-0"
                                style={{
                                    animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
                                }}
                            >
                                {/* Number Circle with Pulse */}
                                <div className="absolute left-0 top-0">
                                    <div
                                        className={`w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold shadow-lg ring-4 ring-primary/20 transition-all duration-300 ${activeStep === index ? "scale-110 ring-8 ring-primary/30" : ""
                                            }`}
                                    >
                                        {step.number}
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div
                                    className={`bg-card border border-border rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 ${activeStep === index ? "ring-2 ring-primary/20 shadow-lg" : ""
                                        }`}
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
                                            <step.icon className="h-7 w-7 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-2 border border-primary/20">
                                                {step.days}
                                            </div>
                                            <h3 className="text-xl font-bold mb-1">{step.title}</h3>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
