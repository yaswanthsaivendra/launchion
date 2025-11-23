import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import Link from "next/link";

export function CTA() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 -z-10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10" />
                <div className="absolute top-0 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
            </div>

            <div className="container px-4 mx-auto text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Ready to Launch Your Idea?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
                    Don't let your idea stay a dream. Let's build it, launch it, and get your first users in just 15 days.
                </p>

                <Button size="lg" className="h-14 px-10 text-lg group" asChild>
                    <Link href="#pricing">
                        Start Your Launch
                        <Rocket className="ml-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                </Button>
            </div>
        </section>
    );
}
