import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

const TermsOfServicePage = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1 py-12 md:py-20">
        <div className="container max-w-4xl mx-auto prose dark:prose-invert">
          <h1 className="text-4xl font-bold mb-8 font-headline">Terms of Service</h1>
          <div className="space-y-8 text-lg text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p>
                By using our website and Services, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use our website or Services. We may modify the Terms at any time, in our sole discretion. If we do so, we'll let you know either by posting the modified Terms on the Site or through other communications.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Description of Service</h2>
              <p>
                TRAKMINT provides fund recovery consultation and assistance services ("Services"). Our services are advisory and investigative. We do not provide legal advice or financial services. We are not a law firm or a financial institution.
              </p>
            </section>
            
            <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">3. No Guarantee of Recovery</h2>
                <p>
                    You acknowledge and agree that TRAKMINT does not guarantee the recovery of any funds. The success of recovery efforts depends on numerous factors outside of our control, including the actions of third parties such as financial institutions and law enforcement, and the nature of the scam itself. Our fees for services rendered are for the work performed and not contingent on the outcome, unless otherwise specified in a separate agreement.
                </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. User Responsibilities</h2>
              <p>
                To use the Services, you must provide accurate, complete, and current information as requested in our claim forms and communications. You are responsible for the authenticity of all documents and information you provide. Providing false or misleading information may result in the termination of our Services and may be reported to law enforcement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Confidentiality</h2>
              <p>
                We are committed to maintaining the confidentiality of your personal and case information as outlined in our Privacy Policy. You agree to also maintain the confidentiality of any proprietary information we may share with you during our engagement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Fees and Payments</h2>
              <p>
                Our fee structure will be communicated to you and agreed upon before we commence any paid services. This may include an upfront consultation fee and/or a success-based fee calculated as a percentage of the recovered funds. You agree to pay all fees in a timely manner.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Limitation of Liability</h2>
              <p>
                IN NO EVENT WILL TRAKMINT, ITS AFFILIATES OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE WEBSITE, ANY WEBSITES LINKED TO IT, ANY CONTENT ON THE WEBSITE OR SUCH OTHER WEBSITES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE WEBSITE OR SUCH OTHER WEBSITES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT OR OTHERWISE, EVEN IF FORESEEABLE.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which our company is based, without regard to its conflict of law provisions.
              </p>
            </section>

             <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us through the contact information provided on our website.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
