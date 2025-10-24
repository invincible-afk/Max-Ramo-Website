import Link from "next/link"
import { Linkedin, Instagram, Github, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">
              <span className="text-foreground">Max</span>
              <span className="text-primary"> Ramo</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fusiono tecnología y arte para crear experiencias con identidad.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sobre Mí
                </Link>
              </li>
              <li>
                <Link href="/dev" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Desarrollo
                </Link>
              </li>
              <li>
                <Link href="/art" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Arte
                </Link>
              </li>
             </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4 text-foreground">Conectá Conmigo</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/maxramo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#0077B5] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/max_ramo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#E1306C] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://github.com/maxramo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground hover:text-[#25D366] transition-colors">
              <Phone size={18} />
              <a
                href="https://wa.me/5492644445057"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                +549 264-444-5057
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Max Ramo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
