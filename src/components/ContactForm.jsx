import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function ContactForm({ prefilledInterest = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: prefilledInterest || 'IELTS Preparation',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const interestOptions = [
    'IELTS Preparation',
    'PTE Academic Preparation',
    'Study Abroad Guidance',
    'Canada Study Options',
    'Australia Study Options',
    'USA Study Options',
    'UK Study Options',
    'Europe Study Options',
    'New Zealand Study Options',
    'General Inquiry'
  ];

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      errs.phone = 'Please provide a valid contact phone number.';
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief message.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className="bg-[#FFFFFF] border border-[#E2E6EC] rounded-3xl p-8 sm:p-12 text-center space-y-4 animate-in fade-in duration-300 shadow-xs">
        <div className="w-14 h-14 rounded-full bg-[#EAF3FF] text-[#164B9B] flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-2xl font-bold text-[#172033] tracking-tight font-display">
          Inquiry Received
        </h3>
        <p className="text-sm text-[#667085] max-w-md mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-[#172033]">{formData.name}</span>. An advisor from StudyHub will review your inquiry and connect with you shortly.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={companyData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center h-11 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors"
          >
            Chat Directly on WhatsApp
          </a>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: '',
                phone: '',
                email: '',
                interest: 'IELTS Preparation',
                message: ''
              });
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center h-11 px-5 rounded-xl border border-[#E2E6EC] bg-white text-[#172033] hover:bg-[#F3F5F8] font-semibold text-xs transition-colors cursor-pointer"
          >
            Send Another Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-10 border border-[#E2E6EC] shadow-2xs space-y-6">
      <div className="space-y-1">
        <h3 className="text-xl sm:text-2xl font-bold text-[#172033] tracking-tight font-display">
          Send an Inquiry
        </h3>
        <p className="text-xs sm:text-sm text-[#667085] font-normal">
          We will contact you with course schedules and personalized advice.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-[#172033] block">
            Full Name <span className="text-[#E21F26]">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Ramesh Thapa"
            className={`w-full px-4 h-12 rounded-xl border bg-[#FFFFFF] text-sm text-[#172033] placeholder:text-[#98A2B3] focus:outline-none transition-all duration-200 ${
              errors.name
                ? 'border-[#B91C24] bg-red-50/20'
                : 'border-[#E2E6EC] focus:border-[#164B9B] focus:ring-3 focus:ring-[#164B9B]/10'
            }`}
          />
          {errors.name && (
            <p className="text-[11px] text-[#B91C24] flex items-center gap-1 font-medium">
              <AlertCircle className="w-3 h-3" /> {errors.name}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-[#172033] block">
            Phone / WhatsApp Number <span className="text-[#E21F26]">*</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="e.g. 9801000602"
            className={`w-full px-4 h-12 rounded-xl border bg-[#FFFFFF] text-sm text-[#172033] placeholder:text-[#98A2B3] focus:outline-none transition-all duration-200 ${
              errors.phone
                ? 'border-[#B91C24] bg-red-50/20'
                : 'border-[#E2E6EC] focus:border-[#164B9B] focus:ring-3 focus:ring-[#164B9B]/10'
            }`}
          />
          {errors.phone && (
            <p className="text-[11px] text-[#B91C24] flex items-center gap-1 font-medium">
              <AlertCircle className="w-3 h-3" /> {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-[#172033] block">
            Email Address <span className="text-[#E21F26]">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="e.g. name@example.com"
            className={`w-full px-4 h-12 rounded-xl border bg-[#FFFFFF] text-sm text-[#172033] placeholder:text-[#98A2B3] focus:outline-none transition-all duration-200 ${
              errors.email
                ? 'border-[#B91C24] bg-red-50/20'
                : 'border-[#E2E6EC] focus:border-[#164B9B] focus:ring-3 focus:ring-[#164B9B]/10'
            }`}
          />
          {errors.email && (
            <p className="text-[11px] text-[#B91C24] flex items-center gap-1 font-medium">
              <AlertCircle className="w-3 h-3" /> {errors.email}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-[#172033] block">
            Area of Interest <span className="text-[#E21F26]">*</span>
          </label>
          <select
            value={formData.interest}
            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
            className="w-full px-4 h-12 rounded-xl border border-[#E2E6EC] bg-[#FFFFFF] text-sm text-[#172033] focus:outline-none focus:border-[#164B9B] focus:ring-3 focus:ring-[#164B9B]/10 cursor-pointer"
          >
            {interestOptions.map((opt, idx) => (
              <option key={idx} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-semibold text-[#172033] block">
          Your Questions or Academic Background <span className="text-[#E21F26]">*</span>
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your educational background, current score or destination goals..."
          className={`w-full p-4 rounded-xl border bg-[#FFFFFF] text-sm text-[#172033] placeholder:text-[#98A2B3] focus:outline-none transition-all duration-200 ${
            errors.message
              ? 'border-[#B91C24] bg-red-50/20'
              : 'border-[#E2E6EC] focus:border-[#164B9B] focus:ring-3 focus:ring-[#164B9B]/10'
          }`}
        />
        {errors.message && (
          <p className="text-[11px] text-[#B91C24] flex items-center gap-1 font-medium">
            <AlertCircle className="w-3 h-3" /> {errors.message}
          </p>
        )}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl bg-[#E21F26] hover:bg-[#B91C24] text-white text-xs font-semibold tracking-wide shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-70 cursor-pointer"
        >
          {loading ? (
            <span className="inline-flex items-center gap-2">
              <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
              <span>Sending...</span>
            </span>
          ) : (
            <>
              <Send className="w-3.5 h-3.5" />
              <span>Send Inquiry</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
