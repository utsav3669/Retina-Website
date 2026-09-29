import React from 'react';
import { ShieldCheck } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import DestinationCard from '../components/DestinationCard';
import CTASection from '../components/CTASection';
import { destinations } from '../data/destinationsData';
import { ScrollReveal, StaggerGrid, StaggerItem } from '../components/MotionReveal';

export default function DestinationsOverviewPage() {
  const breadcrumbs = [{ label: 'Study Destinations' }];

  return (
    <div className="space-y-20 sm:space-y-28 bg-[#FFFFFF]">
      {/* Page Header with soft entrance */}
      <PageHeader
        badge="Medical Destinations"
        title="Explore Premier Medical Study Destinations"
        subtitle="Explore leading destinations for MBBS, MD, MS, BDS, and nursing abroad: Bangladesh, China, India, and the Philippines. Guided by doctors who studied in Bangladesh."
        breadcrumbs={breadcrumbs}
      />

      {/* Destinations Grid with Staggered Entrance */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal y={14}>
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#0E4BA4]">
              TARGET COUNTRIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#102A43] tracking-tight font-display">
              Where Could Your Medical Career Take You?
            </h2>
            <p className="text-sm sm:text-base text-[#5B6472] font-normal">
              Select any country to explore medical college entry requirements, clinical hospital exposure, and doctor-led guidance.
            </p>
          </div>
        </ScrollReveal>

        <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" stagger={0.07}>
          {destinations.map((dest) => (
            <StaggerItem key={dest.id}>
              <DestinationCard destination={dest} />
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      {/* Honest Advisory Notice (Soft Blue: #EEF4FF) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal y={14}>
          <div className="bg-[#EEF4FF] border border-[#E2E8F0] rounded-3xl p-8 sm:p-12">
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <div className="w-11 h-11 rounded-2xl bg-white border border-[#E2E8F0] text-[#0E4BA4] flex items-center justify-center shrink-0 shadow-xs">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#102A43] font-display">
                  Ethical Medical Advisory Standards
                </h3>
                <p className="text-xs sm:text-sm text-[#5B6472] leading-relaxed max-w-3xl font-normal">
                  Retina Educational Consultancy operates with strict medical and educational ethics. Owned by doctors who graduated from Dhaka University with 15+ years of counselor experience, we offer verified guidance for medical admissions in Bangladesh, China, India, and the Philippines. We do not make false claims or guarantee outcomes that are solely determined by official regulatory and university authorities.
                </p>
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
