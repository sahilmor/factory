"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface FloatingElementProps {
  children: React.ReactNode
  className?: string
  xFactor?: number
  yFactor?: number
  rotationFactor?: number
  delay?: number
  duration?: number
}

export function FloatingElement({
  children,
  className = "",
  xFactor = 10,
  yFactor = 10,
  rotationFactor = 5,
  delay = 0,
  duration = 4,
}: FloatingElementProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 0.5, 1], [-yFactor, 0, yFactor])

  const x = useTransform(scrollYProgress, [0, 0.5, 1], [-xFactor, 0, xFactor])

  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-rotationFactor, 0, rotationFactor])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y, x, rotate }}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay,
          duration,
        },
      }}
      transition={{
        y: {
          duration: duration,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        },
        x: {
          duration: duration * 1.3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        },
        rotate: {
          duration: duration * 1.7,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      }}
    >
      {children}
    </motion.div>
  )
}

