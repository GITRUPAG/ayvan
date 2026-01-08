"use client";

import React from "react";
import { CheckCircle2, Database, Coffee, Server, ShieldCheck, Zap, Box, Clock, Target, Star, Layers, AlertCircle, Send } from "lucide-react";

export default function BackendPage() {
  const packages = [
    { 
      id: 1, name: "Core Java Foundations", level: "Beginner", price: "₹1,199", 
      duration: "2 Weeks", bestFor: "Absolute beginners or those weak in logic.",
      prerequisites: "None (Fresh Start)",
      syllabus: ["JVM Architecture", "Memory (Stack vs Heap)", "Loops & Arrays", "Methods"],
      outcome: "Logic building problems", icon: Coffee, color: "text-orange-500"
    },
    { 
      id: 2, name: "OOPs in Java", level: "Beginner → Intermediate", price: "₹999", 
      duration: "2 Weeks", bestFor: "Students wanting to master system design basics.",
      prerequisites: "Basic Java Syntax",
      syllabus: ["Classes & Objects", "Polymorphism", "Abstraction", "Interfaces"],
      outcome: "Console-based Java app", icon: Box, color: "text-blue-500"
    },
    { 
      id: 3, name: "Core Java Advanced", level: "Intermediate", price: "₹1,299", 
      duration: "3 Weeks", bestFor: "Developers preping for complex enterprise logic.",
      prerequisites: "OOPs Fundamentals",
      syllabus: ["Multithreading", "Exception Handling", "File Handling", "Lambda & Streams"],
      outcome: "File-based Java application", icon: Zap, color: "text-yellow-600"
    },
    { 
      id: 4, name: "Java Collections Mastery", level: "Intermediate", price: "₹1,499", 
      duration: "2 Weeks", bestFor: "Interview prep & high-performance coding.",
      prerequisites: "Core Java Foundations",
      isBestseller: true,
      syllabus: ["Internal working of HashMaps", "Comparable vs Comparator", "Complexity Analysis"],
      outcome: "Data-driven Java app", icon: Database, color: "text-purple-600"
    },
    { 
      id: 5, name: "JDBC & DB Integration", level: "Intermediate", price: "₹1,299", 
      duration: "2 Weeks", bestFor: "Freshers learning how apps talk to data.",
      prerequisites: "Core Java + SQL Basics",
      syllabus: ["MySQL Integration", "CRUD Operations", "SQL Injection Prevention"],
      outcome: "User Management System", icon: Database, color: "text-emerald-500"
    },
    { 
      id: 6, name: "Spring Boot Fundamentals", level: "Intermediate → Advanced", price: "₹2,499", 
      duration: "4 Weeks", bestFor: "Engineers aiming for high-paying product roles.",
      prerequisites: "Java Collections & OOPs",
      isTrending: true,
      syllabus: ["REST APIs", "Maven", "Dependency Injection", "Project Structure"],
      outcome: "RESTful Backend Application", icon: Server, color: "text-green-600"
    },
    { 
      id: 7, name: "Spring Boot + JPA", level: "Advanced", price: "₹1,999", 
      duration: "3 Weeks", bestFor: "Developers mastering enterprise data mapping.",
      prerequisites: "Spring Boot Fundamentals",
      syllabus: ["Hibernate ORM", "Entity Mapping", "Relationships", "Pagination"],
      outcome: "Database-driven REST API", icon: Database, color: "text-indigo-600"
    },
    { 
      id: 8, name: "Spring Security & Auth", level: "Advanced", price: "₹1,999", 
      duration: "2 Weeks", bestFor: "Security-conscious backend architects.",
      prerequisites: "Spring Boot & JPA",
      isTrending: true,
      syllabus: ["JWT Authentication", "Role-based Access", "Password Encoding"],
      outcome: "Auth-enabled API", icon: ShieldCheck, color: "text-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* 1. Dynamic Header */}
      <header className="bg-slate-900 py-24 px-6 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-4">
             <Coffee className="text-indigo-400" size={32} />
             <span className="font-bold tracking-widest text-sm uppercase text-indigo-300">Backend Engineering</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">
            Java Backend <span className="text-indigo-500">Architect.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            "Master the Architecture, Not just the Syntax." From JVM internals to production-grade Microservices with 1:1 mentorship.
          </p>
        </div>
        <div className="absolute right-[-10%] top-[-10%] opacity-5">
            <Server size={500} />
        </div>
      </header>

      {/* 2. ACTIONABLE CAREER PATHS */}
      <section className="max-w-6xl mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-[3rem] p-10 shadow-2xl border border-slate-100">
            <div className="flex items-center gap-2 mb-8">
                <Target className="text-indigo-600" size={24} />
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Curated Learning Paths</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: "Java Foundation Path", time: "4 Weeks", for: "College Freshers", modules: "Java Foundations + OOPs" },
                    { title: "Enterprise Backend Path", time: "12 Weeks", for: "Job Seekers", modules: "Collections + Spring + JPA" },
                    { title: "Security Specialist Path", time: "5 Weeks", for: "Working Devs", modules: "Spring Boot + Security" }
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

      {/* 3. FLAGSHIP PRODUCT: THE JOB-READY TRACK */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-slate-900 rounded-[4rem] p-10 md:p-16 text-white relative overflow-hidden border border-slate-800 shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 font-black mb-6">
                <Star size={20} fill="currentColor" /> ⭐ MOST POPULAR TRACK
              </div>
              <h2 className="text-5xl font-black mb-6 tracking-tighter italic">Java Backend <br/> Job-Ready Track</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                The ultimate end-to-end bundle. Master JVM, Spring Boot, Microservices, Docker, and Production Deployment. Includes professional resume review and placement prep.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-8">
                  <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Duration</p>
                      <p className="text-2xl font-black">20 Weeks</p>
                  </div>
                  <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Target Role</p>
                      <p className="text-2xl font-black text-indigo-400">Backend Developer</p>
                  </div>
              </div>
            </div>
            <div className="bg-slate-800/50 p-10 rounded-[2.5rem] border border-slate-700 backdrop-blur-sm text-center">
               <div className="mb-6">
                  <span className="text-slate-500 line-through text-xl mr-3">₹15,999</span>
                  <span className="text-6xl font-black text-white">₹7,999</span>
               </div>
               <button className="w-full bg-indigo-600 text-white py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl shadow-indigo-900/40 mb-4">
                  Start My Track
               </button>
               <p className="text-slate-500 text-xs font-medium italic">Includes 1:1 Mentor Support • Lifetime Access</p>
            </div>
          </div>
          <Server size={400} className="absolute right-[-100px] bottom-[-100px] text-white/5 rotate-12" />
        </div>
      </section>

      {/* 4. Modular Packages Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 mb-12">
            <Layers className="text-indigo-600" size={24} />
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Backend Learning Modules</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-[2.5rem] p-8 border border-slate-200 hover:shadow-2xl hover:border-indigo-500/20 transition-all group relative overflow-hidden flex flex-col justify-between">
              
              {(pkg.isTrending || pkg.isBestseller) && (
                <div className={`absolute top-4 -right-12 ${pkg.isTrending ? 'bg-orange-500' : 'bg-indigo-600'} text-white text-[9px] font-black py-1 w-40 text-center rotate-45 uppercase tracking-tighter`}>
                    {pkg.isTrending ? "Most In-Demand" : "Bestseller"}
                </div>
              )}

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-4 rounded-2xl bg-slate-50 ${pkg.color} group-hover:scale-110 transition-transform`}>
                    <pkg.icon size={28} />
                  </div>
                  <div className="text-right flex flex-col items-end gap-2">
                    <div className="flex items-center gap-1.5 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                        <Clock size={12} /> {pkg.duration}
                    </div>
                    <span className="px-3 py-1 bg-slate-100 text-slate-500 rounded-full text-[10px] font-black uppercase tracking-widest">
                        {pkg.level}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-black text-slate-900 mb-2">{pkg.name}</h3>

                <div className="mb-6 space-y-3">
                    <div className="py-3 px-4 bg-slate-50 rounded-2xl border border-slate-100">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">Best For:</p>
                        <p className="text-xs font-bold text-slate-600 leading-tight">{pkg.bestFor}</p>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 px-3">
                        <AlertCircle size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-wide">Prerequisite: <span className="text-slate-600">{pkg.prerequisites}</span></span>
                    </div>
                </div>
                
                <div className="space-y-3 mb-8">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Core Syllabus</p>
                  {pkg.syllabus.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                      <CheckCircle2 size={16} className="text-indigo-500" /> {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Project:</span>
                  <span className="text-sm font-bold text-slate-900">🎯 {pkg.outcome}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-3xl font-black text-slate-900">{pkg.price}</span>
                    <p className="text-[10px] font-bold text-slate-400 uppercase">Includes 1:1 Mentor Support</p>
                  </div>
                  <button className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-bold hover:bg-indigo-600 transition-all shadow-lg">
                    Join Module
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