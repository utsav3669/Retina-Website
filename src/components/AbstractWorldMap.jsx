import React, { useEffect, useRef } from 'react';

/**
 * EXACT WORLD MAP OUTLINE WITH MINIMAL ANIMATED AIRPLANE
 * Continental outlines traced 1:1 from the user's uploaded reference image.
 * 
 * Features:
 * - EXACT continental outlines, proportions, and positioning
 * - Thin line illustration (strokeWidth="1", fill="none")
 * - Curved routes connecting StudyHub Nepal origin to:
 *   Canada, USA, UK, Europe, Australia, and New Zealand
 * - Minimal, elegant animated airplane that travels smoothly along each route,
 *   one destination at a time, then transitions to the next
 * - Small and subtle airplane silhouette with no excessive effects
 * - Used ONLY in large visual boxes (like CTASection)
 */

const ROUTES = [
  { 
    id: 'canada', 
    name: 'Canada', 
    d: 'M 712 232 C 580 85, 390 60, 260 115', 
    dest: [260, 115],
    duration: 3800
  },
  { 
    id: 'usa', 
    name: 'USA', 
    d: 'M 712 232 C 560 110, 360 95, 215 160', 
    dest: [215, 160],
    duration: 3800
  },
  { 
    id: 'uk', 
    name: 'UK', 
    d: 'M 712 232 C 640 165, 550 125, 472 118', 
    dest: [472, 118],
    duration: 3200
  },
  { 
    id: 'europe', 
    name: 'Europe', 
    d: 'M 712 232 C 650 180, 575 145, 510 130', 
    dest: [510, 130],
    duration: 3000
  },
  { 
    id: 'australia', 
    name: 'Australia', 
    d: 'M 712 232 C 785 285, 865 340, 920 395', 
    dest: [920, 395],
    duration: 3200
  },
  { 
    id: 'nz', 
    name: 'New Zealand', 
    d: 'M 712 232 C 800 300, 895 380, 965 435', 
    dest: [965, 435],
    duration: 3400
  },
];

export default function AbstractWorldMap({ 
  variant = 'dark', 
  className = '' 
}) {
  const isDark = variant === 'dark';

  // Strict palette according to guidelines
  const mapLineColor = isDark ? 'rgba(255, 255, 255, 0.11)' : 'rgba(11, 47, 107, 0.09)';
  const routeLineColor = isDark ? 'rgba(255, 255, 255, 0.13)' : 'rgba(22, 75, 155, 0.12)';
  const destPointColor = isDark ? '#FFFFFF' : '#164B9B';
  const destRingColor = isDark ? 'rgba(255, 255, 255, 0.30)' : 'rgba(22, 75, 155, 0.25)';
  const originColor = '#E21F26';

  const pathRefs = useRef([]);
  const planeRef = useRef(null);
  const activeRouteRef = useRef(null);
  const arrivalPulseRef = useRef(null);

  useEffect(() => {
    // Check if user prefers reduced motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (planeRef.current) planeRef.current.style.display = 'none';
      return;
    }

    let animId;
    let currentRouteIndex = 0;
    let state = 'FLIGHT'; // 'FLIGHT' | 'PAUSE' | 'RESET'
    let stateStartTime = performance.now();
    let lastFrameTime = performance.now();

    const PAUSE_DURATION = 900; // ms to pause at destination
    const RESET_DURATION = 400; // ms to transition to next flight

    const animate = (now) => {
      // Guard against frame lag spikes (e.g., when tab is hidden)
      const delta = Math.min(now - lastFrameTime, 100);
      lastFrameTime = now;

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
  }, []);

  return (
    <div 
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none -z-0 ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1000 500"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* ============================================================
            EXACT VECTOR CONTINENTAL OUTLINES FROM REFERENCE
            ============================================================ */}
        <g stroke={mapLineColor} strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
          {/* Americas (North America, Central America, South America) */}
          <path d="M 87.6 44.5 L 88.6 49.6 L 85.6 51.6 L 81.5 50.6 L 72.4 52.6 L 72.4 59.7 L 70.3 61.8 L 60.2 64.8 L 57.1 67.9 L 56.1 73.0 L 60.2 79.1 L 50.0 85.2 L 51.0 87.2 L 78.5 77.0 L 84.6 73.0 L 86.6 75.0 L 96.8 73.0 L 100.8 68.9 L 106.9 71.9 L 116.1 73.0 L 122.2 80.1 L 124.2 88.2 L 122.2 90.3 L 122.2 99.4 L 119.2 105.5 L 122.2 109.6 L 122.2 113.6 L 117.1 122.8 L 109.0 131.9 L 104.9 140.1 L 105.9 161.4 L 110.0 162.5 L 113.1 165.5 L 114.1 176.7 L 117.1 182.8 L 115.1 184.8 L 115.1 187.9 L 120.2 191.9 L 120.2 195.0 L 127.3 202.1 L 128.3 199.1 L 125.3 195.0 L 122.2 183.8 L 124.2 181.8 L 127.3 184.8 L 130.3 194.0 L 138.5 204.2 L 137.5 213.3 L 144.6 220.4 L 162.9 228.6 L 171.0 227.5 L 178.1 234.7 L 190.3 238.7 L 196.4 245.8 L 196.4 249.9 L 203.6 255.0 L 212.7 258.1 L 212.7 256.0 L 215.8 254.0 L 222.9 264.2 L 222.9 271.3 L 217.8 280.4 L 212.7 284.5 L 212.7 288.6 L 210.7 290.6 L 212.7 298.7 L 209.7 302.8 L 210.7 308.9 L 215.8 314.0 L 229.0 339.4 L 234.1 344.5 L 242.2 347.5 L 249.3 355.7 L 251.4 382.1 L 250.3 391.3 L 253.4 405.5 L 251.4 420.8 L 254.4 426.9 L 255.4 434.0 L 257.5 438.1 L 260.5 440.1 L 266.6 464.5 L 270.7 469.6 L 271.7 473.6 L 275.8 477.7 L 279.8 478.7 L 282.9 476.7 L 286.9 480.8 L 286.9 482.8 L 296.1 483.8 L 300.2 481.8 L 291.0 477.7 L 284.9 469.6 L 283.9 466.5 L 289.0 458.4 L 288.0 455.3 L 283.9 454.3 L 281.9 451.3 L 285.9 447.2 L 285.9 443.1 L 288.0 441.1 L 286.9 436.0 L 290.0 434.0 L 289.0 428.9 L 291.0 426.9 L 297.1 426.9 L 301.2 423.8 L 302.2 416.7 L 300.2 414.7 L 302.2 412.6 L 308.3 411.6 L 312.4 403.5 L 312.4 400.4 L 316.4 397.4 L 317.5 393.3 L 321.5 388.2 L 319.5 379.1 L 323.6 375.0 L 331.7 370.9 L 338.8 369.9 L 341.9 366.9 L 341.9 363.8 L 344.9 358.7 L 344.9 353.6 L 346.9 350.6 L 345.9 336.4 L 357.1 321.1 L 358.1 307.9 L 357.1 305.8 L 352.0 303.8 L 342.9 296.7 L 328.6 294.7 L 324.6 290.6 L 312.4 286.5 L 310.3 284.5 L 307.3 273.3 L 302.2 267.2 L 298.1 265.2 L 288.0 264.2 L 281.9 257.0 L 276.8 254.0 L 276.8 251.9 L 272.7 247.9 L 255.4 247.9 L 249.3 243.8 L 246.3 244.8 L 244.2 241.8 L 241.2 241.8 L 231.0 246.9 L 224.9 255.0 L 218.8 249.9 L 208.6 251.9 L 202.5 245.8 L 205.6 234.7 L 204.6 228.6 L 200.5 226.5 L 192.4 227.5 L 190.3 225.5 L 194.4 217.4 L 195.4 211.3 L 197.5 209.2 L 196.4 206.2 L 185.3 208.2 L 183.2 214.3 L 180.2 217.4 L 172.0 218.4 L 166.9 214.3 L 164.9 210.3 L 164.9 200.1 L 169.0 190.9 L 169.0 186.9 L 172.0 183.8 L 182.2 178.7 L 194.4 180.8 L 197.5 176.7 L 204.6 175.7 L 207.6 178.7 L 211.7 178.7 L 213.7 180.8 L 212.7 184.8 L 214.7 190.9 L 218.8 194.0 L 221.9 190.9 L 221.9 172.6 L 229.0 165.5 L 240.2 159.4 L 243.2 155.3 L 243.2 151.3 L 255.4 138.1 L 265.6 135.0 L 265.6 131.9 L 273.7 125.8 L 277.8 124.8 L 279.8 128.9 L 282.9 128.9 L 288.0 124.8 L 294.1 123.8 L 297.1 121.8 L 289.0 117.7 L 289.0 113.6 L 294.1 105.5 L 305.3 106.5 L 312.4 101.4 L 317.5 101.4 L 320.5 98.4 L 321.5 94.3 L 318.5 91.3 L 318.5 89.2 L 312.4 85.2 L 312.4 79.1 L 309.3 70.9 L 301.2 76.0 L 298.1 76.0 L 296.1 73.0 L 297.1 68.9 L 292.0 63.8 L 278.8 63.8 L 275.8 68.9 L 275.8 71.9 L 270.7 76.0 L 271.7 82.1 L 268.6 85.2 L 259.5 89.2 L 257.5 96.4 L 253.4 99.4 L 250.3 95.3 L 254.4 88.2 L 248.3 87.2 L 233.1 78.1 L 234.1 76.0 L 232.0 74.0 L 239.2 66.9 L 246.3 63.8 L 250.3 63.8 L 269.7 52.6 L 277.8 52.6 L 282.9 49.6 L 288.0 43.5 L 284.9 40.4 L 278.8 40.4 L 272.7 46.5 L 270.7 42.5 L 266.6 40.4 L 265.6 34.3 L 258.5 36.4 L 256.4 42.5 L 251.4 46.5 L 234.1 46.5 L 230.0 43.5 L 211.7 46.5 L 207.6 42.5 L 202.5 42.5 L 199.5 40.4 L 188.3 41.4 L 186.3 38.4 L 159.8 42.5 L 152.7 39.4 L 141.5 39.4 L 128.3 36.4 L 108.0 37.4 L 102.9 40.4 Z" />

          {/* Afro-Eurasia (Europe, Asia, Africa) */}
          <path d="M 940.8 49.6 L 931.7 46.5 L 920.5 45.5 L 912.4 40.4 L 892.0 36.4 L 877.8 36.4 L 875.8 39.4 L 866.6 37.4 L 853.4 37.4 L 848.3 34.3 L 830.0 34.3 L 820.8 30.3 L 807.6 28.2 L 798.5 28.2 L 794.4 32.3 L 782.2 31.3 L 780.2 33.3 L 770.0 26.2 L 763.9 27.2 L 757.8 25.2 L 752.7 28.2 L 731.4 25.2 L 728.3 20.1 L 702.9 15.0 L 697.8 15.0 L 691.7 19.1 L 677.5 20.1 L 670.3 25.2 L 662.2 25.2 L 660.2 26.2 L 661.2 28.2 L 659.2 30.3 L 655.1 31.3 L 650.0 29.2 L 648.0 32.3 L 645.9 29.2 L 639.8 27.2 L 636.8 28.2 L 633.7 33.3 L 633.7 36.4 L 630.7 38.4 L 621.5 37.4 L 619.5 40.4 L 603.2 40.4 L 593.1 45.5 L 589.0 41.4 L 582.9 43.5 L 584.9 46.5 L 582.9 48.6 L 580.8 48.6 L 577.8 44.5 L 569.7 40.4 L 555.4 38.4 L 552.4 35.3 L 548.3 34.3 L 534.1 34.3 L 530.0 37.4 L 524.9 36.4 L 517.8 41.4 L 502.5 57.7 L 498.5 57.7 L 489.3 63.8 L 491.4 75.0 L 499.5 79.1 L 496.4 83.1 L 498.5 89.2 L 496.4 91.3 L 488.3 93.3 L 487.3 96.4 L 479.2 101.4 L 477.1 104.5 L 470.0 105.5 L 459.8 109.6 L 460.8 112.6 L 463.9 112.6 L 469.0 116.7 L 470.0 125.8 L 468.0 127.9 L 449.7 126.9 L 445.6 129.9 L 446.6 139.1 L 443.6 145.2 L 445.6 148.2 L 444.6 151.3 L 451.7 152.3 L 454.7 160.4 L 445.6 167.5 L 442.5 172.6 L 441.5 179.7 L 437.5 183.8 L 432.4 184.8 L 431.4 187.9 L 427.3 190.9 L 426.3 197.0 L 422.2 200.1 L 419.2 206.2 L 419.2 211.3 L 421.2 213.3 L 421.2 225.5 L 417.1 231.6 L 419.2 235.7 L 419.2 241.8 L 429.3 253.0 L 430.3 257.0 L 446.6 270.3 L 458.8 267.2 L 466.9 269.2 L 477.1 264.2 L 485.3 263.1 L 488.3 266.2 L 489.3 270.3 L 498.5 270.3 L 502.5 274.3 L 502.5 283.5 L 499.5 288.6 L 502.5 295.7 L 510.7 305.8 L 510.7 308.9 L 513.7 314.0 L 512.7 319.1 L 515.8 325.2 L 510.7 335.3 L 508.6 351.6 L 516.8 365.8 L 518.8 383.1 L 524.9 391.3 L 528.0 400.4 L 528.0 407.5 L 534.1 411.6 L 540.2 408.6 L 555.4 407.5 L 572.7 389.2 L 574.7 379.1 L 581.9 375.0 L 583.9 370.9 L 583.9 363.8 L 581.9 357.7 L 590.0 349.6 L 595.1 347.5 L 599.2 343.5 L 601.2 338.4 L 601.2 323.1 L 597.1 318.1 L 598.1 308.9 L 596.1 306.9 L 596.1 303.8 L 611.4 282.5 L 622.5 274.3 L 633.7 250.9 L 633.7 241.8 L 631.7 240.8 L 627.6 243.8 L 612.4 246.9 L 609.3 242.8 L 611.4 240.8 L 615.4 241.8 L 637.8 232.6 L 641.9 227.5 L 645.9 226.5 L 657.1 217.4 L 657.1 214.3 L 661.2 209.2 L 661.2 205.2 L 650.0 194.0 L 652.0 191.9 L 654.1 194.0 L 663.2 196.0 L 680.5 195.0 L 694.7 211.3 L 700.8 211.3 L 702.9 213.3 L 702.9 218.4 L 706.9 230.6 L 720.2 258.1 L 726.3 255.0 L 730.3 248.9 L 730.3 230.6 L 749.7 212.3 L 751.7 208.2 L 761.9 206.2 L 773.1 223.5 L 773.1 229.6 L 778.1 230.6 L 783.2 228.6 L 785.3 230.6 L 785.3 234.7 L 789.3 245.8 L 789.3 259.1 L 793.4 263.1 L 798.5 276.4 L 806.6 283.5 L 809.7 282.5 L 806.6 269.2 L 796.4 259.1 L 792.4 250.9 L 793.4 243.8 L 795.4 241.8 L 798.5 241.8 L 803.6 246.9 L 803.6 248.9 L 809.7 253.0 L 808.6 254.0 L 811.7 257.0 L 817.8 249.9 L 822.9 247.9 L 822.9 234.7 L 809.7 216.4 L 817.8 208.2 L 820.8 211.3 L 820.8 213.3 L 823.9 213.3 L 823.9 211.3 L 826.9 208.2 L 830.0 208.2 L 833.1 205.2 L 841.2 203.1 L 849.3 195.0 L 849.3 189.9 L 852.4 184.8 L 851.4 172.6 L 839.2 157.4 L 847.3 152.3 L 846.3 150.3 L 838.1 148.2 L 836.1 150.3 L 834.1 147.2 L 830.0 145.2 L 835.1 139.1 L 838.1 145.2 L 845.3 142.1 L 849.3 145.2 L 850.3 149.2 L 854.4 149.2 L 856.4 151.3 L 859.5 161.4 L 868.6 158.4 L 866.6 152.3 L 857.5 143.1 L 857.5 141.1 L 860.5 138.1 L 859.5 134.0 L 862.5 130.9 L 869.7 129.9 L 874.7 109.6 L 873.7 105.5 L 864.6 92.3 L 858.5 89.2 L 854.4 89.2 L 852.4 91.3 L 846.3 85.2 L 848.3 76.0 L 853.4 71.9 L 861.5 70.9 L 870.7 71.9 L 872.7 74.0 L 878.8 75.0 L 881.9 71.9 L 878.8 67.9 L 881.9 64.8 L 884.9 64.8 L 888.0 67.9 L 892.0 67.9 L 894.1 65.8 L 896.1 67.9 L 894.1 69.9 L 894.1 75.0 L 892.0 77.0 L 894.1 84.2 L 911.4 100.4 L 915.4 100.4 L 914.4 95.3 L 916.4 86.2 L 913.4 83.1 L 913.4 81.1 L 904.2 73.0 L 906.3 70.9 L 910.3 70.9 L 913.4 68.9 L 919.5 68.9 L 919.5 66.9 L 922.5 63.8 L 931.7 61.8 L 930.7 58.7 L 925.6 57.7 L 921.5 54.7 L 923.6 52.6 L 942.9 55.7 Z" />

          {/* Australia */}
          <path d="M 927.6 327.2 L 924.6 328.2 L 919.5 345.5 L 916.4 349.6 L 911.4 347.5 L 904.2 340.4 L 909.3 332.3 L 907.3 330.3 L 894.1 328.2 L 892.0 331.3 L 889.0 331.3 L 880.8 340.4 L 876.8 336.4 L 872.7 337.4 L 863.6 347.5 L 862.5 346.5 L 859.5 349.6 L 859.5 352.6 L 854.4 357.7 L 840.2 361.8 L 830.0 367.9 L 825.9 384.2 L 829.0 402.5 L 823.9 411.6 L 830.0 415.7 L 838.1 410.6 L 849.3 410.6 L 857.5 405.5 L 876.8 402.5 L 882.9 406.5 L 884.9 413.6 L 890.0 414.7 L 893.1 417.7 L 894.1 425.8 L 900.2 427.9 L 906.3 425.8 L 908.3 427.9 L 912.4 427.9 L 916.4 424.8 L 922.5 423.8 L 926.6 417.7 L 943.9 400.4 L 949.0 389.2 L 950.0 378.1 L 945.9 373.0 L 944.9 367.9 L 941.9 365.8 L 940.8 359.7 L 934.7 352.6 L 934.7 341.4 L 929.7 336.4 Z" />

          {/* Mediterranean Sea Cutout */}
          <path d="M 456.8 156.4 L 460.8 153.3 L 466.9 153.3 L 470.0 151.3 L 474.1 141.1 L 478.1 137.0 L 483.2 135.0 L 486.3 128.9 L 493.4 129.9 L 498.5 125.8 L 501.5 125.8 L 507.6 134.0 L 520.8 143.1 L 518.8 147.2 L 510.7 147.2 L 511.7 150.3 L 517.8 153.3 L 523.9 147.2 L 526.9 141.1 L 531.0 141.1 L 538.1 149.2 L 541.2 147.2 L 546.3 148.2 L 544.2 141.1 L 548.3 138.1 L 553.4 144.2 L 552.4 148.2 L 555.4 152.3 L 564.6 155.3 L 567.6 153.3 L 572.7 156.4 L 579.8 154.3 L 581.9 156.4 L 581.9 162.5 L 578.8 170.6 L 575.8 173.6 L 568.6 171.6 L 558.5 173.6 L 539.2 166.5 L 533.1 170.6 L 533.1 173.6 L 530.0 175.7 L 528.0 173.6 L 521.9 172.6 L 517.8 167.5 L 511.7 167.5 L 505.6 163.5 L 507.6 152.3 L 504.6 151.3 L 475.1 154.3 L 468.0 159.4 L 458.8 158.4 Z" />

          {/* Red Sea Rift Cutout */}
          <path d="M 579.8 184.8 L 588.0 197.0 L 594.1 203.1 L 597.1 213.3 L 605.3 222.5 L 609.3 235.7 L 607.3 237.7 L 603.2 232.6 L 599.2 231.6 L 596.1 228.6 L 595.1 222.5 L 590.0 217.4 L 589.0 209.2 L 576.8 187.9 Z" />

          {/* Black Sea Cutout */}
          <path d="M 556.4 130.9 L 562.5 119.7 L 565.6 117.7 L 571.7 125.8 L 581.9 122.8 L 592.0 128.9 L 596.1 134.0 L 594.1 136.0 L 585.9 136.0 L 579.8 133.0 L 572.7 133.0 L 565.6 136.0 L 560.5 136.0 L 556.4 133.0 Z" />

          {/* Caspian Sea Cutout */}
          <path d="M 619.5 114.7 L 610.3 122.8 L 610.3 125.8 L 613.4 127.9 L 613.4 129.9 L 621.5 141.1 L 619.5 148.2 L 627.6 154.3 L 637.8 152.3 L 637.8 149.2 L 633.7 141.1 L 635.8 136.0 L 634.7 133.0 L 631.7 133.0 L 623.6 124.8 L 629.7 120.8 L 627.6 115.7 Z" />

          {/* Scandinavian / Baltic Inlet */}
          <path d="M 529.0 58.7 L 531.0 60.8 L 530.0 63.8 L 532.0 65.8 L 532.0 68.9 L 538.1 70.9 L 540.2 73.0 L 540.2 76.0 L 538.1 78.1 L 535.1 77.0 L 533.1 79.1 L 532.0 86.2 L 530.0 88.2 L 514.7 90.3 L 512.7 88.2 L 516.8 84.2 L 519.8 84.2 L 521.9 76.0 L 526.9 71.9 L 525.9 68.9 L 522.9 66.9 L 522.9 62.8 Z" />
        </g>

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
            stroke={isDark ? 'rgba(255, 255, 255, 0.28)' : 'rgba(22, 75, 155, 0.28)'}
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
          {/* 1. UK (London area) */}
          <g transform="translate(472, 118)">
            <circle r="4" stroke={destRingColor} strokeWidth="0.8" fill="none" />
            <circle r="2" fill={destPointColor} />
          </g>

          {/* 2. Europe (Central/Western Europe) */}
          <g transform="translate(510, 130)">
            <circle r="4" stroke={destRingColor} strokeWidth="0.8" fill="none" />
            <circle r="2" fill={destPointColor} />
          </g>

          {/* 3. Canada (Eastern / Toronto area) */}
          <g transform="translate(260, 115)">
            <circle r="4" stroke={destRingColor} strokeWidth="0.8" fill="none" />
            <circle r="2" fill={destPointColor} />
          </g>

          {/* 4. USA (East Coast / Mid-Atlantic) */}
          <g transform="translate(215, 160)">
            <circle r="4" stroke={destRingColor} strokeWidth="0.8" fill="none" />
            <circle r="2" fill={destPointColor} />
          </g>

          {/* 5. Australia (Sydney / Melbourne corridor) */}
          <g transform="translate(920, 395)">
            <circle r="4" stroke={destRingColor} strokeWidth="0.8" fill="none" />
            <circle r="2" fill={destPointColor} />
          </g>

          {/* 6. New Zealand (Southeast of Australia) */}
          <g transform="translate(965, 435)">
            <circle r="4" stroke={destRingColor} strokeWidth="0.8" fill="none" />
            <circle r="2" fill={destPointColor} />
          </g>

          {/* 7. StudyHub Origin Hub (Nepal - Bhairahawa) - Subtle Red Focal Point (#E21F26) */}
          <g transform="translate(712, 232)">
            <circle r="6" stroke={originColor} strokeWidth="0.8" strokeOpacity="0.4" fill="none" />
            <circle r="2.2" fill={originColor} />
          </g>

          {/* Destination Arrival Beacon Ring */}
          <circle
            ref={arrivalPulseRef}
            cx="0"
            cy="0"
            r="4"
            stroke={isDark ? '#FFFFFF' : '#164B9B'}
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
          {/* Subtle atmospheric buffer aura so airplane reads crisply over continental lines */}
          <circle r="6" fill={isDark ? '#0B2F6B' : '#FFFFFF'} fillOpacity="0.35" />

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
            fill={isDark ? '#FFFFFF' : '#164B9B'}
            fillOpacity="0.95"
          />

          {/* Restrained StudyHub Red Accent on aircraft tail */}
          <circle cx="-5.8" cy="0" r="0.75" fill="#E21F26" />
        </g>
      </svg>
    </div>
  );
}
