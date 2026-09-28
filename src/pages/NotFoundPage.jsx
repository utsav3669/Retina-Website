import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-20">
      <div className="w-16 h-16 rounded-3xl bg-[#EAF3FF] text-[#164B9B] flex items-center justify-center font-bold text-2xl font-display mb-6">
        404
      </div>
      <h1 className="text-3xl sm:text-4xl font-extrabold text-[#172033] tracking-tight mb-3">
        Page Not Found
      </h1>
      <p className="text-sm text-[#667085] max-w-md mb-8">
        The page you are looking for doesn't exist or has been moved. Explore our courses or study destinations from the homepage.
      </p>
      <div className="flex items-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-[#E21F26] hover:bg-[#B91C24] text-white font-bold text-xs shadow-xs transition-colors"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 py-3 px-6 rounded-xl border border-[#164B9B] text-[#164B9B] hover:bg-[#EAF3FF] hover:text-[#0B2F6B] font-bold text-xs transition-colors"
        >
          <span>Explore Courses</span>
        </Link>
      </div>
    </div>
  );
}
