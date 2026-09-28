import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CardProgressMotif } from './AbstractElements';

export default function CourseCard({ course }) {
  const isIelts = course.id === 'ielts';

  const glassPill = isIelts 
    ? '4 Core Skills • Practice & Weekly Mocks' 
    : 'Integrated Skills • AI-Scored Lab Practice';

  const skillHighlights = isIelts
    ? ['Listening & Reading Comprehension', 'Academic Writing Task 1 & 2', 'One-on-One Speaking Confidence', 'Free Full-Length Saturday Mocks']
    : ['Speech Fluency & Pronunciation Algorithms', 'High-Weight Dictation & Blanks Practice', 'Partitioned Audio-Workstation Drills', 'Real-Time Pearson AI Score Reports'];

  return (
    <div className="group relative flex flex-col bg-[#FFFFFF] rounded-3xl overflow-hidden border border-[#E2E6EC] shadow-xs hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1">
      {/* 1. Large Image with subtle zoom and single frosted glass panel */}
      <div className="relative h-64 sm:h-72 overflow-hidden bg-[#0B2F6B]">
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F6B]/80 via-transparent to-transparent" />

        {/* Exactly One Small Dark Glass Information Panel (Dark Glassmorphism Rule) */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <div className="glass-dark py-2.5 px-4 rounded-xl text-xs font-medium border border-white/15 shadow-md flex items-center justify-between">
            <span className="font-semibold text-[#FFFFFF]">
              {isIelts ? 'IELTS Academic' : 'PTE Academic'}
            </span>
            <span className="text-white/[0.80] text-[11px]">
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
              <span className="text-xs font-semibold uppercase tracking-wider text-[#164B9B]">
                {isIelts ? 'Test Preparation' : 'Computer-Based Prep'}
              </span>
              <CardProgressMotif className="opacity-70 group-hover:opacity-100 transition-opacity" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight font-display">
              {course.name}
            </h3>
          </div>

          <p className="text-sm text-[#667085] leading-relaxed font-normal">
            {course.description}
          </p>

          {/* Minimal Key Focus Points */}
          <div className="pt-4 border-t border-[#E2E6EC]">
            <ul className="space-y-2.5">
              {skillHighlights.map((skill, idx) => (
                <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#172033]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#164B9B]"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 3. Refined CTA Button (#E21F26 for main action) */}
        <div>
          <Link
            to={`/courses/${course.slug}`}
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-[#E21F26] hover:bg-[#B91C24] text-white text-xs font-semibold tracking-wide transition-all duration-200 transform hover:-translate-y-0.5 shadow-xs hover:shadow-md"
          >
            <span>Explore {course.shortName}</span>
            <ArrowRight className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
