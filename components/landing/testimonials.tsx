"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface Testimonial {
    name: string;
    role: string;
    company: string;
    content: string;
    image: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Rajesh Kumar",
        role: "Founder",
        company: "Techsnap",
        content:
            "Launch Ion transformed our rough idea into a polished MVP in just two weeks. The speed and quality of delivery were exceptional. We secured our pre-seed funding a month later.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop",
    },
    {
        name: "Emma Schmidt",
        role: "CTO",
        company: "Pixelflow",
        content:
            "As a technical founder, I was skeptical about outsourcing. But their code quality is top-notch: clean, scalable, and well-documented. It was the perfect foundation for our internal team.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    },
    {
        name: "Marcus Johnson",
        role: "Product Manager",
        company: "Flowstate",
        content:
            "The design process was collaborative and insightful. They didn't just build what we asked for; they helped us refine the product to better serve our users. Highly recommended!",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
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
                        className="text-3xl md:text-5xl font-bold mb-6"
                    >
                        Trusted by <span className="text-primary">Innovative Founders</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-lg text-muted-foreground"
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
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
                        >
                            <div className="mb-6">
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                    ))}
                                </div>
                                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                                <p className="text-muted-foreground leading-relaxed flex-grow">
                                    "{testimonial.content}"
                                </p>
                            </div>

                            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border">
                                <div className="w-12 h-12 rounded-full overflow-hidden border border-border shrink-0">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
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
