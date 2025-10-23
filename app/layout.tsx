import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
// IMPORTACIÓN DE ANALYTICS ELIMINADA: import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

// 1. MEJORA ESTRATÉGICA: Más palabras clave locales y de tecnología al inicio
export const metadata: Metadata = {
  // 🎯 TÍTULO OPTIMIZADO: Enfocado directamente en "Tomas Manazza - Full Stack Developer"
  title: "Tomas Manazza - Full Stack Developer | Next.js & React Expert en Santa Fe",
  // 📝 DESCRIPCIÓN OPTIMIZADA: Concisa, con repetición de palabras clave
  description:
    "Tomas Manazza: **Full Stack Developer** y CEO de Empty_Development. Ofrezco desarrollo web de alto rendimiento (Next.js, React) y soluciones Back-end escalables. Tu experto local en Santa Fe, Argentina.",
  generator: "Next.js",
  applicationName: "Tomas Manazza - Portafolio Profesional de Full Stack Developer",

  // 🔑 KEYWORDS OPTIMIZADAS: Prioridad al rol específico
  keywords: [
    "tomas manazza full stack developer", // CLAVE: Rol específico en primer lugar
    "full stack developer santa fe",
    "programador full stack santa fe",
    "Next.js developer santa fe",
    "React developer santa fe",
    "tomas manazza",
    "Empty_Development",
    "programador argentina",
    "desarrollo web santa fe",
    "contratar full stack developer",
  ],
  metadataBase: new URL("https://www.tomasmanazza.com"),
  alternates: {
    canonical: "https://www.tomasmanazza.com/",
  },

  // Iconografía (mantenido, es una buena práctica)
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><path d="M40 70 L20 50 L40 30 M60 30 L80 50 L60 70" fill="none" stroke="black" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },

  colorScheme: "dark",

  // 🔗 OPEN GRAPH (Compartir en Redes) - Título coherente
  openGraph: {
    title: "Tomas Manazza | Full Stack Developer | Santa Fe, Argentina", // ¡CONFIRMADO!
    description:
      "Desarrollador Full Stack experto en crear aplicaciones web de alto impacto con Next.js y React. ¡Contáctame para tu proyecto en Santa Fe!",
    url: "https://www.tomasmanazza.com",
    siteName: "Tomas Manazza - Portafolio Profesional",
    images: [
      {
        url: "https://i.postimg.cc/SKD5TpwV/Whats-App-Image-2025-09-24-at-7-54-20-PM.jpg",
        width: 1200,
        height: 630,
        alt: "Tomas Manazza - Full Stack Developer en Santa Fe", // ¡AJUSTADO!
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  // 🐦 TWITTER CARDS - Título optimizado
  twitter: {
    card: "summary_large_image",
    title: "Tomas Manazza - Full Stack Developer Next.js | Santa Fe 🇦🇷", // ¡AJUSTADO!
    description:
      "Tomas Manazza, Full Stack Developer y CEO de Empty_Development. Soluciones web rápidas, escalables y orientadas a resultados. Next.js & React.",
    creator: "@[TuUsuarioTwitter]", // ¡IMPORTANTE: Reemplazar con tu handle real!
    images: [
      "https://i.postimg.cc/SKD5TpwV/Whats-App-Image-2025-09-24-at-7-54-20-PM.jpg",
    ],
  },

  // ✅ ROBOTS: Mantenido, configuración correcta para indexación.
  robots: {
    index: true,
    follow: true,
    nocache: false,
    // GoogleBot sigue siendo importante para indexación, no lo elimino a menos que lo pidas específicamente.
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

// 2. MEJORA ESTRATÉGICA: JSON-LD (Schema Markup)
const schemaMarkup = {
  "@context": "http://schema.org",
  "@type": "Person",
  "name": "Tomas Manazza",
  "jobTitle": "Full Stack Developer (Next.js & React Expert)",
  "url": "https://www.tomasmanazza.com",
  "sameAs": [
    "https://www.linkedin.com/in/tomasmanazza/",
    "https://github.com/tomasmanazza",
    "https://www.emptydevelopment.com/",
    "URL a tu Perfil de Twitter/X"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Santa Fe",
    "addressRegion": "Santa Fe",
    "addressCountry": "AR"
  },
  "alumniOf": "Universidad o Bootcamp donde estudiaste",
  "image": "https://i.postimg.cc/SKD5TpwV/Whats-App-Image-2025-09-24-at-7-54-20-PM.jpg",
};


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <head>
        {/* JSON-LD (Schema Markup) - Crucial para SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        
      </head>
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        {/* ANALYTICS ELIMINADO: <Analytics /> */}
      </body>
    </html>
  );
}