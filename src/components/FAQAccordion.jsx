import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQAccordion({ items, defaultOpenIndex = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            className={`border rounded-2xl transition-all duration-350 ease-out overflow-hidden ${
              isOpen 
                ? 'border-[#0E4BA4]/35 bg-[#EEF4FF]/50 shadow-xs' 
                : 'border-[#E2E8F0] bg-white hover:border-[#0E4BA4]/30'
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="flex items-center justify-between w-full p-5 sm:p-6 text-left focus:outline-none cursor-pointer"
              aria-expanded={isOpen}
            >
              <h3 className="text-base sm:text-lg font-bold text-[#102A43] pr-4 font-display">
                {item.question}
              </h3>
              <div 
                className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                  isOpen ? 'bg-[#0E4BA4] text-white' : 'bg-[#F8FAFC] text-[#5B6472]'
                }`}
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-350 ease-out ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: 'auto', 
                    opacity: 1,
                    transition: {
                      height: { duration: 0.38, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.28, ease: 'easeOut', delay: 0.04 }
                    }
                  }}
                  exit={{ 
                    height: 0, 
                    opacity: 0,
                    transition: {
                      height: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
                      opacity: { duration: 0.18, ease: 'easeIn' }
                    }
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#5B6472] leading-relaxed font-normal">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
