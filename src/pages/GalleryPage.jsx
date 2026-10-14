import React, { useState, useEffect, useCallback } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Sparkles,
  ArrowRight,
  Award,
  Users,
  PlaneTakeoff,
  Layers
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';
import { ScrollReveal, StaggerGrid, StaggerItem } from '../components/MotionReveal';

const galleryItems = [
  {
    id: 1,
    src: '/images/gallery/retina-airport-khada-ceremony-dr-saroj.jpg',
    category: 'departure',
    categoryLabel: 'Airport Departure',
    badge: 'Airport Send-Off',
    title: 'Ceremonial Airport Khada Blessing by MD Dr. Saroj Sah',
    caption: 'Managing Director Dr. Saroj Sah personally honoring a departing medical student with a traditional Nepali Dhaka khada and warm blessings at Tribhuvan International Airport.',
    alt: 'Dr. Saroj Sah placing a traditional Nepali Dhaka khada on a departing medical student at Tribhuvan International Airport',
    objectPosition: 'object-[center_20%]'
  },
  {
    id: 2,
    src: '/images/gallery/retina-airport-see-off-dr-saroj-student.jpg',
    category: 'departure',
    categoryLabel: 'Airport Departure',
    badge: 'Airport Send-Off',
    title: 'Personal Airport Departure See-Off with Dr. Saroj Sah',
    caption: 'MD Dr. Saroj Sah proudly standing with an admitted medical scholar at the international departures hall before boarding her flight for medical university.',
    alt: 'Dr. Saroj Sah and departing medical student wearing Nepali Dhaka scarves at Tribhuvan International Airport',
    objectPosition: 'object-[center_20%]'
  },
  {
    id: 3,
    src: '/images/gallery/retina-group-counseling-dr-saroj.jpg',
    category: 'counseling',
    categoryLabel: 'Office Guidance',
    badge: 'Doctor-Led Briefing',
    title: 'Executive Pre-Departure & Admission Counseling',
    caption: 'Managing Director Dr. Saroj Sah conducting an in-depth counseling and pre-departure orientation session for prospective medical students in the Retina executive consultation chamber.',
    alt: 'Dr. Saroj Sah conducting group medical admission counseling with students at the Retina Educational Consultancy office',
    objectPosition: 'object-center'
  },
  {
    id: 4,
    src: '/images/gallery/retina-student-credential-handover-1.jpg',
    category: 'felicitations',
    categoryLabel: 'Student Felicitations',
    badge: 'Office Felicitation',
    title: 'Medical Admission Credentials Handover',
    caption: 'Managing Director Dr. Saroj Sah presenting official medical admission documentation, enrollment dossier, and credentials folder to an admitted scholar at the Retina Kathmandu head office.',
    alt: 'Dr. Saroj Sah presenting admission credentials and documentation to an admitted medical student at the Retina Educational Consultancy office in Kathmandu',
    objectPosition: 'object-[center_20%]'
  },
  {
    id: 5,
    src: '/images/gallery/retina-student-credential-handover-2.jpg',
    category: 'felicitations',
    categoryLabel: 'Student Felicitations',
    badge: 'Office Felicitation',
    title: 'Doctorate & Medical Placement Felicitation',
    caption: 'Dr. Puspa M. Thapa receiving her official credential documents, university enrollment package, and documentation dossier from Dr. Saroj Sah following her successful placement.',
    alt: 'Dr. Saroj Sah felicitating Dr. Puspa M. Thapa with official medical credential documents at the Retina Kathmandu office',
    objectPosition: 'object-[center_20%]'
  },
  {
    id: 6,
    src: '/images/gallery/retina-student-credential-handover-3.jpg',
    category: 'felicitations',
    categoryLabel: 'Student Felicitations',
    badge: 'Office Felicitation',
    title: 'University Offer & Documentation Handover',
    caption: 'Celebrating an academic milestone as a prospective medical scholar receives her formal university acceptance documents, visa paperwork, and credential folder from Dr. Saroj Sah.',
    alt: 'Student receiving university credentials and admission files from Dr. Saroj Sah at Retina Educational Consultancy',
    objectPosition: 'object-[center_20%]'
  },
  {
    id: 7,
    src: '/images/gallery/retina-student-credential-handover-4.jpg',
    category: 'felicitations',
    categoryLabel: 'Student Felicitations',
    badge: 'Office Felicitation',
    title: 'Medical Scholar Admission Felicitation',
    caption: 'A proud moment at the Retina Educational Consultancy reception lounge as an aspiring doctor receives her verified admission package and credentials dossier from Dr. Saroj Sah.',
    alt: 'Dr. Saroj Sah handing over medical admission credential dossier to a smiling student at the Retina office',
    objectPosition: 'object-[center_20%]'
  },
  {
    id: 8,
    src: '/images/gallery/retina-student-credential-handover-5.jpg',
    category: 'felicitations',
    categoryLabel: 'Student Felicitations',
    badge: 'Office Felicitation',
    title: 'Official University Credential Handover',
    caption: 'Congratulating our scholar on securing her medical admission abroad, presented with her formal credential documents and university folder by Managing Director Dr. Saroj Sah.',
    alt: 'Dr. Saroj Sah presenting verified university credentials and admission file to an admitted student at Retina Kathmandu office',
    objectPosition: 'object-[center_20%]'
  },
  {
    id: 9,
    src: '/images/gallery/retina-airport-departure-student-mother.jpg',
    category: 'departure',
    categoryLabel: 'Airport Departure',
    badge: 'Departure Milestone',
    title: 'Pre-Flight Milestone with Family',
    caption: 'A proud medical scholar adorned with the national flag scarf alongside her mother at Tribhuvan International Airport, holding her verified Retina admission & visa paperwork before boarding.',
    alt: 'Medical student draped with Nepal flag and her mother holding Retina visa documentation file at airport departure terminal',
    objectPosition: 'object-[center_15%]'
  },
  {
    id: 10,
    src: '/images/gallery/retina-airport-departure-scholar-tika.jpg',
    category: 'departure',
    categoryLabel: 'Airport Departure',
    badge: 'Departure Milestone',
    title: 'Auspicious Departure Blessing with Tika & Khada',
    caption: 'A dedicated medical student receiving traditional auspicious red tika and khada at the international departure terminal, ready to begin her MBBS journey abroad.',
    alt: 'Medical student with auspicious tika and traditional shawl at Tribhuvan International Airport',
    objectPosition: 'object-[center_15%]'
  },
  {
    id: 11,
    src: '/images/gallery/retina-airport-departure-family-farewell.jpg',
    category: 'departure',
    categoryLabel: 'Airport Departure',
    badge: 'Family Farewell',
    title: 'Grand Family Farewell at TIA Kathmandu',
    caption: 'Extended family and relatives gathered at Tribhuvan International Airport to bid an emotional farewell and bless aspiring doctors departing for medical college abroad.',
    alt: 'Large family gathering at Tribhuvan International Airport bidding farewell to departing medical students',
    objectPosition: 'object-center'
  },
  {
    id: 12,
    src: '/images/gallery/retina-airport-departure-luggage-family.jpg',
    category: 'departure',
    categoryLabel: 'Airport Departure',
    badge: 'Family Farewell',
    title: 'Family Gathering Around the Departure Trolley',
    caption: 'Loved ones accompanying their aspiring doctor all the way to the terminal entrance with luggage packed for university residency abroad.',
    alt: 'Family gathered with airport luggage trolley supporting departing student at Tribhuvan International Airport',
    objectPosition: 'object-center'
  },
  {
    id: 13,
    src: '/images/gallery/retina-airport-departure-emotional-blessing.jpg',
    category: 'departure',
    categoryLabel: 'Airport Departure',
    badge: 'Family Moment',
    title: 'Heartfelt Blessings & Rose Presentation',
    caption: 'A touching moment of love and encouragement from family members wishing safe travels and great success in medical studies abroad.',
    alt: 'Emotional farewell with roses and blessings at Tribhuvan International Airport',
    objectPosition: 'object-[center_15%]'
  },
  {
    id: 14,
    src: '/images/gallery/retina-students-airport-departure.jpg',
    category: 'departure',
    categoryLabel: 'Airport Departure',
    badge: 'Departing Cohort',
    title: 'Departing Scholars Ready for Medical School',
    caption: 'Admitted students ready at the airport terminal to embark together on their undergraduate medical education journey abroad, backed by Retina pre-departure guidance.',
    alt: 'Group of three students at airport terminal ready to depart for their medical university abroad',
    objectPosition: 'object-[center_15%]'
  },
  {
    id: 15,
    src: '/images/gallery/retina-airport-departure-parents-briefing.jpg',
    category: 'departure',
    categoryLabel: 'Airport Departure',
    badge: 'Pre-Flight Briefing',
    title: 'Parental Blessings & Document Check at TIA',
    caption: 'A departing medical scholar and her parents performing final travel itinerary and document checks at the international departure terminal before her flight.',
    alt: 'Student and parents checking travel and visa documents at the international airport terminal',
    objectPosition: 'object-[center_20%]'
  },
  {
    id: 16,
    src: '/images/gallery/retina-airport-advisor-briefing-students.jpg',
    category: 'departure',
    categoryLabel: 'Airport Departure',
    badge: 'Pre-Flight Briefing',
    title: 'Senior Counselor Final Airport Briefing',
    caption: 'Retina senior leadership and counselors providing last-minute guidance, encouragement, and flight transition advice to departing medical students at the airport gate.',
    alt: 'Senior counselor briefing departing medical students at Tribhuvan International Airport send-off',
    objectPosition: 'object-[center_20%]'
  },
  {
    id: 17,
    src: '/images/gallery/retina-airport-departure-scholar-three-generations.jpg',
    category: 'departure',
    categoryLabel: 'Airport Departure',
    badge: 'Family Pride',
    title: 'Three Generations Celebrating Medical Admission',
    caption: 'A proud medical scholar adorned with the national flag scarf and Dhaka khada standing with her parents and grandmother at Tribhuvan International Airport before departure.',
    alt: 'Departing medical student with parents and grandmother wearing national flag scarf at Tribhuvan International Airport',
    objectPosition: 'object-[center_20%]'
  },
  {
    id: 18,
    src: '/images/gallery/retina-airport-departure-scholar-credentials-folder.jpg',
    category: 'departure',
    categoryLabel: 'Airport Departure',
    badge: 'Departure Ready',
    title: 'Scholar with Official Retina Credentials Dossier',
    caption: 'An aspiring doctor holding his official embossed Retina credentials folder, receiving family blessings and ceremonial scarf adjustments at the departure terminal.',
    alt: 'Male medical student holding Retina credentials folder with family at international departure gate',
    objectPosition: 'object-[center_20%]'
  }
];

const categories = [
  { id: 'all', label: 'All Photos', icon: Layers },
  { id: 'departure', label: 'Airport Departures', icon: PlaneTakeoff },
  { id: 'felicitations', label: 'Student Felicitations', icon: Award },
  { id: 'counseling', label: 'Office Guidance', icon: Users }
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const breadcrumbs = [{ label: 'Gallery' }];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const showNext = useCallback(() => {
    setSelectedIndex((prevIndex) => 
      prevIndex === null ? null : (prevIndex + 1) % filteredItems.length
    );
  }, [filteredItems.length]);

  const showPrev = useCallback(() => {
    setSelectedIndex((prevIndex) => 
      prevIndex === null ? null : (prevIndex - 1 + filteredItems.length) % filteredItems.length
    );
  }, [filteredItems.length]);

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

  const activeItem = selectedIndex !== null ? filteredItems[selectedIndex] : null;

  return (
    <div className="space-y-0 bg-[#FFFFFF]">
      {/* 1. Page Header */}
      <PageHeader
        badge="Authentic Photo Archive"
        title="Real Students, Felicitations & Departure Moments"
        subtitle="Explore 100% authentic photographic moments from Retina Educational Consultancy — from personal credential handovers and doctor-led counseling at our Putalisadak office to heartfelt airport departures at Tribhuvan International Airport."
        breadcrumbs={breadcrumbs}
      />

      {/* 2. Gallery Grid Section */}
      <section className="py-16 sm:py-24 lg:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal y={12}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10 pb-6 border-b border-[#E2E8F0]">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF4FF] text-[#0E4BA4] text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5 text-[#0E4BA4]" />
                <span>100% AUTHENTIC PHOTOGRAPHS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] tracking-tight font-display">
                Real Felicitations, Briefings &amp; Departures
              </h2>
              <p className="text-xs sm:text-sm text-[#5B6472] mt-1 max-w-2xl leading-relaxed">
                Featuring official credential handovers and counseling by MD Dr. Saroj Sah at our Putalisadak office alongside airport departure farewells.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const IconComponent = cat.icon;
                const count = cat.id === 'all' 
                  ? galleryItems.length 
                  : galleryItems.filter(item => item.category === cat.id).length;
                const isActive = activeCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setSelectedIndex(null);
                    }}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                      isActive 
                        ? 'bg-[#0E4BA4] text-white shadow-sm shadow-[#0E4BA4]/25 ring-2 ring-[#0E4BA4]'
                        : 'bg-[#F8FAFC] text-[#5B6472] hover:bg-[#EEF4FF] hover:text-[#0E4BA4] border border-[#E2E8F0]'
                    }`}
                  >
                    <IconComponent className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-[#0E4BA4]'}`} />
                    <span>{cat.label}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                      isActive ? 'bg-white/20 text-white' : 'bg-[#E2E8F0] text-[#102A43]'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Responsive Grid with Stagger Items */}
        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" stagger={0.05}>
          {filteredItems.map((item, index) => {
            const isFeatured = activeCategory === 'all' && index === 0;

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
                  <div className={`relative w-full overflow-hidden bg-[#102A43] ${isFeatured ? 'h-72 sm:h-96' : 'h-64 sm:h-80'}`}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      className={`w-full h-full object-cover ${item.objectPosition || 'object-center'} group-hover:scale-[1.03] transition-transform duration-600 ease-out`}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#102A43]/85 via-[#102A43]/25 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                    {/* Top Pill / Badge */}
                    <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-white/95 backdrop-blur-sm text-[#102A43] shadow-xs">
                        <Sparkles className="w-3 h-3 text-[#0E4BA4]" />
                        <span>{item.badge || `Photo ${index + 1}`}</span>
                      </span>
                    </div>

                    {/* Expand Button Indicator */}
                    <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="p-2 rounded-xl bg-white/95 text-[#102A43] shadow-md hover:bg-white transition-colors">
                        <Maximize2 className="w-4 h-4 text-[#0E4BA4]" />
                      </div>
                    </div>

                    {/* Bottom Caption Pill */}
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <div className="bg-black/60 backdrop-blur-md p-3.5 rounded-xl border border-white/15 text-white">
                        <div className="text-[10px] font-bold uppercase tracking-wider text-[#FF914D] mb-1">
                          {item.categoryLabel}
                        </div>
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
                PLAN YOUR VISIT
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
                  {selectedIndex + 1} / {filteredItems.length}
                </span>
                <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[#0E4BA4] text-white">
                  {activeItem.categoryLabel}
                </span>
                <span className="text-sm font-bold truncate max-w-[220px] sm:max-w-md hidden sm:inline">
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
            <div className="relative flex-1 bg-black/80 flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[460px] max-h-[68vh] p-2">
              <img
                src={activeItem.src}
                alt={activeItem.alt}
                className="max-w-full max-h-[68vh] w-auto h-auto object-contain select-none rounded-lg"
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
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>{activeItem.title}</span>
                  {activeItem.badge && (
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-[#FF914D] font-normal">
                      {activeItem.badge}
                    </span>
                  )}
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

