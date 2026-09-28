import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  Users, 
  Monitor, 
  Headphones, 
  Cpu, 
  Activity, 
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

export default function PTEPage() {
  const pte = courses.pte;
  const breadcrumbs = [
    { label: 'Courses', to: '/courses' },
    { label: 'PTE Academic' }
  ];

  const accordionItems = [
    {
      title: 'Speaking & Writing Section (54–67 Minutes)',
      content: 'Master all 7 automated speech and written response tasks with focus on oral acoustic clarity, steady rhythm, and zero typographical slips.',
      skills: pte.modules[0].skills
    },
    {
      title: 'Reading Section (29–30 Minutes)',
      content: 'Develop speed comprehension, academic collocation mastery, and drag-and-drop accuracy for high-weight reading blanks.',
      skills: pte.modules[1].skills
    },
    {
      title: 'Listening Section (30–43 Minutes)',
      content: 'Hone auditory note-taking, fast transcription for Write From Dictation, and acute recognition of accents and signpost words.',
      skills: pte.modules[2].skills
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 bg-[#FFFFFF]">
      {/* 1. HERO with soft entrance */}
      <PageHeader
        badge="PTE Academic Preparation"
        title="PTE Preparation Classes"
        subtitle="Develop the language skills, test familiarity and strategies needed to approach the PTE Academic examination with confidence."
        breadcrumbs={breadcrumbs}
      >
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-white/80">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
            <Clock className="w-4 h-4 text-[#EAF3FF]" />
            <span>{pte.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
            <Users className="w-4 h-4 text-[#EAF3FF]" />
            <span>{pte.classSize}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-emerald-300">
            <FileCheck2 className="w-4 h-4 text-emerald-400" />
            <span>AI Scored Mock Tests</span>
          </div>
        </div>
      </PageHeader>

      {/* 2. OVERVIEW & LAB PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal y={12}>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#164B9B]">
                Computer-Delivered Excellence
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight font-display mt-2">
                Master Pearson AI Automated Scoring with Lab Practice
              </h2>
              <p className="text-sm sm:text-base text-[#667085] leading-relaxed mt-3 font-normal">
                {pte.description} The Pearson Test of English evaluates spoken fluency, pronunciation, grammar, and vocabulary using machine-learning algorithms. At StudyHub, our dedicated Bhairahawa computer lab provides acoustic-partitioned workstations so you practice in an identical testing environment.
              </p>
            </ScrollReveal>

            <StaggerGrid className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2" stagger={0.06}>
              <StaggerItem>
                <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E2E6EC] shadow-2xs hover:shadow-xs transition-all duration-300">
                  <Monitor className="w-6 h-6 text-[#164B9B] mb-1.5" />
                  <div className="text-xs font-bold text-[#172033]">Dedicated Lab</div>
                  <div className="text-[11px] text-[#98A2B3]">Individual partitioned stations</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E2E6EC] shadow-2xs hover:shadow-xs transition-all duration-300">
                  <Headphones className="w-6 h-6 text-[#164B9B] mb-1.5" />
                  <div className="text-xs font-bold text-[#172033]">Acoustic Headsets</div>
                  <div className="text-[11px] text-[#98A2B3]">Official test-standard audio</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E2E6EC] shadow-2xs hover:shadow-xs transition-all duration-300">
                  <Cpu className="w-6 h-6 text-[#164B9B] mb-1.5" />
                  <div className="text-xs font-bold text-[#172033]">AI Scoring Reports</div>
                  <div className="text-[11px] text-[#98A2B3]">Instant detailed metrics</div>
                </div>
              </StaggerItem>
            </StaggerGrid>
          </div>

          <div className="lg:col-span-5 relative">
            <ScrollReveal y={16}>
              <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E2E6EC] bg-[#0B2F6B]">
                <img
                  src={pte.image}
                  alt="PTE Academic Computer Testing Lab at StudyHub"
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="p-5 bg-[#FFFFFF] border-t border-[#E2E6EC] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#172033]">Bhairahawa PTE Lab Sessions</div>
                    <div className="text-[11px] text-[#667085]">Flexible 2-hour practice slots daily</div>
                  </div>
                  <a
                    href={companyData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors duration-300"
                    aria-label="WhatsApp PTE lab inquiry"
                  >
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. PTE SECTIONS (ACCORDION) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal y={14}>
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#164B9B]">
              Curriculum Breakdown
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight font-display">
              Comprehensive PTE Academic Curriculum
            </h2>
            <p className="text-sm sm:text-base text-[#667085]">
              Detailed coverage across Speaking, Writing, Reading, and Listening modules.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal y={14} delay={0.06}>
          <CourseAccordion items={accordionItems} defaultOpenIndex={0} />
        </ScrollReveal>
      </section>

      {/* 4. PTE PRACTICE SYSTEM (Dark Navy: #0B2F6B) */}
      <section className="bg-[#0B2F6B] text-white py-16 sm:py-24 rounded-3xl mx-4 sm:mx-6 lg:mx-8 shadow-xl border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#164B9B]/25 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          
          <ScrollReveal y={14}>
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/[0.70] border border-white/15 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E21F26]" />
                <span>Structured Preparation Engine</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FFFFFF] font-display">
                PTE Practice System
              </h2>
              <p className="text-sm sm:text-base text-white/[0.78] font-normal">
                Learn → Practice → Analyze → Mock → Improve. Every step is monitored by experienced instructors to ensure continuous score progression.
              </p>
            </div>
          </ScrollReveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-5 gap-6" stagger={0.07}>
            {pte.preparationMethod.map((item, idx) => (
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
                    <span>Phase {item.stage} Verified</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

        </div>
      </section>

      {/* 5. MOCK TEST HIGHLIGHT & LAB SOFTWARE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal y={14}>
          <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-12 shadow-sm border border-[#E2E6EC]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-5">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#EAF3FF] text-[#164B9B]">
                  <Activity className="w-3.5 h-3.5" />
                  <span>Simulated Testing Lab</span>
                </span>

                <h3 className="text-3xl font-extrabold text-[#172033] tracking-tight font-display">
                  {pte.mockTestHighlight.title}
                </h3>

                <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
                  {pte.mockTestHighlight.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-medium text-[#172033]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Official Pearson exam layout & timer</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>High-priority task prioritization training</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Audio waveform & speech speed diagnostics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Typing speed and spelling proofreading checks</span>
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
                    <span>Book Free PTE Lab Demo on WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden shadow-md border border-[#E2E6EC]">
                  <img
                    src="/images/pte.jpg"
                    alt="PTE Academic Testing Stations"
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
          <ContactForm prefilledInterest="PTE Preparation" />
        </ScrollReveal>
      </section>

      {/* Global CTA */}
      <ScrollReveal y={14}>
        <CTASection />
      </ScrollReveal>
    </div>
  );
}
