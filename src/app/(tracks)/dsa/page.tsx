"use client";

import React from "react";
import { CheckCircle2, Terminal, Code2, Brain, Activity, Zap, MessageSquare, Trophy, Clock, Target, ArrowRight, Star, Layers, AlertCircle } from "lucide-react";

export default function DSAPage() {
  const packages = [
    { 
      id: 1, name: "Programming Logic Foundations", level: "Beginner", color: "text-emerald-500", badge: "bg-emerald-100", price: "₹999", 
      duration: "2 Weeks", bestFor: "Absolute beginners struggling to write even basic loops.",
      prerequisites: "None (Fresh Start)",
      syllabus: ["Flowcharts & Pseudo code", "Pattern Problems", "Palindrome/Prime/Armstrong", "Loop-based Logic"],
      outcome: "50+ Logic Problems solved", icon: Brain
    },
    { 
      id: 2, name: "Arrays & Strings Mastery", level: "Beginner → Intermediate", color: "text-yellow-600", badge: "bg-yellow-100", price: "₹1,199", 
      duration: "3 Weeks", bestFor: "Cracking service-based and entry product rounds.",
      prerequisites: "Basic Variable & Loop knowledge",
      isTrending: true,
      syllabus: ["Sliding Window", "Two Pointers", "Prefix Sum", "Anagram & Palindrome"],
      outcome: "70+ Interview Problems", icon: Code2
    },
    { 
      id: 3, name: "Recursion & Backtracking", level: "Intermediate", color: "text-yellow-600", badge: "bg-yellow-100", price: "₹999", 
      duration: "2 Weeks", bestFor: "Devs who find recursive thinking difficult.",
      prerequisites: "Comfort with Arrays & Loops",
      syllabus: ["Stack Memory", "Subsets & Permutations", "N-Queens", "Sudoku Solver"],
      outcome: "30+ Recursive Problems", icon: Activity
    },
    { 
      id: 8, name: "Trees & Binary Trees", level: "Intermediate → Advanced", color: "text-red-500", badge: "bg-red-100", price: "₹1,499", 
      duration: "3 Weeks", bestFor: "Aspirants targeting Product-based companies.",
      prerequisites: "Recursion Foundations",
      isTrending: true,
      syllabus: ["Tree Traversal", "LCA", "Binary Search Tree", "Tree Views"],
      outcome: "40+ Tree Problems", icon: Zap
    },
    { 
      id: 10, name: "Dynamic Programming (DP)", level: "Advanced", color: "text-red-500", badge: "bg-red-100", price: "₹1,699", 
      duration: "4 Weeks", bestFor: "Final prep for MAANG/Tier-1 startup roles.",
      prerequisites: "Recursion Mastery",
      syllabus: ["Memoization vs Tabulation", "Knapsack", "LIS/LCS", "Matrix DP"],
      outcome: "40+ DP Hard Problems", icon: Terminal
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* 1. Header Section */}
      <header className="bg-slate-900 py-24 px-6 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-6xl md:text-7xl font-black mb-6 tracking-tighter italic">
            Core <span className="text-emerald-400">Logic</span> & DSA
          </h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-2xl font-bold text-slate-300 italic mb-4">
            “DSA is about thinking, not memorizing.”
          </p>
          <p className="text-slate-400 max-w-xl mx-auto leading-relaxed">
            Stop mugging up LeetCode solutions. Master the underlying patterns 
            of data structures with 1:1 mental model coaching.
          </p>
        </div>
        <Terminal className="absolute left-[-50px] bottom-[-50px] w-96 h-96 text-white/5" />
      </header>

      {/* 2. ACTIONABLE PATHS */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-[3rem] p-10 shadow-2xl border border-slate-100">
            <div className="flex items-center gap-2 mb-8">
                <Target className="text-emerald-600" size={24} />
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Select Your Learning Path</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: "Logic Foundation Path", time: "4 Weeks", for: "1st & 2nd Year Students", includes: "Logic + Arrays" },
                    { title: "Standard Interview Path", time: "10 Weeks", for: "Service Company Prep", includes: "Arrays + Trees + Strings" },
                    { title: "Product Mastery Path", time: "16 Weeks", for: "Tier-1 / MAANG Prep", includes: "Recursion + Trees + DP" }
                ].map((path, i) => (
                    <button key={i} className="group text-left p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-slate-900 hover:text-white transition-all duration-300">
                        <h4 className="font-black text-lg mb-1">{path.title}</h4>
                        <p className="text-[10px] text-emerald-500 group-hover:text-emerald-300 font-bold mb-3 uppercase tracking-wider">{path.includes}</p>
                        <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest opacity-60">
                            <span>{path.time}</span>
                            <span>{path.for}</span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
      </section>

      {/* 3. FLAGSHIP PRODUCT */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-emerald-600 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl shadow-emerald-200">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 bg-white/20 inline-block px-4 py-1 rounded-full text-[10px] font-black mb-6 uppercase tracking-widest">
                <Star size={14} fill="currentColor" /> ⭐ Most Recommended for Placements
              </div>
              <h2 className="text-5xl font-black mb-6 tracking-tighter">DSA Job-Ready Track</h2>
              <p className="text-emerald-50 text-lg mb-8 leading-relaxed">
                "Don't just solve problems, learn to see the patterns." Master the entire spectrum of DSA. 
                Includes 300+ handpicked problems, live doubt sessions, and 1:1 strategy calls.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mt-8">
                  <div className="flex items-center gap-2 font-bold"><Clock size={20}/> 20 Weeks</div>
                  <div className="flex items-center gap-2 font-bold"><Trophy size={20}/> 5 Mock Interviews</div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[2.5rem] text-slate-900 text-center shadow-2xl">
               <div className="mb-6">
                  <span className="text-slate-400 line-through text-xl mr-3">₹12,999</span>
                  <span className="text-6xl font-black text-emerald-600">₹6,999</span>
               </div>
               <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-xl mb-4">
                  Unlock Full Track
               </button>
               <p className="text-slate-400 text-xs font-medium italic">Includes 1:1 Mental Model Coaching</p>
            </div>
          </div>
          <Code2 size={400} className="absolute right-[-100px] bottom-[-100px] text-white/10 rotate-12" />
        </div>
      </section>

      {/* 4. Modular Packages Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 mb-12">
            <Layers className="text-emerald-600" size={24} />
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Individual Focus Modules</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-[2rem] p-8 border border-slate-200 hover:shadow-2xl hover:border-emerald-500/20 transition-all flex flex-col justify-between group relative overflow-hidden">
              
              {pkg.isTrending && (
                <div className="absolute top-4 -right-12 bg-orange-500 text-white text-[9px] font-black py-1 w-40 text-center rotate-45 uppercase tracking-tighter">
                    High Demand
                </div>
              )}

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-xl bg-slate-50 ${pkg.color} group-hover:scale-110 transition-transform`}>
                    <pkg.icon size={24} />
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
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Master These Patterns</p>
                  {pkg.syllabus.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-slate-500 text-sm font-medium">
                      <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-400 mb-4 flex items-center gap-2 italic">
                    <Trophy size={14} className="text-emerald-500"/> {pkg.outcome}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-slate-900">{pkg.price}</span>
                  <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-emerald-600 transition-colors">
                    Start Solving
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