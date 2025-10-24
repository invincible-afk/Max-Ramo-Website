import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

export const metadata = {
  title: "Desarrollo - Max Ramo",
  description: "Proyectos de desarrollo web y blockchain. Stack técnico y filosofía de código limpio.",
}

const projects = [
  {
    title: "Sitio Web Metalúrgica CAEL",
    description: "Sitio web de Metalúrgica CAEL, liderada por Carlos Andrés Echenique Landa, metalúrgico con más de 20 años de experiencia. Muestra servicios, trabajos realizados y contacto, con un enfoque en soluciones metálicas duraderas, funcionales y a medida.",
    tags: ["React", "TypeScript", "TailwindCSS"],
    link: "https://metalurgica-cael.vercel.app/",
    github: "https://github.com/invincible-afk/Metalurgica-CAEL",
  },
  {
    title: "Sitio Web Dos Galaxias Serigrafía",
    description: "Sitio web oficial de Dos Galaxias Serigrafía, un estudio creativo especializado en estampados personalizados, diseño textil y serigrafía artesanal.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://dos-galaxias-serigrafia.vercel.app/",
    github: "https://github.com/invincible-afk/dos-galaxias-serigrafia",
  },
  {
    title: "Sitio Web Herederos - Productora de Eventos",
    description: "Sitio web oficial de Herederos una Productora de Eventos especializada en eventos sociales personalizados, únicos y memorables.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    link: "https://herederos-productora-de-eventos.vercel.app/",
    github: "https://github.com/invincible-afk/Herederos",
  },

]

const skills = {
  frontend: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
  backend: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
  blockchain: ["Solidity", "Web3.js", "Ethers.js", "Hardhat", "Smart Contracts"],
  tools: ["Git", "Docker", "Vercel", "AWS", "Figma"],
}

export default function DevPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Desarrollo <span className="text-primary">Web & Blockchain</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl leading-relaxed">
            Creo experiencias digitales con código limpio, arquitectura sólida y un enfoque centrado en la experiencia
            del usuario. Cada proyecto es una oportunidad para fusionar funcionalidad y estética.
          </p>

          {/* Projects Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Proyectos Destacados</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur-sm border-border/40 hover:border-primary/50 transition-all duration-300"
                >
                  <CardHeader>
                    <CardTitle className="text-foreground">{project.title}</CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-secondary/50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button asChild size="sm" variant="outline">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} className="mr-2" />
                          Ver Proyecto
                        </a>
                      </Button>
                      <Button asChild size="sm" variant="ghost">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github size={16} className="mr-2" />
                          Código
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Stack Técnico</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-4 text-primary">Frontend</h3>
                <ul className="space-y-2">
                  {skills.frontend.map((skill, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-4 text-primary">Backend</h3>
                <ul className="space-y-2">
                  {skills.backend.map((skill, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-4 text-primary">Blockchain</h3>
                <ul className="space-y-2">
                  {skills.blockchain.map((skill, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm">
                <h3 className="text-lg font-semibold mb-4 text-primary">Herramientas</h3>
                <ul className="space-y-2">
                  {skills.tools.map((skill, index) => (
                    <li key={index} className="text-sm text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section>
            <div className="p-8 rounded-lg border border-primary/20 bg-primary/5">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Filosofía de Desarrollo</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Creo en el código como una forma de arte. Cada línea debe tener un propósito, cada componente debe ser
                reutilizable, y cada interfaz debe ser intuitiva. La tecnología es solo una herramienta; lo que
                realmente importa es la experiencia que creamos para las personas.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mi enfoque combina las mejores prácticas de la ingeniería de software con una sensibilidad visual
                heredada del arte. El resultado son aplicaciones que no solo funcionan perfectamente, sino que también
                se sienten bien de usar.
              </p>
            </div>
          </section>

          <div className="mt-12">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">Hablemos de Tu Proyecto</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
