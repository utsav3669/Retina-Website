import React from 'react';
import { MessageSquare, Phone, MapPin, Mail, ExternalLink, Navigation } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { companyData } from '../data/companyData';
import { HeroFadeIn, ScrollReveal } from '../components/MotionReveal';
import { FacebookIcon, InstagramIcon, TikTokIcon, GoogleMapsIcon } from '../components/SocialIcons';

export default function ContactPage() {
  return (
    <div className="py-10 sm:py-14 lg:py-16 bg-[#FFFFFF]">
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

            {/* Direct WhatsApp Action Buttons */}
            <HeroFadeIn delay={0.16} y={10}>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                <a
                  href={companyData.phones[0].whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 h-12 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold tracking-wide transition-all duration-300 ease-out shadow-xs hover:shadow-md transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp ({companyData.phones[0].number})</span>
                </a>
              </div>
            </HeroFadeIn>

            {/* Clean Contact Information */}
            <HeroFadeIn delay={0.24} y={10}>
              <div className="space-y-6 pt-6 border-t border-[#E2E8F0]">
                
                {/* Organization & Location */}
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-[#5B6472] uppercase tracking-wider">
                    Organization &amp; Address
                  </div>
                  <div className="text-base font-bold text-[#102A43]">
                    {companyData.name}
                  </div>
                  <div className="text-sm text-[#5B6472]">
                    <a
                      href={companyData.location.googleMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#0E4BA4] transition-colors inline-block"
                    >
                      {companyData.location.fullAddress}
                    </a>
                  </div>
                  <div className="text-xs text-[#0E4BA4] pt-0.5">
                    <a 
                      href={companyData.location.directionsUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline font-medium inline-flex items-center gap-1.5"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#0E4BA4]" />
                      <span>Get Directions on Google Maps →</span>
                    </a>
                  </div>
                </div>

                {/* Telephone / Direct Lines */}
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-[#5B6472] uppercase tracking-wider">
                    Phone &amp; WhatsApp Contacts
                  </div>

                  {/* Landline */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    <div className="flex items-center gap-2.5">
                      <Phone className="w-4 h-4 text-[#0E4BA4] shrink-0" />
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-[#5B6472] block font-semibold">
                          Landline
                        </span>
                        <a
                          href={companyData.landline.tel}
                          className="text-sm font-bold text-[#102A43] hover:text-[#0E4BA4] transition-colors font-mono"
                        >
                          {companyData.landline.number}
                        </a>
                      </div>
                    </div>
                    <a
                      href={companyData.landline.tel}
                      className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white border border-[#E2E8F0] text-[#0E4BA4] hover:bg-[#EEF4FF] transition-colors"
                    >
                      Call
                    </a>
                  </div>

                  {/* Call / WhatsApp Numbers */}
                  {companyData.phones.map((phone, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                      <div className="flex items-center gap-2.5">
                        <Phone className="w-4 h-4 text-[#0E4BA4] shrink-0" />
                        <div>
                          <span className="text-[11px] uppercase tracking-wider text-[#5B6472] block font-semibold">
                            {phone.label}
                          </span>
                          <a
                            href={phone.tel}
                            className="text-sm font-bold text-[#102A43] hover:text-[#0E4BA4] transition-colors font-mono"
                          >
                            {phone.number}
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <a
                          href={phone.tel}
                          className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white border border-[#E2E8F0] text-[#0E4BA4] hover:bg-[#EEF4FF] transition-colors"
                          title={`Call ${phone.number}`}
                        >
                          Call
                        </a>
                        <a
                          href={phone.whatsappUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 hover:bg-emerald-100 transition-colors flex items-center gap-1"
                          title={`Chat on WhatsApp: ${phone.number}`}
                        >
                          <MessageSquare className="w-3 h-3 fill-current" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  ))}

                  {/* WhatsApp Only (Bangladesh) - No regular calling link */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/80">
                    <div className="flex items-center gap-2.5">
                      <MessageSquare className="w-4 h-4 text-emerald-600 fill-current shrink-0" />
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-emerald-800 block font-semibold">
                          {companyData.whatsappOnly.label} (Bangladesh Support)
                        </span>
                        <span className="text-sm font-bold text-[#102A43] font-mono">
                          {companyData.whatsappOnly.number}
                        </span>
                      </div>
                    </div>
                    <a
                      href={companyData.whatsappOnly.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold px-3 py-1 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition-colors flex items-center gap-1 shadow-2xs"
                    >
                      <MessageSquare className="w-3 h-3 fill-current" />
                      <span>Chat</span>
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-[#5B6472] uppercase tracking-wider">
                    Email Address
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#0E4BA4]" />
                    <a
                      href={`mailto:${companyData.email}`}
                      className="text-sm font-bold text-[#102A43] hover:text-[#0E4BA4] transition-colors duration-300"
                    >
                      {companyData.email}
                    </a>
                  </div>
                </div>

                {/* Hours & Rating */}
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-[#5B6472] uppercase tracking-wider">
                    Office Status &amp; In-Person Consultations
                  </div>
                  <div className="text-sm font-medium text-emerald-600">
                    Always Open
                  </div>
                  <div className="text-xs text-[#5B6472]">
                    100% recommend (13 reviews) • 39K followers • Walk-ins welcomed
                  </div>
                </div>

                {/* Social Media Links: Facebook, Instagram, TikTok, Google Maps */}
                <div className="space-y-2.5 pt-2 border-t border-[#E2E8F0]">
                  <div className="text-xs font-semibold text-[#5B6472] uppercase tracking-wider">
                    Follow &amp; Find Us On Social Media
                  </div>
                  <div className="flex flex-wrap items-center gap-2.5">
                    {/* Facebook */}
                    <a
                      href={companyData.socials.facebook.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={companyData.socials.facebook.ariaLabel}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#F8FAFC] hover:bg-[#EEF4FF] text-[#102A43] hover:text-[#0E4BA4] border border-[#E2E8F0] transition-all text-xs font-semibold group"
                    >
                      <FacebookIcon className="w-4 h-4 text-[#1877F2] group-hover:scale-110 transition-transform" />
                      <span>Facebook</span>
                    </a>

                    {/* Instagram */}
                    <a
                      href={companyData.socials.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={companyData.socials.instagram.ariaLabel}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#F8FAFC] hover:bg-[#EEF4FF] text-[#102A43] hover:text-[#0E4BA4] border border-[#E2E8F0] transition-all text-xs font-semibold group"
                    >
                      <InstagramIcon className="w-4 h-4 text-pink-600 group-hover:scale-110 transition-transform" />
                      <span>Instagram</span>
                    </a>

                    {/* TikTok */}
                    <a
                      href={companyData.socials.tiktok.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={companyData.socials.tiktok.ariaLabel}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#F8FAFC] hover:bg-[#EEF4FF] text-[#102A43] hover:text-[#0E4BA4] border border-[#E2E8F0] transition-all text-xs font-semibold group"
                    >
                      <TikTokIcon className="w-4 h-4 text-black group-hover:scale-110 transition-transform" />
                      <span>TikTok</span>
                    </a>

                    {/* Google Maps */}
                    <a
                      href={companyData.socials.googleMaps.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={companyData.socials.googleMaps.ariaLabel}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-[#F8FAFC] hover:bg-[#EEF4FF] text-[#102A43] hover:text-[#0E4BA4] border border-[#E2E8F0] transition-all text-xs font-semibold group"
                    >
                      <GoogleMapsIcon className="w-4 h-4 text-[#EA4335] group-hover:scale-110 transition-transform" />
                      <span>Google Maps</span>
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

        {/* 2. RESPONSIVE GOOGLE MAPS EMBED SECTION (Below Contact Information) */}
        <div className="mt-14 sm:mt-18 pt-10 border-t border-[#E2E8F0]">
          <ScrollReveal y={14}>
            <div className="bg-[#FFFFFF] rounded-2xl sm:rounded-3xl border border-[#E2E8F0] p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold tracking-wider uppercase text-[#0E4BA4]">
                      OUR HEAD OFFICE LOCATION
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight font-display">
                    Visit Retina at Putalisadak
                  </h2>
                  <p className="text-xs sm:text-sm text-[#5B6472]">
                    {companyData.location.fullAddress} • In front of New Plaza Road
                  </p>
                </div>

                <div className="shrink-0 flex items-center gap-3">
                  <a
                    href={companyData.location.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 h-11 px-5 rounded-xl bg-[#0E4BA4] hover:bg-[#0A3B82] text-white text-xs font-semibold tracking-wide transition-all duration-300 shadow-xs hover:shadow-md transform hover:-translate-y-0.5"
                  >
                    <Navigation className="w-4 h-4" />
                    <span>Get Directions</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>
                  <a
                    href={companyData.location.googleMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 h-11 px-4 rounded-xl bg-[#F8FAFC] hover:bg-[#EEF4FF] text-[#102A43] border border-[#E2E8F0] text-xs font-semibold transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-[#EA4335]" />
                    <span>Open in Maps</span>
                  </a>
                </div>
              </div>

              {/* Responsive Google Maps Embed with rounded corners */}
              <div className="w-full h-80 sm:h-96 rounded-xl sm:rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-inner bg-[#F1F5F9]">
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
          </ScrollReveal>
        </div>

      </div>
    </div>
  );
}
