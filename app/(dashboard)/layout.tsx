
import { Button } from "@/components/ui/button";

import Link from "next/link";

import Page from "../dashboard/page";
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 

  return (
    <div className="min-h-screen flex-col">
     
      
        <main >
          
          <Page>
          {children}
          </Page>
          
          </main>
    
    </div>
  );
}
