"use client"

import type React from "react"

import { useState, useRef, type ReactNode } from "react"
import { motion } from "framer-motion"

interface ThreeDCardProps {
  children: ReactNode
  className?: string
  intensity?: number
  border?: boolean
  shadow?: boolean
  glare?: boolean
}

export function ThreeDCard({
  children,
  className = "",
  intensity = 10,
  border = false,
  shadow = true,
  glare = true,
}: ThreeDCardProps) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [glarePosition, setGlarePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = e.clientX
    const mouseY = e.clientY

    // Calculate rotation based on mouse position relative to card center
    const rotateY = ((mouseX - centerX) / (rect.width / 2)) * intensity
    const rotateX = -((mouseY - centerY) / (rect.height / 2)) * intensity

    // Calculate glare position
    const glareX = ((mouseX - rect.left) / rect.width) * 100
    const glareY = ((mouseY - rect.top) / rect.height) * 100

    setRotateX(rotateX)
    setRotateY(rotateY)
    setGlarePosition({ x: glareX, y: glareY })
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX,
        rotateY,
        boxShadow: shadow
          ? `0px ${Math.abs(rotateX) / 2 + 5}px ${Math.abs(rotateX) + 10}px rgba(0, 0, 0, 0.1)`
          : "none",
        border: border ? "1px solid rgba(255, 255, 255, 0.2)" : "none",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {children}
      {glare && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg" style={{ zIndex: 1 }}>
          <div
            className="absolute w-[200%] h-[200%] bg-gradient-to-br from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"
            style={{
              top: `${glarePosition.y - 100}%`,
              left: `${glarePosition.x - 100}%`,
              transform: `rotate(${rotateY / 2}deg)`,
            }}
          />
        </div>
      )}
    </motion.div>
  )
}

