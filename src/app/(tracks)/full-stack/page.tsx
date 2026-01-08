import { Layers, Rocket, CheckCircle2, Server, Layout, Database, ShieldCheck, Share2, MessageSquare, Zap } from "lucide-react";

export default function FullStackPage() {
  const packages = [
    { 
      id: 1, name: "Full-Stack Foundations", level: "Beginner", price: "₹1,999", 
      syllabus: ["Web Fundamentals", "HTML5 & CSS3", "JS Basics", "Git & GitHub"],
      outcome: "Static Responsive Website", icon: Layout, color: "text-blue-500", badge: "bg-blue-100"
    },
    { 
      id: 3, name: "Backend Java Developer", level: "Beginner → Intermediate", price: "₹3,999", 
      syllabus: ["Core Java", "OOPs", "JDBC & MySQL", "Spring Boot Basics"],
      outcome: "Java Backend REST API", icon: Coffee, color: "text-orange-500", badge: "bg-orange-100"
    },
    { 
      id: 6, name: "Secure Backend & APIs", level: "Advanced", price: "₹2,499", 
      syllabus: ["Spring Security", "JWT Auth", "Role-based Access", "Logging"],
      outcome: "Auth-enabled Backend API", icon: ShieldCheck, color: "text-red-500", badge: "bg-red-100"
    },
    { 
      id: 7, name: "Integration & Deployment", level: "Advanced", price: "₹1,999", 
      syllabus: ["Frontend + Backend Sync", "Docker Basics", "Vercel & Cloud Deployment"],
      outcome: "Deployed Full-Stack Product", icon: Share2, color: "text-emerald-500", badge: "bg-emerald-100"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      
      
      {/* Hero Section */}
      <header className="bg-ayvan-dark py-24 px-6 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-2 mb-6 text-ayvan-primary">
              <Layers size={24} />
              <span className="font-bold tracking-widest text-xs uppercase">Complete Engineering</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
              One Stack. <br />
              <span className="text-ayvan-primary">One Roadmap.</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-xl leading-relaxed">
              Master the art of building complete products. From React interfaces to 
              secure Java backends. Stop learning in isolation—start integrating.
            </p>
          </div>
          <div className="lg:w-1/2 bg-white/5 border border-white/10 p-8 rounded-[3rem] backdrop-blur-sm">
             <h3 className="text-sm font-bold text-ayvan-primary uppercase tracking-widest mb-6">The Ayvan Tech Stack</h3>
             <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Frontend", val: "React + Tailwind", icon: Layout },
                  { label: "Backend", val: "Java + Spring Boot", icon: Server },
                  { label: "Database", val: "MySQL", icon: Database },
                  { label: "Auth", val: "JWT / Security", icon: ShieldCheck },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-2xl">
                    <item.icon size={18} className="text-ayvan-primary mb-2"/>
                    <p className="text-[10px] text-slate-500 font-bold uppercase">{item.label}</p>
                    <p className="text-sm font-bold">{item.val}</p>
                  </div>
                ))}
             </div>
             <p className="mt-6 text-center text-xs text-slate-500 font-bold italic">“Job-ready. Period.”</p>
          </div>
        </div>
      </header>

      {/* Modular Course Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex items-end justify-between mb-12">
           <div>
              <h2 className="text-3xl font-black text-slate-900">Modular Path</h2>
              <p className="text-slate-500 mt-2">Pick the piece of the stack you're missing.</p>
           </div>
           <div className="hidden md:block bg-ayvan-light px-4 py-2 rounded-xl text-ayvan-primary text-xs font-bold">
             <Zap size={14} className="inline mr-2"/> Modular Mentorship Enabled
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-[3rem] p-10 border border-slate-200 hover:border-ayvan-primary hover:shadow-2xl transition-all flex flex-col md:flex-row gap-8 group">
              <div className="md:w-1/2">
                <div className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 ${pkg.color} group-hover:bg-ayvan-primary group-hover:text-white transition-all`}>
                  <pkg.icon size={32} />
                </div>
                <span className={`px-3 py-1 ${pkg.badge} ${pkg.color} rounded-lg text-[10px] font-black uppercase tracking-widest`}>
                  {pkg.level}
                </span>
                <h3 className="text-2xl font-black text-slate-900 mt-4 mb-4">{pkg.name}</h3>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Outcome</p>
                <p className="text-sm font-bold text-ayvan-dark">🎯 {pkg.outcome}</p>
              </div>

              <div className="md:w-1/2 bg-slate-50 rounded-[2rem] p-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Syllabus</p>
                  {pkg.syllabus.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-slate-600 text-xs font-bold">
                      <CheckCircle2 size={14} className="text-ayvan-primary" /> {item}
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6">
                  <span className="text-2xl font-black text-slate-900">{pkg.price}</span>
                  <button className="bg-ayvan-primary text-white px-6 py-2.5 rounded-xl font-bold text-xs hover:scale-105 transition-transform">
                    Buy Module
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Big Bundle: Package 8 */}
        <div className="mt-20 bg-gradient-to-br from-ayvan-primary to-indigo-900 rounded-[4rem] p-12 text-white relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-5xl md:text-6xl font-black mb-6">Full-Stack <br/> Job-Ready Track</h2>
                <div className="space-y-4 text-indigo-100 mb-8 font-medium">
                   <p>The complete end-to-end curriculum including Frontend, Backend, Database, Auth, and Integration.</p>
                   <div className="flex flex-wrap gap-4">
                      {["Vercel", "GitHub Portfolio", "Mock Interviews", "Resume Prep"].map((feat, i) => (
                        <span key={i} className="bg-white/10 px-3 py-1 rounded-lg text-xs font-bold">✓ {feat}</span>
                      ))}
                   </div>
                </div>
             </div>
             <div className="bg-white rounded-[3rem] p-10 text-slate-900 text-center shadow-3xl">
                <p className="text-slate-400 font-bold uppercase text-xs mb-2">The Ultimate Career Bundle</p>
                <div className="text-6xl font-black text-ayvan-dark mb-2">₹9,999</div>
                <p className="text-emerald-600 text-xs font-bold mb-8">All 7 Individual Packages Included</p>
                <button className="w-full bg-ayvan-primary text-white py-5 rounded-[2rem] font-black text-xl hover:shadow-xl transition-all">
                  Claim Job-Ready Track
                </button>
                <div className="mt-4 flex items-center justify-center gap-2 text-slate-400 font-bold text-[10px] uppercase tracking-widest">
                   <MessageSquare size={14}/> Includes 1:1 Mentorship Sessions
                </div>
             </div>
          </div>
          <Rocket size={400} className="absolute right-[-100px] bottom-[-100px] text-white/5 rotate-12" />
        </div>
      </section>
    </div>
  );
}

const Coffee = ({ size, className }: { size: number, className: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" /><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" /><line x1="6" x2="6" y1="2" y2="4" /><line x1="10" x2="10" y1="2" y2="4" /><line x1="14" x2="14" y1="2" y2="4" />
  </svg>
);