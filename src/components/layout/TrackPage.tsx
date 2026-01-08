import React from 'react';
import Navbar from './Navbar';
import { Target, UserCheck, CreditCard } from 'lucide-react';

interface Module {
  name: string;
  price: string;
  duration: string;
}

export default function TrackPage({ title, description, modules, color }: any) {
  return (
    <div className="min-h-screen bg-ayvan-light">
      <Navbar />
      <header className={`py-20 px-6 ${color} text-white`}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-black mb-6">{title}</h1>
          <p className="text-xl opacity-90 max-w-2xl">{description}</p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-ayvan-dark">Enroll in Sub-Modules</h2>
        <div className="grid gap-6">
          {modules.map((m: Module, i: number) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex justify-between items-center hover:shadow-md transition">
              <div>
                <h3 className="text-xl font-bold">{m.name}</h3>
                <p className="text-gray-500 text-sm">{m.duration} • 1:1 Mentoring Included</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-black text-ayvan-primary mb-2">{m.price}</div>
                <button className="bg-ayvan-primary text-white px-6 py-2 rounded-xl font-bold text-sm">Enroll Now</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}