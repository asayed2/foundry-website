"use server"

import { type ActionResult, error, success } from "./utils"
import { newsletterSchema } from "./schema"

const emailStorage = new Set<string>()

export const subscribe = async (email: string): Promise<ActionResult<string>> => {
  const parsed = newsletterSchema.safeParse({ email })

  if (!parsed.success) {
    return error(parsed.error.message)
  }

  try {
    if (emailStorage.has(parsed.data.email)) {
      return success("Email is already subscribed")
    }

    emailStorage.add(parsed.data.email)
    return success("Thank you for subscribing!")
  } catch (err) {
    return error(err instanceof Error ? err.message : "Error subscribing to email list")
  }
}

export const getDemoState = async () => {
  return false // Always return false since we removed the demo dependency
}
