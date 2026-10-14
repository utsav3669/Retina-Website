import React from 'react';
import { MapPin, Navigation, ExternalLink, Phone, MessageSquare, Clock } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function OfficeMapSection() {
  return (
    <section 
      aria-label="Office Location Map"
      className="relative overflow-hidden bg-[#102A43] text-white p-5 sm:p-7 lg:p-8 my-4 sm:my-6 lg:my-8 rounded-3xl mx-4 sm:mx-6 lg:mx-8 border border-white/10 shadow-xl"
    >
      {/* Subtle brand radial glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-gradient-to-br from-[#0E4BA4]/25 to-transparent blur-[100px] pointer-events-none -z-0" />

      <div className="relative z-10">
        
        {/* Header: Badge, Heading, Address, and Action Buttons */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-4 sm:mb-5">
          <div className="space-y-2">
            
            {/* Eyebrow Badge with #FF914D Accent */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-white/[0.80] text-xs font-medium border border-white/15">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF914D]"></span>
              <span>HEAD OFFICE LOCATION • KATHMANDU</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FFFFFF] tracking-tight font-display">
              Retina Educational Consultancy
            </h2>

            <p className="text-xs sm:text-sm text-white/[0.78] max-w-xl font-normal leading-relaxed">
              {companyData.location.fullAddress} • In front of New Plaza Road
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-white/[0.65]">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-white/[0.60]" />
                <span>Always Open (24/7)</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-white/[0.60]" />
                <a href={companyData.landline.tel} className="hover:text-white transition-colors">
                  {companyData.landline.number}
                </a>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                <a 
                  href={companyData.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-emerald-300 transition-colors text-emerald-400 font-medium"
                >
                  WhatsApp: +977-9804880051
                </a>
              </div>
            </div>

          </div>

          {/* Action Buttons: Get Directions & Open in Google Maps */}
          <div className="shrink-0 flex flex-wrap items-center gap-3">
            <a
              href={companyData.location.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-[#FFFFFF] hover:bg-[#EEF4FF] text-[#0E4BA4] text-xs font-semibold tracking-wide transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70" />
            </a>

            <a
              href={companyData.location.googleMapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-white/10 hover:bg-white/[0.18] text-[#FFFFFF] text-xs font-semibold tracking-wide border border-white/20 backdrop-blur-md transition-all duration-300"
            >
              <MapPin className="w-4 h-4 text-[#FF914D]" />
              <span>Open in Google Maps</span>
            </a>
          </div>
        </div>

        {/* Responsive Google Maps Embed with Rounded Corners */}
        <div className="w-full h-80 sm:h-96 lg:h-[420px] rounded-2xl overflow-hidden border border-white/15 shadow-inner bg-[#1A365D]">
          <iframe
            title="Retina Educational Consultancy Location Map"
            src={companyData.location.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
          />
        </div>

      </div>
    </section>
  );
}
