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
  const breadcrumbs = [{ label: 'Courses' }];

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* Header with soft entrance */}
      <PageHeader
        badge="Language Proficiency"
        title="English Language Test Preparation Programs"
        subtitle="Structured, skill-based training for internationally recognized English examinations. Build genuine language competence and exam stamina for IELTS or PTE Academic."
        breadcrumbs={breadcrumbs}
      />

      {/* Two Large Editorial Course Cards with Staggered Entrance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <StaggerGrid className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10" stagger={0.1}>
          <StaggerItem>
            <CourseCard course={courses.ielts} />
          </StaggerItem>
          <StaggerItem>
            <CourseCard course={courses.pte} />
          </StaggerItem>
        </StaggerGrid>
      </section>

      {/* Minimal 2-Column Comparison Interface */}
      <section className="py-20 sm:py-28 bg-[#F4F8FD] border-t border-b border-[#E2E6EC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal y={14}>
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#164B9B]">
                CHOOSING BETWEEN TESTS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight font-display">
                Not Sure Where to Start?
              </h2>
              <p className="text-sm sm:text-base text-[#667085] font-normal">
                Both tests evaluate academic English proficiency, but their format, speaking delivery, and scoring mechanisms differ.
              </p>
            </div>
          </ScrollReveal>

          {/* Two Minimal Columns */}
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-8" stagger={0.1}>
            
            {/* IELTS Column */}
            <StaggerItem>
              <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-10 border border-[#E2E6EC] shadow-xs flex flex-col justify-between space-y-8 h-full transition-all duration-400 ease-out hover:shadow-lg hover:-translate-y-1">
                <div className="space-y-6">
                  <div className="pb-4 border-b border-[#E2E6EC]">
                    <span className="text-xs font-semibold text-[#164B9B] uppercase tracking-wider">Human Interaction</span>
                    <h3 className="text-2xl font-extrabold text-[#172033] mt-1 font-display">IELTS Academic</h3>
                    <p className="text-xs text-[#98A2B3] mt-1">Paper-Based or Computer-Delivered</p>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-[#667085]">
                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#164B9B] mt-2 shrink-0"></span>
                      <div>
                        <strong className="text-[#172033] block">Speaking Evaluation:</strong>
                        Face-to-face conversational interview with a certified human examiner.
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#164B9B] mt-2 shrink-0"></span>
                      <div>
                        <strong className="text-[#172033] block">Score Range:</strong>
                        Bands 0 – 9 (in 0.5 band increments).
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#164B9B] mt-2 shrink-0"></span>
                      <div>
                        <strong className="text-[#172033] block">Test Duration:</strong>
                        Approximately 2 hours and 45 minutes across 4 distinct modules.
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#164B9B] mt-2 shrink-0"></span>
                      <div>
                        <strong className="text-[#172033] block">Best Suited For:</strong>
                        Students targeting UK, Canada, Australia, Europe, or those who express themselves best in personal conversation.
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Link
                    to="/courses/ielts"
                    className="w-full inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-transparent border border-[#164B9B] text-[#164B9B] hover:bg-[#EAF3FF] hover:text-[#0B2F6B] text-xs font-semibold transition-all duration-300 ease-out"
                  >
                    <span>Explore IELTS Preparation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </StaggerItem>

            {/* PTE Column */}
            <StaggerItem>
              <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-10 border border-[#E2E6EC] shadow-xs flex flex-col justify-between space-y-8 h-full transition-all duration-400 ease-out hover:shadow-lg hover:-translate-y-1">
                <div className="space-y-6">
                  <div className="pb-4 border-b border-[#E2E6EC]">
                    <span className="text-xs font-semibold text-[#164B9B] uppercase tracking-wider">Fast & Automated</span>
                    <h3 className="text-2xl font-extrabold text-[#172033] mt-1 font-display">PTE Academic</h3>
                    <p className="text-xs text-[#98A2B3] mt-1">100% Computer-Based in Secure Lab</p>
                  </div>

                  <div className="space-y-4 text-xs sm:text-sm text-[#667085]">
                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#164B9B] mt-2 shrink-0"></span>
                      <div>
                        <strong className="text-[#172033] block">Speaking Evaluation:</strong>
                        Microphone headset recording evaluated entirely by Pearson AI algorithms.
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#164B9B] mt-2 shrink-0"></span>
                      <div>
                        <strong className="text-[#172033] block">Score Range:</strong>
                        Scale from 10 – 90 points with integrated skill metrics.
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#164B9B] mt-2 shrink-0"></span>
                      <div>
                        <strong className="text-[#172033] block">Test Duration:</strong>
                        Single 2-hour uninterrupted session with rapid results in 48 hours.
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#164B9B] mt-2 shrink-0"></span>
                      <div>
                        <strong className="text-[#172033] block">Best Suited For:</strong>
                        Students with tight admission deadlines, confident keyboard typists, or those who prefer automated objectivity.
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <Link
                    to="/courses/pte"
                    className="w-full inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-transparent border border-[#164B9B] text-[#164B9B] hover:bg-[#EAF3FF] hover:text-[#0B2F6B] text-xs font-semibold transition-all duration-300 ease-out"
                  >
                    <span>Explore PTE Preparation</span>
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
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[#E21F26] hover:bg-[#B91C24] text-white text-xs font-semibold tracking-wide transition-all duration-300 ease-out shadow-xs hover:shadow-md transform hover:-translate-y-0.5"
              >
                <span>Talk to a Counselor for Test Selection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Free Weekly Mock Exam Banner (#0B2F6B) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal y={14}>
          <div className="bg-[#0B2F6B] text-white rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#164B9B]/25 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <FileCheck2 className="w-3.5 h-3.5" />
                  <span>Simulated Testing Stamina</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FFFFFF] font-display">
                  Free Weekly Mock Tests for All Enrolled Students
                </h3>
                <p className="text-xs sm:text-sm text-white/[0.78] leading-relaxed max-w-2xl font-normal">
                  Every Saturday, StudyHub transforms its Bhairahawa computer lab and classrooms into standardized test environments. Experience official time constraints, exam headsets, and receive 1-on-1 band score feedback before taking the actual exam.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center h-12 px-6 rounded-xl bg-[#FFFFFF] hover:bg-[#EAF3FF] text-[#0B2F6B] text-xs font-semibold transition-all duration-300 ease-out shadow-xs transform hover:-translate-y-0.5"
                >
                  Register for a Diagnostic Test
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
