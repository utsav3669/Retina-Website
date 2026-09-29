import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageSquare, 
  FileCheck2 
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CourseCard from '../components/CourseCard';
import CTASection from '../components/CTASection';
import { courses } from '../data/coursesData';
import { companyData } from '../data/companyData';
import { ScrollReveal, StaggerGrid, StaggerItem } from '../components/MotionReveal';

export default function CoursesOverviewPage() {
  const breadcrumbs = [{ label: 'Programs' }];

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* Header with soft entrance */}
      <PageHeader
        badge="Medical Education Programs"
        title="Medical & Healthcare Education Programs"
        subtitle="Comprehensive admission counseling, college placement, and academic guidance for MBBS, MD, MS, BDS, B.Sc. Nursing, AG, and VET programs."
        breadcrumbs={breadcrumbs}
      />

      {/* Grid of All Retina Medical Programs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.08}>
          {Object.values(courses).map((course) => (
            <StaggerItem key={course.id}>
              <CourseCard course={course} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      {/* Minimal 2-Column Comparison Interface */}
      <section className="py-20 sm:py-28 bg-[#EEF4FF] border-t border-b border-[#E2E8F0]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal y={14}>
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#0E4BA4]">
                CHOOSING YOUR PATHWAY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight font-display">
                Undergraduate vs Postgraduate Pathways
              </h2>
              <p className="text-sm sm:text-base text-[#5B6472] font-normal">
                Whether preparing for your foundational medical degree (MBBS/BDS) or progressing to specialist clinical residency (MD/MS), our doctor counselors guide you every step.
              </p>
            </div>
          </ScrollReveal>

          {/* Two Minimal Columns */}
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-8" stagger={0.1}>
            
            {/* MBBS & BDS Column */}
            <StaggerItem>
              <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-xs flex flex-col justify-between space-y-8 h-full transition-all duration-400 ease-out hover:shadow-lg hover:-translate-y-1">
                <div className="space-y-6">
                  <div className="pb-4 border-b border-[#E2E8F0]">
                    <span className="text-xs font-semibold text-[#0E4BA4] uppercase tracking-wider">Primary Medical Degree</span>
                    <h3 className="text-2xl font-extrabold text-[#102A43] mt-1 font-display">MBBS & BDS</h3>
                    <p className="text-xs text-[#8D98AA] mt-1">Bachelor of Medicine, Surgery & Dental</p>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-[#5B6472]">
                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0E4BA4] mt-2 shrink-0"></span>
                      <div>
                        <strong className="text-[#102A43] block">Eligibility Requirements:</strong>
                        10+2 / High School Science with Biology, Physics, and Chemistry, plus qualifying CEE / NEET score.
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0E4BA4] mt-2 shrink-0"></span>
                      <div>
                        <strong className="text-[#102A43] block">Program Duration:</strong>
                        5 Years Academic Coursework + 1 Year Compulsory Rotatory Clinical Internship.
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0E4BA4] mt-2 shrink-0"></span>
                      <div>
                        <strong className="text-[#102A43] block">Top Study Destinations:</strong>
                        Bangladesh (highest clinical bed flow and similar syllabus), China, India, and Philippines.
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0E4BA4] mt-2 shrink-0"></span>
                      <div>
                        <strong className="text-[#102A43] block">Admissions Support:</strong>
                        Free CEE online form submission (Pay Rs. 0 only), college seat booking, documentation, and visa clearance.
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Link
                    to="/courses/mbbs"
                    className="w-full inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-transparent border border-[#0E4BA4] text-[#0E4BA4] hover:bg-[#0E4BA4] hover:text-white text-xs font-semibold transition-all duration-300 ease-out"
                  >
                    <span>Explore MBBS Guidance</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </StaggerItem>

            {/* MD & MS Column */}
            <StaggerItem>
              <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-xs flex flex-col justify-between space-y-8 h-full transition-all duration-400 ease-out hover:shadow-lg hover:-translate-y-1">
                <div className="space-y-6">
                  <div className="pb-4 border-b border-[#E2E8F0]">
                    <span className="text-xs font-semibold text-[#0E4BA4] uppercase tracking-wider">Clinical Specialization</span>
                    <h3 className="text-2xl font-extrabold text-[#102A43] mt-1 font-display">MD & MS</h3>
                    <p className="text-xs text-[#8D98AA] mt-1">Doctor of Medicine & Master of Surgery</p>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-[#5B6472]">
                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0E4BA4] mt-2 shrink-0"></span>
                      <div>
                        <strong className="text-[#102A43] block">Eligibility Requirements:</strong>
                        Recognized MBBS degree, permanent medical council registration, and completed internship.
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0E4BA4] mt-2 shrink-0"></span>
                      <div>
                        <strong className="text-[#102A43] block">Program Duration:</strong>
                        3-Year intensive clinical residency training under senior university professors.
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0E4BA4] mt-2 shrink-0"></span>
                      <div>
                        <strong className="text-[#102A43] block">Clinical Specializations:</strong>
                        Internal Medicine, General Surgery, Pediatrics, OB-GYN, Orthopedics, Anesthesiology, and Radiology.
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0E4BA4] mt-2 shrink-0"></span>
                      <div>
                        <strong className="text-[#102A43] block">Retina Doctor Mentorship:</strong>
                        Guidance from Dhaka University alumni doctors with extensive experience in postgraduate medical matching.
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Link
                    to="/courses/md"
                    className="w-full inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-transparent border border-[#0E4BA4] text-[#0E4BA4] hover:bg-[#0E4BA4] hover:text-white text-xs font-semibold transition-all duration-300 ease-out"
                  >
                    <span>Explore MD / MS Guidance</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </StaggerItem>

          </StaggerGrid>

          <ScrollReveal y={10} delay={0.15}>
            <div className="mt-12 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[#0E4BA4] hover:bg-[#0A3B82] text-white text-xs font-semibold tracking-wide transition-all duration-300 ease-out shadow-xs hover:shadow-md transform hover:-translate-y-0.5"
              >
                <span>Talk to a Doctor Counselor for Program Selection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Friday CEE Nursing Mock & Free Form Fill-Up Banner (#102A43) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal y={14}>
          <div className="bg-[#102A43] text-white rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#0E4BA4]/25 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <FileCheck2 className="w-3.5 h-3.5" />
                  <span>CEE Nursing Mock Test & Zero-Charge Form Fill-up</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FFFFFF] font-display">
                  Friday Mock Tests & Free CEE Form Submission at Putalisadak
                </h3>
                <p className="text-xs sm:text-sm text-white/[0.78] leading-relaxed max-w-2xl font-normal">
                  Join our weekly CEE Nursing Mock Tests every Friday at 3:00 PM at our Putalisadak office to test your readiness and boost your score. Retina also invites all CEE aspirants for free online exam form submission with ZERO charges (Pay Rs. 0 only), along with a complimentary counseling session with medical experts.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-[#FFFFFF] hover:bg-[#EEF4FF] text-[#0E4BA4] text-xs font-semibold transition-all duration-300 ease-out shadow-xs transform hover:-translate-y-0.5"
                >
                  Register at Putalisadak Office
                </Link>
                <a
                  href={companyData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-white/10 hover:bg-white/[0.16] text-[#FFFFFF] text-xs font-semibold border border-white/20 transition-all duration-300 ease-out transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current text-emerald-400" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Global CTA */}
      <ScrollReveal y={14}>
        <CTASection />
      </ScrollReveal>
    </div>
  );
}
