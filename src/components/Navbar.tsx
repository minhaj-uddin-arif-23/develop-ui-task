'use client';

import React from 'react';
import { MoveRight, Menu } from 'lucide-react';
import { ModeToggle } from './Button/ModeToggle';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  return (
    <nav className="border rounded-lg px-6 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold uppercase">DEVELOP.ME</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 font-medium">
          <ModeToggle />
          <button className="hover:underline">Home</button>
          <button className="hover:underline">About</button>
          <button className="hover:underline">Portfolio</button>
          <button className="hover:underline">Blog</button>
          <Button
            variant="outline"
            className="flex items-center gap-2 border-2 rounded-full"
          >
            <span className="rounded-full border-2 p-1">
              <MoveRight size={16} />
            </span>
            Start Project
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="space-y-6">
              <h2 className="text-lg font-bold pt-4 ">Menu</h2>
              <p className='text-center'>              <ModeToggle />
</p>
              <button className="block w-full text-center">Home</button>
              <button className="block w-full text-center">About</button>
              <button className="block w-full text-center">Portfolio</button>
              <button className="block w-full text-center">Blog</button>
              <Button variant="outline" className="max-w-6xl rounded-full flex gap-2">
                <MoveRight size={16} /> Start Project
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
