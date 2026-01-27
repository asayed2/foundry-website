"use server"

import { type ActionResult, error, success } from "./utils"

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgwaklq"

export interface SponsorFormSchema {
  companyName: string
  contactName: string
  email: string
  events: string[]
  tier: string
  message?: string
}

export async function submitSponsorApplication(
  data: SponsorFormSchema
): Promise<ActionResult<string>> {
  // Basic validation
  if (!data.companyName || !data.contactName || !data.email || !data.events?.length || !data.tier) {
    return error("Please fill in all required fields.")
  }

  try {
    // Submit to Formspree
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        companyName: data.companyName,
        contactName: data.contactName,
        email: data.email,
        events: data.events.join(", "),
        contributionType: data.tier,
        message: data.message || "",
      }),
    })

    if (!response.ok) {
      return error("Failed to submit application. Please try again.")
    }
    
    return success("Thank you for your interest! Our team will reach out within 48 hours.")
  } catch (err) {
    console.error("Formspree submission error:", err)
    return error("Error submitting application. Please try again.")
  }
}

