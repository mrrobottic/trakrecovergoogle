import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 bg-card overflow-hidden">
        <div className="absolute inset-0 bg-blue-50/50 opacity-50 z-0"></div>
        <div 
          className="absolute inset-0 z-0" 
          style={{
            backgroundImage: "url('/grid.svg')",
            backgroundRepeat: 'repeat',
            opacity: 0.05,
          }}>
        </div>
        <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-center lg:text-left">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline text-primary">
                        Reclaim Your Funds. <br />
                        Fight Back Against Scammers.
                    </h1>
                    <p className="max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground md:text-xl">
                        Fallen victim to a scam? You&apos;re not alone. Our expert team is here to help you navigate the recovery process and reclaim what&apos;s rightfully yours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button asChild size="lg" style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}} className="shimmer-button transform hover:scale-105 transition-transform duration-300 font-bold text-lg py-7 px-8">
                            <Link href="/claim">Start a Free Consultation</Link>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="text-lg py-7 px-8">
                            <Link href="/how-it-works">Learn How It Works</Link>
                        </Button>
                    </div>
                </div>
                <div className="relative h-full min-h-[300px] lg:min-h-[450px]">
                  <Image 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1374&auto=format&fit=crop"
                    alt="Business professionals collaborating"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg shadow-2xl"
                    data-ai-hint="teamwork collaboration"
                  />
                </div>
            </div>
        </div>
    </section>
  );
}
