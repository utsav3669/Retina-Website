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
import { ScrollReveal, StaggerGrid, StaggerItem } from '../components/MotionReveal';

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
      {/* Blog Header with soft entrance */}
      <PageHeader
        badge={blog.category}
        title={blog.title}
        subtitle={blog.excerpt}
        breadcrumbs={breadcrumbs}
      >
        <div className="flex flex-wrap items-center gap-4 text-xs text-white/75 font-medium pt-2">
          <div className="flex items-center gap-1.5">
            <User className="w-3.5 h-3.5 text-[#EEF4FF]" />
            <span>{blog.author}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#EEF4FF]" />
            <span>{blog.readTime}</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#EEF4FF]" />
            <span>{blog.publishDate}</span>
          </div>
        </div>
      </PageHeader>

      {/* Main Blog Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Featured Image */}
        <ScrollReveal y={16}>
          <div className="relative rounded-3xl overflow-hidden shadow-xl mb-12 border border-[#E2E8F0] aspect-[16/9] bg-[#102A43]">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>

        {/* Formatted Article Body */}
        <ScrollReveal y={14} delay={0.08}>
          <div className="bg-[#FFFFFF] rounded-3xl p-6 sm:p-12 shadow-sm border border-[#E2E8F0] prose max-w-none">
            <div className="text-[#102A43] leading-relaxed space-y-6 text-base sm:text-lg">
              {blog.content.split('\n\n').map((paragraph, idx) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;

                if (trimmed.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="text-xl sm:text-2xl font-bold text-[#102A43] pt-4 pb-1 border-b border-[#E2E8F0] font-display">
                      {trimmed.replace('### ', '')}
                    </h3>
                  );
                }

                if (trimmed.startsWith('* ')) {
                  const listItems = trimmed.split('\n* ');
                  return (
                    <ul key={idx} className="space-y-2 pl-4 list-disc text-sm sm:text-base text-[#102A43]">
                      {listItems.map((item, i) => (
                        <li key={i} className="leading-relaxed">
                          {item.replace(/^\* /, '')}
                        </li>
                      ))}
                    </ul>
                  );
                }

                if (trimmed.startsWith('1. ')) {
                  const listItems = trimmed.split('\n');
                  return (
                    <ol key={idx} className="space-y-2 pl-4 list-decimal text-sm sm:text-base text-[#102A43]">
                      {listItems.map((item, i) => (
                        <li key={i} className="leading-relaxed">
                          {item.replace(/^\d+\.\s*/, '')}
                        </li>
                      ))}
                    </ol>
                  );
                }

                return (
                  <p key={idx} className="text-[#5B6472] leading-relaxed">
                    {trimmed}
                  </p>
                );
              })}
            </div>

            {/* Author Credit Box */}
            <div className="mt-12 pt-8 border-t border-[#E2E8F0] flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-[#0E4BA4] uppercase tracking-wider">
                  Author & Medical Advisory
                </span>
                <div className="font-bold text-[#102A43] font-display">{blog.author}</div>
                <div className="text-xs text-[#5B6472]">
                  Retina Educational Consultancy • <a href={companyData.mapUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#0E4BA4] transition-colors">New Plaza, Putalisadak-29, Kathmandu</a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Navigation Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            to="/blogs"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#0E4BA4] hover:text-[#0A3B82] transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Articles</span>
          </Link>

          <a
            href={companyData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition-colors duration-300"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Discuss This Topic on WhatsApp</span>
          </a>
        </div>
      </article>

      {/* Related Articles Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <ScrollReveal y={14}>
          <h3 className="text-2xl font-bold text-[#102A43] mb-6 font-display">
            More from Retina Updates & Insights
          </h3>
        </ScrollReveal>
        
        <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-8" stagger={0.08}>
          {relatedBlogs.map((b) => (
            <StaggerItem key={b.id}>
              <div
                className="p-6 bg-[#FFFFFF] rounded-3xl border border-[#E2E8F0] shadow-xs hover:border-[#0E4BA4] hover:shadow-lg transition-all duration-400 ease-out flex flex-col justify-between h-full transform hover:-translate-y-1"
              >
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-[#0E4BA4] uppercase tracking-wider">
                    {b.category}
                  </span>
                  <h4 className="text-lg font-bold text-[#102A43] font-display">
                    <Link to={`/blogs/${b.slug}`} className="hover:text-[#0E4BA4] transition-colors duration-300">
                      {b.title}
                    </Link>
                  </h4>
                  <p className="text-xs text-[#5B6472] line-clamp-2">
                    {b.excerpt}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                  <span className="text-[11px] text-[#5B6472] font-medium">{b.readTime}</span>
                  <Link
                    to={`/blogs/${b.slug}`}
                    className="text-xs font-semibold text-[#FF914D] hover:text-[#E67E38] inline-flex items-center gap-1 transition-colors duration-300"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGrid>
      </section>

      {/* Global CTA */}
      <ScrollReveal y={14}>
        <CTASection />
      </ScrollReveal>
    </div>
  );
}
