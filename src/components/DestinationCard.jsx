import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CardRouteArc } from './AbstractElements';

export default function DestinationCard({ destination }) {
  return (
    <Link
      to={`/destinations/${destination.slug}`}
      className="group relative flex flex-col justify-end h-[380px] sm:h-[420px] rounded-3xl overflow-hidden bg-[#0B2F6B] transition-all duration-400 ease-out transform hover:-translate-y-1.5 shadow-xs hover:shadow-xl"
    >
      {/* Subtle micro route arc motif */}
      <div className="absolute top-5 right-5 z-10 opacity-60 group-hover:opacity-95 transition-opacity duration-300">
        <CardRouteArc />
      </div>

      {/* 1. Large Dominant Image with gentle 1.03x scaling on hover */}
      <img
        src={destination.image}
        alt={`Study in ${destination.name}`}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-600 ease-out"
      />

      {/* 2. Soft Dark Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F6B]/95 via-[#0B2F6B]/40 to-transparent opacity-85 group-hover:opacity-92 transition-opacity duration-400" />

      {/* 3. Minimal Content: Country Name, Description, Arrow */}
      <div className="relative z-10 p-7 sm:p-8 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-xl" role="img" aria-label={destination.name}>
              {destination.flag}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight transform transition-transform duration-300 ease-out group-hover:-translate-y-0.5 font-display">
              {destination.name}
            </h3>
          </div>

          <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#FFFFFF] transition-all duration-300 ease-out group-hover:bg-[#E21F26] group-hover:border-[#E21F26]">
            <ArrowRight className="w-4 h-4 transform transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
          </div>
        </div>

        <p className="text-xs sm:text-sm text-white/[0.80] font-normal leading-relaxed line-clamp-2 max-w-sm">
          {destination.tagline}
        </p>

        <div className="pt-2 flex items-center gap-1.5 text-xs font-semibold text-white/[0.80] group-hover:text-[#E21F26] transition-colors duration-300 ease-out">
          <span>Explore</span>
          <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-300 ease-out group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
