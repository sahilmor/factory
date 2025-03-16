"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2 } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { AnimatedCard } from "@/components/animated-card"
import { ThreeDCard } from "@/components/3d-card"
import { ScrollProgress } from "@/components/scroll-progress"

export default function AboutPage() {
  const timeline = [
    {
      year: "1985",
      title: "Foundation",
      description: "Modern Factory was established with a vision to revolutionize manufacturing.",
    },
    {
      year: "1995",
      title: "Expansion",
      description: "Expanded operations with a new 50,000 sq ft facility and international distribution.",
    },
    {
      year: "2005",
      title: "Innovation",
      description: "Implemented cutting-edge automation technology and sustainable practices.",
    },
    {
      year: "2015",
      title: "Global Reach",
      description: "Established presence in over 30 countries with regional manufacturing hubs.",
    },
    {
      year: "2023",
      title: "Future Forward",
      description: "Launched AI-driven manufacturing processes and carbon-neutral initiatives.",
    },
  ]

  const team = [
    {
      name: "Jane Smith",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=400&width=400",
      bio: "With over 25 years of industry experience, Jane has led Modern Factory from a small startup to a global manufacturing leader.",
    },
    {
      name: "Michael Johnson",
      role: "Chief Operations Officer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Michael oversees all manufacturing operations, ensuring efficiency, quality, and innovation across all production lines.",
    },
    {
      name: "Sarah Williams",
      role: "Chief Technology Officer",
      image: "/placeholder.svg?height=400&width=400",
      bio: "Sarah leads our R&D department, driving technological innovation and sustainable manufacturing practices.",
    },
    {
      name: "David Chen",
      role: "Head of Global Distribution",
      image: "/placeholder.svg?height=400&width=400",
      bio: "David manages our worldwide logistics network, ensuring timely delivery and customer satisfaction.",
    },
  ]

  const values = [
    {
      title: "Innovation",
      description: "Constantly pushing boundaries to develop new manufacturing techniques and solutions.",
    },
    {
      title: "Quality",
      description: "Unwavering commitment to excellence in every product we create.",
    },
    {
      title: "Sustainability",
      description: "Environmentally responsible practices throughout our manufacturing process.",
    },
    {
      title: "Integrity",
      description: "Honest and transparent relationships with customers, partners, and employees.",
    },
  ]

  return (
    <main className="flex flex-col items-center pt-24">
      <ScrollProgress />

      {/* Hero Section */}
      <ParallaxSection className="w-full py-12 md:py-24 lg:py-32 bg-muted/30" baseVelocity={0.1}>
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <ScrollReveal>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Modern Factory</h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
                We are a leading manufacturing company dedicated to innovation, quality, and sustainability. For over
                three decades, we've been engineering solutions that shape industries.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <ThreeDCard className="relative h-[400px] overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Modern Factory headquarters"
                  fill
                  className="object-cover"
                />
              </ThreeDCard>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      {/* Mission & Vision */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <ScrollReveal>
              <AnimatedCard hoverEffect="tilt">
                <Card className="md:h-[54vh] bg-background/50 backdrop-blur-sm space-y-4">
                  <CardHeader>
                    <CardTitle className="text-2xl">Our Mission</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      To revolutionize manufacturing through innovation, quality craftsmanship, and sustainable
                      practices, delivering products that exceed expectations and drive industry forward.
                    </p>
                    <ul className="mt-4 space-y-4">
                      {[
                        "Excellence in every product",
                        "Customer-centric approach",
                        "Continuous improvement",
                        "Global impact",
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <AnimatedCard hoverEffect="tilt">
                <Card className="md:h-[54vh] bg-background/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-2xl">Our Vision</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      To be the global leader in innovative manufacturing solutions, setting new standards for quality,
                      efficiency, and sustainability while positively impacting communities worldwide.
                    </p>
                    <div className="mt-6 relative h-[200px] overflow-hidden rounded-lg">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Factory vision"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </AnimatedCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <ScrollReveal className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Our Journey</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              From humble beginnings to industry leadership, explore the key milestones that have shaped Modern Factory.
            </p>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-border" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <ScrollReveal key={index} direction={index % 2 === 0 ? "right" : "left"} delay={index * 0.1}>
                  <div className={`relative flex items-center ${index % 2 === 0 ? "justify-end" : ""}`}>
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto"}`}>
                      <AnimatedCard hoverEffect="lift">
                        <Card className="bg-background/50 backdrop-blur-sm">
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2 text-xl">
                              {index % 2 === 0 ? (
                                <>
                                  {item.title}
                                  <span className="inline-block px-3 py-1 text-sm font-semibold bg-primary/10 text-primary rounded-full">
                                    {item.year}
                                  </span>
                                </>
                              ) : (
                                <>
                                  <span className="inline-block px-3 py-1 text-sm font-semibold bg-primary/10 text-primary rounded-full">
                                    {item.year}
                                  </span>
                                  {item.title}
                                </>
                              )}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground">{item.description}</p>
                          </CardContent>
                        </Card>
                      </AnimatedCard>
                    </div>
                    <motion.div
                      className="absolute left-[49.5%] transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 300, damping: 20, delay: index * 0.1 + 0.3 }}
                    />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <ScrollReveal className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Leadership Team</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              Meet the experienced professionals who drive our vision and lead our teams to excellence.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <ThreeDCard className="h-full">
                  <Card className="h-full bg-background/50 backdrop-blur-sm border-0">
                    <CardHeader className="p-0">
                      <div className="relative h-[250px] overflow-hidden">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-primary font-medium mb-3">{member.role}</p>
                      <CardDescription>{member.bio}</CardDescription>
                    </CardContent>
                  </Card>
                </ThreeDCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <ScrollReveal className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Our Core Values</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
              The principles that guide our decisions, shape our culture, and define our approach to manufacturing.
            </p>
          </ScrollReveal>

          <Tabs defaultValue="innovation" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              {values.map((value, index) => (
                <TabsTrigger key={index} value={value.title.toLowerCase()}>
                  {value.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {values.map((value, index) => (
              <TabsContent key={index} value={value.title.toLowerCase()} className="mt-6">
                <ScrollReveal>
                  <AnimatedCard hoverEffect="lift">
                    <Card>
                      <CardHeader>
                        <CardTitle>{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-6 items-center">
                          <p className="text-muted-foreground">{value.description}</p>
                          <div className="relative h-[200px] overflow-hidden rounded-lg">
                            <Image
                              src={`/placeholder.svg?height=400&width=600&text=${value.title}`}
                              alt={value.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedCard>
                </ScrollReveal>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <ParallaxSection className="w-full py-12 md:py-24" baseVelocity={0.15}>
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "35+", label: "Years of Experience" },
              { value: "500+", label: "Team Members" },
              { value: "30+", label: "Countries Served" },
              { value: "1000+", label: "Projects Completed" },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction={index % 2 === 0 ? "up" : "down"}>
                <motion.div
                  className="flex flex-col items-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <span className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</span>
                  <span className="text-muted-foreground">{stat.label}</span>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>
    </main>
  )
}

