import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    tracks: [
      { name: "Frontend Mastery", href: "/frontend" },
      { name: "Backend Engineering", href: "/backend" },
      { name: "DSA & Logic", href: "/dsa" },
      { name: "AI & Machine Learning", href: "/ai" },
      { name: "Cybersecurity", href: "/security" },
      { name: "Full-Stack Track", href: "/full-stack" },
    ],
    platform: [
      { name: "Mentors", href: "/mentors" },
      { name: "How it Works", href: "/about" },
      { name: "Success Stories", href: "#" },
      { name: "Become a Mentor", href: "#" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Refund Policy", href: "#" },
    ]
  };

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Identity */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-ayvan-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
                A
              </div>
              <span className="text-xl font-black text-ayvan-dark tracking-tighter uppercase">Ayvan</span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 max-w-xs">
              Modular technical education designed for the modern engineer. 
              Master architecture, not just syntax.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-ayvan-primary transition-colors"><Github size={18} /></a>
              <a href="#" className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-ayvan-primary transition-colors"><Twitter size={18} /></a>
              <a href="#" className="p-2 bg-slate-50 rounded-lg text-slate-400 hover:text-ayvan-primary transition-colors"><Linkedin size={18} /></a>
            </div>
          </div>

          {/* Quick Links: Tracks */}
          <div>
            <h4 className="text-xs font-black text-ayvan-dark uppercase tracking-widest mb-6">Learning Tracks</h4>
            <ul className="space-y-4">
              {links.tracks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-ayvan-primary transition-colors flex items-center group">
                    {link.name} <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links: Platform */}
          <div>
            <h4 className="text-xs font-black text-ayvan-dark uppercase tracking-widest mb-6">Platform</h4>
            <ul className="space-y-4">
              {links.platform.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-slate-500 hover:text-ayvan-primary transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h4 className="text-xs font-black text-ayvan-dark uppercase tracking-widest mb-6">Stay Updated</h4>
            <p className="text-xs text-slate-400 mb-4 font-medium">Get notified about new modules and workshops.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-slate-50 border border-slate-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-ayvan-primary transition-colors"
              />
              <button className="absolute right-2 top-2 p-1.5 bg-ayvan-primary text-white rounded-lg hover:bg-indigo-700 transition-colors">
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-slate-400 font-medium">
            © {currentYear} Ayvan Education. All rights reserved.
          </p>
          <div className="flex gap-8">
            {links.legal.map((link) => (
              <Link key={link.name} href={link.href} className="text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-ayvan-dark transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}