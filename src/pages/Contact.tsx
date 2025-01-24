"use client"

import { Mail, MapPin, Phone, Send } from "lucide-react"
import { useState } from "react"

import Button from "../components/ui/Button"
import { Input } from "../components/Input"
import { Textarea } from "../components/Textarea"
import { useToast } from "../hooks/use-toast"

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    })
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <div className="relative min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 space-y-2">
          <h1 className="text-4xl font-serif font-medium">Get In Touch</h1>
          <p className="text-muted-foreground">We'd love to hear from you. Drop us a line below.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Contact Info Card */}
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-serif mb-8">Contact Information</h2>

            <div className="space-y-8">
              <div className="group">
                <div className="flex items-center gap-4 p-4 rounded-lg transition-colors hover:bg-primary/5">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call Us</p>
                    <a href="tel:+916268648029" className="text-lg font-medium hover:text-primary transition-colors">
                      +91 626 864 8029
                    </a>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 p-4 rounded-lg transition-colors hover:bg-primary/5">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email Us</p>
                    <a
                      href="mailto:admin@candlings.com"
                      className="text-lg font-medium hover:text-primary transition-colors"
                    >
                      admin@candlings.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 p-4 rounded-lg transition-colors hover:bg-primary/5">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Visit Us</p>
                    <p className="text-lg font-medium">
                      116/2 Vallabh Nagar
                      <br />
                      Indore 452003
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="mt-8 rounded-lg overflow-hidden h-[300px] shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.3336576186766!2d75.8819!3d22.7245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0b7c2b8aa3%3A0xc9a1250fd47baa91!2sVallabh%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452003!5e0!3m2!1sen!2sin!4v1659942344251!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form Card */}
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100">
            <h2 className="text-2xl font-serif mb-8">Send Us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help?" required />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message..." rows={6} required />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

