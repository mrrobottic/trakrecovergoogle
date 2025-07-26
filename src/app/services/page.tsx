import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { DollarSign, Search, Briefcase, GraduationCap, ShieldCheck } from 'lucide-react';
import { MotionDiv } from '@/components/motion-div';


const services = [
  {
    icon: <DollarSign className="h-8 w-8 text-accent" />,
    title: "Comprehensive Fund Recovery",
    description: "Our primary mission is to reunite you with your stolen funds. We employ a multi-faceted approach combining advanced tracing technology, financial expertise, and established relationships with financial institutions and law enforcement agencies to maximize the chances of recovery.",
    image: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1470&auto=format&fit=crop",
    aiHint: "finance calculator",
  },
  {
    icon: <Search className="h-8 w-8 text-accent" />,
    title: "Scam Analysis & Investigation",
    description: "Understanding the scam is the first step to dismantling it. Our investigators analyze every detail of your case, from transaction records to communication logs, to build a strong foundation for recovery efforts. We trace the digital and financial footprints left by scammers to identify them and locate your money.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop",
    aiHint: "investigation analysis",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-accent" />,
    title: "Legal & Financial Liaison",
    description: "Navigating the complex worlds of finance and law can be daunting. We act as your expert intermediary, communicating with banks, cryptocurrency exchanges, and legal authorities on your behalf. Our team ensures all necessary reports are filed correctly and that your case is presented with the urgency it deserves.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059ee41f?q=80&w=1374&auto=format&fit=crop",
    aiHint: "legal justice",
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-accent" />,
    title: "Prevention & Education",
    description: "Beyond recovery, we are committed to empowering you with knowledge. We provide personalized advice on how to secure your digital assets and avoid future scams. Our educational resources are designed to keep you informed about the latest fraud tactics and best practices for online safety.",
    image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1470&auto=format&fit=crop",
    aiHint: "education security",
  }
];

const ServicesPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-28 bg-card">
          <div className="container text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
              Our Expert Services
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              We provide a complete suite of services designed to recover your assets and protect you from future harm.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container space-y-24">
            {services.map((service, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                  <div className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-col-dense' : ''}`}>
                      <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                          <div className="flex items-center gap-4 mb-4">
                              {service.icon}
                              <h2 className="text-3xl font-bold tracking-tight font-headline">{service.title}</h2>
                          </div>
                          <p className="text-muted-foreground text-lg">{service.description}</p>
                      </div>
                      <div className={index % 2 === 1 ? 'md:col-start-1' : ''}>
                          <Image 
                              src={service.image} 
                              alt={service.title} 
                              width={600} 
                              height={400} 
                              data-ai-hint={service.aiHint}
                              className="rounded-lg shadow-2xl" 
                          />
                      </div>
                  </div>
              </MotionDiv>
            ))}
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <ShieldCheck className="mx-auto h-16 w-16 mb-4 text-accent" />
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Ready to Start Your Recovery Journey?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
              Your case is unique, and it deserves expert attention. Contact us for a free, confidential consultation to discuss your situation. There's no obligation, only a path forward.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="secondary" style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}} className="font-bold text-lg py-7 px-10">
                <Link href="/claim">Get My Free Consultation</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;
