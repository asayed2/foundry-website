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
    <header className="fixed top-0 left-0 right-0 z-[9999] w-full isolate">
      <nav className="bg-black/50 backdrop-blur-xl border-b border-[#F1EFE7]/20 px-6 py-3 shadow-2xl shadow-black/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 md:gap-8">
          {/* Logo */}
          <Link href="#about" onClick={(e) => handleNavClick(e, "#about")} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-7 h-7 bg-[#F1EFE7]/10 border border-[#F1EFE7]/20 rounded-lg flex items-center justify-center group-hover:bg-[#F1EFE7]/20 transition-colors">
              <span className="text-[#F1EFE7] text-sm font-bold" style={{ fontFamily: "Arial, sans-serif" }}>F</span>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, "#about")}
              className="text-[#F1EFE7] hover:text-[#F1EFE7]/80 text-sm font-medium transition-all duration-300 hover:scale-105 relative group"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F1EFE7] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#companies" 
              onClick={(e) => handleNavClick(e, "#companies")}
              className="text-[#F1EFE7] hover:text-[#F1EFE7]/80 text-sm font-medium transition-all duration-300 hover:scale-105 relative group"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              Companies
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F1EFE7] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a 
              href="#vcs" 
              onClick={(e) => handleNavClick(e, "#vcs")}
              className="text-[#F1EFE7] hover:text-[#F1EFE7]/80 text-sm font-medium transition-all duration-300 hover:scale-105 relative group"
              style={{ fontFamily: "Arial, sans-serif" }}
            >
              VC's
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F1EFE7] group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* CTA Button */}
          <Link
            href="https://forms.gle/eqmwtHuwrnafYych7"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F1EFE7]/10 hover:bg-[#F1EFE7]/20 border border-[#F1EFE7]/30 hover:border-[#F1EFE7]/50 text-[#F1EFE7] rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#F1EFE7]/20 flex items-center gap-2 group"
            style={{ fontFamily: "Arial, sans-serif" }}
          >
            Join Foundry
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          {/* Time/Location */}
          <div className="hidden lg:flex items-center gap-2 text-[#F1EFE7]/80 text-sm" style={{ fontFamily: "Arial, sans-serif" }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{currentTime}</span>
            <span className="text-[#F1EFE7]/60">PHL</span>
          </div>
        </div>
      </nav>
    </header>
  )
}
