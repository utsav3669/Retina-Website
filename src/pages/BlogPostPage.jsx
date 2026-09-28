import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  Clock, 
  Calendar, 
  User, 
  ArrowLeft, 
  MessageSquare, 
  ArrowRight
} from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';
import { blogs } from '../data/blogsData';
import { companyData } from '../data/companyData';

export default function BlogPostPage() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <Navigate to="/blogs" replace />;
  }

  const breadcrumbs = [
    { label: 'Blogs', to: '/blogs' },
    { label: blog.category, to: '/blogs' },
    { label: blog.title }
  ];

  // Other blogs for related reading
  const relatedBlogs = blogs.filter((b) => b.id !== blog.id).slice(0, 2);

  return (
    <div className="space-y-16 sm:space-y-24 bg-[#FFFFFF]">
      {/* Blog Header */}
      <PageHeader
        badge={blog.category}
        title={blog.title}
        subtitle={blog.excerpt}
        breadcrumbs={breadcrumbs}
      >
        <div className="flex flex-wrap items-center gap-4 text-xs text-white/75 font-medium pt-2">
          <div className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#EAF3FF]" />
            <span>{blog.author}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#EAF3FF]" />
            <span>{blog.readTime}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#EAF3FF]" />
            <span>{blog.publishDate}</span>
          </div>
        </div>
      </PageHeader>

      {/* Main Blog Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Featured Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl mb-12 border border-[#E2E6EC] aspect-[16/9] bg-[#0B2F6B]">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Formatted Article Body */}
        <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-12 shadow-sm border border-[#E2E6EC] prose max-w-none">
          <div className="text-[#172033] leading-relaxed space-y-6 text-base sm:text-lg">
            {blog.content.split('\n\n').map((paragraph, idx) => {
              const trimmed = paragraph.trim();
              if (!trimmed) return null;

              if (trimmed.startsWith('### ')) {
                return (
                  <h3 key={idx} className="text-xl sm:text-2xl font-bold text-[#172033] pt-4 pb-1 border-b border-[#E2E6EC] font-display">
                    {trimmed.replace('### ', '')}
                  </h3>
                );
              }

              if (trimmed.startsWith('* ')) {
                const listItems = trimmed.split('\n* ');
                return (
                  <ul key={idx} className="space-y-2 pl-4 list-disc text-sm sm:text-base text-[#172033]">
                    {listItems.map((item, i) => (
                      <li key={i} className="leading-relaxed">
                        {item.replace(/^\* /, '')}
                      </li>
                    ))}
                  </ul>
                );
              }

              if (trimmed.startsWith('1. ')) {
                const listItems = trimmed.split(/\n\d+\.\s/);
                return (
                  <ol key={idx} className="space-y-2 pl-5 list-decimal text-sm sm:text-base text-[#172033]">
                    {listItems.map((item, i) => (
                      <li key={i} className="leading-relaxed">
                        {item.replace(/^\d+\.\s/, '')}
                      </li>
                    ))}
                  </ol>
                );
              }

              if (trimmed === '---') {
                return <hr key={idx} className="border-[#E2E6EC] my-6" />;
              }

              return (
                <p key={idx} className="text-[#667085] leading-relaxed text-sm sm:text-base">
                  {trimmed}
                </p>
              );
            })}
          </div>

          {/* Practical CTA inside article (#EAF3FF background) */}
          <div className="mt-12 p-6 rounded-2xl bg-[#EAF3FF] border border-[#E2E6EC] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-bold text-[#172033] text-base font-display">
                Ready to Start Your Preparation?
              </h4>
              <p className="text-xs text-[#667085]">
                Join StudyHub's structured IELTS and PTE batches in Bhairahawa with free weekly mocks.
              </p>
            </div>
            <Link
              to="/courses"
              className="py-3 px-5 rounded-xl bg-[#E21F26] hover:bg-[#B91C24] text-white font-semibold text-xs shrink-0 transition-colors shadow-xs"
            >
              Explore IELTS & PTE Classes
            </Link>
          </div>
        </div>

        {/* Back and WhatsApp Share */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#E2E6EC] mt-10">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#164B9B] hover:text-[#0B2F6B] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>

          <a
            href={companyData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 hover:text-emerald-700"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Discuss This Topic on WhatsApp</span>
          </a>
        </div>
      </article>

      {/* Related Articles Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <h3 className="text-2xl font-bold text-[#172033] mb-6 font-display">
          More from the StudyHub Journal
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedBlogs.map((b) => (
            <div
              key={b.id}
              className="p-6 bg-[#FFFFFF] rounded-3xl border border-[#E2E6EC] shadow-xs hover:border-[#164B9B] transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <span className="text-xs font-semibold text-[#164B9B] uppercase tracking-wider">
                  {b.category}
                </span>
                <h4 className="text-lg font-bold text-[#172033] font-display">
                  <Link to={`/blogs/${b.slug}`} className="hover:text-[#164B9B] transition-colors">
                    {b.title}
                  </Link>
                </h4>
                <p className="text-xs text-[#667085] line-clamp-2">
                  {b.excerpt}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-[#E2E6EC] flex items-center justify-between">
                <span className="text-[11px] text-[#98A2B3] font-medium">{b.readTime}</span>
                <Link
                  to={`/blogs/${b.slug}`}
                  className="text-xs font-semibold text-[#E21F26] hover:text-[#B91C24] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global CTA */}
      <CTASection />
    </div>
  );
}
