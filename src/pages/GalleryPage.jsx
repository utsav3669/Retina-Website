import React, { useState, useEffect, useCallback } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';
import { ScrollReveal, StaggerGrid, StaggerItem } from '../components/MotionReveal';

const galleryItems = [
  {
    id: 1,
    src: '/images/gallery/counseling-family-kathmandu.jpg',
    title: 'Admissions Counseling Session',
    caption: 'An educational counselor advising a prospective student and family in our modern Kathmandu consultancy office.',
    alt: 'A counsellor advising a prospective student and family in a modern Kathmandu consultancy office'
  },
  {
    id: 2,
    src: '/images/gallery/medical-students-study-library.jpg',
    title: 'Medical Students Group Study',
    caption: 'Medical students in white coats reviewing clinical references and anatomy together in a bright university library.',
    alt: 'Medical students studying together in a bright university environment'
  },
  {
    id: 3,
    src: '/images/gallery/bangladesh-university-campus.jpg',
    title: 'University Campus in Bangladesh',
    caption: 'Students walking across the paved walkways and academic grounds of a university campus in Bangladesh.',
    alt: 'Students walking through a contemporary university campus in Bangladesh'
  },
  {
    id: 4,
    src: '/images/gallery/educational-advisor-guidance.jpg',
    title: 'Admission Documentation Guidance',
    caption: 'An experienced advisor explaining admission documents and institutional requirements to an attentive student.',
    alt: 'An educational advisor explaining admission documents to a student'
  },
  {
    id: 5,
    src: '/images/gallery/medical-students-collaboration.jpg',
    title: 'Clinical Academic Collaboration',
    caption: 'South Asian medical students collaborating on academic coursework and study materials around a library table.',
    alt: 'South Asian medical students collaborating in a university study environment'
  },
  {
    id: 6,
    src: '/images/gallery/students-academic-achievement.jpg',
    title: 'Celebrating Academic Milestones',
    caption: 'Students celebrating examination results and academic milestones outside their university faculty building.',
    alt: 'Students celebrating an academic achievement in a natural documentary photography style'
  },
  {
    id: 7,
    src: '/images/gallery/consultancy-reception-floor.jpg',
    title: 'Consultancy Reception & Counseling Floor',
    caption: 'A welcoming educational consultancy office floor in Kathmandu where advisors assist prospective students and families.',
    alt: 'A welcoming educational consultancy office where staff assist prospective students'
  }
];

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const breadcrumbs = [{ label: 'Gallery' }];

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const showNext = useCallback(() => {
    setSelectedIndex((prevIndex) => 
      prevIndex === null ? null : (prevIndex + 1) % galleryItems.length
    );
  }, []);

  const showPrev = useCallback(() => {
    setSelectedIndex((prevIndex) => 
      prevIndex === null ? null : (prevIndex - 1 + galleryItems.length) % galleryItems.length
    );
  }, []);

  // Keyboard navigation & body scroll locking
  useEffect(() => {
    if (selectedIndex === null) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        showNext();
      } else if (e.key === 'ArrowLeft') {
        showPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex, closeLightbox, showNext, showPrev]);

  const activeItem = selectedIndex !== null ? galleryItems[selectedIndex] : null;

  return (
    <div className="space-y-0 bg-[#FFFFFF]">
      {/* 1. Page Header */}
      <PageHeader
        badge="Photo Gallery"
        title="Student Life, Guidance & Campus Moments"
        subtitle="Explore authentic glimpses of personalized student counseling at our Putalisadak office, academic study environments, and university campus life."
        breadcrumbs={breadcrumbs}
      />

      {/* 2. Gallery Grid Section */}
      <section className="py-10 sm:py-14 lg:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal y={12}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 pb-4 border-b border-[#E2E8F0]">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#0E4BA4]">
                OUR PHOTOGRAPHIC ARCHIVE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight font-display mt-1">
                Academic Moments &amp; Office Guidance
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#5B6472] sm:text-right max-w-xs">
              Click any photograph to view in full resolution with complete scene details.
            </p>
          </div>
        </ScrollReveal>

        {/* Responsive Grid with 7 Items */}
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" stagger={0.06}>
          {galleryItems.map((item, index) => {
            // Give item 7 a span-2 on wide screens or balanced layout
            const isFeatured = index === 0;

            return (
              <StaggerItem 
                key={item.id} 
                className={isFeatured ? "sm:col-span-2 lg:col-span-2" : ""}
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => openLightbox(index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openLightbox(index);
                    }
                  }}
                  className="group relative h-full flex flex-col bg-[#FFFFFF] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#E2E8F0] shadow-xs hover:shadow-xl transition-all duration-400 ease-out transform hover:-translate-y-1 cursor-pointer focus:outline-none focus:ring-3 focus:ring-[#0E4BA4]/20"
                  aria-label={`View ${item.title}`}
                >
                  {/* Image container */}
                  <div className={`relative w-full overflow-hidden bg-[#102A43] ${isFeatured ? 'h-72 sm:h-96' : 'h-64 sm:h-72'}`}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-600 ease-out"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/80 via-[#102A43]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                    {/* Top Pill / Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur-sm text-[#102A43] shadow-xs">
                        <Sparkles className="w-3 h-3 text-[#0E4BA4]" />
                        <span>Photo {index + 1} of {galleryItems.length}</span>
                      </span>
                    </div>

                    {/* Expand Button Indicator */}
                    <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-2 rounded-xl bg-white/90 text-[#102A43] shadow-md hover:bg-white transition-colors">
                        <Maximize2 className="w-4 h-4 text-[#0E4BA4]" />
                      </div>
                    </div>

                    {/* Bottom Caption Pill */}
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="bg-black/60 backdrop-blur-md p-3.5 rounded-xl border border-white/15 text-white">
                        <h3 className="text-sm font-bold tracking-tight text-white leading-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs text-white/80 mt-1 line-clamp-2 leading-relaxed">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGrid>

        {/* Counseling Invitation Card */}
        <ScrollReveal y={12} delay={0.15}>
          <div className="mt-14 sm:mt-18 p-8 sm:p-10 rounded-3xl bg-[#EEF4FF] border border-[#E2E8F0] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#0E4BA4]">
                PLAN YOUR CAMPUS VISIT
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#102A43] font-display">
                Want to Experience Our Consultation in Person?
              </h3>
              <p className="text-xs sm:text-sm text-[#5B6472] max-w-xl">
                Walk in to our office at New Plaza, Putalisadak-29, Kathmandu for a one-on-one session with doctors who graduated from Dhaka University.
              </p>
            </div>
            <Link
              to="/contact"
              className="shrink-0 inline-flex items-center gap-2 h-12 px-7 rounded-xl bg-[#0E4BA4] hover:bg-[#0A3B82] text-white text-xs font-semibold tracking-wide transition-all duration-300 shadow-xs hover:shadow-md transform hover:-translate-y-0.5"
            >
              <span>Schedule Office Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* 3. LIGHTBOX / MODAL VIEWER */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeLightbox}
        >
          {/* Modal Container */}
          <div
            className="relative w-full max-w-5xl bg-[#102A43] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-white/15 flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-black/40 border-b border-white/10 z-10">
              <div className="flex items-center gap-3 text-white">
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-white/15 text-white/90">
                  {selectedIndex + 1} / {galleryItems.length}
                </span>
                <span className="text-sm font-bold truncate max-w-[240px] sm:max-w-md">
                  {activeItem.title}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={closeLightbox}
                  aria-label="Close image viewer"
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Image Stage */}
            <div className="relative flex-1 bg-black/70 flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[460px] max-h-[68vh]">
              <img
                src={activeItem.src}
                alt={activeItem.alt}
                className="max-w-full max-h-[68vh] w-auto h-auto object-contain select-none"
              />

              {/* Prev Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                aria-label="Previous photograph"
                className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all cursor-pointer shadow-lg transform hover:scale-105"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                aria-label="Next photograph"
                className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-all cursor-pointer shadow-lg transform hover:scale-105"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Bottom Caption Bar */}
            <div className="px-5 py-4 bg-[#102A43] border-t border-white/10 text-white/90 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="space-y-1 max-w-2xl">
                <h4 className="text-sm font-bold text-white">
                  {activeItem.title}
                </h4>
                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                  {activeItem.caption}
                </p>
              </div>

              <div className="text-[11px] text-white/50 shrink-0 font-mono">
                Press Esc to close • ← / → to navigate
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Global Bottom CTA */}
      <CTASection />
    </div>
  );
}
