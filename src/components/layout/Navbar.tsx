import React from 'react';
import Link from 'next/link';
import { ChevronDown, Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Logo Area - Enhanced Contrast */}
      <Link href="/" className="flex items-center gap-3 group">
        <div className="relative">
          {/* Decorative Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-ayvan-primary to-indigo-400 rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-200"></div>
          
          {/* Logo Box */}
          <div className="relative w-11 h-11 bg-ayvan-dark rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-xl transition-transform group-hover:scale-105 group-hover:rotate-3">
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-white to-ayvan-primary">
              A
            </span>
          </div>
        </div>

        {/* Brand Name - Gradient & Spacing */}
        <span className="text-2xl font-black tracking-tighter text-ayvan-dark group-hover:text-ayvan-primary transition-colors">
          AY<span className="bg-clip-text text-transparent bg-gradient-to-r from-ayvan-primary to-indigo-500">VAN</span>
        </span>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-8 text-sm font-bold text-gray-500">
        <Link href="/" className="hover:text-ayvan-primary transition-colors">Home</Link>
        
        <div className="relative group cursor-pointer py-2">
          <div className="flex items-center gap-1 group-hover:text-ayvan-primary transition-colors">
            Courses <ChevronDown size={14} />
          </div>
          
          {/* Dropdown Menu */}
          <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 rounded-2xl shadow-2xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 mt-1">
            <Link href="/frontend" className="block px-4 py-3 hover:bg-slate-50 rounded-xl transition-colors">Frontend Mastery</Link>
            <Link href="/backend" className="block px-4 py-3 hover:bg-slate-50 rounded-xl transition-colors">Backend Engineering</Link>
            <Link href="/dsa" className="block px-4 py-3 hover:bg-slate-50 rounded-xl transition-colors">DSA & Logic</Link>
            <Link href="/ai" className="block px-4 py-3 hover:bg-slate-50 rounded-xl transition-colors">AI & Machine Learning</Link>
            <Link href="/security" className="block px-4 py-3 hover:bg-slate-50 rounded-xl transition-colors">Cybersecurity</Link>
            <div className="border-t border-gray-50 mt-1 pt-1">
              <Link href="/full-stack" className="block px-4 py-3 bg-indigo-50/50 text-ayvan-primary rounded-xl transition-colors font-black">Full-Stack Track</Link>
            </div>
          </div>
        </div>

        {/* Updated Links to point to your new pages */}
        <Link href="/mentors" className="hover:text-ayvan-primary transition-colors">Mentors</Link>
        <Link href="/about" className="hover:text-ayvan-primary transition-colors">About</Link>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-5">
        <button className="hidden sm:block text-sm font-bold text-slate-500 hover:text-ayvan-dark transition-colors">Log In</button>
        <Link href="/get-started">
          <button className="bg-ayvan-dark text-white px-7 py-3 rounded-2xl font-black text-sm hover:bg-ayvan-primary hover:shadow-xl hover:shadow-ayvan-primary/20 transition-all active:scale-95">
            Join Now
          </button>
        </Link>
        <div className="md:hidden text-ayvan-dark p-2 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer">
          <Menu size={24} />
        </div>
      </div>
    </nav>
  );
}