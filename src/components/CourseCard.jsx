import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CardProgressMotif } from './AbstractElements';

export default function CourseCard({ course }) {
  const glassPill = course.mockTests || 'Doctor-Led Guidance • Top Colleges';

  const skillHighlights = course.modules?.[0]?.skills?.slice(0, 4) || [
    'Top Medical Colleges in Bangladesh & Abroad',
    'Scholarship Opportunities & Quota Guidance',
    '15+ Years of Experienced Counselor Support',
    'Doctor-Led Guidance by Dhaka University Alumni'
  ];

  return (
    <div className="group relative flex flex-col bg-[#FFFFFF] rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-xs hover:shadow-xl transition-all duration-400 ease-out transform hover:-translate-y-1.5">
      {/* 1. Large Image with gentle 1.03x scaling and frosted glass pill */}
      <div className="relative h-64 sm:h-72 overflow-hidden bg-[#102A43]">
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-600 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/80 via-transparent to-transparent" />

        {/* Small Dark Glass Information Panel */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <div className="glass-dark py-2.5 px-4 rounded-xl text-xs font-medium border border-white/15 shadow-md flex items-center justify-between">
            <span className="font-semibold text-[#FFFFFF]">
              {course.shortName}
            </span>
            <span className="text-white/[0.80] text-[11px] truncate max-w-[200px]">
              {glassPill}
            </span>
          </div>
        </div>
      </div>

      {/* 2. Editorial Content with generous whitespace */}
      <div className="p-8 sm:p-10 flex-1 flex flex-col justify-between space-y-8 bg-[#FFFFFF]">
        <div className="space-y-4">
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0E4BA4]">
                {course.badge || 'Medical Education Program'}
              </span>
              <CardProgressMotif className="opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight font-display">
              {course.name}
            </h3>
          </div>

          <p className="text-sm text-[#5B6472] leading-relaxed font-normal">
            {course.description}
          </p>

          {/* Minimal Key Focus Points */}
          <div className="pt-4 border-t border-[#E2E8F0]">
            <ul className="space-y-2.5">
              {skillHighlights.map((skill, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#102A43]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0E4BA4]"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3. Refined CTA Button with smooth hover transition */}
        <div>
          <Link
            to={`/courses/${course.slug}`}
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-[#0E4BA4] hover:bg-[#0A3B82] text-white text-xs font-semibold tracking-wide transition-all duration-300 ease-out transform hover:-translate-y-0.5 shadow-xs hover:shadow-md"
          >
            <span>Explore {course.shortName}</span>
            <ArrowRight className="w-4 h-4 transform transition-transform duration-300 ease-out group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
