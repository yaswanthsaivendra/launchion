"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiVercel, SiOpenai, SiSupabase, SiPrisma } from "react-icons/si";

// Dynamically import Globe to avoid SSR issues
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
            },
        },
    };

    // Modern AI-era tech stack
    const coreSkills = [
        { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
        { icon: FaReact, name: "React", color: "#61DAFB" },
        { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
        { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
        { icon: SiVercel, name: "Vercel", color: "#000000" },
        { icon: SiSupabase, name: "Supabase", color: "#3ECF8E" },
        { icon: SiOpenai, name: "OpenAI", color: "#412991" },
        { icon: SiPrisma, name: "Prisma", color: "#2D3748" },
    ];

    const highlights = [
        {
            number: "20+",
            label: "MVPs Launched",
            description: "From concept to deployment",
        },
        {
            number: "15",
            label: "Days Delivery",
            description: "Average time to launch",
        },
        {
            number: "3",
            label: "Pre-Seed Raised",
            description: "Clients secured funding",
        },
    ];

    return (
        <section id="about" className="min-h-screen w-full relative overflow-hidden pt-20 md:pt-24 pb-20 md:pb-12">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-primary/8 to-primary/5 blur-3xl top-0 left-0 animate-pulse"></div>
                    <div className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-primary/6 to-primary/4 blur-3xl bottom-0 right-0 animate-pulse" style={{ animationDelay: "1s" }}></div>
                </div>

                <div className="absolute w-full h-full">
                    <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] bg-gradient-to-r from-primary/5 to-primary/3 rounded-full blur-[90px] animate-pulse"></div>
                    <div className="absolute bottom-[20%] left-[10%] w-[250px] h-[250px] bg-gradient-to-r from-primary/6 to-primary/4 rounded-full blur-[90px] animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                </div>

                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage: `radial-gradient(circle at center, rgba(74,144,226,0.2) 1.5px, transparent 1.5px)`,
                        backgroundSize: "40px 40px",
                    }}
                ></div>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12 relative z-10"
            >
                <motion.div variants={itemVariants} className="text-center mb-12 md:mb-16">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
                        Built for <span className="text-primary">Speed & Quality</span>
                    </h1>
                    <p className="text-muted-foreground text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed px-4">
                        Senior engineers, proven tech stack, and a track record of launching MVPs that get results
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-4 md:gap-6">
                    {/* Card 1: Global Reach - 2x1 (Horizontal layout, spans 2 columns) */}
                    <motion.div
                        variants={itemVariants}
                        className="md:col-span-2 group relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-3 md:p-4 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl"
                    >
                        <div className="flex flex-col md:flex-row gap-2 md:gap-3 h-full">
                            {/* Globe Side */}
                            <div className="flex-1 rounded-xl overflow-hidden bg-muted/20 flex items-center justify-center min-h-[160px] md:min-h-0">
                                <motion.div
                                    initial={{ rotate: 0 }}
                                    whileInView={{ rotate: 360 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 3,
                                        ease: "easeInOut"
                                    }}
                                    className="w-full h-full flex items-center justify-center"
                                >
                                    <Globe
                                        height={280}
                                        width={280}
                                        backgroundColor="rgba(0, 0, 0, 0)"
                                        showAtmosphere
                                        showGraticules
                                        globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                    />
                                </motion.div>
                            </div>
                            {/* Text Side */}
                            <div className="flex-1 flex flex-col justify-center">
                                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1.5">
                                    Global Reach
                                </h3>
                                <p className="text-muted-foreground text-sm mb-2">
                                    Working with founders worldwide
                                </p>
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                    We operate globally, serving founders and startups across different time zones with seamless remote collaboration.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 2: Stats - 1x1 */}
                    <motion.div
                        variants={itemVariants}
                        className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 md:p-5 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl"
                    >
                        <div className="flex flex-col h-full">
                            <div className="mb-4">
                                <h3 className="text-lg md:text-xl font-bold text-foreground mb-1">
                                    Our Track Record
                                </h3>
                            </div>
                            <div className="space-y-3.5 flex-1 flex flex-col justify-center">
                                {highlights.map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        className="flex items-start gap-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 + 0.4 }}
                                    >
                                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent min-w-14 md:min-w-16 leading-none">
                                            {item.number}
                                        </div>
                                        <div className="flex-1 pt-1">
                                            <div className="text-foreground font-semibold text-sm md:text-base mb-1">
                                                {item.label}
                                            </div>
                                            <div className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                                                {item.description}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 3: Launch Ion - Premium Card - 1x1 */}
                    <motion.div
                        variants={itemVariants}
                        className="group relative overflow-hidden rounded-3xl border-2 border-primary/30 bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 backdrop-blur-sm p-6 md:p-8 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
                    >
                        <div className="flex flex-col h-full justify-center items-center text-center">
                            <motion.h2
                                className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary bg-clip-text text-transparent mb-2"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                Launch Ion
                            </motion.h2>
                            <p className="text-foreground/80 text-sm font-medium mb-1">
                                Senior Engineers
                            </p>
                            <p className="text-muted-foreground text-xs leading-relaxed">
                                Crafting exceptional MVPs in 15 days with modern tech stack and proven methodologies
                            </p>
                        </div>
                    </motion.div>

                    {/* Card 4: Tech Stack - 1x1 (Smaller) */}
                    <motion.div
                        variants={itemVariants}
                        className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-4 md:p-5 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl"
                    >
                        <div className="flex flex-col h-full">
                            <div className="mb-4">
                                <h3 className="text-base md:text-lg font-bold bg-linear-to-r from-foreground to-primary bg-clip-text text-transparent mb-1.5">
                                    Tech Stack
                                </h3>
                                <p className="text-muted-foreground text-xs md:text-sm">
                                    Modern AI-era technologies
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-x-2 gap-y-2 items-center content-center flex-1 justify-center">
                                {coreSkills.map((skill, index) => {
                                    const Icon = skill.icon;
                                    return (
                                        <motion.div
                                            key={skill.name}
                                            className="group/tag inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/60 border border-border/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
                                            whileHover={{ 
                                                y: -2, 
                                                scale: 1.05,
                                                rotate: [0, -2, 2, 0]
                                            }}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={{ 
                                                opacity: 1, 
                                                scale: 1
                                            }}
                                            transition={{ 
                                                delay: index * 0.08 + 0.2
                                            }}
                                        >
                                            <Icon
                                                className="w-4 h-4 transition-transform duration-300 group-hover/tag:scale-110 group-hover/tag:rotate-12"
                                                style={{ color: skill.color }}
                                            />
                                            <span className="text-foreground/90 text-xs md:text-sm font-medium">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 5: Passion - 1x1 (No overlay) */}
                    <motion.div
                        variants={itemVariants}
                        className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card/50 backdrop-blur-sm p-5 md:p-6 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl"
                    >
                        <div className="flex flex-col h-full">
                            <div className="relative flex-1 min-h-[180px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-secondary/10 flex items-center justify-center mb-4">
                                <motion.div
                                    className="text-7xl md:text-8xl"
                                    initial={{ y: 0, rotate: 0, opacity: 0 }}
                                    whileInView={{
                                        y: [0, -10, 0],
                                        rotate: [0, 5, -5, 0],
                                        opacity: 1
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 1.5,
                                        ease: "easeInOut"
                                    }}
                                >
                                    🚀
                                </motion.div>
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                                    Passion for Innovation
                                </h3>
                                <p className="text-muted-foreground text-xs leading-relaxed">
                                    Building MVPs isn&apos;t just our profession, it&apos;s our passion. We thrive on solving complex problems and transforming ideas into elegant digital solutions.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;

