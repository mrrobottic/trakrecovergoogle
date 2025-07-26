import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const testimonials = [
  {
    name: "John D.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "man portrait",
    title: "Recovered my life savings",
    quote: "I thought my retirement fund was gone forever after a sophisticated investment scam. TRAKMINT was professional, compassionate, and incredibly effective. They recovered over 90% of my funds.",
  },
  {
    name: "Sarah L.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "woman portrait",
    title: "A light in the darkness",
    quote: "After falling for a romance scam, I was devastated and ashamed. The team at TRAKMINT treated me with respect and worked tirelessly on my case. I can't thank them enough for their support and results.",
  },
  {
    name: "Mike P.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "person portrait",
    title: "Fast and efficient service",
    quote: "My company was hit by a phishing attack that cost us thousands. TRAKMINT's quick action and expertise were crucial in tracing and recovering the money. Highly recommended for any business.",
  },
    {
    name: "Emily R.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "woman portrait professional",
    title: "They exceeded all expectations",
    quote: "I was skeptical at first, but their transparent process and constant communication put me at ease. Not only did they recover my money, but they also educated me on how to stay safe in the future.",
  },
  {
    name: "The Chen Family",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "happy family",
    title: "Saved our home deposit",
    quote: "We were victims of a real estate wire fraud and almost lost the down payment for our dream home. TRAKMINT's rapid response and coordination with the banks was instrumental in freezing and returning our funds.",
  },
  {
    name: "David B.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "man thinking",
    title: "Crypto scam recovery experts",
    quote: "I dove into crypto and got burned by a fake exchange. I thought the money was untraceable. TRAKMINT's blockchain analysis team proved me wrong. They traced the transactions and helped me recover a significant portion.",
  },
  {
    name: "Maria G.",
    avatar: "https://placehold.co/100x100.png",
    aiHint: "smiling woman",
    title: "Empathetic and successful",
    quote: "I was targeted by an impersonation scam and felt so foolish. TRAKMINT never made me feel judged. They were supportive and, most importantly, successful in getting my money back from the mule accounts.",
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Success Stories from Our Clients
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We are dedicated to our clients' success. Here's what they have to say about their experience with TRAKMINT.
          </p>
        </div>
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
                  <Card className="h-full flex flex-col">
                    <CardHeader className="flex flex-row items-center gap-4 pb-4">
                      <Avatar className="h-16 w-16">
                        <Image src={testimonial.avatar} alt={testimonial.name} width={64} height={64} data-ai-hint={testimonial.aiHint} />
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
      </div>
    </section>
  );
}
