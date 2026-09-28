import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const easeCubic = [0.22, 1, 0.36, 1];

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
          <motion.nav
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: easeCubic }}
            className="flex items-center gap-2 text-xs text-white/[0.60] mb-6 font-medium"
          >
            <Link to="/" className="hover:text-white transition-colors duration-200">Home</Link>
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-white/40" />
                {crumb.to ? (
                  <Link to={crumb.to} className="hover:text-white transition-colors duration-200">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#FFFFFF] font-semibold">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </motion.nav>
        )}

        {/* Content with soft entrance transitions */}
        <div className="max-w-3xl space-y-4">
          {badge && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08, ease: easeCubic }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/[0.80] border border-white/15 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E21F26]" />
                <span>{badge}</span>
              </span>
            </motion.div>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14, ease: easeCubic }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight font-display"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.22, ease: easeCubic }}
              className="text-base sm:text-lg text-white/[0.78] leading-relaxed font-normal"
            >
              {subtitle}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3, ease: easeCubic }}
              className="pt-4 text-white/[0.78]"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
