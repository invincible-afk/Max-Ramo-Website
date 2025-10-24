"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Linkedin, Instagram, Mail, Phone } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Gracias por tu mensaje. Te responderé pronto!")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            <span className="text-primary">Contacto</span> & Colaboraciones
          </h1>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Si querés crear algo con propósito, hablemos. Estoy disponible para proyectos de desarrollo web, blockchain,
            diseño de tatuajes y colaboraciones creativas.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">Enviame un Mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">
                    Nombre
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 bg-secondary/50 border-border/40 focus:border-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 bg-secondary/50 border-border/40 focus:border-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-foreground">
                    Asunto
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="mt-2 bg-secondary/50 border-border/40 focus:border-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-foreground">
                    Mensaje
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-2 bg-secondary/50 border-border/40 focus:border-primary resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Enviar Mensaje
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6 text-foreground">Otras Formas de Contacto</h2>
              <div className="space-y-6">
                {/* Email */}
                <a
                  href="mailto:maxramoart@gmail.com"
                  className="block p-6 rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm
                             hover:bg-[#0072C6] hover:text-white hover:-translate-y-1 hover:shadow-lg
                             transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-primary mt-1">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Email</h3>
                      <p className="text-muted-foreground">maxramoart@gmail.com</p>
                    </div>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/5492644445057"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm
                             hover:bg-[#25D366] hover:border-[#25D366] hover:text-white
                             hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-primary mt-1">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">WhatsApp</h3>
                      <p className="text-muted-foreground">+549 264-444-5057</p>
                    </div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/maxramo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm
                             hover:bg-[#0077B5] hover:border-[#0077B5] hover:text-white
                             hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-primary mt-1">
                      <Linkedin size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">LinkedIn</h3>
                      <p className="text-muted-foreground">linkedin.com/in/maxramo</p>
                    </div>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/max_ramo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm
                             hover:bg-[#E1306C] hover:border-[#E1306C] hover:text-white
                             hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-primary mt-1">
                      <Instagram size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-foreground">Instagram</h3>
                      <p className="text-muted-foreground">@max_ramo</p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="mt-8 p-6 rounded-lg border border-primary/20 bg-primary/5">
                <h3 className="font-semibold mb-3 text-foreground">Disponibilidad</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Actualmente estoy disponible para proyectos freelance y colaboraciones. Respondo todos los mensajes
                  dentro de las 24-48 horas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
