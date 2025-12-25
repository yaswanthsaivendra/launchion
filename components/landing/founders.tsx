"use client";

import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaQuoteLeft,
  FaDiscord,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

interface SocialLink {
  platform: "linkedin" | "twitter" | "github" | "email" | "discord";
  url: string;
}

interface Founder {
  name: string;
  role: string;
  bio: string;
  quote: string;
  image: string;
  socials: SocialLink[];
  expertise: string[];
}

const founders: Founder[] = [
  {
    name: "Shubham Verma",
    role: "Builder",
    bio: "Full-stack developer and entrepreneur building MVPs for startups. Passionate about helping founders turn their ideas into reality with modern tech stacks and agile methodologies.",
    quote:
      "Every great product starts with a simple idea. Our mission is to help founders ship fast and validate their vision.",
    image: "/founders/shubham.jpeg",
    socials: [
      { platform: "twitter", url: "https://x.com/npm_shubham" },
      {
        platform: "discord",
        url: "https://discord.com/users/771698347794497539",
      },
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/a-shubham-verma/",
      },
      { platform: "github", url: "https://github.com/Stroller15" },
      { platform: "email", url: "mailto:shubham.enggg@gmail.com" },
    ],
    expertise: [
      "Full-Stack Development",
      "Product Strategy",
      "MVP Architecture",
      "Startup Consulting",
    ],
  },
  {
    name: "Yaswanth Sai Vendra",
    role: "Builder",
    bio: "Technical architect specializing in scalable systems and modern web technologies. Led engineering teams at multiple startups, with expertise in React, Node.js, and cloud infrastructure.",
    quote:
      "Great code is invisible. It just works, scales, and makes users happy.",
    image: "/founders/yash.png",
    socials: [
      { platform: "twitter", url: "https://x.com/yash0x01" },
      {
        platform: "discord",
        url: "https://discordapp.com/users/yashiee#7688/",
      },
      {
        platform: "linkedin",
        url: "https://www.linkedin.com/in/yaswanthvendra/",
      },
      { platform: "github", url: "https://github.com/yaswanthsaivendra" },
      { platform: "email", url: "mailto:yaswanthsaivendra@gmail.com" },
    ],
    expertise: [
      "System Architecture",
      "Cloud Infrastructure",
      "DevOps & CI/CD",
      "Technical Leadership",
    ],
  },
];

const getSocialIcon = (platform: string) => {
  switch (platform) {
    case "linkedin":
      return FaLinkedin;
    case "twitter":
      return FaTwitter;
    case "discord":
      return FaDiscord;
    case "github":
      return FaGithub;
    case "email":
      return FaEnvelope;
    default:
      return FaLinkedin;
  }
};

export function FoundersSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-purple-50/50 via-white to-white py-20 pt-32 md:py-32 md:pt-40">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="from-primary/5 absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br to-transparent blur-3xl" />
        <div className="from-secondary/5 absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr to-transparent blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="animate-in fade-in slide-in-from-bottom-8 mx-auto mb-16 max-w-3xl text-center duration-700">
          <div className="border-primary/20 bg-primary/5 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm">
            <div className="bg-primary h-2 w-2 animate-pulse rounded-full" />
            <span className="text-foreground text-sm font-medium">
              Meet the Team
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            The Minds Behind <span className="text-primary">Launchion</span>
          </h1>

          <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed sm:text-xl">
            We&apos;re a team of experienced builders who&apos;ve been in your
            shoes. We know what it takes to ship fast, validate ideas, and scale
            products.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-16">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className="animate-in fade-in slide-in-from-bottom-8 group relative"
              style={{
                animationDelay: `${index * 150}ms`,
                animationDuration: "700ms",
              }}
            >
              {/* Card */}
              <div className="border-primary/10 relative overflow-hidden rounded-3xl border-2 bg-white p-8 shadow-xl transition-all duration-500 hover:shadow-2xl sm:p-10">
                {/* Gradient Overlay on Hover */}
                <div className="from-primary/5 to-secondary/5 absolute inset-0 -z-10 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Image Section */}
                <div className="mb-6 flex flex-col items-center sm:flex-row sm:items-start sm:gap-6">
                  <div className="relative mb-4 sm:mb-0">
                    {/* Image Container with Gradient Border */}
                    <div className="from-primary to-secondary relative h-40 w-40 rounded-2xl bg-gradient-to-br p-1 shadow-lg transition-transform duration-500 group-hover:scale-105">
                      <div className="h-full w-full overflow-hidden rounded-2xl bg-white">
                        <div className="relative h-full w-full">
                          <Image
                            src={founder.image}
                            alt={founder.name}
                            fill
                            className="object-cover"
                            sizes="160px"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="from-primary/20 absolute -top-2 -right-2 h-8 w-8 rounded-full bg-gradient-to-br to-transparent blur-md" />
                    <div className="from-secondary/20 absolute -bottom-2 -left-2 h-10 w-10 rounded-full bg-gradient-to-br to-transparent blur-md" />
                  </div>

                  {/* Name and Role */}
                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="text-foreground mb-2 text-2xl font-bold sm:text-3xl">
                      {founder.name}
                    </h2>
                    <p className="text-primary mb-4 text-lg font-semibold">
                      {founder.role}
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center gap-3 sm:justify-start">
                      {founder.socials.map((social) => {
                        const Icon = getSocialIcon(social.platform);
                        return (
                          <Link
                            key={social.platform}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:bg-primary/10 hover:text-primary text-muted-foreground hover:border-primary/20 flex h-10 w-10 items-center justify-center rounded-full border-2 border-transparent transition-all duration-300 hover:scale-110"
                          >
                            <Icon className="h-5 w-5" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {founder.bio}
                </p>

                {/* Quote */}
                <div className="bg-primary/5 border-primary/10 relative mb-6 rounded-xl border p-4">
                  <FaQuoteLeft className="text-primary/20 absolute top-2 left-2 h-6 w-6" />
                  <p className="text-foreground pl-8 text-sm leading-relaxed italic">
                    &quot;{founder.quote}&quot;
                  </p>
                </div>

                {/* Expertise Tags */}
                <div>
                  <p className="text-muted-foreground mb-3 text-xs font-semibold tracking-wider uppercase">
                    Expertise
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {founder.expertise.map((skill) => (
                      <span
                        key={skill}
                        className="bg-primary/10 text-primary hover:bg-primary/20 rounded-full px-3 py-1 text-xs font-medium transition-all duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
