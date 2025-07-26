import { ClaimForm } from "@/components/claim-form";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function RiskAssessmentPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Assess Your Recovery Chance
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Fill out the form below to help us understand your situation. This information will allow us to assess the likelihood of recovering your funds. All information is confidential.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
             <ClaimForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
