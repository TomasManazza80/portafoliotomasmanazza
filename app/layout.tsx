import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

// 1. MEJORA ESTRATÉGICA: Más palabras clave locales y de tecnología al inicio
export const metadata: Metadata = {
  // 🎯 TÍTULO OPTIMIZADO: Palabras clave fuertes al inicio (SEO Local y Tecnología)
  title: "Tomas Manazza | Programador Full Stack en Santa Fe | Next.js & React Expert",
  // 📝 DESCRIPCIÓN OPTIMIZADA: Concisa, con repetición de palabras clave
  description:
    "Tomas Manazza: Programador Full Stack y CEO de Empty_Development. Ofrezco desarrollo web de alto rendimiento (Next.js, React) y soluciones Back-end. Tu experto local en Santa Fe, Argentina.",
  generator: "Next.js",
  applicationName: "Tomas Manazza - Portafolio Profesional",
  
  // 🔑 KEYWORDS OPTIMIZADAS: Prioridad local y de intención comercial
  keywords: [
    "programador full stack santa fe",
    "full stack developer santa fe",
    "developer santa fe",
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
    title: "Tomas Manazza | Full Stack Developer | Santa Fe, Argentina",
    description:
      "Desarrollador Full Stack experto en crear aplicaciones web de alto impacto con Next.js y React. ¡Contáctame para tu proyecto en Santa Fe!",
    url: "https://www.tomasmanazza.com",
    siteName: "Tomas Manazza - Portafolio Profesional",
    images: [
      {
        url: "https://i.postimg.cc/SKD5TpwV/Whats-App-Image-2025-09-24-at-7-54-20-PM.jpg",
        width: 1200,
        height: 630,
        alt: "Tomas Manazza - Programador Full Stack en Santa Fe",
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  // 🐦 TWITTER CARDS - Título optimizado
  twitter: {
    card: "summary_large_image",
    title: "Programador Full Stack Next.js | Tomas Manazza | Santa Fe 🇦🇷",
    description:
      "Tomas Manazza, Programador Full Stack y CEO de Empty_Development. Soluciones web rápidas, escalables y orientadas a resultados. Next.js & React.",
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
// Esto es crucial para decirle a Google quién eres y dónde estás, mejorando el SEO Local.
const schemaMarkup = {
  "@context": "http://schema.org",
  "@type": "Person", // Tipo 'Person' para un portafolio individual
  "name": "Tomas Manazza",
  "jobTitle": "Programador Full Stack (Next.js & React Developer)",
  "url": "https://www.tomasmanazza.com",
  "sameAs": [
    "https://www.linkedin.com/in/tomasmanazza/", // Rellena con tu LinkedIn
    "https://github.com/tomasmanazza", // Rellena con tu GitHub
    "https://www.emptydevelopment.com/", // Rellena con tu sitio de Empty_Development
    "URL a tu Perfil de Twitter/X" // Rellena con tu Twitter
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Santa Fe",
    "addressRegion": "Santa Fe",
    "addressCountry": "AR"
  },
  "alumniOf": "Universidad o Bootcamp donde estudiaste", // Opcional: Aumenta credibilidad
  "image": "https://i.postimg.cc/SKD5TpwV/Whats-App-Image-2025-09-24-at-7-54-20-PM.jpg",
};


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <head>
        {/* ✨ JSON-LD (Schema Markup) - ¡La joya de la corona del SEO! */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        <meta name="google-site-verification" content="Tviee0mVRz9tlPLOv5_waP-rNS3m0y4K2mbqDHSqPJE" />
      </head>
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}