"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

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

  return (
    <header className="absolute top-8 left-1/2 transform -translate-x-1/2 z-50">
      <nav className="bg-black/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 shadow-lg">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-black/40 rounded-sm flex items-center justify-center">
              <span className="text-white text-xs font-bold">F</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#about" className="text-white hover:text-white/80 text-sm font-medium transition-colors">
              About
            </a>
            <a href="#companies" className="text-white hover:text-white/80 text-sm font-medium transition-colors">
              Companies
            </a>
            <a href="#vcs" className="text-white hover:text-white/80 text-sm font-medium transition-colors">
              VC's
            </a>
          </div>

          {/* CTA Button */}
          <Button
            size="sm"
            className="bg-black/40 hover:bg-black/50 text-white border-white/30 rounded-full px-4 py-2 text-sm font-medium transition-all"
          >
            Join Foundry →
          </Button>

          {/* Time/Location */}
          <div className="hidden lg:flex items-center gap-2 text-white/90 text-sm">
            <span>🕐</span>
            <span>{currentTime}</span>
            <span className="text-white/70">PHL</span>
          </div>
        </div>
      </nav>
    </header>
  )
}
