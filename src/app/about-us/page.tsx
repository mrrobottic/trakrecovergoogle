import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CtaSection } from '@/components/sections/cta-section';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lightbulb, Target, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';

const teamMembers = [
  {
    name: 'Jessica Miller',
    role: 'Founder & Lead Investigator',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&q=80',
    aiHint: 'woman professional',
    bio: 'With over 15 years in financial forensics, Jessica founded TRAKMINT to bring justice to scam victims. Her expertise in tracing digital footprints is unparalleled.',
  },
  {
    name: 'Mark Chen',
    role: 'Head of Legal Strategy',
    avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop&q=80',
    aiHint: 'man legal',
    bio: 'Mark is a seasoned attorney specializing in cybercrime and financial law. He navigates the complex legal landscape to build airtight cases for recovery.',
  },
  {
    name: 'Dr. Emily Carter',
    role: 'Behavioral Analyst & Client Support',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&q=80',
    aiHint: 'woman therapist',
    bio: "Emily's background in psychology helps us understand scammers' tactics and provide compassionate, effective support to our clients through difficult times.",
  },
    {
    name: 'David Rodriguez',
    role: 'Blockchain & Crypto Specialist',
    avatar: 'https://images.unsplash.com/photo-1615109398623-88346a601842?w=150&h=150&fit=crop&q=80',
    aiHint: 'man tech',
    bio: 'A crypto pioneer, David excels at demystifying the blockchain. He traces and analyzes cryptocurrency transactions to locate and reclaim stolen digital assets.',
  },
];

const values = [
    {
        icon: <Target className="h-10 w-10 text-primary" />,
        title: "Our Mission",
        description: "To provide a beacon of hope and a path to justice for victims of online scams. We dedicate our expertise to recovering stolen funds and empowering individuals to reclaim their financial security."
    },
    {
        icon: <Lightbulb className="h-10 w-10 text-primary" />,
        title: "Our Vision",
        description: "To create a world where scammers have nowhere to hide. We envision a future where robust recovery options and widespread education make online fraud a less viable crime for perpetrators."
    },
    {
        icon: <Users className="h-10 w-10 text-primary" />,
        title: "Our Commitment",
        description: "To treat every client with empathy, respect, and unwavering dedication. We handle each case with the confidentiality and seriousness it deserves, fighting for the best possible outcome."
    },
    {
        icon: <TrendingUp className="h-10 w-10 text-primary" />,
        title: "Our Approach",
        description: "Combining cutting-edge technology with deep investigative experience and strong legal strategy. Our multi-disciplinary approach ensures we explore every avenue for recovery."
    }
]

const AboutUsPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-28 bg-card">
          <div className="container text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
              The Team Behind Your Recovery
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              We are a dedicated group of investigators, legal experts, and client advocates committed to fighting financial fraud and restoring peace of mind.
            </p>
          </div>
        </section>

        <section className="py-20 md:py-28">
            <div className="container">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="text-center p-6">
                            <div className="flex justify-center mb-4">{value.icon}</div>
                            <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                            <p className="text-muted-foreground">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-20 md:py-28 bg-card">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                Meet Our Experts
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Our strength lies in our diverse team of seasoned professionals.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <Image src={member.avatar} alt={member.name} width={96} height={96} data-ai-hint={member.aiHint} className="object-cover" />
                      <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="mt-2 text-muted-foreground text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
