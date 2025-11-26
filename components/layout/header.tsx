import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Menu, Rocket } from "lucide-react";

export function Header() {
    const navItems = [
        { name: "Process", href: "/#process" },
        { name: "Testimonials", href: "/#testimonials" },
        { name: "Pricing", href: "/#pricing" },
        { name: "FAQ", href: "/#faq" },
    ];

    return (
        <header className="w-full bg-background">
            <div className="container relative flex h-20 items-center justify-between px-4 mx-auto">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                            <Rocket className="h-5 w-5" />
                        </div>
                        <span className="text-lg font-bold tracking-tight">Launch Ion</span>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <Button asChild>
                        <Link href="#pricing">Start Your Launch</Link>
                    </Button>
                </div>


            </div>
        </header>
    );
}
