
import { Button } from "@/components/ui/button";

import Link from "next/link";
import './dashboard.css'
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 

  return (
    <div className="min-h-screen flex-col">
     
      
        <main >{children}</main>
    
    </div>
  );
}
