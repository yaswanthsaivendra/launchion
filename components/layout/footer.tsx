import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { LaunchionLogo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="border-border/40 bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="group flex items-center gap-0">
              <LaunchionLogo className="h-10 w-10 transition-transform group-hover:scale-110" />
              <span className="text-lg font-bold tracking-tight">
                Launchion
              </span>
            </Link>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              Launch your MVP in days, not months. The ultimate boilerplate for
              startups who want to ship fast.
            </p>
          </div>

          {/* Product Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold tracking-tight">Product</h3>
            <Link
              href="/#process"
              className="text-muted-foreground hover:text-primary text-sm transition-all duration-300 hover:translate-x-1"
            >
              Process
            </Link>
            <Link
              href="/#pricing"
              className="text-muted-foreground hover:text-primary text-sm transition-all duration-300 hover:translate-x-1"
            >
              Pricing
            </Link>
            <Link
              href="/#faq"
              className="text-muted-foreground hover:text-primary text-sm transition-all duration-300 hover:translate-x-1"
            >
              FAQ
            </Link>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold tracking-tight">Company</h3>
            <Link
              href="#"
              className="text-muted-foreground hover:text-primary text-sm transition-all duration-300 hover:translate-x-1"
            >
              About
            </Link>
          </div>

          {/* Builders Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold tracking-tight">Founders/Builders</h3>
            <Link
              href="https://x.com/npm_shubham"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-all duration-300 hover:translate-x-1"
            >
              <FaXTwitter className="h-4 w-4" />
              @npm_shubham
            </Link>
            <Link
              href="https://x.com/yash0x01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-all duration-300 hover:translate-x-1"
            >
              <FaXTwitter className="h-4 w-4" />
              @yash0x01
            </Link>
          </div>

          {/* Legal Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold tracking-tight">Legal</h3>
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-primary text-sm transition-all duration-300 hover:translate-x-1"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-primary text-sm transition-all duration-300 hover:translate-x-1"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        <div className="border-border/40 text-muted-foreground mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 text-sm md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Launchion. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
