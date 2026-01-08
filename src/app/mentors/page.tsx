"use client";

import React from 'react';
import { Github, Linkedin, Globe, ShieldCheck, Code2, MessageSquare, Zap, Star, ArrowRight } from "lucide-react";

export default function MentorsPage() {
  const mentors = [
    {
      name: "Arjun Mehta",
      role: "Senior Backend Architect",
      company: "Ex-Google / Amazon",
      expertise: ["Java Spring Boot", "Distributed Systems", "SQL Optimization"],
      image: "/mentor1.jpg", // Replace with actual paths
    },
    {
      name: "Sarah Chen",
      role: "AI Implementation Lead",
      company: "NVIDIA / Tech Global",
      expertise: ["LLM Fine-tuning", "PyTorch", "Computer Vision"],
      image: "/mentor2.jpg",
    },
    {
      name: "Rohan Das",
      role: "Full Stack Engineer",
      company: "Senior Dev at Razorpay",
      expertise: ["React Native", "Node.js", "System Design"],
      image: "/mentor3.jpg",
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero: Impactful Sentence Integration */}
      <header className="bg-ayvan-dark pt-32 pb-20 px-6 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ayvan-primary/20 border border-ayvan-primary/30 mb-6">
            <Star size={14} className="text-ayvan-primary" fill="currentColor" />
            <span className="text-[10px] font-black uppercase tracking-widest text-ayvan-primary">Industry Practitioners Only</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            Learn from those <br/> who <span className="text-ayvan-primary italic">actually</span> build.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">
            "We train you like an industry developer, not an exam student. Get 1:1 mentorship from engineers building systems used by millions."
          </p>
        </div>
      </header>

      {/* 2. Mentor Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mentors.map((mentor, i) => (
            <div key={i} className="group bg-slate-50 rounded-[3rem] p-8 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
              <div className="w-full aspect-square bg-slate-200 rounded-[2.5rem] mb-8 overflow-hidden relative">
                {/* Fallback for Image */}
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-black text-4xl">
                  {mentor.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>
              
              <div className="mb-6">
                <span className="text-ayvan-primary font-black text-[10px] uppercase tracking-widest">{mentor.company}</span>
                <h3 className="text-2xl font-black text-ayvan-dark mt-1">{mentor.name}</h3>
                <p className="text-slate-500 font-bold text-sm">{mentor.role}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {mentor.expertise.map((exp, idx) => (
                  <span key={idx} className="px-3 py-1 bg-white border border-slate-200 rounded-full text-[10px] font-bold text-slate-600">
                    {exp}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-200">
                <div className="flex gap-3 text-slate-400">
                   <Linkedin size={18} className="hover:text-blue-600 cursor-pointer transition-colors" />
                   <Github size={18} className="hover:text-black cursor-pointer transition-colors" />
                </div>
                <button className="text-ayvan-dark font-black text-sm flex items-center gap-2 group-hover:text-ayvan-primary transition-colors">
                  View Profile <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. The "Success Loop" Quotation Section */}
      <section className="max-w-5xl mx-auto px-6 pb-32">
        <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex justify-center gap-4 mb-10">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-ayvan-primary animate-pulse" />
              ))}
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8">
              Skills first. <br/> Confidence next. <br/> Career follows.
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10">
              "If you finish our course, you won’t just know concepts — you’ll know how to build." That is our promise to every student.
            </p>
            <button className="bg-ayvan-primary text-white px-10 py-5 rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-indigo-500/40 transition-all">
               Book a Roadmap Session
            </button>
          </div>
          {/* Visual Decorator */}
          <ShieldCheck className="absolute -bottom-10 -right-10 text-white/5" size={300} />
        </div>
      </section>
    </div>
  );
}