import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';
import { companyData } from '../data/companyData';
import AsiaMap from './AsiaMap';

export default function CTASection({
  heading = "Your Medical Journey Starts With Doctor-Led Guidance.",
  paragraph = "Speak directly with doctors graduated from Dhaka University and experienced counselors. We guide you toward top medical colleges and scholarship opportunities in Bangladesh and beyond."
}) {
  return (
    <section className="relative overflow-hidden bg-[#102A43] text-white py-20 sm:py-28 my-16 sm:my-24 rounded-3xl mx-4 sm:mx-6 lg:mx-8 border border-white/10">
      {/* Subtle brand radial glow: #102A43 -> #0E4BA4 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#0E4BA4]/30 to-[#102A43]/10 blur-[100px] pointer-events-none" />

      {/* Asia Map Outline Illustration (traced 1:1 from official reference) */}
      <AsiaMap 
        variant="dark" 
        className="opacity-90 scale-105 pointer-events-none" 
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
        
        {/* Editorial Eyebrow with #FF914D Accent */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/[0.70] text-xs font-medium border border-white/15">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF914D]"></span>
          <a 
            href={companyData.mapUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-white transition-colors"
          >
            New Plaza, Putalisadak-29, Kathmandu • Always Open
          </a>
        </div>

        {/* Large Heading: #FFFFFF */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight max-w-2xl mx-auto font-display">
          {heading}
        </h2>

        {/* Short Supporting Paragraph: rgba(255,255,255,0.78) */}
        <p className="text-sm sm:text-base text-white/[0.78] leading-relaxed max-w-xl mx-auto font-normal">
          {paragraph}
        </p>

        {/* Buttons conforming to Dark-section CTA specifications */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center h-12 px-7 rounded-xl bg-[#FFFFFF] hover:bg-[#EEF4FF] text-[#0E4BA4] text-xs font-semibold tracking-wide transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm"
          >
            Talk to a Counselor
          </Link>

          <a
            href={companyData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-white/10 hover:bg-white/[0.16] text-[#FFFFFF] text-xs font-semibold tracking-wide border border-white/20 backdrop-blur-md transition-all duration-200"
          >
            <MessageSquare className="w-3.5 h-3.5 fill-current text-emerald-400" />
            <span>Connect on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
