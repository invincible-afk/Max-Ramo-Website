"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/about", label: "Sobre Mí" },
  { href: "/dev", label: "Desarrollo" },
  { href: "/art", label: "Arte" },
  { href: "/contact", label: "Contacto" },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="text-foreground">Max</span>
            <span className="text-primary"> Ramo</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative",
                  pathname === item.href ? "text-primary" : "text-muted-foreground",
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-primary" />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-foreground">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
