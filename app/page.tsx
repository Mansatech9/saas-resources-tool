

import { Metadata } from "next";
import HeroSection from "@/components/landing/home/hero-section";

export const metadata: Metadata = {
    title: "Home | LeaveFlow",
};


export default async function Home() {

  return (
   <main>
      <HeroSection />
   </main>
  );
}
