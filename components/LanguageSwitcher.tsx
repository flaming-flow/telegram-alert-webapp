'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import type { Locale } from '@/lib/dictionary';

interface LanguageSwitcherProps {
  currentLang: Locale;
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname();

  const getNewPath = (newLang: Locale) => {
    const segments = pathname.split('/');
    segments[1] = newLang;
    return segments.join('/');
  };

  return (
    <div className="flex items-center gap-0.5 bg-[var(--bg-tertiary)] rounded-lg p-0.5">
      <Link
        href={getNewPath('ru')}
        className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
          currentLang === 'ru'
            ? 'bg-[var(--bg-elevated)] text-[var(--text-primary)] shadow-sm'
            : 'text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]'
        }`}
      >
        RU
      </Link>
      <Link
        href={getNewPath('en')}
        className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
          currentLang === 'en'
            ? 'bg-[var(--bg-elevated)] text-[var(--text-primary)] shadow-sm'
            : 'text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]'
        }`}
      >
        EN
      </Link>
    </div>
  );
}
