interface Testimonial {
  text: string;
  author: string;
  role: string;
}

interface TestimonialsProps {
  dict: {
    label: string;
    title: string;
    items: Testimonial[];
  };
}

export default function Testimonials({ dict }: TestimonialsProps) {
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

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-4 stagger-children">
          {dict.items.map((item, idx) => (
            <div key={idx} className="card p-5 group">
              {/* Quote icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--accent)" opacity="0.3" className="mb-4">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>

              {/* Quote text */}
              <p className="text-sm text-[var(--text-secondary)] mb-5 leading-relaxed">
                "{item.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[var(--accent-muted)] flex items-center justify-center text-[var(--accent)] text-sm font-medium">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium text-[var(--text-primary)]">{item.author}</div>
                  <div className="text-xs text-[var(--text-tertiary)]">{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
