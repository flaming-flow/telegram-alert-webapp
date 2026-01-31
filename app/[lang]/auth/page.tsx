import { Locale, getDictionary, locales } from '@/lib/dictionary';
import AuthForm from '@/components/auth/AuthForm';

export default async function AuthPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (locales.includes(rawLang as Locale) ? rawLang : 'ru') as Locale;
  const dict = await getDictionary(lang);

  return (
    <main className="min-h-[calc(100vh-56px)] flex items-center justify-center py-12 px-4">
      <AuthForm dict={dict.auth} />
    </main>
  );
}
