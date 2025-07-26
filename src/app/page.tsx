import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { HowItWorks } from '@/components/sections/how-it-works';
import { EducationalResources } from '@/components/sections/educational-resources';
import { Testimonials } from '@/components/sections/testimonials';
import { Faq } from '@/components/sections/faq';
import { CtaSection } from '@/components/sections/cta-section';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <EducationalResources />
        <Testimonials />
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
