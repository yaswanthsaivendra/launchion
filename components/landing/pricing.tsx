import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

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
    <section id="pricing" className="bg-card/30 py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          {/* Urgency Badge */}
          <div className="bg-primary/10 border-primary/20 text-primary mb-6 inline-flex animate-pulse items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium">
            <span>Limited spots available this month</span>
          </div>

          <h2 className="mb-6 text-3xl font-bold tracking-tight text-balance md:text-5xl">
            Simple, Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            No hidden fees. No hourly billing surprises. Just a flat fee for a
            launched product.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative cursor-pointer rounded-2xl border p-6 transition-all duration-300 lg:p-8 ${
                plan.popular
                  ? "border-primary bg-primary/5 shadow-primary/10 hover:shadow-primary/20 z-10 shadow-2xl hover:scale-[1.08] lg:scale-105"
                  : "border-border bg-card hover:border-primary/50 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl"
              }`}
            >
              {plan.popular && (
                <div className="bg-primary text-primary-foreground absolute -top-4 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-sm font-bold shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="mb-6 lg:mb-8">
                <h3 className="mb-2 text-xl font-bold tracking-tight lg:text-2xl">
                  {plan.name}
                </h3>
                <div className="mb-4 flex items-baseline gap-1">
                  <span className="text-3xl font-bold tracking-tight lg:text-4xl">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm">
                    /one-time
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <ul className="mb-6 space-y-3 lg:mb-8 lg:space-y-4">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="group/item flex items-start gap-3 text-sm"
                  >
                    <Check className="text-primary mt-0.5 h-5 w-5 shrink-0 transition-transform group-hover/item:scale-110" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full transition-all duration-300 ${
                  plan.popular
                    ? "bg-primary hover:bg-primary/90 hover:scale-105 hover:shadow-lg"
                    : "bg-card hover:bg-accent border-border hover:border-primary border hover:shadow-md"
                }`}
                variant={plan.popular ? "default" : "outline"}
                size="lg"
                asChild
              >
                <Link href="https://tally.so/r/RGWJZ4" target="_blank">
                  {plan.cta}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
