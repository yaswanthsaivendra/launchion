import Link from "next/link";
import { Rocket } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-muted/30">
            <div className="container px-4 py-12 mx-auto md:py-16 lg:py-20">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-4">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform group-hover:scale-110">
                                <Rocket className="h-5 w-5" />
                            </div>
                            <span className="text-lg font-bold tracking-tight">Launch Ion</span>
                        </Link>
                        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                            Launch your MVP in days, not months. The ultimate boilerplate for startups who want to ship fast.
                        </p>

                    </div>

                    {/* Product Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold tracking-tight">Product</h3>
                        <Link href="/#process" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1">
                            Process
                        </Link>
                        <Link href="/#pricing" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1">
                            Pricing
                        </Link>
                        <Link href="/#faq" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1">
                            FAQ
                        </Link>
                    </div>

                    {/* Company Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold tracking-tight">Company</h3>
                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1">
                            About
                        </Link>

                        <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1">
                            Contact
                        </Link>
                    </div>

                    {/* Legal Column */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-semibold tracking-tight">Legal</h3>
                        <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1">
                            Terms of Service
                        </Link>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Launch Ion. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
