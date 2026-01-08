"use client";

import React, { useEffect } from "react";
import CourseGrid from "@/components/home/CourseGrid";
import { Users, Rocket, Target, Zap, ArrowRight, Quote, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Home() {
  // Intersection Observer for Scroll Animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const philosophy = [
    { 
      icon: <Target size={20} />, 
      title: "Contextual", 
      desc: "Learn why a technology is used in production, not just how it works in theory." 
    },
    { 
      icon: <Zap size={20} />, 
      title: "Modular", 
      desc: "Focus on the exact gaps in your knowledge without the bloat of traditional courses." 
    },
    { 
      icon: <Users size={20} />, 
      title: "Guided", 
      desc: "Direct access to technical mentors to unblock your progress in real-time." 
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      
      {/* 1. Hero Section (Immediate Animation) */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          
          <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000 ease-out fill-mode-forwards">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 text-slate-500 text-[10px] font-black uppercase tracking-widest mb-8 border border-slate-100 shadow-sm">
              <Sparkles size={12} className="text-ayvan-primary animate-pulse" /> 
              <span>Modular learning for modern engineers</span>
            </div>

            {/* Shining Header */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-ayvan-dark tracking-tight leading-[1.1] mb-8">
              <span className="inline-block animate-text-shine bg-[linear-gradient(110deg,#0f172a,45%,#6366f1,55%,#0f172a)] bg-clip-text text-transparent">
                Engineering excellence,
              </span> 
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-400 to-slate-200">
                one module at a time.
              </span> 
            </h1>
            
            <p className="mt-6 text-lg text-slate-500 max-w-xl mx-auto leading-relaxed font-medium opacity-90">
              Master specific industry skills through project-based sub-modules and 1:1 mentorship. 
              Bridge the gap between syntax and shipping products.
            </p>
            
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link href="#courses">
                <button className="group bg-ayvan-dark text-white px-10 py-4 rounded-2xl font-bold text-base hover:bg-ayvan-primary hover:-translate-y-1 transition-all duration-300 active:scale-95 flex items-center gap-2 shadow-xl shadow-indigo-100/50">
                  Browse Tracks <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <button className="bg-white text-slate-600 border border-slate-200 px-10 py-4 rounded-2xl font-bold text-base hover:bg-slate-50 hover:border-slate-300 transition-all duration-300">
                How it works
              </button>
            </div>
          </div>
        </div>

        {/* Animated Background Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-40 pointer-events-none">
            <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-indigo-100 rounded-full blur-[120px] animate-blob"></div>
            <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-blue-50 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
        </div>
      </section>

      {/* 2. Philosophy Section (Reveal on Scroll) */}
      <section className="py-24 px-6 bg-slate-50/50 border-y border-slate-100 reveal">
        <div className="max-w-4xl mx-auto text-center">
          <Quote size={32} className="text-indigo-200 mx-auto mb-8" fill="currentColor" />
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 leading-tight tracking-tight mb-6">
            "While syntax is the foundation, <br className="hidden md:block"/> 
            <span className="text-ayvan-dark">architecture is what builds products.</span>"
          </h2>
          
          <p className="text-slate-400 text-xs font-black tracking-[0.3em] uppercase mb-16">
            — The Ayvan Approach
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {philosophy.map((item, idx) => (
              <div 
                key={idx} 
                className={`reveal group p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 hover:-translate-y-2 transition-all duration-500 delay-${(idx + 1) * 100}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-ayvan-primary group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h4 className="font-bold text-ayvan-dark mb-3 text-lg">{item.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Course Grid (Reveal on Scroll) */}
      <section id="courses" className="py-24 bg-white reveal">
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <div className="flex items-center gap-4">
             <div className="h-px flex-grow bg-slate-100"></div>
             <h2 className="text-sm font-black text-slate-400 tracking-[0.4em] uppercase">Specialized Tracks</h2>
             <div className="h-px flex-grow bg-slate-100"></div>
          </div>
        </div>
        <CourseGrid />
      </section>

    </main>
  );
}