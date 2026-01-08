import { 
  Code, Database, Shield, Brain, Globe, Cpu, Layout, Terminal,
  LucideIcon 
} from 'lucide-react';

export interface Course {
  id: number;
  title: string;
  slug: string; // Added for routing
  tech: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  description: string; // Added for page content
}

export const COURSES: Course[] = [
  { 
    id: 1, 
    title: "Frontend Pro", 
    slug: "frontend",
    tech: "HTML, CSS, React, Angular", 
    icon: Layout, 
    color: "text-blue-500", 
    bg: "bg-blue-50",
    description: "Master the art of building beautiful, responsive user interfaces."
  },
  { 
    id: 2, 
    title: "Backend Systems", 
    slug: "backend",
    tech: "Java, Spring Boot, MySQL", 
    icon: Database, 
    color: "text-purple-600", 
    bg: "bg-purple-50",
    description: "Build robust server-side logic and scalable microservices."
  },
  { 
    id: 3, 
    title: "Intelligence", 
    slug: "ai",
    tech: "Python, AI & Machine Learning", 
    icon: Brain, 
    color: "text-indigo-500", 
    bg: "bg-indigo-50",
    description: "Dive into data science, neural networks, and AI automation."
  },
  { 
    id: 4, 
    title: "Security", 
    slug: "security",
    tech: "Cybersecurity & Networking", 
    icon: Shield, 
    color: "text-red-500", 
    bg: "bg-red-50",
    description: "Protect systems and learn the fundamentals of ethical hacking."
  },
  { 
    id: 5, 
    title: "Core Logic", 
    slug: "dsa",
    tech: "DSA & Advanced Algorithms", 
    icon: Terminal, 
    color: "text-emerald-500", 
    bg: "bg-emerald-50",
    description: "Sharpen your problem-solving skills for top-tier interviews."
  },
  { 
    id: 6, 
    title: "Full Stack", 
    slug: "full-stack",
    tech: "TypeScript & MongoDB", 
    icon: Cpu, 
    color: "text-orange-500", 
    bg: "bg-orange-50",
    description: "Connect the dots between frontend and backend to build complete apps."
  },
];