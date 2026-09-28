import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  ArrowUpRight 
} from 'lucide-react';
import Logo from './Logo';
import { companyData } from '../data/companyData';
import { FooterAbstractBackground } from './AbstractElements';

function InstagramIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B2F6B] text-white/[0.80] pt-16 pb-12 border-t border-white/10">
      {/* Dedicated Minimal Consultancy Abstract Elements (ZERO World Map, ZERO Routes) */}
      <FooterAbstractBackground className="opacity-80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Company Logo in Clean White Badge for pristine contrast & Brand Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-block bg-white px-3.5 py-2 rounded-xl shadow-xs">
              <Logo variant="footer" />
            </div>
            
            {/* Supporting text: rgba(255,255,255,0.65) */}
            <p className="text-sm text-white/[0.65] leading-relaxed max-w-sm mt-3 font-normal">
              Guiding students toward structured preparation and authentic international education opportunities.
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-white/[0.65]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E21F26] shrink-0 mt-0.5" />
                <span>{companyData.location.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E21F26] shrink-0" />
                <a href={`tel:${companyData.phone}`} className="text-white/[0.80] hover:text-[#FFFFFF] transition-colors font-medium">
                  {companyData.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={companyData.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors font-semibold text-emerald-400"
                >
                  WhatsApp: {companyData.whatsappNumber}
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={companyData.socials.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/[0.16] text-[#FFFFFF] transition-colors border border-white/15"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                <span>Instagram</span>
              </a>

              <a
                href={companyData.socials.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/[0.16] text-[#FFFFFF] transition-colors border border-white/15"
              >
                <span className="text-[#FFFFFF] font-bold text-xs">♪</span>
                <span>TikTok</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-white/[0.80]">
              <li>
                <Link to="/" className="hover:text-[#FFFFFF] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#FFFFFF] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-[#FFFFFF] transition-colors">All Courses</Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-[#FFFFFF] transition-colors">Destinations</Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-[#FFFFFF] transition-colors">Journal & Articles</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FFFFFF] transition-colors">Contact StudyHub</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF]">
              Courses
            </h3>
            <ul className="space-y-2 text-sm text-white/[0.80]">
              <li>
                <Link to="/courses/ielts" className="hover:text-[#FFFFFF] transition-colors flex items-center justify-between group">
                  <span>IELTS Preparation</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/50 group-hover:text-[#FFFFFF]" />
                </Link>
              </li>
              <li>
                <Link to="/courses/pte" className="hover:text-[#FFFFFF] transition-colors flex items-center justify-between group">
                  <span>PTE Academic</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/50 group-hover:text-[#FFFFFF]" />
                </Link>
              </li>
              <li>
                <Link to="/blogs/mock-tests" className="hover:text-[#FFFFFF] transition-colors">
                  Free Weekly Mocks
                </Link>
              </li>
              <li>
                <Link to="/blogs/ielts-vs-pte" className="hover:text-[#FFFFFF] transition-colors">
                  IELTS vs PTE Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Destinations */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF]">
              Destinations
            </h3>
            <ul className="space-y-2 text-sm text-white/[0.80]">
              {companyData.destinations.map((d) => (
                <li key={d.slug}>
                  <Link 
                    to={`/destinations/${d.slug}`} 
                    className="hover:text-[#FFFFFF] transition-colors flex items-center gap-2"
                  >
                    <span>{d.flag}</span>
                    <span>{d.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright rgba(255,255,255,0.55) */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/[0.55] gap-4">
          <p>© 2026 StudyHub Int'l Education Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4 text-white/[0.55]">
            <span>Narayan Path, Bhairahawa, Nepal</span>
            <span>•</span>
            <a 
              href={companyData.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              Direct WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
