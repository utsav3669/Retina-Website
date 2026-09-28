import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  CheckCircle2, 
  MessageSquare, 
  PhoneCall, 
  Compass, 
  BookOpen
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';
import ContactForm from '../components/ContactForm';
import { destinations } from '../data/destinationsData';
import { companyData } from '../data/companyData';
import { ScrollReveal, StaggerGrid, StaggerItem } from '../components/MotionReveal';

export default function DestinationDetailPage() {
  const { slug } = useParams();
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    return <Navigate to="/destinations" replace />;
  }

  const breadcrumbs = [
    { label: 'Destinations', to: '/destinations' },
    { label: destination.name }
  ];

  return (
    <div className="space-y-20 sm:space-y-28 bg-[#FFFFFF]">
      {/* 1. HERO HEADER with soft entrance */}
      <PageHeader
        badge={`Study Destination • ${destination.flag}`}
        title={`Study in ${destination.name}`}
        subtitle={destination.tagline}
        breadcrumbs={breadcrumbs}
      >
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={companyData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm transition-all duration-300 ease-out transform hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Inquire on WhatsApp</span>
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 py-3 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-all duration-300 ease-out transform hover:-translate-y-0.5"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Book Counseling Session</span>
          </Link>
        </div>
      </PageHeader>

      {/* 2. HERO IMAGE & DESTINATION OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal y={12}>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#164B9B]">
                Country Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight font-display mt-2">
                An Educational Destination with Global Reach
              </h2>
              <p className="text-sm sm:text-base text-[#667085] leading-relaxed mt-3">
                {destination.overview}
              </p>
            </ScrollReveal>

            <ScrollReveal y={10} delay={0.1}>
              <div className="p-5 rounded-2xl bg-[#EAF3FF] border border-[#E2E6EC] flex items-start gap-3">
                <Compass className="w-5 h-5 text-[#164B9B] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-[#172033] leading-relaxed">
                  <strong>StudyHub Academic Guidance:</strong> We assist students from Bhairahawa with authentic university course selection, required IELTS/PTE scores, and verified application checklists for {destination.name}.
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5">
            <ScrollReveal y={16}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#0B2F6B] aspect-[4/3]">
                <img
                  src={destination.image}
                  alt={`University Campus in ${destination.name}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F6B]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <span className="text-lg mr-2">{destination.flag}</span>
                  <span className="font-semibold text-white">Higher Education in {destination.name}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 3. WHY STUDENTS CONSIDER (Off-White Background) */}
      <section className="bg-[#FAFBFC] py-16 sm:py-24 border-t border-b border-[#E2E6EC]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          
          <ScrollReveal y={14}>
            <div className="max-w-2xl mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#164B9B]">
                Distinct Advantages
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight font-display">
                Why Students Consider {destination.name}
              </h2>
              <p className="text-sm text-[#667085]">
                Key institutional and cultural factors that draw international students each year.
              </p>
            </div>
          </ScrollReveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-6" stagger={0.08}>
            {destination.whyConsider.map((item, idx) => (
              <StaggerItem key={idx}>
                <div
                  className="p-6 bg-[#FFFFFF] rounded-2xl shadow-xs border border-[#E2E6EC] space-y-3 h-full transition-all duration-300 hover:shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#EAF3FF] text-[#164B9B] flex items-center justify-center font-bold text-xs">
                      0{idx + 1}
                    </div>
                    <h3 className="text-base font-bold text-[#172033] font-display">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed pl-11">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

        </div>
      </section>

      {/* 4. STUDY ENVIRONMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal y={14}>
          <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-12 shadow-sm border border-[#E2E6EC]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#164B9B]">
                  Academic Culture
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172033] tracking-tight font-display">
                  Study Environment in {destination.name}
                </h3>
                <p className="text-sm sm:text-base text-[#667085] leading-relaxed">
                  {destination.studyEnvironment}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-medium text-[#172033]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Student Support Centers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Multicultural Campuses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Modern Labs & Libraries</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
                <a
                  href={companyData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs text-center transition-all duration-300 ease-out shadow-sm flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Talk to a StudyHub Counselor</span>
                </a>
                <Link
                  to="/contact"
                  className="py-3.5 px-6 rounded-xl bg-transparent border border-[#164B9B] text-[#164B9B] hover:bg-[#EAF3FF] hover:text-[#0B2F6B] font-semibold text-xs text-center transition-all duration-300 ease-out"
                >
                  Schedule In-Person Meeting
                </Link>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* 5. POPULAR STUDY AREAS (Very Light Blue: #F4F8FD) */}
      <section className="bg-[#F4F8FD] py-16 sm:py-24 border-t border-b border-[#E2E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal y={14}>
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#164B9B]">
                Disciplines & Fields
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight font-display">
                Popular Study Areas
              </h2>
              <p className="text-sm text-[#667085]">
                Common fields of study chosen by international students in {destination.name}.
              </p>
            </div>
          </ScrollReveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" stagger={0.07}>
            {destination.popularStudyAreas.map((area, idx) => (
              <StaggerItem key={idx}>
                <div
                  className="p-6 bg-[#FFFFFF] rounded-2xl border border-[#E2E6EC] shadow-2xs hover:border-[#164B9B] transition-all duration-300 space-y-2 h-full"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#EAF3FF] text-[#164B9B] flex items-center justify-center">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-[#172033] font-display">
                      {area.name}
                    </h4>
                  </div>
                  <p className="text-xs text-[#667085] leading-relaxed pl-10">
                    {area.details}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </section>

      {/* 6. STUDENT JOURNEY (Dark Navy: #0B2F6B) */}
      <section className="bg-[#0B2F6B] text-white py-16 sm:py-24 rounded-3xl mx-4 sm:mx-6 lg:mx-8 shadow-xl border border-white/10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#164B9B]/25 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          
          <ScrollReveal y={14}>
            <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/[0.70] border border-white/15 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E21F26]" />
                <span>Step-by-Step Path</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FFFFFF] font-display">
                Student Journey: {destination.name}
              </h2>
              <p className="text-sm sm:text-base text-white/[0.78] font-normal">
                Choose → Prepare → Apply → Plan → Travel. How we support you through every transition.
              </p>
            </div>
          </ScrollReveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-5 gap-6" stagger={0.07}>
            {destination.journeySteps.map((step, idx) => (
              <StaggerItem key={idx}>
                <div
                  className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 flex flex-col justify-between group hover:border-white/30 transition-all duration-300 h-full hover:-translate-y-1"
                >
                  <div className="space-y-3">
                    <span className="text-2xl font-extrabold font-display text-[#FFFFFF]">
                      {step.step}
                    </span>
                    <h3 className="text-base font-bold text-[#FFFFFF] group-hover:text-[#EAF3FF] transition-colors font-display">
                      {step.title}
                    </h3>
                    <p className="text-xs text-white/[0.78] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-white/[0.60]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Step {step.step} Verified</span>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

        </div>
      </section>

      {/* 7. CONTACT / COUNSELOR INQUIRY FORM */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal y={14}>
          <ContactForm prefilledInterest={`${destination.name} Study Options`} />
        </ScrollReveal>
      </section>

      {/* Global CTA */}
      <ScrollReveal y={14}>
        <CTASection />
      </ScrollReveal>
    </div>
  );
}
