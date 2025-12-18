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
import { motion, useInView } from "framer-motion"

// Fade-in section wrapper
function FadeInSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false)

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0)
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
            
            <h2 className="text-5xl md:text-6xl lg:text-8xl mb-16 text-center tracking-tight" style={{ color: "#F1EFE7", fontFamily: "'Times New Roman', serif" }}>
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
                style={{ color: "#F1EFE7", opacity: 0.7, fontFamily: "'Times New Roman', serif" }}
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

      <section id="companies" className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-center">
        {/* Subtle ambient gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F1EFE7]/[0.02] to-transparent pointer-events-none" />
        
        <FadeInSection className="relative z-10 flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-16">
          <div className="w-full max-w-7xl mx-auto">
            {/* Section header with decorative elements */}
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="hidden md:block h-px w-24 bg-gradient-to-r from-transparent to-[#F1EFE7]/30" />
              <h2 className="text-5xl md:text-6xl lg:text-7xl text-center tracking-tight" style={{ color: "#F1EFE7", fontFamily: "'Times New Roman', serif" }}>
              <span className="italic font-light">Our</span> Companies
            </h2>
              <div className="hidden md:block h-px w-24 bg-gradient-to-l from-transparent to-[#F1EFE7]/30" />
            </div>
            <p
              className="text-center text-base md:text-lg text-[#F1EFE7] opacity-60 max-w-xl mx-auto mb-16 leading-relaxed font-light"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              We're builders ourselves, helping other founders like us.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#F1EFE7]/15 border border-[#F1EFE7]/15">
              <Link
                href="https://entropytoorder.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#0a0a0a] p-8 md:p-10 flex flex-col transition-all duration-300 hover:bg-[#111]"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#F1EFE7]/40" style={{ fontFamily: "Arial, sans-serif" }}>Seed Round</span>
                  <svg className="w-4 h-4 text-[#F1EFE7]/30 group-hover:text-[#F1EFE7]/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#F1EFE7] group-hover:text-white transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>
                  ETO
                </h3>
                <p className="text-sm leading-relaxed text-[#F1EFE7]/50 group-hover:text-[#F1EFE7]/70 transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>
                  Web 3 finance company creating synthetic assets bringing real world value on-chain.
                </p>
              </Link>

              <div className="group bg-[#0a0a0a] p-8 md:p-10 flex flex-col transition-all duration-300 hover:bg-[#111]">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#F1EFE7]/40" style={{ fontFamily: "Arial, sans-serif" }}>Pre-Seed</span>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#F1EFE7] group-hover:text-white transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>
                  Deal Nest
                </h3>
                <p className="text-sm leading-relaxed text-[#F1EFE7]/50 group-hover:text-[#F1EFE7]/70 transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>
                  AI-powered deal flow management for venture capital firms.
                </p>
              </div>

              <div className="group bg-[#0a0a0a] p-8 md:p-10 flex flex-col transition-all duration-300 hover:bg-[#111]">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#F1EFE7]/40" style={{ fontFamily: "Arial, sans-serif" }}>Seed Round</span>
                    </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#F1EFE7] group-hover:text-white transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>
                    Ulterius
                  </h3>
                <p className="text-sm leading-relaxed text-[#F1EFE7]/50 group-hover:text-[#F1EFE7]/70 transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>
                    Innovative technology solutions for the modern enterprise.
                  </p>
              </div>

              <div className="group bg-[#0a0a0a] p-8 md:p-10 flex flex-col transition-all duration-300 hover:bg-[#111]">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#F1EFE7]/40" style={{ fontFamily: "Arial, sans-serif" }}>Seed Round</span>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#F1EFE7] group-hover:text-white transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>
                  Velric AI
                  </h3>
                <p className="text-sm leading-relaxed text-[#F1EFE7]/50 group-hover:text-[#F1EFE7]/70 transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>
                  Enterprise AI infrastructure for automated decision intelligence.
                </p>
              </div>
            </div>

            {/* Bottom decorative line */}
            <div className="flex justify-center mt-16">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#F1EFE7]/20 to-transparent" />
            </div>
          </div>
        </FadeInSection>
      </section>

      <section id="vcs" className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-center">
        {/* Subtle ambient gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#F1EFE7]/[0.02] to-transparent pointer-events-none" />
        
        <FadeInSection className="relative z-10 flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 py-16">
          <div className="w-full max-w-7xl mx-auto">
            {/* Section header with decorative elements */}
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="hidden md:block h-px w-24 bg-gradient-to-r from-transparent to-[#F1EFE7]/30" />
              <h2 className="text-5xl md:text-6xl lg:text-7xl text-center tracking-tight" style={{ color: "#F1EFE7", fontFamily: "'Times New Roman', serif" }}>
                <span className="italic font-light">Our</span> Partners
              </h2>
              <div className="hidden md:block h-px w-24 bg-gradient-to-l from-transparent to-[#F1EFE7]/30" />
        </div>
            <p
              className="text-center text-base md:text-lg text-[#F1EFE7] opacity-60 max-w-xl mx-auto mb-16 leading-relaxed font-light"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              VC partners who actually move the needle. No fluff, just results.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#F1EFE7]/15 border border-[#F1EFE7]/15">
              <Link
                href="https://www.dormroomfund.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#0a0a0a] p-8 md:p-10 flex flex-col transition-all duration-300 hover:bg-[#111]"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#F1EFE7]/40" style={{ fontFamily: "Arial, sans-serif" }}>Student-run VC</span>
                  <svg className="w-4 h-4 text-[#F1EFE7]/30 group-hover:text-[#F1EFE7]/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#F1EFE7] group-hover:text-white transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>
                  Dorm Room Fund
                </h3>
                <p className="text-sm leading-relaxed text-[#F1EFE7]/50 group-hover:text-[#F1EFE7]/70 transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>
                  The premier student-run venture fund backing student founders.
                </p>
              </Link>

              <Link
                href="https://www.afore.vc"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#0a0a0a] p-8 md:p-10 flex flex-col transition-all duration-300 hover:bg-[#111]"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#F1EFE7]/40" style={{ fontFamily: "Arial, sans-serif" }}>Early Stage</span>
                  <svg className="w-4 h-4 text-[#F1EFE7]/30 group-hover:text-[#F1EFE7]/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#F1EFE7] group-hover:text-white transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>
                  Afore Capital
                </h3>
                <p className="text-sm leading-relaxed text-[#F1EFE7]/50 group-hover:text-[#F1EFE7]/70 transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>
                  Pre-seed fund investing in technical founders.
                </p>
              </Link>

              <Link
                href="https://pear.vc"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#0a0a0a] p-8 md:p-10 flex flex-col transition-all duration-300 hover:bg-[#111]"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#F1EFE7]/40" style={{ fontFamily: "Arial, sans-serif" }}>Pre-Seed & Seed</span>
                  <svg className="w-4 h-4 text-[#F1EFE7]/30 group-hover:text-[#F1EFE7]/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#F1EFE7] group-hover:text-white transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>
                  Pear VC
                </h3>
                <p className="text-sm leading-relaxed text-[#F1EFE7]/50 group-hover:text-[#F1EFE7]/70 transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>
                  Supporting exceptional founders from the earliest stages.
                </p>
              </Link>

              <Link
                href="https://greylock.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#0a0a0a] p-8 md:p-10 flex flex-col transition-all duration-300 hover:bg-[#111]"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#F1EFE7]/40" style={{ fontFamily: "Arial, sans-serif" }}>AI-First VC</span>
                  <svg className="w-4 h-4 text-[#F1EFE7]/30 group-hover:text-[#F1EFE7]/70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#F1EFE7] group-hover:text-white transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>
                  Greylock
                </h3>
                <p className="text-sm leading-relaxed text-[#F1EFE7]/50 group-hover:text-[#F1EFE7]/70 transition-colors" style={{ fontFamily: "Arial, sans-serif" }}>
                  Legendary Silicon Valley venture firm backing iconic companies.
                </p>
              </Link>
            </div>

            {/* Bottom decorative line */}
            <div className="flex justify-center mt-16">
              <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#F1EFE7]/20 to-transparent" />
            </div>
          </div>
        </FadeInSection>
      </section>

      {/* Events Section */}
      <section id="events" className="relative w-full overflow-hidden bg-black">
        {/* Subtle ambient gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F1EFE7]/[0.015] to-transparent pointer-events-none" />
        
        <div className="relative z-10 py-20 md:py-32">
          {/* Section Header */}
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-16">
            <div className="flex items-center justify-center gap-8 mb-6">
              <div className="hidden md:block h-px w-24 bg-gradient-to-r from-transparent to-[#F1EFE7]/30" />
              <h2 className="text-5xl md:text-6xl lg:text-7xl text-center tracking-tight" style={{ color: "#F1EFE7", fontFamily: "'Times New Roman', serif" }}>
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
                title: "Spring 2025",
                content: (
                  <div>
                    <p className="text-[#F1EFE7]/80 text-sm md:text-base font-light mb-8" style={{ fontFamily: "Arial, sans-serif" }}>
                      Foundry Demo Day — Our flagship event where portfolio companies pitch to top VCs and angel investors.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative h-32 md:h-48 lg:h-56 w-full overflow-hidden border border-[#F1EFE7]/10">
                        <Image
                          src="/startup-pitch-event.png"
                          alt="Startup pitch event"
                          fill
                          className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                      <div className="relative h-32 md:h-48 lg:h-56 w-full overflow-hidden border border-[#F1EFE7]/10">
                        <Image
                          src="/business-conference-room.png"
                          alt="Conference room"
                          fill
                          className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                title: "Winter 2024",
                content: (
                  <div>
                    <p className="text-[#F1EFE7]/80 text-sm md:text-base font-light mb-4" style={{ fontFamily: "Arial, sans-serif" }}>
                      Builder Workshops — Hands-on sessions for technical founders covering product development, growth, and fundraising.
                    </p>
                    <div className="mb-8 space-y-2">
                      <div className="flex gap-3 items-center text-[#F1EFE7]/60 text-xs md:text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
                        <span className="w-1.5 h-1.5 bg-[#F1EFE7]/40 rounded-full" />
                        Technical Architecture Review
                      </div>
                      <div className="flex gap-3 items-center text-[#F1EFE7]/60 text-xs md:text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
                        <span className="w-1.5 h-1.5 bg-[#F1EFE7]/40 rounded-full" />
                        Go-to-Market Strategy Session
                      </div>
                      <div className="flex gap-3 items-center text-[#F1EFE7]/60 text-xs md:text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
                        <span className="w-1.5 h-1.5 bg-[#F1EFE7]/40 rounded-full" />
                        Pitch Deck Workshop
                      </div>
                      <div className="flex gap-3 items-center text-[#F1EFE7]/60 text-xs md:text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
                        <span className="w-1.5 h-1.5 bg-[#F1EFE7]/40 rounded-full" />
                        VC Office Hours
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative h-32 md:h-48 lg:h-56 w-full overflow-hidden border border-[#F1EFE7]/10">
                        <Image
                          src="/coding-workshop-developers.jpg"
                          alt="Coding workshop"
                          fill
                          className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                      <div className="relative h-32 md:h-48 lg:h-56 w-full overflow-hidden border border-[#F1EFE7]/10">
                        <Image
                          src="/mountain-retreat-conference.jpg"
                          alt="Retreat conference"
                          fill
                          className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                title: "Fall 2024",
                content: (
                  <div>
                    <p className="text-[#F1EFE7]/80 text-sm md:text-base font-light mb-8" style={{ fontFamily: "Arial, sans-serif" }}>
                      Foundry Launch — The beginning of Philadelphia's first builder-led venture community. Inaugural networking event with 100+ founders and investors.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative h-32 md:h-48 lg:h-56 w-full overflow-hidden border border-[#F1EFE7]/10">
                        <Image
                          src="/startup-networking-event.png"
                          alt="Networking event"
                          fill
                          className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                      <div className="relative h-32 md:h-48 lg:h-56 w-full overflow-hidden border border-[#F1EFE7]/10">
                        <Image
                          src="/startup-pitch.png"
                          alt="Startup pitch"
                          fill
                          className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
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
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="relative h-screen w-full overflow-hidden bg-black flex flex-col justify-center">
        {/* Subtle radial gradient from bottom */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(241,239,231,0.04)_0%,_transparent_60%)] pointer-events-none" />
        
        <FadeInSection className="relative z-10 flex flex-col items-center justify-center px-6 md:px-12 lg:px-20">
          <div className="w-full max-w-5xl mx-auto text-center">
            {/* Large decorative quote mark */}
            <div className="mb-8">
              <span className="text-[120px] md:text-[180px] leading-none font-serif text-[#F1EFE7]/[0.08] select-none" style={{ fontFamily: "'Times New Roman', serif" }}>"</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-8xl mb-8 tracking-tight -mt-20" style={{ color: "#F1EFE7", fontFamily: "'Times New Roman', serif" }}>
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
