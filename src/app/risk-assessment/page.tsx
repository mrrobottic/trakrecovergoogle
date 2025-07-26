import { ClaimForm } from "@/components/claim-form";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CtaSection } from "@/components/sections/cta-section";
import { ShieldCheck, FileText, Clock } from "lucide-react";

export default function RiskAssessmentPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-28 bg-card">
            <div className="container text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl font-headline">
                Assess Your Recovery Chance
                </h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                Fill out our secure form to receive a free, no-obligation assessment of your case. Understanding the details of your situation is the first step towards recovery.
                </p>
            </div>
        </section>
        
        <section className="py-20 md:py-28">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tighter mb-4 font-headline">Why a Risk Assessment is Crucial</h2>
                            <p className="text-muted-foreground text-lg">
                                Not all situations are the same. A risk assessment allows our experts to analyze the specifics of your case and determine the most effective strategy. This initial step is vital and helps us provide you with a realistic outlook on the potential for recovery.
                            </p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <ShieldCheck className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-xl">Confidential & Secure</h3>
                                    <p className="text-muted-foreground">Your privacy is our top priority. All information submitted is encrypted and handled with the utmost confidentiality.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <FileText className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-xl">No Obligation</h3>
                                    <p className="text-muted-foreground">Submitting your case for assessment is completely free and does not commit you to using our services.</p>
                                </div>
                            </div>
                             <div className="flex items-start gap-4">
                                <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-xl">Timely Response</h3>
                                    <p className="text-muted-foreground">Our team will review your submission and get back to you within 24-48 hours with our initial findings and recommendations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ClaimForm />
                    </div>
                </div>
            </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
