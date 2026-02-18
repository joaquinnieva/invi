"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"

type AnimationType = "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scale" | "slideUp"

interface AnimateOnScrollProps {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  duration?: number
  threshold?: number
  className?: string
}

const animations: Record<AnimationType, { initial: string; animate: string }> = {
  fadeUp: {
    initial: "opacity-0 translate-y-8",
    animate: "opacity-100 translate-y-0",
  },
  fadeIn: {
    initial: "opacity-0",
    animate: "opacity-100",
  },
  fadeLeft: {
    initial: "opacity-0 -translate-x-8",
    animate: "opacity-100 translate-x-0",
  },
  fadeRight: {
    initial: "opacity-0 translate-x-8",
    animate: "opacity-100 translate-x-0",
  },
  scale: {
    initial: "opacity-0 scale-95",
    animate: "opacity-100 scale-100",
  },
  slideUp: {
    initial: "opacity-0 translate-y-12",
    animate: "opacity-100 translate-y-0",
  },
}

export function AnimateOnScroll({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 700,
  threshold = 0.1,
  className = "",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      observer.disconnect()
    }
  }, [threshold])

  const { initial, animate } = animations[animation]

  return (
    <div
      ref={ref}
      className={`transition-all ease-out ${isVisible ? animate : initial} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

interface StaggerChildrenProps {
  children: ReactNode[]
  animation?: AnimationType
  staggerDelay?: number
  duration?: number
  threshold?: number
  className?: string
  childClassName?: string
}

export function StaggerChildren({
  children,
  animation = "fadeUp",
  staggerDelay = 100,
  duration = 700,
  threshold = 0.1,
  className = "",
  childClassName = "",
}: StaggerChildrenProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold }
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      observer.disconnect()
    }
  }, [threshold])

  const { initial, animate } = animations[animation]

  return (
    <div ref={ref} className={className}>
      {children.map((child, index) => (
        <div
          key={index}
          className={`transition-all ease-out ${isVisible ? animate : initial} ${childClassName}`}
          style={{
            transitionDuration: `${duration}ms`,
            transitionDelay: `${index * staggerDelay}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  )
}
