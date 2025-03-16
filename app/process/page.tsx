"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, CheckCircle, Cog, Factory, Package, Truck } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { AnimatedCard } from "@/components/animated-card"
import { ThreeDCard } from "@/components/3d-card"
import { ScrollProgress } from "@/components/scroll-progress"

export default function ProcessPage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 100])

  const processSteps = [
    {
      id: "design",
      title: "Design & Engineering",
      icon: <Cog className="h-10 w-10 text-primary" />,
      description:
        "Our engineering team works closely with clients to design products that meet exact specifications and requirements.",
      details: [
        "3D modeling and prototyping",
        "Material selection and optimization",
        "Design for manufacturability analysis",
        "Simulation and testing",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "production",
      title: "Manufacturing",
      icon: <Factory className="h-10 w-10 text-primary" />,
      description:
        "Using state-of-the-art equipment and techniques, we transform designs into high-quality products with precision and efficiency.",
      details: [
        "CNC machining and fabrication",
        "Automated assembly lines",
        "Robotic welding and joining",
        "Advanced surface treatments",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "quality",
      title: "Quality Control",
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      description:
        "Every product undergoes rigorous testing and inspection to ensure it meets our high standards and client specifications.",
      details: ["Dimensional inspection", "Material testing", "Functional testing", "Compliance verification"],
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "packaging",
      title: "Packaging & Logistics",
      icon: <Package className="h-10 w-10 text-primary" />,
      description:
        "Products are carefully packaged and shipped through our global logistics network to ensure safe and timely delivery.",
      details: [
        "Custom protective packaging",
        "Inventory management",
        "Global shipping coordination",
        "Real-time tracking",
      ],
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      id: "delivery",
      title: "Delivery & Support",
      icon: <Truck className="h-10 w-10 text-primary" />,
      description:
        "We provide comprehensive support after delivery, including installation assistance, training, and maintenance services.",
      details: ["On-site installation", "Operator training", "Maintenance programs", "Technical support"],
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

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
              Our Manufacturing Process
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-muted-foreground md:text-xl"
            >
              Discover how we transform raw materials into precision-engineered products through our innovative and
              efficient manufacturing process.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-border -translate-y-1/2 z-0" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {processSteps.map((step, index) => (
                <ScrollReveal key={step.id} delay={index * 0.15} threshold={0.2}>
                  <div className="flex flex-col items-center text-center">
                    <motion.div
                      className="relative mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border-4 border-background">
                        {step.icon}
                      </div>
                      <div className="absolute top-1/2 -translate-y-1/2 left-full hidden md:block">
                        <ArrowRight className="h-6 w-6 text-muted-foreground ml-2" />
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Process Visualization */}
      <ParallaxSection className="w-full py-12 md:py-24 bg-muted/30" baseVelocity={0.1}>
        <div className="container px-4 md:px-6">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Interactive Process Flow</h2>
            <p className="mt-4 text-muted-foregroundmax-w-2xl mx-auto">
              Explore each step of our manufacturing process in detail to understand how we create precision products.
            </p>
          </ScrollReveal>

          <Tabs defaultValue="design" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
              {processSteps.map((step) => (
                <TabsTrigger key={step.id} value={step.id} className="relative group">
                  <span>{step.title}</span>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </TabsTrigger>
              ))}
            </TabsList>

            {processSteps.map((step) => (
              <TabsContent key={step.id} value={step.id}>
                <ScrollReveal>
                  <ThreeDCard>
                    <Card>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="relative h-[300px] md:h-auto overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                          <Image
                            src={step.image || "/placeholder.svg"}
                            alt={step.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <CardHeader>
                          <div className="mb-4">{step.icon}</div>
                          <CardTitle className="text-2xl">{step.title}</CardTitle>
                          <CardDescription className="text-base">{step.description}</CardDescription>
                          <CardContent className="px-0 pt-6">
                            <h4 className="font-semibold mb-3">Key Components:</h4>
                            <ul className="space-y-2">
                              {step.details.map((detail, index) => (
                                <motion.li
                                  key={index}
                                  className="flex items-start gap-2"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.3, delay: index * 0.1 }}
                                  viewport={{ once: true }}
                                >
                                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                  <span>{detail}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </CardContent>
                        </CardHeader>
                      </div>
                    </Card>
                  </ThreeDCard>
                </ScrollReveal>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </ParallaxSection>

      {/* Technology Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="right">
              <h2 className="text-3xl font-bold tracking-tight mb-6">Cutting-Edge Technology</h2>
              <p className="text-muted-foreground mb-6">
                Our manufacturing facilities are equipped with the latest technology and automation systems to ensure
                precision, efficiency, and consistency in every product we create.
              </p>
              <div className="space-y-4">
                {[
                  "Advanced CNC machining centers with 5-axis capability",
                  "Robotic assembly and welding systems",
                  "Automated quality inspection using computer vision",
                  "IoT-enabled equipment for real-time monitoring",
                  "Digital twin technology for process optimization",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <ThreeDCard className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Manufacturing technology"
                  fill
                  className="object-cover"
                />
              </ThreeDCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process Animation */}
      <section className="w-full py-12 md:py-24 bg-muted/30 overflow-hidden">
        <div className="container px-4 md:px-6">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">See Our Process in Motion</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Watch how raw materials transform into finished products through our advanced manufacturing process.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="relative max-w-4xl mx-auto h-[400px] rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-play text-white ml-1"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                </motion.div>
              </div>
              <Image
                src="/placeholder.svg?height=800&width=1200"
                alt="Manufacturing process animation"
                fill
                className="object-cover"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Quality Assurance</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive quality control system ensures that every product meets the highest standards of
              performance, reliability, and durability.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Inspection",
                description:
                  "Multi-stage inspection process using advanced measurement equipment to verify dimensional accuracy and surface quality.",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Testing",
                description:
                  "Rigorous functional testing under simulated operating conditions to ensure performance and reliability.",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Certification",
                description:
                  "Comprehensive documentation and certification to verify compliance with industry standards and client specifications.",
                image: "/placeholder.svg?height=400&width=600",
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <AnimatedCard hoverEffect="tilt">
                  <Card className="h-full">
                    <div className="relative h-[200px] overflow-hidden">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                    <CardHeader>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

