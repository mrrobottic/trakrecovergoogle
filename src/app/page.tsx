import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { HowItWorks } from '@/components/sections/how-it-works';
import { Testimonials } from '@/components/sections/testimonials';
import { HomeFaq } from '@/components/sections/home-faq';
import { CtaSection } from '@/components/sections/cta-section';
import { MotionDiv } from '@/components/motion-div';
import { EducationalResources } from '@/components/sections/educational-resources';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Hero />
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <HowItWorks />
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <EducationalResources />
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <HomeFaq />
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Testimonials />
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <CtaSection />
        </MotionDiv>
      </main>
      <Footer />
    </div>
  );
}
