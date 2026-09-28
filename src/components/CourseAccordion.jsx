import React, { useState } from 'react';
import { ChevronDown, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CourseAccordion({ items, defaultOpenIndex = 0 }) {
  const [openIndices, setOpenIndices] = useState([defaultOpenIndex]);

  const toggle = (idx) => {
    if (openIndices.includes(idx)) {
      setOpenIndices(openIndices.filter(i => i !== idx));
    } else {
      setOpenIndices([...openIndices, idx]);
    }
  };

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndices.includes(idx);
        return (
          <div
            key={idx}
            className={`border rounded-2xl transition-all duration-350 ease-out overflow-hidden ${
              isOpen 
                ? 'border-[#164B9B]/30 bg-[#EAF3FF]/30 shadow-xs' 
                : 'border-[#E2E6EC] bg-white hover:border-[#164B9B]/20'
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="flex items-center justify-between w-full p-4 sm:p-5 text-left focus:outline-none cursor-pointer"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold transition-colors duration-300 ${
                    isOpen ? 'bg-[#164B9B] text-white' : 'bg-[#F3F5F8] text-[#667085]'
                  }`}
                >
                  {String(idx + 1).padStart(2, '0')}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#172033] font-display">
                  {item.title}
                </h4>
              </div>
              <ChevronDown
                className={`w-5 h-5 transition-transform duration-350 ease-out shrink-0 ${
                  isOpen ? 'rotate-180 text-[#164B9B]' : 'text-[#98A2B3]'
                }`}
              />
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
                  <div className="px-4 sm:px-6 pb-5 pt-1 text-[#667085] text-sm">
                    {item.content && (
                      <p className="mb-3 leading-relaxed text-[#172033] font-normal">{item.content}</p>
                    )}

                    {item.skills && (
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mt-2">
                        {item.skills.map((skill, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#172033]">
                            <CheckCircle className="w-4 h-4 text-[#164B9B] shrink-0 mt-0.5" />
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.subModules && (
                      <div className="space-y-4 mt-2">
                        {item.subModules.map((sub, subIdx) => (
                          <div key={subIdx} className="bg-white p-4 rounded-xl border border-[#E2E6EC] shadow-2xs">
                            <h5 className="font-bold text-[#164B9B] text-sm mb-2 font-display">
                              {sub.name}
                            </h5>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {sub.items.map((subItem, siIdx) => (
                                <li key={siIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#667085]">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#164B9B] mt-2 shrink-0"></span>
                                  <span>{subItem}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
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
