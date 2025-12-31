"use client"

import { useState, useRef, useEffect } from "react"
import { Background } from "@/components/background"
import { Footer } from "@/components/footer"
import { FloatingHeader } from "@/components/floating-header"
import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons"
import { buttonVariants } from "@/components/ui/button"
import XLogoIcon from "@/components/icons/x"
import { socialLinks } from "@/lib/constants"
import Link from "next/link"
import Image from "next/image"
import { Modal } from "@/components/ui/modal"
import { Timeline } from "@/components/ui/timeline"
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion"

// Scroll-triggered fade section wrapper - fades in when scrolling down, fades out when scrolling up
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
      transition={{ 
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Partners data
const PARTNERS = [
  {
    name: "Dorm Room Fund",
    type: "Student-run VC",
    description: "The premier student-run venture fund backing student founders.",
    url: "https://www.dormroomfund.com"
  },
  {
    name: "Afore Capital",
    type: "Early Stage",
    description: "Pre-seed fund investing in technical founders.",
    url: "https://www.afore.vc"
  },
  {
    name: "Pear VC",
    type: "Pre-Seed & Seed",
    description: "Supporting exceptional founders from the earliest stages.",
    url: "https://pear.vc"
  },
  {
    name: "Greylock",
    type: "AI-First VC",
    description: "Legendary Silicon Valley venture firm backing iconic companies.",
    url: "https://greylock.com"
  },
  {
    name: "NVX Fund",
    type: "Venture Capital",
    description: "Strategic investment fund focused on breakthrough technologies.",
    url: "#"
  },
  {
    name: "KW Empower",
    type: "Real Estate Tech",
    description: "Keller Williams' innovation arm empowering real estate entrepreneurs.",
    url: "#"
  },
  {
    name: "Breakthrough Ventures",
    type: "Deep Tech VC",
    description: "Investing in transformative science and technology companies.",
    url: "#"
  }
]

export default function Home() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false)
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0)

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Auto-rotate partners carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPartnerIndex((prev) => (prev + 4) % PARTNERS.length)
    }, 5000) // Rotate every 5 seconds
    
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <FloatingHeader />

      <main className="p-inset h-[100dvh] w-full border-border text-border bg-border relative z-10">
        <div className="relative h-full w-full">
          <div className="absolute top-8 right-8 flex gap-4 z-20">
            <Link
              target="_blank"
              className={buttonVariants({ size: "icon", variant: "ghost" })}
              href={socialLinks.instagram}
            >
              <InstagramLogoIcon className="size-5 text-white" />
            </Link>
            <Link target="_blank" className={buttonVariants({ size: "icon", variant: "ghost" })} href={socialLinks.x}>
              <XLogoIcon className="size-5 text-white" />
            </Link>
            <Link
              target="_blank"
              className={buttonVariants({ size: "icon", variant: "ghost" })}
              href={socialLinks.github}
            >
              <GitHubLogoIcon className="size-5 text-white" />
            </Link>
          </div>
          <Background src="/istockphoto-1421524030-640_adpp_is.mp4" placeholder="/alt-placeholder.png" />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <div className="relative px-8 md:px-16 py-12 md:py-20 rounded-3xl md:rounded-[3rem] max-w-4xl mx-auto">

              <h1 className="relative font-serif text-white text-7xl md:text-9xl lg:text-[10rem] leading-[0.9] md:leading-[0.8] text-center [text-shadow:0_4px_12px_rgba(0,0,0,0.3)]">
                the
                <br />
                <span className="italic font-serif text-7xl md:text-9xl lg:text-[10rem]">foundry</span>
              </h1>
            </div>
          </div>
          <Footer />
        </div>
      </main>

      {/* Partners/Backed By Section */}
      <section id="partners" className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-center">
        {/* Subtle ambient gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F1EFE7]/[0.02] via-transparent to-transparent pointer-events-none" />
        
        <FadeInSection className="relative z-10 flex flex-col items-center justify-center px-8">
          {/* Decorative element */}
          <div className="flex justify-center mb-8">
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-[#F1EFE7]/30" />
        </div>

          <p
            className="text-[10px] md:text-xs font-medium tracking-[0.4em] uppercase text-center mb-20"
            style={{ color: "#F1EFE7", opacity: 0.4, fontFamily: "Arial, sans-serif" }}
          >
            Backed by
          </p>
          
          <div className="w-full overflow-hidden relative">
              {/* Gradient overlays for smooth fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-40 md:w-64 bg-gradient-to-r from-black via-black/90 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-40 md:w-64 bg-gradient-to-l from-black via-black/90 to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex animate-scroll-left">
                {/* First set of logos */}
                <div className="flex items-center gap-16 md:gap-24 px-12 shrink-0">
                  <Link
                    href="https://www.avax.network"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-44 h-12 md:w-56 md:h-14 flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
                  >
                    <img
                      src="/avalanche-logo.png"
                      alt="Avalanche"
                      className="max-h-full max-w-full object-contain"
                    />
                  </Link>
                  <Link
                    href="https://www.dormroomfund.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-44 h-12 md:w-56 md:h-14 flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
                  >
                    <img
                      src="/dorm-room-fund-logo.svg"
                      alt="Dorm Room Fund"
                      className="max-h-full max-w-full object-contain filter brightness-0 invert"
                    />
                  </Link>
                  <Link
                    href="https://www.afore.vc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-44 h-12 md:w-56 md:h-14 flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
                  >
                    <img
                      src="/afore-capital-logo.png"
                      alt="Afore Capital"
                      className="max-h-full max-w-full object-contain filter brightness-0 invert"
                    />
                  </Link>
                  <Link
                    href="https://pear.vc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-44 h-12 md:w-56 md:h-14 flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
                  >
                    <img
                      src="/pear-vc-logo.png"
                      alt="Pear VC"
                      className="max-h-full max-w-full object-contain filter brightness-0 invert"
                    />
                  </Link>
                  <Link
                    href="https://lovable.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-44 h-12 md:w-56 md:h-14 flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
                  >
                    <img 
                      src="/lovable-logo.png" 
                      alt="Lovable" 
                      className="max-h-full max-w-full object-contain"
                    />
                  </Link>
                  <Link
                    href="https://adobe.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-44 h-12 md:w-56 md:h-14 flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
                  >
                    <img
                      src="/adobe-logo.png"
                      alt="Adobe"
                      className="max-h-full max-w-full object-contain filter brightness-0 invert"
                    />
                  </Link>
                  <Link
                    href="https://www.perplexity.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-44 h-12 md:w-56 md:h-14 flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
                  >
                    <img
                      src="/off-white-logo.png"
                      alt="Off-White"
                      className="max-h-full max-w-full object-contain filter brightness-0 invert"
                    />
                  </Link>
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center gap-16 md:gap-24 px-12 shrink-0">
                  <Link
                    href="https://www.avax.network"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-44 h-12 md:w-56 md:h-14 flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
                  >
                    <img
                      src="/avalanche-logo.png"
                      alt="Avalanche"
                      className="max-h-full max-w-full object-contain"
                    />
                  </Link>
                  <Link
                    href="https://www.dormroomfund.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-44 h-12 md:w-56 md:h-14 flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
                  >
                    <img
                      src="/dorm-room-fund-logo.svg"
                      alt="Dorm Room Fund"
                      className="max-h-full max-w-full object-contain filter brightness-0 invert"
                    />
                  </Link>
                  <Link
                    href="https://www.afore.vc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-44 h-12 md:w-56 md:h-14 flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
                  >
                    <img
                      src="/afore-capital-logo.png"
                      alt="Afore Capital"
                      className="max-h-full max-w-full object-contain filter brightness-0 invert"
                    />
                  </Link>
                  <Link
                    href="https://pear.vc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-44 h-12 md:w-56 md:h-14 flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
                  >
                    <img
                      src="/pear-vc-logo.png"
                      alt="Pear VC"
                      className="max-h-full max-w-full object-contain filter brightness-0 invert"
                    />
                  </Link>
                  <Link
                    href="https://lovable.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-44 h-12 md:w-56 md:h-14 flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
                  >
                    <img 
                      src="/lovable-logo.png" 
                      alt="Lovable" 
                      className="max-h-full max-w-full object-contain"
                    />
                  </Link>
                  <Link
                    href="https://adobe.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-44 h-12 md:w-56 md:h-14 flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
                  >
                    <img
                      src="/adobe-logo.png"
                      alt="Adobe"
                      className="max-h-full max-w-full object-contain filter brightness-0 invert"
                    />
                  </Link>
                  <Link
                    href="https://www.perplexity.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-44 h-12 md:w-56 md:h-14 flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
                  >
                    <img
                      src="/off-white-logo.png"
                      alt="Off-White"
                      className="max-h-full max-w-full object-contain filter brightness-0 invert"
                    />
                  </Link>
                </div>
                {/* Third set for extra smoothness */}
                <div className="flex items-center gap-16 md:gap-24 px-12 shrink-0">
                  <Link
                    href="https://www.avax.network"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-44 h-12 md:w-56 md:h-14 flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
                  >
                    <img
                      src="/avalanche-logo.png"
                      alt="Avalanche"
                      className="max-h-full max-w-full object-contain"
                    />
                  </Link>
                  <Link
                    href="https://www.dormroomfund.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-44 h-12 md:w-56 md:h-14 flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
                  >
                    <img
                      src="/dorm-room-fund-logo.svg"
                      alt="Dorm Room Fund"
                      className="max-h-full max-w-full object-contain filter brightness-0 invert"
                    />
                  </Link>
                  <Link
                    href="https://www.afore.vc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-44 h-12 md:w-56 md:h-14 flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
                  >
                    <img
                      src="/afore-capital-logo.png"
                      alt="Afore Capital"
                      className="max-h-full max-w-full object-contain filter brightness-0 invert"
                    />
                  </Link>
                  <Link
                    href="https://pear.vc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-44 h-12 md:w-56 md:h-14 flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
                  >
                    <img
                      src="/pear-vc-logo.png"
                      alt="Pear VC"
                      className="max-h-full max-w-full object-contain filter brightness-0 invert"
                    />
                  </Link>
                  <Link
                    href="https://lovable.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-44 h-12 md:w-56 md:h-14 flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
                  >
                    <img 
                      src="/lovable-logo.png" 
                      alt="Lovable" 
                      className="max-h-full max-w-full object-contain"
                    />
                  </Link>
                  <Link
                    href="https://adobe.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-44 h-12 md:w-56 md:h-14 flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
                  >
                    <img
                      src="/adobe-logo.png"
                      alt="Adobe"
                      className="max-h-full max-w-full object-contain filter brightness-0 invert"
                    />
                  </Link>
                  <Link
                    href="https://www.perplexity.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-44 h-12 md:w-56 md:h-14 flex items-center justify-center shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
                  >
                    <img
                      src="/off-white-logo.png"
                      alt="Off-White"
                      className="max-h-full max-w-full object-contain filter brightness-0 invert"
                    />
                  </Link>
                </div>
              </div>
            </div>
          
          {/* Decorative bottom element */}
          <div className="flex justify-center mt-20">
            <div className="w-px h-12 bg-gradient-to-t from-transparent to-[#F1EFE7]/30" />
            </div>
        </FadeInSection>
      </section>

      {/* About Section */}
      <section id="about" className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-center">
        {/* Subtle radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(241,239,231,0.03)_0%,_transparent_70%)] pointer-events-none" />
        
        <FadeInSection className="relative z-10 flex flex-col items-center justify-center px-6 md:px-12 lg:px-20">
          <div className="w-full max-w-6xl mx-auto">
            {/* Decorative top element */}
            <div className="flex justify-center mb-12">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#F1EFE7]/30 to-[#F1EFE7]/10" />
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-8xl mb-16 text-center tracking-tighter" style={{ color: "#F1EFE7", fontFamily: "'Times New Roman', serif", letterSpacing: "-0.04em" }}>
              About <span className="italic font-light">Us</span>
            </h2>

            {/* Two-column layout on larger screens */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div className="space-y-6">
                <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#F1EFE7]/40" style={{ fontFamily: "Arial, sans-serif" }}>Our Mission</span>
                <p
                  className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed"
                  style={{ color: "#F1EFE7", opacity: 0.9, fontFamily: "Arial, sans-serif" }}
                >
                  Foundry is the first builder-led community in Philadelphia that's actually building alongside its members.
                </p>
        </div>

              <div className="space-y-6">
                <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-[#F1EFE7]/40" style={{ fontFamily: "Arial, sans-serif" }}>Our Approach</span>
                <p
                  className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed"
                  style={{ color: "#F1EFE7", opacity: 0.9, fontFamily: "Arial, sans-serif" }}
                >
                  We started by searching for the right resources—VC connections, partnerships, go-to-market guidance—then decided to create them ourselves.
                </p>
              </div>
        </div>

            {/* Centered tagline */}
            <div className="mt-20 text-center">
              <p
                className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed max-w-3xl mx-auto italic"
                style={{ color: "#F1EFE7", opacity: 0.7, fontFamily: "'Times New Roman', serif", letterSpacing: "-0.03em" }}
              >
                "We genuinely care, and that's what sets us apart."
              </p>
            </div>
            
            {/* Decorative bottom element */}
            <div className="flex justify-center mt-16">
              <div className="h-px w-48 bg-gradient-to-r from-transparent via-[#F1EFE7]/20 to-transparent" />
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Spacer between About and Companies */}
      <section className="relative h-[50vh] w-full overflow-hidden bg-black flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F1EFE7]/[0.01] to-transparent pointer-events-none" />
        <FadeInSection className="relative z-10 flex flex-col items-center gap-6">
          <div className="w-px h-24 bg-gradient-to-b from-[#F1EFE7]/20 via-[#F1EFE7]/10 to-transparent" />
          <div className="w-2 h-2 rounded-full bg-[#F1EFE7]/20" />
          <div className="w-px h-24 bg-gradient-to-t from-[#F1EFE7]/20 via-[#F1EFE7]/10 to-transparent" />
        </FadeInSection>
      </section>

      <section id="companies" className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-center">
        {/* Subtle ambient gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F1EFE7]/[0.02] to-transparent pointer-events-none" />
        
        <FadeInSection className="relative z-10 flex flex-col h-full w-full">
          {/* Minimal header */}
          <div className="flex items-center justify-center py-6">
            <span className="text-[11px] md:text-xs font-medium tracking-[0.3em] uppercase text-[#F1EFE7]/40" style={{ fontFamily: "Arial, sans-serif" }}>
              Our Companies
            </span>
        </div>

          {/* Full-bleed cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#F1EFE7]/10">
              <Link
                href="https://entropytoorder.xyz"
                target="_blank"
                rel="noopener noreferrer"
              className="group bg-[#0a0a0a] p-8 md:p-12 lg:p-14 flex flex-col transition-all duration-300 hover:bg-[#111]"
            >
              <div className="flex items-center justify-between mb-8 md:mb-12">
                <span className="text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase text-[#F1EFE7]/40" style={{ fontFamily: "Arial, sans-serif" }}>Seed Round</span>
                <svg className="w-5 h-5 text-[#F1EFE7]/30 group-hover:text-[#F1EFE7]/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
                    </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-[#F1EFE7] group-hover:text-white transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>
                    ETO
                  </h3>
                <p className="text-sm md:text-base leading-relaxed text-[#F1EFE7]/50 group-hover:text-[#F1EFE7]/70 transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>
                  Web 3 finance company creating synthetic assets bringing real world value on-chain.
                  </p>
                </div>
              </Link>

            <div className="group bg-[#0a0a0a] p-8 md:p-12 lg:p-14 flex flex-col transition-all duration-300 hover:bg-[#111]">
              <div className="flex items-center justify-between mb-8 md:mb-12">
                <span className="text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase text-[#F1EFE7]/40" style={{ fontFamily: "Arial, sans-serif" }}>Pre-Seed</span>
                    </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-[#F1EFE7] group-hover:text-white transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>
                  Deal Nest
                  </h3>
                <p className="text-sm md:text-base leading-relaxed text-[#F1EFE7]/50 group-hover:text-[#F1EFE7]/70 transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>
                  AI-powered deal flow management for venture capital firms.
                  </p>
                </div>
              </div>

            <div className="group bg-[#0a0a0a] p-8 md:p-12 lg:p-14 flex flex-col transition-all duration-300 hover:bg-[#111]">
              <div className="flex items-center justify-between mb-8 md:mb-12">
                <span className="text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase text-[#F1EFE7]/40" style={{ fontFamily: "Arial, sans-serif" }}>Seed Round</span>
                    </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-[#F1EFE7] group-hover:text-white transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>
                    Ulterius
                  </h3>
                <p className="text-sm md:text-base leading-relaxed text-[#F1EFE7]/50 group-hover:text-[#F1EFE7]/70 transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>
                    Innovative technology solutions for the modern enterprise.
                  </p>
                </div>
              </div>

            <div className="group bg-[#0a0a0a] p-8 md:p-12 lg:p-14 flex flex-col transition-all duration-300 hover:bg-[#111]">
              <div className="flex items-center justify-between mb-8 md:mb-12">
                <span className="text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase text-[#F1EFE7]/40" style={{ fontFamily: "Arial, sans-serif" }}>Seed Round</span>
                    </div>
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-[#F1EFE7] group-hover:text-white transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>
                  Velric AI
                  </h3>
                <p className="text-sm md:text-base leading-relaxed text-[#F1EFE7]/50 group-hover:text-[#F1EFE7]/70 transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>
                  Enterprise AI infrastructure for automated decision intelligence.
                  </p>
                </div>
                </div>
              </div>
        </FadeInSection>
      </section>

      {/* Spacer between Companies and Partners */}
      <section className="relative h-[50vh] w-full overflow-hidden bg-black flex flex-col items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F1EFE7]/[0.01] to-transparent pointer-events-none" />
        <FadeInSection className="relative z-10 flex flex-col items-center gap-6">
          <div className="w-px h-24 bg-gradient-to-b from-[#F1EFE7]/20 via-[#F1EFE7]/10 to-transparent" />
          <div className="w-2 h-2 rounded-full bg-[#F1EFE7]/20" />
          <div className="w-px h-24 bg-gradient-to-t from-[#F1EFE7]/20 via-[#F1EFE7]/10 to-transparent" />
        </FadeInSection>
      </section>

      <section id="vcs" className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-center">
        {/* Subtle ambient gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#F1EFE7]/[0.02] to-transparent pointer-events-none" />
        
        <FadeInSection className="relative z-10 flex flex-col h-full w-full">
          {/* Minimal header */}
          <div className="flex items-center justify-center py-6">
            <span className="text-[11px] md:text-xs font-medium tracking-[0.3em] uppercase text-[#F1EFE7]/40" style={{ fontFamily: "Arial, sans-serif" }}>
              Our Partners
            </span>
          </div>

{/* Full-bleed cards carousel */}
          <div className="flex-1 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPartnerIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#F1EFE7]/10"
              >
                {PARTNERS.slice(currentPartnerIndex, currentPartnerIndex + 4).concat(
                  PARTNERS.slice(0, Math.max(0, (currentPartnerIndex + 4) - PARTNERS.length))
                ).slice(0, 4).map((partner, idx) => (
              <Link
                    key={`${partner.name}-${currentPartnerIndex}-${idx}`}
                    href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                    className="group bg-[#0a0a0a] p-8 md:p-12 lg:p-14 flex flex-col transition-all duration-300 hover:bg-[#111]"
                  >
                    <div className="flex items-center justify-between mb-8 md:mb-12">
                      <span className="text-[10px] md:text-[11px] font-medium tracking-[0.2em] uppercase text-[#F1EFE7]/40" style={{ fontFamily: "Arial, sans-serif" }}>
                        {partner.type}
                      </span>
                      <svg className="w-5 h-5 text-[#F1EFE7]/30 group-hover:text-[#F1EFE7]/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </div>
                    <div className="flex-1 flex flex-col justify-center">
                      <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-[#F1EFE7] group-hover:text-white transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>
                        {partner.name}
                  </h3>
                      <p className="text-sm md:text-base leading-relaxed text-[#F1EFE7]/50 group-hover:text-[#F1EFE7]/70 transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>
                        {partner.description}
                  </p>
                </div>
                  </Link>
                ))}
              </motion.div>
            </AnimatePresence>
              </div>

          {/* Navigation arrows and indicators */}
          <div className="flex items-center justify-center gap-4 md:gap-8 py-6 px-4">
            {/* Left arrow */}
            <button
              onClick={() => setCurrentPartnerIndex((prev) => (prev - 4 + PARTNERS.length) % PARTNERS.length)}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-[#F1EFE7]/20 bg-black/40 backdrop-blur-sm hover:border-[#F1EFE7]/40 hover:bg-black/60 transition-all duration-300 group"
              aria-label="Previous partners"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-[#F1EFE7]/40 group-hover:text-[#F1EFE7]/70 group-hover:-translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                    </svg>
            </button>

            {/* Carousel indicators */}
            <div className="flex items-center gap-2">
              {Array.from({ length: Math.ceil(PARTNERS.length / 4) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPartnerIndex(idx * 4)}
                  className={`transition-all duration-300 ${
                    currentPartnerIndex === idx * 4
                      ? 'w-8 h-1.5 bg-[#F1EFE7]/40'
                      : 'w-1.5 h-1.5 bg-[#F1EFE7]/20 hover:bg-[#F1EFE7]/30'
                  }`}
                />
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={() => setCurrentPartnerIndex((prev) => (prev + 4) % PARTNERS.length)}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center border border-[#F1EFE7]/20 bg-black/40 backdrop-blur-sm hover:border-[#F1EFE7]/40 hover:bg-black/60 transition-all duration-300 group"
              aria-label="Next partners"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 text-[#F1EFE7]/40 group-hover:text-[#F1EFE7]/70 group-hover:translate-x-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            </div>
        </FadeInSection>
      </section>

      {/* Events Section */}
      <section id="events" className="relative w-full overflow-hidden bg-black">
        {/* Subtle ambient gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F1EFE7]/[0.015] to-transparent pointer-events-none" />
        
        <FadeInSection className="relative z-10 py-20 md:py-32">
          {/* Section Header */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-16">
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="hidden md:block h-px w-24 bg-gradient-to-r from-transparent to-[#F1EFE7]/30" />
              <h2 className="text-5xl md:text-6xl lg:text-7xl text-center tracking-tighter" style={{ color: "#F1EFE7", fontFamily: "'Times New Roman', serif", letterSpacing: "-0.04em" }}>
                <span className="italic font-light">Our</span> Events
            </h2>
              <div className="hidden md:block h-px w-24 bg-gradient-to-l from-transparent to-[#F1EFE7]/30" />
        </div>
            <p
              className="text-center text-base md:text-lg text-[#F1EFE7] opacity-60 max-w-xl mx-auto leading-relaxed font-light"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Building community through meaningful gatherings and workshops.
            </p>
          </div>
          
          {/* Timeline Component */}
<Timeline
            data={[
              {
                title: "OCT 4",
                content: (
                  <div>
                    <p className="text-[#F1EFE7]/40 text-xs tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "Arial, sans-serif" }}>
                      2025
                    </p>
                    <h3 className="text-[#F1EFE7] text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Times New Roman', serif", letterSpacing: "-0.03em" }}>
                      The Catalyst
                    </h3>
                    <p className="text-[#F1EFE7]/60 text-sm md:text-base font-light mb-6 max-w-xl" style={{ fontFamily: "Arial, sans-serif" }}>
                      Our inaugural mixer. 20 builders, 3 VC partners. Real conversations, real outcomes—the fire-starter event.
                    </p>
                    <div className="relative h-48 md:h-64 w-full overflow-hidden border border-[#F1EFE7]/10">
                      <Image
                        src="/startup-pitch.png"
                        alt="The Catalyst mixer"
                        fill
                        className="object-cover opacity-70 hover:opacity-90 transition-opacity duration-500"
                      />
                    </div>
                  </div>
                ),
              },
              {
                title: "NOV 21–23",
                content: (
                  <div>
                    <p className="text-[#F1EFE7]/40 text-xs tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "Arial, sans-serif" }}>
                      2025
                    </p>
                    <h3 className="text-[#F1EFE7] text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Times New Roman', serif", letterSpacing: "-0.03em" }}>
                      Startup in a Weekend
                  </h3>
                    <p className="text-[#F1EFE7]/60 text-sm md:text-base font-light mb-4 max-w-xl" style={{ fontFamily: "Arial, sans-serif" }}>
                      With KW Empower in Philadelphia. 150+ attendees, 17 brand partners, $10K in prizes, 15+ deals in pipeline.
                  </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 mb-6 text-[#F1EFE7]/40 text-xs" style={{ fontFamily: "Arial, sans-serif" }}>
                      <span>Microsoft execs</span>
                      <span>Google leads</span>
                      <span>Mercor engineers</span>
                </div>
                    <div className="relative h-48 md:h-64 w-full overflow-hidden border border-[#F1EFE7]/10">
                      <Image
                        src="/startup-networking-event.png"
                        alt="Hackathon"
                        fill
                        className="object-cover opacity-70 hover:opacity-90 transition-opacity duration-500"
                      />
                    </div>
                  </div>
                ),
              },
              {
                title: "DEC 21",
                content: (
                  <div>
                    <p className="text-[#F1EFE7]/40 text-xs tracking-[0.2em] uppercase mb-2" style={{ fontFamily: "Arial, sans-serif" }}>
                      2025
                    </p>
                    <h3 className="text-[#F1EFE7] text-2xl md:text-3xl mb-4" style={{ fontFamily: "'Times New Roman', serif", letterSpacing: "-0.03em" }}>
                      Builder Night
                  </h3>
                    <p className="text-[#F1EFE7]/60 text-sm md:text-base font-light mb-4 max-w-xl" style={{ fontFamily: "Arial, sans-serif" }}>
                      With Code & Coffee Philly. 25 builders at Foundry House—debugging, connecting, shipping.
                  </p>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 mb-6 text-[#F1EFE7]/40 text-xs" style={{ fontFamily: "Arial, sans-serif" }}>
                      <span>High-signal conversations</span>
                      <span>Startup advice</span>
                </div>
                    <div className="relative h-48 md:h-64 w-full overflow-hidden border border-[#F1EFE7]/10">
                      <Image
                        src="/coding-workshop-developers.jpg"
                        alt="Builder night"
                        fill
                        className="object-cover opacity-70 hover:opacity-90 transition-opacity duration-500"
                      />
                    </div>
                  </div>
                ),
              },
            ]}
          />
          
          {/* Bottom decorative element */}
          <div className="flex justify-center mt-16">
            <div className="h-px w-48 bg-gradient-to-r from-transparent via-[#F1EFE7]/20 to-transparent" />
                </div>
        </FadeInSection>
      </section>

      {/* CTA Section */}
      <section id="cta" className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-center">
        {/* Subtle radial gradient from bottom */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(241,239,231,0.04)_0%,_transparent_60%)] pointer-events-none" />
        
        <FadeInSection className="relative z-10 flex flex-col items-center justify-center px-6 md:px-12 lg:px-20">
          <div className="w-full max-w-5xl mx-auto text-center">
            {/* Large decorative quote mark */}
            <div className="mb-8">
              <span className="text-[120px] md:text-[180px] leading-none font-serif text-[#F1EFE7]/[0.08] select-none" style={{ fontFamily: "'Times New Roman', serif", letterSpacing: "-0.03em" }}>"</span>
                </div>

            <h2 className="text-5xl md:text-6xl lg:text-8xl mb-8 tracking-tighter -mt-20" style={{ color: "#F1EFE7", fontFamily: "'Times New Roman', serif", letterSpacing: "-0.04em" }}>
              Join the <span className="italic font-light">Foundry</span>
            </h2>
            
            <p
              className="text-lg md:text-xl text-[#F1EFE7] opacity-60 max-w-2xl mx-auto mb-16 leading-relaxed font-light"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Whether you're a founder building the future or an investor looking for the best deals, we'd love to connect.
            </p>
            
            {/* CTA Buttons in a refined container */}
            <div className="inline-flex flex-col sm:flex-row gap-4 p-1 border border-[#F1EFE7]/10">
              <Link
                href="https://forms.gle/eqmwtHuwrnafYych7"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-sm font-medium bg-[#F1EFE7] text-black px-12 py-5 hover:bg-white transition-colors duration-200 tracking-[0.15em] uppercase text-center flex items-center justify-center gap-3"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Apply as Founder
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
              </Link>
              <Link
                href="https://forms.gle/4QJVBz56nvrjSxHSA"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-sm font-medium bg-transparent text-[#F1EFE7] px-12 py-5 hover:bg-[#F1EFE7]/5 transition-colors duration-200 tracking-[0.15em] uppercase text-center flex items-center justify-center gap-3"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Become a Partner
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/sponsors"
                className="group text-sm font-medium bg-transparent text-[#F1EFE7] px-12 py-5 hover:bg-[#F1EFE7]/5 transition-colors duration-200 tracking-[0.15em] uppercase text-center flex items-center justify-center gap-3 border-t sm:border-t-0 sm:border-l border-[#F1EFE7]/10"
                style={{ fontFamily: "Arial, sans-serif" }}
              >
                Become a Sponsor
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            {/* Footer-like info */}
            <div className="mt-24 flex items-center justify-center gap-8 text-[#F1EFE7]/30 text-xs tracking-widest uppercase" style={{ fontFamily: "Arial, sans-serif" }}>
              <span>Philadelphia</span>
              <span className="w-1 h-1 bg-[#F1EFE7]/30 rounded-full" />
              <span>Est. 2024</span>
              <span className="w-1 h-1 bg-[#F1EFE7]/30 rounded-full" />
              <span>For Builders</span>
          </div>
        </div>
        </FadeInSection>
      </section>

      {/* Join the Foundry modal */}
      <Modal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} title="Join the Foundry">
        <div className="space-y-6">
          <p className="text-lg">Welcome to the future of venture capital and entrepreneurship.</p>
          <p>
            We're building a community of innovative founders and forward-thinking investors who believe in
            democratizing access to opportunities and creating equal chances for success.
          </p>
          <p>Content coming soon...</p>
        </div>
      </Modal>
    </>
  )
}
