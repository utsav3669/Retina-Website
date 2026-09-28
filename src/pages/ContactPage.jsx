import React from 'react';
import { 
  MessageSquare 
} from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { companyData } from '../data/companyData';

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
        
        {/* Modern Split Layout (Section 133) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Heading, Paragraph, Contact info, WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#164B9B]">
                GET IN TOUCH
              </span>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#172033] tracking-tight leading-tight font-display">
                Let's Talk About Your Next Step.
              </h1>
              <p className="text-base text-[#667085] leading-relaxed font-normal">
                Have questions about IELTS, PTE preparation, or exploring international universities? Connect directly with our certified counselors and language instructors in Bhairahawa.
              </p>
            </div>

            {/* Direct WhatsApp Action Button */}
            <div>
              <a
                href={companyData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 h-13 px-7 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold tracking-wide transition-all duration-200 shadow-xs hover:shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp ({companyData.whatsappNumber})</span>
              </a>
            </div>

            {/* Clean Contact Information */}
            <div className="space-y-6 pt-6 border-t border-[#E2E6EC]">
              
              {/* Location */}
              <div className="space-y-1">
                <div className="text-xs font-semibold text-[#98A2B3] uppercase tracking-wider">
                  Campus Location
                </div>
                <div className="text-sm font-bold text-[#172033]">
                  {companyData.location.fullAddress}
                </div>
                <div className="text-xs text-[#667085]">
                  Directly opposite to Mahalakshmi Bank on Narayan Path.
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-1">
                <div className="text-xs font-semibold text-[#98A2B3] uppercase tracking-wider">
                  Direct Phone
                </div>
                <a
                  href={`tel:${companyData.phone}`}
                  className="text-base font-bold text-[#172033] hover:text-[#164B9B] transition-colors font-mono"
                >
                  {companyData.phone}
                </a>
              </div>

              {/* Hours */}
              <div className="space-y-1">
                <div className="text-xs font-semibold text-[#98A2B3] uppercase tracking-wider">
                  Office Hours
                </div>
                <div className="text-sm text-[#172033]">
                  Sunday – Friday: 7:00 AM – 6:00 PM
                </div>
                <div className="text-xs text-[#667085]">
                  Saturday: Free Diagnostic Tests & Mock Exams (8:00 AM – 2:00 PM)
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-semibold text-[#98A2B3] uppercase tracking-wider">
                  Social Channels
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={companyData.socials.instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#667085] hover:text-[#164B9B] transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4 text-pink-600" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={companyData.socials.tiktok.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#667085] hover:text-[#164B9B] transition-colors"
                  >
                    <span className="font-bold text-[#172033]">♪</span>
                    <span>TikTok</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT: Clean Minimal Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
}
