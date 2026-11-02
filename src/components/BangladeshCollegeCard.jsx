import React from 'react';
import { Link } from 'react-router-dom';
import CollegePhoto from './CollegePhoto';
import { 
  MapPin, 
  ArrowRight, 
  Building2,
  ShieldCheck
} from 'lucide-react';

export default function BangladeshCollegeCard({ college }) {
  const isExclusive = Boolean(college.exclusivePartnerNote);

  return (
    <div className="group relative flex flex-col bg-[#FFFFFF] rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-xs hover:shadow-xl transition-all duration-400 ease-out transform hover:-translate-y-1.5 h-full">
      
      {/* 1. College Image */}
      <div className="relative h-56 sm:h-64 overflow-hidden bg-[#102A43]">
        <CollegePhoto
          college={college}
          className="absolute inset-0"
          imageClassName="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-600 ease-out"
        />
        {college.image && (
          <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/85 via-[#102A43]/20 to-transparent pointer-events-none" />
        )}

        {/* Exclusive Partner Badge (e.g. Monno Medical College) */}
        {isExclusive && (
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EE851B] text-white text-[11px] font-bold shadow-md uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Exclusive Partner</span>
            </span>
          </div>
        )}

        {/* Affiliation / Location Pill */}
        <div className="absolute bottom-3 left-3 right-3 z-10">
          <div className={`${college.image ? 'glass-dark border border-white/15' : 'bg-[#102A43]/90'} py-2 px-3 rounded-xl text-xs font-medium shadow-md flex items-center justify-between text-white`}>
            <div className="flex items-center gap-1.5 truncate">
              <MapPin className="w-3.5 h-3.5 text-[#EE851B] shrink-0" />
              <span className="truncate text-[11px] font-medium text-white/90">
                {college.location}
              </span>
            </div>
            {college.established && (
              <span className="text-[11px] text-white/75 shrink-0 ml-2 font-mono">
                Est. {college.established}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* 2. Card Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5 bg-[#FFFFFF]">
        <div className="space-y-4">
          
          {/* Header & Affiliation */}
          <div>
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              {college.affiliation && (
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#EEF4FF] text-[#0F559E] border border-[#0F559E]/15">
                  <Building2 className="w-3 h-3" />
                  <span>{college.affiliation}</span>
                </span>
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#102A43] tracking-tight font-display group-hover:text-[#0F559E] transition-colors leading-snug">
              {college.name}
            </h3>
          </div>

          {/* Key Facts Summary Grid */}
          <div className="grid grid-cols-2 gap-2.5 py-3 px-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]/80 text-xs">
            <div>
              <span className="text-[#5B6472] block text-[10px] uppercase font-semibold tracking-wider">
                Course Fee
              </span>
              <span className="font-bold text-[#0F559E] text-xs sm:text-sm mt-0.5 block leading-snug break-words">
                <span className="break-words leading-snug">{college.totalFee}</span>
              </span>
            </div>
            <div>
              <span className="text-[#5B6472] block text-[10px] uppercase font-semibold tracking-wider">
                Annual Seats
              </span>
              <span className="font-semibold text-[#102A43] text-xs sm:text-sm mt-0.5 block leading-snug break-words">
                <span className="break-words leading-snug">{college.seats}</span>
              </span>
            </div>
          </div>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed line-clamp-3 font-normal">
            {college.shortDescription}
          </p>
        </div>

        {/* 3. Action Button */}
        <div className="pt-2 border-t border-[#E2E8F0]">
          <Link
            to={`/study-mbbs-bangladesh/${college.slug}`}
            className="inline-flex items-center justify-between w-full h-11 px-4 rounded-xl bg-[#EEF4FF] hover:bg-[#0F559E] text-[#0F559E] hover:text-white text-xs font-semibold tracking-wide transition-all duration-300 ease-out group/btn"
          >
            <span>View Details</span>
            <ArrowRight className="w-4 h-4 transform transition-transform duration-300 ease-out group-hover/btn:translate-x-1" />
          </Link>
        </div>

      </div>
    </div>
  );
}

