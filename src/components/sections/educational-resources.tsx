import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Landmark, Heart, Smartphone, ShieldAlert } from 'lucide-react';

const scamTypes = [
  {
    icon: <Landmark className="h-10 w-10 text-primary" />,
    title: "Investment Scams",
    description: "Fraudsters promise high returns with little risk. Learn to spot the red flags before you invest.",
  },
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: "Romance Scams",
    description: "Scammers build relationships online to manipulate and exploit for financial gain. Stay vigilant.",
  },
  {
    icon: <Smartphone className="h-10 w-10 text-primary" />,
    title: "Phishing Scams",
    description: "Deceptive emails, texts, or calls designed to steal your personal and financial information.",
  },
  {
    icon: <ShieldAlert className="h-10 w-10 text-primary" />,
    title: "Impersonation Scams",
    description: "Criminals posing as trusted organizations like banks or government agencies to trick you.",
  },
];

export function EducationalResources() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Know Your Enemy: Common Scams
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Knowledge is the first line of defense. Understand the tactics scammers use to protect yourself and your assets.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {scamTypes.map((scam, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">{scam.icon}</div>
              <CardHeader className="p-0">
                <CardTitle className="font-bold text-xl">{scam.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-base">
                {scam.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
