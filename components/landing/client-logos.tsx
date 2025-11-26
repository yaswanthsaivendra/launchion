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
    // Duplicate the list for seamless loop
    const duplicatedClients = [...clients, ...clients];

    return (
        <div className="w-full overflow-hidden">
            <p className="text-sm text-muted-foreground mb-6 tracking-wide uppercase">
                Trusted by innovative startups
            </p>
            <div className="relative">
                {/* Gradient overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Scrolling container */}
                <div className="flex gap-12 animate-marquee">
                    {duplicatedClients.map((client, index) => (
                        <div
                            key={index}
                            className={`shrink-0 text-xl text-muted-foreground/60 hover:text-foreground transition-all duration-300 cursor-pointer hover:scale-110 ${client.style}`}
                        >
                            {client.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
