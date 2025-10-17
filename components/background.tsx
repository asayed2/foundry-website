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
    if (process.env.NODE_ENV === "development" && !placeholder) {
      console.warn("No placeholder provided for video")
    }
  }, [placeholder])

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

      const handleLoadStart = () => {}

      video.addEventListener("loadeddata", handleLoadedData)
      video.addEventListener("canplay", handleCanPlay)
      video.addEventListener("error", handleError)
      video.addEventListener("loadstart", handleLoadStart)
      video.load()

      if (video.readyState >= 2) {
        setVideoLoaded(true)
      }

      return () => {
        video.removeEventListener("loadeddata", handleLoadedData)
        video.removeEventListener("canplay", handleCanPlay)
        video.removeEventListener("error", handleError)
        video.removeEventListener("loadstart", handleLoadStart)
      }
    }
  }, [src])

  useEffect(() => {
    if (videoRef.current && videoLoaded && !videoError) {
      videoRef.current.play().catch((error) => {})
    }
  }, [videoLoaded, videoError])

  return (
    <>
      {placeholder && !videoError ? (
        <Image
          src={placeholder || "/placeholder.svg"}
          loading="eager"
          priority
          sizes="100vw"
          alt="Background"
          className={cn(className, { invisible: videoLoaded && !videoError })}
          quality={100}
          fill
        />
      ) : null}
      {!videoError ? (
        <video
          ref={videoRef}
          src={src}
          muted
          playsInline
          loop
          controls={false}
          preload="auto"
          className={cn(className, { invisible: !videoLoaded })}
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
