import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';
import { ScrollReveal, StaggerGrid, StaggerItem } from '../components/MotionReveal';
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
    { title: 'MBBS & BDS Admissions', desc: 'Direct guidance for top medical colleges in Bangladesh, China, India, and the Philippines.' },
    { title: 'MD & MS Clinical Guidance', desc: 'Postgraduate specialization admission support guided by Dhaka University alumni doctors.' },
    { title: 'B.Sc. Nursing Preparation', desc: 'Dedicated guidance, Friday 3 PM mock tests, and marks-boosting sessions for CEE Nursing aspirants.' },
    { title: 'CEE Online Form Submission', desc: 'Free exam form-fillup at our Putalisadak office with ZERO charges (Pay Rs. 0 only).' },
    { title: 'Scholarship Opportunities', desc: 'Evaluation and application support for government, merit, and institutional medical scholarships.' },
    { title: 'Doctor-to-Student Mentorship', desc: 'Direct consultation with practicing medical doctors who understand curriculum and clinical training.' }
  ];

  const approachSteps = [
    {
      num: '01',
      title: 'Doctor Consultation',
      desc: 'Initial evaluation of your academic records, CEE/NEET scores, career ambition, and preferred destination.'
    },
    {
      num: '02',
      title: 'College Selection',
      desc: 'Identifying top medical colleges with high patient bed flow, recognized clinical training, and council accreditation.'
    },
    {
      num: '03',
      title: 'Free Form & Documentation',
      desc: 'Zero-charge CEE online form submission (Pay Rs. 0 only), document equivalence, and formal university applications.'
    },
    {
      num: '04',
      title: 'Enrollment & Departure',
      desc: 'Confirmed admission letter processing, student visa clearance, travel briefing, and ongoing hostel and local support.'
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* Page Header with soft entrance */}
      <PageHeader
        badge="About Retina"
        title="Doctor-Led Expertise in Medical Admissions."
        subtitle="Retina Educational Consultancy Pvt. Ltd. is run by a team of doctors who graduated from Dhaka University, bringing 16 years of trusted expertise in guiding students for medical admissions in Bangladesh."
        breadcrumbs={breadcrumbs}
      />

      {/* 1. Who We Are Section */}
      <section className="relative overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal y={12}>
              <div className="pb-2">
                <img
                  src="/images/retina-logo.png"
                  alt="Retina Educational Consultancy Pvt. Ltd."
                  className="w-[180px] sm:w-[200px] h-auto object-contain"
                />
              </div>
              
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#0E4BA4]">
                  WHO WE ARE
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight leading-tight font-display">
                  Committed to Authentic, Doctor-Led Guidance.
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal y={14} delay={0.08}>
              <div className="space-y-4 text-sm sm:text-base text-[#5B6472] leading-relaxed font-normal">
                <p>
                  <strong>Retina Educational Consultancy Pvt. Ltd.</strong> is run by a team of doctors who graduated from Dhaka University. We bring 16 years of trusted expertise in guiding students for medical admissions in Bangladesh, China, India, and the Philippines.
                </p>
                <p>
                  Located at New Plaza, Putalisadak-29, Kathmandu, Nepal, our company is owned by doctors who studied in Bangladesh. With over 15 years of experienced counselor guidance, we provide students and parents with firsthand medical insights, honest college counseling, and dedicated support for MBBS, MD, MS, BDS, B.Sc. Nursing, AG, and VET aspirants.
                </p>
              </div>
            </ScrollReveal>

            {/* Two Highlight Blue Boxes with Exact Equal Dimensions & Symmetrical Layout */}
            <StaggerGrid className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full" stagger={0.08}>
              <StaggerItem className="w-full h-full">
                <div className="relative overflow-hidden p-5 rounded-xl bg-[#0E4BA4] text-white shadow-xs group card-elevate w-full h-[124px] flex flex-col justify-center transition-all duration-300 hover:-translate-y-0.5">
                  <div className="absolute -right-2 -bottom-2 pointer-events-none opacity-30">
                    <BoxCampusWaypoint />
                  </div>
                  <div className="relative z-10 flex flex-col justify-center">
                    <div className="text-xl sm:text-2xl font-bold font-display text-[#FFFFFF] leading-tight">
                      Putalisadak
                    </div>
                    <div className="text-xs text-white/[0.80] mt-1.5 leading-snug">
                      New Plaza, Putalisadak-29, Kathmandu
                    </div>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem className="w-full h-full">
                <div className="relative overflow-hidden p-5 rounded-xl bg-[#0E4BA4] text-white shadow-xs group card-elevate w-full h-[124px] flex flex-col justify-center transition-all duration-300 hover:-translate-y-0.5">
                  <div className="absolute -right-2 -bottom-2 pointer-events-none opacity-30">
                    <BoxIntegrityOrbits />
                  </div>
                  <div className="relative z-10 flex flex-col justify-center">
                    <div className="text-xl sm:text-2xl font-bold font-display text-[#FFFFFF] leading-tight">
                      Doctor-Led
                    </div>
                    <div className="text-xs text-white/[0.80] mt-1.5 leading-snug">
                      Dhaka University graduate doctors & 16 yrs expertise
                    </div>
                  </div>
                </div>
              </StaggerItem>
            </StaggerGrid>
          </div>

          <div className="lg:col-span-6 relative">
            <ScrollReveal y={16}>
              <AboutOrbitsBackground className="-top-10 -right-10 w-[460px] h-[400px]" />
              <div className="relative rounded-xl overflow-hidden shadow-xl border border-[#E2E8F0] aspect-[4/3] bg-[#102A43] z-10">
                <img
                  src="/images/retina-counseling.jpg"
                  alt="Doctor Counseling at Retina Educational Consultancy Putalisadak"
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 2. What We Help With (Soft Blue: #EEF4FF) */}
      <section className="py-20 sm:py-28 bg-[#EEF4FF] border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal y={14}>
            <div className="max-w-2xl space-y-3 mb-14">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#0E4BA4]">
                OUR SERVICES
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight font-display">
                What We Help With
              </h2>
              <p className="text-sm sm:text-base text-[#5B6472] font-normal">
                From CEE exam form fill-up to top medical college enrollment abroad, we support students through every milestone.
              </p>
            </div>
          </ScrollReveal>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" stagger={0.07}>
            {helpAreas.map((item, idx) => (
              <StaggerItem key={idx}>
                <div
                  className="group p-8 bg-[#FFFFFF] rounded-3xl border border-[#E2E8F0] hover:border-[#0E4BA4]/30 shadow-xs hover:shadow-lg transition-all duration-400 ease-out transform hover:-translate-y-1 space-y-3 h-full"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-xs font-bold text-[#0E4BA4] tracking-wider uppercase">
                      Area 0{idx + 1}
                    </div>
                    <CardOrbitalMotif className="opacity-40 group-hover:opacity-85 transition-opacity duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-[#102A43] font-display">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

        </div>
      </section>

      {/* 3. Our Approach: 4 Editorial Steps (Pure White) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal y={14}>
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#0E4BA4]">
              STRUCTURED METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight font-display">
              Our Approach
            </h2>
            <p className="text-sm sm:text-base text-[#5B6472] font-normal">
              A structured four-step methodology ensuring clarity and clinical insight at every stage.
            </p>
          </div>
        </ScrollReveal>

        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" stagger={0.08}>
          {approachSteps.map((step) => (
            <StaggerItem key={step.num}>
              <div className="space-y-4">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#E2E8F0] font-display">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-[#102A43] font-display">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      {/* 4. Ethics & Professional Commitment (Dark Navy: #102A43) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal y={14}>
          <div className="bg-[#102A43] text-white rounded-3xl p-8 sm:p-12 border border-white/10 relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#0E4BA4]/25 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-widest uppercase text-white/[0.70]">
                    OUR CODE OF PRACTICE
                  </span>
                  <ConnectingNodeGraphic className="opacity-50 hidden sm:block" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#FFFFFF] font-display">
                  Authentic Medical Guidance: Our Standards
                </h3>
                <p className="text-xs sm:text-sm text-white/[0.78] leading-relaxed max-w-2xl font-normal">
                  Retina Educational Consultancy operates strictly within educational and medical ethics. Run by doctors who studied in Bangladesh and backed by 15+ years of counselor experience, we provide honest assessments of medical curriculums, hospital beds, clinical exposure, and regulatory council recognition.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-[#FFFFFF] hover:bg-[#EEF4FF] text-[#0E4BA4] text-xs font-semibold transition-all duration-300 ease-out shadow-xs transform hover:-translate-y-0.5"
                >
                  <span>Speak with a Doctor Counselor</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
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
