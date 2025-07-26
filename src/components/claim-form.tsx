'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { handleClaimSubmission } from '@/lib/actions';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle } from 'lucide-react';
import { Separator } from './ui/separator';

const claimFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(1, "Phone number is required."),
  scamType: z.string().min(1, "Please select a scam type."),
  dateOfIncident: z.string().min(1, "Please provide the date of the incident."),
  amountLost: z.coerce.number().min(1, "Amount lost must be greater than 0."),
  platform: z.string().min(2, "Please specify the platform or website."),
  details: z.string().min(20, "Please provide at least 20 characters of details."),
});

type ClaimFormValues = z.infer<typeof claimFormSchema>;

export function ClaimForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm<ClaimFormValues>({
    resolver: zodResolver(claimFormSchema),
    defaultValues: {
        fullName: "",
        email: "",
        phone: "",
        scamType: "",
        dateOfIncident: "",
        amountLost: 0,
        platform: "",
        details: ""
    }
  });

  async function onSubmit(data: ClaimFormValues) {
    setIsLoading(true);
    try {
      const result = await handleClaimSubmission(data);
      if (result.success) {
        setIsSuccess(true);
        toast({
          title: "Submission Successful",
          description: result.message,
        });
      } else {
        toast({
          variant: "destructive",
          title: "Submission Failed",
          description: result.message,
        });
      }
    } catch (error) {
       toast({
          variant: "destructive",
          title: "An Error Occurred",
          description: "Something went wrong. Please try again.",
        });
    } finally {
      setIsLoading(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center p-8">
        <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
        <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
        <p className="text-muted-foreground">
            Your claim has been submitted successfully. Our team will review the details and contact you within 24-48 hours to discuss the next steps.
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-primary font-headline">Get a Free Case Review</h2>
        <p className="text-muted-foreground">Fill out the form to get started.</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address *</FormLabel>
                <FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number *</FormLabel>
                <FormControl><Input type="tel" placeholder="+1 (555) 123-4567" {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
              control={form.control}
              name="amountLost"
              render={({ field }) => (
                  <FormItem>
                  <FormLabel>Amount Lost (USD) *</FormLabel>
                  <FormControl><Input type="number" placeholder="e.g., 5000" {...field} /></FormControl>
                  <FormMessage />
                  </FormItem>
              )}
          />
          <FormField
            control={form.control}
            name="details"
            render={({ field }) => (
              <FormItem>
                <FormLabel>How were you scammed? *</FormLabel>
                <FormControl><Textarea placeholder="Please provide a brief description of what happened." rows={4} {...field} /></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" disabled={isLoading} className="w-full text-lg py-6 font-bold" style={{backgroundColor: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))'}}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Submitting...
              </>
            ) : (
              'Get a Free Review'
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}
