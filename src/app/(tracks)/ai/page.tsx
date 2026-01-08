"use client";

import React, { useState } from 'react';
import { Brain, Cpu, BarChart3, Binary, Sparkles, Database, Send, MessageSquare, Microscope, Clock, Target, Star, Layers, AlertCircle } from "lucide-react";

export default function AIPage() {
  const packages = [
    { 
      id: 1, name: "AI Foundations & Python", level: "Beginner", price: "₹1,299", 
      duration: "3 Weeks", bestFor: "Non-programmers starting from scratch.",
      prerequisites: "None (Fresh Start)",
      syllabus: ["ML vs DL vs AI", "Python for AI", "NumPy Basics", "Data Handling"],
      outcome: "Strong foundation for AI learning", icon: Binary, color: "text-blue-500", badge: "bg-blue-100"
    },
    { 
      id: 3, name: "Data Analysis & Viz", level: "Beginner → Intermediate", price: "₹1,499", 
      duration: "3 Weeks", bestFor: "Aspiring Data Analysts and BI roles.",
      prerequisites: "Basic Python Syntax",
      syllabus: ["Pandas Data Cleaning", "Matplotlib & Seaborn", "EDA Techniques", "Handling Missing Data"],
      outcome: "Project: Data Analysis Report", icon: BarChart3, color: "text-indigo-500", badge: "bg-indigo-100"
    },
    { 
      id: 4, name: "Machine Learning (Core)", level: "Intermediate", price: "₹2,499", 
      duration: "5 Weeks", bestFor: "Developers wanting to master predictive math.",
      prerequisites: "Python & Basic Statistics",
      isTrending: true,
      syllabus: ["Regression & Classification", "Scikit-Learn", "Model Evaluation", "Supervised Learning"],
      outcome: "Project: ML Prediction Model", icon: Brain, color: "text-purple-600", badge: "bg-purple-100"
    },
    { 
      id: 6, name: "Deep Learning", level: "Advanced", price: "₹2,499", 
      duration: "4 Weeks", bestFor: "Engineers focusing on Computer Vision.",
      prerequisites: "Core Machine Learning",
      syllabus: ["Neural Networks", "TensorFlow/Keras", "CNN Basics", "Image Classification"],
      outcome: "Project: Image Classification App", icon: Cpu, color: "text-red-500", badge: "bg-red-100"
    },
    { 
      id: 8, name: "Generative AI Models", level: "Advanced / Trending", price: "₹2,499", 
      duration: "3 Weeks", bestFor: "Modern devs building RAG & LLM apps.",
      prerequisites: "Python & API Basics",
      isTrending: true,
      syllabus: ["Prompt Engineering", "LLM Fundamentals", "OpenAI/LangChain", "RAG Systems"],
      outcome: "Project: AI Chatbot / Assistant", icon: Sparkles, color: "text-orange-500", badge: "bg-orange-100"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      
      {/* 1. AI Hero Section */}
      <header className="bg-slate-900 py-24 px-6 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-6 text-indigo-400">
            <Microscope size={24} />
            <span className="font-bold tracking-[0.3em] text-xs uppercase">Intelligence Track</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
            Think. <span className="text-indigo-500">Automate.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            Move beyond simple scripts. Master the math and models behind modern AI. 
            Choose specific modules from Data Viz to Generative AI with 1:1 mentorship.
          </p>
        </div>
        <Sparkles className="absolute right-[-5%] top-1/2 -translate-y-1/2 w-96 h-96 text-white/5 animate-pulse" />
      </header>

      {/* 2. CAREER PATHS (Actionable) */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="bg-white rounded-[3rem] p-10 shadow-2xl border border-slate-100">
            <div className="flex items-center gap-2 mb-8">
                <Target className="text-indigo-600" size={24} />
                <h2 className="text-2xl font-black text-slate-900 tracking-tight">Select Your Intelligence Path</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: "Data Analyst Path", time: "6 Weeks", for: "Career Starters", modules: "Foundations + Data Viz" },
                    { title: "ML Engineer Path", time: "12 Weeks", for: "Software Developers", modules: "Foundations + ML + DL" },
                    { title: "GenAI Specialist Path", time: "8 Weeks", for: "Product Builders", modules: "Foundations + GenAI" }
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

      {/* 3. FLAGSHIP TRACK */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-indigo-900 to-slate-950 rounded-[4rem] p-10 md:p-16 text-white relative overflow-hidden border border-white/10 shadow-2xl">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-indigo-400 font-black mb-6">
                <Star size={20} fill="currentColor" /> ⭐ HIGHEST ROI TRACK
              </div>
              <h2 className="text-5xl font-black mb-6 tracking-tighter">AI & ML <br/> Job-Ready Track</h2>
              <p className="text-indigo-200 text-lg mb-8 leading-relaxed">
                The complete masterclass. Covers Python, Math, ML, Deep Learning, and RAG-based Generative AI. 
                Includes model deployment and 3 industry-grade portfolio projects.
              </p>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 mb-8">
                  <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Duration</p>
                      <p className="text-2xl font-black text-indigo-400">24 Weeks</p>
                  </div>
                  <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Target</p>
                      <p className="text-2xl font-black">Applied AI Engineer</p>
                  </div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[3rem] text-slate-900 text-center shadow-3xl">
               <div className="mb-6">
                  <span className="text-slate-400 line-through text-xl mr-3">₹15,999</span>
                  <span className="text-6xl font-black text-slate-900">₹8,999</span>
               </div>
               <button className="w-full bg-indigo-600 text-white py-5 rounded-[2rem] font-black text-xl hover:scale-105 transition-all shadow-xl shadow-indigo-200 mb-4">
                  Begin My AI Career
               </button>
               <p className="text-slate-400 text-xs font-medium italic">30-Day Mentorship Access Included</p>
            </div>
          </div>
          <Cpu size={400} className="absolute right-[-100px] bottom-[-100px] text-indigo-500/10 rotate-12" />
        </div>
      </section>

      {/* 4. Modular Packages Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center gap-2 mb-12">
            <Layers className="text-indigo-600" size={24} />
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Specialized AI Modules</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-[2.5rem] p-8 border border-slate-200 hover:shadow-2xl hover:border-indigo-500/30 transition-all group flex flex-col justify-between relative overflow-hidden">
              
              {pkg.isTrending && (
                <div className="absolute top-4 -right-12 bg-orange-500 text-white text-[9px] font-black py-1 w-40 text-center rotate-45 uppercase tracking-tighter">
                    Most In-Demand
                </div>
              )}

              <div>
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-4 rounded-2xl bg-slate-50 ${pkg.color} group-hover:bg-indigo-600 group-hover:text-white transition-all`}>
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

                <h3 className="text-2xl font-black text-slate-900 mb-2">{pkg.name}</h3>

                <div className="mb-6 space-y-3">
                    <div className="py-2 px-3 bg-slate-50 rounded-xl border border-slate-100">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 italic">Best For:</p>
                        <p className="text-xs font-bold text-slate-600 leading-tight">{pkg.bestFor}</p>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 px-3">
                        <AlertCircle size={14} />
                        <span className="text-[10px] font-bold uppercase tracking-wide">Prerequisite: <span className="text-slate-600">{pkg.prerequisites}</span></span>
                    </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Syllabus Highlights</p>
                  {pkg.syllabus.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-slate-600 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <p className="text-xs font-bold text-slate-400 mb-6 flex items-center gap-2 italic">
                  <Send size={14} className="text-indigo-600" /> {pkg.outcome}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-black text-slate-900">{pkg.price}</span>
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