"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import { X } from "lucide-react"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose()
      }
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("mousedown", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal content */}
      <div
        ref={modalRef}
        className="relative bg-black border-4 rounded-lg p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto transform transition-all duration-300 hover:shadow-lg hover:shadow-[#F1EFE7]/20"
        style={{ borderColor: "#F1EFE7" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#F1EFE7]/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" style={{ color: "#F1EFE7" }} />
        </button>

        {/* Modal header */}
        <div className="mb-6">
          <h2 className="text-3xl font-bold font-serif" style={{ color: "#F1EFE7" }}>
            {title}
          </h2>
        </div>

        {/* Modal content */}
        <div className="text-base leading-relaxed" style={{ color: "#F1EFE7" }}>
          {children}
        </div>
      </div>
    </div>
  )
}
