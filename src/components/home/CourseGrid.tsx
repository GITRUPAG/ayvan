import React from 'react';
import Link from 'next/link'; // Import Link for navigation
import { COURSES } from '@/app/constants';

export default function CourseGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-sm font-bold text-ayvan-primary uppercase tracking-widest mb-2">Explore Tracks</h2>
            <p className="text-4xl font-black text-ayvan-dark">Our Popular Courses</p>
          </div>
          <button className="hidden md:block text-gray-400 font-bold hover:text-ayvan-primary transition border-b-2 border-transparent hover:border-ayvan-primary">
            Browse All Courses →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            /* Wrap the card in a Link using the course.slug */
            <Link href={`/${course.slug}`} key={course.id} className="block">
              <div className="group p-8 h-full rounded-3xl bg-ayvan-light border border-transparent hover:border-slate-200 hover:bg-white hover:shadow-2xl transition-all duration-300 cursor-pointer">
                
                {/* Icon Container */}
                <div className={`w-14 h-14 ${course.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <course.icon className={course.color} size={28} />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-ayvan-dark mb-2 group-hover:text-ayvan-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {course.description}
                </p>
                
                {/* Action Link */}
                <div className="text-ayvan-primary font-bold text-sm flex items-center gap-2">
                  View Sub-Modules 
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}