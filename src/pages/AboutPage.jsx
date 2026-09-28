import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';
import { 
  AboutOrbitsBackground, 
  CardOrbitalMotif, 
  ConnectingNodeGraphic,
  BoxCampusWaypoint,
  BoxIntegrityOrbits 
} from '../components/AbstractElements';

export default function AboutPage() {
  const breadcrumbs = [{ label: 'About Us' }];

  const helpAreas = [
    { title: 'English Test Preparation', desc: 'Systematic instruction in grammar, academic vocabulary, listening stamina, and test-day strategy.' },
    { title: 'IELTS Academic & General', desc: 'Modular preparation for Listening, Reading, Academic Writing, and face-to-face Speaking.' },
    { title: 'PTE Academic Coaching', desc: 'Workstation practice with automated speech recognition, timed dictation, and Pearson mock tests.' },
    { title: 'Study-Abroad Guidance', desc: 'Transparent counseling regarding university rankings, admission prerequisites, and living costs.' },
    { title: 'Destination Advisory', desc: 'Objective comparisons across Canada, Australia, the USA, the UK, Europe, and New Zealand.' },
    { title: 'Individual Counseling', desc: 'One-on-one sessions tailored to student academic background, budget, and long-term goals.' }
  ];

  const approachSteps = [
    {
      num: '01',
      title: 'Understand',
      desc: 'We start by evaluating your academic records, English proficiency baseline, target degree, and budget parameters.'
    },
    {
      num: '02',
      title: 'Prepare',
      desc: 'We provide structured IELTS or PTE coaching with certified trainers, updated curriculum, and weekly Saturday mock exams.'
    },
    {
      num: '03',
      title: 'Plan',
      desc: 'We map out verified institutions and study programs across recognized destinations, establishing clear document timelines.'
    },
    {
      num: '04',
      title: 'Progress',
      desc: 'With official test scores and verified credentials ready, we guide you through accurate university and visa applications.'
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* Page Header */}
      <PageHeader
        badge="About StudyHub"
        title="Guidance Built on Authentic Preparation."
        subtitle="StudyHub Int'l Education Pvt. Ltd. is an international education consultancy and language-test preparation center established in Bhairahawa, Nepal."
        breadcrumbs={breadcrumbs}
      />

      {/* 1. Who We Are Section */}
      <section className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="pb-2">
              <img
                src="/images/studyhub-logo.png"
                alt="StudyHub Int'l Education Pvt. Ltd."
                className="w-[155px] sm:w-[170px] h-auto object-contain"
              />
            </div>
            
            <div className="space-y-2">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#164B9B]">
                WHO WE ARE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight leading-tight font-display">
                Committed to Clear, Credible & Transparent Guidance.
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#667085] leading-relaxed font-normal">
              <p>
                <strong>StudyHub Int'l Education Pvt. Ltd.</strong> supports students preparing for English proficiency examinations and planning their international academic journeys. Located in the heart of Bhairahawa on Narayan Path (opposite Mahalakshmi Bank), our center serves students from across Rupandehi and surrounding areas.
              </p>
              <p>
                We believe that studying abroad should be founded on genuine language competence and honest counseling. We do not make sensationalized promises, claim artificial visa guarantees, or push students into ill-suited programs. Instead, we equip students with the test scores, skills, and objective information required to make informed decisions about their academic future.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden p-4 rounded-xl bg-[#164B9B] text-white shadow-xs group">
                <div className="absolute -right-2 -bottom-2 pointer-events-none opacity-30">
                  <BoxCampusWaypoint />
                </div>
                <div className="relative z-10">
                  <div className="text-xl sm:text-2xl font-bold font-display text-[#FFFFFF]">Bhairahawa</div>
                  <div className="text-xs text-white/[0.80] mt-1 leading-snug">Convenient physical campus on Narayan Path</div>
                </div>
              </div>
              <div className="relative overflow-hidden p-4 rounded-xl bg-[#164B9B] text-white shadow-xs group">
                <div className="absolute -right-2 -bottom-2 pointer-events-none opacity-30">
                  <BoxIntegrityOrbits />
                </div>
                <div className="relative z-10">
                  <div className="text-xl sm:text-2xl font-bold font-display text-[#FFFFFF]">100% Honest</div>
                  <div className="text-xs text-white/[0.80] mt-1 leading-snug">Realistic counseling without false claims</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            {/* Subtle overlapping circular forms behind image */}
            <AboutOrbitsBackground className="-top-10 -right-10 w-[460px] h-[400px]" />
            <div className="relative rounded-xl overflow-hidden shadow-xl border border-[#E2E6EC] aspect-[4/3] bg-[#0B2F6B] z-10">
              <img
                src="/images/counseling.jpg"
                alt="Counseling at StudyHub Int'l Education Bhairahawa"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. What We Help With (Off-White: #FAFBFC) */}
      <section className="py-20 sm:py-28 bg-[#FAFBFC] border-t border-b border-[#E2E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl space-y-3 mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#164B9B]">
              OUR SERVICES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight font-display">
              What We Help With
            </h2>
            <p className="text-sm sm:text-base text-[#667085] font-normal">
              From foundational English fluency to university document alignment, we support students through every milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {helpAreas.map((item, idx) => (
              <div
                key={idx}
                className="group p-8 bg-[#FFFFFF] rounded-3xl border border-[#E2E6EC] hover:border-[#164B9B]/30 shadow-xs hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-bold text-[#164B9B] tracking-wider uppercase">
                    Area 0{idx + 1}
                  </div>
                  <CardOrbitalMotif className="opacity-40 group-hover:opacity-85 transition-opacity" />
                </div>
                <h3 className="text-lg font-bold text-[#172033] font-display">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Our Approach: 4 Editorial Steps (Pure White) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#164B9B]">
            STRUCTURED METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight font-display">
            Our Approach
          </h2>
          <p className="text-sm sm:text-base text-[#667085] font-normal">
            A structured four-step methodology ensuring clarity and discipline at every stage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approachSteps.map((step) => (
            <div
              key={step.num}
              className="space-y-4"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-[#E2E6EC] font-display">
                {step.num}
              </div>
              <h3 className="text-lg font-bold text-[#172033] font-display">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed font-normal">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Ethics & Professional Commitment (Dark Navy: #0B2F6B) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B2F6B] text-white rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#164B9B]/25 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-widest uppercase text-white/[0.70]">
                  OUR CODE OF PRACTICE
                </span>
                <ConnectingNodeGraphic className="opacity-50 hidden sm:block" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FFFFFF] font-display">
                Honesty Above Marketing: Our Standards
              </h3>
              <p className="text-xs sm:text-sm text-white/[0.78] leading-relaxed max-w-2xl font-normal">
                StudyHub operates strictly within educational ethics. We do not claim fabricated visa approval statistics or guaranteed PR. We prepare students for what universities and immigration bodies genuinely assess: strong English proficiency, logical academic credentials, and authentic student intent.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-[#FFFFFF] hover:bg-[#EAF3FF] text-[#0B2F6B] text-xs font-semibold transition-colors shadow-xs"
              >
                <span>Speak with an Advisor</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <CTASection />
    </div>
  );
}
