import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  MessageSquare, 
  MapPin, 
  Clock, 
  Check, 
  Phone
} from 'lucide-react';
import { companyData } from '../data/companyData';
import { destinations } from '../data/destinationsData';
import { courses } from '../data/coursesData';
import { blogs } from '../data/blogsData';
import DestinationCard from '../components/DestinationCard';
import CourseCard from '../components/CourseCard';
import BlogCard from '../components/BlogCard';
import CTASection from '../components/CTASection';
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

  // Why StudyHub 4 Editorial Points
  const whyPoints = [
    {
      num: '01',
      title: 'Expert Preparation',
      desc: 'Learn with experienced trainers focused on genuine language improvement, communicative confidence, and test-specific strategies.'
    },
    {
      num: '02',
      title: 'Structured Learning',
      desc: 'Follow a systematic modular syllabus covering all exam sections, grammar foundations, and high-frequency question patterns.'
    },
    {
      num: '03',
      title: 'Regular Practice',
      desc: 'Engage in timed section drills, authentic question banks, and free weekly full-length mock examinations under authentic test pressure.'
    },
    {
      num: '04',
      title: 'Personalized Support',
      desc: 'Benefit from individual speaking feedback, thorough writing evaluations, small batches, and customized study timelines.'
    }
  ];

  // Student Journey: 4-stage minimal process
  const journeySteps = [
    {
      step: '01',
      title: 'Understand',
      desc: 'Initial evaluation of your academic background, current English baseline, target scores, and destination ambitions.'
    },
    {
      step: '02',
      title: 'Prepare',
      desc: 'Structured classroom instruction, focused skill-building in all exam sections, and comprehensive study materials.'
    },
    {
      step: '03',
      title: 'Practice',
      desc: 'Computer-lab sessions, intensive listening and reading drills, and weekly Saturday mock exams with band analysis.'
    },
    {
      step: '04',
      title: 'Progress',
      desc: 'Target score achievement, document review, and transparent counseling for international university admissions.'
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* ============================================================
          1. HERO SECTION (White Background with Subtle Radial Accent)
          ============================================================ */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-32 bg-[#FFFFFF]">
        {/* Extremely soft subtle radial light */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-[#EAF3FF]/60 via-[#F4F8FD]/40 to-transparent blur-[120px] pointer-events-none -z-10" />

        {/* Minimal global journey route element with tiny location points */}
        <HeroRouteBackground />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-8 text-left">
              
              {/* Refined Eyebrow */}
              <div className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E21F26]"></span>
                <span className="text-xs font-semibold tracking-widest uppercase text-[#667085]">
                  INTERNATIONAL EDUCATION & TEST PREPARATION
                </span>
              </div>

              {/* Large Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#172033] tracking-tight leading-[1.12] font-display">
                Prepare Today.<br />
                <span className="text-[#164B9B]">Study Abroad Tomorrow.</span>
              </h1>

              {/* Supporting Paragraph */}
              <p className="text-base sm:text-lg text-[#667085] max-w-xl leading-relaxed font-normal">
                IELTS and PTE preparation with structured learning and personalized guidance for your international education journey.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 h-13 px-8 rounded-xl bg-[#E21F26] hover:bg-[#B91C24] text-white text-sm font-semibold tracking-wide transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm hover:shadow-md"
                >
                  <span>Talk to a Counselor</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center gap-2 h-13 px-8 rounded-xl bg-transparent border border-[#164B9B] text-[#164B9B] hover:bg-[#EAF3FF] hover:text-[#0B2F6B] text-sm font-semibold tracking-wide transition-all duration-200"
                >
                  <span>Explore Courses</span>
                </Link>
              </div>

              {/* Micro-trust line */}
              <div className="pt-2 flex items-center gap-6 text-xs text-[#667085] font-medium">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#164B9B]"></span>
                  <span>Narayan Path, Bhairahawa</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#164B9B]"></span>
                  <span>Weekly Saturday Mocks</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#164B9B]"></span>
                  <span>Certified Instructors</span>
                </div>
              </div>
            </div>

            {/* Right Visual: Single editorial student image + ONE subtle glass card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Hero Photo with subtle float animation */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E2E6EC] aspect-[4/5] bg-[#0B2F6B] animate-float-subtle">
                  <img
                    src="/images/hero.jpg"
                    alt="StudyHub Student in International Academic Environment"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B2F6B]/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* EXACTLY ONE subtle floating frosted glass card */}
                <div className="absolute -bottom-6 left-6 right-6 sm:left-8 sm:right-8 z-20">
                  <div className="glass-frosted p-5 rounded-2xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-[#E21F26]">
                          IELTS + PTE
                        </div>
                        <div className="text-sm font-bold text-[#172033] mt-0.5 font-display">
                          Structured Preparation
                        </div>
                        <div className="text-xs text-[#667085] mt-0.5">
                          Personalized Support • Bhairahawa
                        </div>
                      </div>
                      <div className="w-9 h-9 rounded-xl bg-[#164B9B] text-white flex items-center justify-center shrink-0 shadow-xs">
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          2. ABOUT SECTION (Off-White Background: #FAFBFC)
          ============================================================ */}
      <section className="relative overflow-hidden py-24 sm:py-32 bg-[#FAFBFC] border-t border-b border-[#E2E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left: Large Image with subtle overlapping circular forms behind */}
            <div className="lg:col-span-6 relative">
              <AboutOrbitsBackground className="-top-12 -left-12 w-[460px] h-[400px]" />
              <div className="relative rounded-xl overflow-hidden shadow-lg border border-[#E2E6EC] aspect-[4/3] bg-[#0B2F6B] z-10">
                <img
                  src="/images/counseling.jpg"
                  alt="Student Academic Counseling at StudyHub Bhairahawa"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Editorial Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#164B9B]">
                  ABOUT STUDYHUB
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight leading-tight font-display">
                  Guidance That Starts With Preparation.
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#667085] leading-relaxed font-normal">
                <p>
                  At StudyHub, we believe that studying abroad begins with genuine academic readiness. We do not push unverified claims or one-size-fits-all pathways.
                </p>
                <p>
                  Based in Bhairahawa at Narayan Path, we provide structured test coaching for IELTS and PTE alongside transparent, student-first counseling for Canada, Australia, the USA, the UK, Europe, and New Zealand.
                </p>
              </div>

              {/* Two Highlight Blue Boxes with Reduced Corners, White Text & Abstract Minimalist Consultancy Elements */}
              <div className="grid grid-cols-2 gap-4 pt-1">
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

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#164B9B] hover:text-[#0B2F6B] transition-colors group"
                >
                  <span>About StudyHub</span>
                  <ArrowRight className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          3. DESTINATIONS SECTION (Pure White Background: #FFFFFF)
          ============================================================ */}
      <section className="relative overflow-hidden py-24 sm:py-32 bg-[#FFFFFF]">
        {/* Subtle international connection paths */}
        <DestinationsPathBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#164B9B]">
                DESTINATIONS
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight font-display">
                Where Could Your Education Take You?
              </h2>
              <p className="text-sm sm:text-base text-[#667085] font-normal">
                Explore leading international study destinations, their academic systems, and student environments.
              </p>
            </div>

            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#164B9B] hover:text-[#0B2F6B] transition-colors shrink-0 group"
            >
              <span>View All 6 Destinations</span>
              <ArrowRight className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* 3x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {destinations.map((dest) => (
              <DestinationCard key={dest.id} destination={dest} />
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================
          4. COURSES SECTION (Very Light Blue Background: #F4F8FD)
          ============================================================ */}
      <section className="relative overflow-hidden py-24 sm:py-32 bg-[#F4F8FD] border-t border-b border-[#E2E6EC]">
        {/* Subtle educational preparation -> practice -> progress motif */}
        <CourseProgressBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14 sm:mb-20">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#164B9B]">
              OUR COURSES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight font-display">
              Build the Skills Behind Your Score.
            </h2>
            <p className="text-sm sm:text-base text-[#667085] font-normal">
              Structured preparation designed around the language skills and test strategies required for IELTS and PTE.
            </p>
          </div>

          {/* Two Large Editorial Course Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            <CourseCard course={courses.ielts} />
            <CourseCard course={courses.pte} />
          </div>

        </div>
      </section>

      {/* ============================================================
          5. IELTS / PTE COMPARISON (Soft Blue Tint: #EAF3FF/40)
          ============================================================ */}
      <section className="py-24 sm:py-32 bg-[#EAF3FF]/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#164B9B]">
              WHICH TEST IS RIGHT FOR YOU?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight font-display">
              Not Sure Where to Start?
            </h2>
            <p className="text-sm sm:text-base text-[#667085] font-normal">
              Both tests evaluate academic English competency, but their test delivery, speaking format, and scoring frameworks differ.
            </p>
          </div>

          {/* Two Minimal Editorial Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Column 1: IELTS */}
            <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-10 border border-[#E2E6EC] shadow-xs flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="pb-4 border-b border-[#E2E6EC] flex items-start justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#164B9B] uppercase tracking-wider">International Benchmark</span>
                    <h3 className="text-2xl font-extrabold text-[#172033] mt-1 font-display">IELTS Academic</h3>
                    <p className="text-xs text-[#98A2B3] mt-1">Paper-Based or Computer-Delivered</p>
                  </div>
                  <CardProgressMotif className="opacity-70 mt-1" />
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
                      Students targeting UK, Canada, Australia, Europe, or those who prefer speaking directly with people.
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Link
                  to="/courses/ielts"
                  className="w-full inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-transparent border border-[#164B9B] text-[#164B9B] hover:bg-[#EAF3FF] hover:text-[#0B2F6B] text-xs font-semibold transition-colors"
                >
                  <span>Explore IELTS Preparation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Column 2: PTE */}
            <div className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-10 border border-[#E2E6EC] shadow-xs flex flex-col justify-between space-y-8">
              <div className="space-y-6">
                <div className="pb-4 border-b border-[#E2E6EC] flex items-start justify-between">
                  <div>
                    <span className="text-xs font-semibold text-[#164B9B] uppercase tracking-wider">Fast & Automated</span>
                    <h3 className="text-2xl font-extrabold text-[#172033] mt-1 font-display">PTE Academic</h3>
                    <p className="text-xs text-[#98A2B3] mt-1">100% Computer-Based in Secure Lab</p>
                  </div>
                  <CardProgressMotif className="opacity-70 mt-1" />
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#667085]">
                  <div className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#164B9B] mt-2 shrink-0"></span>
                    <div>
                      <strong className="text-[#172033] block">Speaking Evaluation:</strong>
                      Microphone headset recording assessed entirely by Pearson AI algorithms.
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
                      Fast application deadlines, confident typists, or students who prefer automated impartial scoring.
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Link
                  to="/courses/pte"
                  className="w-full inline-flex items-center justify-center gap-2 h-11 rounded-xl bg-transparent border border-[#164B9B] text-[#164B9B] hover:bg-[#EAF3FF] hover:text-[#0B2F6B] text-xs font-semibold transition-colors"
                >
                  <span>Explore PTE Preparation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

          {/* Primary Counseling CTA */}
          <div className="mt-12 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl bg-[#E21F26] hover:bg-[#B91C24] text-white text-xs font-semibold tracking-wide transition-all duration-200 shadow-xs hover:shadow-md"
            >
              <span>Talk to a Counselor for Test Selection</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* ============================================================
          6. WHY STUDYHUB (Pure White Background: #FFFFFF)
          ============================================================ */}
      <section className="py-24 sm:py-32 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl space-y-3 mb-16 sm:mb-20">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#164B9B]">
              THE STUDYHUB METHOD
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight font-display">
              A Structured Approach to Language Competency.
            </h2>
            <p className="text-sm sm:text-base text-[#667085] font-normal">
              We focus on measurable progress, authentic exam practice, and personalized instruction.
            </p>
          </div>

          {/* 4 Large Number Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {whyPoints.map((point) => (
              <div key={point.num} className="space-y-4">
                <div className="text-4xl sm:text-5xl font-extrabold text-[#E2E6EC] font-display">
                  {point.num}
                </div>
                <h3 className="text-lg font-bold text-[#172033] font-display">
                  {point.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#667085] leading-relaxed font-normal">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================
          7. STUDENT JOURNEY (Very Light Blue: #F4F8FD)
          ============================================================ */}
      <section className="py-24 sm:py-32 bg-[#F4F8FD] border-t border-b border-[#E2E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-16 sm:mb-20">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#164B9B]">
              STUDENT JOURNEY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight font-display">
              A Clear, Step-by-Step Pathway.
            </h2>
            <p className="text-sm sm:text-base text-[#667085] font-normal">
              From early language assessment to verified university application readiness.
            </p>
          </div>

          {/* Horizontal Process Grid on Desktop with thin connecting lines */}
          <div className="relative">
            {/* Desktop connecting line */}
            <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-[#E2E6EC] -z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              {journeySteps.map((step) => (
                <div key={step.step} className="bg-[#FFFFFF] lg:bg-transparent p-6 lg:p-0 rounded-2xl lg:rounded-none border border-[#E2E6EC] lg:border-none space-y-3 shadow-2xs lg:shadow-none">
                  <div className="w-12 h-12 rounded-full bg-[#FFFFFF] border border-[#E2E6EC] flex items-center justify-center font-bold text-xs text-[#164B9B] shadow-xs">
                    {step.step}
                  </div>
                  <h3 className="text-base font-bold text-[#172033] pt-1 font-display">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#667085] leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          8. PHYSICAL CENTER BANNER (Dark Navy: #0B2F6B)
          ============================================================ */}
      <section className="py-20 sm:py-24 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0B2F6B] text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-white/10">
            {/* Subtle brand glow: #0B2F6B -> #164B9B */}
            <div className="absolute top-0 right-0 w-[400px] h-[300px] bg-[#164B9B]/25 blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/[0.70]">
                    <MapPin className="w-3.5 h-3.5 text-[#E21F26]" />
                    <span>Narayan Path, Bhairahawa, Nepal (Opposite Mahalakshmi Bank)</span>
                  </div>
                  <ConnectingNodeGraphic className="opacity-60 hidden sm:block" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight font-display">
                  Visit Our Physical Preparation Center
                </h3>
                <p className="text-xs sm:text-sm text-white/[0.78] leading-relaxed max-w-2xl font-normal">
                  Take a free diagnostic test, explore our test-prep computer workstations, and discuss your study goals face-to-face with an experienced advisor.
                </p>
                <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-white/[0.60]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-white/[0.60]" />
                    <span>Sunday – Friday: 7:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-white/[0.60]" />
                    <span>{companyData.phone}</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-[#FFFFFF] hover:bg-[#EAF3FF] text-[#0B2F6B] font-semibold text-xs transition-colors shadow-xs"
                >
                  <span>Get Directions & Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <a
                  href={companyData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl bg-white/10 hover:bg-white/[0.16] text-[#FFFFFF] font-semibold text-xs border border-white/20 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-current text-emerald-400" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          9. EDITORIAL BLOG SECTION (Pure White Background: #FFFFFF)
          ============================================================ */}
      <section className="py-24 sm:py-32 bg-[#FFFFFF] border-t border-[#E2E6EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-semibold tracking-widest uppercase text-[#164B9B]">
                INSIGHTS & ADVICE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight font-display">
                From the StudyHub Journal
              </h2>
              <p className="text-sm sm:text-base text-[#667085] font-normal">
                Practical guidance for students preparing for English proficiency tests and international education.
              </p>
            </div>

            <Link
              to="/blogs"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#164B9B] hover:text-[#0B2F6B] transition-colors shrink-0 group"
            >
              <span>View All Articles</span>
              <ArrowRight className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Featured Large Article */}
          <div className="mb-10">
            <BlogCard blog={featuredBlog} featured={true} />
          </div>

          {/* Three Smaller Articles Below */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {secondaryBlogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================
          10. FINAL CTA (Dark Navy: #0B2F6B)
          ============================================================ */}
      <CTASection />

    </div>
  );
}
