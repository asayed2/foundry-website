"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export interface SponsorEvent {
  id: string
  title: string
  date: string
  description: string
  expectedAttendance: string
  audience: {
    founders: number
    investors: number
    engineers: number
  }
  audienceLabels?: {
    first: string
    second: string
    third: string
  }
  sponsorSlots?: {
    available: number
    total: number
  }
  benefits: string[]
  image: string
}

interface SponsorEventCardProps {
  event: SponsorEvent
  index: number
}

export function SponsorEventCard({ event, index }: SponsorEventCardProps) {
  const audienceTotal = event.audience.founders + event.audience.investors + event.audience.engineers

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group border border-[#F1EFE7]/10 bg-[#F1EFE7]/[0.02] hover:border-[#F1EFE7]/20 hover:bg-[#F1EFE7]/[0.04] transition-all duration-300"
    >
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        
{/* Slots Badge - only show if sponsorSlots is provided */}
        {event.sponsorSlots && (
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm border border-[#F1EFE7]/20">
            <span className="text-[#F1EFE7]/80 text-xs" style={{ fontFamily: "Arial, sans-serif" }}>
              {event.sponsorSlots.available}/{event.sponsorSlots.total} slots
            </span>
          </div>
        )}

        {/* Date Badge */}
        <div className="absolute bottom-4 left-4">
          <p className="text-[#F1EFE7]/50 text-xs tracking-[0.15em] uppercase mb-1" style={{ fontFamily: "Arial, sans-serif" }}>
            {event.date}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="text-[#F1EFE7] text-xl md:text-2xl mb-3"
          style={{ fontFamily: "'Times New Roman', serif", letterSpacing: "-0.02em" }}
        >
          {event.title}
        </h3>

        <p
          className="text-[#F1EFE7]/60 text-sm mb-6 line-clamp-2"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          {event.description}
        </p>

        {/* Stats Row */}
        <div className="flex items-center gap-6 mb-6 pb-6 border-b border-[#F1EFE7]/10">
          <div>
            <p className="text-[#F1EFE7] text-2xl font-light" style={{ fontFamily: "'Times New Roman', serif" }}>
              {event.expectedAttendance}
            </p>
            <p className="text-[#F1EFE7]/40 text-xs uppercase tracking-wider" style={{ fontFamily: "Arial, sans-serif" }}>
              Expected
            </p>
          </div>
          <div className="h-10 w-px bg-[#F1EFE7]/10" />
          <div className="flex-1">
            <p className="text-[#F1EFE7]/50 text-xs mb-2" style={{ fontFamily: "Arial, sans-serif" }}>
              Audience Breakdown
            </p>
            <div className="flex gap-1 h-2">
              <div
                className="bg-[#F1EFE7]/60 transition-all duration-300"
                style={{ width: `${(event.audience.founders / audienceTotal) * 100}%` }}
                title={`${event.audience.founders}% Founders`}
              />
              <div
                className="bg-[#F1EFE7]/40 transition-all duration-300"
                style={{ width: `${(event.audience.investors / audienceTotal) * 100}%` }}
                title={`${event.audience.investors}% Investors`}
              />
              <div
                className="bg-[#F1EFE7]/20 transition-all duration-300"
                style={{ width: `${(event.audience.engineers / audienceTotal) * 100}%` }}
                title={`${event.audience.engineers}% Engineers`}
              />
            </div>
            <div className="flex justify-between mt-1.5 text-[10px] text-[#F1EFE7]/40" style={{ fontFamily: "Arial, sans-serif" }}>
              <span>{event.audienceLabels?.first || "Founders"} {event.audience.founders}%</span>
              <span>{event.audienceLabels?.second || "VCs"} {event.audience.investors}%</span>
              <span>{event.audienceLabels?.third || "Engineers"} {event.audience.engineers}%</span>
            </div>
          </div>
        </div>

        {/* Benefits Preview */}
        <div>
          <p className="text-[#F1EFE7]/50 text-xs uppercase tracking-wider mb-3" style={{ fontFamily: "Arial, sans-serif" }}>
            Key Benefits
          </p>
          <div className="flex flex-wrap gap-2">
            {event.benefits.slice(0, 3).map((benefit, i) => (
              <span
                key={i}
                className="px-3 py-1.5 border border-[#F1EFE7]/10 text-[#F1EFE7]/60 text-xs"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                {benefit}
              </span>
            ))}
            {event.benefits.length > 3 && (
              <span
                className="px-3 py-1.5 text-[#F1EFE7]/40 text-xs"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                +{event.benefits.length - 3} more
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

