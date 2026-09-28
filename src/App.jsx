import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesOverviewPage from './pages/CoursesOverviewPage';
import IELTSPage from './pages/IELTSPage';
import PTEPage from './pages/PTEPage';
import DestinationsOverviewPage from './pages/DestinationsOverviewPage';
import DestinationDetailPage from './pages/DestinationDetailPage';
import BlogsPage from './pages/BlogsPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#FAFBFC] text-[#172033] font-sans">
        {/* Global Sticky Navigation */}
        <Navbar />

        {/* Main Content Area */}
        <main className="flex-1">
          <Routes>
            {/* Home */}
            <Route path="/" element={<HomePage />} />

            {/* About */}
            <Route path="/about" element={<AboutPage />} />

            {/* Courses */}
            <Route path="/courses" element={<CoursesOverviewPage />} />
            <Route path="/courses/ielts" element={<IELTSPage />} />
            <Route path="/courses/pte" element={<PTEPage />} />

            {/* Study Destinations */}
            <Route path="/destinations" element={<DestinationsOverviewPage />} />
            <Route path="/destinations/:slug" element={<DestinationDetailPage />} />

            {/* Blogs */}
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/:slug" element={<BlogPostPage />} />

            {/* Contact */}
            <Route path="/contact" element={<ContactPage />} />

            {/* Fallback 404 */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Multi-Column Footer */}
        <Footer />

        {/* Persistent Floating WhatsApp Action */}
        <WhatsAppFloat />
      </div>
    </Router>
  );
}
