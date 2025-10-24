import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata = {
  title: "Sobre Mí - Max Ramo",
  description: "Vivo en el punto donde la lógica y la intuición se cruzan. Desarrollador, artista y escritor.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-balance">
            Sobre <span className="text-primary">Mí</span>
          </h1>

          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Vivo en el punto donde la lógica y la intuición se cruzan.
            </p>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                En el <span className="text-primary font-semibold">desarrollo web</span> encuentro estructura; en el{" "}
                <span className="text-primary font-semibold">arte</span>, expresión. Mi trabajo busca equilibrio entre
                ambos mundos: crear con propósito, precisión y emoción.
              </p>

              <p>
                Como <strong className="text-foreground">desarrollador web y blockchain</strong>, construyo experiencias
                digitales que priorizan la usabilidad, el rendimiento y la estética. Trabajo con tecnologías modernas
                para crear soluciones que no solo funcionen bien, sino que también se sientan bien.
              </p>

              <p>
                Como <strong className="text-foreground">artista tatuador</strong>, transformo ideas en trazos
                permanentes. Cada diseño es una conversación entre el cliente y el lienzo de la piel, donde el
                simbolismo y la composición se encuentran para contar una historia única.
              </p>

                  <div className="my-12 p-8 rounded-lg border border-primary/20 bg-primary/5">
                <h2 className="text-2xl font-bold mb-4 text-foreground">Mi Filosofía de Creación</h2>
                <p className="text-foreground/90">
                  Creo que la verdadera maestría está en la capacidad de fusionar disciplinas aparentemente opuestas. El
                  código puede ser poético. El arte puede ser sistemático. La escritura puede ser arquitectónica. Cuando
                  dejamos de ver estas áreas como separadas y comenzamos a verlas como lenguajes complementarios, es
                  cuando surge la magia.
                </p>
              </div>

              <p>
                Mi objetivo es simple: crear trabajo que trascienda pantallas y superficies, que conecte con las
                personas a un nivel más profundo y que deje una huella duradera.
              </p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">
                  Trabajemos Juntos <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/dev">Ver Mis Proyectos</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
