'use client'

import React, { useState } from 'react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Card, CardContent } from "./ui/card"

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');

  const handleNewsletterSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the email to your newsletter service
    console.log(`Signed up with email: ${email}`);
    // TODO: Implement actual newsletter signup logic
    // For example:
    // try {
    //   await signupToNewsletter(email);
    //   // Handle successful signup
    // } catch (error) {
    //   // Handle error
    // }
    // Reset the email input
    setEmail('');
  };

  return (
    <Card className="shadow-lg bg-gradient-to-br from-green-50 to-green-100 mb-8">
      <CardContent className="pt-6">
        <form onSubmit={handleNewsletterSignup} className="space-y-4">
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="border-green-300 focus:ring-green-500"
            required
            aria-label="Email for newsletter signup"
          />
          <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
            Help me reach my goal!
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}