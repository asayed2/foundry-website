"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { EventCard, type EventData } from "@/components/event-card"

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

// Default contribute form URL
const DEFAULT_CONTRIBUTE_URL = "https://forms.gle/eqmwtHuwrnafYych7"

// Past Events
const PAST_EVENTS: EventData[] = [
  {
    id: "catalyst-2025",
    title: "The Catalyst",
    date: "Oct 4",
    year: "2025",
    description: "Our inaugural mixer event with 3 VC partners in attendance. An intimate setting with roughly 20 attendees—real conversations, real outcomes, and the fire-starter event that launched the Foundry.",
    image: "/startup-pitch.png",
    tags: ["Mixer", "VC Partners", "Networking"],
    attendance: "20+",
    contributeUrl: DEFAULT_CONTRIBUTE_URL,
    isPast: true,
  },
  {
    id: "hackathon-2025",
    title: "Startup in a Weekend",
    date: "Nov 21-23",
    year: "2025",
    description: "In partnership with KW Empower, we hosted one of the largest hackathons in Philadelphia. Over 150 attendees, 17 brand partners, $10,000 in prizes, and 15+ deals brought into our pipeline. Attendees received direct mentoring from Microsoft executives, Google leads, and Mercor founding engineers.",
    image: "/startup-networking-event.png",
    tags: ["Hackathon", "KW Empower", "$10K Prizes"],
    attendance: "150+",
    contributeUrl: DEFAULT_CONTRIBUTE_URL,
    isPast: true,
  },
  {
    id: "builder-night-dec-2025",
    title: "Builder Night × Code & Coffee",
    date: "Dec 21",
    year: "2025",
    description: "A high-signal night of debugging, conversations, and connections. 25 builders came together at Foundry House to program, work on their startups, and get advice on their projects.",
    image: "/coding-workshop-developers.jpg",
    tags: ["Code & Coffee", "Debugging", "Community"],
    attendance: "25",
    contributeUrl: DEFAULT_CONTRIBUTE_URL,
    isPast: true,
  },
  {
    id: "nexhacks-cmu-2026",
    title: "Nexhacks at CMU",
    date: "Jan 17-18",
    year: "2026",
    description: "Co-hosted with Nexhacks Org at Carnegie Mellon University. A massive 1,500+ person hackathon with over 40 VCs in attendance, $50,000 in prizes distributed, and high-impact connections made between builders and investors.",
    image: "/startup-networking-event.png",
    tags: ["Nexhacks", "CMU", "$50K Prizes", "40+ VCs"],
    attendance: "1,500+",
    contributeUrl: DEFAULT_CONTRIBUTE_URL,
    isPast: true,
  },
]

// Upcoming Events
const UPCOMING_EVENTS: EventData[] = [
  {
    id: "demo-day-q1-2026",
    title: "Q1 2026 Demo Day",
    date: "March",
    year: "2026",
    description: "Our flagship event where portfolio companies pitch to top VCs and angel investors. High-visibility opportunity for sponsors with main stage branding and speaking slots.",
    image: "/startup-pitch-event.png",
    tags: ["Demo Day", "Pitching", "Investors"],
    attendance: "200+",
    contributeUrl: DEFAULT_CONTRIBUTE_URL,
    isPast: false,
  },
  {
    id: "hackathon-spring-2026",
    title: "Spring Hackathon 2026",
    date: "April",
    year: "2026",
    description: "A weekend of building, mentorship, and innovation. Following the success of our 150+ attendee Fall hackathon, we&apos;re scaling up with more prizes, more mentors, and more opportunities.",
    image: "/startup-networking-event.png",
    tags: ["Hackathon", "Building", "Prizes"],
    attendance: "200+",
    contributeUrl: DEFAULT_CONTRIBUTE_URL,
    isPast: false,
  },
  {
    id: "builder-nights-ongoing",
    title: "Monthly Builder Nights",
    date: "Ongoing",
    year: "2026",
    description: "Intimate gatherings of 25-40 builders at Foundry House. High-signal networking, debugging sessions, and startup advice from experienced founders and engineers.",
    image: "/coding-workshop-developers.jpg",
    tags: ["Monthly", "Networking", "Building"],
    attendance: "30-40",
    contributeUrl: DEFAULT_CONTRIBUTE_URL,
    isPast: false,
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Simple Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#F1EFE7]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-black border border-[#F1EFE7]/40 rounded-md flex items-center justify-center">
              <span className="text-[#F1EFE7] text-sm font-bold italic" style={{ fontFamily: "'Times New Roman', serif", letterSpacing: "-0.03em" }}>f</span>
            </div>
            <span className="text-[#F1EFE7] text-sm font-medium" style={{ fontFamily: "Arial, sans-serif" }}>
              Back to Home
            </span>
          </Link>
          <Link
            href="/sponsors"
            className="text-[#F1EFE7]/70 hover:text-[#F1EFE7] text-sm transition-colors"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Become a Sponsor →
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <FadeInSection>
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="hidden md:block h-px w-24 bg-gradient-to-r from-transparent to-[#F1EFE7]/30" />
              <h1 
                className="text-5xl md:text-6xl lg:text-7xl text-center tracking-tighter"
                style={{ color: "#F1EFE7", fontFamily: "'Times New Roman', serif", letterSpacing: "-0.04em" }}
              >
                <span className="italic font-light">Our</span> Events
              </h1>
              <div className="hidden md:block h-px w-24 bg-gradient-to-l from-transparent to-[#F1EFE7]/30" />
            </div>
            <p
              className="text-center text-base md:text-lg text-[#F1EFE7] opacity-60 max-w-2xl mx-auto leading-relaxed font-light"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Building community through meaningful gatherings, hackathons, and workshops. 
              Join us to connect with founders, investors, and builders.
            </p>
          </div>
        </FadeInSection>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 md:py-24">
        <FadeInSection>
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="mb-12">
              <p 
                className="text-[#F1EFE7]/40 text-xs tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Coming Up
              </p>
              <h2 
                className="text-3xl md:text-4xl text-[#F1EFE7]"
                style={{ fontFamily: "'Times New Roman', serif", letterSpacing: "-0.03em" }}
              >
                Upcoming Events
              </h2>
            </div>
            
            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {UPCOMING_EVENTS.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#F1EFE7]/20 to-transparent" />
      </div>

      {/* Past Events Section */}
      <section className="py-16 md:py-24">
        <FadeInSection>
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
            <div className="mb-12">
              <p 
                className="text-[#F1EFE7]/40 text-xs tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Looking Back
              </p>
              <h2 
                className="text-3xl md:text-4xl text-[#F1EFE7]"
                style={{ fontFamily: "'Times New Roman', serif", letterSpacing: "-0.03em" }}
              >
                Past Events
              </h2>
            </div>
            
            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PAST_EVENTS.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t border-[#F1EFE7]/10">
        <FadeInSection>
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 text-center">
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl text-[#F1EFE7] mb-6"
              style={{ fontFamily: "'Times New Roman', serif", letterSpacing: "-0.04em" }}
            >
              Want to <span className="italic font-light">host</span> with us?
            </h2>
            <p
              className="text-[#F1EFE7]/60 text-base md:text-lg max-w-xl mx-auto mb-10 font-light"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Partner with the Foundry to reach Philadelphia&apos;s most ambitious builders and founders.
            </p>
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link
                href="/sponsors"
                className="inline-flex items-center gap-2 bg-[#F1EFE7] text-black px-8 py-4 text-sm font-medium hover:bg-white transition-colors duration-200 tracking-[0.1em] uppercase"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Become a Sponsor
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href={DEFAULT_CONTRIBUTE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#F1EFE7]/30 text-[#F1EFE7] px-8 py-4 text-sm font-medium hover:border-[#F1EFE7]/60 hover:bg-[#F1EFE7]/5 transition-all duration-200 tracking-[0.1em] uppercase"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Join the Foundry
              </Link>
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-[#F1EFE7]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p 
              className="text-[#F1EFE7]/40 text-sm"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              © 2026 The Foundry. Philadelphia, PA.
            </p>
            <div className="flex items-center gap-6">
              <Link 
                href="/" 
                className="text-[#F1EFE7]/40 hover:text-[#F1EFE7]/70 text-sm transition-colors"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Home
              </Link>
              <Link 
                href="/sponsors" 
                className="text-[#F1EFE7]/40 hover:text-[#F1EFE7]/70 text-sm transition-colors"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Sponsors
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
