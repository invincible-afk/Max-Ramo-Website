import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Geist_Mono } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

// 🧠 METADATA ACTUALIZADA
export const metadata: Metadata = {
  title: "Max Ramo - Desarrollador & Artista",
  description:
    "Portfolio de Max Ramo - Fusiono tecnología, arte y narrativa para crear experiencias con identidad. Desarrollador Web & Blockchain, Artista Tatuador y Escritor.",
  keywords: [
    "Max Ramo",
    "desarrollador web",
    "blockchain developer",
    "tatuador",
    "artista",
    "escritor",
    "portfolio",
  ],
  authors: [{ name: "Max Ramo" }],
  generator: "v0.app",
  metadataBase: new URL("https://max-ramo-website.vercel.app"),

  // 🖼️ OPEN GRAPH PARA MINIATURA
  openGraph: {
    title: "Max Ramo - Desarrollador & Artista",
    description: "Fusiono tecnología, arte y narrativa para crear experiencias con identidad.",
    url: "https://max-ramo-website.vercel.app",
    siteName: "Max Ramo Portfolio",
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "/og-image.jpg", // 👈 debe estar en /public
        width: 1200,
        height: 630,
        alt: "Max Ramo - Portfolio",
      },
    ],
  },

  // 🐦 TARJETA DE TWITTER
  twitter: {
    card: "summary_large_image",
    title: "Max Ramo - Desarrollador & Artista",
    description: "Fusiono tecnología, arte y narrativa para crear experiencias con identidad.",
    images: ["/og-image.jpg"],
    creator: "@max_ramo", // opcional si tenés Twitter
  },

  // 🔗 ICONO DE NAVEGADOR
icons: {
  icon: "/logo.svg",
},

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Datos estructurados JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Max Ramo",
              jobTitle: "Desarrollador Web y Blockchain / Artista y Tatuador",
              url: "https://max-ramo-website.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/maxramo/",
                "https://www.instagram.com/max_ramo",
              ],
              description:
                "Fusiono tecnología, arte y narrativa para crear experiencias con identidad.",
            }),
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
