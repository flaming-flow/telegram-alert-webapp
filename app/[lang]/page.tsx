import { Locale, getDictionary, locales } from '@/lib/dictionary';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import UseCases from '@/components/UseCases';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Comparison from '@/components/Comparison';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default async function LandingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  const lang = (locales.includes(rawLang as Locale) ? rawLang : 'ru') as Locale;
  const dict = await getDictionary(lang);
  const botUrl = process.env.NEXT_PUBLIC_BOT_URL || 'https://t.me/ThreadHunter_bot';

  return (
    <>
      <Hero dict={dict.hero} botUrl={botUrl} />
      <HowItWorks dict={dict.howItWorks} />
      <UseCases dict={dict.useCases} />
      <Testimonials dict={dict.testimonials} />
      <Pricing dict={dict.pricing} botUrl={botUrl} />
      <Comparison dict={dict.comparison} />
      <FAQ dict={dict.faq} />
      <Footer dict={dict.cta} footerDict={dict.footer} botUrl={botUrl} />
    </>
  );
}
