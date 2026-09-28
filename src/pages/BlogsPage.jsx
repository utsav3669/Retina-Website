import React, { useState } from 'react';
import { Search } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import BlogCard from '../components/BlogCard';
import CTASection from '../components/CTASection';
import { blogs } from '../data/blogsData';
import { ScrollReveal, StaggerGrid, StaggerItem } from '../components/MotionReveal';

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const breadcrumbs = [{ label: 'Blogs & Articles' }];

  const categories = ['All', 'Exam Comparison', 'IELTS Guidance', 'PTE Strategies', 'Test Preparation', 'Study Abroad'];

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-20 sm:space-y-28 bg-[#FFFFFF]">
      {/* Header with soft entrance */}
      <PageHeader
        badge="StudyHub Journal"
        title="Educational Insights & Preparation Guides"
        subtitle="Practical guidance, test comparisons, study checklists, and expert advice for students preparing for IELTS, PTE, and international university pathways."
        breadcrumbs={breadcrumbs}
      />

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal y={12}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-8 border-b border-[#E2E6EC]">
            
            {/* Category Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 ease-out cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#164B9B] text-white shadow-xs'
                      : 'bg-[#FFFFFF] text-[#667085] hover:bg-[#F3F5F8] border border-[#E2E6EC]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#98A2B3]" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#FFFFFF] border border-[#E2E6EC] text-xs focus:outline-none focus:border-[#164B9B] focus:ring-3 focus:ring-[#164B9B]/10 text-[#172033] placeholder:text-[#98A2B3] transition-all duration-300 ease-out"
              />
            </div>

          </div>
        </ScrollReveal>

        {/* Blogs Grid with Staggered Card Reveals */}
        <div className="mt-12">
          {filteredBlogs.length > 0 ? (
            <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.07}>
              {filteredBlogs.map((blog) => (
                <StaggerItem key={blog.id}>
                  <BlogCard blog={blog} />
                </StaggerItem>
              ))}
            </StaggerGrid>
          ) : (
            <div className="text-center py-20 text-[#667085]">
              <p className="text-base font-semibold text-[#172033]">No articles match your criteria.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="mt-3 text-xs font-semibold text-[#164B9B] hover:underline cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Global CTA */}
      <ScrollReveal y={14}>
        <CTASection />
      </ScrollReveal>
    </div>
  );
}
