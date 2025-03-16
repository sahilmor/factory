"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronRight, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ThreeDCard } from "@/components/3d-card"
import { ScrollProgress } from "@/components/scroll-progress"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2], [0, 100])

  const categories = [
    { id: "all", name: "All Products" },
    { id: "machinery", name: "Industrial Machinery" },
    { id: "components", name: "Precision Components" },
    { id: "automation", name: "Automation Systems" },
    { id: "tools", name: "Specialized Tools" },
  ]

  const filters = [
    { id: "new", name: "New Arrivals" },
    { id: "bestseller", name: "Best Sellers" },
    { id: "sustainable", name: "Eco-Friendly" },
    { id: "customizable", name: "Customizable" },
  ]

  const products = [
    {
      id: 1,
      name: "Industrial Robotic Arm",
      category: "automation",
      description: "High-precision robotic arm for manufacturing automation with 6 degrees of freedom.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["new", "customizable"],
    },
    {
      id: 2,
      name: "CNC Milling Machine",
      category: "machinery",
      description: "Computer-controlled milling machine for precision manufacturing of complex parts.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["bestseller"],
    },
    {
      id: 3,
      name: "Precision Gears Set",
      category: "components",
      description: "High-tolerance gears manufactured from premium materials for industrial applications.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["bestseller", "customizable"],
    },
    {
      id: 4,
      name: "Automated Conveyor System",
      category: "automation",
      description: "Modular conveyor system with smart routing capabilities for efficient material handling.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["sustainable"],
    },
    {
      id: 5,
      name: "Hydraulic Press",
      category: "machinery",
      description: "Industrial hydraulic press with adjustable pressure settings for various applications.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["bestseller"],
    },
    {
      id: 6,
      name: "Precision Measurement Tools",
      category: "tools",
      description: "Set of high-accuracy measurement instruments for quality control and inspection.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["new"],
    },
    {
      id: 7,
      name: "Smart Factory Control System",
      category: "automation",
      description: "Integrated control system for monitoring and managing all aspects of production.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["new", "sustainable"],
    },
    {
      id: 8,
      name: "Custom Machined Parts",
      category: "components",
      description: "Bespoke machined components manufactured to exact specifications for any industry.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["customizable"],
    },
  ]

  const filteredProducts = products.filter((product) => {
    // Filter by category
    if (selectedCategory !== "all" && product.category !== selectedCategory) {
      return false
    }

    // Filter by tags
    if (selectedFilters.length > 0 && !selectedFilters.some((filter) => product.tags.includes(filter))) {
      return false
    }

    return true
  })

  const toggleFilter = (filterId: string) => {
    setSelectedFilters((prev) => (prev.includes(filterId) ? prev.filter((id) => id !== filterId) : [...prev, filterId]))
  }

  return (
    <main className="flex flex-col items-center pt-24">
      <ScrollProgress />

      {/* Hero Section */}
      <section ref={containerRef} className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <motion.div style={{ opacity, y }} className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
              Our Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-muted-foreground md:text-xl"
            >
              Discover our comprehensive range of manufacturing solutions designed for precision, efficiency, and
              innovation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop Sidebar */}
            <ScrollReveal className="hidden lg:block w-64 space-y-8" direction="right">
              <div>
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category.id}
                      variant={selectedCategory === category.id ? "default" : "ghost"}
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.name}
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Filters</h3>
                <div className="space-y-3">
                  {filters.map((filter) => (
                    <div key={filter.id} className="flex items-center space-x-2">
                      <Checkbox
                        id={`filter-${filter.id}`}
                        checked={selectedFilters.includes(filter.id)}
                        onCheckedChange={() => toggleFilter(filter.id)}
                      />
                      <Label htmlFor={`filter-${filter.id}`}>{filter.name}</Label>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Mobile Filter Button */}
            <div className="lg:hidden w-full flex justify-between items-center mb-6">
              <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
                  {categories.map((category) => (
                    <TabsTrigger key={category.id} value={category.id}>
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="ml-4">
                    <Filter className="h-4 w-4" />
                    <span className="sr-only">Filter products</span>
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filters</SheetTitle>
                    <SheetDescription>Refine your product search with these filters.</SheetDescription>
                  </SheetHeader>
                  <div className="py-6 space-y-4">
                    {filters.map((filter) => (
                      <div key={filter.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={`mobile-filter-${filter.id}`}
                          checked={selectedFilters.includes(filter.id)}
                          onCheckedChange={() => toggleFilter(filter.id)}
                        />
                        <Label htmlFor={`mobile-filter-${filter.id}`}>{filter.name}</Label>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <Button onClick={() => setSelectedFilters([])}>Clear Filters</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product, index) => (
                    <ScrollReveal key={product.id} delay={index * 0.1} threshold={0.1}>
                      <ThreeDCard className="h-full">
                        <Card className="h-full overflow-hidden border-0">
                          <div className="relative h-48 overflow-hidden">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <CardHeader>
                            <CardTitle>{product.name}</CardTitle>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {product.tags.map((tag) => (
                                <Badge key={tag} variant="secondary">
                                  {filters.find((f) => f.id === tag)?.name}
                                </Badge>
                              ))}
                            </div>
                          </CardHeader>
                          <CardContent>
                            <CardDescription className="text-base">{product.description}</CardDescription>
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" className="w-full group" asChild>
                              <Link href={`/products/${product.id}`}>
                                View Details
                                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                              </Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      </ThreeDCard>
                    </ScrollReveal>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-muted-foreground text-lg">
                      No products match your current filters. Try adjusting your selection.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-4"
                      onClick={() => {
                        setSelectedCategory("all")
                        setSelectedFilters([])
                      }}
                    >
                      Clear All Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Product Spotlight */}
      <section className="w-full py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Featured Product</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our most advanced manufacturing solution, designed for maximum efficiency and precision.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <ThreeDCard className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=800"
                  alt="Featured product"
                  fill
                  className="object-cover"
                />
              </ThreeDCard>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-2xl font-bold mb-2">Advanced Manufacturing System</h3>
                  <p className="text-muted-foreground mb-4">
                    Our flagship product combines AI-driven controls, precision engineering, and modular design to
                    create the most versatile manufacturing system on the market.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        New Release
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        Industry Leading
                      </Badge>
                    </div>

                    <ul className="space-y-2">
                      {[
                        "Adaptive AI-powered control system",
                        "Precision accuracy to within 0.001mm",
                        "Modular design for custom configurations",
                        "Energy-efficient operation",
                        "Remote monitoring and control",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <ChevronRight className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button size="lg" className="mt-4" asChild>
                      <Link href="/contact">Request a Demo</Link>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}

