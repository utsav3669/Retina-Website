import React from 'react';
import { motion } from 'framer-motion';

const easeCubic = [0.22, 1, 0.36, 1];

/**
 * Subtle scroll reveal with gentle upward movement (12-16px max)
 */
export function ScrollReveal({ 
  children, 
  delay = 0, 
  y = 14, 
  duration = 0.5, 
  className = '' 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration, delay, ease: easeCubic }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Staggered container for grids (destinations, courses, articles, steps)
 */
const containerVariants = {
  hidden: { opacity: 0 },
  show: (custom = {}) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.stagger ?? 0.08,
      delayChildren: custom.delay ?? 0.04,
    },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease: easeCubic,
    },
  },
};

export function StaggerGrid({ children, className = '', stagger = 0.08, delay = 0.04 }) {
  return (
    <motion.div
      variants={containerVariants}
      custom={{ stagger, delay }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-40px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '' }) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

/**
 * Soft entrance animation for Hero sections (header, titles, CTAs)
 */
export function HeroFadeIn({ children, delay = 0, y = 12, duration = 0.55, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: easeCubic }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
