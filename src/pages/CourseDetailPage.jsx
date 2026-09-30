import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  Clock, 
  Users, 
  BookOpen, 
  FileCheck2, 
  MessageCircle,
  GraduationCap,
  Award,
  Stethoscope
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CourseAccordion from '../components/CourseAccordion';
import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';
import { courses } from '../data/coursesData';
import { companyData } from '../data/companyData';
import { ScrollReveal, StaggerGrid, StaggerItem } from '../components/MotionReveal';

export default function CourseDetailPage() {
  const { slug } = useParams();
  const course = courses[slug];

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  const breadcrumbs = [
    { label: 'Programs', to: '/courses' },
    { label: course.name }
  ];

  // Prepare accordion items from modules
  const accordionItems = course.modules?.map((m) => ({
    title: m.title,
    content: `Detailed curriculum coverage and practical clinical training for ${course.shortName}.`,
    skills: m.skills,
    subModules: m.subModules
  })) || [];

  return (
    <div className="space-y-20 sm:space-y-28 bg-[#FFFFFF]">
      {/* 1. HERO with soft entrance */}
      <PageHeader
        badge={course.badge || 'Medical Program Guidance'}
        title={course.name}
        subtitle={course.heroText || course.tagline}
        breadcrumbs={breadcrumbs}
      >
        <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-white/80">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
            <Clock className="w-4 h-4 text-[#EEF4FF]" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10">
            <Users className="w-4 h-4 text-[#EEF4FF]" />
            <span>{course.classSize}</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-emerald-300">
            <FileCheck2 className="w-4 h-4 text-emerald-400" />
            <span>{course.mockTests || 'Doctor-Led Mentorship'}</span>
          </div>
        </div>
      </PageHeader>

      {/* 2. OVERVIEW & VISUAL STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal y={12}>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#0E4BA4]">
                Program Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight font-display mt-2">
                Structured Medical Education &amp; Admissions Guidance
              </h2>
              <p className="text-sm sm:text-base text-[#5B6472] leading-relaxed mt-3 font-normal">
                {course.description} Guided by doctors who graduated from Dhaka University with 16 years of trusted expertise and 15+ years of experienced counselor support, Retina ensures transparent admissions without unverified claims.
              </p>
            </ScrollReveal>

            <StaggerGrid className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2" stagger={0.06}>
              <StaggerItem>
                <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] text-center shadow-2xs hover:shadow-xs transition-all duration-300">
                  <Stethoscope className="w-6 h-6 text-[#0E4BA4] mx-auto mb-1.5" />
                  <div className="text-xs font-bold text-[#102A43]">Doctor-Led</div>
                  <div className="text-[11px] text-[#5B6472]">Dhaka Univ Alumni</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] text-center shadow-2xs hover:shadow-xs transition-all duration-300">
                  <GraduationCap className="w-6 h-6 text-[#0E4BA4] mx-auto mb-1.5" />
                  <div className="text-xs font-bold text-[#102A43]">Top Colleges</div>
                  <div className="text-[11px] text-[#5B6472]">Recognized Medical</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] text-center shadow-2xs hover:shadow-xs transition-all duration-300">
                  <Award className="w-6 h-6 text-[#0E4BA4] mx-auto mb-1.5" />
                  <div className="text-xs font-bold text-[#102A43]">Scholarship</div>
                  <div className="text-[11px] text-[#5B6472]">Opportunities</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] text-center shadow-2xs hover:shadow-xs transition-all duration-300">
                  <BookOpen className="w-6 h-6 text-[#0E4BA4] mx-auto mb-1.5" />
                  <div className="text-xs font-bold text-[#102A43]">CEE Guidance</div>
                  <div className="text-[11px] text-[#5B6472]">Free Form Fill-up</div>
                </div>
              </StaggerItem>
            </StaggerGrid>
          </div>

          <div className="lg:col-span-5 relative">
            <ScrollReveal y={16}>
              <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E2E8F0] bg-[#102A43]">
                <img
                  src={course.image}
                  alt={`${course.name} at Retina Educational Consultancy`}
                  className="w-full h-full object-cover aspect-[4/3]"
                />
                <div className="p-5 bg-[#FFFFFF] border-t border-[#E2E8F0] flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-[#102A43]">Putalisadak Office Counseling</div>
                    <a 
                      href={companyData.mapUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[11px] text-[#5B6472] hover:text-[#0E4BA4] transition-colors block"
                    >
                      New Plaza, Putalisadak-29, Kathmandu • Always Open
                    </a>
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

      {/* 3. WHAT YOU WILL STUDY (ACCORDION) */}
      {accordionItems.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal y={14}>
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#0E4BA4]">
                Comprehensive Curriculum
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight font-display">
                Curriculum &amp; Training Breakdown
              </h2>
              <p className="text-sm sm:text-base text-[#5B6472]">
                Expand each section below to view the academic subjects, clinical rotations, and skills covered.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal y={14} delay={0.06}>
            <CourseAccordion items={accordionItems} defaultOpenIndex={0} />
          </ScrollReveal>
        </section>
      )}

      {/* 4. PREPARATION & ADMISSION METHOD (Dark Navy: #102A43) */}
      {course.preparationMethod && (
        <section className="bg-[#102A43] text-white py-16 sm:py-24 rounded-3xl mx-4 sm:mx-6 lg:mx-8 shadow-xl border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#0E4BA4]/25 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
            <ScrollReveal y={14}>
              <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/[0.70] border border-white/15 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF914D]" />
                  <span>5-Stage Progression</span>
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FFFFFF] font-display">
                  {course.shortName} Admission Pathway
                </h2>
                <p className="text-sm sm:text-base text-white/[0.78] font-normal">
                  A structured process from profile evaluation and CEE alignment to verified college admission.
                </p>
              </div>
            </ScrollReveal>

            <StaggerGrid className="grid grid-cols-1 md:grid-cols-5 gap-6" stagger={0.07}>
              {course.preparationMethod.map((item, idx) => (
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

                      <h3 className="text-base font-bold text-[#FFFFFF] group-hover:text-[#EEF4FF] transition-colors font-display">
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
      )}

      {/* 5. MOCK TEST & SPECIAL FEATURE SECTION */}
      {course.mockTestHighlight && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal y={14}>
            <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-12 shadow-sm border border-[#E2E8F0]">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[#EEF4FF] text-[#0E4BA4]">
                    <FileCheck2 className="w-3.5 h-3.5" />
                    <span>Special Feature</span>
                  </span>

                  <h3 className="text-3xl font-extrabold text-[#102A43] tracking-tight font-display">
                    {course.mockTestHighlight.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#5B6472] leading-relaxed">
                    {course.mockTestHighlight.desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-medium text-[#102A43]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Company owned by doctors studied from Bangladesh</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Top Medical Colleges &amp; Scholarship opportunities</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>15+ Years of experienced counselor</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>100% recommend (13 verified reviews)</span>
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
                      <span>Inquire via WhatsApp</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="rounded-2xl overflow-hidden shadow-md border border-[#E2E8F0]">
                    <img
                      src="/images/retina-cee-prep.jpg"
                      alt="Retina CEE Mock Test &amp; Preparation Guidance"
                      className="w-full h-full object-cover aspect-[4/3]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>
      )}

      {/* 6. REGISTRATION / INQUIRY FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal y={14}>
          <ContactForm prefilledInterest={`${course.shortName} Guidance`} />
        </ScrollReveal>
      </section>

      {/* Global CTA */}
      <ScrollReveal y={14}>
        <CTASection />
      </ScrollReveal>
    </div>
  );
}
