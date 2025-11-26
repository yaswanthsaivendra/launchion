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
            "Launch Ion transformed our rough idea into a polished MVP in just two weeks. The speed and quality of delivery were exceptional. We secured our pre-seed funding a month later.",
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
        <section id="testimonials" className="py-24 bg-secondary/20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container px-4 mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-balance"
                    >
                        Trusted by <span className="text-primary">Innovative Founders</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-muted-foreground leading-relaxed"
                    >
                        Don't just take our word for it. Here's what founders are saying about their experience building with us.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="group bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer"
                        >
                            <div className="mb-6">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-primary text-primary transition-transform group-hover:scale-110" style={{ transitionDelay: `${i * 50}ms` }} />
                                    ))}
                                </div>
                                <Quote className="w-10 h-10 text-primary/20 mb-4 transition-transform group-hover:scale-110" />
                                <p className="text-muted-foreground leading-relaxed flex-grow mb-4">
                                    "{testimonial.content}"
                                </p>
                                {testimonial.metric && (
                                    <div className="mt-4 pt-4 border-t border-border/50">
                                        <div className="flex items-center gap-2 text-sm">
                                            <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                                                <span className="font-semibold text-primary">{testimonial.metric}</span>
                                            </div>
                                            {testimonial.outcome && (
                                                <span className="text-muted-foreground">{testimonial.outcome}</span>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-border shrink-0 group-hover:border-primary transition-colors">
                                    <Image
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover transition-transform group-hover:scale-110 duration-300"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground tracking-tight">{testimonial.name}</h4>
                                    <p className="text-sm text-muted-foreground">
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
