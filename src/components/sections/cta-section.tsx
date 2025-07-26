import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section 
      className="relative py-20 md:py-28 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1470&auto=format&fit=crop')"}}
    >
      <div className="absolute inset-0 bg-primary/90"></div>
      <div className="container relative">
        <div className="text-primary-foreground rounded-lg p-10 md:p-16 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Ready to Take the First Step?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
            Don't let scammers have the last word. Our team is ready to fight for you.
            Start your free, no-obligation consultation today and find out how we can help.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary" style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}} className="shimmer-button font-bold text-lg py-7 px-10 transform hover:scale-105 transition-transform duration-300">
              <Link href="/claim">Start My Recovery Claim Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
