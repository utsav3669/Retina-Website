import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Official Brand Logo Component for StudyHub Int'l Education Pvt. Ltd.
 * Uses the exact uploaded StudyHub PNG brand asset without modification,
 * preserving original proportions, typography, colors, and transparency.
 */
export default function Logo({ className = '', variant = 'navbar' }) {
  // Desktop: ~145-155px, Tablet: ~125-135px, Mobile: ~105-115px
  const sizeClass = variant === 'footer' 
    ? 'w-[130px] sm:w-[145px]' 
    : 'w-[110px] sm:w-[130px] md:w-[145px] lg:w-[155px]';

  return (
    <Link
      to="/"
      className={`inline-flex items-center focus:outline-none transition-opacity duration-200 hover:opacity-85 ${className}`}
      aria-label="Studyhub International Educational Pvt. Ltd. Home"
    >
      <img
        src="/images/studyhub-logo.png"
        alt="Studyhub International Educational Pvt. Ltd."
        className={`${sizeClass} h-auto object-contain select-none`}
        loading="eager"
        decoding="sync"
      />
    </Link>
  );
}
