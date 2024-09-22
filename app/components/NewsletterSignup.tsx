import React, { useState } from 'react'
import { Button } from "@/app/components/ui/button"
import { Input } from "@/app/components/ui/input"
import { Card, CardContent } from "@/app/components/ui/card"
import supabase from '@/lib/supabaseClient'

const isValidEmail = (email: string): boolean => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNewsletterSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage('');

    if (!isValidEmail(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }

    try {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .insert({ email: email })

      if (error) {
        if (error.code === '23505') { // Unique violation error code
          setMessage('This email is already subscribed.');
        } else {
          throw error;
        }
      } else {
        console.log('Subscribed:', data);
        setMessage('Help is on the way, watch your inbox!');
        setEmail('');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Oops! Something went wrong. Please try again.');
    }
  };

  return (
    <Card className="shadow-lg bg-gradient-to-br from-green-50 to-green-100 mb-8">
      <CardContent className="p-6">
        <form onSubmit={handleNewsletterSignup} className="space-y-4">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-grow border-green-300 focus:ring-green-500"
              required
              aria-label="Email for newsletter signup"
            />
            <Button type="submit" className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white">
              Help me reach my goal!
            </Button>
          </div>
          {message && <p className="text-center mt-2">{message}</p>}
        </form>
      </CardContent>
    </Card>
  );
}