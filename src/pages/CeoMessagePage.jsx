import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  MessageSquare, 
  PhoneCall, 
  Award, 
  CheckCircle2,
  GraduationCap
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';
import { companyData } from '../data/companyData';
import { ScrollReveal } from '../components/MotionReveal';

export default function CeoMessagePage() {
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    document.title = "Message from Our MD | Retina Educational Consultancy";
  }, []);

  const breadcrumbs = [
    { label: 'Message from Our MD' }
  ];

  return (
    <div className="space-y-0 bg-[#FFFFFF]">
      {/* Editorial Page Header */}
      <PageHeader
        badge="Leadership & Vision"
        title="Message from Our MD"
        subtitle="A personal message to aspiring doctors and scholars embarking on international medical education journeys from our Managing Director."
        breadcrumbs={breadcrumbs}
      />

      {/* Main Editorial Content Container */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Left Column: CEO Portrait & Credentials */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <ScrollReveal y={12}>
              <div className="bg-[#FFFFFF] rounded-2xl sm:rounded-3xl border border-[#E2E8F0] p-4 sm:p-5 shadow-xs">
                
                {/* Portrait Image Container */}
                <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-[#EEF4FF] aspect-[4/5] border border-[#E2E8F0]">
                  <img
                    src="/images/ceo-dr-saroj-sah.jpg"
                    alt="Dr. Saroj Sah - Managing Director, Retina Educational Consultancy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out hover:scale-102"
                    loading="eager"
                  />
                  {/* Subtle Doctor-Led Badge Overlay */}
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0E4BA4] text-xs font-semibold shadow-xs border border-white/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF914D]" />
                    <span>Doctor-Led Leadership</span>
                  </div>
                </div>

                {/* Name & Credentials */}
                <div className="pt-5 pb-1 space-y-1 text-left">
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#102A43] tracking-tight font-display">
                      Dr. Saroj Sah
                    </h2>
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" aria-label="Verified Doctor" />
                  </div>
                  
                  <p className="text-sm font-semibold text-[#0E4BA4] flex items-center gap-1.5">
                    <GraduationCap className="w-4 h-4 shrink-0 text-[#0E4BA4]" />
                    <span>MBBS (Dhaka, Bangladesh)</span>
                  </p>
                  
                  <p className="text-sm font-medium text-[#5B6472]">
                    Managing Director
                  </p>
                  
                  <p className="text-xs text-[#8D98AA] pt-0.5">
                    Retina Educational Consultancy Pvt. Ltd.
                  </p>
                </div>

                {/* Direct Action Contacts */}
                <div className="pt-4 mt-4 border-t border-[#E2E8F0] flex flex-col sm:flex-row lg:flex-col gap-2.5">
                  <a
                    href={companyData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold tracking-wide transition-all duration-200 shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current" />
                    <span>Message on WhatsApp</span>
                  </a>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 h-11 px-4 rounded-xl bg-[#EEF4FF] hover:bg-[#0E4BA4] hover:text-white text-[#0E4BA4] text-xs font-semibold tracking-wide transition-all duration-200 border border-[#0E4BA4]/20"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>Book In-Person Session</span>
                  </Link>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Editorial Message Letter */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal y={12} delay={0.06}>
              <div className="bg-[#FFFFFF] rounded-2xl sm:rounded-3xl border border-[#E2E8F0] p-6 sm:p-10 shadow-xs">
                
                {/* Editorial Accent Eyebrow */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF4FF] text-[#0E4BA4] text-xs font-semibold mb-4">
                  <Award className="w-3.5 h-3.5 text-[#FF914D]" />
                  <span>Official Welcome Address</span>
                </div>

                {/* Salutation */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight font-display mb-4">
                  Dear Future Global Scholars,
                </h3>

                {/* Initial Preview Paragraph (Always visible) */}
                <p className="text-base sm:text-lg text-[#334E68] leading-relaxed font-normal">
                  I hope this message finds you well and full of excitement about the incredible opportunities that lie ahead. At Retina Educational Consultancy, we understand that embarking on an international education journey is a significant and transformative step in your academic and professional life.
                </p>

                {/* Dynamic Dropdown Trigger Button */}
                <div className="pt-4 pb-2">
                  <button
                    type="button"
                    onClick={() => setIsExpanded(!isExpanded)}
                    aria-expanded={isExpanded}
                    aria-controls="ceo-full-message"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0E4BA4] hover:bg-[#0A3B82] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 shadow-xs hover:shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0E4BA4]/40 cursor-pointer"
                  >
                    <span>{isExpanded ? 'Show Less' : 'Read Full Message'}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ease-out ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </div>

                {/* Expandable Message Container */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id="ceo-full-message"
                      key="full-message"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ 
                        opacity: 1, 
                        height: 'auto',
                        transition: {
                          height: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.28, delay: 0.08 }
                        }
                      }}
                      exit={{ 
                        opacity: 0, 
                        height: 0,
                        transition: {
                          height: { duration: 0.28, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.18 }
                        }
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 space-y-4 text-base sm:text-lg text-[#334E68] leading-relaxed font-normal border-t border-[#E2E8F0] mt-4">
                        <p>
                          Our mission is to guide and support you every step of the way. From selecting the right institution and program to navigating application processes, we are here to ensure your transition is smooth and successful. At Retina Educational Consultancy, our commitment to excellence and personalized support has always been at the heart of what we do. We always provide invaluable information that illustrates our dedication to helping students thrive in their global educational journeys.
                        </p>

                        <p>
                          Studying abroad opens doors to a world of knowledge, cultural experiences, and personal growth. We are committed to helping you achieve your goals and make the most of this life-changing opportunity.
                        </p>

                        <p>
                          Our team is passionate about providing tailored guidance that ensures every student finds the perfect path for their academic and personal growth. Whether you're exploring new opportunities or seeking advice on navigating the complexities of studying abroad, I hope you find this magazine both inspiring and informative. Thank you for your continued trust and support. Here’s to another year of exciting opportunities and achievements.
                        </p>

                        {/* Sign-off Block */}
                        <div className="pt-6 border-t border-[#E2E8F0] space-y-1">
                          <p className="text-sm font-medium text-[#5B6472]">Warm regards,</p>
                          <p className="text-xl font-bold text-[#102A43] pt-1 font-display">Dr. Saroj Sah</p>
                          <p className="text-sm font-semibold text-[#0E4BA4]">MBBS (Dhaka, Bangladesh)</p>
                          <p className="text-sm text-[#5B6472]">Managing Director</p>
                          <p className="text-sm font-medium text-[#102A43]">Retina Educational Consultancy Pvt. Ltd.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </ScrollReveal>

            {/* Quick Guiding Principles Summary */}
            <ScrollReveal y={12} delay={0.12}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] space-y-1">
                  <div className="text-xs font-bold text-[#0E4BA4] uppercase tracking-wider">16 Years</div>
                  <div className="text-xs text-[#5B6472] font-medium">Doctor-led counseling heritage</div>
                </div>

                <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] space-y-1">
                  <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Rs. 0 Charge</div>
                  <div className="text-xs text-[#5B6472] font-medium">Free online CEE form submission</div>
                </div>

                <div className="p-4 bg-[#F8FAFC] rounded-2xl border border-[#E2E8F0] space-y-1">
                  <div className="text-xs font-bold text-[#FF914D] uppercase tracking-wider">Always Open</div>
                  <div className="text-xs text-[#5B6472] font-medium">Putalisadak-29 office guidance</div>
                </div>
              </div>
            </ScrollReveal>

          </div>

        </div>
      </section>

      {/* Global CTA Section with ~1rem Spacing */}
      <ScrollReveal y={14}>
        <CTASection />
      </ScrollReveal>
    </div>
  );
}
