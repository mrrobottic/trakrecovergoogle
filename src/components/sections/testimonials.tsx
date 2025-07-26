import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { MotionDiv } from "@/components/motion-div";

const testimonials = [
  {
    name: "Sarah L.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHx3b21hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTc1MzQ3NzQyM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    aiHint: "woman portrait",
    title: "A light in the darkness",
    quote: "After falling for a romance scam, I was devastated and ashamed. The team at TRAKMINT treated me with respect and worked tirelessly on my case. I can't thank them enough for their support and results.",
  },
  {
    name: "Mike P.",
    avatar: "https://images.unsplash.com/photo-1521146764736-56c929d59c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8cGVyc29uJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzUzMzc2MzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    aiHint: "person portrait",
    title: "Fast and efficient service",
    quote: "My company was hit by a phishing attack that cost us thousands. TRAKMINT's quick action and expertise were crucial in tracing and recovering the money. Highly recommended for any business.",
  },
    {
    name: "Emily R.",
    avatar: "https://images.unsplash.com/photo-1735424080768-8730f9c8a0e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHx3b21hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDB8fHx8MTc1MzUwMDExMHww&ixlib=rb-4.1.0&q=80&w=1080",
    aiHint: "woman portrait professional",
    title: "They exceeded all expectations",
    quote: "I was skeptical at first, but their transparent process and constant communication put me at ease. Not only did they recover my money, but they also educated me on how to stay safe in the future.",
  },
  {
    name: "David B.",
    avatar: "https://images.unsplash.com/photo-1677180969142-52213a928941?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxtYW4lMjB0aGlua2luZ3xlbnwwfHx8fDE3NTM1MDAxMDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    aiHint: "man thinking",
    title: "Crypto scam recovery experts",
    quote: "I dove into crypto and got burned by a fake exchange. I thought the money was untraceable. TRAKMINT's blockchain analysis team proved me wrong. They traced the transactions and helped me recover a significant portion.",
  },
  {
    name: "Maria G.",
    avatar: "https://images.unsplash.com/photo-1612994451093-c6791c8989cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxzbWlsaW5nJTIwd29tYW58ZW58MHx8fHwxNzUzNDcxNTIzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    aiHint: "smiling woman",
    title: "Empathetic and successful",
    quote: "I was targeted by an impersonation scam and felt so foolish. TRAKMINT never made me feel judged. They were supportive and, most importantly, successful in getting my money back from the mule accounts.",
  }
];

export function Testimonials() {
  return (
    <section 
        id="testimonials" 
        className="py-20 md:py-28 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1420&auto=format&fit=crop&ixlib=rb-4.0.3')"}}
    >
      <div className="container relative">
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-primary-foreground">
            Success Stories from Our Clients
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-primary-foreground/80">
            We are dedicated to our clients' success. Here's what they have to say about their experience with TRAKMINT.
          </p>
        </MotionDiv>
        <MotionDiv
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <Card className="h-full flex flex-col bg-background/80 backdrop-blur-sm">
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
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </MotionDiv>
      </div>
    </section>
  );
}
