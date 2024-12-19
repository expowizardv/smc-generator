"use client";

import { Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Clock className="h-6 w-6 text-orange-500" />
          <span className="font-bold text-xl gradient-text">Tempo</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-orange-500 hover:bg-orange-600">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}