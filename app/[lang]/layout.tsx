import { Locale, getDictionary, locales } from '@/lib/dictionary';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = (locales.includes(lang as Locale) ? lang : 'ru') as Locale;
  const dict = await getDictionary(locale);
  return {
    title: dict.meta.title,
    description: dict.meta.description,
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (locales.includes(rawLang as Locale) ? rawLang : 'ru') as Locale;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen">
        {/* Noise texture */}
        <div className="noise" />

        <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-primary)]/80 backdrop-blur-xl border-b border-[var(--border)]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center justify-between h-14">
              {/* Logo */}
              <a href={`/${lang}`} className="flex items-center gap-2.5 group">
                <div className="w-8 h-8 rounded-lg bg-[var(--accent)] flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.3-4.3"/>
                  </svg>
                </div>
                <span className="font-semibold text-[15px] text-[var(--text-primary)] tracking-tight">Thread Hunter</span>
              </a>

              {/* Nav */}
              <nav className="hidden md:flex items-center gap-1">
                <a href={`/${lang}#features`} className="btn-ghost">
                  {dict.nav.home}
                </a>
                <a href={`/${lang}#pricing`} className="btn-ghost">
                  {dict.nav.pricing}
                </a>
                <a href={`/${lang}#faq`} className="btn-ghost">
                  {dict.nav.faq}
                </a>
              </nav>

              {/* Actions */}
              <div className="flex items-center gap-3">
                <LanguageSwitcher currentLang={lang} />
                <a
                  href={process.env.NEXT_PUBLIC_BOT_URL || 'https://t.me/ThreadHunter_bot'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm py-2 px-4"
                >
                  {dict.hero.cta_free}
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className="pt-14">
          {children}
        </main>
      </body>
    </html>
  );
}
