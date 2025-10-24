import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Palette } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-32 pb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-balance">Soy Max Ramo</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 text-balance leading-relaxed">
              Fusiono <span className="text-primary font-semibold">tecnología</span>,{" "}
              <span className="text-primary font-semibold">arte</span> y{" "}
              <span className="text-primary font-semibold">narrativa</span> para crear experiencias con identidad.
            </p>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              El código y la tinta son dos formas de lo mismo: dejar una huella.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/about">
                  Explorá Mis Mundos <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="https://wa.me/5492644445057">Hablemos de Crear</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Duality Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="grid gap-8 max-w-6xl mx-auto justify-center sm:grid-cols-1 md:grid-cols-2">
            <div className="group p-8 rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 w-full">
              <div className="mb-4 text-primary">
                <Code2 size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Desarrollo</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Web & Blockchain developer. Creo experiencias digitales con código limpio y arquitectura sólida.
              </p>
              <Link
                href="/dev"
                className="text-primary hover:underline inline-flex items-center text-sm font-medium"
              >
                Ver Proyectos <ArrowRight className="ml-1" size={16} />
              </Link>
            </div>

            <div className="group p-8 rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300 w-full">
              <div className="mb-4 text-primary">
                <Palette size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">Arte</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Tatuador y artista visual. Transformo ideas en trazos que cuentan historias en la piel.
              </p>
              <Link
                href="/art"
                className="text-primary hover:underline inline-flex items-center text-sm font-medium"
              >
                Ver Galería <ArrowRight className="ml-1" size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-medium text-balance leading-relaxed">
              <span className="text-primary">"</span>
              Creo en la belleza del código y en la precisión del arte. Mi propósito es unir ambos mundos para
              transformar ideas en experiencias que inspiren.
              <span className="text-primary">"</span>
            </blockquote>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center p-12 rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">¿Querés crear algo con propósito?</h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Estoy disponible para proyectos de desarrollo web, blockchain, diseño de tatuajes y colaboraciones
              creativas.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="https://wa.me/5492644445057">
                Contactame <ArrowRight className="ml-2" size={18} />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
