

import Brand from "@/components/landing/home/brand/brand";
import CustomerStories from "@/components/landing/home/customer-stories/customer-stories";
import Faq from "@/components/landing/home/faq/faq";
import HeroSection from "@/components/landing/home/hero/hero-section";
import Solutions from "@/components/landing/home/solution/solution";
import Subscription from "@/components/landing/subscription/subscription";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Home | LeaveFlow",
};


export default async function Home() {

  return (
   <main>
      <HeroSection />
        <Brand />
          {/* <CustomerStories /> */}
            <Subscription />
                 <Faq />
                  <Solutions />
   </main>
  );
}
