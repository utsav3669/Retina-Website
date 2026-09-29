import React, { useEffect, useRef } from 'react';
import { ASIA_MAP_PATH } from '../data/asiaMapPaths';

/**
 * ASIA MAP OUTLINE ILLUSTRATION WITH MINIMAL ANIMATED AIRPLANE
 * Traced 1:1 from the user-provided official reference image.
 * 
 * Features:
 * - EXACT geographical shape, proportions, coastlines, and boundaries
 * - Thin line illustration (strokeWidth="0.85", fill="none")
 * - Curved routes connecting Retina Nepal origin (Kathmandu) to:
 *   Bangladesh (Dhaka), India, China (Beijing), and Philippines (Manila)
 * - Minimal, elegant animated airplane that travels smoothly along each route,
 *   one destination at a time, then transitions to the next
 * - Small and subtle airplane silhouette with no excessive effects
 * - Responsive viewBox matching the reference map dimensions
 */

const ROUTES = [
  { 
    id: 'bangladesh', 
    name: 'Bangladesh', 
    d: 'M 492 492 C 510 502, 528 514, 544 528', 
    dest: [544, 528],
    duration: 2500
  },
  { 
    id: 'india', 
    name: 'India', 
    d: 'M 492 492 C 475 515, 460 540, 450 565', 
    dest: [450, 565],
    duration: 2500
  },
  { 
    id: 'china', 
    name: 'China', 
    d: 'M 492 492 C 570 430, 655 400, 740 390', 
    dest: [740, 390],
    duration: 3200
  },
  { 
    id: 'philippines', 
    name: 'Philippines', 
    d: 'M 492 492 C 590 525, 700 570, 805 620', 
    dest: [805, 620],
    duration: 3400
  },
];

export default function AsiaMap({ 
  variant = 'dark', 
  className = '',
  showRoutes = true
}) {
  const isDark = variant === 'dark';

  // Strict palette according to guidelines
  const mapLineColor = isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(16, 42, 67, 0.10)';
  const routeLineColor = isDark ? 'rgba(255, 255, 255, 0.13)' : 'rgba(14, 75, 164, 0.12)';
  const destPointColor = isDark ? '#FFFFFF' : '#0E4BA4';
  const destRingColor = isDark ? 'rgba(255, 255, 255, 0.30)' : 'rgba(14, 75, 164, 0.25)';
  const originColor = '#FF914D';

  const pathRefs = useRef([]);
  const planeRef = useRef(null);
  const activeRouteRef = useRef(null);
  const arrivalPulseRef = useRef(null);

  useEffect(() => {
    if (!showRoutes) return;

    // Check if user prefers reduced motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (planeRef.current) planeRef.current.style.display = 'none';
      return;
    }

    let animId;
    let currentRouteIndex = 0;
    let state = 'FLIGHT'; // 'FLIGHT' | 'PAUSE' | 'RESET'
    let stateStartTime = performance.now();

    const PAUSE_DURATION = 900; // ms to pause at destination
    const RESET_DURATION = 400; // ms to transition to next flight

    const animate = (now) => {
      const currentRoute = ROUTES[currentRouteIndex];
      const pathEl = pathRefs.current[currentRouteIndex];
      const planeEl = planeRef.current;
      const activePathEl = activeRouteRef.current;
      const arrivalEl = arrivalPulseRef.current;

      if (!pathEl || !planeEl) {
        animId = requestAnimationFrame(animate);
        return;
      }

      const totalLength = pathEl.getTotalLength();
      const elapsed = now - stateStartTime;

      if (state === 'FLIGHT') {
        const flightTime = currentRoute.duration;
        const progress = Math.min(elapsed / flightTime, 1);

        // Smooth cubic ease-in-out for realistic aircraft acceleration and deceleration
        const easeProgress = progress < 0.5 
          ? 2 * progress * progress 
          : -1 + (4 - 2 * progress) * progress;

        const currentDist = easeProgress * totalLength;
        const point = pathEl.getPointAtLength(currentDist);

        // Calculate smooth tangent angle using central difference
        const sampleDistAhead = Math.min(totalLength, currentDist + 1.2);
        const sampleDistBehind = Math.max(0, currentDist - 1.2);
        const ptAhead = pathEl.getPointAtLength(sampleDistAhead);
        const ptBehind = pathEl.getPointAtLength(sampleDistBehind);
        const angle = Math.atan2(ptAhead.y - ptBehind.y, ptAhead.x - ptBehind.x) * (180 / Math.PI);

        // Fade in gracefully at takeoff from Nepal
        let opacity = 0.95;
        if (progress < 0.08) {
          opacity = progress / 0.08 * 0.95;
        }

        planeEl.setAttribute('transform', `translate(${point.x.toFixed(2)}, ${point.y.toFixed(2)}) rotate(${angle.toFixed(1)})`);
        planeEl.setAttribute('opacity', opacity.toFixed(2));

        if (activePathEl) {
          activePathEl.setAttribute('d', currentRoute.d);
          activePathEl.setAttribute('opacity', '0.28');
        }

        if (arrivalEl) {
          arrivalEl.setAttribute('opacity', '0');
        }

        if (progress >= 1) {
          state = 'PAUSE';
          stateStartTime = now;
        }
      } else if (state === 'PAUSE') {
        const dest = currentRoute.dest;
        const progress = Math.min(elapsed / PAUSE_DURATION, 1);

        // Plane stays at destination, gently fading out
        const planeOpacity = Math.max(0, 0.95 * (1 - progress * 1.2));
        planeEl.setAttribute('opacity', planeOpacity.toFixed(2));

        // Subtle arrival beacon pulse at destination point
        if (arrivalEl) {
          const radius = 3 + progress * 8;
          const ringOpacity = Math.max(0, (1 - progress) * 0.6);
          arrivalEl.setAttribute('cx', dest[0]);
          arrivalEl.setAttribute('cy', dest[1]);
          arrivalEl.setAttribute('r', radius.toFixed(1));
          arrivalEl.setAttribute('opacity', ringOpacity.toFixed(2));
        }

        if (elapsed >= PAUSE_DURATION) {
          state = 'RESET';
          stateStartTime = now;
        }
      } else if (state === 'RESET') {
        if (arrivalEl) arrivalEl.setAttribute('opacity', '0');
        if (activePathEl) activePathEl.setAttribute('opacity', '0');

        // Transition to next route
        if (elapsed >= RESET_DURATION) {
          currentRouteIndex = (currentRouteIndex + 1) % ROUTES.length;
          state = 'FLIGHT';
          stateStartTime = now;
        }
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [showRoutes]);

  return (
    <div 
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none -z-0 ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        viewBox="0 160 1024 680"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ============================================================
            EXACT ASIA MAP OUTLINE ILLUSTRATION (TRACED FROM REFERENCE)
            ============================================================ */}
        <g stroke={mapLineColor} strokeWidth="0.85" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d={ASIA_MAP_PATH} />
        </g>

        {showRoutes && (
          <>
            {/* ============================================================
                CURVED FLIGHT ROUTES FROM NEPAL TO EACH DESTINATION
                ============================================================ */}
            <g>
              {ROUTES.map((route, idx) => (
                <path
                  key={route.id}
                  ref={(el) => (pathRefs.current[idx] = el)}
                  d={route.d}
                  stroke={routeLineColor}
                  strokeWidth="0.8"
                  strokeDasharray="3 4"
                  fill="none"
                  strokeLinecap="round"
                />
              ))}

              {/* Active flight route trace highlight */}
              <path
                ref={activeRouteRef}
                d=""
                stroke={isDark ? 'rgba(255, 255, 255, 0.28)' : 'rgba(14, 75, 164, 0.28)'}
                strokeWidth="0.9"
                strokeDasharray="4 4"
                fill="none"
                strokeLinecap="round"
                opacity="0"
              />
            </g>

            {/* ============================================================
                DESTINATION POINTS
                ============================================================ */}
            <g>
              {/* 1. Bangladesh (Dhaka) */}
              <g transform="translate(544, 528)">
                <circle r="4" stroke={destRingColor} strokeWidth="0.8" fill="none" className="animate-points-pulse" />
                <circle r="2" fill={destPointColor} />
              </g>

              {/* 2. India (Central) */}
              <g transform="translate(450, 565)">
                <circle r="4" stroke={destRingColor} strokeWidth="0.8" fill="none" className="animate-points-pulse" />
                <circle r="2" fill={destPointColor} />
              </g>

              {/* 3. China (Beijing/Eastern Hub) */}
              <g transform="translate(740, 390)">
                <circle r="4" stroke={destRingColor} strokeWidth="0.8" fill="none" className="animate-points-pulse" />
                <circle r="2" fill={destPointColor} />
              </g>

              {/* 4. Philippines (Manila) */}
              <g transform="translate(805, 620)">
                <circle r="4" stroke={destRingColor} strokeWidth="0.8" fill="none" className="animate-points-pulse" />
                <circle r="2" fill={destPointColor} />
              </g>

              {/* 5. Retina Origin Hub (Nepal - Kathmandu) - Subtle Orange Focal Point (#FF914D) */}
              <g transform="translate(492, 492)">
                <circle r="6" stroke={originColor} strokeWidth="0.8" strokeOpacity="0.4" fill="none" className="animate-origin-ping" />
                <circle r="2.2" fill={originColor} />
              </g>

              {/* Destination Arrival Beacon Ring */}
              <circle
                ref={arrivalPulseRef}
                cx="0"
                cy="0"
                r="4"
                stroke={isDark ? '#FFFFFF' : '#0E4BA4'}
                strokeWidth="0.8"
                fill="none"
                opacity="0"
              />
            </g>

            {/* ============================================================
                MINIMAL ANIMATED AIRPLANE
                Travels along the curved route from Nepal to each destination
                ============================================================ */}
            <g
              ref={planeRef}
              opacity="0"
              className="pointer-events-none"
            >
              {/* Atmospheric buffer aura */}
              <circle r="6" fill={isDark ? '#102A43' : '#FFFFFF'} fillOpacity="0.35" />

              {/* Minimal Passenger Aircraft Silhouette */}
              <path
                d="M 6 0 
                   L 2.8 -0.9 
                   L -0.8 -0.9 
                   L -2.8 -4.8 
                   L -3.8 -4.8 
                   L -2.8 -0.9 
                   L -5 -0.9 
                   L -6.2 -2.4 
                   L -7 -2.4 
                   L -6.5 0 
                   L -7 2.4 
                   L -6.2 2.4 
                   L -5 0.9 
                   L -2.8 0.9 
                   L -3.8 4.8 
                   L -2.8 4.8 
                   L -0.8 0.9 
                   L 2.8 0.9 
                   Z"
                fill={isDark ? '#FFFFFF' : '#0E4BA4'}
                fillOpacity="0.95"
              />

              {/* Subtle Retina Orange Accent on aircraft tail */}
              <circle cx="-5.8" cy="0" r="0.75" fill="#FF914D" />
            </g>
          </>
        )}
      </svg>
    </div>
  );
}
