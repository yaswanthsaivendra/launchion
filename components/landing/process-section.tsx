"use client";

import {
    FaDraftingCompass,
    FaPencilRuler,
} from "react-icons/fa";
import {
    FaCode,
    FaRocket,
    FaBolt,
    FaHandHoldingDollar,
    FaHeadset
} from "react-icons/fa6";

export function ProcessSection() {
    const processSteps = [
        {
            icon: FaDraftingCompass,
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
            days: "Day 1-2",
            title: "Product Strategy",
            description: "Requirements, User flows, Tech plan. We define exactly what to build."
        },
        {
            icon: FaPencilRuler,
            iconBg: "bg-purple-100",
            iconColor: "text-purple-600",
            days: "Day 3-5",
            title: "UI/UX Design",
            description: "Wireframes to High-fidelity screens. Beautiful, functional design."
        },
        {
            icon: FaCode,
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600",
            days: "Day 6-14",
            title: "Development & QA",
            description: "Frontend, Backend, APIs, Integrations. Rigorous testing & fixes."
        },
        {
            icon: FaRocket,
            iconBg: "bg-green-100",
            iconColor: "text-green-600",
            days: "Day 15",
            title: "Launch & Handover",
            description: "Deployment, Hosting, Full Code Handover. You are live.",
            isHighlight: true
        }
    ];

    const features = [
        {
            icon: FaBolt,
            title: "Execution First",
            description: "We don't just consult. We build. Our team is optimized for speed without breaking things."
        },
        {
            icon: FaHandHoldingDollar,
            title: "Predictable Pricing",
            description: "No hourly billing surprises. Fixed cost for a fixed scope. You know exactly what you pay."
        },
        {
            icon: FaHeadset,
            title: "Post-Launch Support",
            description: "We don't disappear. We offer maintenance and support packages to help you scale."
        }
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 bg-background overflow-hidden" id="process">
            <div className="container max-w-6xl px-4 sm:px-6 mx-auto">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">
                        How We Build an MVP in <span className="text-primary">15 Days</span>
                    </h2>
                    <p className="text-muted-foreground text-base sm:text-lg px-2">
                        Turn your idea into a live product in record time. We handle Strategy, Design, Dev, and Launch in a focused 15-day sprint.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="relative mb-16 sm:mb-20 md:mb-24">
                    {/* Connector Line (Desktop only) */}
                    <div className="hidden lg:block absolute top-12 left-0 w-full h-[2px] bg-slate-200 -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        {processSteps.map((step, index) => (
                            <div
                                key={index}
                                className={`relative bg-background p-5 sm:p-6 rounded-xl border ${step.isHighlight ? 'border-primary shadow-lg ring-1 ring-primary/20' : 'border-border shadow-sm'} h-full flex flex-col animate-in fade-in slide-in-from-bottom-8 duration-700 hover:shadow-md transition-all duration-300`}
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                    animationFillMode: 'both',
                                }}
                            >
                                {step.isHighlight && (
                                    <div className="absolute -top-2.5 sm:-top-3 right-3 sm:right-4 bg-primary text-primary-foreground text-[10px] sm:text-xs font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded shadow-sm">
                                        GO LIVE
                                    </div>
                                )}

                                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${step.iconBg} flex items-center justify-center mb-3 sm:mb-4 transition-transform duration-300 hover:scale-110`}>
                                    <step.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${step.iconColor}`} />
                                </div>

                                <div className="mb-2 sm:mb-3">
                                    <span className="inline-block bg-muted text-muted-foreground text-[10px] sm:text-xs font-bold px-2 py-0.5 sm:py-1 rounded">
                                        {step.days}
                                    </span>
                                </div>

                                <h3 className="text-base sm:text-lg font-bold mb-2">{step.title}</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className="bg-slate-50 p-6 sm:p-8 rounded-2xl text-center hover:bg-slate-100 transition-all duration-300 hover:shadow-lg animate-in fade-in slide-in-from-bottom-8 duration-700"
                            style={{
                                animationDelay: `${(processSteps.length * 100) + (index * 100)}ms`,
                                animationFillMode: 'both',
                            }}
                        >
                            <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-sm transition-transform duration-300 hover:scale-110">
                                <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
                            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
