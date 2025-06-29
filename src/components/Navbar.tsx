import React from 'react';
import { MoveRight } from 'lucide-react';

export default function Navbar() {
  return (
    <div className=" ">
      <nav className="flex items-center justify-between px-6 py-4 border bg-gradient-to-r from-white via-white to-[#d4fff5] rounded-lg">
        {/* Logo */}
        <div>
          <h1 className="text-xl font-bold uppercase">DEVELOP.ME</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6  text-black font-medium">
          <h1 className="cursor-pointer hover:underline mt-2">Home</h1>
          <h1 className="cursor-pointer hover:underline mt-2">About</h1>
          <h1 className="cursor-pointer hover:underline mt-2">Portfolio</h1>
          <h1 className="cursor-pointer hover:underline mt-2">Blog</h1>
       

        {/* Start Project Button */}
        
          <button className="flex items-center gap-  px-4 py-2 border-2 border-black rounded-full hover:bg-black hover:text-white transition">
          <span className='rounded-full text-black border-2 border-black px-1 py-1 -ml-4 mr-2  '>  <MoveRight size={18} /></span>
            <span className="capitalize">Start Project</span>
          </button>
        </div>
      </nav>
    </div>
  );
}
