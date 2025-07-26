import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { FileText, ClipboardCheck, Search, DollarSign } from "lucide-react"

const steps = [
    {
        icon: <FileText className="h-10 w-10 text-primary" />,
        title: "Submit Your Case",
        description: "Fill out our confidential online form with the details of your situation. The more information you provide, the better we can assess your case."
    },
    {
        icon: <ClipboardCheck className="h-10 w-10 text-primary" />,
        title: "Free Evaluation",
        description: "Our experts will review your submission free of charge to determine the viability of your claim and outline a potential strategy."
    },
    {
        icon: <Search className="h-10 w-10 text-primary" />,
        title: "Recovery in Action",
        description: "Once you approve, our team gets to work. We use advanced techniques to trace, confront, and recover your lost assets."
    },
    {
        icon: <DollarSign className="h-10 w-10 text-primary" />,
        title: "Funds Returned",
        description: "We fight to get your money back. Upon successful recovery, we ensure the funds are securely returned to you, minus our agreed-upon success fee."
    }
]

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 md:py-28 bg-card">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
                        How It Works: Our 4-Step Process
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        We've streamlined the recovery process to be as clear and stress-free as possible. Here's how we help you get your money back.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center p-6 relative">
                             <div className="absolute top-8 left-1/2 -ml-px h-full w-0.5 bg-border -z-10 hidden lg:block"></div>
                             <div className="relative bg-card inline-block p-4 rounded-full border-2 border-primary mb-4 z-10">
                                {step.icon}
                            </div>
                            <h3 className="font-bold text-xl mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
