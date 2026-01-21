"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  animation?: "fade-up" | "fade" | "scale" | "slide-left" | "slide-right"
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  animation = "fade-up",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const animationClasses = {
    "fade-up": "scroll-animate",
    fade: "scroll-animate-fade",
    scale: "scroll-animate-scale",
    "slide-left": "scroll-animate-left",
    "slide-right": "scroll-animate-right",
  }

  return (
    <div
      ref={ref}
      className={cn(animationClasses[animation], isVisible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// Wrapper for staggered children animations
interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 100,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn("stagger-children", isVisible && "is-visible", className)}
      style={{ "--stagger-delay": `${staggerDelay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  )
}
