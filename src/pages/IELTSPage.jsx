import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Users, 
  Headphones, 
  BookOpen, 
  PenTool, 
  Mic, 
  FileCheck2, 
  MessageCircle
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CourseAccordion from '../components/CourseAccordion';
import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';
import { courses } from '../data/coursesData';
import { companyData } from '../data/companyData';
import { ScrollReveal, StaggerGrid, StaggerItem } from '../components/MotionReveal';

export default function IELTSPage() {
  const ielts = courses.ielts;
  const breadcrumbs = [
    { label: 'Courses', to: '/courses' },
    { label: 'IELTS Preparation' }
  ];

  // Accordion format data for curriculum
  const accordionItems = [
    {
      title: 'Listening Module (40 Questions • 30 Minutes)',
      content: 'Master the listening strategies required to follow lectures, conversations, and technical diagrams across varied native English accents.',
      skills: ielts.modules[0].skills
    },
    {
      title: 'Reading Module (3 Passages • 60 Minutes)',
      content: 'Develop speed-reading and precision skimming skills for academic articles, scientific texts, and historical journals.',
      skills: ielts.modules[1].skills
    },
    {
      title: 'Writing Module: Task 1 & Task 2 (60 Minutes)',
      content: 'Learn how to write structured data reports (Task 1) and persuasive, academically coherent 250-word essays (Task 2).',
      subModules: ielts.modules[2].subModules
    },
    {
      title: 'Speaking Module (1-on-1 Interview • 11–14 Minutes)',
      content: 'Build natural fluency, native-like intonation, and structured answers across Part 1 introduction, Part 2 cue cards, and Part 3 abstract discussions.',
      skills: ielts.modules[3].skills
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 bg-[#FFFFFF]">
      {/* 1. HERO with soft entrance */}
      <PageHeader
        badge="IELTS Preparation Course"
        title="IELTS Preparation Classes"
        subtitle="Build the English skills, test strategies and confidence required to perform effectively in the IELTS examination."
        breadcrumbs={breadcrumbs}
      >
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-white/80">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
            <Clock className="w-4 h-4 text-[#EAF3FF]" />
            <span>{ielts.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
            <Users className="w-4 h-4 text-[#EAF3FF]" />
            <span>{ielts.classSize}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-emerald-300">
            <FileCheck2 className="w-4 h-4 text-emerald-400" />
            <span>Free Weekly Mock Exams</span>
          </div>
        </div>
      </PageHeader>

      {/* 2. OVERVIEW & VISUAL STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal y={12}>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#164B9B]">
                Exam Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight font-display mt-2">
                Structured Preparation Covering All 4 Language Skills
              </h2>
              <p className="text-sm sm:text-base text-[#667085] leading-relaxed mt-3 font-normal">
                {ielts.description} Whether aiming for band 6.5 for undergraduate admission or band 7.5+ for postgraduate medicine and competitive master's programs, our certified trainers guide you with individual error correction, daily writing evaluations, and face-to-face speaking drills.
              </p>
            </ScrollReveal>

            <StaggerGrid className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2" stagger={0.06}>
              <StaggerItem>
                <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E2E6EC] text-center shadow-2xs hover:shadow-xs transition-all duration-300">
                  <Headphones className="w-6 h-6 text-[#164B9B] mx-auto mb-1.5" />
                  <div className="text-xs font-bold text-[#172033]">Listening</div>
                  <div className="text-[11px] text-[#98A2B3]">40 Questions</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E2E6EC] text-center shadow-2xs hover:shadow-xs transition-all duration-300">
                  <BookOpen className="w-6 h-6 text-[#164B9B] mx-auto mb-1.5" />
                  <div className="text-xs font-bold text-[#172033]">Reading</div>
                  <div className="text-[11px] text-[#98A2B3]">3 Passages</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E2E6EC] text-center shadow-2xs hover:shadow-xs transition-all duration-300">
                  <PenTool className="w-6 h-6 text-[#164B9B] mx-auto mb-1.5" />
                  <div className="text-xs font-bold text-[#172033]">Writing</div>
                  <div className="text-[11px] text-[#98A2B3]">Task 1 & Task 2</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E2E6EC] text-center shadow-2xs hover:shadow-xs transition-all duration-300">
                  <Mic className="w-6 h-6 text-[#164B9B] mx-auto mb-1.5" />
                  <div className="text-xs font-bold text-[#172033]">Speaking</div>
                  <div className="text-[11px] text-[#98A2B3]">1-on-1 Interview</div>
                </div>
              </StaggerItem>
            </StaggerGrid>
          </div>

          <div className="lg:col-span-5 relative">
            <ScrollReveal y={16}>
              <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E2E6EC] bg-[#0B2F6B]">
                <img
                  src={ielts.image}
                  alt="IELTS Preparation Classroom at StudyHub"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="p-5 bg-[#FFFFFF] border-t border-[#E2E6EC] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#172033]">Bhairahawa Batch Timings</div>
                    <div className="text-[11px] text-[#667085]">Morning (7–9 AM), Noon (11–1 PM), Evening (4–6 PM)</div>
                  </div>
                  <a
                    href={companyData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors duration-300"
                    aria-label="WhatsApp batch inquiry"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. WHAT YOU WILL STUDY (ACCORDION & DETAILED GRID) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal y={14}>
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#164B9B]">
              Comprehensive Curriculum
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight font-display">
              What You Will Study
            </h2>
            <p className="text-sm sm:text-base text-[#667085]">
              Expand each module below to view the exact skills, tasks, and question types taught in our classes.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal y={14} delay={0.06}>
          <CourseAccordion items={accordionItems} defaultOpenIndex={0} />
        </ScrollReveal>
      </section>

      {/* 4. IELTS PREPARATION METHOD (TIMELINE: Dark Navy #0B2F6B) */}
      <section className="bg-[#0B2F6B] text-white py-16 sm:py-24 rounded-3xl mx-4 sm:mx-6 lg:mx-8 shadow-xl border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#164B9B]/25 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          
          <ScrollReveal y={14}>
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/[0.70] border border-white/15 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E21F26]" />
                <span>5-Stage Progression</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FFFFFF] font-display">
                IELTS Preparation Method
              </h2>
              <p className="text-sm sm:text-base text-white/[0.78] font-normal">
                A systematic process designed to take you from your initial diagnostic baseline to exam-day confidence.
              </p>
            </div>
          </ScrollReveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-5 gap-6" stagger={0.07}>
            {ielts.preparationMethod.map((item, idx) => (
              <StaggerItem key={idx}>
                <div
                  className="relative bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 flex flex-col justify-between group hover:border-white/30 transition-all duration-300 h-full hover:-translate-y-1"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-extrabold font-display text-[#FFFFFF]">
                        {item.stage}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/15 text-[#FFFFFF]">
                        {item.name}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#FFFFFF] group-hover:text-[#EAF3FF] transition-colors font-display">
                      {item.title}
                    </h3>

                    <p className="text-xs text-white/[0.78] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-white/[0.60]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Stage {item.stage} Verified</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

        </div>
      </section>

      {/* 5. IELTS MOCK TESTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal y={14}>
          <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-12 shadow-sm border border-[#E2E6EC]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#EAF3FF] text-[#164B9B]">
                  <FileCheck2 className="w-3.5 h-3.5" />
                  <span>Diagnostic Rigor</span>
                </span>

                <h3 className="text-3xl font-extrabold text-[#172033] tracking-tight font-display">
                  {ielts.mockTestHighlight.title}
                </h3>

                <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
                  {ielts.mockTestHighlight.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-medium text-[#172033]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Full-length exam simulation (2 hr 45 min)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Individual Speaking interview with video analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Handwritten or computer-delivered option</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Comprehensive diagnostic band report</span>
                  </div>
                </div>

                <div className="pt-4 flex flex-wrap gap-4">
                  <a
                    href={companyData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm transition-all duration-300 ease-out transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Book Free Saturday Mock via WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-md border border-[#E2E6EC]">
                  <img
                    src="/images/mock-test.jpg"
                    alt="IELTS Mock Examination at StudyHub"
                    className="w-full h-full object-cover aspect-[4/3]"
                  />
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 6. REGISTRATION / INQUIRY FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal y={14}>
          <ContactForm prefilledInterest="IELTS Preparation" />
        </ScrollReveal>
      </section>

      {/* Global CTA */}
      <ScrollReveal y={14}>
        <CTASection />
      </ScrollReveal>
    </div>
  );
}
