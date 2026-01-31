interface PlanProps {
  name: string;
  price: string;
  period: string;
  features: string[];
  cta: string;
  badge?: string;
}

interface PricingProps {
  dict: {
    label: string;
    title: string;
    subtitle: string;
    free: PlanProps;
    premium: PlanProps;
  };
  botUrl: string;
}

export default function Pricing({ dict, botUrl }: PricingProps) {
  return (
    <section id="pricing" className="section border-t border-[var(--border)]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-[var(--accent)] mb-3 tracking-wide uppercase">
            {dict.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] tracking-tight mb-3">
            {dict.title}
          </h2>
          <p className="text-[var(--text-secondary)]">
            {dict.subtitle}
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Free Plan */}
          <div className="card p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{dict.free.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-[var(--text-primary)]">${dict.free.price}</span>
                <span className="text-[var(--text-tertiary)] text-sm">{dict.free.period}</span>
              </div>
            </div>

            <div className="divider mb-6"></div>

            <ul className="space-y-3 mb-8">
              {dict.free.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--text-tertiary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
                </li>
              ))}
            </ul>

            <a href={botUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full text-sm">
              {dict.free.cta}
            </a>
          </div>

          {/* Premium Plan */}
          <div className="card pricing-popular p-6 relative">
            {dict.premium.badge && (
              <div className="absolute -top-3 left-4 badge text-xs">
                {dict.premium.badge}
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">{dict.premium.name}</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gradient">${dict.premium.price}</span>
                <span className="text-[var(--text-tertiary)] text-sm">{dict.premium.period}</span>
              </div>
            </div>

            <div className="divider mb-6"></div>

            <ul className="space-y-3 mb-8">
              {dict.premium.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
                </li>
              ))}
            </ul>

            <a href={botUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full text-sm">
              {dict.premium.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
