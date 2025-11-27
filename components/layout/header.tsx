"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
    const [open, setOpen] = useState(false);
    
    const navItems = [
        { name: "Home", href: "/" },
        { name: "Our Work", href: "/#work" },
        { name: "Process", href: "/#process" },
        { name: "Pricing", href: "/#pricing" },
    ];

    const handleLinkClick = () => {
        setOpen(false);
    };

    return (
        <header className="w-full bg-background/80 backdrop-blur-md sticky top-0 z-50 border-b border-border/50">
            <div className="container flex h-20 items-center justify-between px-4 mx-auto">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 text-white shadow-sm">
                            <span className="font-bold text-lg">L</span>
                        </div>
                        <span className="text-xl font-bold tracking-tight text-foreground">Launch Ion</span>
                    </Link>
                </div>

                {/* Desktop Nav & CTA */}
                <div className="hidden md:flex items-center gap-8">
                    <nav className="flex items-center gap-8">
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
                    <Button
                        asChild
                        className="rounded-full bg-[#0F172A] hover:bg-[#0F172A]/90 text-white px-6 font-medium"
                    >
                        <Link href="#pricing">Book Strategy Call</Link>
                    </Button>
                </div>

                {/* Mobile Menu Trigger (Hidden on Desktop) */}
                <div className="md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger asChild>
                            <Button 
                                variant="ghost" 
                                size="icon"
                                className="relative h-10 w-10 rounded-lg transition-all duration-300 hover:bg-accent/10"
                                aria-label="Toggle menu"
                            >
                                <Menu className={`h-6 w-6 transition-all duration-300 ${open ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                                <X className={`absolute h-6 w-6 transition-all duration-300 ${open ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'}`} />
                            </Button>
                        </SheetTrigger>
                        <SheetContent 
                            side="right" 
                            className="w-full p-0 border-0 bg-background/95 backdrop-blur-xl [&>button]:hidden"
                        >
                            {/* Mobile Menu Content */}
                            <div className="flex flex-col h-full">
                                {/* Header with Logo */}
                                <div className="flex items-center justify-between p-6 border-b border-border/50 animate-in fade-in slide-in-from-top-4 duration-500">
                                    <Link 
                                        href="/" 
                                        className="flex items-center gap-3 transition-transform duration-300 hover:scale-105"
                                        onClick={handleLinkClick}
                                    >
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 text-white shadow-sm">
                                            <span className="font-bold text-xl">L</span>
                                        </div>
                                        <span className="text-xl font-bold tracking-tight text-foreground">Launch Ion</span>
                                    </Link>
                                    <SheetClose asChild>
                                        <Button 
                                            variant="ghost" 
                                            size="icon"
                                            className="h-10 w-10 rounded-lg transition-all duration-300 hover:bg-accent/10 hover:rotate-90"
                                            aria-label="Close menu"
                                        >
                                            <X className="h-6 w-6" />
                                        </Button>
                                    </SheetClose>
                                </div>

                                {/* Navigation Items */}
                                <nav className="flex-1 px-6 py-8 space-y-2 overflow-y-auto">
                                    {navItems.map((item, index) => (
                                        <SheetClose key={item.name} asChild>
                                            <Link
                                                href={item.href}
                                                onClick={handleLinkClick}
                                                className="group flex items-center gap-3 px-4 py-4 rounded-xl text-lg font-semibold text-foreground transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:translate-x-2 active:scale-95 animate-in fade-in slide-in-from-left-4"
                                                style={{
                                                    animationDelay: `${index * 75}ms`,
                                                    animationFillMode: 'both',
                                                }}
                                            >
                                                <span className="flex-1">{item.name}</span>
                                                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-primary transform group-hover:translate-x-1">
                                                    →
                                                </span>
                                            </Link>
                                        </SheetClose>
                                    ))}
                                </nav>

                                {/* CTA Button */}
                                <div className="p-6 border-t border-border/50 bg-muted/30 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300">
                                    <SheetClose asChild>
                                        <Button 
                                            asChild 
                                            className="w-full h-14 rounded-xl bg-primary hover:bg-primary/90 text-primary-foreground text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                                            onClick={handleLinkClick}
                                        >
                                            <Link href="#pricing">Book Strategy Call</Link>
                                        </Button>
                                    </SheetClose>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
