'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { handleRiskAssessment } from '@/lib/actions';
import type { AssessRecoveryRiskInput, AssessRecoveryRiskOutput } from '@/ai/flows/assess-recovery-risk';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, AlertTriangle, BarChart, CheckCircle, Info } from 'lucide-react';

const formSchema = z.object({
  scamType: z.string().min(1, { message: 'Scam type is required.' }),
  amountLost: z.coerce.number().min(1, { message: 'Amount lost must be greater than 0.' }),
  timeElapsed: z.string().min(1, { message: 'Time elapsed is required.' }),
  details: z.string().min(10, { message: 'Please provide more details (at least 10 characters).' }),
});

const likelihoodStyles: { [key: string]: string } = {
  'very low': 'bg-red-100 text-red-800 border-red-300',
  'low': 'bg-orange-100 text-orange-800 border-orange-300',
  'moderate': 'bg-yellow-100 text-yellow-800 border-yellow-300',
  'high': 'bg-green-100 text-green-800 border-green-300',
  'very high': 'bg-emerald-100 text-emerald-800 border-emerald-300',
};

export function RiskAssessment() {
  const [result, setResult] = useState<AssessRecoveryRiskOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<AssessRecoveryRiskInput>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      scamType: '',
      amountLost: 0,
      timeElapsed: '',
      details: '',
    },
  });

  async function onSubmit(data: AssessRecoveryRiskInput) {
    setIsLoading(true);
    setError(null);
    setResult(null);
    try {
      const assessment = await handleRiskAssessment(data);
      setResult(assessment);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'An unknown error occurred.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section id="risk-assessment" className="py-20 md:py-28 bg-card">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
            Free AI-Powered Risk Assessment
          </h2>
          <p className="text-lg text-muted-foreground">
            Unsure about your chances? Fill out this form to get an instant, AI-driven analysis of your situation. Understand the factors affecting your case and receive personalized recommendations.
          </p>
          <p className="text-sm text-muted-foreground italic">
            Disclaimer: This tool provides an estimate based on the data you provide and is for informational purposes only. It is not legal advice.
          </p>
        </div>
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>Assess Your Recovery Chance</CardTitle>
            <CardDescription>Provide details about the incident below.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="scamType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type of Scam</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a scam type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Investment Scam">Investment Scam</SelectItem>
                            <SelectItem value="Romance Scam">Romance Scam</SelectItem>
                            <SelectItem value="Phishing Scam">Phishing Scam</SelectItem>
                            <SelectItem value="Impersonation Scam">Impersonation Scam</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="amountLost"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Amount Lost (USD)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="e.g., 5000" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                 <FormField
                    control={form.control}
                    name="timeElapsed"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Time Elapsed Since Incident</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select time elapsed" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="Less than 24 hours">Less than 24 hours</SelectItem>
                            <SelectItem value="1-3 days">1-3 days</SelectItem>
                            <SelectItem value="3-7 days">3-7 days</SelectItem>
                            <SelectItem value="1-4 weeks">1-4 weeks</SelectItem>
                            <SelectItem value="More than a month">More than a month</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                <FormField
                  control={form.control}
                  name="details"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Details of the Incident</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Briefly describe what happened..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" disabled={isLoading} className="w-full" style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Assessing...
                    </>
                  ) : (
                    'Assess My Case'
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
          {error && (
            <CardFooter className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 p-4 rounded-b-lg">
                <AlertTriangle className="h-4 w-4" />
                <span>{error}</span>
            </CardFooter>
          )}
          {result && (
             <CardFooter className="flex flex-col items-start gap-4 bg-secondary/50 p-4 rounded-b-lg">
                <h3 className="text-lg font-semibold flex items-center gap-2"><BarChart className="h-5 w-5"/> Assessment Result</h3>
                <div className={`w-full p-4 rounded-md border text-center ${likelihoodStyles[result.likelihood.toLowerCase()] || 'bg-gray-100'}`}>
                    <p className="font-bold text-lg uppercase tracking-wider">{result.likelihood}</p>
                    <p className="text-sm">Likelihood of Recovery</p>
                </div>
                <div className="w-full space-y-3">
                    <div className="flex items-start gap-3">
                        <Info className="h-5 w-5 mt-1 shrink-0 text-primary" />
                        <div>
                            <h4 className="font-semibold">Key Factors</h4>
                            <p className="text-sm text-muted-foreground">{result.factors}</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 mt-1 shrink-0 text-primary" />
                        <div>
                            <h4 className="font-semibold">Recommendations</h4>
                            <p className="text-sm text-muted-foreground">{result.recommendations}</p>
                        </div>
                    </div>
                </div>
             </CardFooter>
          )}
        </Card>
      </div>
    </section>
  );
}
