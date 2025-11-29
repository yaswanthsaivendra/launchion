import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="bg-primary/10 absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute top-0 left-1/2 h-full w-full max-w-7xl -translate-x-1/2">
        <div className="bg-primary/20 absolute bottom-0 left-1/4 -z-10 h-96 w-96 rounded-full blur-3xl" />
        <div className="bg-secondary/10 absolute top-0 right-1/4 -z-10 h-96 w-96 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-balance md:text-5xl">
          Ready to Launch Your Idea?
        </h2>
        <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-lg leading-relaxed">
          Don&apos;t let your idea stay a dream. Let&apos;s build it, launch it,
          and get your first users in just 21 days.
        </p>

        <Button
          size="lg"
          className="group h-14 px-10 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          asChild
        >
          <Link href="https://tally.so/r/RGWJZ4" target="_blank">
            Start Your Launch
            <Rocket className="ml-2 h-5 w-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:rotate-12" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
