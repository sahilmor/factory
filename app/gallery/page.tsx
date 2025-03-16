"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { X, ZoomIn } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { ScrollProgress } from "@/components/scroll-progress"

export default function GalleryPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [lightboxTitle, setLightboxTitle] = useState<string>("")
  const [lightboxDescription, setLightboxDescription] = useState<string>("")

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 100])

  const categories = [
    { id: "all", name: "All" },
    { id: "facility", name: "Facility" },
    { id: "machinery", name: "Machinery" },
    { id: "products", name: "Products" },
    { id: "team", name: "Team" },
  ]

  const galleryItems = [
    {
      id: 1,
      category: "facility",
      image: "/placeholder.svg?height=800&width=1200",
      title: "Manufacturing Plant Exterior",
      description: "Our state-of-the-art manufacturing facility spanning over 100,000 square feet.",
    },
    {
      id: 2,
      category: "facility",
      image: "/placeholder.svg?height=800&width=1200",
      title: "Production Floor",
      description: "Inside view of our main production area with advanced manufacturing equipment.",
    },
    {
      id: 3,
      category: "machinery",
      image: "/placeholder.svg?height=800&width=1200",
      title: "CNC Machining Center",
      description: "5-axis CNC machine creating precision components with micron-level accuracy.",
    },
    {
      id: 4,
      category: "machinery",
      image: "/placeholder.svg?height=800&width=1200",
      title: "Robotic Assembly Line",
      description: "Automated assembly system with industrial robots for consistent quality.",
    },
    {
      id: 5,
      category: "products",
      image: "/placeholder.svg?height=800&width=1200",
      title: "Precision Components",
      description: "Custom-manufactured precision parts for aerospace applications.",
    },
    {
      id: 6,
      category: "products",
      image: "/placeholder.svg?height=800&width=1200",
      title: "Industrial Automation System",
      description: "Complete automation solution designed for manufacturing efficiency.",
    },
    {
      id: 7,
      category: "team",
      image: "/placeholder.svg?height=800&width=1200",
      title: "Engineering Team",
      description: "Our talented team of engineers working on innovative design solutions.",
    },
    {
      id: 8,
      category: "team",
      image: "/placeholder.svg?height=800&width=1200",
      title: "Quality Control Department",
      description: "Quality assurance specialists ensuring every product meets our standards.",
    },
    {
      id: 9,
      category: "facility",
      image: "/placeholder.svg?height=800&width=1200",
      title: "Research & Development Lab",
      description: "Where innovation happens - our R&D laboratory with testing equipment.",
    },
    {
      id: 10,
      category: "machinery",
      image: "/placeholder.svg?height=800&width=1200",
      title: "Laser Cutting System",
      description: "Precision laser cutting technology for complex material processing.",
    },
    {
      id: 11,
      category: "products",
      image: "/placeholder.svg?height=800&width=1200",
      title: "Finished Product Assembly",
      description: "Final assembly of our flagship industrial control system.",
    },
    {
      id: 12,
      category: "team",
      image: "/placeholder.svg?height=800&width=1200",
      title: "Production Team",
      description: "Our skilled production team ensuring quality manufacturing.",
    },
  ]

  const filteredItems = (category: string) => {
    if (category === "all") return galleryItems
    return galleryItems.filter((item) => item.category === category)
  }

  const openLightbox = (item: (typeof galleryItems)[0]) => {
    setLightboxImage(item.image)
    setLightboxTitle(item.title)
    setLightboxDescription(item.description)
  }

  return (
    <main className="flex flex-col items-center pt-24">
      <ScrollProgress />

      {/* Hero Section */}
      <section ref={ref} className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <motion.div style={{ opacity, y }} className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
              Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-muted-foreground md:text-xl"
            >
              Take a visual tour of our facilities, equipment, products, and team.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <ParallaxSection className="w-full py-12 md:py-24" baseVelocity={0.05}>
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="hidden md:grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="relative group">
                  <span>{category.name}</span>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredItems(category.id).map((item, index) => (
                    <ScrollReveal key={item.id} delay={index * 0.05} threshold={0.1}>
                      <motion.div
                        className="cursor-pointer group relative h-64 overflow-hidden rounded-lg"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        onClick={() => openLightbox(item)}
                      >
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="text-white font-bold">{item.title}</h3>
                              <p className="text-white/80 text-sm">{item.description}</p>
                            </div>
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-white/20 p-2 rounded-full backdrop-blur-sm"
                            >
                              <ZoomIn className="h-5 w-5 text-white" />
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </ScrollReveal>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </ParallaxSection>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20"
              onClick={(e) => {
                e.stopPropagation()
                setLightboxImage(null)
              }}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </Button>

            <div className="relative w-full max-w-5xl">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative h-[80vh] bg-black/50 rounded-lg overflow-hidden"
              >
                <Image src={lightboxImage || "/placeholder.svg"} alt={lightboxTitle} fill className="object-contain" />

                <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4">
                  <h3 className="text-white text-xl font-bold">{lightboxTitle}</h3>
                  <p className="text-white/80">{lightboxDescription}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}

