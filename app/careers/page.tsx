"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, CheckCircle, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ParallaxSection } from "@/components/parallax-section"
import { AnimatedCard } from "@/components/animated-card"
import { ThreeDCard } from "@/components/3d-card"
import { ScrollProgress } from "@/components/scroll-progress"

export default function CareersPage() {
  const [activeJobId, setActiveJobId] = useState<number | null>(null)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
    resume: null as File | null,
  })

  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.3], [0, 100])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormState((prev) => ({ ...prev, resume: e.target.files![0] }))
    }
  }

  const handleSubmit = (e: React.FormEvent, jobId: number) => {
    e.preventDefault()
    // Here you would normally send the form data to your backend
    console.log("Application submitted for job ID:", jobId, formState)
    toast({
      title: "Application Submitted",
      description: "Thank you for your application. We'll review it and get back to you soon.",
    })
    // Reset form
    setFormState({
      name: "",
      email: "",
      phone: "",
      coverLetter: "",
      resume: null,
    })
    setActiveJobId(null)
  }

  const jobCategories = [
    { id: "engineering", name: "Engineering" },
    { id: "production", name: "Production" },
    { id: "quality", name: "Quality Control" },
    { id: "management", name: "Management" },
    { id: "it", name: "IT & Technology" },
  ]

  const jobListings = [
    {
      id: 1,
      title: "Mechanical Engineer",
      category: "engineering",
      location: "Manufacturing City, MC",
      type: "Full-time",
      description: "Design and develop mechanical systems and components for our manufacturing processes.",
      responsibilities: [
        "Create detailed mechanical designs using CAD software",
        "Develop prototypes and conduct testing",
        "Collaborate with cross-functional teams to improve manufacturing processes",
        "Troubleshoot mechanical issues and implement solutions",
      ],
      requirements: [
        "Bachelor's degree in Mechanical Engineering",
        "3+ years of experience in mechanical design",
        "Proficiency in SolidWorks or similar CAD software",
        "Experience with manufacturing processes and materials",
      ],
    },
    {
      id: 2,
      title: "Production Supervisor",
      category: "production",
      location: "Manufacturing City, MC",
      type: "Full-time",
      description: "Oversee daily production operations to ensure efficiency, quality, and safety standards are met.",
      responsibilities: [
        "Manage production team and workflow",
        "Monitor production metrics and implement improvements",
        "Ensure compliance with safety regulations",
        "Coordinate with other departments for smooth operations",
      ],
      requirements: [
        "Bachelor's degree in Manufacturing or related field",
        "5+ years of experience in manufacturing",
        "Strong leadership and communication skills",
        "Knowledge of lean manufacturing principles",
      ],
    },
    {
      id: 3,
      title: "Quality Control Inspector",
      category: "quality",
      location: "Manufacturing City, MC",
      type: "Full-time",
      description: "Inspect and test products to ensure they meet quality standards and specifications.",
      responsibilities: [
        "Conduct detailed inspections of products",
        "Operate precision measuring equipment",
        "Document inspection results and maintain records",
        "Identify quality issues and recommend improvements",
      ],
      requirements: [
        "Associate's degree in Quality Assurance or related field",
        "2+ years of experience in quality control",
        "Experience with measurement tools and techniques",
        "Attention to detail and analytical thinking",
      ],
    },
    {
      id: 4,
      title: "Operations Manager",
      category: "management",
      location: "Manufacturing City, MC",
      type: "Full-time",
      description: "Lead and optimize overall manufacturing operations to achieve business objectives.",
      responsibilities: [
        "Develop and implement operational strategies",
        "Manage budgets and resource allocation",
        "Lead continuous improvement initiatives",
        "Ensure compliance with regulations and standards",
      ],
      requirements: [
        "Bachelor's degree in Business, Engineering, or related field",
        "7+ years of experience in manufacturing operations",
        "Strong leadership and strategic planning skills",
        "Experience with ERP systems and data analysis",
      ],
    },
    {
      id: 5,
      title: "Automation Engineer",
      category: "engineering",
      location: "Manufacturing City, MC",
      type: "Full-time",
      description: "Design and implement automation solutions to improve manufacturing efficiency and quality.",
      responsibilities: [
        "Develop automation systems and controls",
        "Program PLCs and industrial robots",
        "Troubleshoot and optimize automated systems",
        "Collaborate with production teams on implementation",
      ],
      requirements: [
        "Bachelor's degree in Electrical Engineering or related field",
        "4+ years of experience in industrial automation",
        "Proficiency in PLC programming and robotics",
        "Knowledge of industrial communication protocols",
      ],
    },
    {
      id: 6,
      title: "IT Systems Administrator",
      category: "it",
      location: "Manufacturing City, MC",
      type: "Full-time",
      description: "Maintain and optimize IT infrastructure to support manufacturing operations.",
      responsibilities: [
        "Manage servers, networks, and security systems",
        "Provide technical support to users",
        "Implement and maintain software applications",
        "Ensure data backup and disaster recovery",
      ],
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years of experience in IT systems administration",
        "Knowledge of networking, security, and server management",
        "Experience with manufacturing software systems a plus",
      ],
    },
  ]

  const filteredJobs = (category: string) => {
    if (category === "all") return jobListings
    return jobListings.filter((job) => job.category === category)
  }

  return (
    <main className="flex flex-col items-center pt-24">
      <ScrollProgress />

      {/* Hero Section */}
      <section ref={ref} className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div style={{ opacity, y }} className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
              >
                Join Our Team
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              >
                Be part of a team that's shaping the future of manufacturing with innovation, quality, and
                sustainability.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" asChild>
                  <a href="#job-openings">View Open Positions</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#why-join">Why Join Us</a>
                </Button>
              </motion.div>
            </motion.div>

            <ScrollReveal direction="left">
              <ThreeDCard className="relative h-[400px] overflow-hidden rounded-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Team working together"
                  fill
                  className="object-cover"
                />
              </ThreeDCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section id="why-join" className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Why Join Modern Factory</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              We offer more than just a job. Join a team that values innovation, growth, and work-life balance.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation & Growth",
                description:
                  "Work with cutting-edge technology and continuously develop your skills through our training programs.",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Collaborative Culture",
                description:
                  "Join a supportive team environment where your ideas are valued and collaboration is encouraged.",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Comprehensive Benefits",
                description:
                  "Enjoy competitive compensation, health benefits, retirement plans, and work-life balance initiatives.",
                image: "/placeholder.svg?height=400&width=600",
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.15} threshold={0.2}>
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

      {/* Job Openings */}
      <section id="job-openings" className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Current Openings</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Explore our current job opportunities and find the perfect role for your skills and career goals.
            </p>
          </ScrollReveal>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 mb-8">
              <TabsTrigger value="all" className="relative group">
                <span>All</span>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </TabsTrigger>
              {jobCategories.map((category) => (
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

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {jobListings.map((job, index) => (
                  <ScrollReveal key={job.id} delay={index * 0.1} threshold={0.1}>
                    <JobCard
                      job={job}
                      index={index}
                      isActive={activeJobId === job.id}
                      onApply={() => setActiveJobId(job.id)}
                      onSubmit={(e) => handleSubmit(e, job.id)}
                      formState={formState}
                      handleChange={handleChange}
                      handleFileChange={handleFileChange}
                      jobCategories={jobCategories}
                    />
                  </ScrollReveal>
                ))}
              </div>
            </TabsContent>

            {jobCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredJobs(category.id).map((job, index) => (
                    <ScrollReveal key={job.id} delay={index * 0.1} threshold={0.1}>
                      <JobCard
                        job={job}
                        index={index}
                        isActive={activeJobId === job.id}
                        onApply={() => setActiveJobId(job.id)}
                        onSubmit={(e) => handleSubmit(e, job.id)}
                        formState={formState}
                        handleChange={handleChange}
                        handleFileChange={handleFileChange}
                        jobCategories={jobCategories}
                      />
                    </ScrollReveal>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Employee Testimonials */}
      <ParallaxSection className="w-full py-12 md:py-24" baseVelocity={0.1}>
        <div className="container px-4 md:px-6">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Employee Testimonials</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Hear from our team members about their experiences working at Modern Factory.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Working at Modern Factory has given me the opportunity to work with cutting-edge technology while continuously developing my skills. The collaborative environment makes every day exciting.",
                name: "Michael Chen",
                role: "Mechanical Engineer",
                image: "/placeholder.svg?height=400&width=400",
                years: "5 years at Modern Factory",
              },
              {
                quote:
                  "I appreciate the emphasis on work-life balance and professional growth. The company invests in its employees through training programs and mentorship opportunities.",
                name: "Sarah Johnson",
                role: "Production Supervisor",
                image: "/placeholder.svg?height=400&width=400",
                years: "3 years at Modern Factory",
              },
              {
                quote:
                  "The culture of innovation at Modern Factory is what keeps me engaged. We're encouraged to think creatively and contribute ideas that can improve our processes and products.",
                name: "David Rodriguez",
                role: "Quality Control Specialist",
                image: "/placeholder.svg?height=400&width=400",
                years: "7 years at Modern Factory",
              },
            ].map((testimonial, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <ThreeDCard>
                  <Card className="h-full">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <motion.div
                          className="relative w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-primary"
                          whileHover={{ scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                        <p className="italic mb-4">"{testimonial.quote}"</p>
                        <h3 className="font-bold">{testimonial.name}</h3>
                        <p className="text-primary text-sm">{testimonial.role}</p>
                        <p className="text-muted-foreground text-xs mt-1">{testimonial.years}</p>
                      </div>
                    </CardContent>
                  </Card>
                </ThreeDCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ParallaxSection>
    </main>
  )
}

interface JobCardProps {
  job: {
    id: number
    title: string
    category: string
    location: string
    type: string
    description: string
    responsibilities: string[]
    requirements: string[]
  }
  index: number
  isActive: boolean
  onApply: () => void
  onSubmit: (e: React.FormEvent) => void
  formState: {
    name: string
    email: string
    phone: string
    coverLetter: string
    resume: File | null
  }
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  jobCategories: { id: string; name: string }[]
}

function JobCard({
  job,
  index,
  isActive,
  onApply,
  onSubmit,
  formState,
  handleChange,
  handleFileChange,
  jobCategories,
}: JobCardProps) {
  return (
    <AnimatedCard hoverEffect={isActive ? "none" : "lift"}>
      <Card className="h-full">
        <CardHeader>
          <CardTitle>{job.title}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
              {job.location}
            </span>
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
              {job.type}
            </span>
            <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
              {jobCategories.find((c) => c.id === job.category)?.name}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base mb-4">{job.description}</CardDescription>

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Responsibilities:</h4>
              <ul className="space-y-1">
                {job.responsibilities.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Requirements:</h4>
              <ul className="space-y-1">
                {job.requirements.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <CheckCircle className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {isActive && (
            <motion.div
              className="mt-6 border-t pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="font-semibold mb-4">Apply for this Position</h4>
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (123) 456-7890"
                      value={formState.phone}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Cover Letter</Label>
                  <Textarea
                    id="coverLetter"
                    name="coverLetter"
                    placeholder="Tell us why you're interested in this position..."
                    value={formState.coverLetter}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="resume">Resume/CV</Label>
                  <div className="flex items-center gap-2">
                    <Input
                      id="resume"
                      name="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      required
                    />
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => document.getElementById("resume")?.click()}
                      className="w-full group"
                    >
                      <Upload className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                      {formState.resume ? formState.resume.name : "Upload Resume"}
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground">Accepted formats: PDF, DOC, DOCX. Max size: 5MB</p>
                </div>
                <div className="flex justify-end gap-4 mt-6">
                  <Button type="button" variant="outline" onClick={() => onApply()}>
                    Cancel
                  </Button>
                  <Button type="submit" className="transition-all duration-300 hover:scale-[1.02]">
                    Submit Application
                  </Button>
                </div>
              </form>
            </motion.div>
          )}
        </CardContent>
        {!isActive && (
          <CardFooter>
            <Button onClick={onApply} className="w-full group">
              Apply Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </CardFooter>
        )}
      </Card>
    </AnimatedCard>
  )
}

