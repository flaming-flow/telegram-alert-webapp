interface ComparisonItem {
  name: string;
  price: string;
  highlight: boolean;
}

interface ComparisonProps {
  dict: {
    label: string;
    title: string;
    subtitle: string;
    items: ComparisonItem[];
  };
}

export default function Comparison({ dict }: ComparisonProps) {
  return (
    <section className="section-sm border-t border-[var(--border)]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-[var(--accent)] mb-3 tracking-wide uppercase">
            {dict.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--text-primary)] tracking-tight mb-2">
            {dict.title}
          </h2>
          <p className="text-[var(--text-secondary)] text-sm">
            {dict.subtitle}
          </p>
        </div>

        {/* Comparison list */}
        <div className="space-y-2">
          {dict.items.map((item, idx) => (
            <div
              key={idx}
              className={`flex items-center justify-between p-4 rounded-xl transition-all ${
                item.highlight
                  ? 'bg-[var(--accent)] text-white'
                  : 'bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-secondary)]'
              }`}
            >
              <span className={`font-medium ${item.highlight ? 'text-white' : ''}`}>
                {item.name}
              </span>
              <span className={`font-semibold ${item.highlight ? 'text-white' : 'text-[var(--text-tertiary)]'}`}>
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
