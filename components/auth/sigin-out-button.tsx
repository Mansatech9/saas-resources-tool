'use client';

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignOutButton() {
  return (
     <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Enter your credentials to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            
            <Button 
      variant="outline" 
      onClick={() => signOut({ callbackUrl: '/' })}
    >
      Sign Out
    </Button>
           
          </div>
          
         
        </CardContent>
      </Card>
    </div>
    
  );
}