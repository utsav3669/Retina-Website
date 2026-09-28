import React from 'react';

/**
 * 1. HERO BACKGROUND ROUTE
 * A thin, elegant curved route line sweeping through the background of the hero
 * with 3-4 tiny location points. Barely visible, communicates international journeys.
 */
export function HeroRouteBackground({ className = "" }) {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none -z-0 ${className}`} 
      aria-hidden="true"
    >
      <svg
        className="w-full h-full animate-route-drift"
        viewBox="0 0 1440 650"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main international flight / journey route */}
        <path
          d="M -50 520 C 320 480, 520 280, 940 220 S 1320 160, 1500 110"
          stroke="#164B9B"
          strokeWidth="1.2"
          strokeDasharray="5 7"
          strokeOpacity="0.07"
        />

        {/* Secondary subtle intersecting connection branch */}
        <path
          d="M 520 280 C 720 320, 880 390, 1140 410 S 1380 360, 1490 320"
          stroke="#164B9B"
          strokeWidth="0.9"
          strokeOpacity="0.045"
        />

        {/* Faint departure waypoint (Nepal / Origin hub) with very subtle red accent */}
        <g transform="translate(420, 360)">
          <circle r="7" stroke="#E21F26" strokeWidth="0.8" strokeOpacity="0.14" fill="none" />
          <circle r="2.5" fill="#E21F26" fillOpacity="0.18" />
        </g>

        {/* Intermediate transit waypoint */}
        <g transform="translate(730, 245)">
          <circle r="6" stroke="#164B9B" strokeWidth="0.8" strokeOpacity="0.07" fill="none" />
          <circle r="2" fill="#164B9B" fillOpacity="0.10" />
        </g>

        {/* Global academic destination waypoint 1 */}
        <g transform="translate(940, 220)">
          <circle r="6" stroke="#164B9B" strokeWidth="0.8" strokeOpacity="0.08" fill="none" />
          <circle r="2.5" fill="#164B9B" fillOpacity="0.11" />
        </g>

        {/* Global academic destination waypoint 2 */}
        <g transform="translate(1140, 410)">
          <circle r="5" stroke="#164B9B" strokeWidth="0.8" strokeOpacity="0.06" fill="none" />
          <circle r="2" fill="#164B9B" fillOpacity="0.08" />
        </g>
      </svg>
    </div>
  );
}

/**
 * 2. ABOUT SECTION ORBITS
 * One or two extremely subtle overlapping circular forms placed behind the counseling photo.
 * Opacity: 4-7%. Partially cropped by the section boundary to add depth without decorativeness.
 */
export function AboutOrbitsBackground({ className = "" }) {
  return (
    <div 
      className={`absolute pointer-events-none select-none overflow-hidden -z-0 ${className}`} 
      aria-hidden="true"
    >
      <svg
        className="w-full h-full animate-subtle-pulse"
        viewBox="0 0 540 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer primary orbital ring */}
        <circle
          cx="270"
          cy="240"
          r="190"
          stroke="#164B9B"
          strokeWidth="1"
          strokeDasharray="4 6"
          strokeOpacity="0.055"
        />

        {/* Inner intersecting orbital ring */}
        <circle
          cx="220"
          cy="200"
          r="140"
          stroke="#0B2F6B"
          strokeWidth="1"
          strokeOpacity="0.045"
        />

        {/* Minimal tangential alignment vector */}
        <line
          x1="80"
          y1="160"
          x2="460"
          y2="280"
          stroke="#164B9B"
          strokeWidth="0.75"
          strokeOpacity="0.035"
        />

        {/* Subtle convergence node */}
        <circle
          cx="245"
          cy="340"
          r="2.5"
          fill="#164B9B"
          fillOpacity="0.08"
        />
      </svg>
    </div>
  );
}

/**
 * 3. DESTINATIONS SECTION PATH
 * Very faint curved route lines connecting several small points,
 * representing international student mobility corridors.
 * Never competes with photography. Opacity: 4-6%.
 */
export function DestinationsPathBackground({ className = "" }) {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none -z-0 ${className}`} 
      aria-hidden="true"
    >
      <svg
        className="w-full h-full animate-route-drift"
        viewBox="0 0 1440 700"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Route Corridor 1: Trans-Pacific / Northern corridor */}
        <path
          d="M 60 560 Q 420 220 860 380 T 1400 160"
          stroke="#164B9B"
          strokeWidth="1"
          strokeDasharray="6 8"
          strokeOpacity="0.05"
        />

        {/* Route Corridor 2: European & Commonwealth corridor */}
        <path
          d="M 180 620 C 380 440, 780 480, 1120 310 S 1360 220, 1460 200"
          stroke="#0B2F6B"
          strokeWidth="0.9"
          strokeOpacity="0.04"
        />

        {/* Destination Nodes (London, Toronto, Sydney, New York) */}
        <g transform="translate(340, 420)">
          <circle r="5" stroke="#164B9B" strokeWidth="0.75" strokeOpacity="0.06" fill="none" />
          <circle r="2" fill="#164B9B" fillOpacity="0.08" />
        </g>
        <g transform="translate(680, 290)">
          <circle r="6" stroke="#164B9B" strokeWidth="0.75" strokeOpacity="0.07" fill="none" />
          <circle r="2.5" fill="#164B9B" fillOpacity="0.09" />
        </g>
        <g transform="translate(980, 360)">
          <circle r="5" stroke="#164B9B" strokeWidth="0.75" strokeOpacity="0.06" fill="none" />
          <circle r="2" fill="#164B9B" fillOpacity="0.08" />
        </g>
        <g transform="translate(1260, 240)">
          <circle r="6" stroke="#164B9B" strokeWidth="0.75" strokeOpacity="0.07" fill="none" />
          <circle r="2.5" fill="#164B9B" fillOpacity="0.09" />
        </g>
      </svg>
    </div>
  );
}

/**
 * 4. COURSE SECTION PROGRESS MOTIF
 * A very subtle abstract educational/progress motif.
 * A thin ascending line with minimal points suggesting: Preparation -> Practice -> Progress.
 * Opacity: 5-7%. Pure editorial sophistication, not a dashboard or graph.
 */
export function CourseProgressBackground({ className = "" }) {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none -z-0 ${className}`} 
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1200 450"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Ascending progress trajectory */}
        <path
          d="M 80 360 C 280 360, 420 270, 600 220 S 920 120, 1140 85"
          stroke="#164B9B"
          strokeWidth="1.1"
          strokeDasharray="4 6"
          strokeOpacity="0.06"
        />

        {/* Milestone 1: Preparation */}
        <g transform="translate(360, 305)">
          <line x1="0" y1="0" x2="0" y2="45" stroke="#164B9B" strokeWidth="0.75" strokeDasharray="2 3" strokeOpacity="0.035" />
          <circle r="6" stroke="#164B9B" strokeWidth="0.8" strokeOpacity="0.08" fill="none" />
          <circle r="2.5" fill="#164B9B" fillOpacity="0.10" />
        </g>

        {/* Milestone 2: Practice */}
        <g transform="translate(600, 220)">
          <line x1="0" y1="0" x2="0" y2="45" stroke="#164B9B" strokeWidth="0.75" strokeDasharray="2 3" strokeOpacity="0.035" />
          <circle r="6" stroke="#164B9B" strokeWidth="0.8" strokeOpacity="0.08" fill="none" />
          <circle r="2.5" fill="#164B9B" fillOpacity="0.10" />
        </g>

        {/* Milestone 3: Progress */}
        <g transform="translate(890, 135)">
          <line x1="0" y1="0" x2="0" y2="45" stroke="#164B9B" strokeWidth="0.75" strokeDasharray="2 3" strokeOpacity="0.035" />
          <circle r="6" stroke="#164B9B" strokeWidth="0.8" strokeOpacity="0.08" fill="none" />
          <circle r="2.5" fill="#164B9B" fillOpacity="0.10" />
        </g>
      </svg>
    </div>
  );
}

/**
 * 5. FINAL CTA ORBITAL BACKGROUND
 * Used on the dark navy (#0B2F6B) CTA section.
 * Thin orbital curves, subtle route lines, and soft circular forms in rgba(255,255,255,0.05-0.08).
 * Naturally blends into the dark navy canvas.
 */
export function CTAOrbitalBackground({ className = "" }) {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none -z-0 ${className}`} 
      aria-hidden="true"
    >
      <svg
        className="w-full h-full animate-orbital-slow"
        viewBox="0 0 1200 480"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Primary upper orbital arc */}
        <path
          d="M 50 240 A 620 260 0 0 1 1150 240"
          stroke="rgba(255, 255, 255, 0.055)"
          strokeWidth="1"
          strokeDasharray="6 8"
        />

        {/* Secondary lower counter-orbital arc */}
        <path
          d="M 180 250 A 480 190 0 0 0 1020 250"
          stroke="rgba(255, 255, 255, 0.045)"
          strokeWidth="1"
        />

        {/* Smooth curving route line cutting across */}
        <path
          d="M 120 380 Q 600 110 1080 320"
          stroke="rgba(255, 255, 255, 0.065)"
          strokeWidth="1"
        />

        {/* Subtle white node points */}
        <g transform="translate(390, 235)">
          <circle r="6" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.75" fill="none" />
          <circle r="2" fill="rgba(255, 255, 255, 0.12)" />
        </g>
        <g transform="translate(600, 165)">
          <circle r="7" stroke="rgba(255, 255, 255, 0.09)" strokeWidth="0.75" fill="none" />
          <circle r="2.5" fill="rgba(255, 255, 255, 0.14)" />
        </g>
        <g transform="translate(850, 240)">
          <circle r="5" stroke="rgba(255, 255, 255, 0.07)" strokeWidth="0.75" fill="none" />
          <circle r="2" fill="rgba(255, 255, 255, 0.10)" />
        </g>
      </svg>
    </div>
  );
}

/**
 * 6. COURSE CARD PROGRESS MOTIF
 * A tiny curved progress line with 3 connected dots for Course Cards.
 * Occupies < 5% of card space, completely non-intrusive.
 */
export function CardProgressMotif({ className = "" }) {
  return (
    <svg 
      className={`w-12 h-4 pointer-events-none select-none ${className}`} 
      viewBox="0 0 48 16" 
      fill="none" 
      aria-hidden="true"
    >
      <path 
        d="M 4 12 C 14 12, 20 8, 28 8 S 38 4, 44 4" 
        stroke="#164B9B" 
        strokeWidth="1" 
        strokeDasharray="2 3" 
        strokeOpacity="0.25" 
      />
      <circle cx="4" cy="12" r="2" fill="#164B9B" fillOpacity="0.35" />
      <circle cx="26" cy="8" r="2" fill="#164B9B" fillOpacity="0.45" />
      <circle cx="44" cy="4" r="2" fill="#E21F26" fillOpacity="0.65" />
    </svg>
  );
}

/**
 * 7. DESTINATION CARD ROUTE ARC
 * A tiny route arc connecting two points for Destination Cards.
 */
export function CardRouteArc({ className = "" }) {
  return (
    <svg 
      className={`w-10 h-4 pointer-events-none select-none ${className}`} 
      viewBox="0 0 40 16" 
      fill="none" 
      aria-hidden="true"
    >
      <path 
        d="M 4 13 Q 20 2 36 13" 
        stroke="#FFFFFF" 
        strokeWidth="1" 
        strokeDasharray="2 3" 
        strokeOpacity="0.45" 
      />
      <circle cx="4" cy="13" r="1.8" fill="#FFFFFF" fillOpacity="0.8" />
      <circle cx="36" cy="13" r="1.8" fill="#E21F26" fillOpacity="0.9" />
    </svg>
  );
}

/**
 * 8. BLOG CARD GRID DETAIL
 * A tiny abstract 3x3 line/grid fragment for Blog Cards.
 */
export function CardGridDetail({ className = "" }) {
  return (
    <svg 
      className={`w-5 h-5 pointer-events-none select-none ${className}`} 
      viewBox="0 0 20 20" 
      fill="none" 
      aria-hidden="true"
    >
      <line x1="3" y1="3" x2="17" y2="3" stroke="#164B9B" strokeWidth="0.8" strokeOpacity="0.18" />
      <line x1="3" y1="10" x2="17" y2="10" stroke="#164B9B" strokeWidth="0.8" strokeOpacity="0.12" strokeDasharray="2 2" />
      <line x1="3" y1="17" x2="17" y2="17" stroke="#164B9B" strokeWidth="0.8" strokeOpacity="0.18" />
      <circle cx="10" cy="10" r="1.5" fill="#164B9B" fillOpacity="0.30" />
    </svg>
  );
}

/**
 * 9. CONNECTING NODE GRAPHIC
 * Used for counseling cards, physical center banners, etc.
 */
export function ConnectingNodeGraphic({ className = "" }) {
  return (
    <svg 
      className={`w-12 h-6 pointer-events-none select-none ${className}`} 
      viewBox="0 0 48 24" 
      fill="none" 
      aria-hidden="true"
    >
      <path 
        d="M 6 12 Q 24 4 42 12" 
        stroke="rgba(255,255,255,0.25)" 
        strokeWidth="1" 
        strokeDasharray="3 3" 
      />
      <circle cx="6" cy="12" r="2.5" fill="#E21F26" fillOpacity="0.8" />
      <circle cx="24" cy="7" r="1.5" fill="rgba(255,255,255,0.6)" />
      <circle cx="42" cy="12" r="2" fill="rgba(255,255,255,0.8)" />
    </svg>
  );
}

/**
 * 10. ABOUT CARD ORBITAL MOTIF
 * A subtle overlapping circle or orbital line for About cards.
 * Occupies < 5% of card space.
 */
export function CardOrbitalMotif({ className = "" }) {
  return (
    <svg 
      className={`w-8 h-4 pointer-events-none select-none ${className}`} 
      viewBox="0 0 32 16" 
      fill="none" 
      aria-hidden="true"
    >
      <circle cx="10" cy="8" r="6" stroke="#164B9B" strokeWidth="0.8" strokeOpacity="0.25" fill="none" />
      <circle cx="18" cy="8" r="6" stroke="#164B9B" strokeWidth="0.8" strokeOpacity="0.20" strokeDasharray="2 2" fill="none" />
      <circle cx="10" cy="8" r="1.5" fill="#164B9B" fillOpacity="0.30" />
    </svg>
  );
}

/**
 * 11. BOX CAMPUS WAYPOINT (For Bhairahawa Box)
 * Abstract minimalist consultancy element with a subtle origin point, 
 * fine radial aura ring, and an outgoing dashed journey vector.
 */
export function BoxCampusWaypoint({ className = "" }) {
  return (
    <svg
      className={`w-16 h-16 pointer-events-none select-none ${className}`}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="46" cy="46" r="22" stroke="#FFFFFF" strokeWidth="0.8" strokeDasharray="3 3" strokeOpacity="0.25" />
      <circle cx="46" cy="46" r="10" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.35" />
      <circle cx="46" cy="46" r="3" fill="#FFFFFF" fillOpacity="0.85" />
      <circle cx="46" cy="46" r="1.5" fill="#E21F26" />
      <path
        d="M 12 18 C 24 18, 36 28, 46 46"
        stroke="#FFFFFF"
        strokeWidth="0.9"
        strokeDasharray="2 3"
        strokeOpacity="0.3"
      />
    </svg>
  );
}

/**
 * 12. BOX INTEGRITY ORBITS (For 100% Honest Box)
 * Abstract minimalist consultancy element with dual intersecting geometric orbits
 * and precision alignment ticks symbolizing ethics, objectivity, and transparency.
 */
export function BoxIntegrityOrbits({ className = "" }) {
  return (
    <svg
      className={`w-16 h-16 pointer-events-none select-none ${className}`}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="44" cy="44" r="22" stroke="#FFFFFF" strokeWidth="0.8" strokeDasharray="3 4" strokeOpacity="0.25" />
      <circle cx="34" cy="34" r="15" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.3" />
      <circle cx="44" cy="44" r="2.5" fill="#FFFFFF" fillOpacity="0.85" />
      <circle cx="34" cy="34" r="1.8" fill="#E21F26" fillOpacity="0.8" />
      <line x1="44" y1="18" x2="44" y2="24" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.3" />
      <line x1="18" y1="44" x2="24" y2="44" stroke="#FFFFFF" strokeWidth="0.8" strokeOpacity="0.3" />
    </svg>
  );
}

/**
 * 13. FOOTER ABSTRACT BACKGROUND
 * Completely distinct from the world map.
 * Elegant minimal abstract consultancy visual language:
 * - Architectural hairline coordinates and alignment ticks
 * - Minimal circular rings / orbits in empty background zones
 * - Small connected nodes symbolizing consultation & guidance
 * - Subtle document / milestone planning rectangle
 * - Fine grid fragments with 85%+ negative space
 * - Color: rgba(255, 255, 255, 0.04 - 0.08) with subtle #E21F26 accent
 */
export function FooterAbstractBackground({ className = "" }) {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none -z-0 ${className}`} 
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 480"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Upper Left (behind logo / brand statement margin) - Fine architectural alignment guides */}
        <g stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.8">
          <line x1="40" y1="30" x2="380" y2="30" />
          <line x1="40" y1="30" x2="40" y2="180" />
          <line x1="60" y1="45" x2="60" y2="75" strokeDasharray="2 3" />
          {/* Subtle document/milestone planning rectangle */}
          <rect x="70" y="45" width="28" height="38" rx="3" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.8" fill="none" />
          <line x1="78" y1="56" x2="90" y2="56" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.75" />
          <line x1="78" y1="63" x2="86" y2="63" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.75" />
        </g>

        {/* Center / Navigation Columns - Subtle vertical guide ticks & connected nodes */}
        <g stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.75">
          <line x1="560" y1="40" x2="560" y2="280" strokeDasharray="3 6" />
          <circle cx="560" cy="90" r="2.5" fill="rgba(255, 255, 255, 0.07)" />
          <line x1="840" y1="50" x2="840" y2="260" strokeDasharray="4 8" />
          <circle cx="840" cy="140" r="2" fill="rgba(255, 255, 255, 0.06)" />
        </g>

        {/* Upper-Right Empty Zone - Clean circular orbital ring with tangent line & guidance nodes */}
        <g transform="translate(1220, 110)">
          {/* Outer ring */}
          <circle r="75" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.9" fill="none" strokeDasharray="4 6" />
          {/* Inner concentric ring */}
          <circle r="45" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="0.8" fill="none" />
          {/* Tangent directional vector */}
          <line x1="-95" y1="0" x2="95" y2="0" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.8" />
          {/* Small connected node points */}
          <circle cx="0" cy="-45" r="2" fill="rgba(255, 255, 255, 0.08)" />
          <circle cx="45" cy="0" r="2" fill="rgba(255, 255, 255, 0.08)" />
          {/* Single restrained red accent point */}
          <circle cx="0" cy="45" r="2" fill="#E21F26" fillOpacity="0.45" />
        </g>

        {/* Middle-Right - Minimal grid fragment */}
        <g transform="translate(1080, 240)" stroke="rgba(255, 255, 255, 0.035)" strokeWidth="0.75">
          <line x1="0" y1="0" x2="80" y2="0" strokeDasharray="2 3" />
          <line x1="0" y1="18" x2="80" y2="18" strokeDasharray="2 3" />
          <line x1="0" y1="36" x2="80" y2="36" strokeDasharray="2 3" />
          <line x1="0" y1="0" x2="0" y2="36" />
          <line x1="40" y1="0" x2="40" y2="36" />
          <line x1="80" y1="0" x2="80" y2="36" />
          <circle cx="40" cy="18" r="1.5" fill="rgba(255, 255, 255, 0.07)" />
        </g>

        {/* Bottom Horizon - Hairline with precision coordinate ticks */}
        <g stroke="rgba(255, 255, 255, 0.05)" strokeWidth="0.8">
          <line x1="80" y1="410" x2="1360" y2="410" strokeDasharray="6 8" />
          <line x1="280" y1="406" x2="280" y2="414" />
          <line x1="560" y1="406" x2="560" y2="414" />
          <line x1="840" y1="406" x2="840" y2="414" />
          <line x1="1120" y1="406" x2="1120" y2="414" />
        </g>
      </svg>
    </div>
  );
}



