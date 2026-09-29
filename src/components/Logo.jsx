import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Official Brand Logo Component for Retina Educational Consultancy Pvt. Ltd.
 * Displays the verified Retina brand identity:
 * RETINA EDUCATIONAL CONSULTANCY PVT. LTD.
 */
export default function Logo({ className = '', variant = 'navbar' }) {
  const sizeClass = variant === 'footer' 
    ? 'h-9 sm:h-10 w-auto' 
    : 'h-10 sm:h-12 md:h-13 w-auto';

  return (
    <Link
      to="/"
      className={`inline-flex items-center focus:outline-none transition-opacity duration-200 hover:opacity-90 ${className}`}
      aria-label="Retina Educational Consultancy Pvt. Ltd. Home"
    >
      <img
        src="/images/retina-logo.png"
        alt="Retina Educational Consultancy Pvt. Ltd."
        className={`${sizeClass} object-contain select-none`}
        loading="eager"
        decoding="sync"
      />
    </Link>
  );
}

