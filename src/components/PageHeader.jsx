import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

export default function PageHeader({
  badge,
  title,
  subtitle,
  breadcrumbs = [],
  children
}) {
  return (
    <div className="relative overflow-hidden bg-[#0B2F6B] text-white pt-12 pb-16 sm:pb-20 border-b border-white/10">
      {/* Subtle brand radial glow: #0B2F6B -> #164B9B */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-gradient-to-tr from-[#164B9B]/25 to-transparent blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center gap-2 text-xs text-white/[0.60] mb-6 font-medium">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-white transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#FFFFFF] font-semibold">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Content */}
        <div className="max-w-3xl space-y-4">
          {badge && (
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/[0.80] border border-white/15 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E21F26]" />
              <span>{badge}</span>
            </span>
          )}

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight font-display">
            {title}
          </h1>

          {subtitle && (
            <p className="text-base sm:text-lg text-white/[0.78] leading-relaxed font-normal">
              {subtitle}
            </p>
          )}

          {children && (
            <div className="pt-4 text-white/[0.78]">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
