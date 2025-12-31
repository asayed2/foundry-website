"use server"

import { type ActionResult, error, success } from "./utils"
import { z } from "zod"

export const sponsorFormSchema = z.object({
  companyName: z.string().min(1, { message: "Company name is required." }),
  contactName: z.string().min(1, { message: "Contact name is required." }),
  email: z.string().min(1, { message: "Email is required." }).email({ message: "Invalid email." }),
  events: z.array(z.string()).min(1, { message: "Please select at least one event." }),
  tier: z.string().min(1, { message: "Please select a sponsorship tier." }),
  message: z.string().optional(),
})

export type SponsorFormSchema = z.infer<typeof sponsorFormSchema>

// In-memory storage for demo purposes
const sponsorApplications = new Map<string, SponsorFormSchema>()

export const submitSponsorApplication = async (
  data: SponsorFormSchema
): Promise<ActionResult<string>> => {
  const parsed = sponsorFormSchema.safeParse(data)

  if (!parsed.success) {
    return error(parsed.error.errors[0]?.message || "Invalid form data")
  }

  try {
    // Check if already submitted
    if (sponsorApplications.has(parsed.data.email)) {
      return success("We've already received your application. We'll be in touch soon!")
    }

    // Store application
    sponsorApplications.set(parsed.data.email, parsed.data)
    
    return success("Thank you for your interest! Our team will reach out within 48 hours.")
  } catch (err) {
    return error(err instanceof Error ? err.message : "Error submitting application")
  }
}

