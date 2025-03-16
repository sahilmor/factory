"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { ArrowRight, Award, Factory, Gauge, Shield, Truck, ChevronDown, Play, Pause } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { AnimatedCard } from "@/components/animated-card"
import { ThreeDCard } from "@/components/3d-card"
import { MarqueeText } from "@/components/marquee-text"
import { FloatingElement } from "@/components/floating-elements"
import { ScrollProgress } from "@/components/scroll-progress"

export default function HomePage() {
  const ref = useRef(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100])

  const toggleVideo = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  const features = [
    {
      icon: <Factory className="h-10 w-10 text-primary" />,
      title: "Advanced Manufacturing",
      description: "State-of-the-art facilities with cutting-edge technology for precision manufacturing.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Quality Assurance",
      description: "Rigorous quality control processes to ensure every product meets our high standards.",
    },
    {
      icon: <Gauge className="h-10 w-10 text-primary" />,
      title: "Efficiency",
      description: "Optimized production processes that maximize output while minimizing waste.",
    },
    {
      icon: <Truck className="h-10 w-10 text-primary" />,
      title: "Global Distribution",
      description: "Worldwide logistics network ensuring timely delivery to any location.",
    },
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Industry Certified",
      description: "Holding all major industry certifications and compliance standards.",
    },
  ]

  const stats = [
    { value: "35+", label: "Years Experience" },
    { value: "500+", label: "Team Members" },
    { value: "10K+", label: "Products Manufactured" },
    { value: "99.8%", label: "Quality Rating" },
  ]

  return (
    <main className="flex flex-col items-center">
      <ScrollProgress />

      {/* Hero Section */}
      <section ref={ref} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Factory interior"
            fill
            className="object-cover brightness-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background" />
        </div>

        <FloatingElement
          className="absolute top-1/4 left-1/4 w-24 h-24 opacity-20 hidden md:block"
          xFactor={30}
          yFactor={20}
          duration={6}
        >
          <div className="w-full h-full rounded-full bg-primary/30 backdrop-blur-md" />
        </FloatingElement>

        <FloatingElement
          className="absolute bottom-1/3 right-1/4 w-32 h-32 opacity-20 hidden md:block"
          xFactor={20}
          yFactor={40}
          duration={8}
          delay={1}
        >
          <div className="w-full h-full rounded-full bg-primary/20 backdrop-blur-md" />
        </FloatingElement>

        <motion.div className="container relative z-10 pt-24" style={{ opacity, scale, y }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Engineering the Future of Manufacturing
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Innovative solutions with precision engineering and sustainable practices
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/products">Explore Products</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <Link href="#intro" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDown className="h-6 w-6" />
          </Link>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section id="intro" className="w-full py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <h2 className="text-3xl font-bold tracking-tight mb-6">Pioneering Manufacturing Excellence Since 1985</h2>
              <p className="text-muted-foreground mb-6">
                For over three decades, Modern Factory has been at the forefront of industrial innovation, combining
                traditional craftsmanship with cutting-edge technology to deliver products that exceed expectations.
              </p>
              <p className="text-muted-foreground mb-8">
                Our commitment to quality, sustainability, and customer satisfaction has made us a trusted partner for
                businesses worldwide.
              </p>
              <Button variant="outline" asChild>
                <Link href="/about">Learn Our Story</Link>
              </Button>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <ThreeDCard className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Factory equipment"
                  fill
                  className="object-cover rounded-lg"
                />
              </ThreeDCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full py-20 bg-muted/10">
        <div className="container">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">See Our Factory in Action</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take a virtual tour of our state-of-the-art manufacturing facilities and see how we bring precision and
              innovation to life.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-video bg-black">
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  poster="/placeholder.svg?height=720&width=1280"
                  muted
                  loop
                >
                  <source src="#" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                <button
                  onClick={toggleVideo}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                >
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
                    {isPlaying ? (
                      <Pause className="h-6 w-6 text-white" />
                    ) : (
                      <Play className="h-6 w-6 text-white ml-1" />
                    )}
                  </div>
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats Section */}
      <ParallaxSection className="w-full py-16 bg-primary/10">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction={index % 2 === 0 ? "up" : "down"}>
                <div className="flex flex-col items-center">
                  <span className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</span>
                  <span className="text-muted-foreground">{stat.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>

      {/* Marquee Section */}
      <section className="w-full py-12 bg-muted/30 overflow-hidden">
        <MarqueeText baseVelocity={3} className="py-4 text-4xl font-bold text-primary/20">
          INNOVATION • PRECISION • QUALITY • RELIABILITY • EXCELLENCE • SUSTAINABILITY •
        </MarqueeText>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 bg-background">
        <div className="container">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Modern Factory</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine innovative technology with decades of manufacturing expertise to deliver exceptional products
              and services.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1} threshold={0.2}>
                <AnimatedCard hoverEffect="tilt">
                  <Card className="h-full bg-background/50 backdrop-blur-sm border border-muted hover:border-primary/20 transition-all duration-300">
                    <CardHeader>
                      <div className="mb-4">{feature.icon}</div>
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{feature.description}</CardDescription>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Image Section */}
      <ParallaxSection className="w-full h-[50vh] relative overflow-hidden" baseVelocity={0.1}>
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Manufacturing process"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white max-w-3xl px-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Precision Engineering at Scale</h2>
              <p className="text-xl text-white/80">
                Our advanced manufacturing processes combine precision, efficiency, and innovation
              </p>
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* Products Preview */}
      <section className="w-full py-20 bg-background">
        <div className="container">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Products</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our range of high-quality manufacturing solutions designed for performance and reliability.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Industrial Robotic Arm",
                description: "High-precision robotic arm for manufacturing automation with 6 degrees of freedom.",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "CNC Milling Machine",
                description: "Computer-controlled milling machine for precision manufacturing of complex parts.",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "Automated Conveyor System",
                description: "Modular conveyor system with smart routing capabilities for efficient material handling.",
                image: "/placeholder.svg?height=600&width=800",
              },
            ].map((product, index) => (
              <ScrollReveal key={index} delay={index * 0.2} direction={index === 1 ? "up" : "down"}>
                <ThreeDCard className="h-full rounded-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 bg-background">
                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                    <p className="text-muted-foreground mb-4">{product.description}</p>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href="/products">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </ThreeDCard>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-20 bg-muted/30">
        <div className="container">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from businesses that have transformed their manufacturing processes with our solutions.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Modern Factory's precision engineering has revolutionized our production line, increasing efficiency by 35% while maintaining exceptional quality standards.",
                author: "Sarah Johnson",
                position: "Operations Director, TechInnovate Inc.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                quote:
                  "The level of customization and attention to detail is unmatched. Their team worked closely with us to develop solutions that perfectly fit our unique manufacturing needs.",
                author: "Michael Chen",
                position: "CEO, Precision Systems",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                quote:
                  "From initial consultation to implementation and support, Modern Factory has been an exceptional partner. Their solutions have helped us stay ahead of the competition.",
                author: "Elena Rodriguez",
                position: "Manufacturing Manager, Global Industries",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <AnimatedCard hoverEffect="lift">
                  <Card className="h-full bg-background/50 backdrop-blur-sm">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-primary">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <p className="italic mb-4">"{testimonial.quote}"</p>
                        <h3 className="font-bold">{testimonial.author}</h3>
                        <p className="text-muted-foreground text-sm">{testimonial.position}</p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-primary/10">
        <div className="container">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to Transform Your Manufacturing Process?</h2>
              <p className="text-muted-foreground mb-8">
                Contact our team today to discuss how our solutions can help optimize your production, improve quality,
                and drive innovation.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                <Link href="/contact">Get Started Today</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Floating Contact Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <AnimatePresence>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="lg" className="rounded-full h-16 w-16 shadow-lg bg-primary hover:bg-primary/90" asChild>
              <Link href="/contact">
                <span className="sr-only">Contact Us</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-circle"
                >
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                </svg>
              </Link>
            </Button>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  )
}

