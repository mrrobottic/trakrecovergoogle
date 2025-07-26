import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ClaimForm } from '@/components/claim-form';

export function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 bg-card overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 opacity-50"></div>
        <div className="container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 text-center lg:text-left">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
                        Reclaim Your Funds. <br />
                        Fight Back Against Scammers.
                    </h1>
                    <p className="max-w-xl mx-auto lg:mx-0 text-lg text-muted-foreground md:text-xl">
                        Fallen victim to a scam? You&apos;re not alone. Our expert team is here to help you navigate the recovery process and reclaim what&apos;s rightfully yours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button asChild size="lg" style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}}>
                            <Link href="/claim">Start Your Free Consultation</Link>
                        </Button>
                    </div>
                </div>
                <div>
                  <ClaimForm />
                </div>
            </div>
        </div>
    </section>
  );
}
