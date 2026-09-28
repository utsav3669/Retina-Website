import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';
import { CardGridDetail } from './AbstractElements';

export default function BlogCard({ blog, featured = false }) {
  if (featured) {
    return (
      <article className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FFFFFF] rounded-3xl p-6 sm:p-8 border border-[#E2E6EC] shadow-xs hover:shadow-xl transition-all duration-350 transform hover:-translate-y-1">
        <Link 
          to={`/blogs/${blog.slug}`}
          className="lg:col-span-7 relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-[#0B2F6B] block"
        >
          <img
            src={blog.image}
            alt={blog.title}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-700 ease-out"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-[#164B9B]">
              Featured Article
            </span>
          </div>
        </Link>

        <div className="lg:col-span-5 space-y-4 lg:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs text-[#98A2B3] font-medium">
              <span className="text-[#164B9B] font-semibold uppercase tracking-wider">{blog.category}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {blog.readTime}
              </span>
            </div>
            <CardGridDetail className="opacity-40 group-hover:opacity-80 transition-opacity" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172033] group-hover:text-[#164B9B] transition-colors leading-tight font-display">
            <Link to={`/blogs/${blog.slug}`}>
              {blog.title}
            </Link>
          </h3>

          <p className="text-sm text-[#667085] leading-relaxed font-normal">
            {blog.excerpt}
          </p>

          <div className="pt-2">
            <Link
              to={`/blogs/${blog.slug}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#E21F26] hover:text-[#B91C24] transition-colors"
            >
              <span>Read Article</span>
              <ArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group flex flex-col bg-[#FFFFFF] rounded-3xl overflow-hidden border border-[#E2E6EC] shadow-2xs hover:shadow-lg transition-all duration-350 transform hover:-translate-y-1">
      <Link 
        to={`/blogs/${blog.slug}`}
        className="relative h-48 sm:h-52 overflow-hidden bg-[#0B2F6B] block"
      >
        <img
          src={blog.image}
          alt={blog.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 left-4 z-10">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur-md text-[#164B9B]">
            {blog.category}
          </span>
        </div>
      </Link>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-[#FFFFFF]">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-[#98A2B3] font-medium">
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5" />
              <span>{blog.readTime}</span>
              <span>•</span>
              <span>{blog.publishDate}</span>
            </div>
            <CardGridDetail className="opacity-35 group-hover:opacity-75 transition-opacity" />
          </div>

          <h3 className="text-base sm:text-lg font-bold text-[#172033] group-hover:text-[#164B9B] transition-colors leading-snug font-display">
            <Link to={`/blogs/${blog.slug}`}>
              {blog.title}
            </Link>
          </h3>

          <p className="text-xs sm:text-sm text-[#667085] leading-relaxed line-clamp-2 font-normal">
            {blog.excerpt}
          </p>
        </div>

        <div className="pt-2 border-t border-[#E2E6EC] flex items-center justify-between">
          <Link
            to={`/blogs/${blog.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E21F26] hover:text-[#B91C24] transition-colors"
          >
            <span>Read Article</span>
            <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <span className="text-[11px] text-[#98A2B3] font-normal">
            {blog.author}
          </span>
        </div>
      </div>
    </article>
  );
}
