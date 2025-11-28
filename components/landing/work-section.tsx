"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { workProjects } from "@/lib/work-data";
import {
    SiNextdotjs,
    SiDjango,
    SiTailwindcss,
    SiFlask,
    SiTypescript,
    SiCelery,
    SiPolygon,
    SiEthereum,
    SiSolidity,
} from "react-icons/si";
import { FaAws, FaDocker, FaNode, FaReact, FaPython } from "react-icons/fa";

// Icon mapping
const iconComponents: Record<
    string,
    React.ComponentType<{ className?: string; style?: React.CSSProperties }>
> = {
    SiNextdotjs,
    SiDjango,
    SiTailwindcss,
    SiFlask,
    SiTypescript,
    FaAws,
    FaDocker,
    SiCelery,
    FaNode,
    FaReact,
    FaPython,
    SiPolygon,
    SiEthereum,
    SiSolidity,
};

// Icon colors
const iconColors: Record<string, string> = {
    SiNextdotjs: "#000000",
    SiDjango: "#0F7B3C",
    SiTailwindcss: "#38BDF8",
    SiFlask: "#000000",
    SiTypescript: "#3178C6",
    FaAws: "#FF9900",
    FaDocker: "#2496ED",
    SiCelery: "#37814A",
    FaNode: "#68A063",
    FaReact: "#61DAFB",
    FaPython: "#FFD43B",
    SiPolygon: "#8247E5",
    SiEthereum: "#627EEA",
    SiSolidity: "#363636",
};

export function WorkSection() {
    return (
        <section
            id="work"
            className="bg-background py-12 sm:py-16 md:py-20 overflow-hidden"
        >
            <div className="container max-w-6xl px-4 sm:px-6 mx-auto">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-2">
                        Built by <span className="text-primary">us</span>. Loved by{" "}
                        <span className="text-primary">users</span>.
                    </h2>
                    <p className="text-muted-foreground text-base sm:text-lg px-2">
                        Real MVPs we've built for founders. From SaaS platforms to Web3
                        apps, we've shipped products across industries.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {workProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group bg-background border-border flex h-full flex-col rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg animate-in fade-in slide-in-from-bottom-8 duration-700"
                            style={{
                                animationDelay: `${index * 100}ms`,
                                animationFillMode: "both",
                            }}
                        >
                            {/* Project Image */}
                            <div className="relative aspect-video mb-4 overflow-hidden rounded-lg bg-muted">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            {/* Project Title */}
                            <h3 className="text-lg sm:text-xl font-bold mb-2 line-clamp-2">
                                {project.title}
                            </h3>

                            {/* Project Description */}
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-grow">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                                {project.tags.slice(0, 4).map((tag) => {
                                    const IconComponent = iconComponents[tag.icon];
                                    const iconColor = iconColors[tag.icon];

                                    if (!IconComponent) return null;

                                    return (
                                        <div
                                            key={tag.id}
                                            className="flex items-center gap-1.5 bg-muted/60 rounded-full px-2.5 py-1 transition-all hover:bg-muted"
                                            title={tag.name}
                                        >
                                            <IconComponent
                                                className="h-3.5 w-3.5"
                                                style={{ color: iconColor }}
                                            />
                                            <span className="text-xs font-medium text-foreground/80">
                                                {tag.name}
                                            </span>
                                        </div>
                                    );
                                })}
                                {project.tags.length > 4 && (
                                    <div className="flex items-center bg-muted/60 rounded-full px-2.5 py-1">
                                        <span className="text-xs font-medium text-muted-foreground">
                                            +{project.tags.length - 4}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
