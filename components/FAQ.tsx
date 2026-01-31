'use client';

import { useState } from 'react';

interface FAQItem {
  q: string;
  a: string;
}

interface FAQProps {
  dict: {
    label: string;
    title: string;
    items: FAQItem[];
  };
}

export default function FAQ({ dict }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section border-t border-[var(--border)]">
      <div className="max-w-2xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-[var(--accent)] mb-3 tracking-wide uppercase">
            {dict.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] tracking-tight">
            {dict.title}
          </h2>
        </div>

        {/* FAQ items */}
        <div className="space-y-2">
          {dict.items.map((item, idx) => (
            <div key={idx} className="card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-4 text-left flex items-center justify-between gap-4 hover:bg-[var(--bg-tertiary)] transition-colors"
              >
                <span className="text-sm font-medium text-[var(--text-primary)]">{item.q}</span>
                <svg
                  className={`w-4 h-4 text-[var(--text-tertiary)] transition-transform flex-shrink-0 ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === idx ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-4 pb-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
