"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import { submitSponsorApplication, sponsorFormSchema, type SponsorFormSchema } from "@/lib/sponsor-actions"
import { type ActionResult, cn } from "@/lib/utils"
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons"

const UPCOMING_EVENTS = [
  { id: "q1-2026-demo", label: "Q1 2026 Demo Day" },
  { id: "q1-2026-hackathon", label: "Q1 2026 Hackathon" },
  { id: "builder-nights", label: "Monthly Builder Nights" },
  { id: "general", label: "General Partnership" },
]

const SPONSORSHIP_TIERS = [
  { id: "platinum", label: "Platinum" },
  { id: "gold", label: "Gold" },
  { id: "silver", label: "Silver" },
  { id: "custom", label: "Custom" },
]

export function SponsorForm() {
  const [submissionState, setSubmissionState] = useState<ActionResult<string> | null>(null)

  const form = useForm<SponsorFormSchema>({
    resolver: zodResolver(sponsorFormSchema),
    defaultValues: {
      companyName: "",
      contactName: "",
      email: "",
      events: [],
      tier: "",
      message: "",
    },
  })

  async function onSubmit(values: SponsorFormSchema) {
    const state = await submitSponsorApplication(values)
    setSubmissionState(state)

    if (state.success === true) {
      form.reset()
    }
  }

  const inputStyles = cn(
    "w-full bg-transparent border border-[#F1EFE7]/20 px-4 py-3",
    "text-[#F1EFE7] placeholder:text-[#F1EFE7]/40",
    "focus:outline-none focus:border-[#F1EFE7]/50",
    "transition-colors duration-200"
  )

  const labelStyles = "text-[#F1EFE7]/60 text-sm mb-2 block"

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      {/* Success/Error Messages */}
      <AnimatePresence mode="wait">
        {submissionState && (
          <motion.div
            key={submissionState.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={cn(
              "flex items-center gap-3 px-4 py-3 border",
              submissionState.success
                ? "border-green-500/30 bg-green-500/10 text-green-400"
                : "border-red-500/30 bg-red-500/10 text-red-400"
            )}
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            {submissionState.success ? <CheckCircledIcon className="w-5 h-5" /> : <CrossCircledIcon className="w-5 h-5" />}
            <span className="text-sm">
              {submissionState.success ? submissionState.data : submissionState.message}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Row 1: Company & Contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className={labelStyles} style={{ fontFamily: "Arial, sans-serif" }}>
            Company Name *
          </label>
          <input
            {...form.register("companyName")}
            placeholder="Your company"
            className={inputStyles}
            style={{ fontFamily: "Arial, sans-serif" }}
          />
          {form.formState.errors.companyName && (
            <p className="text-red-400 text-xs mt-1">{form.formState.errors.companyName.message}</p>
          )}
        </div>
        <div>
          <label className={labelStyles} style={{ fontFamily: "Arial, sans-serif" }}>
            Contact Name *
          </label>
          <input
            {...form.register("contactName")}
            placeholder="Your name"
            className={inputStyles}
            style={{ fontFamily: "Arial, sans-serif" }}
          />
          {form.formState.errors.contactName && (
            <p className="text-red-400 text-xs mt-1">{form.formState.errors.contactName.message}</p>
          )}
        </div>
      </div>

      {/* Row 2: Email */}
      <div>
        <label className={labelStyles} style={{ fontFamily: "Arial, sans-serif" }}>
          Email *
        </label>
        <input
          {...form.register("email")}
          type="email"
          placeholder="you@company.com"
          className={inputStyles}
          style={{ fontFamily: "Arial, sans-serif" }}
        />
        {form.formState.errors.email && (
          <p className="text-red-400 text-xs mt-1">{form.formState.errors.email.message}</p>
        )}
      </div>

      {/* Row 3: Events Selection */}
      <div>
        <label className={labelStyles} style={{ fontFamily: "Arial, sans-serif" }}>
          Events of Interest *
        </label>
        <div className="grid grid-cols-2 gap-3">
          {UPCOMING_EVENTS.map((event) => (
            <label
              key={event.id}
              className={cn(
                "flex items-center gap-3 px-4 py-3 border cursor-pointer transition-all duration-200",
                form.watch("events")?.includes(event.id)
                  ? "border-[#F1EFE7]/50 bg-[#F1EFE7]/5"
                  : "border-[#F1EFE7]/10 hover:border-[#F1EFE7]/30"
              )}
            >
              <input
                type="checkbox"
                value={event.id}
                {...form.register("events")}
                className="sr-only"
              />
              <div
                className={cn(
                  "w-4 h-4 border flex items-center justify-center transition-colors",
                  form.watch("events")?.includes(event.id)
                    ? "border-[#F1EFE7] bg-[#F1EFE7]"
                    : "border-[#F1EFE7]/40"
                )}
              >
                {form.watch("events")?.includes(event.id) && (
                  <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <span className="text-[#F1EFE7]/80 text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
                {event.label}
              </span>
            </label>
          ))}
        </div>
        {form.formState.errors.events && (
          <p className="text-red-400 text-xs mt-2">{form.formState.errors.events.message}</p>
        )}
      </div>

      {/* Row 4: Tier Selection */}
      <div>
        <label className={labelStyles} style={{ fontFamily: "Arial, sans-serif" }}>
          Sponsorship Tier *
        </label>
        <div className="flex flex-wrap gap-3">
          {SPONSORSHIP_TIERS.map((tier) => (
            <label
              key={tier.id}
              className={cn(
                "px-6 py-3 border cursor-pointer transition-all duration-200",
                form.watch("tier") === tier.id
                  ? "border-[#F1EFE7] bg-[#F1EFE7] text-black"
                  : "border-[#F1EFE7]/20 text-[#F1EFE7]/80 hover:border-[#F1EFE7]/40"
              )}
            >
              <input
                type="radio"
                value={tier.id}
                {...form.register("tier")}
                className="sr-only"
              />
              <span className="text-sm font-medium" style={{ fontFamily: "Arial, sans-serif" }}>
                {tier.label}
              </span>
            </label>
          ))}
        </div>
        {form.formState.errors.tier && (
          <p className="text-red-400 text-xs mt-2">{form.formState.errors.tier.message}</p>
        )}
      </div>

      {/* Row 5: Message */}
      <div>
        <label className={labelStyles} style={{ fontFamily: "Arial, sans-serif" }}>
          Message (optional)
        </label>
        <textarea
          {...form.register("message")}
          placeholder="Tell us about your sponsorship goals..."
          rows={4}
          className={cn(inputStyles, "resize-none")}
          style={{ fontFamily: "Arial, sans-serif" }}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={form.formState.isSubmitting}
        className={cn(
          "w-full py-4 text-sm font-medium transition-all duration-200",
          "bg-[#F1EFE7] text-black hover:bg-[#F1EFE7]/90",
          "disabled:opacity-50 disabled:cursor-not-allowed"
        )}
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        {form.formState.isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
    </form>
  )
}

