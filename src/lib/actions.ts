'use server';

import { z } from 'zod';
import { assessRecoveryRisk, AssessRecoveryRiskInput, AssessRecoveryRiskOutput } from '@/ai/flows/assess-recovery-risk';

const AssessRecoveryRiskInputSchema = z.object({
  scamType: z.string().min(1, { message: 'Scam type is required.' }),
  amountLost: z.coerce.number().min(1, { message: 'Amount lost must be greater than 0.' }),
  timeElapsed: z.string().min(1, { message: 'Time elapsed is required.' }),
  details: z.string().min(10, { message: 'Please provide more details (at least 10 characters).' }),
});


export async function handleRiskAssessment(
  data: AssessRecoveryRiskInput
): Promise<AssessRecoveryRiskOutput> {

  const validationResult = AssessRecoveryRiskInputSchema.safeParse(data);
  if (!validationResult.success) {
    throw new Error(validationResult.error.errors.map(e => e.message).join(', '));
  }

  try {
    const result = await assessRecoveryRisk(validationResult.data);
    return result;
  } catch (error) {
    console.error("Error assessing risk:", error);
    throw new Error("Failed to assess risk due to a server error. Please try again later.");
  }
}

const ClaimFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().optional(),
  scamType: z.string().min(1, "Please select a scam type."),
  dateOfIncident: z.string().min(1, "Please provide the date of the incident."),
  amountLost: z.coerce.number().min(1, "Amount lost must be greater than 0."),
  platform: z.string().min(2, "Please specify the platform or website."),
  details: z.string().min(20, "Please provide at least 20 characters of details."),
});

export async function handleClaimSubmission(data: unknown) {
  const validationResult = ClaimFormSchema.safeParse(data);

  if (!validationResult.success) {
    return {
      success: false,
      message: validationResult.error.errors.map(e => e.message).join('\n'),
    };
  }

  console.log("New claim submission received:", validationResult.data);
  // Here you would typically send an email, save to a database, etc.

  return {
    success: true,
    message: "Your claim has been submitted successfully. We will contact you shortly.",
  };
}
