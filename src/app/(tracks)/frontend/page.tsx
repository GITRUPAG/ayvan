"use client";

import React from "react";
import { CheckCircle2, Clock, Terminal, Layout, Layers, Code, Briefcase, Target, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

export default function FrontendPage() {
  const packages = [
    { 
      id: 1, name: "Web Foundations", level: "Beginner", price: "₹999", 
      duration: "2 Weeks", bestFor: "Absolute beginners starting from zero.",
      syllabus: ["HTML5 Semantics", "CSS3 Flexbox/Grid", "Responsive Design", "Git & GitHub"],
      outcome: "Personal Portfolio Website", icon: Layout, color: "text-blue-500"
    },
    { 
      id: 2, name: "CSS Mastery", level: "Beginner → Intermediate", price: "₹799", 
      duration: "2 Weeks", bestFor: "Design-focused devs and UI enthusiasts.",
      syllabus: ["Advanced Grid", "Animations & Transitions", "Media Queries"],
      outcome: "Multi-section Landing Page", icon: Layers, color: "text-indigo-500"
    },
    { 
      id: 3, name: "JavaScript Essentials", level: "Intermediate", price: "₹1,299", 
      duration: "3 Weeks", bestFor: "Students wanting to master logic over syntax.",
      syllabus: ["DOM Manipulation", "ES6+ Features", "Fetch API", "Async/Await"],
      outcome: "Todo App & API Product App", icon: Code, color: "text-yellow-500"
    },
    { 
      id: 4, name: "Modern UI with Tailwind", level: "Intermediate", price: "₹999", 
      duration: "1 Week", bestFor: "Developers tired of writing messy CSS.",
      syllabus: ["Utility-first Workflow", "Dark Mode", "Reusable UI Components"],
      outcome: "Startup Landing Page", icon: Terminal, color: "text-sky-400"
    },
    { 
      id: 5, name: "React Framework (Core)", level: "Intermediate → Advanced", price: "₹2,499", 
      duration: "4 Weeks", bestFor: "Career switchers aiming for product roles.",
      syllabus: ["JSX & Hooks", "React Router", "State Management", "API Integration"],
      outcome: "React CRUD Application", icon: Layers, color: "text-cyan-500"
    },
    { 
      id: 6, name: "Advanced React & State", level: "Advanced", price: "₹1,999", 
      duration: "3 Weeks", bestFor: "Engineers preparing for Senior Frontend roles.",
      syllabus: ["Context API", "Redux Toolkit", "Auth Flow", "Lazy Loading"],
      outcome: "Auth-based Dashboard App", icon: Briefcase, color: "text-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* 1. Header Section */}
      <header className="bg-ayvan-dark py-24 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter italic">Frontend Mastery</h1>
          <p className="text-xl text-indigo-200 leading-relaxed font-medium">
            "Skills first. Confidence next. Career follows." Build production-grade interfaces. 
            Only pay for the modules you need to bridge your skill gap.
          </p>
        </div>
      </header>

      {/* 2. RECOMMENDED PATHS: Reduced Choice Conflict */}
      <section className="max-w-6xl mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-[3rem] p-10 shadow-2xl border border-slate-100">
            <div className="flex items-center gap-2 mb-8">
                <Target className="text-ayvan-primary" size={24} />
                <h2 className="text-2xl font-black text-ayvan-dark tracking-tight">Popular Career Paths</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: "Frontend Entry Path", time: "8 Weeks", for: "College Students" },
                    { title: "Professional React Path", time: "12 Weeks", for: "Career Switchers" },
                    { title: "UI Engineering Path", time: "6 Weeks", for: "Backend Devs" }
                ].map((path, i) => (
                    <div key={i} className="group p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-ayvan-dark hover:text-white transition-all duration-300 cursor-pointer">
                        <h4 className="font-black text-lg mb-2">{path.title}</h4>
                        <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest opacity-60">
                            <span>{path.time}</span>
                            <span>{path.for}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 3. FLAGSHIP PRODUCT: THE JOB-READY TRACK */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-12">
        <div className="bg-gradient-to-br from-ayvan-primary to-indigo-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-indigo-200">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full mb-6">
                    <Star size={14} className="text-yellow-400" fill="currentColor" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Flagship Track</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">The Frontend Job-Ready Track</h2>
                <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
                    "From empty folder to deployed application." This is our most popular path. 
                    Includes all 6 modules, private 1:1 code reviews, and interview prep.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-indigo-300">Total Duration</p>
                        <p className="text-2xl font-black">15 Weeks</p>
                    </div>
                    <button className="bg-white text-ayvan-dark px-10 py-4 rounded-2xl font-black text-lg hover:bg-slate-100 transition-all flex items-center gap-2">
                        Enroll Now <ArrowRight size={20} />
                    </button>
                </div>
            </div>
            <div className="hidden lg:block relative">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
                    <p className="font-bold text-sm mb-4">Includes everything in:</p>
                    <ul className="space-y-3">
                        {packages.slice(0, 4).map((p, i) => (
                            <li key={i} className="flex items-center gap-3 text-xs opacity-80 italic">
                                <CheckCircle2 size={14} /> {p.name}
                            </li>
                        ))}
                        <li className="text-xs font-black pt-2">+ Placement Assistance</li>
                    </ul>
                </div>
            </div>
          </div>
          <Briefcase size={400} className="absolute right-[-100px] bottom-[-100px] text-white/5 rotate-12" />
        </div>
      </section>

      {/* 4. Packages Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center gap-2 mb-12">
            <Layers className="text-ayvan-primary" size={24} />
            <h2 className="text-3xl font-black text-ayvan-dark tracking-tight">Individual Modules</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all group relative overflow-hidden">
              
              <div className="flex justify-between items-start mb-6">
                <div className={`p-4 rounded-2xl bg-slate-50 ${pkg.color} group-hover:scale-110 transition-transform`}>
                  <pkg.icon size={32} />
                </div>
                <div className="text-right">
                    <span className="block px-4 py-1.5 bg-ayvan-light text-ayvan-primary rounded-full text-[10px] font-black uppercase tracking-widest mb-2">
                    {pkg.level}
                    </span>
                    <div className="flex items-center justify-end gap-1 text-slate-400 font-bold text-[10px]">
                        <Clock size={12} /> {pkg.duration}
                    </div>
                </div>
              </div>

              <h3 className="text-2xl font-black text-ayvan-dark mb-2">{pkg.name}</h3>
              
              {/* Who This Is For Section */}
              <div className="mb-6 py-3 px-4 bg-slate-50 rounded-2xl border border-slate-100">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">Best For:</p>
                <p className="text-xs font-bold text-slate-600">{pkg.bestFor}</p>
              </div>

              <div className="space-y-3 mb-8">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Syllabus</p>
                {pkg.syllabus.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-600 text-sm">
                    <CheckCircle2 size={16} className="text-emerald-500" /> {item}
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-100">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Projected Outcome</p>
                <p className="text-sm font-bold text-ayvan-dark mb-6">🎯 {pkg.outcome}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-ayvan-dark">{pkg.price}</span>
                  <button className="bg-ayvan-dark text-white px-8 py-3 rounded-2xl font-bold hover:bg-ayvan-primary transition-all shadow-lg">
                    Buy Module
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}