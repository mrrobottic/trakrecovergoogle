import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="bg-primary text-primary-foreground rounded-lg p-10 md:p-16 text-center shadow-xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Ready to Take the First Step?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
            Don't let scammers have the last word. Our team is ready to fight for you.
            Start your free, no-obligation consultation today and find out how we can help.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" variant="secondary" style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}} className="font-bold text-lg py-7 px-10">
              <Link href="/claim">Start My Recovery Claim Now</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
