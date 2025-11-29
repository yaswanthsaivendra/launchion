"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiOpenai,
  SiSupabase,
  SiPrisma,
} from "react-icons/si";

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
      number: "21",
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
    <section
      id="about"
      className="relative min-h-screen w-full overflow-hidden pt-20 pb-20 md:pt-24 md:pb-12"
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <div className="from-primary/8 to-primary/5 absolute top-0 left-0 h-[500px] w-[500px] animate-pulse rounded-full bg-gradient-to-r blur-3xl"></div>
          <div
            className="from-primary/6 to-primary/4 absolute right-0 bottom-0 h-[400px] w-[400px] animate-pulse rounded-full bg-gradient-to-r blur-3xl"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="absolute h-full w-full">
          <div className="from-primary/5 to-primary/3 absolute top-[30%] right-[20%] h-[300px] w-[300px] animate-pulse rounded-full bg-gradient-to-r blur-[90px]"></div>
          <div
            className="from-primary/6 to-primary/4 absolute bottom-[20%] left-[10%] h-[250px] w-[250px] animate-pulse rounded-full bg-gradient-to-r blur-[90px]"
            style={{ animationDelay: "0.5s" }}
          ></div>
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
        className="relative z-10 mx-auto max-w-6xl px-4 py-8 sm:px-6 md:py-12"
      >
        <motion.div
          variants={itemVariants}
          className="mb-12 text-center md:mb-16"
        >
          <h1 className="text-foreground mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            Built for <span className="text-primary">Speed & Quality</span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl px-4 text-base leading-relaxed font-light sm:text-lg md:text-xl">
            Senior engineers, proven tech stack, and a track record of launching
            MVPs that get results
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {/* Card 1: Global Reach - 2x1 (Horizontal layout, spans 2 columns) */}
          <motion.div
            variants={itemVariants}
            className="group border-border/50 bg-card/50 hover:border-primary/30 relative overflow-hidden rounded-3xl border p-3 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl md:col-span-2 md:p-4"
          >
            <div className="flex h-full flex-col gap-2 md:flex-row md:gap-3">
              {/* Globe Side */}
              <div className="bg-muted/20 flex min-h-[160px] flex-1 items-center justify-center overflow-hidden rounded-xl md:min-h-0">
                <motion.div
                  initial={{ rotate: 0 }}
                  whileInView={{ rotate: 360 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                  }}
                  className="flex h-full w-full items-center justify-center"
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
              <div className="flex flex-1 flex-col justify-center">
                <h3 className="text-foreground mb-1.5 text-xl font-bold md:text-2xl">
                  Global Reach
                </h3>
                <p className="text-muted-foreground mb-2 text-sm">
                  Working with founders worldwide
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We operate globally, serving founders and startups across
                  different time zones with seamless remote collaboration.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Stats - 1x1 */}
          <motion.div
            variants={itemVariants}
            className="group border-border/50 bg-card/50 hover:border-primary/30 relative overflow-hidden rounded-3xl border p-4 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl md:p-5"
          >
            <div className="flex h-full flex-col">
              <div className="mb-4">
                <h3 className="text-foreground mb-1 text-lg font-bold md:text-xl">
                  Our Track Record
                </h3>
              </div>
              <div className="flex flex-1 flex-col justify-center space-y-3.5">
                {highlights.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    <div className="from-primary to-secondary min-w-14 bg-gradient-to-r bg-clip-text text-3xl leading-none font-bold text-transparent md:min-w-16 md:text-4xl">
                      {item.number}
                    </div>
                    <div className="flex-1 pt-1">
                      <div className="text-foreground mb-1 text-sm font-semibold md:text-base">
                        {item.label}
                      </div>
                      <div className="text-muted-foreground text-xs leading-relaxed md:text-sm">
                        {item.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 3: Launchion - Premium Card - 1x1 */}
          <motion.div
            variants={itemVariants}
            className="group border-primary/30 from-primary/20 via-primary/10 to-secondary/20 hover:border-primary/50 hover:shadow-primary/20 relative overflow-hidden rounded-3xl border-2 bg-gradient-to-br p-6 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl md:p-8"
          >
            <div className="flex h-full flex-col items-center justify-center text-center">
              <motion.h2
                className="from-primary via-primary/90 to-primary mb-2 bg-gradient-to-r bg-clip-text text-2xl font-bold text-transparent md:text-3xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Launchion
              </motion.h2>
              <p className="text-foreground/80 mb-1 text-sm font-medium">
                Senior Engineers
              </p>
              <p className="text-muted-foreground text-xs leading-relaxed">
                Crafting exceptional MVPs in 21 days with modern tech stack and
                proven methodologies
              </p>
            </div>
          </motion.div>

          {/* Card 4: Tech Stack - 1x1 (Smaller) */}
          <motion.div
            variants={itemVariants}
            className="group border-border/50 bg-card/50 hover:border-primary/30 relative overflow-hidden rounded-3xl border p-4 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl md:p-5"
          >
            <div className="flex h-full flex-col">
              <div className="mb-4">
                <h3 className="from-foreground to-primary mb-1.5 bg-linear-to-r bg-clip-text text-base font-bold text-transparent md:text-lg">
                  Tech Stack
                </h3>
                <p className="text-muted-foreground text-xs md:text-sm">
                  Modern AI-era technologies
                </p>
              </div>
              <div className="flex flex-1 flex-wrap content-center items-center justify-center gap-x-2 gap-y-2">
                {coreSkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      className="group/tag bg-muted/60 border-border/30 hover:border-primary/50 hover:bg-primary/5 inline-flex cursor-default items-center gap-1.5 rounded-full border px-3 py-1.5 transition-all duration-300"
                      whileHover={{
                        y: -2,
                        scale: 1.05,
                        rotate: [0, -2, 2, 0],
                      }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      transition={{
                        delay: index * 0.08 + 0.2,
                      }}
                    >
                      <Icon
                        className="h-4 w-4 transition-transform duration-300 group-hover/tag:scale-110 group-hover/tag:rotate-12"
                        style={{ color: skill.color }}
                      />
                      <span className="text-foreground/90 text-xs font-medium md:text-sm">
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
            className="group border-border/50 bg-card/50 hover:border-primary/30 relative overflow-hidden rounded-3xl border p-5 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl md:p-6"
          >
            <div className="flex h-full flex-col">
              <div className="from-primary/10 via-primary/5 to-secondary/10 relative mb-4 flex min-h-[180px] flex-1 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br">
                <motion.div
                  className="text-7xl md:text-8xl"
                  initial={{ y: 0, rotate: 0, opacity: 0 }}
                  whileInView={{
                    y: [0, -10, 0],
                    rotate: [0, 5, -5, 0],
                    opacity: 1,
                  }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  🚀
                </motion.div>
              </div>
              <div className="flex flex-col">
                <h3 className="text-foreground mb-2 text-lg font-bold md:text-xl">
                  Passion for Innovation
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  Building MVPs isn&apos;t just our profession, it&apos;s our
                  passion. We thrive on solving complex problems and
                  transforming ideas into elegant digital solutions.
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
