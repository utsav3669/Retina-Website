import React from 'react';
import { MessageSquare } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { companyData } from '../data/companyData';
import { HeroFadeIn, ScrollReveal } from '../components/MotionReveal';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-20 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Heading, Paragraph, Contact info, WhatsApp CTA with soft entrance */}
          <div className="lg:col-span-5 space-y-8">
            
            <HeroFadeIn delay={0.06} y={10}>
              <div className="space-y-4">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#0E4BA4]">
                  GET IN TOUCH
                </span>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-[#102A43] tracking-tight leading-tight font-display">
                  Let's Talk About Your Medical Future.
                </h1>
                <p className="text-base text-[#5B6472] leading-relaxed font-normal">
                  Have questions about MBBS, BDS, B.Sc. Nursing, MD/MS admissions abroad, or free CEE form fill-up? Connect directly with our doctor counselors and experienced advisors at our Putalisadak office.
                </p>
              </div>
            </HeroFadeIn>

            {/* Direct WhatsApp Action Button */}
            <HeroFadeIn delay={0.16} y={10}>
              <div>
                <a
                  href={companyData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 h-13 px-7 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold tracking-wide transition-all duration-300 ease-out shadow-xs hover:shadow-md transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp ({companyData.whatsappNumber})</span>
                </a>
              </div>
            </HeroFadeIn>

            {/* Clean Contact Information */}
            <HeroFadeIn delay={0.24} y={10}>
              <div className="space-y-6 pt-6 border-t border-[#E2E8F0]">
                
                {/* Location */}
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-[#5B6472] uppercase tracking-wider">
                    Office Location
                  </div>
                  <div className="text-sm font-bold text-[#102A43]">
                    {companyData.location.fullAddress}
                  </div>
                  <div className="text-xs text-[#0E4BA4] mt-1">
                    <a 
                      href={companyData.location.googleMapUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline font-medium inline-flex items-center gap-1"
                    >
                      <span>Our Accurate Google Map Location →</span>
                    </a>
                  </div>
                </div>

                {/* Phones */}
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-[#5B6472] uppercase tracking-wider">
                    Direct Phone Numbers
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <a
                      href="tel:014547423"
                      className="text-base font-bold text-[#102A43] hover:text-[#0E4BA4] transition-colors duration-300 font-mono"
                    >
                      01-4547423
                    </a>
                    <a
                      href={companyData.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-[#102A43] hover:text-[#0E4BA4] transition-colors duration-300 font-mono flex items-center gap-2"
                    >
                      <span>{companyData.whatsappNumber}</span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-[#5B6472] uppercase tracking-wider">
                    Email Address
                  </div>
                  <a
                    href={`mailto:${companyData.email}`}
                    className="text-sm font-bold text-[#102A43] hover:text-[#0E4BA4] transition-colors duration-300"
                  >
                    {companyData.email}
                  </a>
                </div>

                {/* Hours & Rating */}
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-[#5B6472] uppercase tracking-wider">
                    Status & Reviews
                  </div>
                  <div className="text-sm font-medium text-emerald-600">
                    Always Open
                  </div>
                  <div className="text-xs text-[#5B6472]">
                    100% recommend (13 reviews) • 39K followers
                  </div>
                </div>

                {/* Social Channels */}
                <div className="space-y-2 pt-2">
                  <div className="text-xs font-semibold text-[#5B6472] uppercase tracking-wider">
                    Official Social Profile
                  </div>
                  <div className="flex items-center gap-4">
                    <a
                      href={companyData.socials.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[#5B6472] hover:text-[#0E4BA4] transition-colors duration-300"
                    >
                      <InstagramIcon className="w-4 h-4 text-pink-600" />
                      <span>{companyData.socials.instagram.handle}</span>
                    </a>
                  </div>
                </div>

              </div>
            </HeroFadeIn>

          </div>

          {/* RIGHT: Clean Minimal Form */}
          <div className="lg:col-span-7">
            <ScrollReveal y={14} delay={0.12}>
              <ContactForm />
            </ScrollReveal>
          </div>

        </div>

      </div>
    </div>
  );
}
