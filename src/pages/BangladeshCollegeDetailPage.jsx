import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Users, 
  ArrowLeft, 
  ShieldCheck, 
  GraduationCap, 
  Stethoscope, 
  Phone, 
  MessageSquare,
  Home,
  Clock,
  Award
} from 'lucide-react';
import { getCollegeBySlug, bangladeshColleges } from '../data/bangladeshCollegesData';
import { companyData } from '../data/companyData';
import CTASection from '../components/CTASection';
import CollegePhoto from '../components/CollegePhoto';
import usePageMetadata from '../hooks/usePageMetadata';

export default function BangladeshCollegeDetailPage() {
  const { slug } = useParams();
  const college = getCollegeBySlug(slug);

  usePageMetadata(
    college
      ? `${college.name} | Study MBBS in Bangladesh | Retina Educational Consultancy`
      : 'College Profile Not Found | Retina Educational Consultancy',
    college?.shortDescription || 'Browse medical college profiles and admission information for studying MBBS in Bangladesh.'
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!college) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 text-center">
        <Building2 className="w-16 h-16 text-[#8D98AA] mb-4" />
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] font-display">
          College Profile Not Found
        </h1>
        <p className="text-sm text-[#5B6472] mt-2 max-w-md">
          The medical college profile you requested does not exist or has been relocated.
        </p>
        <Link
          to="/study-mbbs-bangladesh"
          className="mt-6 inline-flex items-center gap-2 h-11 px-6 rounded-xl bg-[#0F559E] hover:bg-[#0A3B82] text-white text-xs font-semibold tracking-wide transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Bangladesh Medical Colleges Directory</span>
        </Link>
      </div>
    );
  }

  // Find previous and next colleges for convenient navigation
  const currentIndex = bangladeshColleges.findIndex((c) => c.slug === college.slug);
  const prevCollege = currentIndex > 0 ? bangladeshColleges[currentIndex - 1] : null;
  const nextCollege = currentIndex < bangladeshColleges.length - 1 ? bangladeshColleges[currentIndex + 1] : null;

  const isExclusive = Boolean(college.exclusivePartnerNote);
  const encodedCollegeName = encodeURIComponent(college.name);
  const whatsappInquiryUrl = `${companyData.whatsappUrl}&text=Hello%20Retina%20Consultancy%2C%20I%20am%20interested%20in%20admission%20for%20${encodedCollegeName}.`;

  return (
    <div className="bg-[#FFFFFF] min-h-screen text-[#102A43]">
      
      {/* ============================================================
          1. BREADCRUMBS & TOP BAR
          ============================================================ */}
      <div className="bg-[#F8FAFC] border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[#5B6472]">
            <nav className="flex items-center gap-2 flex-wrap">
              <Link to="/" className="hover:text-[#0F559E] transition-colors">Home</Link>
              <span>/</span>
              <Link to="/study-mbbs-bangladesh" className="hover:text-[#0F559E] transition-colors">
                Study MBBS in Bangladesh
              </Link>
              <span>/</span>
              <span className="font-semibold text-[#102A43] truncate max-w-[260px] sm:max-w-none">
                {college.name}
              </span>
            </nav>

            <Link
              to="/study-mbbs-bangladesh"
              className="inline-flex items-center gap-1.5 font-semibold text-[#0F559E] hover:underline shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Directory</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ============================================================
          2. COLLEGE HERO SECTION
          ============================================================ */}
      <section className="relative bg-[#102A43] text-white overflow-hidden py-10 sm:py-14 lg:py-16">
        
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[#0F559E]/40 to-[#102A43]/10 blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: College Metadata & Badges */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="flex flex-wrap items-center gap-2.5">
                {isExclusive && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EE851B] text-white text-xs font-bold shadow-sm uppercase tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Exclusive Authorized Partner</span>
                  </span>
                )}
                {college.affiliation && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium border border-white/20">
                    <Building2 className="w-3.5 h-3.5 text-[#EE851B]" />
                    <span>{college.affiliation}</span>
                  </span>
                )}
                {college.established && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/90 text-xs font-medium border border-white/20">
                    <Calendar className="w-3.5 h-3.5 text-white/70" />
                    <span>Est. {college.established}</span>
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight font-display leading-tight">
                {college.name}
              </h1>

              <div className="flex items-center gap-2 text-sm text-white/85">
                <MapPin className="w-4 h-4 text-[#EE851B] shrink-0" />
                <span>{college.location}</span>
              </div>

              {/* Quick Stat Pill Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                  <span className="block text-[10px] text-white/70 uppercase font-semibold tracking-wider">
                  Course Fee
                  </span>
                  <span className="text-sm sm:text-base font-bold text-[#EE851B] mt-0.5 block break-words leading-snug">
                    {college.feeDetail || college.totalFee}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10">
                  <span className="block text-[10px] text-white/70 uppercase font-semibold tracking-wider">
                    Annual Seats
                  </span>
                  <span className="text-sm sm:text-base font-bold text-white mt-0.5 block break-words leading-snug">
                    {college.seats}
                  </span>
                </div>

                {college.hospitalBeds && (
                  <div className="p-3 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10 col-span-2 sm:col-span-1">
                    <span className="block text-[10px] text-white/70 uppercase font-semibold tracking-wider">
                      Attached Hospital
                    </span>
                    <span className="text-sm sm:text-base font-bold text-white mt-0.5 block break-words leading-snug">
                      {college.hospitalBeds}
                    </span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold tracking-wide transition-all duration-300 shadow-md"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Enquire for {college.shortName || 'College'}</span>
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold tracking-wide transition-all duration-300 border border-white/25"
                >
                  <Phone className="w-4 h-4" />
                  <span>Consult Retina Doctors</span>
                </Link>
              </div>

            </div>

            {/* Right: Authentic Photograph Showcase */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-white/15 shadow-2xl bg-[#102A43] aspect-[4/3] group">
                <CollegePhoto
                  college={college}
                  className="absolute inset-0"
                  imageClassName="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                />
                {college.image && college.imageSource && (
                  <div className="absolute bottom-3 left-3 right-3 z-10">
                    <div className="glass-dark p-2.5 rounded-xl text-[11px] text-white/85 border border-white/15 flex flex-wrap items-center gap-x-2 gap-y-1">
                      <span className="text-white/70">Photo:</span>
                      <a
                        href={college.imageSourcePageUrl || college.imageSourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium underline underline-offset-2 hover:text-white break-words"
                      >
                        {college.imageCredit || college.imageSource}
                      </a>
                      {college.imageLicenseUrl && (
                        <a
                          href={college.imageLicenseUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/70 underline underline-offset-2 hover:text-white"
                        >
                          License
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          3. MAIN CONTENT BODY
          ============================================================ */}
      <section className="py-12 sm:py-16 bg-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left 8 Cols: Complete Supplied Description & Sections */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Exclusive Partner Alert Banner (Monno Medical College) */}
              {isExclusive && (
                <div className="p-5 sm:p-6 rounded-2xl bg-[#EEF4FF] border border-[#0F559E]/30 space-y-2">
                  <div className="flex items-center gap-2 text-[#0F559E] font-bold text-sm sm:text-base">
                    <ShieldCheck className="w-5 h-5 text-[#EE851B] shrink-0" />
                    <span>Exclusive Authorized Consultancy Partner</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#102A43] font-medium leading-relaxed">
                    {college.exclusivePartnerNote}
                  </p>
                </div>
              )}

              {/* Complete Original Description (Preserved Verbatim) */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs space-y-5">
                <div className="pb-3 border-b border-[#E2E8F0] flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#102A43] font-display">
                    About {college.name}
                  </h2>
                  <span className="text-xs font-semibold text-[#0F559E] bg-[#EEF4FF] px-3 py-1 rounded-full">
                    College Information
                  </span>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-[#334E68] leading-relaxed font-normal">
                  {college.paragraphs.map((p, idx) => (
                    <p key={idx} className="leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              {/* Structured Institutional Highlights */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0] shadow-xs space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-[#102A43] font-display pb-3 border-b border-[#E2E8F0]">
                  Key Institutional Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
                  
                  {/* Location & Accessibility */}
                  {college.location && (
                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                      <div className="flex items-center gap-1.5 font-semibold text-[#0F559E]">
                        <MapPin className="w-4 h-4 text-[#EE851B]" />
                        <span>Location &amp; Access</span>
                      </div>
                      <p className="text-[#5B6472]">{college.location}</p>
                    </div>
                  )}

                  {/* University Affiliation */}
                  {college.affiliation && (
                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                      <div className="flex items-center gap-1.5 font-semibold text-[#0F559E]">
                        <Building2 className="w-4 h-4 text-[#EE851B]" />
                        <span>University Affiliation</span>
                      </div>
                      <p className="text-[#5B6472]">{college.affiliation}</p>
                    </div>
                  )}

                  {/* Course Duration */}
                  {college.courseDuration && (
                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                      <div className="flex items-center gap-1.5 font-semibold text-[#0F559E]">
                        <Clock className="w-4 h-4 text-[#EE851B]" />
                        <span>Course Duration</span>
                      </div>
                      <p className="text-[#5B6472]">{college.courseDuration}</p>
                    </div>
                  )}

                  {/* Recognition */}
                  {college.recognition && (
                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                      <div className="flex items-center gap-1.5 font-semibold text-[#0F559E]">
                        <Award className="w-4 h-4 text-[#EE851B]" />
                        <span>Recognition &amp; Accreditation</span>
                      </div>
                      <p className="text-[#5B6472]">{college.recognition}</p>
                    </div>
                  )}

                  {/* Hospital & Clinical Facilities */}
                  {college.hospitalBeds && (
                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                      <div className="flex items-center gap-1.5 font-semibold text-[#0F559E]">
                        <Stethoscope className="w-4 h-4 text-[#EE851B]" />
                        <span>Hospital Facilities</span>
                      </div>
                      <p className="text-[#5B6472]">{college.hospitalBeds}</p>
                    </div>
                  )}

                  {/* Hostel Accommodation */}
                  {college.hostelInfo && (
                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                      <div className="flex items-center gap-1.5 font-semibold text-[#0F559E]">
                        <Home className="w-4 h-4 text-[#EE851B]" />
                        <span>Hostel &amp; Accommodation</span>
                      </div>
                      <p className="text-[#5B6472]">{college.hostelInfo}</p>
                    </div>
                  )}

                  {/* Annual Seats */}
                  {college.seats && (
                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                      <div className="flex items-center gap-1.5 font-semibold text-[#0F559E]">
                        <Users className="w-4 h-4 text-[#EE851B]" />
                        <span>Annual Seats</span>
                      </div>
                      <p className="text-[#5B6472]">{college.seats}</p>
                    </div>
                  )}

                  {/* Total Course Fee */}
                  {college.totalFee && (
                    <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1">
                      <div className="flex items-center gap-1.5 font-semibold text-[#0F559E]">
                        <DollarSign className="w-4 h-4 text-[#EE851B]" />
                        <span>Course Fee Structure</span>
                      </div>
                      <p className="text-[#5B6472]">{college.feeDetail || college.totalFee}</p>
                    </div>
                  )}

                </div>

                {/* NMCLE Licensing Information (where supplied) */}
                {college.licensingInfo && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-emerald-800">
                      <GraduationCap className="w-4 h-4 text-emerald-600" />
                    <span>Nepal Graduate Notes</span>
                    </div>
                    <p className="text-emerald-900 leading-relaxed">
                      {college.licensingInfo}
                    </p>
                  </div>
                )}

              </div>

              {/* Prev / Next Navigation between colleges */}
              <div className="flex items-center justify-between gap-4 pt-4 border-t border-[#E2E8F0] flex-wrap">
                {prevCollege ? (
                  <Link
                    to={`/study-mbbs-bangladesh/${prevCollege.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#0F559E] hover:underline"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Previous: {prevCollege.name}</span>
                  </Link>
                ) : (
                  <div />
                )}

                {nextCollege ? (
                  <Link
                    to={`/study-mbbs-bangladesh/${nextCollege.slug}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#0F559E] hover:underline ml-auto"
                  >
                    <span>Next: {nextCollege.name}</span>
                    <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                  </Link>
                ) : (
                  <div />
                )}
              </div>

            </div>

            {/* Right 4 Cols: Quick Facts Card & Admission Consultation */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Doctor Consultation Sticky Card */}
              <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-7 border border-[#E2E8F0] shadow-md space-y-5 sticky top-24">
                
                <div className="space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#EE851B]">
                    DOCTOR-LED ADMISSIONS
                  </span>
                  <h3 className="text-xl font-bold text-[#102A43] font-display">
                    Apply to {college.shortName || 'this College'}
                  </h3>
                  <p className="text-xs text-[#5B6472] leading-relaxed">
                    Contact Retina Educational Consultancy to discuss admission enquiries for {college.name}.
                  </p>
                </div>

                {/* Contact CTA Buttons */}
                <div className="space-y-2.5 pt-2">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 h-11 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>WhatsApp Inquiry for {college.shortName || 'College'}</span>
                  </a>

                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 h-11 w-full bg-[#0F559E] hover:bg-[#0A3B82] text-white font-semibold text-xs rounded-xl shadow-xs transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Book In-Office Counseling</span>
                  </Link>
                </div>

                {/* Office Info */}
                <div className="pt-3 border-t border-[#E2E8F0] text-[11px] text-[#5B6472] space-y-1">
                  <div className="font-semibold text-[#102A43]">Retina Educational Consultancy</div>
                  <div>New Plaza, Putalisadak-29, Kathmandu, Nepal</div>
                  <div>Phone: {companyData.landline.number} / {companyData.phones.map(({ number }) => number).join(' / ')}</div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
          4. FOOTER CTA SECTION
          ============================================================ */}
      <CTASection 
        badge="Study MBBS in Bangladesh"
        heading="Find the Right Medical College for Your Future"
        paragraph="Explore all 14 medical college profiles or contact Retina Educational Consultancy to discuss admissions."
      />

    </div>
  );
}

