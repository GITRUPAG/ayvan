"use client";

import React from "react";
import { ShieldCheck, Lock, Globe, Terminal, Activity, FileText, Zap, Clock, Target, ArrowRight, Star, Layers } from "lucide-react";

export default function SecurityPage() {
  const packages = [
    { 
      id: 1, name: "Cybersecurity Foundations", level: "Beginner", price: "₹1,199", 
      duration: "2 Weeks", bestFor: "Students and non-tech professionals.",
      syllabus: ["CIA Triad", "Phishing & Ransomware", "Security Principles"],
      outcome: "Ideal for Beginners / Non-tech", icon: ShieldCheck, color: "text-blue-500", badge: "bg-blue-100"
    },
    { 
      id: 2, name: "Networking for Security", level: "Beginner → Intermediate", price: "₹1,299", 
      duration: "3 Weeks", bestFor: "Anyone aiming for SOC or Network Admin roles.",
      syllabus: ["OSI & TCP/IP", "Subnetting", "Firewalls & Proxies", "DNS/HTTP/HTTPS"],
      outcome: "Foundational for SOC roles", icon: Globe, color: "text-indigo-500", badge: "bg-indigo-100"
    },
    { 
      id: 5, name: "Web Application Security", level: "Intermediate", price: "₹1,499", 
      duration: "4 Weeks", bestFor: "Developers wanting to build unhackable apps.",
      syllabus: ["OWASP Top 10", "SQL Injection", "XSS & CSRF", "Secure Coding"],
      outcome: "Vulnerable App Analysis Project", icon: Zap, color: "text-yellow-600", badge: "bg-yellow-100"
    },
    { 
      id: 8, name: "Governance, Risk & Compliance", level: "Intermediate", price: "₹1,299", 
      duration: "2 Weeks", bestFor: "Management students & audit aspirants.",
      syllabus: ["NIST CSF & RMF", "ISO 27001", "GDPR/HIPAA", "Security Policies"],
      outcome: "GRC & Compliance Analyst roles", icon: FileText, color: "text-emerald-500", badge: "bg-emerald-100"
    },
    { 
      id: 9, name: "SOC Analyst Fundamentals", level: "Intermediate → Advanced", price: "₹1,999", 
      duration: "4 Weeks", bestFor: "Engineers ready to enter Defense Operations.",
      syllabus: ["SIEM Basics", "Log Analysis", "Incident Detection", "Threat Intelligence"],
      outcome: "SOC Analyst job readiness", icon: Activity, color: "text-red-500", badge: "bg-red-100"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* 1. Security Hero */}
      <header className="bg-slate-900 py-24 px-6 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
          <div className="md:w-2/3">
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
              The Defense <span className="text-emerald-400">Academy.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
              "Master the Defense, Not just the Tools." Ayvan’s modular security track 
              takes you from the CIA triad to SOC Analyst labs with 1:1 expert guidance.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-64 h-64 border-2 border-emerald-500/20 rounded-full flex items-center justify-center animate-pulse">
               <Lock className="text-emerald-400" size={80} />
            </div>
          </div>
        </div>
      </header>

      {/* 2. RECOMMENDED PATHS: Choice Reduction */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-[3rem] p-10 shadow-2xl border border-slate-100">
            <div className="flex items-center gap-2 mb-8">
                <Target className="text-emerald-600" size={24} />
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Select Your Career Objective</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: "SOC Analyst Career Path", time: "16 Weeks", for: "Final Year / Freshers" },
                    { title: "AppSec Specialist Path", time: "10 Weeks", for: "Web Developers" },
                    { title: "GRC Consultant Path", time: "8 Weeks", for: "Career Switchers" }
                ].map((path, i) => (
                    <div key={i} className="group p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-slate-900 hover:text-white transition-all duration-300 cursor-pointer">
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
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden border border-emerald-500/30 shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-emerald-400 font-black mb-6">
                <Star size={20} fill="currentColor" /> ⭐ HIGHEST PLACEMENT RATE
              </div>
              <h2 className="text-5xl font-black mb-6 tracking-tighter">Cybersecurity <br/> Job-Ready Track</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                The complete defense arsenal. Covers Networking, Web Security, SIEM, and SOC operations. 
                Includes hands-on virtual labs and private 1:1 sessions with industry CISOs.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-8">
                  <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Duration</p>
                      <p className="text-2xl font-black text-emerald-400">18 Weeks</p>
                  </div>
                  <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Includes</p>
                      <p className="text-2xl font-black">All Modules + Labs</p>
                  </div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] text-slate-900 text-center shadow-2xl">
               <div className="mb-6">
                  <span className="text-slate-400 line-through text-xl mr-3">₹14,999</span>
                  <span className="text-6xl font-black">₹7,999</span>
               </div>
               <button className="w-full bg-emerald-500 text-slate-900 py-5 rounded-2xl font-black text-xl hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-500/20 mb-4">
                  Enroll in Full Track
               </button>
               <p className="text-slate-400 text-xs font-medium italic">30-Day Money Back • Lifetime Access</p>
            </div>
          </div>
          <Activity size={400} className="absolute right-[-100px] bottom-[-100px] text-emerald-500/5 rotate-12" />
        </div>
      </section>

      {/* 4. Modular Packages Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 mb-12">
            <Layers className="text-emerald-500" size={24} />
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Select Individual Modules</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-[2.5rem] p-8 border border-slate-200 hover:shadow-2xl hover:border-emerald-500/30 transition-all group flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl bg-slate-50 ${pkg.color} group-hover:scale-110 transition-transform`}>
                    <pkg.icon size={28} />
                  </div>
                  <div className="text-right flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1.5 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                        <Clock size={12} /> {pkg.duration}
                    </div>
                    <span className={`px-3 py-1 ${pkg.badge} ${pkg.color} rounded-lg text-[10px] font-black uppercase tracking-widest`}>
                        {pkg.level}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-2">{pkg.name}</h3>
                
                {/* BEST FOR BADGE */}
                <div className="mb-6 py-3 px-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">Best For:</p>
                    <p className="text-xs font-bold text-slate-600 leading-tight">{pkg.bestFor}</p>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Mastery Area</p>
                  {pkg.syllabus.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-900 mb-4">🎯 {pkg.outcome}</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-slate-900">{pkg.price}</span>
                  <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-emerald-600 transition-colors">
                    Access Lab
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