import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Building2, ArrowRight, Search, ShieldCheck } from 'lucide-react';
import { bangladeshColleges } from '../data/bangladeshCollegesData';
import BangladeshCollegeCard from '../components/BangladeshCollegeCard';
import CTASection from '../components/CTASection';
import usePageMetadata from '../hooks/usePageMetadata';

export default function StudyMBBSBangladeshPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedAffiliation, setSelectedAffiliation] = useState('ALL');
  const monnoCollege = bangladeshColleges.find((college) => college.slug === 'monno-medical-college');

  usePageMetadata(
    'Study MBBS in Bangladesh | Retina Educational Consultancy',
    'Explore medical colleges in Bangladesh and find the right institution for your medical education.'
  );

  // Filter colleges based on search and affiliation
  const filteredColleges = useMemo(() => {
    return bangladeshColleges.filter((c) => {
      const matchesSearch = 
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (c.shortName && c.shortName.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesAffiliation = 
        selectedAffiliation === 'ALL' || 
        (c.affiliation && c.affiliation.toLowerCase().includes(selectedAffiliation.toLowerCase()));

      return matchesSearch && matchesAffiliation;
    });
  }, [searchQuery, selectedAffiliation]);

  const scrollToColleges = () => {
    const el = document.getElementById('colleges-directory');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#102A43]">
      
      {/* ============================================================
          1. HERO SECTION
          ============================================================ */}
      <section className="relative overflow-hidden bg-[#102A43] text-white py-16 sm:py-24 lg:py-28">
        
        {/* Background Campus Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/medical-colleges/monno-medical-college.jpg"
            alt="Monno Medical College academic building, Monno City, Manikganj"
            fetchPriority="high"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102A43] via-[#102A43]/90 to-[#0F559E]/75" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(238,133,27,0.15),transparent_50%)]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            
            {/* Breadcrumb / Category Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white/90 text-xs font-semibold border border-white/20">
              <span className="w-2 h-2 rounded-full bg-[#EE851B]" />
              <span>Medical Education in Bangladesh</span>
            </div>

            {/* Main Heading & Subtitle exactly as specified */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#FFFFFF] tracking-tight font-display leading-[1.12]">
                Study MBBS in Bangladesh
              </h1>
              <p className="text-lg sm:text-xl text-white/85 leading-relaxed font-normal max-w-2xl">
                Explore medical colleges in Bangladesh and find the right institution for your medical education.
              </p>
            </div>

            {/* Hero CTA Button */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToColleges}
                className="inline-flex items-center gap-2 h-13 px-8 rounded-xl bg-[#EE851B] hover:bg-[#d97412] text-white text-sm font-semibold tracking-wide transition-all duration-300 ease-out transform hover:-translate-y-0.5 shadow-lg shadow-[#EE851B]/20 cursor-pointer"
              >
                <span>Explore Medical Colleges</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 h-13 px-7 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold tracking-wide transition-all duration-300 ease-out border border-white/25 backdrop-blur-xs"
              >
                <span>Book Doctor Counseling</span>
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          2. EXCLUSIVE PARTNERSHIP CALLOUT (Monno Medical College)
          ============================================================ */}
      <section className="py-6 bg-[#EEF4FF] border-b border-[#0F559E]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#0F559E]/20 shadow-xs">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl bg-[#0F559E] text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-[#EE851B]" />
              </div>
              <div>
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#EE851B] text-white mb-0.5">
                  Monno Medical College &amp; Hospital
                </div>
                <p className="text-sm text-[#102A43] leading-relaxed">
                  {monnoCollege?.exclusivePartnerNote}
                </p>
              </div>
            </div>
            <Link
              to="/study-mbbs-bangladesh/monno-medical-college"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0F559E] hover:text-[#0A3B82] hover:underline shrink-0"
            >
              <span>View Monno Profile</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          3. COLLEGE DIRECTORY SECTION
          ============================================================ */}
      <section id="colleges-directory" className="py-12 sm:py-16 lg:py-20 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading & Filter Bar */}
          <div className="mb-10 space-y-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs font-semibold tracking-widest uppercase text-[#0F559E]">
                  COMPREHENSIVE DIRECTORY
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight font-display">
                  Medical Colleges in Bangladesh
                </h2>
                <p className="text-sm sm:text-base text-[#5B6472] font-normal leading-relaxed">
                  Browse the supplied information for all 14 colleges, including locations, fees, available seats, and campus photographs where verified.
                </p>
              </div>

              {/* Search input */}
              <div className="w-full md:w-72 relative">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#5B6472]" />
                <input
                  type="text"
                  placeholder="Search college name or city..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-11 pl-10 pr-4 text-xs bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl focus:outline-none focus:border-[#0F559E] focus:ring-1 focus:ring-[#0F559E] transition-all"
                />
              </div>
            </div>

            {/* Affiliation Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
              <span className="text-[#5B6472] text-[11px] font-semibold uppercase tracking-wider shrink-0 mr-1">
                Affiliation:
              </span>
              {[
                { label: 'All Colleges (14)', value: 'ALL' },
                { label: 'University of Dhaka', value: 'Dhaka' },
                { label: 'Sylhet Medical University', value: 'Sylhet' },
                { label: 'Rajshahi Medical University', value: 'Rajshahi' },
                { label: 'Chittagong Medical University', value: 'Chittagong' }
              ].map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setSelectedAffiliation(filter.value)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 cursor-pointer ${
                    selectedAffiliation === filter.value
                      ? 'bg-[#0F559E] text-white shadow-xs'
                      : 'bg-[#F8FAFC] text-[#5B6472] hover:bg-[#EEF4FF] hover:text-[#0F559E] border border-[#E2E8F0]'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

          </div>

          {/* College Cards Grid */}
          {filteredColleges.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredColleges.map((college) => (
                <BangladeshCollegeCard key={college.id} college={college} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-[#F8FAFC] rounded-3xl border border-[#E2E8F0] p-8">
              <Building2 className="w-12 h-12 text-[#8D98AA] mx-auto mb-3 opacity-60" />
              <h3 className="text-lg font-bold text-[#102A43]">No medical colleges found</h3>
              <p className="text-xs text-[#5B6472] mt-1">
                Try adjusting your search query or reset the university affiliation filter.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedAffiliation('ALL');
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-[#0F559E] text-white text-xs font-semibold hover:bg-[#0A3B82] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* ============================================================
          STUDENT SUPPORT THROUGH STUDY AND AFTER NMCLE
          ============================================================ */}
      <section id="student-support" className="py-12 sm:py-16 bg-[#EEF4FF] border-y border-[#0F559E]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-2 mb-6 sm:mb-8">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#0F559E]">
              SUPPORT BEYOND ADMISSION
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight font-display">
              Support Through Study, Internship, and Beyond
            </h2>
            <p className="text-sm sm:text-base text-[#5B6472] leading-relaxed">
              Retina’s support continues as students study in Bangladesh, prepare for NMCLE during internship, and move to the next step after passing the exam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            <article className="h-full rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-[#0F559E]">01 · During study</p>
              <h3 className="mt-2 text-lg sm:text-xl font-bold text-[#102A43] font-display">
                Local Guardianship in Bangladesh
              </h3>
              <p className="mt-2 text-sm text-[#5B6472] leading-relaxed">
                Retina provides a local guardian throughout the six years of study in Bangladesh, so students and parents have someone reliable nearby.
              </p>
            </article>

            <article className="h-full rounded-2xl border border-[#E2E8F0] bg-white p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-[#0F559E]">02 · During internship</p>
              <h3 className="mt-2 text-lg sm:text-xl font-bold text-[#102A43] font-display">
                NMCLE Preparation Classes
              </h3>
              <p className="mt-2 text-sm text-[#5B6472] leading-relaxed">
                After completing MBBS and entering internship, students receive guidance for NMCLE preparation through online classes and study materials.
              </p>
            </article>

            <article className="h-full rounded-2xl border border-[#EE851B]/35 bg-[#FFF8F1] p-5 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-wider text-[#B85B0A]">03 · After passing NMCLE</p>
              <h3 className="mt-2 text-lg sm:text-xl font-bold text-[#102A43] font-display">
                Job Placement Support
              </h3>
              <p className="mt-2 text-sm text-[#5B6472] leading-relaxed">
                After passing NMCLE, Retina provides job placement support through its guaranteed job placement service list.
              </p>
            </article>
          </div>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 rounded-2xl bg-[#102A43] p-5 sm:p-6 text-white">
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-display text-white">
                Job Placement Support After NMCLE
              </h3>
              <p className="mt-1 text-sm text-white/80 leading-relaxed">
                Job placement support through Retina’s guaranteed job placement service list is available after passing NMCLE.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-[#EE851B] hover:bg-[#d97412] text-white text-xs font-semibold tracking-wide transition-colors shrink-0"
            >
              <span>Contact Retina</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection 
        badge="Direct Admission Support"
        heading="Ready to Begin Your Medical Career in Bangladesh?"
        paragraph="Speak directly with our team of Dhaka University graduate doctors at Retina Educational Consultancy in Putalisadak, Kathmandu. We provide free eligibility verification, DGME equivalence guidance, and confirmed college admissions."
      />

    </div>
  );
}

