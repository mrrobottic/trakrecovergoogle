import { Landmark, Heart, Smartphone, ShieldAlert, Check } from 'lucide-react';
import Image from 'next/image';
import { MotionDiv } from '@/components/motion-div';


const scamTypes = [
  {
    icon: <Landmark className="h-10 w-10 text-accent" />,
    title: "Investment Scams",
    description: "Fraudsters promise high returns with little risk. Learn to spot the red flags before you invest.",
  },
  {
    icon: <Heart className="h-10 w-10 text-accent" />,
    title: "Romance Scams",
    description: "Scammers build relationships online to manipulate and exploit for financial gain. Stay vigilant.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-accent" />,
    title: "Phishing Scams",
    description: "Deceptive emails, texts, or calls designed to steal your personal and financial information.",
  },
  {
    icon: <ShieldAlert className="h-10 w-10 text-accent" />,
    title: "Impersonation Scams",
    description: "Criminals posing as trusted organizations like banks or government agencies to trick you.",
  },
];

export function EducationalResources() {
  return (
    <section id="services" className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <MotionDiv
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <div className="mb-12 lg:mb-0">
                      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        Know Your Enemy: Common Scams
                      </h2>
                      <p className="mt-4 text-lg text-primary-foreground/80">
                        Knowledge is the first line of defense. Understand the tactics scammers use to protect yourself and your assets.
                      </p>
                      <ul className="mt-6 space-y-4">
                        <li className="flex items-center gap-3">
                          <Check className="h-6 w-6 text-accent flex-shrink-0" />
                          <span>Spot red flags in investment opportunities.</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Check className="h-6 w-6 text-accent flex-shrink-0" />
                          <span>Identify manipulative romance scam tactics.</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <Check className="h-6 w-6 text-accent flex-shrink-0" />
                          <span>Recognize and avoid phishing attempts.</span>
                        </li>
                         <li className="flex items-center gap-3">
                          <Check className="h-6 w-6 text-accent flex-shrink-0" />
                          <span>Protect yourself from impersonation scams.</span>
                        </li>
                      </ul>
                    </div>
                </MotionDiv>
                 <MotionDiv
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                 >
                    <Image 
                      src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1470&auto=format&fit=crop" 
                      alt="Cyber security" 
                      width={600} 
                      height={400}
                      data-ai-hint="cyber security"
                      className="rounded-lg shadow-2xl"
                    />
                </MotionDiv>
            </div>
        </div>
    </section>
  );
}
