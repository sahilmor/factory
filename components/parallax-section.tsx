"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  baseVelocity?: number
  direction?: "up" | "down"
  overflow?: boolean
}

export function ParallaxSection({
  children,
  className = "",
  baseVelocity = 0.2,
  direction = "up",
  overflow = false,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const velocity = direction === "up" ? -baseVelocity : baseVelocity
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${velocity * 100}%`])

  return (
    <div ref={ref} className={`relative ${overflow ? "overflow-hidden" : ""} ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  )
}

