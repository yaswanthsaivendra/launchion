"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LaunchionLogo } from "@/components/ui/logo";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { SiGooglemeet } from "react-icons/si";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Our Work", href: "/#work" },
    { name: "Process", href: "/#process" },
    { name: "Pricing", href: "/#pricing" },
  ];

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // Close the mobile menu
    setOpen(false);

    // Handle hash navigation
    if (href.includes("#")) {
      e.preventDefault();
      const [path, hash] = href.split("#");
      const targetPath = path || "/";

      // If we're already on the target page, just scroll
      if (pathname === targetPath && hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
            window.history.pushState(null, "", `#${hash}`);
          }
        }, 350);
      } else {
        // Navigate to the page first, then scroll
        router.push(href);
        // The scrolling will happen after navigation via useEffect
      }
    } else {
      // Regular navigation without hash
      e.preventDefault();
      router.push(href);
    }
  };

  // Handle scrolling after navigation with hash
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  }, [pathname]);

  return (
    <header className="bg-background/80 border-border/50 sticky top-0 z-50 w-full border-b backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-0">
            <LaunchionLogo className="h-11 w-11" />
            <span className="text-foreground text-xl font-bold tracking-tight">
              Launchion
            </span>
          </Link>
        </div>

        {/* Desktop Nav & CTA */}
        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6 font-medium shadow-md"
          >
            <Link
              href="https://cal.com/shubham-verma/mvp-discussion-with-launchion"
              target="_blank"
            >
              <SiGooglemeet className="mr-2 h-4 w-4" />
              Book Strategy Call
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Trigger (Hidden on Desktop) */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-accent/10 relative h-10 w-10 rounded-lg transition-all duration-300"
                aria-label="Toggle menu"
              >
                <Menu
                  className={`h-6 w-6 transition-all duration-300 ${open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
                />
                <X
                  className={`absolute h-6 w-6 transition-all duration-300 ${open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
                />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-background/95 w-full border-0 p-0 backdrop-blur-xl [&>button]:hidden"
            >
              {/* Mobile Menu Content */}
              <div className="flex h-full flex-col">
                {/* Header with Logo */}
                <div className="border-border/50 animate-in fade-in slide-in-from-top-4 flex items-center justify-between border-b p-6 duration-500">
                  <Link
                    href="/"
                    className="flex items-center gap-2.5 transition-transform duration-300 hover:scale-105"
                    onClick={(e) => handleLinkClick(e, "/")}
                  >
                    <LaunchionLogo className="h-12 w-12" />
                    <span className="text-foreground text-xl font-bold tracking-tight">
                      Launchion
                    </span>
                  </Link>
                  <SheetClose asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-accent/10 h-10 w-10 rounded-lg transition-all duration-300 hover:rotate-90"
                      aria-label="Close menu"
                    >
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetClose>
                </div>

                {/* Navigation Items */}
                <nav className="flex-1 space-y-2 overflow-y-auto overscroll-contain px-6 py-8 [-webkit-overflow-scrolling:touch]">
                  {navItems.map((item, index) => (
                    <SheetClose key={item.name} asChild>
                      <Link
                        href={item.href}
                        onClick={(e) => handleLinkClick(e, item.href)}
                        className="group text-foreground hover:bg-primary/10 hover:text-primary animate-in fade-in slide-in-from-left-4 flex items-center gap-3 rounded-xl px-4 py-4 text-lg font-semibold transition-all duration-300 hover:translate-x-2 active:scale-95"
                        style={{
                          animationDelay: `${index * 75}ms`,
                          animationFillMode: "both",
                        }}
                      >
                        <span className="flex-1">{item.name}</span>
                        <span className="text-primary transform opacity-0 transition-opacity duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                          →
                        </span>
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                {/* CTA Button */}
                <div className="border-border/50 bg-muted/30 animate-in fade-in slide-in-from-bottom-4 border-t p-6 delay-300 duration-500">
                  <SheetClose asChild>
                    <Button
                      asChild
                      className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 w-full rounded-xl text-base font-semibold shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
                    >
                      <Link
                        href="https://cal.com/shubham-verma/mvp-discussion-with-launchion"
                        target="_blank"
                      >
                        <SiGooglemeet className="mr-2 h-5 w-5" />
                        Book Strategy Call
                      </Link>
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
