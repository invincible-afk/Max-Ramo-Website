import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Instagram } from "lucide-react"

export const metadata = {
  title: "Arte & Tatuajes - Max Ramo",
  description: "Galería de tatuajes y obras. Sensibilidad visual, composición y simbolismo.",
}

const artworks = [
  {
    title: "Hakuna Matata",
    description: "Diseño que combina significado y estilo, transformando un mantra en arte visual.",
    image: "/hakuna-matata.jpg",
  },
  {
    title: "Líneas Minimalistas",
    description: "Diseño minimalista con líneas precisas y equilibrio",
    image: "/minimalist-line-tattoo-design-elegant.jpg",
  },
  {
    title: "Yggdrasil y Vegvísir",
    description: "Diseño que une el árbol de la vida nórdico (Yggdrasil) con el Vegvísir, símbolos de conexión, guía y protección. Representando fuerza, equilibrio y el camino interior del portador.",
    image: "/tattoo-vikingo.png",
  },
]

export default function ArtPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Arte & <span className="text-primary">Tatuajes</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl leading-relaxed">
            Cada tatuaje es una conversación entre el cliente y el lienzo de la piel. Transformo ideas en trazos
            permanentes que cuentan historias únicas, donde el simbolismo y la composición se encuentran.
          </p>

          {/* Gallery Section */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artworks.map((artwork, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={artwork.image || "/placeholder.svg"}
                      alt={artwork.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-foreground">{artwork.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{artwork.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Mi Proceso Creativo</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary mb-3">01</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Consulta</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Conversamos sobre tu idea, el significado que querés transmitir y cómo se adapta a tu cuerpo.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary mb-3">02</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Diseño</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Creo un diseño personalizado que combina tu visión con mi estilo y experiencia técnica.
                </p>
              </div>
              <div className="p-6 rounded-lg border border-border/40 bg-card/50 backdrop-blur-sm">
                <div className="text-3xl font-bold text-primary mb-3">03</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Ejecución</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Trabajo con precisión y cuidado para que el resultado final sea exactamente lo que imaginaste.
                </p>
              </div>
            </div>
          </section>

          {/* Philosophy Section */}
          <section className="mb-12">
            <div className="p-8 rounded-lg border border-primary/20 bg-primary/5">
              <h2 className="text-2xl font-bold mb-4 text-foreground">Filosofía Artística</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para mí, el tatuaje es más que decoración corporal. Es una forma de expresión permanente que debe ser
                tratada con el mismo respeto y dedicación que cualquier otra forma de arte. Cada diseño es único, cada
                trazo es intencional, y cada pieza cuenta una historia.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Mi estilo combina precisión técnica con sensibilidad artística. Me especializo en diseños que equilibran
                minimalismo y complejidad, donde cada elemento tiene un propósito y contribuye al conjunto.
              </p>
            </div>
          </section>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="https://wa.me/5492644445057">Consultá por un Diseño</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://www.instagram.com/max_ramo" target="_blank" rel="noopener noreferrer">
                <Instagram size={18} className="mr-2" />
                Ver Más en Instagram
              </a>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
