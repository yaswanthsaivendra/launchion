"use client";

import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaEnvelope,
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
    <section
      id="builders"
      className="bg-background overflow-hidden py-12 sm:py-16 md:py-20"
    >
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="animate-in fade-in slide-in-from-bottom-8 mx-auto mb-12 max-w-3xl text-center duration-700 sm:mb-16">
          <div className="border-primary/20 bg-primary/5 mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 shadow-sm">
            <div className="bg-primary h-2 w-2 animate-pulse rounded-full" />
            <span className="text-foreground text-sm font-medium">
              Meet the Builders
            </span>
          </div>

          <h2 className="mb-3 px-2 text-2xl font-bold sm:mb-4 sm:text-3xl md:text-4xl">
            Built by <span className="text-primary">Experienced Founders</span>
          </h2>

          <p className="text-muted-foreground px-2 text-base sm:text-lg">
            We&apos;ve been in your shoes. We know what it takes to ship fast,
            validate ideas, and scale products.
          </p>
        </div>

        {/* Single Parent Card containing both founders */}
        <div className="bg-background border-border animate-in fade-in slide-in-from-bottom-8 rounded-2xl border p-6 shadow-sm transition-all duration-300 duration-700 hover:shadow-lg sm:p-8">
          {/* Founders Grid - 2 columns inside the parent card */}
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
            {founders.map((founder, index) => (
              <div
                key={founder.name}
                className="group bg-muted/30 border-border hover:bg-background flex h-full flex-col rounded-xl border p-5 shadow-sm transition-all duration-300 hover:shadow-md"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "both",
                }}
              >
                {/* Image and Basic Info */}
                <div className="mb-4 flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    {/* Image Container with Gradient Border */}
                    <div className="from-primary to-secondary relative h-20 w-20 rounded-2xl bg-gradient-to-br p-1 shadow-md transition-transform duration-500 group-hover:scale-105 sm:h-24 sm:w-24">
                      <div className="h-full w-full overflow-hidden rounded-2xl bg-white">
                        <div className="relative h-full w-full">
                          <Image
                            src={founder.image}
                            alt={founder.name}
                            fill
                            className="object-cover"
                            sizes="96px"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1 line-clamp-1 text-lg font-bold sm:text-xl">
                      {founder.name}
                    </h3>
                    <p className="text-primary mb-3 text-sm font-semibold sm:text-base">
                      {founder.role}
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-2">
                      {founder.socials.map((social) => {
                        const Icon = getSocialIcon(social.platform);
                        return (
                          <Link
                            key={social.platform}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:bg-primary/10 hover:text-primary text-muted-foreground hover:border-primary/20 flex h-8 w-8 items-center justify-center rounded-full border-2 border-transparent transition-all duration-300 hover:scale-110"
                          >
                            <Icon className="h-4 w-4" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow text-sm leading-relaxed">
                  {founder.bio}
                </p>

                {/* Expertise Tags */}
                <div className="border-border border-t pt-4">
                  <p className="text-muted-foreground mb-2 text-xs font-semibold tracking-wider uppercase">
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
