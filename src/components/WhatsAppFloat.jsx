import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip on desktop */}
      {showTooltip && (
        <div className="hidden md:flex items-center gap-2 bg-[#102A43] text-[#FFFFFF] text-xs font-medium py-2 px-3.5 rounded-full shadow-lg border border-white/20 animate-fade-in">
          <span>Need medical admission guidance?</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setShowTooltip(false);
            }}
            aria-label="Dismiss advice tooltip"
            className="text-white/[0.70] hover:text-[#FFFFFF] transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Button */}
      <a
        href={companyData.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Retina Educational Consultancy on WhatsApp"
        className="group relative flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-3 md:px-5 rounded-full shadow-xl shadow-emerald-500/30 hover:shadow-emerald-600/40 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
      >
        <span className="relative flex h-5 w-5 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-60"></span>
          <MessageCircle className="relative w-5 h-5 fill-current" />
        </span>
        <span className="hidden md:inline text-sm font-semibold tracking-wide">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
