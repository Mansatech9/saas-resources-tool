"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignIn() {
  
  const [error, setError] = useState("");
 
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
 



  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    setError("");
    
    try {
      await signIn("google", { callbackUrl: "/" });
    } catch (error) {
      setError("An error occurred with Google sign in. Please try again.");
    } finally {
      setIsGoogleLoading(false);
    }
  };
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
              onClick={handleGoogleSignIn} 
              variant="outline" 
              className="w-full"
              disabled={isGoogleLoading}
            >
              {isGoogleLoading ? "Signing in..." : "Continue with Google"}
            </Button>
            
           
          </div>
          
         
        </CardContent>
      </Card>
    </div>
  );
}