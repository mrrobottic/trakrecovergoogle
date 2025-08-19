'use server';
import nodemailer from 'nodemailer';

import { z } from 'zod';

const ClaimFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(1, "Phone number is required."),
  scamType: z.string().min(1, "Please select a scam type."),
  dateOfIncident: z.string().min(1, "Please provide the date of the incident."),
  amountLost: z.coerce.number().min(1, "Amount lost must be greater than 0."),
  platform: z.string().min(2, "Please specify the platform or website."),
  details: z.string().min(20, "Please provide at least 20 characters of details."),
});

// Configure your SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
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

  const formData = validationResult.data;

  // Send email
  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER, // Use your sending email address
      to: "help@trakmint.org", // Recipient email address
      subject: "New Claim Submission",
      text: `
        Full Name: ${formData.fullName}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Scam Type: ${formData.scamType}
        Date of Incident: ${formData.dateOfIncident}
        Amount Lost: ${formData.amountLost}
        Platform: ${formData.platform}
        Details: ${formData.details}
      `,
    });
    console.log("Claim submission email sent successfully.");
  } catch (error) {
    console.error("Error sending claim submission email:", error);
    // You might want to return an error here as well, or log it differently
  }

  return {
    success: true,
    message: "Your claim has been submitted successfully. We will contact you shortly.",
  };
}
