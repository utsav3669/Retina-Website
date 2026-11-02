import React from 'react';
import { Building2 } from 'lucide-react';

export default function CollegePhoto({ college, className = '', imageClassName = '' }) {
  if (!college.image) {
    return (
      <div
        className={`flex items-center justify-center bg-[#EAF0F6] text-[#5B6472] ${className}`}
        role="img"
        aria-label={`Authentic campus photograph for ${college.name} is awaiting verification`}
      >
        <div className="flex max-w-xs flex-col items-center gap-2 px-6 text-center">
          <Building2 className="h-8 w-8 text-[#0F559E]/65" aria-hidden="true" />
          <span className="text-xs font-medium leading-relaxed">Authentic campus photograph awaiting verification</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={college.image}
      alt={college.imageAlt || college.name}
      loading="lazy"
      className={imageClassName}
    />
  );
}
