interface FooterProps {
  dict: {
    title: string;
    subtitle: string;
    button: string;
  };
  footerDict: {
    copyright: string;
    links: {
      privacy: string;
      terms: string;
    };
  };
  botUrl: string;
}

export default function Footer({ dict, footerDict, botUrl }: FooterProps) {
  return (
    <>
      {/* CTA Section */}
      <section className="section border-t border-[var(--border)] relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[600px] h-[300px] bg-[var(--accent)] opacity-10 blur-[100px] rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
            {dict.title}
          </h2>
          <p className="text-[var(--text-secondary)] mb-8">
            {dict.subtitle}
          </p>
          <a
            href={botUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex text-base px-6 py-3"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.02-1.96 1.25-5.54 3.66-.52.36-1-.54-1.55-.52-.51.02-1.49-.29-2.21-.53-.89-.3-1.6-.46-1.54-.97.03-.27.38-.54 1.06-.82 4.13-1.8 6.89-2.98 8.28-3.57 3.95-1.65 4.77-1.93 5.3-1.94.12 0 .38.03.55.17.14.12.18.28.2.45-.01.06.01.24 0 .38z"/>
            </svg>
            {dict.button}
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[var(--border)]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-[var(--accent)] flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.3-4.3"/>
                </svg>
              </div>
              <span className="text-sm font-medium text-[var(--text-primary)]">Thread Hunter</span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-xs text-[var(--text-tertiary)]">
              <a href="#" className="hover:text-[var(--text-secondary)] transition-colors">
                {footerDict.links.privacy}
              </a>
              <a href="#" className="hover:text-[var(--text-secondary)] transition-colors">
                {footerDict.links.terms}
              </a>
            </div>

            {/* Copyright */}
            <div className="text-xs text-[var(--text-tertiary)]">
              {footerDict.copyright}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
