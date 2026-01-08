"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { Hammer, Wallet, Briefcase, Layout, Smartphone, Code2, ArrowRight, Quote, CheckCircle2, Star, Target, Zap, Cpu, ShieldCheck, Box, HardHat } from "lucide-react";

export default function About() {
  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("active");
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-12 px-6 border-b border-slate-100 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
            <Quote size={40} className="text-indigo-600/20 mb-6" fill="currentColor" />
            <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.9] mb-6 text-slate-900">
              Master the <span className="text-indigo-600">Architecture</span>, <br/>Not just the Syntax.
            </h1>
            <p className="text-lg text-slate-500 font-medium max-w-md leading-relaxed italic">
              "We don't teach syntax. We teach how systems are built. If you finish our course, you won’t just know concepts — you’ll know how to build."
            </p>
          </div>
          <div className="hidden lg:block relative">
             <div className="bg-slate-50 rounded-[40px] p-8 border border-slate-100 shadow-inner">
                {/* Visual Representation of Architecture vs Code */}
                
                <div className="grid grid-cols-2 gap-4 mt-8">
                   <div className="h-32 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-slate-100 translate-y-4">
                      <Code2 className="text-indigo-600 opacity-60" size={32} />
                   </div>
                   <div className="h-32 bg-slate-900 rounded-2xl shadow-xl flex items-center justify-center -translate-y-4">
                      <Zap className="text-white opacity-80" size={32} />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 2. THE AYVAN PHILOSOPHY */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-7 bg-slate-50 rounded-[32px] p-10 reveal border border-slate-100">
            <h2 className="text-xs font-black text-indigo-600 uppercase tracking-widest mb-4">Our Motive</h2>
            <h3 className="text-3xl font-bold mb-6 tracking-tight text-slate-900">No fake job guarantees. Only real skill guarantees.</h3>
            <p className="text-slate-600 leading-relaxed font-medium mb-6">
              Traditional bootcamps are bloated with theory. Every concept here is applied to a real project — no theory without practice. From empty folder to deployed application — you’ll do it yourself.
            </p>
            <div className="flex flex-wrap gap-4">
               {["System Design First", "Project-Based Learning", "1:1 Strategy Calls"].map((item, i) => (
                 <div key={i} className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-slate-100 text-xs font-bold text-slate-700">
                    <CheckCircle2 size={14} className="text-indigo-600"/> {item}
                 </div>
               ))}
            </div>
          </div>

          <div className="md:col-span-5 bg-slate-900 text-white rounded-[32px] p-10 reveal delay-100 shadow-2xl flex flex-col justify-between">
            <div>
              <Target className="text-indigo-400 mb-6" size={32} />
              <h3 className="text-2xl font-bold mb-4">Skills first. Confidence next. Career follows.</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                We train you like an industry developer, not an exam student. By the end, you’ll be capable of building real-world applications on your own.
              </p>
            </div>
            <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10 italic text-xs text-indigo-300">
               "The goal isn't to get a job; the goal is to be so good they can't ignore you."
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PRODUCTION STACK */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-black tracking-tighter text-slate-900 mb-16">Your Production Stack.</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { icon: Layout, label: "Web Apps" },
              { icon: Smartphone, label: "Mobile" },
              { icon: Cpu, label: "Cloud" },
              { icon: ShieldCheck, label: "Security" },
              { icon: Code2, label: "Backend" },
              { icon: Box, label: "Architecture" }
            ].map((skill, i) => (
              <div 
                key={i} 
                className="bg-white p-8 rounded-[2rem] border border-slate-200 text-center group hover:border-indigo-600 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <skill.icon size={28} />
                </div>
                <p className="text-[11px] font-black uppercase tracking-[0.15em] text-slate-600 group-hover:text-slate-900">
                  {skill.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REVEAL SECTION: THE DIFFERENCE */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center reveal">
         <div className="inline-block bg-indigo-50 text-indigo-600 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6">
            The Difference
         </div>
         <h2 className="text-4xl font-black text-slate-900 mb-8">Building vs. Watching</h2>
         
         <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
            <div className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100">
               <h4 className="font-black text-slate-400 uppercase text-xs mb-4">The "Tutorial Hell" Way</h4>
               <ul className="space-y-3 text-sm font-medium text-slate-500">
                  <li>• Copy-pasting code snippets</li>
                  <li>• No understanding of data flow</li>
                  <li>• Stuck when a bug appears</li>
                  <li>• Resume looks like everyone else's</li>
               </ul>
            </div>
            <div className="p-8 rounded-[2rem] bg-indigo-600 text-white shadow-xl shadow-indigo-500/20">
               <h4 className="font-black text-indigo-200 uppercase text-xs mb-4">The Ayvan Way</h4>
               <ul className="space-y-3 text-sm font-bold">
                  <li>• Designing the Schema first</li>
                  <li>• Understanding System Latency</li>
                  <li>• Debugging like a Senior Dev</li>
                  <li>• Custom, production-grade projects</li>
               </ul>
            </div>
         </div>
      </section>

      {/* 5. FINAL CTA */}
      <section className="py-24 text-center px-6">
        <div className="max-w-2xl mx-auto reveal">
          <div className="w-16 h-1 bg-indigo-600 mx-auto mb-8 rounded-full"></div>
          <h2 className="text-4xl font-black mb-6 tracking-tight text-slate-900">
            Build the future without the debt.
          </h2>
          
          <Link href="/#courses" className="inline-block">
            <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black hover:bg-indigo-600 hover:shadow-2xl hover:shadow-indigo-500/20 transition-all flex items-center gap-2 mx-auto cursor-pointer">
              Get Started <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}