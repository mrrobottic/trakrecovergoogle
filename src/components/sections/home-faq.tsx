import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MotionDiv } from "@/components/motion-div";
import Image from "next/image";

const faqs = [
  {
    question: "How does the recovery process work?",
    answer: "Our process begins with a free consultation and risk assessment. If we take on your case, our team of experts uses advanced tracing techniques, legal strategies, and communication with financial institutions to recover your funds. We keep you informed at every step."
  },
  {
    question: "What are your fees?",
    answer: "We operate primarily on a success-fee basis. This means we only get paid if we successfully recover your money. Our fees are a percentage of the recovered amount and will be clearly discussed and agreed upon before we begin."
  },
  {
    question: "How long does the recovery process take?",
    answer: "The duration varies greatly depending on the complexity of the case, the type of scam, and the cooperation of financial institutions. Some cases can be resolved in weeks, while others may take several months. We provide a realistic timeline after our initial assessment."
  },
  {
    question: "Is recovery guaranteed?",
    answer: "Unfortunately, no one can guarantee a 100% recovery rate. The chances of success depend on many factors. However, our expertise significantly increases the probability of a successful recovery."
  },
];

export function HomeFaq() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                Your Questions, Answered
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Find quick answers to common queries about our services and process. For more detailed information, visit our full FAQ page.
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
             <MotionDiv
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
             >
                <Image 
                    src="https://images.unsplash.com/photo-1559526324-c1f275fbfa32?q=80&w=1470&auto=format&fit=crop"
                    alt="FAQ section"
                    width={600}
                    height={700}
                    data-ai-hint="questions answers"
                    className="rounded-lg shadow-2xl object-cover"
                />
            </MotionDiv>
            <MotionDiv
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b">
                    <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </MotionDiv>
        </div>
      </div>
    </section>
  );
}
