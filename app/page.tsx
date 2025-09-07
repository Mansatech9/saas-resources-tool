

import Brand from "@/components/landing/home/brand/brand";
import HeroSection from "@/components/landing/home/hero/hero-section";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Home | LeaveFlow",
};


export default async function Home() {

  return (
   <main>
      <HeroSection />
        <Brand />
   </main>
  );
}
