"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: "lift" | "tilt" | "glow" | "scale" | "none"
}

export function AnimatedCard({ children, className = "", hoverEffect = "lift" }: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getHoverAnimation = () => {
    switch (hoverEffect) {
      case "lift":
        return { y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }
      case "tilt":
        return { rotateX: 5, rotateY: 5, z: 10 }
      case "glow":
        return { boxShadow: "0 0 15px 2px var(--primary)" }
      case "scale":
        return { scale: 1.03 }
      case "none":
        return {}
      default:
        return { y: -10 }
    }
  }

  return (
    <motion.div
      className={cn("transition-all duration-300 ease-in-out", className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={getHoverAnimation()}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {children}
    </motion.div>
  )
}

