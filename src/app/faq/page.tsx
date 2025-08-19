import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Faq } from '@/components/sections/faq';
import { CtaSection } from '@/components/sections/cta-section';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import Link from 'next/link';

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
        
        <section className="py-20 md:py-28">
            <div className="container">
                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-1 space-y-8">
                        <div>
                            <h2 className="text-2xl font-bold font-headline mb-4">Have Questions?</h2>
                            <p className="text-muted-foreground">
                                We have answers. If you can't find what you're looking for in our FAQ, please don't hesitate to reach out to us directly.
                            </p>
                        </div>
                         <div>
                            <h3 className="text-xl font-bold font-headline mb-4">Contact Us</h3>
                            <ul className="space-y-4 text-muted-foreground">
                                <li className="flex items-center gap-3">
                                    <Phone className="h-5 w-5 text-primary" />
                                    <span>+1 (800) 555-0199</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <Mail className="h-5 w-5 text-primary" />
                                    <span>support@trakmint.org</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <MessageSquare className="h-5 w-5 text-primary" />
                                    <Link href="/claim" className="hover:underline">Send us a message</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="md:col-span-2">
                        <Faq />
                    </div>
                </div>
            </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
