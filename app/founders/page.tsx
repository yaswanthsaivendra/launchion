import { Metadata } from "next";
import { FoundersSection } from "@/components/landing/founders";

export const metadata: Metadata = {
  title: "Meet Our Founders | Launchion",
  description:
    "Meet the team behind Launchion. Experienced founders helping you build and launch your MVP in 21 days.",
  openGraph: {
    title: "Meet Our Founders | Launchion",
    description:
      "Meet the team behind Launchion. Experienced founders helping you build and launch your MVP in 21 days.",
  },
};

export default function FoundersPage() {
  return (
    <main className="bg-background min-h-screen">
      <FoundersSection />
    </main>
  );
}
