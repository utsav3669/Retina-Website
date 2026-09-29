import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import Logo from './Logo';
import { companyData } from '../data/companyData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    setCoursesOpen(false);
    setDestinationsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `relative flex items-center gap-1.5 text-sm tracking-tight transition-colors duration-200 py-1 ${
      isActive
        ? 'text-[#0E4BA4] font-semibold'
        : 'text-[#102A43] hover:text-[#0E4BA4] font-normal'
    }`;

  const isCoursesActive = location.pathname.startsWith('/courses');
  const isDestinationsActive = location.pathname.startsWith('/destinations');

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3'
          : 'bg-[#FFFFFF] border-b border-[#E2E8F0] py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo on Left */}
          <div className="shrink-0 mr-6 sm:mr-10">
            <Logo />
          </div>

          {/* Minimal Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavLink to="/" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  <span>Home</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF914D]" />}
                </>
              )}
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  <span>About</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF914D]" />}
                </>
              )}
            </NavLink>

            {/* Courses Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setCoursesOpen(true)}
              onMouseLeave={() => setCoursesOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 text-sm tracking-tight transition-colors cursor-pointer py-1 ${
                  isCoursesActive
                    ? 'text-[#0E4BA4] font-semibold'
                    : 'text-[#102A43] hover:text-[#0E4BA4] font-normal'
                }`}
                aria-expanded={coursesOpen}
              >
                <span>Courses</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    coursesOpen ? 'rotate-180 text-[#0E4BA4]' : 'text-[#8D98AA]'
                  }`}
                />
                {isCoursesActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF914D]" />}
              </button>

              {coursesOpen && (
                <div className="absolute top-full left-0 w-80 pt-3 z-50 animate-in fade-in duration-150">
                  <div className="bg-[#FFFFFF] rounded-2xl shadow-xl border border-[#E2E8F0] p-2.5 space-y-1">
                    <Link
                      to="/courses/mbbs"
                      className="block p-2.5 rounded-xl hover:bg-[#EEF4FF] transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-[#102A43] group-hover:text-[#0E4BA4]">
                          MBBS Program
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#8D98AA] group-hover:text-[#0E4BA4] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <p className="text-xs text-[#5B6472] mt-0.5 leading-normal font-normal">
                        Admissions in top government &amp; private medical colleges.
                      </p>
                    </Link>

                    <Link
                      to="/courses/bds"
                      className="block p-2.5 rounded-xl hover:bg-[#EEF4FF] transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-[#102A43] group-hover:text-[#0E4BA4]">
                          BDS (Dental Surgery)
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#8D98AA] group-hover:text-[#0E4BA4] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <p className="text-xs text-[#5B6472] mt-0.5 leading-normal font-normal">
                        Accredited dental education with clinical training.
                      </p>
                    </Link>

                    <Link
                      to="/courses/bsc-nursing"
                      className="block p-2.5 rounded-xl hover:bg-[#EEF4FF] transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-[#102A43] group-hover:text-[#0E4BA4]">
                          B.Sc. Nursing
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#8D98AA] group-hover:text-[#0E4BA4] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <p className="text-xs text-[#5B6472] mt-0.5 leading-normal font-normal">
                        CEE Nursing guidance &amp; Friday mock tests at Putalisadak.
                      </p>
                    </Link>

                    <Link
                      to="/courses/md"
                      className="block p-2.5 rounded-xl hover:bg-[#EEF4FF] transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-[#102A43] group-hover:text-[#0E4BA4]">
                          MD / MS Specialization
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#8D98AA] group-hover:text-[#0E4BA4] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <p className="text-xs text-[#5B6472] mt-0.5 leading-normal font-normal">
                        Postgraduate clinical residency guidance.
                      </p>
                    </Link>

                    <Link
                      to="/courses/ag"
                      className="block p-2.5 rounded-xl hover:bg-[#EEF4FF] transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-[#102A43] group-hover:text-[#0E4BA4]">
                          AG &amp; VET Programs
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#8D98AA] group-hover:text-[#0E4BA4] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <p className="text-xs text-[#5B6472] mt-0.5 leading-normal font-normal">
                        B.Sc. Agriculture &amp; Veterinary Science admissions.
                      </p>
                    </Link>

                    <div className="pt-2 border-t border-[#E2E8F0] mt-1 px-3 pb-1">
                      <Link
                        to="/courses"
                        className="text-xs font-semibold text-[#0E4BA4] hover:underline flex items-center justify-between"
                      >
                        <span>All Programs Overview</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Destinations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setDestinationsOpen(true)}
              onMouseLeave={() => setDestinationsOpen(false)}
            >
              <button
                className={`flex items-center gap-1.5 text-sm tracking-tight transition-colors cursor-pointer py-1 ${
                  isDestinationsActive
                    ? 'text-[#0E4BA4] font-semibold'
                    : 'text-[#102A43] hover:text-[#0E4BA4] font-normal'
                }`}
                aria-expanded={destinationsOpen}
              >
                <span>Destinations</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    destinationsOpen ? 'rotate-180 text-[#0E4BA4]' : 'text-[#8D98AA]'
                  }`}
                />
                {isDestinationsActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF914D]" />}
              </button>

              {destinationsOpen && (
                <div className="absolute top-full left-0 w-80 pt-3 z-50 animate-in fade-in duration-150">
                  <div className="bg-[#FFFFFF] rounded-2xl shadow-xl border border-[#E2E8F0] p-3">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8D98AA] mb-2 px-1">
                      Study Destinations
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      {companyData.destinations.map((dest) => (
                        <Link
                          key={dest.slug}
                          to={`/destinations/${dest.slug}`}
                          className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#EEF4FF] transition-colors group"
                        >
                          <span className="text-base">{dest.flag}</span>
                          <span className="text-xs font-medium text-[#102A43] group-hover:text-[#0E4BA4]">
                            {dest.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="pt-2.5 border-t border-[#E2E8F0] mt-2 px-1 flex items-center justify-between">
                      <Link
                        to="/destinations"
                        className="text-xs font-semibold text-[#0E4BA4] hover:underline flex items-center gap-1"
                      >
                        <span>Explore All 4 Destinations</span>
                        <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/blogs" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  <span>Blogs</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF914D]" />}
                </>
              )}
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  <span>Contact</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FF914D]" />}
                </>
              )}
            </NavLink>
          </nav>

          {/* Right Action: Primary CTA Button (#0E4BA4 -> #0A3B82) */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-11 px-5 rounded-xl bg-[#0E4BA4] hover:bg-[#0A3B82] text-white text-xs font-semibold tracking-wide transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm hover:shadow-md"
            >
              Talk to a Counselor
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={companyData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-emerald-600 hover:bg-[#EEF4FF] transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#102A43] hover:bg-[#F8FAFC] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#FFFFFF] border-b border-[#E2E8F0] px-5 pt-4 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <Link
            to="/"
            className="block py-2 text-base font-semibold text-[#102A43] border-b border-[#E2E8F0]"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 text-base font-semibold text-[#102A43] border-b border-[#E2E8F0]"
          >
            About Us
          </Link>

          <div className="border-b border-[#E2E8F0] pb-2">
            <button
              onClick={() => setCoursesOpen(!coursesOpen)}
              className="flex items-center justify-between w-full py-2 text-base font-semibold text-[#102A43]"
            >
              <span>Courses</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  coursesOpen ? 'rotate-180 text-[#0E4BA4]' : ''
                }`}
              />
            </button>
            {coursesOpen && (
              <div className="pl-3 py-2 space-y-2 bg-[#F8FAFC] rounded-xl mt-1">
                <Link
                  to="/courses/mbbs"
                  className="block py-1 text-sm font-medium text-[#102A43] hover:text-[#0E4BA4]"
                >
                  MBBS Program
                </Link>
                <Link
                  to="/courses/bds"
                  className="block py-1 text-sm font-medium text-[#102A43] hover:text-[#0E4BA4]"
                >
                  BDS (Dental)
                </Link>
                <Link
                  to="/courses/bsc-nursing"
                  className="block py-1 text-sm font-medium text-[#102A43] hover:text-[#0E4BA4]"
                >
                  B.Sc. Nursing
                </Link>
                <Link
                  to="/courses/md"
                  className="block py-1 text-sm font-medium text-[#102A43] hover:text-[#0E4BA4]"
                >
                  MD / MS Specialization
                </Link>
                <Link
                  to="/courses/ag"
                  className="block py-1 text-sm font-medium text-[#102A43] hover:text-[#0E4BA4]"
                >
                  AG &amp; VET
                </Link>
                <Link
                  to="/courses"
                  className="block text-xs font-semibold text-[#0E4BA4] pt-1"
                >
                  View All Programs →
                </Link>
              </div>
            )}
          </div>

          <div className="border-b border-[#E2E8F0] pb-2">
            <button
              onClick={() => setDestinationsOpen(!destinationsOpen)}
              className="flex items-center justify-between w-full py-2 text-base font-semibold text-[#102A43]"
            >
              <span>Destinations</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  destinationsOpen ? 'rotate-180 text-[#0E4BA4]' : ''
                }`}
              />
            </button>
            {destinationsOpen && (
              <div className="grid grid-cols-2 gap-2 p-2 bg-[#F8FAFC] rounded-xl mt-1">
                {companyData.destinations.map((dest) => (
                  <Link
                    key={dest.slug}
                    to={`/destinations/${dest.slug}`}
                    className="flex items-center gap-1.5 py-1 text-xs font-medium text-[#102A43] hover:text-[#0E4BA4]"
                  >
                    <span>{dest.flag}</span>
                    <span>{dest.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/blogs"
            className="block py-2 text-base font-semibold text-[#102A43] border-b border-[#E2E8F0]"
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className="block py-2 text-base font-semibold text-[#102A43] border-b border-[#E2E8F0]"
          >
            Contact
          </Link>

          <div className="pt-3 space-y-2">
            <Link
              to="/contact"
              className="flex items-center justify-center h-12 w-full bg-[#0E4BA4] hover:bg-[#0A3B82] text-white font-semibold text-xs tracking-wide rounded-xl shadow-xs transition-colors"
            >
              Talk to a Counselor
            </Link>
            <a
              href={companyData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 h-12 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-xs transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
