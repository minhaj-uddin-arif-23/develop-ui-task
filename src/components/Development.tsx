 



 import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Development() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-lime-200 to-white px-4 text-black">
      {/* About Button */}
      <div className="absolute top-6 right-6">
        <button className="flex items-center gap-1 border-2 border-black px-4 py-1 rounded-full hover:bg-black hover:text-white transition">
          <ChevronDown size={16} />
          About
        </button>
      </div>

      {/* Hero Heading */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-center mt-10">
        I’ve been{' '}
        <span className="bg-black text-white px-3 py-1 rounded-md inline-block">Developing</span>{' '}
        <br className="hidden md:block" />
        Websites since{' '}
        <span className="bg-black text-white px-3 py-1 rounded-md inline-block">2013</span>
      </h1>

      {/* Description Paragraph */}
      <p className="mt-6 max-w-2xl text-center text-base text-black/80">
        We start every new client interaction with an in-depth discovery call where we get to know
        each other and recommend the best course of action.
      </p>

      {/* Previously Worked On */}
      <div className="mt-16 w-full max-w-5xl px-4">
        <h2 className="text-xl font-bold mb-6">PREVIOUSLY WORKED ON</h2>

        <div className="flex flex-wrap gap-4 justify-center">
          {/* Example logos as tags */}
          <span className="px-6 py-3 bg-black text-white rounded-full rotate-[15deg]">
            awwwards.
          </span>
          <span className="px-6 py-3 border-2 border-black rounded-full">CSSWINNER</span>
          <span className="px-6 py-3 border-2 border-black rounded-full rotate-[-10deg]">
            /thoughtworks
          </span>
          <span className="px-6 py-3 border-2 border-black rounded-full">facebook</span>
          <span className="px-6 py-3 border-2 border-black rounded-full rotate-[10deg]">
            CSSDesignAwards
          </span>
          <span className="px-6 py-3 border-2 border-black rounded-full">AUTODESK</span>
        </div>
      </div>
    </section>
  );
}
