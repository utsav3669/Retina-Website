import React, { useState, useEffect } from 'react';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink 
} from 'lucide-react';
import { companyData } from '../data/companyData';

// Official Google "G" icon
function GoogleGIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
      <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
      <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"/>
      <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
    </svg>
  );
}

// Gold star rating
function StarRating({ rating = 5, size = "w-3.5 h-3.5" }) {
  const rounded = Math.min(5, Math.max(1, Math.round(rating)));
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((s) => (
        <Star
          key={s}
          className={`${size} ${
            s <= rounded ? 'fill-amber-400 text-amber-400' : 'fill-slate-200 text-slate-200'
          }`}
        />
      ))}
    </div>
  );
}

// Default genuine reviews fallback (served immediately, updated dynamically by API)
const INITIAL_REVIEWS = [
  {
    id: "rev_suvash",
    authorName: "Suvash Yadav",
    authorPhoto: "https://lh3.googleusercontent.com/a-/ALV-UjXPbBpjlikcAsUsV_8grJB63cPgi2z5iITisUC7UU_nzWxZMBbG=s120-c-rp-mo-br100",
    rating: 5,
    relativeTime: "2 days ago",
    text: "A reliable consultancy for studying MBBS in Bangladesh. The Retina team is friendly, knowledgeable, and always ready to help. Great experience with Retina."
  },
  {
    id: "rev_shaswat",
    authorName: "Shaswat satyal",
    authorPhoto: "https://lh3.googleusercontent.com/a-/ALV-UjVMUpfUsjRNgwM0Ou0qP-CmRJnANh90BkFF7Ziah8ixHgftb74=s120-c-rp-mo-br100",
    rating: 5,
    relativeTime: "2 days ago",
    text: "I took admission in Enam Medical College of Bangladesh through Retina. The team is experienced and always available for any queries. Their documentation and processing are top-class. Thank you Retina for helping me take my first step toward becoming a doctor."
  },
  {
    id: "rev_amlesh",
    authorName: "Amlesh kumar Yadav",
    authorPhoto: "https://lh3.googleusercontent.com/a-/ALV-UjU4udpGLxmKZt0luAJ4OCnx2Z--ZAIoPnjmP9PEV3rWoVWCHfBpOA=s120-c-rp-mo-br100",
    rating: 5,
    relativeTime: "a week ago",
    text: "I had a great experience with this consultancy for my MBBS abroad process. They were professional, supportive, and guided me at every step, from university selection to visa processing. Everything was explained clearly and transparently. I highly recommend them to students planning to study abroad."
  },
  {
    id: "rev_jay",
    authorName: "Jay Prakash Ganesh",
    authorPhoto: "https://lh3.googleusercontent.com/a/ACg8ocIxG4q2e-7tAInHGJfmM1CGyGBisXtAy8eEaFHTMXTsl-Qltw=s120-c-rp-mo-br100",
    rating: 5,
    relativeTime: "a week ago",
    text: "Best consultancy, professional counsellors , run by trusted doctors who are practicing in Nepal , so it's a trusted brand"
  },
  {
    id: "rev_anishant",
    authorName: "Anishant Shah",
    authorPhoto: "https://lh3.googleusercontent.com/a-/ALV-UjW40AmT9zz7jlXb9pzvmsd5qHr4sTzrb_A-rWPV5dWZaX62wgQ=s120-c-rp-mo-br100",
    rating: 5,
    relativeTime: "a month ago",
    text: "Best Consultancy For Medical Admission in Bangladesh."
  }
];

export default function GoogleReviewsSection() {
  const [reviews, setReviews] = useState(INITIAL_REVIEWS);
  const [rating, setRating] = useState(5.0);
  const [reviewCount, setReviewCount] = useState(13);
  const [googleMapsUrl, setGoogleMapsUrl] = useState(companyData.googleMapUrl);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});

  // Responsive cards-per-view (Desktop: 3, Tablet: 2, Mobile: 1)
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setCardsPerView(1);
      } else if (width < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Fetch reviews dynamically from the backend endpoint
  useEffect(() => {
    let isMounted = true;
    fetch('/api/google-reviews')
      .then(res => res.json())
      .then(data => {
        if (!isMounted) return;
        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews);
        }
        if (data.profile) {
          if (data.profile.rating) setRating(data.profile.rating);
          if (data.profile.userRatingCount) setReviewCount(data.profile.userRatingCount);
          if (data.profile.googleMapsUri) setGoogleMapsUrl(data.profile.googleMapsUri);
        }
      })
      .catch(err => {
        console.warn('Could not sync with /api/google-reviews, using cached verified reviews:', err);
      });
    return () => { isMounted = false; };
  }, []);

  const maxIndex = Math.max(0, reviews.length - cardsPerView);

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1));
  };

  // Mobile swipe gestures
  const minSwipeDistance = 40;
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  const toggleExpand = (id) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section 
      id="reviews" 
      aria-label="Google Reviews"
      className="py-14 sm:py-18 bg-[#FFFFFF] border-t border-[#E2E8F0]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact Header: Small Label + Title + Rating Summary */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div>
            <span className="text-2xs font-bold uppercase tracking-wider text-[#0E4BA4]">
              GOOGLE REVIEWS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102A43] font-display tracking-tight mt-1">
              What Our Students Say
            </h2>
            <p className="text-xs sm:text-sm text-[#5B6472] mt-1 font-normal">
              Real experiences from students and families who trusted Retina.
            </p>
          </div>

          {/* Small Rating Summary */}
          <div className="flex items-center gap-3 shrink-0 self-start sm:self-auto bg-slate-50 border border-slate-200/80 px-3.5 py-2 rounded-xl">
            <span className="text-lg font-bold text-[#102A43] font-display">
              {Number(rating).toFixed(1)}
            </span>
            <div className="space-y-0.5">
              <StarRating rating={rating} />
              <span className="text-2xs text-[#5B6472] font-medium block">
                {reviewCount} Google Reviews
              </span>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          className="relative overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div 
            className="flex transition-transform duration-400 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`
            }}
          >
            {reviews.map((rev) => {
              const isLong = rev.text && rev.text.length > 150;
              const isExpanded = !!expandedCards[rev.id];
              const displayText = (isLong && !isExpanded) ? `${rev.text.slice(0, 145)}...` : rev.text;
              const initials = rev.authorName ? rev.authorName.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase() : 'U';

              return (
                <div
                  key={rev.id}
                  className="shrink-0 px-2 sm:px-3"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <div className="bg-[#FFFFFF] rounded-xl p-5 border border-[#E2E8F0] shadow-2xs hover:shadow-xs transition-shadow duration-200 flex flex-col justify-between h-full">
                    <div>
                      {/* Top Row: Avatar + Name + Google Icon */}
                      <div className="flex items-start justify-between gap-3 mb-2.5">
                        <div className="flex items-center gap-2.5 min-w-0">
                          {rev.authorPhoto ? (
                            <img
                              src={rev.authorPhoto}
                              alt={rev.authorName}
                              loading="lazy"
                              referrerPolicy="no-referrer"
                              className="w-9 h-9 rounded-full object-cover border border-[#E2E8F0] shrink-0"
                              onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                if (e.currentTarget.nextSibling) {
                                  e.currentTarget.nextSibling.style.display = 'flex';
                                }
                              }}
                            />
                          ) : null}
                          <div 
                            className={`w-9 h-9 rounded-full bg-[#0E4BA4]/10 text-[#0E4BA4] font-bold text-xs items-center justify-center shrink-0 border border-[#0E4BA4]/20 ${
                              rev.authorPhoto ? 'hidden' : 'flex'
                            }`}
                          >
                            {initials}
                          </div>

                          <div className="min-w-0">
                            <span className="font-bold text-xs sm:text-sm text-[#102A43] truncate block font-display">
                              {rev.authorName}
                            </span>
                            <StarRating rating={rev.rating} />
                          </div>
                        </div>

                        <div className="shrink-0 pt-0.5" title="Google Review">
                          <GoogleGIcon className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Review Text */}
                      <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed mt-2.5 font-normal">
                        “{displayText}”
                      </p>

                      {isLong && (
                        <button
                          type="button"
                          onClick={() => toggleExpand(rev.id)}
                          className="text-2xs font-semibold text-[#0E4BA4] hover:underline mt-1.5 block cursor-pointer"
                        >
                          {isExpanded ? 'Show less' : 'Read more'}
                        </button>
                      )}
                    </div>

                    {/* Review Date */}
                    <div className="pt-3 mt-3 border-t border-[#F1F5F9] text-2xs text-[#8D98AA]">
                      {rev.relativeTime}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Carousel Controls: Arrows + Dots */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            type="button"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="w-8 h-8 rounded-lg border border-[#E2E8F0] bg-white flex items-center justify-center text-[#102A43] hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => setCurrentIndex(dotIdx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === dotIdx ? 'w-4 bg-[#0E4BA4]' : 'w-1.5 bg-[#CBD5E1]'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="w-8 h-8 rounded-lg border border-[#E2E8F0] bg-white flex items-center justify-center text-[#102A43] hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Single clean link to view all reviews on Google */}
        <div className="text-center mt-5">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#0E4BA4] hover:text-[#0A3B82] hover:underline transition-colors"
          >
            <span>View all reviews on Google</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
