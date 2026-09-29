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
    <footer className="relative overflow-hidden bg-[#102A43] text-white/[0.80] pt-16 pb-12 border-t border-white/10">
      <FooterAbstractBackground className="opacity-80 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Column 1: Company Logo in Clean White Badge & Brand Description */}
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-block bg-white px-3.5 py-2 rounded-xl shadow-xs">
              <Logo variant="footer" />
            </div>
            
            <p className="text-sm text-white/[0.78] leading-relaxed max-w-sm mt-3 font-normal">
              Run By A Team Of Doctors Who Graduated From Dhaka University, We Bring 16 Years Of Trusted Expertise In Guiding Students For Medical Admissions In Bangladesh.
            </p>

            <div className="pt-2 space-y-2.5 text-xs text-white/[0.70]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF914D] shrink-0 mt-0.5" />
                <a 
                  href={companyData.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/[0.85] hover:text-[#FFFFFF] transition-colors"
                >
                  {companyData.location.fullAddress}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF914D] shrink-0" />
                <div className="flex items-center gap-2">
                  <a href="tel:014547423" className="text-white/[0.85] hover:text-[#FFFFFF] transition-colors font-medium">
                    {companyData.phone}
                  </a>
                  <span>•</span>
                  <a href={companyData.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-white/[0.85] hover:text-[#FFFFFF] transition-colors font-medium">
                    {companyData.whatsappNumber}
                  </a>
                </div>
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
                href={companyData.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/[0.16] text-[#FFFFFF] transition-colors border border-white/15"
              >
                <MapPin className="w-3.5 h-3.5 text-[#FF914D]" />
                <span>Google Maps</span>
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
                <Link to="/about" className="hover:text-[#FFFFFF] transition-colors">About Retina</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-[#FFFFFF] transition-colors">All Programs</Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-[#FFFFFF] transition-colors">Destinations</Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-[#FFFFFF] transition-colors">News &amp; Alerts</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#FFFFFF] transition-colors">Contact Retina</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Medical Programs */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#FFFFFF]">
              Programs
            </h3>
            <ul className="space-y-2 text-sm text-white/[0.80]">
              <li>
                <Link to="/courses/mbbs" className="hover:text-[#FFFFFF] transition-colors flex items-center justify-between group">
                  <span>MBBS Program</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/50 group-hover:text-[#FFFFFF]" />
                </Link>
              </li>
              <li>
                <Link to="/courses/bds" className="hover:text-[#FFFFFF] transition-colors flex items-center justify-between group">
                  <span>BDS (Dental)</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/50 group-hover:text-[#FFFFFF]" />
                </Link>
              </li>
              <li>
                <Link to="/courses/bsc-nursing" className="hover:text-[#FFFFFF] transition-colors flex items-center justify-between group">
                  <span>B.Sc. Nursing</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/50 group-hover:text-[#FFFFFF]" />
                </Link>
              </li>
              <li>
                <Link to="/courses/md" className="hover:text-[#FFFFFF] transition-colors flex items-center justify-between group">
                  <span>MD / MS Specialization</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/50 group-hover:text-[#FFFFFF]" />
                </Link>
              </li>
              <li>
                <Link to="/blogs/mecee-bl-2027-alert" className="hover:text-[#FFFFFF] transition-colors">
                  Zero-Charge CEE Form Fill-up
                </Link>
              </li>
              <li>
                <Link to="/blogs/cee-nursing-mock-test-marks-boosting" className="hover:text-[#FFFFFF] transition-colors">
                  Friday Nursing Mocks (3 PM)
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

        {/* Bottom Bar: Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/[0.55] gap-4">
          <p>© 2026 Retina Educational Consultancy Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-4 text-white/[0.55]">
            <span>New Plaza, Putalisadak-29, Kathmandu, Nepal</span>
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
