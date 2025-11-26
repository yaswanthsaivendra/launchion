"use client";

interface Client {
    name: string;
    style: string;
}

const clients: Client[] = [
    { name: "Velaar", style: "font-bold" },
    { name: "DDD", style: "font-light italic" },
    { name: "Techsnap", style: "font-semibold" },
    { name: "helpfulgenie", style: "font-medium" },
    { name: "Unstarted", style: "font-bold italic" },
    { name: "Cohesive", style: "font-light" },
    { name: "Navio", style: "font-semibold italic" },
    { name: "Pixelflow", style: "font-bold" },
    { name: "Mindwave", style: "font-light" },
    { name: "Buildr", style: "font-medium italic" },
    { name: "Snaply", style: "font-semibold" },
    { name: "Flowstate", style: "font-bold" },
    { name: "Taskly", style: "font-light italic" },
    { name: "Zenith", style: "font-medium" },
    { name: "Sparkkit", style: "font-semibold italic" },
];

export function ClientLogos() {
    return (
        <div className="w-full py-12 overflow-hidden">
            <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
                Trusted by innovative teams
            </p>

            {/* Auto-scrolling Marquee */}
            <div className="relative">
                <div className="flex gap-8 md:gap-12 animate-marquee">
                    {/* First set of logos */}
                    {clients.map((client, index) => (
                        <span
                            key={`first-${index}`}
                            className={`text-xl md:text-2xl text-muted-foreground/50 whitespace-nowrap ${client.style}`}
                        >
                            {client.name}
                        </span>
                    ))}
                    {/* Duplicate set for seamless loop */}
                    {clients.map((client, index) => (
                        <span
                            key={`second-${index}`}
                            className={`text-xl md:text-2xl text-muted-foreground/50 whitespace-nowrap ${client.style}`}
                        >
                            {client.name}
                        </span>
                    ))}
                </div>

                {/* Gradient Overlays */}
                <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-background to-transparent pointer-events-none" />
                <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-background to-transparent pointer-events-none" />
            </div>
        </div>
    );
}
