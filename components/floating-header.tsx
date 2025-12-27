"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function FloatingHeader() {
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const phlTime = now.toLocaleTimeString("en-US", {
        timeZone: "America/New_York", // Philadelphia uses Eastern Time
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      setCurrentTime(phlTime)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <header className="fixed top-7 left-1/2 -translate-x-1/2 z-[9999] isolate">
      <nav className="bg-black/40 backdrop-blur-md border border-[#F1EFE7]/30 px-8 py-4 shadow-lg shadow-black/50 rounded-full flex items-center justify-center gap-5 md:gap-10 whitespace-nowrap">
        {/* Logo */}
        <Link href="#about" onClick={(e) => handleNavClick(e, "#about")} className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0">
          <div className="w-8 h-8 bg-black border border-[#F1EFE7]/40 rounded-md flex items-center justify-center hover:border-[#F1EFE7]/60 transition-colors">
            <span className="text-[#F1EFE7] text-sm font-bold italic" style={{ fontFamily: "'Times New Roman', serif", letterSpacing: "-0.03em" }}>f</span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#about"
            onClick={(e) => handleNavClick(e, "#about")}
            className="text-[#F1EFE7]/80 hover:text-[#F1EFE7] text-sm font-medium transition-colors duration-200"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            About
          </a>
          <a
            href="#companies"
            onClick={(e) => handleNavClick(e, "#companies")}
            className="text-[#F1EFE7]/80 hover:text-[#F1EFE7] text-sm font-medium transition-colors duration-200"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Companies
          </a>
          <a
            href="#vcs"
            onClick={(e) => handleNavClick(e, "#vcs")}
            className="text-[#F1EFE7]/80 hover:text-[#F1EFE7] text-sm font-medium transition-colors duration-200"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Partners
          </a>
          <a
            href="#events"
            onClick={(e) => handleNavClick(e, "#events")}
            className="text-[#F1EFE7]/80 hover:text-[#F1EFE7] text-sm font-medium transition-colors duration-200"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Events
          </a>
        </div>

        {/* CTA Button */}
        <Link
          href="https://forms.gle/eqmwtHuwrnafYych7"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#F1EFE7] text-black px-5 py-2 text-sm font-medium transition-colors duration-200 hover:bg-[#F1EFE7]/90 flex-shrink-0"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Join Foundry
        </Link>

        {/* Time/Location */}
        <div className="hidden lg:flex items-center gap-2 text-[#F1EFE7]/70 text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{currentTime}</span>
          <span className="text-[#F1EFE7]/50">PHL</span>
        </div>
      </nav>
    </header>
  )
}
