import { ClaimForm } from "@/components/claim-form";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export default function ClaimPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              Start Your Recovery Claim
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Please provide as much detail as possible. All information is confidential and will be used solely for the purpose of assessing and processing your case.
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
