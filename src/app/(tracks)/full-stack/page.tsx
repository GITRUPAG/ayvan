"use client";

import React from "react";
import { Layers, Rocket, CheckCircle2, Server, Layout, Database, ShieldCheck, Share2, MessageSquare, Zap, Target, Star, AlertCircle, TrendingUp } from "lucide-react";

export default function FullStackPage() {
  const packages = [
    { 
      id: 1, name: "Full-Stack Foundations", level: "Beginner", price: "₹1,999", 
      prerequisites: "None (Fresh Start)",
      syllabus: ["Web Fundamentals", "HTML5 & CSS3", "JS Basics", "Git & GitHub"],
      outcome: "Static Responsive Website", icon: Layout, color: "text-blue-500", badge: "bg-blue-100"
    },
    { 
      id: 3, name: "Backend Java Developer", level: "Beginner → Intermediate", price: "₹3,999", 
      prerequisites: "Basic Logic / Foundation",
      isTrending: true,
      syllabus: ["Core Java", "OOPs", "JDBC & MySQL", "Spring Boot Basics"],
      outcome: "Java Backend REST API", icon: Coffee, color: "text-orange-500", badge: "bg-orange-100"
    },
    { 
      id: 6, name: "Secure Backend & APIs", level: "Advanced", price: "₹2,499", 
      prerequisites: "Java & Spring Boot Basics",
      syllabus: ["Spring Security", "JWT Auth", "Role-based Access", "Logging"],
      outcome: "Auth-enabled Backend API", icon: ShieldCheck, color: "text-red-500", badge: "bg-red-100"
    },
    { 
      id: 7, name: "Integration & Deployment", level: "Advanced", price: "₹1,999", 
      prerequisites: "Frontend & Backend Knowledge",
      isTrending: true,
      syllabus: ["Frontend + Backend Sync", "Docker Basics", "Vercel & Cloud Deployment"],
      outcome: "Deployed Full-Stack Product", icon: Share2, color: "text-emerald-500", badge: "bg-emerald-100"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* 1. Hero Section */}
      <header className="bg-slate-900 py-24 px-6 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 mb-6 text-indigo-400">
              <Layers size={24} />
              <span className="font-bold tracking-widest text-xs uppercase">Complete Engineering</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
              One Stack. <br />
              <span className="text-indigo-500">One Roadmap.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
              Master the art of building complete products. From React interfaces to 
              secure Java backends. Stop learning in isolation—start integrating.
            </p>
          </div>
          <div className="lg:w-1/2 bg-white/5 border border-white/10 p-8 rounded-[3rem] backdrop-blur-sm">
             <h3 className="text-sm font-bold text-indigo-400 uppercase tracking-widest mb-6">The Job-Ready Stack</h3>
             
             <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { label: "Frontend", val: "React + Tailwind", icon: Layout },
                  { label: "Backend", val: "Java + Spring Boot", icon: Server },
                  { label: "Database", val: "MySQL", icon: Database },
                  { label: "Auth", val: "JWT / Security", icon: ShieldCheck },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <item.icon size={18} className="text-indigo-400 mb-2"/>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">{item.label}</p>
                    <p className="text-sm font-bold">{item.val}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </header>

      {/* 2. Actionable Learning Paths */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-[3rem] p-10 shadow-2xl border border-slate-100">
            <div className="flex items-center gap-2 mb-8">
                <Target className="text-indigo-600" size={24} />
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Select Your Career Path</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: "Frontend Specialist", time: "6 Weeks", for: "Creative Developers", modules: "Foundations + React" },
                    { title: "Enterprise Architect", time: "14 Weeks", for: "Systems Engineering", modules: "Backend + Security" },
                    { title: "SaaS Builder Path", time: "18 Weeks", for: "Product Founders", modules: "Foundations + Integration" }
                ].map((path, i) => (
                    <button key={i} className="group text-left p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-slate-900 hover:text-white transition-all duration-300">
                        <h4 className="font-black text-lg mb-1">{path.title}</h4>
                        <p className="text-[10px] text-indigo-500 group-hover:text-indigo-300 font-bold mb-3 uppercase tracking-wider">{path.modules}</p>
                        <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest opacity-60">
                            <span>{path.time}</span>
                            <span>{path.for}</span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
      </section>

      {/* 3. Modular Course Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Modular Learning Pieces</h2>
              <p className="text-slate-500 mt-2">Pick the specific piece of the stack you need to master next.</p>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-[3rem] p-10 border border-slate-200 hover:border-indigo-500 hover:shadow-2xl transition-all flex flex-col md:flex-row gap-8 group relative overflow-hidden">
              
              {pkg.isTrending && (
                <div className="absolute top-4 -right-12 bg-orange-500 text-white text-[9px] font-black py-1 w-40 text-center rotate-45 uppercase tracking-tighter">
                    Most In-Demand
                </div>
              )}

              <div className="md:w-1/2 flex flex-col justify-between">
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 ${pkg.color} group-hover:bg-indigo-600 group-hover:text-white transition-all`}>
                    <pkg.icon size={32} />
                  </div>
                  <span className={`px-3 py-1 ${pkg.badge} ${pkg.color} rounded-lg text-[10px] font-black uppercase tracking-widest`}>
                    {pkg.level}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mt-4 mb-4">{pkg.name}</h3>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-slate-400">
                        <AlertCircle size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-wide">Req: <span className="text-slate-600">{pkg.prerequisites}</span></span>
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Primary Outcome</p>
                  <p className="text-sm font-bold text-slate-900">🎯 {pkg.outcome}</p>
                </div>
              </div>

              <div className="md:w-1/2 bg-slate-50 rounded-[2rem] p-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mastery Points</p>
                  {pkg.syllabus.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-600 text-xs font-bold">
                      <CheckCircle2 size={14} className="text-indigo-500" /> {item}
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6">
                  <span className="text-2xl font-black text-slate-900">{pkg.price}</span>
                  <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold text-xs hover:bg-indigo-600 transition-all">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. The Flagship Bundle */}
        <div className="mt-20 bg-gradient-to-br from-indigo-900 to-slate-950 rounded-[4rem] p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 text-indigo-400 font-black mb-4 uppercase tracking-widest text-xs">
                    <Star size={16} fill="currentColor"/> The Platinum Track
                </div>
                <h2 className="text-5xl md:text-6xl font-black mb-6">Full-Stack <br/> Job-Ready Track</h2>
                <div className="space-y-4 text-indigo-100 mb-8 font-medium">
                    <p>The complete end-to-end curriculum. Master the full lifecycle of a product—from the first line of CSS to a Dockerized cloud deployment.</p>
                    <div className="flex flex-wrap gap-4">
                      {["Vercel Cloud", "GitHub Portfolio", "System Design", "Placement Prep"].map((feat, i) => (
                        <span key={i} className="bg-white/10 px-3 py-1 rounded-lg text-xs font-bold border border-white/10">✓ {feat}</span>
                      ))}
                    </div>
                </div>
              </div>
              <div className="bg-white rounded-[3rem] p-10 text-slate-900 text-center shadow-3xl">
                <p className="text-slate-400 font-bold uppercase text-xs mb-2 tracking-widest">Total Value Bundle</p>
                <div className="text-6xl font-black text-slate-900 mb-2">₹9,999</div>
                <p className="text-emerald-600 text-xs font-bold mb-8 italic">Save 40% vs buying individual modules</p>
                <button className="w-full bg-indigo-600 text-white py-5 rounded-[2rem] font-black text-xl hover:scale-105 transition-all shadow-xl shadow-indigo-500/20">
                  Claim Job-Ready Track
                </button>
                <div className="mt-4 flex items-center justify-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                   <MessageSquare size={14} className="text-indigo-600"/> Includes 1:1 Mentorship Sessions
                </div>
              </div>
          </div>
          <Rocket size={400} className="absolute right-[-100px] bottom-[-100px] text-white/5 rotate-12" />
        </div>
      </section>
    </div>
  );
}

// Fixed Icon Component
const Coffee = ({ size, className }: { size: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" /><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" /><line x1="6" x2="6" y1="2" y2="4" /><line x1="10" x2="10" y1="2" y2="4" /><line x1="14" x2="14" y1="2" y2="4" />
  </svg>
);