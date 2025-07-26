import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Faq } from '@/components/sections/faq';
import { CtaSection } from '@/components/sections/cta-section';

const FAQPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-28 bg-card">
          <div className="container text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Find answers to common questions about our services and the recovery process.
            </p>
          </div>
        </section>
        <Faq />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
