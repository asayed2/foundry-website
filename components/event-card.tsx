"use client"

import Image from "next/image"
import Link from "next/link"

export interface EventData {
  id: string
  title: string
  date: string
  year: string
  description: string
  image: string
  tags?: string[]
  attendance?: string
  contributeUrl: string
  isPast?: boolean
}

interface EventCardProps {
  event: EventData
}

export function EventCard({ event }: EventCardProps) {
  return (
    <div className="group relative bg-[#0c0c0c] border border-[#F1EFE7]/10 overflow-hidden hover:bg-[#141414] transition-colors duration-300">
      {/* Image */}
      <div className="relative h-48 md:h-56 w-full overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
        />
        {/* Date badge */}
        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm border border-[#F1EFE7]/20 px-3 py-1.5">
          <span 
            className="text-[#F1EFE7] text-xs tracking-[0.15em] uppercase"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            {event.date}
          </span>
        </div>
        {/* Past event indicator */}
        {event.isPast && (
          <div className="absolute top-4 right-4 bg-[#F1EFE7]/10 backdrop-blur-sm border border-[#F1EFE7]/20 px-3 py-1.5">
            <span 
              className="text-[#F1EFE7]/60 text-xs tracking-[0.1em] uppercase"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Past
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        {/* Year */}
        <p 
          className="text-[#F1EFE7]/40 text-xs tracking-[0.2em] uppercase mb-2"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          {event.year}
        </p>

        {/* Title */}
        <h3 
          className="text-[#F1EFE7] text-xl md:text-2xl mb-3"
          style={{ fontFamily: "'Times New Roman', serif", letterSpacing: "-0.03em" }}
        >
          {event.title}
        </h3>

        {/* Description */}
        <p 
          className="text-[#F1EFE7]/60 text-sm font-light mb-4 line-clamp-3"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          {event.description}
        </p>

        {/* Tags */}
        {event.tags && event.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {event.tags.map((tag, index) => (
              <span
                key={index}
                className="text-[#F1EFE7]/40 text-xs px-2 py-1 border border-[#F1EFE7]/10"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Attendance */}
        {event.attendance && (
          <p 
            className="text-[#F1EFE7]/50 text-xs mb-6"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            {event.attendance} attendees
          </p>
        )}

        {/* Contribute Button */}
        <Link
          href={event.contributeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#F1EFE7] text-black px-6 py-3 text-sm font-medium hover:bg-white transition-colors duration-200 tracking-[0.1em] uppercase"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Contribute
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
