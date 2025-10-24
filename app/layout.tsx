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

export const metadata: Metadata = {
  title: "Max Ramo - Desarrollador & Artista",
  description:
    "Portfolio de Max Ramo - Fusiono tecnología y arte para crear experiencias con identidad. Desarrollador Web & Blockchain, Artista Tatuador y Escritor.",
  keywords: ["Max Ramo", "desarrollador web", "blockchain developer", "tatuador", "artista", "escritor", "portfolio"],
  authors: [{ name: "Max Ramo" }],
  openGraph: {
    title: "Max Ramo - Desarrollador & Artista",
    description: "Fusiono tecnología, arte y narrativa para crear experiencias con identidad.",
    type: "website",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Max Ramo",
              jobTitle: "Desarrollador Web y Blockchain / Artista y Tatuador",
              url: "https://maxramo.com",
              sameAs: ["https://www.linkedin.com/in/maxramo/", "https://www.instagram.com/max_ramo"],
              description: "Fusiono tecnología, arte y narrativa para crear experiencias con identidad.",
            }),
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} ${geistMono.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
