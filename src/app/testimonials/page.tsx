import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: "John D.",
    avatar: "https://source.unsplash.com/100x100/?man,portrait,happy",
    aiHint: "man portrait",
    title: "Recovered my life savings",
    quote: "I thought my retirement fund was gone forever after a sophisticated investment scam. TRAKMINT was professional, compassionate, and incredibly effective. They recovered over 90% of my funds.",
  },
  {
    name: "Sarah L.",
    avatar: "https://source.unsplash.com/100x100/?woman,portrait,smiling",
    aiHint: "woman portrait",
    title: "A light in the darkness",
    quote: "After falling for a romance scam, I was devastated and ashamed. The team at TRAKMINT treated me with respect and worked tirelessly on my case. I can't thank them enough for their support and results.",
  },
  {
    name: "Mike P.",
    avatar: "https://source.unsplash.com/100x100/?person,portrait,professional",
    aiHint: "person portrait",
    title: "Fast and efficient service",
    quote: "My company was hit by a phishing attack that cost us thousands. TRAKMINT's quick action and expertise were crucial in tracing and recovering the money. Highly recommended for any business.",
  },
    {
    name: "Emily R.",
    avatar: "https://source.unsplash.com/100x100/?woman,portrait,professional",
    aiHint: "woman portrait professional",
    title: "They exceeded all expectations",
    quote: "I was skeptical at first, but their transparent process and constant communication put me at ease. Not only did they recover my money, but they also educated me on how to stay safe in the future.",
  },
  {
    name: "The Chen Family",
    avatar: "https://source.unsplash.com/100x100/?family,happy",
    aiHint: "happy family",
    title: "Saved our home deposit",
    quote: "We were victims of a real estate wire fraud and almost lost the down payment for our dream home. TRAKMINT's rapid response and coordination with the banks was instrumental in freezing and returning our funds.",
  },
  {
    name: "David B.",
    avatar: "https://source.unsplash.com/100x100/?man,thinking,serious",
    aiHint: "man thinking",
    title: "Crypto scam recovery experts",
    quote: "I dove into crypto and got burned by a fake exchange. I thought the money was untraceable. TRAKMINT's blockchain analysis team proved me wrong. They traced the transactions and helped me recover a significant portion.",
  },
  {
    name: "Maria G.",
    avatar: "https://source.unsplash.com/100x100/?woman,smiling,happy",
    aiHint: "smiling woman",
    title: "Empathetic and successful",
    quote: "I was targeted by an impersonation scam and felt so foolish. TRAKMINT never made me feel judged. They were supportive and, most importantly, successful in getting my money back from the mule accounts.",
  },
  {
    name: "Alex Johnson",
    avatar: "https://source.unsplash.com/100x100/?man,professional,portrait",
    aiHint: "professional man",
    title: "Incredible Expertise",
    quote: "The depth of knowledge at TRAKMINT is astounding. They understood the technicalities of my situation and explained it to me in a way I could grasp. True professionals in every sense.",
  },
  {
    name: "Jessica Williams",
    avatar: "https://source.unsplash.com/100x100/?woman,business,portrait",
    aiHint: "business woman",
    title: "A Trustworthy Partner",
    quote: "Trust is everything, especially after being scammed. TRAKMINT earned mine with their transparent process and genuine care for my case. They stood by me from start to finish.",
  }
];


const TestimonialsPage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">
            <section className="py-20 md:py-28 bg-card">
                <div className="container text-center">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                        What Our Clients Say
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Real stories from people we've helped. Your success could be next.
                    </p>
                </div>
            </section>
            
            <section className="py-20 md:py-28">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <Card key={index} className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <CardHeader className="flex flex-row items-center gap-4 pb-4">
                                <Avatar className="h-16 w-16">
                                    <Image src={testimonial.avatar} alt={testimonial.name} width={64} height={64} data-ai-hint={testimonial.aiHint} className="object-cover"/>
                                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-bold text-lg">{testimonial.name}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                                </div>
                                </CardHeader>
                                <CardContent className="flex-grow">
                                <p className="italic">&ldquo;{testimonial.quote}&rdquo;</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

             <section className="py-20 bg-primary text-primary-foreground">
              <div className="container text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready to Share Your Own Success Story?
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
                  If you've been a victim of a scam, don't wait. Contact us today for a free, confidential consultation. Let us help you become our next success story.
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

export default TestimonialsPage;
