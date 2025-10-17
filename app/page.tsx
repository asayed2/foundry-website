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
import { EventCard } from "@/components/ui/3d-card-demo"
import { Modal } from "@/components/ui/modal"

export default function Home() {
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false)

  return (
    <>
      <main className="p-inset h-[100dvh] w-full border-border text-border bg-border">
        <div className="relative h-full w-full">
          <FloatingHeader />
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
          <Background src="https://blobs.vusercontent.net/blob/istockphoto-1421524030-640_adpp_is-PtXS1UnBN8Pund3mLnNVv2IUeR1opE.mp4" placeholder="/alt-placeholder.png" />
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <h1 className="font-serif text-white text-8xl md:text-9xl lg:text-[12rem] leading-[0.6] text-center mb-16 [text-shadow:0_2px_4px_rgba(0,0,0,0.2)]">
              the
              <br />
              <span className="italic">foundry</span>
            </h1>

            <div className="flex flex-col items-center gap-6">
              <p className="text-white/80 text-sm md:text-base font-light tracking-wider uppercase text-center">
                Backed by
              </p>
              <div className="flex items-center justify-center gap-8 md:gap-12">
                <Link
                  href="https://www.dormroomfund.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-48 h-20 md:w-64 md:h-24 flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/dorm-room-fund-logo.svg"
                    alt="Dorm Room Fund"
                    className="h-full w-auto object-contain filter brightness-0 invert"
                  />
                </Link>
                <Link
                  href="https://www.afore.vc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-20 h-8 md:w-24 md:h-10 flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/afore-capital-logo.png"
                    alt="Afore Capital"
                    className="h-full w-auto object-contain filter brightness-0 invert"
                  />
                </Link>
                <Link
                  href="https://pear.vc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-50 h-20 md:w-60 md:h-25 flex items-center justify-center hover:opacity-80 transition-opacity"
                >
                  <img
                    src="/pear-vc-logo.png"
                    alt="Pear VC"
                    className="h-full w-auto object-contain filter brightness-0 invert"
                  />
                </Link>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>

      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>

        {/* Animated content that scrolls away */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-8">
          <div className="max-w-4xl mx-auto text-center transform transition-all duration-1000 ease-out">
            <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl mb-8" style={{ color: "#F1EFE7" }}>
              About <span className="italic">Us</span>
            </h2>

            <div className="space-y-8">
              <p className="text-xl md:text-2xl font-light leading-relaxed" style={{ color: "#F1EFE7" }}>
                Better deals for VCs, equal opportunities for Founders.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-96 bg-black"></div>

      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8 py-16">
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl mb-16 text-center" style={{ color: "#F1EFE7" }}>
              Companies
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <Link
                href="https://entropytoorder.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black border-2 p-8 rounded-lg min-h-[300px] flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#F1EFE7]/20"
                style={{ borderColor: "#F1EFE7" }}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "#F1EFE7" }}>
                    ETO
                  </h3>
                  <p className="font-light text-sm leading-relaxed" style={{ color: "#F1EFE7" }}>
                    ETO is a Web 3 finance company creating Synthetic assets bringing real world value on-chain through
                    purchasable tokens with structured avenues of Yield.
                  </p>
                </div>
                <div className="mt-6">
                  <span className="text-xs font-semibold bg-[#F1EFE7] text-black px-2 py-1 rounded">IPO: ETO</span>
                </div>
              </Link>

              <div
                className="bg-black border-2 p-8 rounded-lg min-h-[300px] flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#F1EFE7]/20"
                style={{ borderColor: "#F1EFE7" }}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "#F1EFE7" }}>
                    Spaces.ai
                  </h3>
                  <p className="font-light text-sm leading-relaxed" style={{ color: "#F1EFE7" }}>
                    Making interior design easy with AI.
                  </p>
                </div>
                <div className="mt-6">
                  <span className="text-xs font-semibold bg-[#F1EFE7] text-black px-2 py-1 rounded">
                    Acquired By: Invitae
                  </span>
                </div>
              </div>

              <div
                className="bg-black border-2 p-8 rounded-lg min-h-[300px] flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#F1EFE7]/20"
                style={{ borderColor: "#F1EFE7" }}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "#F1EFE7" }}>
                    Ulterius
                  </h3>
                  <p className="font-light text-sm leading-relaxed" style={{ color: "#F1EFE7" }}>
                    Innovative technology solutions for the modern enterprise.
                  </p>
                </div>
                <div className="mt-6">
                  <span className="text-xs font-semibold bg-[#F1EFE7] text-black px-2 py-1 rounded">Series A</span>
                </div>
              </div>

              <div
                className="bg-black border-2 p-8 rounded-lg min-h-[300px] flex flex-col justify-center items-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#F1EFE7]/20"
                style={{ borderColor: "#F1EFE7" }}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "#F1EFE7" }}>
                    Coming Soon
                  </h3>
                  <p className="font-light text-sm leading-relaxed opacity-70" style={{ color: "#F1EFE7" }}>
                    Exciting new portfolio company announcement coming soon.
                  </p>
                </div>
              </div>

              <div
                className="bg-black border-2 p-8 rounded-lg min-h-[300px] flex flex-col justify-center items-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#F1EFE7]/20"
                style={{ borderColor: "#F1EFE7" }}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "#F1EFE7" }}>
                    Coming Soon
                  </h3>
                  <p className="font-light text-sm leading-relaxed opacity-70" style={{ color: "#F1EFE7" }}>
                    Exciting new portfolio company announcement coming soon.
                  </p>
                </div>
              </div>

              <div
                className="bg-black border-2 p-8 rounded-lg min-h-[300px] flex flex-col justify-center items-center cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#F1EFE7]/20"
                style={{ borderColor: "#F1EFE7" }}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "#F1EFE7" }}>
                    Coming Soon
                  </h3>
                  <p className="font-light text-sm leading-relaxed opacity-70" style={{ color: "#F1EFE7" }}>
                    Exciting new portfolio company announcement coming soon.
                  </p>
                </div>
              </div>

              <div
                className="bg-black border-2 p-8 rounded-lg min-h-[300px] flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#F1EFE7]/20"
                style={{ borderColor: "#F1EFE7" }}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "#F1EFE7" }}>
                    Join the Foundry
                  </h3>
                  <p className="font-light text-sm leading-relaxed" style={{ color: "#F1EFE7" }}>
                    Come join the movement to democratize the world.
                  </p>
                </div>
                <div className="mt-6">
                  <button
                    onClick={() => setIsJoinModalOpen(true)}
                    className="text-xs font-semibold bg-[#F1EFE7] text-black px-4 py-2 rounded hover:bg-[#F1EFE7]/90 transition-colors"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-96 bg-black"></div>

      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-8 py-16">
          <div className="max-w-7xl mx-auto w-full">
            <h2 className="font-serif text-6xl md:text-7xl lg:text-8xl mb-16 text-center" style={{ color: "#F1EFE7" }}>
              VC's
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Dorm Room Fund Card */}
              <Link
                href="https://www.dormroomfund.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black border-2 p-8 rounded-lg min-h-[300px] flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#F1EFE7]/20"
                style={{ borderColor: "#F1EFE7" }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-16 mb-6 flex items-center justify-center">
                    <img
                      src="/dorm-room-fund-logo.svg"
                      alt="Dorm Room Fund"
                      className="h-full w-auto object-contain"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(94%) sepia(8%) saturate(346%) hue-rotate(314deg) brightness(98%) contrast(92%)",
                      }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "#F1EFE7" }}>
                    Dorm Room Fund
                  </h3>
                  <p className="font-light text-sm leading-relaxed" style={{ color: "#F1EFE7" }}>
                    Student-run venture capital fund that invests in student-run startups. Providing funding and
                    mentorship to the next generation of entrepreneurs.
                  </p>
                </div>
                <div className="mt-6 text-center">
                  <span className="text-xs font-semibold bg-[#F1EFE7] text-black px-2 py-1 rounded">
                    Student-Run VC
                  </span>
                </div>
              </Link>

              {/* Afore Capital Card */}
              <Link
                href="https://www.afore.vc"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black border-2 p-8 rounded-lg min-h-[300px] flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#F1EFE7]/20"
                style={{ borderColor: "#F1EFE7" }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-16 mb-6 flex items-center justify-center">
                    <img
                      src="/afore-capital-logo.png"
                      alt="Afore Capital"
                      className="h-full w-auto object-contain"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(94%) sepia(8%) saturate(346%) hue-rotate(314deg) brightness(98%) contrast(92%)",
                      }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "#F1EFE7" }}>
                    Afore Capital
                  </h3>
                  <p className="font-light text-sm leading-relaxed" style={{ color: "#F1EFE7" }}>
                    Early-stage venture capital firm focused on backing exceptional founders building transformative
                    companies across various industries.
                  </p>
                </div>
                <div className="mt-6 text-center">
                  <span className="text-xs font-semibold bg-[#F1EFE7] text-black px-2 py-1 rounded">
                    Early Stage VC
                  </span>
                </div>
              </Link>

              {/* Pear VC Card */}
              <Link
                href="https://pear.vc"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black border-2 p-8 rounded-lg min-h-[300px] flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#F1EFE7]/20"
                style={{ borderColor: "#F1EFE7" }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-16 mb-6 flex items-center justify-center">
                    <img
                      src="/pear-vc-logo.png"
                      alt="Pear VC"
                      className="h-full w-auto object-contain"
                      style={{
                        filter:
                          "brightness(0) saturate(100%) invert(94%) sepia(8%) saturate(346%) hue-rotate(314deg) brightness(98%) contrast(92%)",
                      }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "#F1EFE7" }}>
                    Pear VC
                  </h3>
                  <p className="font-light text-sm leading-relaxed" style={{ color: "#F1EFE7" }}>
                    Pre-seed and seed stage venture capital firm that partners with entrepreneurs from day zero to build
                    category-defining companies.
                  </p>
                </div>
                <div className="mt-6 text-center">
                  <span className="text-xs font-semibold bg-[#F1EFE7] text-black px-2 py-1 rounded">
                    Pre-Seed & Seed VC
                  </span>
                </div>
              </Link>

              {/* Become a Partner block */}
              <div
                className="bg-black border-2 p-8 rounded-lg min-h-[300px] flex flex-col justify-between cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#F1EFE7]/20"
                style={{ borderColor: "#F1EFE7" }}
              >
                <div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: "#F1EFE7" }}>
                    Become a Partner
                  </h3>
                  <p className="font-light text-sm leading-relaxed" style={{ color: "#F1EFE7" }}>
                    Join the Over $1 billion dollars supporting the foundry and gain access to the best deals.
                  </p>
                </div>
                <div className="mt-6">
                  <button className="text-xs font-semibold bg-[#F1EFE7] text-black px-4 py-2 rounded hover:bg-[#F1EFE7]/90 transition-colors">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-96 bg-black"></div>

      <section className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black"></div>

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-16">
          <div className="max-w-7xl mx-auto w-full">
            <h2
              className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 sm:mb-16 text-center"
              style={{ color: "#F1EFE7" }}
            >
              Events
            </h2>

            <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8 lg:gap-16 max-w-6xl mx-auto items-center">
              <EventCard
                title="Startup Pitch Night"
                description="Join us for an evening of innovative startup pitches from our portfolio companies. Network with founders, investors, and industry leaders."
                date="March 15, 2024"
                location="San Francisco, CA"
                imageUrl="/startup-pitch-event.png"
                buttonText="Register"
                buttonHref="#"
                hasRefinedBorder={true}
              />

              <EventCard
                title="VC Masterclass"
                description="Learn from seasoned venture capitalists about deal sourcing, due diligence, and portfolio management in this exclusive workshop."
                date="April 22, 2024"
                location="New York, NY"
                imageUrl="/business-conference-room.png"
                buttonText="Apply"
                buttonHref="#"
                hasRefinedBorder={true}
              />

              <EventCard
                title="Founder's Retreat"
                description="A weekend retreat for founders to connect, share experiences, and learn from each other in a relaxed mountain setting."
                date="May 10-12, 2024"
                location="Lake Tahoe, CA"
                imageUrl="/mountain-retreat-conference.jpg"
                buttonText="Join"
                buttonHref="#"
                hasRefinedBorder={true}
              />
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
