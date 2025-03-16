"use client"

import type React from "react"

import { useRef } from "react"
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion"
import { wrap } from "@motionone/utils"

interface MarqueeProps {
  children: React.ReactNode
  baseVelocity?: number
  direction?: "left" | "right"
  className?: string
}

export function MarqueeText({ children, baseVelocity = 5, direction = "left", className = "" }: MarqueeProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })

  const directionFactor = direction === "right" ? -1 : 1
  const x = useTransform(baseX, (v) => `${wrap(0, -50, v)}%`)

  const containerRef = useRef<HTMLDivElement>(null)

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor * baseVelocity * (delta / 1000)

    // Add scroll velocity influence
    moveBy += directionFactor * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <div ref={containerRef} className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        <span className="block mr-4">{children}</span>
        <span className="block mr-4">{children}</span>
        <span className="block mr-4">{children}</span>
        <span className="block">{children}</span>
      </motion.div>
    </div>
  )
}

