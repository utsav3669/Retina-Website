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
        ? 'text-[#164B9B] font-semibold'
        : 'text-[#172033] hover:text-[#164B9B] font-normal'
    }`;

  const isCoursesActive = location.pathname.startsWith('/courses');
  const isDestinationsActive = location.pathname.startsWith('/destinations');

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3'
          : 'bg-[#FFFFFF] border-b border-[#E2E6EC] py-4 sm:py-5'
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
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E21F26]" />}
                </>
              )}
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  <span>About</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E21F26]" />}
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
                    ? 'text-[#164B9B] font-semibold'
                    : 'text-[#172033] hover:text-[#164B9B] font-normal'
                }`}
                aria-expanded={coursesOpen}
              >
                <span>Courses</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    coursesOpen ? 'rotate-180 text-[#164B9B]' : 'text-[#98A2B3]'
                  }`}
                />
                {isCoursesActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E21F26]" />}
              </button>

              {coursesOpen && (
                <div className="absolute top-full left-0 w-72 pt-3 z-50 animate-in fade-in duration-150">
                  <div className="bg-[#FFFFFF] rounded-2xl shadow-xl border border-[#E2E6EC] p-2.5 space-y-1">
                    <Link
                      to="/courses/ielts"
                      className="block p-3 rounded-xl hover:bg-[#EAF3FF] transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-[#172033] group-hover:text-[#164B9B]">
                          IELTS Preparation
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#98A2B3] group-hover:text-[#164B9B] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <p className="text-xs text-[#667085] mt-1 leading-normal font-normal">
                        Listening, Reading, Writing & Speaking training.
                      </p>
                    </Link>

                    <Link
                      to="/courses/pte"
                      className="block p-3 rounded-xl hover:bg-[#EAF3FF] transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-[#172033] group-hover:text-[#164B9B]">
                          PTE Academic
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#98A2B3] group-hover:text-[#164B9B] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                      <p className="text-xs text-[#667085] mt-1 leading-normal font-normal">
                        Computer lab workstation sessions & AI scoring.
                      </p>
                    </Link>

                    <div className="pt-2 border-t border-[#E2E6EC] mt-1 px-3 pb-1">
                      <Link
                        to="/courses"
                        className="text-xs font-semibold text-[#164B9B] hover:underline flex items-center justify-between"
                      >
                        <span>All Courses Overview</span>
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
                    ? 'text-[#164B9B] font-semibold'
                    : 'text-[#172033] hover:text-[#164B9B] font-normal'
                }`}
                aria-expanded={destinationsOpen}
              >
                <span>Destinations</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    destinationsOpen ? 'rotate-180 text-[#164B9B]' : 'text-[#98A2B3]'
                  }`}
                />
                {isDestinationsActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E21F26]" />}
              </button>

              {destinationsOpen && (
                <div className="absolute top-full left-0 w-80 pt-3 z-50 animate-in fade-in duration-150">
                  <div className="bg-[#FFFFFF] rounded-2xl shadow-xl border border-[#E2E6EC] p-3">
                    <div className="text-[11px] font-semibold uppercase tracking-wider text-[#98A2B3] mb-2 px-1">
                      Study Destinations
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      {companyData.destinations.map((dest) => (
                        <Link
                          key={dest.slug}
                          to={`/destinations/${dest.slug}`}
                          className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#EAF3FF] transition-colors group"
                        >
                          <span className="text-base">{dest.flag}</span>
                          <span className="text-xs font-medium text-[#172033] group-hover:text-[#164B9B]">
                            {dest.name}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="pt-2.5 border-t border-[#E2E6EC] mt-2 px-1 flex items-center justify-between">
                      <Link
                        to="/destinations"
                        className="text-xs font-semibold text-[#164B9B] hover:underline flex items-center gap-1"
                      >
                        <span>Explore All 6 Countries</span>
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
                  <span>Journal</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E21F26]" />}
                </>
              )}
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              {({ isActive }) => (
                <>
                  <span>Contact</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E21F26]" />}
                </>
              )}
            </NavLink>
          </nav>

          {/* Right Action: Primary CTA Button (#E21F26 -> #B91C24) */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center h-11 px-5 rounded-xl bg-[#E21F26] hover:bg-[#B91C24] text-white text-xs font-semibold tracking-wide transition-all duration-200 transform hover:-translate-y-0.5 shadow-sm hover:shadow-md"
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
              className="p-2 rounded-lg text-emerald-600 hover:bg-[#EAF3FF] transition-colors"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-[#172033] hover:bg-[#F3F5F8] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#FFFFFF] border-b border-[#E2E6EC] px-5 pt-4 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <Link
            to="/"
            className="block py-2 text-base font-semibold text-[#172033] border-b border-[#E2E6EC]"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2 text-base font-semibold text-[#172033] border-b border-[#E2E6EC]"
          >
            About Us
          </Link>

          <div className="border-b border-[#E2E6EC] pb-2">
            <button
              onClick={() => setCoursesOpen(!coursesOpen)}
              className="flex items-center justify-between w-full py-2 text-base font-semibold text-[#172033]"
            >
              <span>Courses</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  coursesOpen ? 'rotate-180 text-[#164B9B]' : ''
                }`}
              />
            </button>
            {coursesOpen && (
              <div className="pl-3 py-2 space-y-2 bg-[#F3F5F8] rounded-xl mt-1">
                <Link
                  to="/courses/ielts"
                  className="block py-1 text-sm font-medium text-[#172033] hover:text-[#164B9B]"
                >
                  IELTS Preparation
                </Link>
                <Link
                  to="/courses/pte"
                  className="block py-1 text-sm font-medium text-[#172033] hover:text-[#164B9B]"
                >
                  PTE Academic
                </Link>
                <Link
                  to="/courses"
                  className="block text-xs font-semibold text-[#164B9B] pt-1"
                >
                  View All Courses →
                </Link>
              </div>
            )}
          </div>

          <div className="border-b border-[#E2E6EC] pb-2">
            <button
              onClick={() => setDestinationsOpen(!destinationsOpen)}
              className="flex items-center justify-between w-full py-2 text-base font-semibold text-[#172033]"
            >
              <span>Destinations</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  destinationsOpen ? 'rotate-180 text-[#164B9B]' : ''
                }`}
              />
            </button>
            {destinationsOpen && (
              <div className="grid grid-cols-2 gap-2 p-2 bg-[#F3F5F8] rounded-xl mt-1">
                {companyData.destinations.map((dest) => (
                  <Link
                    key={dest.slug}
                    to={`/destinations/${dest.slug}`}
                    className="flex items-center gap-1.5 py-1 text-xs font-medium text-[#172033] hover:text-[#164B9B]"
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
            className="block py-2 text-base font-semibold text-[#172033] border-b border-[#E2E6EC]"
          >
            Journal & Insights
          </Link>
          <Link
            to="/contact"
            className="block py-2 text-base font-semibold text-[#172033] border-b border-[#E2E6EC]"
          >
            Contact
          </Link>

          <div className="pt-3 space-y-2">
            <Link
              to="/contact"
              className="flex items-center justify-center h-12 w-full bg-[#E21F26] hover:bg-[#B91C24] text-white font-semibold text-xs tracking-wide rounded-xl shadow-xs transition-colors"
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
