"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  metric?: string;
  outcome?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    role: "Founder",
    company: "Techsnap",
    content:
      "Launchion transformed our rough idea into a polished MVP in just two weeks. The speed and quality of delivery were exceptional. We secured our pre-seed funding a month later.",
    image: "/images/testimonials/testimonial-1.jpg",
    metric: "Raised $50K pre-seed",
    outcome: "1 month after launch",
  },
  {
    name: "Emma Schmidt",
    role: "CTO",
    company: "Pixelflow",
    content:
      "As a technical founder, I was skeptical about outsourcing. But their code quality is top-notch: clean, scalable, and well-documented. It was the perfect foundation for our internal team.",
    image: "/images/testimonials/testimonial-2.jpg",
    metric: "Launched in 12 days",
    outcome: "vs 3 months estimated",
  },
  {
    name: "Marcus Johnson",
    role: "Product Manager",
    company: "Flowstate",
    content:
      "The design process was collaborative and insightful. They didn't just build what we asked for; they helped us refine the product to better serve our users. Highly recommended!",
    image: "/images/testimonials/testimonial-3.jpg",
    metric: "First 100 users",
    outcome: "in 2 weeks post-launch",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-secondary/20 relative overflow-hidden py-24"
    >
      {/* Background Elements */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full overflow-hidden">
        <div className="bg-primary/5 absolute -top-24 -right-24 h-96 w-96 rounded-full blur-3xl" />
        <div className="bg-primary/5 absolute -bottom-24 -left-24 h-96 w-96 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-3xl font-bold tracking-tight text-balance md:text-5xl"
          >
            Trusted by <span className="text-primary">Innovative Founders</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            Don&apos;t just take our word for it. Here&apos;s what founders are
            saying about their experience building with us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group bg-card border-border flex h-full cursor-pointer flex-col rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl"
            >
              <div className="mb-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="fill-primary text-primary h-5 w-5 transition-transform group-hover:scale-110"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                <Quote className="text-primary/20 mb-4 h-10 w-10 transition-transform group-hover:scale-110" />
                <p className="text-muted-foreground mb-4 flex-grow leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>
                {testimonial.metric && (
                  <div className="border-border/50 mt-4 border-t pt-4">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="bg-primary/10 border-primary/20 rounded-full border px-3 py-1">
                        <span className="text-primary font-semibold">
                          {testimonial.metric}
                        </span>
                      </div>
                      {testimonial.outcome && (
                        <span className="text-muted-foreground">
                          {testimonial.outcome}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="border-border mt-auto flex items-center gap-4 border-t pt-6">
                <div className="border-border group-hover:border-primary relative h-12 w-12 shrink-0 overflow-hidden rounded-full border transition-colors">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div>
                  <h4 className="text-foreground font-bold tracking-tight">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
