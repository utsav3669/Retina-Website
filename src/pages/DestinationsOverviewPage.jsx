import React from 'react';
import { ShieldCheck } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import DestinationCard from '../components/DestinationCard';
import CTASection from '../components/CTASection';
import { destinations } from '../data/destinationsData';

export default function DestinationsOverviewPage() {
  const breadcrumbs = [{ label: 'Study Destinations' }];

  return (
    <div className="space-y-20 sm:space-y-28 bg-[#FFFFFF]">
      {/* Page Header */}
      <PageHeader
        badge="Global Opportunities"
        title="Explore Your Study Destinations"
        subtitle="Explore six premier international study destinations. Discover information regarding academic systems, university structures, and study environments to make an informed choice."
        breadcrumbs={breadcrumbs}
      />

      {/* Destinations Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#164B9B]">
            TARGET COUNTRIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight font-display">
            Where Could Your Education Take You?
          </h2>
          <p className="text-sm sm:text-base text-[#667085] font-normal">
            Select any destination to explore entry frameworks, popular fields of study, and student environments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>

      {/* Honest Advisory Notice (Off-White: #FAFBFC) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FAFBFC] border border-[#E2E6EC] rounded-3xl p-8 sm:p-12">
          <div className="flex flex-col sm:flex-row items-start gap-5">
            <div className="w-11 h-11 rounded-2xl bg-white border border-[#E2E6EC] text-[#164B9B] flex items-center justify-center shrink-0 shadow-xs">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-[#172033] font-display">
                Ethical Advisory Standards
              </h3>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed max-w-3xl font-normal">
                StudyHub Int'l Education operates with strict advisory ethics. All visa decisions, post-study work permits, and institutional admissions remain solely within the jurisdiction of respective government immigration departments and universities. We do not make false guarantees regarding visas or permanent residency. Our role is to provide transparent, accurate preparation and thorough documentation guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <CTASection />
    </div>
  );
}
