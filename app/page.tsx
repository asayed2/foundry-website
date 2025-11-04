"use client"

import { useState } from "react"
import { Background } from "@/components/background"
import { Footer } from "@/components/footer"
import { FloatingHeader } from "@/components/floating-header"
import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons"
import { buttonVariants } from "@/components/ui/button"
import XLogoIcon from "@/components/icons/x"
import { socialLinks } from "@/lib/constants"
import Link from "next/link"
import { Modal } from "@/components/ui/modal"

export default function Home() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false)

  return (
    <>
      {/* Global Lighthouse Wave - spans entire page */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vmax] h-[200vmax] animate-[lighthouse-rotate_12s_linear_infinite]">
          <div className="absolute top-1/2 left-1/2 w-full h-[120px] origin-center -translate-y-1/2">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F1EFE7]/35 to-transparent blur-2xl shadow-[0_0_80px_rgba(241,239,231,0.6)]"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 w-full h-[100px] origin-center -translate-y-1/2 rotate-120">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F1EFE7]/30 to-transparent blur-2xl shadow-[0_0_70px_rgba(241,239,231,0.55)]"></div>
          </div>
          <div className="absolute top-1/2 left-1/2 w-full h-[110px] origin-center -translate-y-1/2 rotate-240">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#F1EFE7]/32 to-transparent blur-2xl shadow-[0_0_75px_rgba(241,239,231,0.58)]"></div>
          </div>
        </div>
      </div>

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
            <h1 className="font-serif text-white text-8xl md:text-9xl lg:text-[12rem] leading-[0.6] text-center mb-16 [text-shadow:0_2px_4px_rgba(0,0,0,0.2)]">
              the
              <br />
              <span className="italic">foundry</span>
            </h1>
          </div>
          <Footer />
        </div>
      </main>

      <section id="about" className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(241,239,231,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(241,239,231,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>


        {/* Radial gradient overlays */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#F1EFE7]/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-[#F1EFE7]/3 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 pt-32 pb-8">
          <div className="flex flex-col items-center gap-6 w-full mb-8">
            <p
              className="text-center text-base md:text-lg lg:text-xl text-[#F1EFE7] opacity-80 max-w-3xl mx-auto mb-16 px-4 leading-relaxed"
            >
              
            </p>
            <div className="relative mb-48 md:mb-40 lg:mb-48">
              <p
                className="text-base md:text-lg lg:text-xl font-light tracking-[0.2em] uppercase text-center relative z-10"
                style={{ color: "#F1EFE7" }}
              >
                <span className="opacity-60">Backed by</span>
              </p>
              {/* Decorative line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-[#F1EFE7]/40 to-transparent"></div>
            </div>
            <div className="w-full overflow-hidden -mt-32 md:-mt-40 lg:-mt-48 mb-20 md:mb-24 lg:mb-32 relative">
              {/* Gradient overlays for smooth fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-r from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 md:w-48 bg-gradient-to-l from-black via-black/80 to-transparent z-10 pointer-events-none"></div>
              
              <div className="flex animate-scroll-left">
                {/* First set of logos */}
                <div className="flex items-center gap-12 md:gap-16 px-8 shrink-0">
                  <Link
                    href="https://www.avax.network"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-40 h-16 md:w-52 md:h-20 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-90"
                  >
                    <img
                      src="/avalanche-logo.png"
                      alt="Avalanche"
                      className="h-full w-auto object-contain transition-all duration-300"
                    />
                  </Link>
                  <Link
                    href="https://www.dormroomfund.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-40 h-16 md:w-52 md:h-20 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-90"
                  >
                    <img
                      src="/dorm-room-fund-logo.svg"
                      alt="Dorm Room Fund"
                      className="h-full w-auto object-contain filter brightness-0 invert transition-all duration-300"
                    />
                  </Link>
                  <Link
                    href="https://www.afore.vc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-20 h-8 md:w-24 md:h-10 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-90"
                  >
                    <img
                      src="/afore-capital-logo.png"
                      alt="Afore Capital"
                      className="h-full w-auto object-contain filter brightness-0 invert transition-all duration-300"
                    />
                  </Link>
                  <Link
                    href="https://pear.vc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-48 h-20 md:w-64 md:h-24 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-90 px-4 py-2"
                  >
                    <img
                      src="/pear-vc-logo.png"
                      alt="Pear VC"
                      className="h-full w-auto object-contain filter brightness-0 invert transition-all duration-300"
                    />
                  </Link>
                  <Link
                    href="https://greylock.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-40 h-16 md:w-52 md:h-20 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-90"
                  >
                    <img
                      src="/greylock-logo.png"
                      alt="Greylock Partners"
                      className="h-full w-auto object-contain filter brightness-0 invert transition-all duration-300"
                    />
                  </Link>
                  <Link
                    href="https://www.avax.network"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-40 h-12 md:w-48 md:h-14 flex items-center justify-center hover:opacity-80 transition-opacity shrink-0"
                  >
                    <img
                      src="/avalanche-logo.png"
                      alt="Avalanche"
                      className="h-full w-auto object-contain filter brightness-0 invert"
                    />
                  </Link>
                  <Link
                    href="https://lovable.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-90"
                  >
                    <img 
                      src="/lovable-logo.png" 
                      alt="Lovable" 
                      className="h-full w-auto object-contain transition-all duration-300"
                    />
                  </Link>
                  <Link
                    href="https://adobe.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-32 h-14 md:w-40 md:h-16 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-90"
                  >
                    <img
                      src="/adobe-logo.png"
                      alt="Adobe"
                      className="h-full w-auto object-contain filter brightness-0 invert transition-all duration-300"
                    />
                  </Link>
                  <Link
                    href="https://www.perplexity.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-40 h-14 md:w-48 md:h-16 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-90"
                  >
                    <img
                      src="/off-white-logo.png"
                      alt="Off-White"
                      className="h-full w-auto object-contain filter brightness-0 invert transition-all duration-300"
                    />
                  </Link>
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center gap-12 md:gap-16 px-8 shrink-0">
                  <Link
                    href="https://www.avax.network"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-40 h-16 md:w-52 md:h-20 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-90"
                  >
                    <img
                      src="/avalanche-logo.png"
                      alt="Avalanche"
                      className="h-full w-auto object-contain transition-all duration-300"
                    />
                  </Link>
                  <Link
                    href="https://www.dormroomfund.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-40 h-16 md:w-52 md:h-20 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-90"
                  >
                    <img
                      src="/dorm-room-fund-logo.svg"
                      alt="Dorm Room Fund"
                      className="h-full w-auto object-contain filter brightness-0 invert transition-all duration-300"
                    />
                  </Link>
                  <Link
                    href="https://www.afore.vc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-20 h-8 md:w-24 md:h-10 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-90"
                  >
                    <img
                      src="/afore-capital-logo.png"
                      alt="Afore Capital"
                      className="h-full w-auto object-contain filter brightness-0 invert transition-all duration-300"
                    />
                  </Link>
                  <Link
                    href="https://pear.vc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-48 h-20 md:w-64 md:h-24 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-90 px-4 py-2"
                  >
                    <img
                      src="/pear-vc-logo.png"
                      alt="Pear VC"
                      className="h-full w-auto object-contain filter brightness-0 invert transition-all duration-300"
                    />
                  </Link>
                  <Link
                    href="https://greylock.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-40 h-16 md:w-52 md:h-20 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-90"
                  >
                    <img
                      src="/greylock-logo.png"
                      alt="Greylock Partners"
                      className="h-full w-auto object-contain filter brightness-0 invert transition-all duration-300"
                    />
                  </Link>
                  <Link
                    href="https://www.avax.network"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-40 h-12 md:w-48 md:h-14 flex items-center justify-center hover:opacity-80 transition-opacity shrink-0"
                  >
                    <img
                      src="/avalanche-logo.png"
                      alt="Avalanche"
                      className="h-full w-auto object-contain filter brightness-0 invert"
                    />
                  </Link>
                  <Link
                    href="https://lovable.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-90"
                  >
                    <img 
                      src="/lovable-logo.png" 
                      alt="Lovable" 
                      className="h-full w-auto object-contain transition-all duration-300"
                    />
                  </Link>
                  <Link
                    href="https://adobe.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-32 h-14 md:w-40 md:h-16 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-90"
                  >
                    <img
                      src="/adobe-logo.png"
                      alt="Adobe"
                      className="h-full w-auto object-contain filter brightness-0 invert transition-all duration-300"
                    />
                  </Link>
                  <Link
                    href="https://www.perplexity.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-40 h-14 md:w-48 md:h-16 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-90"
                  >
                    <img
                      src="/off-white-logo.png"
                      alt="Off-White"
                      className="h-full w-auto object-contain filter brightness-0 invert transition-all duration-300"
                    />
                  </Link>
                </div>
                {/* Third set for extra smoothness */}
                <div className="flex items-center gap-12 md:gap-16 px-8 shrink-0">
                  <Link
                    href="https://www.avax.network"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-40 h-16 md:w-52 md:h-20 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-90"
                  >
                    <img
                      src="/avalanche-logo.png"
                      alt="Avalanche"
                      className="h-full w-auto object-contain transition-all duration-300"
                    />
                  </Link>
                  <Link
                    href="https://www.dormroomfund.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-40 h-16 md:w-52 md:h-20 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-90"
                  >
                    <img
                      src="/dorm-room-fund-logo.svg"
                      alt="Dorm Room Fund"
                      className="h-full w-auto object-contain filter brightness-0 invert transition-all duration-300"
                    />
                  </Link>
                  <Link
                    href="https://www.afore.vc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-20 h-8 md:w-24 md:h-10 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-90"
                  >
                    <img
                      src="/afore-capital-logo.png"
                      alt="Afore Capital"
                      className="h-full w-auto object-contain filter brightness-0 invert transition-all duration-300"
                    />
                  </Link>
                  <Link
                    href="https://pear.vc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-48 h-20 md:w-64 md:h-24 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-90 px-4 py-2"
                  >
                    <img
                      src="/pear-vc-logo.png"
                      alt="Pear VC"
                      className="h-full w-auto object-contain filter brightness-0 invert transition-all duration-300"
                    />
                  </Link>
                  <Link
                    href="https://greylock.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-40 h-16 md:w-52 md:h-20 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-90"
                  >
                    <img
                      src="/greylock-logo.png"
                      alt="Greylock Partners"
                      className="h-full w-auto object-contain filter brightness-0 invert transition-all duration-300"
                    />
                  </Link>
                  <Link
                    href="https://www.avax.network"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-40 h-12 md:w-48 md:h-14 flex items-center justify-center hover:opacity-80 transition-opacity shrink-0"
                  >
                    <img
                      src="/avalanche-logo.png"
                      alt="Avalanche"
                      className="h-full w-auto object-contain filter brightness-0 invert"
                    />
                  </Link>
                  <Link
                    href="https://lovable.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-16 h-16 md:w-20 md:h-20 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-90"
                  >
                    <img 
                      src="/lovable-logo.png" 
                      alt="Lovable" 
                      className="h-full w-auto object-contain transition-all duration-300"
                    />
                  </Link>
                  <Link
                    href="https://adobe.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-32 h-14 md:w-40 md:h-16 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-90"
                  >
                    <img
                      src="/adobe-logo.png"
                      alt="Adobe"
                      className="h-full w-auto object-contain filter brightness-0 invert transition-all duration-300"
                    />
                  </Link>
                  <Link
                    href="https://www.perplexity.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-40 h-14 md:w-48 md:h-16 flex items-center justify-center shrink-0 transition-all duration-300 hover:scale-105 hover:opacity-90"
                  >
                    <img
                      src="/off-white-logo.png"
                      alt="Off-White"
                      className="h-full w-auto object-contain filter brightness-0 invert transition-all duration-300"
                    />
                  </Link>
                </div>
              </div>
            </div>
            <h2 className="text-6xl md:text-7xl lg:text-8xl mb-8" style={{ color: "#F1EFE7", fontFamily: "'Times New Roman', serif" }}>
              About <span className="italic">Us</span>
            </h2>

            <div className="space-y-8">
              <p
                className="text-lg md:text-xl font-light leading-relaxed max-w-4xl mx-auto text-center"
                style={{ color: "#F1EFE7", fontFamily: "Arial, sans-serif" }}
              >
                Foundry is the first builder-led community in Philadelphia that's actually building alongside its
                members. We started by searching for the right resources?VC connections, partnerships, go-to-market
                guidance, and real builder support?then decided to create them ourselves. Foundry exists for those with
                the knowledge and drive to make the impossible happen. We genuinely care, and that's what sets us apart.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="companies" className="relative min-h-screen w-full overflow-hidden -mt-24 md:-mt-32">
        <div className="absolute inset-0 bg-black"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(241,239,231,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(241,239,231,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>

        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F1EFE7]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#F1EFE7]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Additional radial gradients for depth */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#F1EFE7]/3 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-[#F1EFE7]/4 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8 pt-8 pb-24">
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-6xl md:text-7xl lg:text-8xl mb-8 text-center tracking-tight" style={{ color: "#F1EFE7", fontFamily: "'Times New Roman', serif" }}>
              <span className="italic font-light">Our</span> Companies
            </h2>
            <p
              className="text-center text-base md:text-lg lg:text-xl text-[#F1EFE7] opacity-80 max-w-3xl mx-auto mb-20 px-4 leading-relaxed font-light tracking-wide"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              We're builders ourselves, and our passion for creating goes hand in hand with helping other founders like us. The member companies within our group are a testament to that spirit of building, collaboration, and execution.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <Link
                href="https://entropytoorder.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-black via-[#0a0a0a] to-black border border-[#F1EFE7]/30 p-10 rounded-2xl min-h-[350px] flex flex-col justify-between cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-[#F1EFE7]/60 hover:shadow-2xl hover:shadow-[#F1EFE7]/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F1EFE7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-[#F1EFE7]/10 rounded-xl flex items-center justify-center group-hover:bg-[#F1EFE7]/20 transition-colors duration-300">
                      <div className="w-6 h-6 bg-[#F1EFE7]/60 rounded-md"></div>
                    </div>
                    <span className="text-xs font-semibold bg-gradient-to-r from-[#F1EFE7] to-[#d4d2ca] bg-clip-text text-transparent px-3 py-1.5 rounded-full border border-[#F1EFE7]/30">IPO: ETO</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#F1EFE7] to-[#c9c7bf] bg-clip-text text-transparent tracking-tight" style={{ fontFamily: "Arial, sans-serif" }}>
                    ETO
                  </h3>
                  <p className="font-light text-base leading-relaxed text-[#F1EFE7]/70 tracking-wide" style={{ fontFamily: "Arial, sans-serif" }}>
                    ETO is a Web 3 finance company creating Synthetic assets bringing real world value on-chain through
                    purchasable tokens with structured avenues of Yield.
                  </p>
                </div>
                <div className="relative mt-8 flex items-center text-[#F1EFE7]/60 group-hover:text-[#F1EFE7] transition-colors duration-300">
                  <span className="text-sm font-medium tracking-wider uppercase" style={{ fontFamily: "Arial, sans-serif" }}>Learn more</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              <div
                className="group relative bg-gradient-to-br from-black via-[#0a0a0a] to-black border border-[#F1EFE7]/30 p-10 rounded-2xl min-h-[350px] flex flex-col justify-between cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-[#F1EFE7]/60 hover:shadow-2xl hover:shadow-[#F1EFE7]/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F1EFE7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-[#F1EFE7]/10 rounded-xl flex items-center justify-center group-hover:bg-[#F1EFE7]/20 transition-colors duration-300">
                      <div className="w-6 h-6 bg-[#F1EFE7]/60 rounded-md"></div>
                    </div>
                    <span className="text-xs font-semibold bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent px-3 py-1.5 rounded-full border border-emerald-500/30">Acquired</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#F1EFE7] to-[#c9c7bf] bg-clip-text text-transparent tracking-tight" style={{ fontFamily: "Arial, sans-serif" }}>
                    Spaces.ai
                  </h3>
                  <p className="font-light text-base leading-relaxed text-[#F1EFE7]/70 tracking-wide" style={{ fontFamily: "Arial, sans-serif" }}>
                    Making interior design easy with AI.
                  </p>
                </div>
                <div className="relative mt-8">
                  <p className="text-sm text-[#F1EFE7]/60 tracking-wide" style={{ fontFamily: "Arial, sans-serif" }}>Acquired by <span className="font-semibold text-[#F1EFE7]">Invitae</span></p>
                </div>
              </div>

              <div
                className="group relative bg-gradient-to-br from-black via-[#0a0a0a] to-black border border-[#F1EFE7]/30 p-10 rounded-2xl min-h-[350px] flex flex-col justify-between cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-[#F1EFE7]/60 hover:shadow-2xl hover:shadow-[#F1EFE7]/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F1EFE7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 bg-[#F1EFE7]/10 rounded-xl flex items-center justify-center group-hover:bg-[#F1EFE7]/20 transition-colors duration-300">
                      <div className="w-6 h-6 bg-[#F1EFE7]/60 rounded-md"></div>
                    </div>
                    <span className="text-xs font-semibold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent px-3 py-1.5 rounded-full border border-blue-500/30">Series A</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#F1EFE7] to-[#c9c7bf] bg-clip-text text-transparent tracking-tight" style={{ fontFamily: "Arial, sans-serif" }}>
                    Ulterius
                  </h3>
                  <p className="font-light text-base leading-relaxed text-[#F1EFE7]/70 tracking-wide" style={{ fontFamily: "Arial, sans-serif" }}>
                    Innovative technology solutions for the modern enterprise.
                  </p>
                </div>
                <div className="relative mt-8 flex items-center text-[#F1EFE7]/60 group-hover:text-[#F1EFE7] transition-colors duration-300">
                  <span className="text-sm font-medium tracking-wider uppercase" style={{ fontFamily: "Arial, sans-serif" }}>Learn more</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              <div
                className="group relative bg-gradient-to-br from-black via-[#0a0a0a] to-black border border-dashed border-[#F1EFE7]/20 p-10 rounded-2xl min-h-[350px] flex flex-col justify-center items-center cursor-pointer transition-all duration-500 hover:border-[#F1EFE7]/40 hover:border-solid overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#F1EFE7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#F1EFE7]/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#F1EFE7]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-[#F1EFE7]/60 tracking-wide italic" style={{ fontFamily: "Arial, sans-serif" }}>
                    Coming Soon
                  </h3>
                  <p className="font-light text-sm leading-relaxed opacity-50 text-[#F1EFE7] tracking-wide" style={{ fontFamily: "Arial, sans-serif" }}>
                    Exciting new portfolio company announcement coming soon.
                  </p>
                </div>
              </div>

              <div
                className="group relative bg-gradient-to-br from-black via-[#0a0a0a] to-black border border-dashed border-[#F1EFE7]/20 p-10 rounded-2xl min-h-[350px] flex flex-col justify-center items-center cursor-pointer transition-all duration-500 hover:border-[#F1EFE7]/40 hover:border-solid overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#F1EFE7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#F1EFE7]/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#F1EFE7]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-[#F1EFE7]/60 tracking-wide italic" style={{ fontFamily: "Arial, sans-serif" }}>
                    Coming Soon
                  </h3>
                  <p className="font-light text-sm leading-relaxed opacity-50 text-[#F1EFE7] tracking-wide" style={{ fontFamily: "Arial, sans-serif" }}>
                    Exciting new portfolio company announcement coming soon.
                  </p>
                </div>
              </div>

              <div
                className="group relative bg-gradient-to-br from-black via-[#0a0a0a] to-black border border-dashed border-[#F1EFE7]/20 p-10 rounded-2xl min-h-[350px] flex flex-col justify-center items-center cursor-pointer transition-all duration-500 hover:border-[#F1EFE7]/40 hover:border-solid overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#F1EFE7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#F1EFE7]/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-[#F1EFE7]/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-[#F1EFE7]/60 tracking-wide italic" style={{ fontFamily: "Arial, sans-serif" }}>
                    Coming Soon
                  </h3>
                  <p className="font-light text-sm leading-relaxed opacity-50 text-[#F1EFE7] tracking-wide" style={{ fontFamily: "Arial, sans-serif" }}>
                    Exciting new portfolio company announcement coming soon.
                  </p>
                </div>
              </div>
            </div>

            {/* Join the Foundry Section */}
            <div className="flex flex-col items-center justify-center mt-16 md:mt-24 mb-8">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-center tracking-tight" style={{ color: "#F1EFE7" }}>
                Join the Foundry
              </h3>
              <p className="text-lg md:text-xl font-light text-center mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: "#F1EFE7" }}>
                Come join the movement to democratize the world.
              </p>
              <Link
                href="https://forms.gle/eqmwtHuwrnafYych7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold bg-[#F1EFE7] text-black px-8 py-4 rounded-xl hover:bg-[#F1EFE7]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#F1EFE7]/50 transform hover:-translate-y-1 tracking-wider uppercase"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="vcs" className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(241,239,231,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(241,239,231,0.02)_1px,transparent_1px)] bg-[size:100px_100px]"></div>


        {/* Radial gradient overlays */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/4 w-[650px] h-[650px] bg-[#F1EFE7]/4 rounded-full blur-[110px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[550px] h-[550px] bg-[#F1EFE7]/3 rounded-full blur-[90px]"></div>
        </div>

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8 py-16">
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="text-6xl md:text-7xl lg:text-8xl mb-8 text-center tracking-tight" style={{ color: "#F1EFE7", fontFamily: "'Times New Roman', serif" }}>
              VC's
            </h2>
            <p
              className="text-center text-base md:text-lg lg:text-xl text-[#F1EFE7] opacity-80 max-w-3xl mx-auto mb-20 px-4 leading-relaxed font-light tracking-wide"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Foundry brings together startups and real VC partners who actually move the needle. We cut through the noise to connect founders with the capital and connections they need—no fluff, just results. If you're serious about building and closing deals, Foundry is where both founders and VCs or potential partners want to be.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Dorm Room Fund Card */}
              <Link
                href="https://www.dormroomfund.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-black via-[#0a0a0a] to-black border border-[#F1EFE7]/30 p-10 rounded-2xl min-h-[350px] flex flex-col justify-between cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-[#F1EFE7]/60 hover:shadow-2xl hover:shadow-[#F1EFE7]/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F1EFE7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#F1EFE7]/10 rounded-xl flex items-center justify-center group-hover:bg-[#F1EFE7]/20 transition-colors duration-300 px-2">
                      <img
                        src="/dorm-room-fund-logo.svg"
                        alt="Dorm Room Fund"
                        className="h-10 md:h-12 w-auto object-contain filter brightness-0 invert"
                      />
                    </div>
                    <span className="text-xs font-semibold bg-gradient-to-r from-[#F1EFE7] to-[#d4d2ca] bg-clip-text text-transparent px-3 py-1.5 rounded-full border border-[#F1EFE7]/30" style={{ fontFamily: "Arial, sans-serif" }}>Student-Run VC</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#F1EFE7] to-[#c9c7bf] bg-clip-text text-transparent tracking-tight" style={{ fontFamily: "Arial, sans-serif" }}>
                    Dorm Room Fund
                  </h3>
                  <p className="font-light text-base leading-relaxed text-[#F1EFE7]/70 tracking-wide" style={{ fontFamily: "Arial, sans-serif" }}>
                    Student-run venture capital fund that invests in student-run startups. Providing funding and
                    mentorship to the next generation of entrepreneurs.
                  </p>
                </div>
                <div className="relative mt-8 flex items-center text-[#F1EFE7]/60 group-hover:text-[#F1EFE7] transition-colors duration-300">
                  <span className="text-sm font-medium tracking-wider uppercase" style={{ fontFamily: "Arial, sans-serif" }}>Learn more</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              {/* Afore Capital Card */}
              <Link
                href="https://www.afore.vc"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-black via-[#0a0a0a] to-black border border-[#F1EFE7]/30 p-10 rounded-2xl min-h-[350px] flex flex-col justify-between cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-[#F1EFE7]/60 hover:shadow-2xl hover:shadow-[#F1EFE7]/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F1EFE7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#F1EFE7]/10 rounded-xl flex items-center justify-center group-hover:bg-[#F1EFE7]/20 transition-colors duration-300 px-2">
                      <img
                        src="/afore-capital-logo.png"
                        alt="Afore Capital"
                        className="h-10 md:h-12 w-auto object-contain filter brightness-0 invert"
                      />
                    </div>
                    <span className="text-xs font-semibold bg-gradient-to-r from-[#F1EFE7] to-[#d4d2ca] bg-clip-text text-transparent px-3 py-1.5 rounded-full border border-[#F1EFE7]/30" style={{ fontFamily: "Arial, sans-serif" }}>Early Stage VC</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#F1EFE7] to-[#c9c7bf] bg-clip-text text-transparent tracking-tight" style={{ fontFamily: "Arial, sans-serif" }}>
                    Afore Capital
                  </h3>
                  <p className="font-light text-base leading-relaxed text-[#F1EFE7]/70 tracking-wide" style={{ fontFamily: "Arial, sans-serif" }}>
                    Early-stage venture capital firm focused on backing exceptional founders building transformative
                    companies across various industries.
                  </p>
                </div>
                <div className="relative mt-8 flex items-center text-[#F1EFE7]/60 group-hover:text-[#F1EFE7] transition-colors duration-300">
                  <span className="text-sm font-medium tracking-wider uppercase" style={{ fontFamily: "Arial, sans-serif" }}>Learn more</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              {/* Pear VC Card */}
              <Link
                href="https://pear.vc"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-black via-[#0a0a0a] to-black border border-[#F1EFE7]/30 p-10 rounded-2xl min-h-[350px] flex flex-col justify-between cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-[#F1EFE7]/60 hover:shadow-2xl hover:shadow-[#F1EFE7]/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F1EFE7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#F1EFE7]/10 rounded-xl flex items-center justify-center group-hover:bg-[#F1EFE7]/20 transition-colors duration-300 px-2">
                      <img
                        src="/pear-vc-logo.png"
                        alt="Pear VC"
                        className="h-10 md:h-12 w-auto object-contain filter brightness-0 invert"
                      />
                    </div>
                    <span className="text-xs font-semibold bg-gradient-to-r from-[#F1EFE7] to-[#d4d2ca] bg-clip-text text-transparent px-3 py-1.5 rounded-full border border-[#F1EFE7]/30" style={{ fontFamily: "Arial, sans-serif" }}>Pre-Seed & Seed VC</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#F1EFE7] to-[#c9c7bf] bg-clip-text text-transparent tracking-tight" style={{ fontFamily: "Arial, sans-serif" }}>
                    Pear VC
                  </h3>
                  <p className="font-light text-base leading-relaxed text-[#F1EFE7]/70 tracking-wide" style={{ fontFamily: "Arial, sans-serif" }}>
                    Pre-seed and seed stage venture capital firm that partners with entrepreneurs from day zero to build
                    category-defining companies.
                  </p>
                </div>
                <div className="relative mt-8 flex items-center text-[#F1EFE7]/60 group-hover:text-[#F1EFE7] transition-colors duration-300">
                  <span className="text-sm font-medium tracking-wider uppercase" style={{ fontFamily: "Arial, sans-serif" }}>Learn more</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>

              {/* Greylock Partners Card */}
              <Link
                href="https://greylock.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-black via-[#0a0a0a] to-black border border-[#F1EFE7]/30 p-10 rounded-2xl min-h-[350px] flex flex-col justify-between cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:border-[#F1EFE7]/60 hover:shadow-2xl hover:shadow-[#F1EFE7]/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#F1EFE7]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#F1EFE7]/10 rounded-xl flex items-center justify-center group-hover:bg-[#F1EFE7]/20 transition-colors duration-300 px-2">
                      <img
                        src="/greylock-logo.png"
                        alt="Greylock Partners"
                        className="h-10 md:h-12 w-auto object-contain filter brightness-0 invert"
                      />
                    </div>
                    <span className="text-xs font-semibold bg-gradient-to-r from-[#F1EFE7] to-[#d4d2ca] bg-clip-text text-transparent px-3 py-1.5 rounded-full border border-[#F1EFE7]/30" style={{ fontFamily: "Arial, sans-serif" }}>AI-First VC</span>
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#F1EFE7] to-[#c9c7bf] bg-clip-text text-transparent tracking-tight" style={{ fontFamily: "Arial, sans-serif" }}>
                    Greylock Partners
                  </h3>
                  <p className="font-light text-base leading-relaxed text-[#F1EFE7]/70 tracking-wide" style={{ fontFamily: "Arial, sans-serif" }}>
                    Leading venture capital firm investing in consumer and enterprise software companies, with a focus
                    on AI-first startups. Partners with entrepreneurs from pre-seed through growth stages.
                  </p>
                </div>
                <div className="relative mt-8 flex items-center text-[#F1EFE7]/60 group-hover:text-[#F1EFE7] transition-colors duration-300">
                  <span className="text-sm font-medium tracking-wider uppercase" style={{ fontFamily: "Arial, sans-serif" }}>Learn more</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>

            {/* Become a Partner Section */}
            <div className="flex flex-col items-center justify-center mt-16 md:mt-24 mb-8">
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center tracking-tight" style={{ color: "#F1EFE7", fontFamily: "Arial, sans-serif" }}>
                Become a Partner
              </h3>
              <p className="text-lg md:text-xl font-light text-center mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: "#F1EFE7", fontFamily: "Arial, sans-serif" }}>
                Join the Over $1 billion dollars supporting the foundry and gain access to the best deals.
              </p>
              <Link
                href="https://forms.gle/4QJVBz56nvrjSxHSA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold bg-[#F1EFE7] text-black px-8 py-4 rounded-xl hover:bg-[#F1EFE7]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#F1EFE7]/50 transform hover:-translate-y-1 tracking-wider uppercase inline-block" style={{ fontFamily: "Arial, sans-serif" }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="h-48 bg-black"></div>

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
