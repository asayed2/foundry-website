"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const investors = [
  {
    href: "https://www.dormroomfund.com",
    src: "/dorm-room-fund-logo.svg",
    alt: "Dorm Room Fund",
    className: "w-48 h-20 md:w-64 md:h-24",
  },
  {
    href: "https://www.afore.vc",
    src: "/afore-capital-logo.png",
    alt: "Afore Capital",
    className: "w-20 h-8 md:w-24 md:h-10",
  },
  {
    href: "https://pear.vc",
    src: "/pear-vc-logo.png",
    alt: "Pear VC",
    className: "w-50 h-20 md:w-60 md:h-25",
  },
];

export default function BackedByCarousel() {
  return (
    <div className="flex flex-col items-center gap-6">
      <p className="text-white/80 text-sm md:text-base font-light tracking-wider uppercase text-center">
        Backed by
      </p>

      {/* Outer wrapper (mask overflow for smooth scroll) */}
      <div className="overflow-hidden w-full max-w-4xl">
        {/* Scrolling motion container */}
        <motion.div
          className="flex items-center justify-center gap-8 md:gap-12"
        //   initial={{ x: "-100%" }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25, // adjust for speed
          }}
        >
          {/* Duplicate list for seamless looping */}
          {[...investors, ...investors].map((inv, i) => (
            <Link
              key={i}
              href={inv.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${inv.className} flex items-center justify-center hover:opacity-80 transition-opacity`}
            >
              <img
                src={inv.src}
                alt={inv.alt}
                className="h-full w-auto object-contain filter brightness-0 invert"
              />
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
