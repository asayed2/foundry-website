"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { SponsorEventCard, type SponsorEvent } from "@/components/sponsor-event-card"
import { SponsorForm } from "@/components/sponsor-form"

// Scroll-triggered fade section wrapper
function FadeInSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { 
    once: false,
    amount: 0.3,
    margin: "-10% 0px -10% 0px"
  })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Upcoming events data
const UPCOMING_EVENTS: SponsorEvent[] = [
  {
    id: "code-workshop-fitler",
    title: "Code Workshop at The Fitler",
    date: "February 2026",
    description: "A 150+ person workshop for people of all skill levels. Come learn, meet others, and be with some of the most ambitious people in the world.",
    expectedAttendance: "150+",
    audience: { founders: 30, investors: 30, engineers: 40 },
    audienceLabels: { first: "Engineers", second: "Beginners", third: "Sponsors/VCs" },
    benefits: ["Workshop branding", "Speaking opportunity", "Direct engagement", "Community presence"],
    image: "/coding-workshop-developers.jpg",
  },
  {
    id: "q1-2026-hackathon",
    title: "Spring Hackathon 2026",
    date: "April 2026",
    description: "A weekend of building, mentorship, and innovation. Following the success of our 150+ attendee Fall hackathon.",
    expectedAttendance: "200+",
    audience: { founders: 30, investors: 15, engineers: 55 },
    benefits: ["Prize category naming", "Mentor access", "Booth space", "Recruiting"],
    image: "/startup-networking-event.png",
  },
  {
    id: "builder-nights",
    title: "Monthly Builder Nights",
    date: "Ongoing",
    description: "Intimate gatherings of 25-40 builders at Foundry House. High-signal networking and debugging sessions.",
    expectedAttendance: "30-40",
    audience: { founders: 50, investors: 10, engineers: 40 },
    benefits: ["Exclusive access", "Direct engagement", "Community presence"],
    image: "/coding-workshop-developers.jpg",
  },
]

// Sponsorship tiers - Hidden for now
// const TIERS = [...]

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-black text-[#F1EFE7]">
      {/* Navigation */}
      <nav className="fixed top-7 left-1/2 -translate-x-1/2 z-[9999]">
        <div className="bg-black/40 backdrop-blur-md border border-[#F1EFE7]/30 px-8 py-4 shadow-lg shadow-black/50 rounded-full flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-black border border-[#F1EFE7]/40 rounded-md flex items-center justify-center hover:border-[#F1EFE7]/60 transition-colors">
              <span className="text-[#F1EFE7] text-sm font-bold italic" style={{ fontFamily: "'Times New Roman', serif", letterSpacing: "-0.03em" }}>f</span>
            </div>
          </Link>
          <Link
            href="/"
            className="text-[#F1EFE7]/80 hover:text-[#F1EFE7] text-sm font-medium transition-colors"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-32 pb-20">
        {/* Subtle gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(241,239,231,0.03)_0%,_transparent_50%)] pointer-events-none" />
        
        <FadeInSection className="relative z-10 max-w-4xl mx-auto text-center">
          <p
            className="text-[#F1EFE7]/40 text-xs tracking-[0.3em] uppercase mb-6"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Sponsorship Opportunities
          </p>
          
          <h1
            className="text-5xl md:text-7xl lg:text-8xl mb-8"
            style={{ fontFamily: "'Times New Roman', serif", letterSpacing: "-0.03em" }}
          >
            Partner With
            <br />
            The Foundry
          </h1>
          
          <p
            className="text-[#F1EFE7]/60 text-lg md:text-xl max-w-2xl mx-auto mb-12"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Connect with Philadelphia's most ambitious builders, founders, and investors. 
            Sponsor our events and become part of the ecosystem.
          </p>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-12 md:gap-16">
            {[
              { value: "500+", label: "Community Members" },
              { value: "150+", label: "Event Attendees" },
              { value: "17", label: "Brand Partners" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl md:text-5xl text-[#F1EFE7] mb-2" style={{ fontFamily: "'Times New Roman', serif" }}>
                  {stat.value}
                </p>
                <p className="text-[#F1EFE7]/40 text-xs tracking-wider uppercase" style={{ fontFamily: "Arial, sans-serif" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-[#F1EFE7]/30 to-transparent" />
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="relative py-32 px-6 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F1EFE7]/[0.01] to-transparent pointer-events-none" />
        
        <FadeInSection className="relative z-10 max-w-7xl mx-auto">
          <div className="mb-16">
            <p
              className="text-[#F1EFE7]/40 text-xs tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Upcoming Events
            </p>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "'Times New Roman', serif", letterSpacing: "-0.03em" }}
            >
              Sponsorship Opportunities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {UPCOMING_EVENTS.map((event, index) => (
              <SponsorEventCard key={event.id} event={event} index={index} />
            ))}
          </div>
        </FadeInSection>
      </section>

      {/* Sponsorship Tiers Section - Hidden for now */}
      {/* 
      <section className="relative py-32 px-6 md:px-12 lg:px-20">
        ... Tiers content hidden ...
      </section>
      */}

      {/* Application Form Section */}
      <section className="relative py-32 px-6 md:px-12 lg:px-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(241,239,231,0.03)_0%,_transparent_60%)] pointer-events-none" />
        
        <FadeInSection className="relative z-10 max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-[#F1EFE7]/40 text-xs tracking-[0.2em] uppercase mb-4"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Get Started
            </p>
            <h2
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: "'Times New Roman', serif", letterSpacing: "-0.03em" }}
            >
              Apply to Sponsor
            </h2>
            <p
              className="text-[#F1EFE7]/50 text-base"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Fill out the form below and our team will be in touch within 48 hours.
            </p>
          </div>

          <div className="border border-[#F1EFE7]/10 p-8 md:p-12 bg-[#F1EFE7]/[0.02]">
            <SponsorForm />
          </div>
        </FadeInSection>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#F1EFE7]/10 py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black border border-[#F1EFE7]/40 rounded-md flex items-center justify-center">
              <span className="text-[#F1EFE7] text-sm font-bold italic" style={{ fontFamily: "'Times New Roman', serif" }}>f</span>
            </div>
            <span className="text-[#F1EFE7]/50 text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
              The Foundry — Philadelphia
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="text-[#F1EFE7]/50 hover:text-[#F1EFE7] text-sm transition-colors"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Home
            </Link>
            <Link
              href="mailto:sponsors@foundry.community"
              className="text-[#F1EFE7]/50 hover:text-[#F1EFE7] text-sm transition-colors"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  )
}

