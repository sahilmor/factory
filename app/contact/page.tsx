"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedCard } from "@/components/animated-card"
import { ThreeDCard } from "@/components/3d-card"
import { ScrollProgress } from "@/components/scroll-progress"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    inquiryType: "",
    message: "",
    preferredContact: "email",
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

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, inquiryType: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormState((prev) => ({ ...prev, preferredContact: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would normally send the form data to your backend
    console.log("Form submitted:", formState)
    toast({
      title: "Form Submitted",
      description: "Thank you for your inquiry. We'll get back to you shortly.",
    })
    // Reset form
    setFormState({
      name: "",
      email: "",
      company: "",
      phone: "",
      inquiryType: "",
      message: "",
      preferredContact: "email",
    })
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
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-muted-foreground md:text-xl"
            >
              Have questions or need more information? Our team is here to help.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: <MapPin className="h-10 w-10 text-primary" />,
                title: "Visit Us",
                description: "123 Factory Road, Industrial District, Manufacturing City, MC 12345",
                action: "Get Directions",
                link: "https://maps.google.com",
              },
              {
                icon: <Phone className="h-10 w-10 text-primary" />,
                title: "Call Us",
                description: "+1 (123) 456-7890\nMonday - Friday: 8am - 6pm",
                action: "Call Now",
                link: "tel:+11234567890",
              },
              {
                icon: <Mail className="h-10 w-10 text-primary" />,
                title: "Email Us",
                description: "info@modernfactory.com\nsupport@modernfactory.com",
                action: "Send Email",
                link: "mailto:info@modernfactory.com",
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <AnimatedCard hoverEffect="lift">
                  <Card className="h-full">
                    <CardHeader className="flex flex-col items-center text-center">
                      <motion.div
                        className="mb-4"
                        whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        {item.icon}
                      </motion.div>
                      <CardTitle>{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-base whitespace-pre-line mb-4">
                        {item.description}
                      </CardDescription>
                      <Button variant="outline" asChild>
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          {item.action}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal direction="right">
              <ThreeDCard>
                <Card>
                  <CardHeader>
                    <CardTitle>Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company (Optional)</Label>
                          <Input
                            id="company"
                            name="company"
                            placeholder="Your Company"
                            value={formState.company}
                            onChange={handleChange}
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
                            className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">Inquiry Type</Label>
                        <Select value={formState.inquiryType} onValueChange={handleSelectChange}>
                          <SelectTrigger className="transition-all duration-300 focus:ring-2 focus:ring-primary/50">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="sales">Sales & Pricing</SelectItem>
                            <SelectItem value="support">Technical Support</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunities</SelectItem>
                            <SelectItem value="careers">Careers</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="How can we help you?"
                          value={formState.message}
                          onChange={handleChange}
                          rows={5}
                          required
                          className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Preferred Contact Method</Label>
                        <RadioGroup
                          value={formState.preferredContact}
                          onValueChange={handleRadioChange}
                          className="flex space-x-4"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="email" id="email-contact" />
                            <Label htmlFor="email-contact">Email</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="phone" id="phone-contact" />
                            <Label htmlFor="phone-contact">Phone</Label>
                          </div>
                        </RadioGroup>
                      </div>
                      <Button type="submit" className="w-full transition-all duration-300 hover:scale-[1.02]">
                        Submit Inquiry
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </ThreeDCard>
            </ScrollReveal>

            {/* Map */}
            <ScrollReveal direction="left">
              <ThreeDCard className="h-full min-h-[400px]">
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle>Our Location</CardTitle>
                    <CardDescription>Visit our manufacturing facility and headquarters.</CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px] p-0 overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sus!4v1579767024760!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </CardContent>
                </Card>
              </ThreeDCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Frequently Asked Questions</h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about our services and processes.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "What industries do you serve?",
                answer:
                  "We serve a wide range of industries including aerospace, automotive, medical, electronics, and industrial equipment manufacturing.",
              },
              {
                question: "Do you offer custom manufacturing services?",
                answer:
                  "Yes, we specialize in custom manufacturing solutions tailored to your specific requirements and specifications.",
              },
              {
                question: "What is your typical lead time?",
                answer:
                  "Lead times vary depending on project complexity and current production schedule, but typically range from 2-6 weeks.",
              },
              {
                question: "Do you ship internationally?",
                answer:
                  "Yes, we have a global logistics network and can ship to customers worldwide with appropriate customs documentation.",
              },
              {
                question: "Can you provide prototypes before full production?",
                answer:
                  "Absolutely. We offer prototyping services to validate designs before committing to full production runs.",
              },
              {
                question: "What quality certifications do you hold?",
                answer:
                  "We maintain ISO 9001, ISO 14001, and industry-specific certifications relevant to the products we manufacture.",
              },
            ].map((faq, index) => (
              <ScrollReveal key={index} delay={index * 0.1} direction={index % 2 === 0 ? "right" : "left"}>
                <AnimatedCard hoverEffect="lift">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{faq.question}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{faq.answer}</p>
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

