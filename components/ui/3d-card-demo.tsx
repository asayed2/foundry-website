"use client"

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"

interface EventCardProps {
  title: string
  description: string
  date?: string
  location?: string
  imageUrl?: string
  buttonText?: string
  buttonHref?: string
  hasRefinedBorder?: boolean
}

export function EventCard({
  title,
  description,
  date,
  location,
  imageUrl,
  buttonText = "Learn More",
  buttonHref = "#",
  hasRefinedBorder = false,
}: EventCardProps) {
  return (
    <CardContainer className="inter-var">
      <CardBody
        className={`bg-black relative group/card dark:hover:shadow-2xl dark:hover:shadow-[#F1EFE7]/[0.1] ${
          hasRefinedBorder ? "border border-[#F1EFE7]" : "border-4"
        } w-full max-w-sm sm:max-w-md lg:max-w-[30rem] h-auto rounded-xl p-4 sm:p-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#F1EFE7]/20 hover:border-opacity-100`}
        style={{ borderColor: hasRefinedBorder ? "#F1EFE7" : "#F1EFE7" }}
      >
        <CardItem translateZ="50" className="text-lg sm:text-xl font-bold mb-2" style={{ color: "#F1EFE7" }}>
          {title}
        </CardItem>

        {date && (
          <CardItem
            translateZ="40"
            className="text-xs sm:text-sm font-light mb-2 opacity-80"
            style={{ color: "#F1EFE7" }}
          >
            {date}
          </CardItem>
        )}

        {location && (
          <CardItem
            translateZ="40"
            className="text-xs sm:text-sm font-light mb-4 opacity-80"
            style={{ color: "#F1EFE7" }}
          >
            📍 {location}
          </CardItem>
        )}

        <CardItem
          as="p"
          translateZ="60"
          className="text-xs sm:text-sm max-w-full mt-2 font-light leading-relaxed"
          style={{ color: "#F1EFE7" }}
        >
          {description}
        </CardItem>

        {imageUrl && (
          <CardItem translateZ="100" className="w-full mt-4">
            <img
              src={imageUrl || "/placeholder.svg"}
              height="200"
              width="400"
              className="h-32 sm:h-40 w-full object-cover rounded-lg group-hover/card:shadow-xl"
              alt={title}
            />
          </CardItem>
        )}

        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 mt-6">
          <CardItem
            translateZ={20}
            as="a"
            href={buttonHref}
            target="_blank"
            className="px-3 sm:px-4 py-2 rounded-lg text-xs font-normal hover:opacity-80 transition-opacity"
            style={{ color: "#F1EFE7" }}
          >
            {buttonText} →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-3 sm:px-4 py-2 rounded-lg text-xs font-bold transition-colors hover:opacity-90 w-full sm:w-auto"
            style={{ backgroundColor: "#F1EFE7", color: "black" }}
          >
            RSVP
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  )
}
