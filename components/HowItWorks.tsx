interface Step {
  number: string;
  title: string;
  desc: string;
}

interface HowItWorksProps {
  dict: {
    label: string;
    title: string;
    steps: Step[];
  };
}

export default function HowItWorks({ dict }: HowItWorksProps) {
  return (
    <section id="features" className="section border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[var(--accent)] mb-3 tracking-wide uppercase">
            {dict.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
            {dict.title}
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 stagger-children">
          {dict.steps.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Connector line between cards (desktop) */}
              {idx < dict.steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[calc(50%+60px)] w-[calc(100%-60px)] h-px bg-gradient-to-r from-[var(--border)] to-transparent z-0" />
              )}

              <div className="card p-8 text-center relative z-10 hover:border-[var(--accent)]/30 transition-all">
                {/* Large icon container with gradient */}
                <div className="relative mx-auto mb-6 w-20 h-20">
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-[var(--accent)] rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />

                  {/* Icon background */}
                  <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent)]/5 border border-[var(--accent)]/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {idx === 0 && (
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-[var(--accent)]">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <circle cx="12" cy="12" r="2" fill="currentColor" />
                        <path d="M16 8l2-2M8 8L6 6M16 16l2 2M8 16l-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    )}
                    {idx === 1 && (
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-[var(--accent)]">
                        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M7 8h4M7 12h10M7 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <circle cx="17" cy="8" r="2" fill="currentColor" />
                      </svg>
                    )}
                    {idx === 2 && (
                      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-[var(--accent)]">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <circle cx="12" cy="8" r="2" fill="currentColor" />
                        <path d="M12 3v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Step number badge */}
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border)] text-[var(--accent)] text-sm font-semibold mb-4">
                  {step.number}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
