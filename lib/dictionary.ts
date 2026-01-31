import 'server-only';

export type Locale = 'ru' | 'en';

const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  ru: () => import('@/dictionaries/ru.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]?.() ?? dictionaries.ru();
};

export const locales: Locale[] = ['ru', 'en'];
export const defaultLocale: Locale = 'ru';
