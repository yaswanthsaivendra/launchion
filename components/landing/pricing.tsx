import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
    {
        name: "Spark",
        price: "$999",
        description: "Perfect for validating your idea quickly.",
        features: [
            "High-converting Landing Page",
            "Waitlist Integration",
            "Basic Brand Identity",
            "5-Day Delivery",
            "Responsive Design",
            "SEO Basics",
        ],
        cta: "Start Spark",
        popular: false,
    },
    {
        name: "Ignite",
        price: "$2,999",
        description: "The complete MVP package for early adopters.",
        features: [
            "Full Web Application (Next.js)",
            "Authentication (Google/Email)",
            "Database Setup (Postgres)",
            "3-5 Core Features",
            "Payment Integration (Stripe)",
            "15-Day Delivery",
            "Admin Dashboard Basic",
        ],
        cta: "Start Ignite",
        popular: true,
    },
    {
        name: "Liftoff",
        price: "$5,999",
        description: "Scale-ready architecture for serious startups.",
        features: [
            "Everything in Ignite",
            "Advanced Admin Dashboard",
            "Advanced Analytics",
            "Priority Support (1 Month)",
            "Advanced SEO Optimization",
            "20-Day Delivery",
            "Custom API Integration",
        ],
        cta: "Start Liftoff",
        popular: false,
    },
];

export function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-card/30">
            <div className="container px-4 mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-balance">
                        Simple, Transparent <span className="text-primary">Pricing</span>
                    </h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        No hidden fees. No hourly billing surprises. Just a flat fee for a launched product.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-2xl p-6 lg:p-8 border transition-all duration-300 cursor-pointer ${plan.popular
                                ? "border-primary bg-primary/5 shadow-2xl shadow-primary/10 lg:scale-105 z-10 hover:shadow-primary/20 hover:scale-[1.08]"
                                : "border-border bg-card hover:border-primary/50 hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-6 lg:mb-8">
                                <h3 className="text-xl lg:text-2xl font-bold mb-2 tracking-tight">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-3xl lg:text-4xl font-bold tracking-tight">{plan.price}</span>
                                    <span className="text-muted-foreground text-sm">/one-time</span>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed">{plan.description}</p>
                            </div>

                            <ul className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-sm group/item">
                                        <Check className="h-5 w-5 text-primary shrink-0 mt-0.5 transition-transform group-hover/item:scale-110" />
                                        <span className="leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button
                                className={`w-full transition-all duration-300 ${plan.popular
                                    ? "bg-primary hover:bg-primary/90 hover:shadow-lg hover:scale-105"
                                    : "bg-card hover:bg-accent border border-border hover:border-primary hover:shadow-md"
                                    }`}
                                variant={plan.popular ? "default" : "outline"}
                                size="lg"
                            >
                                {plan.cta}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
