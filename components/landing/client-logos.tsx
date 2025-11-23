"use client";

const clients = [
    "Velaar",
    "DDD",
    "Techsnap",
    "helpfulgenie",
    "Unstarted",
    "Cohesive",
    "Navio",
];

export function ClientLogos() {
    return (
        <div className="w-full py-12">
            <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
                Trusted by innovative teams
            </p>

            {/* Scrollable Container */}
            <div className="relative">
                <div className="overflow-x-auto scrollbar-hide">
                    <div className="flex items-center justify-center gap-8 md:gap-12 px-4 min-w-max">
                        {clients.map((client) => (
                            <span
                                key={client}
                                className="text-xl md:text-2xl font-bold text-muted-foreground/50 hover:text-primary transition-colors cursor-default whitespace-nowrap"
                            >
                                {client}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Scroll Hint Gradients */}
                <div className="absolute top-0 left-0 w-12 h-full bg-gradient-to-r from-background to-transparent pointer-events-none md:hidden" />
                <div className="absolute top-0 right-0 w-12 h-full bg-gradient-to-l from-background to-transparent pointer-events-none md:hidden" />
            </div>
        </div>
    );
}
