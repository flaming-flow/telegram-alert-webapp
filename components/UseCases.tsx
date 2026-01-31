interface UseCase {
  icon: string;
  title: string;
  pain: string;
  solution: string;
}

interface UseCasesProps {
  dict: {
    label: string;
    title: string;
    items: UseCase[];
  };
}

export default function UseCases({ dict }: UseCasesProps) {
  return (
    <section className="section-sm border-t border-[var(--border)]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-[var(--accent)] mb-3 tracking-wide uppercase">
            {dict.label}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
            {dict.title}
          </h2>
        </div>

        {/* Use cases grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 stagger-children">
          {dict.items.map((item, idx) => (
            <div key={idx} className="card p-5 group hover:border-[var(--accent)]/20 transition-all">
              <div className="text-2xl mb-3 group-hover:scale-110 transition-transform inline-block">
                {item.icon}
              </div>
              <h3 className="text-base font-semibold text-[var(--text-primary)] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--accent)] font-medium mb-2">
                {item.pain}
              </p>
              <p className="text-sm text-[var(--text-tertiary)] leading-relaxed">
                {item.solution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
