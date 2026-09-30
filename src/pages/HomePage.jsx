import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MapPin, 
  Clock, 
  Check, 
  Phone,
  MessageSquare
} from 'lucide-react';
import { companyData } from '../data/companyData';
import { destinations } from '../data/destinationsData';
import { courses } from '../data/coursesData';
import { blogs } from '../data/blogsData';
import DestinationCard from '../components/DestinationCard';
import CourseCard from '../components/CourseCard';
import BlogCard from '../components/BlogCard';
import CTASection from '../components/CTASection';
import FAQAccordion from '../components/FAQAccordion';
import { 
  ScrollReveal, 
  StaggerGrid, 
  StaggerItem, 
  HeroFadeIn 
} from '../components/MotionReveal';
import { 
  HeroRouteBackground, 
  AboutOrbitsBackground, 
  DestinationsPathBackground, 
  CourseProgressBackground,
  ConnectingNodeGraphic,
  BoxCampusWaypoint,
  BoxIntegrityOrbits,
  CardProgressMotif
} from '../components/AbstractElements';

export default function HomePage() {
  // Editorial blog layout: 1 featured article + 3 smaller articles
  const featuredBlog = blogs.find(b => b.featuredOnHome) || blogs[0];
  const secondaryBlogs = blogs.filter(b => b.id !== featuredBlog.id).slice(0, 3);

  // Retina 4 Core Advantages (From Banner)
  const whyPoints = [
    {
      num: '01',
      title: 'Top Medical Colleges',
      desc: 'Guidance and admissions support for leading medical institutions and universities recognized by medical councils.'
    },
    {
      num: '02',
      title: 'Scholarship Opportunities',
      desc: 'Expert assistance in identifying government, merit-based, and institutional scholarship seats for deserving medical aspirants.'
    },
    {
      num: '03',
      title: '15+ Years Experienced Counselor',
      desc: 'Over 15 years of dedicated counseling experience guiding students and families through complex medical admissions.'
    },
    {
      num: '04',
      title: 'Company Owned by Doctors Studied from Bangladesh',
      desc: 'Run by a team of doctors who graduated from Dhaka University, offering authentic firsthand medical insights.'
    }
  ];

  // Medical Admission Journey: 4-stage process
  const journeySteps = [
    {
      step: '01',
      title: 'Doctor Counseling',
      desc: 'Initial one-on-one consultation with Dhaka University alumni doctors to evaluate academic eligibility and career goals.'
    },
    {
      step: '02',
      title: 'College Selection',
      desc: 'Selecting top medical institutions across Bangladesh, China, India, and the Philippines tailored to your ambitions.'
    },
    {
      step: '03',
      title: 'Form & Documentation',
      desc: 'Free CEE form-filling support (Pay Rs. 0 only), academic verification, equivalence, and formal university applications.'
    },
    {
      step: '04',
      title: 'Admission & Departure',
      desc: 'Confirmed admission offer, student visa assistance, pre-departure briefing, and dedicated hostel and local support.'
    }
  ];

  // Frequently Asked Questions
  const homeFaqs = [
    {
      question: 'Why is Bangladesh a premier destination for MBBS and BDS?',
      answer: 'Bangladesh offers a disease pattern, patient demographic, and clinical curriculum identical to Nepal and the subcontinent. With high clinical bed occupancy in teaching hospitals, English-medium education, and strong pass rates in medical licensing exams, it is the top choice for aspiring doctors. Furthermore, Retina is owned and guided by doctors who graduated directly from Dhaka University.'
    },
    {
      question: 'Does Retina charge any fee for CEE online form submission?',
      answer: 'No. Retina Educational Consultancy invites all CEE aspirants for free online exam form submission at our Putalisadak office with ZERO charges (Pay Rs. 0 only), alongside a free counseling session with medical experts.'
    },
    {
      question: 'What is the Friday CEE Nursing Mock Test session?',
      answer: 'We organize dedicated CEE Nursing mock tests and marks-boosting sessions on Fridays starting at 3:00 PM at our Putalisadak office. It helps nursing aspirants test their readiness under exam conditions and gain proven score-boosting strategies.'
    },
    {
      question: 'Who will guide me during my admission process at Retina?',
      answer: 'You will receive direct counseling from our senior advisors with 15+ years of counselor experience alongside practicing medical doctors who graduated from Dhaka University and understand medical training firsthand.'
    },
    {
      question: 'Where is Retina Educational Consultancy located and when can I visit?',
      answer: 'Our office is located at New Plaza, Putalisadak-29, Kathmandu, Nepal. We are Always Open to welcome students and parents for in-person consultations. You can call us at 01-4547423 or WhatsApp us at +880 1701-882586.'
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* ============================================================
          1. HERO SECTION (White Background with Soft Entrance)
          ============================================================ */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-32 bg-[#FFFFFF]">
        {/* Extremely soft subtle radial light */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-[#EEF4FF]/70 via-[#EEF4FF]/40 to-transparent blur-[120px] pointer-events-none -z-10" />

        {/* Minimal global journey route element with tiny location points */}
        <HeroRouteBackground />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column with soft staggered entrance */}
            <div className="lg:col-span-7 space-y-8 text-left">
              
              {/* Refined Eyebrow */}
              <HeroFadeIn delay={0.06} y={10}>
                <div className="inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF914D]"></span>
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#5B6472]">
                    RETINA EDUCATIONAL CONSULTANCY PVT. LTD.
                  </span>
                </div>
              </HeroFadeIn>

              {/* Large Headline */}
              <HeroFadeIn delay={0.14} y={12}>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#102A43] tracking-tight leading-[1.12] font-display">
                  Doctor-Led Guidance for<br />
                  <span className="text-[#0E4BA4]">Medical Admissions Abroad.</span>
                </h1>
              </HeroFadeIn>

              {/* Supporting Paragraph */}
              <HeroFadeIn delay={0.22} y={12}>
                <p className="text-base sm:text-lg text-[#5B6472] max-w-xl leading-relaxed font-normal">
                  Run by a team of doctors who graduated from Dhaka University, we bring 16 years of trusted expertise in guiding students for medical admissions in Bangladesh, China, India, and the Philippines.
                </p>
              </HeroFadeIn>

              {/* Action Buttons */}
              <HeroFadeIn delay={0.30} y={12}>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 h-13 px-8 rounded-xl bg-[#0E4BA4] hover:bg-[#0A3B82] text-white text-sm font-semibold tracking-wide transition-all duration-300 ease-out transform hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                  >
                    <span>Talk to a Counselor</span>
                    <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <Link
                    to="/courses"
                    className="inline-flex items-center justify-center gap-2 h-13 px-8 rounded-xl bg-transparent border border-[#0E4BA4] text-[#0E4BA4] hover:bg-[#0E4BA4] hover:text-white text-sm font-semibold tracking-wide transition-all duration-300 ease-out transform hover:-translate-y-0.5"
                  >
                    <span>Explore Medical Programs</span>
                  </Link>
                </div>
              </HeroFadeIn>

              {/* Micro-trust line */}
              <HeroFadeIn delay={0.38} y={10}>
                <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-[#5B6472] font-medium">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0E4BA4]"></span>
                    <span>New Plaza, Putalisadak-29</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0E4BA4]"></span>
                    <span>15+ Years Experienced Counselor</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0E4BA4]"></span>
                    <span>Dhaka University Graduate Doctors</span>
                  </div>
                </div>
              </HeroFadeIn>
            </div>

            {/* Right Visual: Single editorial student image + ONE subtle glass card */}
            <div className="lg:col-span-5 relative">
              <HeroFadeIn delay={0.25} y={16}>
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  
                  {/* Main Hero Photo with gentle floating animation */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E2E8F0] aspect-[4/5] bg-[#102A43] animate-float-subtle">
                    <img
                      src="/images/retina-hero.jpg"
                      alt="Retina Educational Consultancy Medical Guidance"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/60 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* EXACTLY ONE subtle floating frosted glass card */}
                  <div className="absolute -bottom-6 left-6 right-6 sm:left-8 sm:right-8 z-20">
                    <div className="glass-frosted p-5 rounded-2xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs font-bold uppercase tracking-wider text-[#FF914D]">
                            MBBS • MD • BDS • NURSING
                          </div>
                          <div className="text-sm font-bold text-[#102A43] mt-0.5 font-display">
                            Doctor-Led Guidance
                          </div>
                          <div className="text-xs text-[#5B6472] mt-0.5">
                            16 Years Expertise • Putalisadak
                          </div>
                        </div>
                        <div className="w-9 h-9 rounded-xl bg-[#0E4BA4] text-white flex items-center justify-center shrink-0 shadow-xs">
                          <Check className="w-4 h-4 stroke-[2.5]" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </HeroFadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          2. ABOUT SECTION (White Background)
          ============================================================ */}
      <section className="relative overflow-hidden py-24 sm:py-32 bg-[#FFFFFF] border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Large Image with subtle overlapping circular forms behind */}
            <div className="lg:col-span-6 relative">
              <ScrollReveal y={16}>
                <AboutOrbitsBackground className="-top-12 -left-12 w-[460px] h-[400px]" />
                <div className="relative rounded-xl overflow-hidden shadow-lg border border-[#E2E8F0] aspect-[4/3] bg-[#102A43] z-10">
                  <img
                    src="/images/retina-about.jpg"
                    alt="Doctor Leadership and Counseling Team at Retina Educational Consultancy Putalisadak"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Editorial Content */}
            <div className="lg:col-span-6 space-y-6">
              <ScrollReveal y={14} delay={0.08}>
                <div className="space-y-2">
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#0E4BA4]">
                    ABOUT RETINA EDUCATIONAL CONSULTANCY
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight leading-tight font-display">
                    Guidance That Starts With Doctor-Led Expertise.
                  </h2>
                </div>
              </ScrollReveal>

              <ScrollReveal y={14} delay={0.16}>
                <div className="space-y-4 text-sm sm:text-base text-[#5B6472] leading-relaxed font-normal">
                  <p>
                    Run by a team of doctors who graduated from Dhaka University, we bring 16 years of trusted expertise in guiding students for medical admissions in Bangladesh, China, India, and the Philippines.
                  </p>
                  <p>
                    Based at New Plaza, Putalisadak-29, Kathmandu, Nepal, our company is owned by doctors who studied in Bangladesh. We provide students and parents with direct counseling from experienced advisors with 15+ years of counselor experience.
                  </p>
                </div>
              </ScrollReveal>

              {/* Two Highlight Blue Boxes with Exact Equal Dimensions & Symmetrical Layout */}
              <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 w-full" stagger={0.08}>
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

              <ScrollReveal y={10} delay={0.24}>
                <div className="pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0E4BA4] hover:text-[#0A3B82] transition-colors duration-300 group"
                  >
                    <span>About Retina</span>
                    <ArrowRight className="w-4 h-4 transform transition-transform duration-300 ease-out group-hover:translate-x-1" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          3. DESTINATIONS SECTION (Subtle Staggered Card Reveals)
          ============================================================ */}
      <section className="relative overflow-hidden py-24 sm:py-32 bg-[#FFFFFF]">
        <DestinationsPathBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <ScrollReveal y={14}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#0E4BA4]">
                  DESTINATIONS
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight font-display">
                  Where Could Your Medical Career Take You?
                </h2>
                <p className="text-sm sm:text-base text-[#5B6472] font-normal">
                  Explore leading destinations for MBBS, MD, MS, BDS, and nursing abroad, led by medical admission experts.
                </p>
              </div>

              <Link
                to="/destinations"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#0E4BA4] hover:text-[#0A3B82] transition-colors duration-300 shrink-0 group"
              >
                <span>View All 4 Destinations</span>
                <ArrowRight className="w-4 h-4 transform transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Grid with Subtle Staggered Card Reveals */}
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8" stagger={0.07}>
            {destinations.map((dest) => (
              <StaggerItem key={dest.id}>
                <DestinationCard destination={dest} />
              </StaggerItem>
            ))}
          </StaggerGrid>

        </div>
      </section>

      {/* ============================================================
          4. COURSES SECTION (Soft Blue: #EEF4FF)
          ============================================================ */}
      <section className="relative overflow-hidden py-24 sm:py-32 bg-[#EEF4FF] border-t border-b border-[#E2E8F0]">
        <CourseProgressBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <ScrollReveal y={14}>
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-14 sm:mb-20">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#0E4BA4]">
                OUR PROGRAMS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight font-display">
                Empowering Your Medical Career.
              </h2>
              <p className="text-sm sm:text-base text-[#5B6472] font-normal">
                Structured counseling and direct admissions support for MBBS, MD, MS, BDS, B.Sc. Nursing, AG, and VET.
              </p>
            </div>
          </ScrollReveal>

          {/* Two Large Editorial Course Cards with Staggered Entrance */}
          <StaggerGrid className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10" stagger={0.12}>
            <StaggerItem>
              <CourseCard course={courses.mbbs} />
            </StaggerItem>
            <StaggerItem>
              <CourseCard course={courses.bds} />
            </StaggerItem>
          </StaggerGrid>

          <ScrollReveal y={12} delay={0.15}>
            <div className="mt-12 text-center">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-transparent border border-[#0E4BA4] text-[#0E4BA4] hover:bg-[#0E4BA4] hover:text-white text-xs font-semibold tracking-wide transition-all duration-300 ease-out"
              >
                <span>View All 7 Medical Programs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ============================================================
          5. MBBS / MD COMPARISON (White Background)
          ============================================================ */}
      <section className="py-24 sm:py-32 bg-[#FFFFFF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal y={14}>
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#0E4BA4]">
                MEDICAL EDUCATION PATHWAYS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight font-display">
                Undergraduate vs Postgraduate Pathways
              </h2>
              <p className="text-sm sm:text-base text-[#5B6472] font-normal">
                Whether preparing for your first medical degree or advancing to clinical specialization, our doctor counselors provide direct admission guidance.
              </p>
            </div>
          </ScrollReveal>

          {/* Two Minimal Editorial Columns with Staggered Entrance */}
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-8" stagger={0.1}>
            
            {/* Column 1: MBBS / BDS */}
            <StaggerItem>
              <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-xs flex flex-col justify-between space-y-8 h-full transition-all duration-400 ease-out hover:shadow-lg hover:-translate-y-1">
                <div className="space-y-6">
                  <div className="pb-4 border-b border-[#E2E8F0] flex items-start justify-between">
                    <div>
                      <span className="text-xs font-semibold text-[#0E4BA4] uppercase tracking-wider">Primary Medical Degree</span>
                      <h3 className="text-2xl font-extrabold text-[#102A43] mt-1 font-display">MBBS & BDS</h3>
                      <p className="text-xs text-[#8D98AA] mt-1">Bachelor of Medicine, Bachelor of Surgery & Dental</p>
                    </div>
                    <CardProgressMotif className="opacity-70 mt-1" />
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

            {/* Column 2: MD / MS */}
            <StaggerItem>
              <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-10 border border-[#E2E8F0] shadow-xs flex flex-col justify-between space-y-8 h-full transition-all duration-400 ease-out hover:shadow-lg hover:-translate-y-1">
                <div className="space-y-6">
                  <div className="pb-4 border-b border-[#E2E8F0] flex items-start justify-between">
                    <div>
                      <span className="text-xs font-semibold text-[#0E4BA4] uppercase tracking-wider">Clinical Specialization</span>
                      <h3 className="text-2xl font-extrabold text-[#102A43] mt-1 font-display">MD & MS</h3>
                      <p className="text-xs text-[#8D98AA] mt-1">Doctor of Medicine & Master of Surgery</p>
                    </div>
                    <CardProgressMotif className="opacity-70 mt-1" />
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

          {/* Primary Counseling CTA */}
          <ScrollReveal y={12} delay={0.15}>
            <div className="mt-12 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[#0E4BA4] hover:bg-[#0A3B82] text-white text-xs font-semibold tracking-wide transition-all duration-300 ease-out transform hover:-translate-y-0.5 shadow-xs hover:shadow-md"
              >
                <span>Talk to a Doctor Counselor for Program Selection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ============================================================
          6. THE RETINA ADVANTAGE (Pure White Background: #FFFFFF)
          ============================================================ */}
      <section className="py-24 sm:py-32 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal y={14}>
            <div className="max-w-2xl space-y-3 mb-16 sm:mb-20">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#0E4BA4]">
                THE RETINA ADVANTAGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight font-display">
                Four Pillars of Medical Counseling.
              </h2>
              <p className="text-sm sm:text-base text-[#5B6472] font-normal">
                Direct expertise, verified top medical colleges, and genuine doctor-led mentorship for your medical career.
              </p>
            </div>
          </ScrollReveal>

          {/* 4 Large Number Points with Staggered Entrance */}
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10" stagger={0.08}>
            {whyPoints.map((point) => (
              <StaggerItem key={point.num}>
                <div className="space-y-4">
                  <div className="text-4xl sm:text-5xl font-extrabold text-[#E2E8F0] font-display">
                    {point.num}
                  </div>
                  <h3 className="text-lg font-bold text-[#102A43] font-display">
                    {point.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed font-normal">
                    {point.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGrid>

        </div>
      </section>

      {/* ============================================================
          7. STUDENT JOURNEY (Soft Blue: #EEF4FF)
          ============================================================ */}
      <section className="py-24 sm:py-32 bg-[#EEF4FF] border-t border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal y={14}>
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-16 sm:mb-20">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#0E4BA4]">
                ADMISSION JOURNEY
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight font-display">
                A Clear, Step-by-Step Pathway.
              </h2>
              <p className="text-sm sm:text-base text-[#5B6472] font-normal">
                From initial doctor consultation and zero-charge CEE form assistance to verified admission in top medical colleges.
              </p>
            </div>
          </ScrollReveal>

          {/* Horizontal Process Grid on Desktop with thin connecting lines */}
          <div className="relative">
            <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-[#E2E8F0] -z-0" />

            <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10" stagger={0.08}>
              {journeySteps.map((step) => (
                <StaggerItem key={step.step}>
                  <div className="bg-[#FFFFFF] lg:bg-transparent p-6 lg:p-0 rounded-2xl lg:rounded-none border border-[#E2E8F0] lg:border-none space-y-3 shadow-2xs lg:shadow-none">
                    <div className="w-12 h-12 rounded-full bg-[#FFFFFF] border border-[#E2E8F0] flex items-center justify-center font-bold text-xs text-[#0E4BA4] shadow-xs">
                      {step.step}
                    </div>
                    <h3 className="text-base font-bold text-[#102A43] pt-1 font-display">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed font-normal">
                      {step.desc}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>

        </div>
      </section>

      {/* ============================================================
          8. PHYSICAL CENTER BANNER (Dark Navy: #102A43)
          ============================================================ */}
      <section className="py-20 sm:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal y={16}>
            <div className="bg-[#102A43] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-white/10 shadow-xl">
              <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#0E4BA4]/25 blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/[0.70]">
                      <MapPin className="w-3.5 h-3.5 text-[#FF914D]" />
                      <span>New Plaza, Putalisadak-29, Kathmandu, Nepal</span>
                    </div>
                    <ConnectingNodeGraphic className="opacity-60 hidden sm:block" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight font-display">
                    Visit Our Putalisadak Office
                  </h3>
                  <p className="text-xs sm:text-sm text-white/[0.78] leading-relaxed max-w-2xl font-normal">
                    Meet our doctor counselors face-to-face, discuss your medical career ambitions, and get free CEE exam form fill-up assistance with expert advice.
                  </p>
                  <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-white/[0.60]">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-white/[0.60]" />
                      <span>Always Open • 100% Recommend (13 Reviews)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Phone className="w-4 h-4 text-white/[0.60]" />
                      <a href="tel:014547423" className="hover:text-white transition-colors">01-4547423</a>
                      <span>•</span>
                      <a href={companyData.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">{companyData.whatsappNumber}</a>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-[#FFFFFF] hover:bg-[#EEF4FF] text-[#0E4BA4] font-semibold text-xs transition-all duration-300 ease-out shadow-xs transform hover:-translate-y-0.5"
                  >
                    <span>Get Directions & Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <a
                    href={companyData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-white/10 hover:bg-white/[0.16] text-[#FFFFFF] font-semibold text-xs border border-white/20 transition-all duration-300 ease-out transform hover:-translate-y-0.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-current text-emerald-400" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>

              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================
          9. FREQUENTLY ASKED QUESTIONS (Animated Accordion Expansion)
          ============================================================ */}
      <section className="py-24 sm:py-32 bg-[#FFFFFF] border-t border-b border-[#E2E8F0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal y={14}>
            <div className="text-center max-w-2xl mx-auto space-y-3 mb-14 sm:mb-16">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#0E4BA4]">
                QUESTIONS & ANSWERS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight font-display">
                Frequently Asked Questions
              </h2>
              <p className="text-sm sm:text-base text-[#5B6472] font-normal">
                Clear answers regarding medical admissions, CEE form fill-up, Bangladesh colleges, and doctor counseling.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal y={14} delay={0.08}>
            <FAQAccordion items={homeFaqs} defaultOpenIndex={0} />
          </ScrollReveal>

          <ScrollReveal y={10} delay={0.16}>
            <div className="mt-10 text-center text-xs text-[#5B6472]">
              <span>Have a specific inquiry? </span>
              <Link to="/contact" className="font-semibold text-[#0E4BA4] hover:underline">
                Contact our doctor counselors directly →
              </Link>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ============================================================
          10. EDITORIAL BLOG SECTION (Pure White Background: #FFFFFF)
          ============================================================ */}
      <section className="py-24 sm:py-32 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <ScrollReveal y={14}>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#0E4BA4]">
                  UPDATES & ANNOUNCEMENTS
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight font-display">
                  Featured Notices & Medical Insights
                </h2>
                <p className="text-sm sm:text-base text-[#5B6472] font-normal">
                  Stay updated on CEE nursing mock tests, MECEE alerts, Bangladesh admissions, and student guidance.
                </p>
              </div>

              <Link
                to="/blogs"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#0E4BA4] hover:text-[#0A3B82] transition-colors duration-300 shrink-0 group"
              >
                <span>View All Articles</span>
                <ArrowRight className="w-4 h-4 transform transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Featured Large Article with ScrollReveal */}
          <ScrollReveal y={16} delay={0.05} className="mb-10">
            <BlogCard blog={featuredBlog} featured={true} />
          </ScrollReveal>

          {/* Three Smaller Articles Below with Staggered Entrance */}
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-3 gap-8" stagger={0.08}>
            {secondaryBlogs.map((blog) => (
              <StaggerItem key={blog.id}>
                <BlogCard blog={blog} />
              </StaggerItem>
            ))}
          </StaggerGrid>

        </div>
      </section>

      {/* ============================================================
          11. FINAL CTA (Dark Navy: #102A43 with Static Map & Airplane Journey)
          ============================================================ */}
      <ScrollReveal y={14}>
        <CTASection />
      </ScrollReveal>

    </div>
  );
}
