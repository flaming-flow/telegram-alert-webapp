interface HeroProps {
  dict: {
    badge: string;
    title: string;
    titleGradient: string;
    subtitle: string;
    cta_free: string;
    cta_premium: string;
    features: string[];
  };
  botUrl: string;
}

export default function Hero({ dict, botUrl }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="hero-glow" />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-24 md:py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 badge mb-8 animate-fade-in">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
          </span>
          {dict.badge}
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-up text-balance leading-[1.1]">
          <span className="text-[var(--text-primary)]">{dict.title} </span>
          <span className="text-gradient">{dict.titleGradient}</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 animate-fade-in-up text-balance" style={{ animationDelay: '100ms' }}>
          {dict.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <a
            href={botUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base px-6 py-3"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.66-.52.36-1-.54-1.55-.52-.51.02-1.49-.29-2.21-.53-.89-.3-1.6-.46-1.54-.97.03-.27.38-.54 1.06-.82 4.13-1.8 6.89-2.98 8.28-3.57 3.95-1.65 4.77-1.93 5.3-1.94.12 0 .38.03.55.17.14.12.18.28.2.45-.01.06.01.24 0 .38z"/>
            </svg>
            {dict.cta_free}
          </a>
          <a
            href="#pricing"
            className="btn-secondary text-base px-6 py-3"
          >
            {dict.cta_premium}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          {dict.features.map((feature, idx) => (
            <div key={idx} className="badge-outline">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              {feature}
            </div>
          ))}
        </div>

        {/* Demo preview placeholder */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="relative max-w-2xl mx-auto">
            {/* Browser chrome mockup */}
            <div className="card p-1 rounded-xl">
              <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[var(--border)]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#28CA41]"></div>
              </div>
              {/* Message notification preview */}
              <div className="p-4 space-y-3">
                <div className="flex items-start gap-3 p-3 bg-[var(--bg-tertiary)] rounded-lg border border-[var(--border)] animate-slide-in" style={{ animationDelay: '600ms' }}>
                  <div className="w-10 h-10 rounded-full bg-[var(--accent-muted)] flex items-center justify-center text-[var(--accent)] text-lg">
                    📡
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm text-[var(--text-primary)]">Crypto Channel</span>
                      <span className="text-xs text-[var(--text-tertiary)]">2m ago</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">
                      🚨 <span className="text-[var(--accent)] font-medium">BTC</span> breaking $100k resistance...
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 bg-[var(--bg-tertiary)] rounded-lg border border-[var(--border)] animate-slide-in" style={{ animationDelay: '800ms' }}>
                  <div className="w-10 h-10 rounded-full bg-[var(--accent-muted)] flex items-center justify-center text-[var(--accent)] text-lg">
                    💼
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm text-[var(--text-primary)]">Jobs & Freelance</span>
                      <span className="text-xs text-[var(--text-tertiary)]">5m ago</span>
                    </div>
                    <p className="text-sm text-[var(--text-secondary)]">
                      Looking for <span className="text-[var(--accent)] font-medium">React developer</span> for...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
