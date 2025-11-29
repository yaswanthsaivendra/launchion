import type { Metadata } from "next";
import { Poppins, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Analytics } from "@/components/analytics";

import { ScrollProgress } from "@/components/ui/scroll-progress";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Launchion | Launch Your MVP in 21 Days",
    template: "%s | Launchion",
  },
  description:
    "Launchion is the ultimate boilerplate for startups. We turn your idea into a market-ready product in just 21 days with high-quality code and design.",
  keywords: [
    "MVP",
    "startup",
    "boilerplate",
    "nextjs",
    "launch",
    "product development",
    "software agency",
  ],
  authors: [{ name: "Launchion Team" }],
  creator: "Launchion",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://launchion.pro",
    title: "Launchion | Launch Your MVP in 21 Days",
    description:
      "Turn your idea into a market-ready product fast. No fluff, no endless meetings. Just high-quality code that converts.",
    siteName: "Launchion",
    images: [
      {
        url: "/og-image.jpg", // We should create this later
        width: 1200,
        height: 630,
        alt: "Launchion - Launch Your MVP",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Launchion | Launch Your MVP in 21 Days",
    description:
      "Turn your idea into a market-ready product fast. No fluff, no endless meetings.",
    images: ["/og-image.jpg"],
    creator: "@launchion",
  },
  metadataBase: new URL("https://launchion.pro"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${dmSerif.variable} antialiased`}>
        <Providers>
          <ScrollProgress />
          <Analytics />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
