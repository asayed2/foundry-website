"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const getFileExtension = (url: string): string => {
  return url.split(".").pop()?.toLowerCase() || ""
}

const isVideo = (extension: string): boolean => {
  const videoExtensions = ["mp4", "webm", "ogg", "mov", "avi", "m4v"]
  return videoExtensions.includes(extension)
}

const VideoWithPlaceholder = ({
  src,
  className,
  placeholder,
}: {
  src: string
  className?: string
  placeholder?: string
}) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    const video = videoRef.current

    if (video) {
      const handleLoadedData = () => {
        setVideoLoaded(true)
        setVideoError(false)
      }

      const handleCanPlay = () => {
        setVideoLoaded(true)
        setVideoError(false)
      }

      const handleError = () => {
        setVideoError(true)
        setVideoLoaded(false)
      }

      video.addEventListener("loadeddata", handleLoadedData)
      video.addEventListener("canplay", handleCanPlay)
      video.addEventListener("error", handleError)
      video.load()

      if (video.readyState >= 2) {
        setVideoLoaded(true)
      }

      return () => {
        video.removeEventListener("loadeddata", handleLoadedData)
        video.removeEventListener("canplay", handleCanPlay)
        video.removeEventListener("error", handleError)
      }
    }
  }, [src])

  useEffect(() => {
    if (videoRef.current && videoLoaded && !videoError) {
      videoRef.current.play().catch(() => {})
    }
  }, [videoLoaded, videoError])

  return (
    <>
      {/* Black background while video loads - no placeholder image flash */}
      <div className={cn(className, "bg-black", { invisible: videoLoaded && !videoError })} />
      {!videoError ? (
        <video
          ref={videoRef}
          src={src}
          muted
          playsInline
          loop
          controls={false}
          preload="auto"
          className={cn(className, "transition-opacity duration-500", videoLoaded ? "opacity-100" : "opacity-0")}
        />
      ) : (
        placeholder && (
          <Image
            src={placeholder || "/placeholder.svg"}
            loading="eager"
            priority
            sizes="100vw"
            alt="Background"
            className={className}
            quality={100}
            fill
          />
        )
      )}
    </>
  )
}

export const Background = ({
  src,
  placeholder,
}: {
  src: string
  placeholder?: string
}) => {
  const extension = getFileExtension(src)
  const isVideoFile = isVideo(extension)

  const classNames = "absolute bg-background left-0 top-0 w-full h-full object-cover rounded-[42px] md:rounded-[72px]"

  return (
    <div className="relative w-full h-full">
      {isVideoFile ? (
        <VideoWithPlaceholder src={src} className={classNames} placeholder={placeholder} />
      ) : (
        <Image
          priority
          loading="eager"
          src={src || "/placeholder.svg"}
          alt="Background"
          className={classNames}
          sizes="100vw"
          fill
        />
      )}
    </div>
  )
}
