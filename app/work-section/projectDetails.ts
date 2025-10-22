export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
{
  id: 0,
  name: "Vinoteca Baco",
  description:
    "Este es un e-commerce de vinos con un Dashboard de Administración completo para la gestión interna. Permite el control del balance financiero, el stock de productos y el cierre de caja diario. Además, cuenta con la integración de Mercado Pago para procesar pagos de manera eficiente y un sistema de notificaciones integrado para mantener a los administradores y usuarios al tanto de las novedades.",
  technologies: ["React", "Tailwind CSS", "Framer Motion"],
  github: "https://github.com/TomasManazza80",
  demo: "https://vineriabaco.com/",
  image: require(".//../../public/projects/PROYECTOS/baco.png"),
  available: true,
},
{
  id: 1,
  name: "LifeStyle Decoration",
  description:
    "Este es un e-commerce para una tienda de velas y accesorios para el hogar. Incluye un completo Dashboard de Administración que permite gestionar el balance financiero, el stock de productos y el cierre de caja diario. Está integrado con Mercado Pago para facilitar las transacciones y cuenta con un sistema de notificaciones para mantener la gestión informada en tiempo real.",
  technologies: ["React", "Tailwind CSS", "Framer Motion"],
  github: "https://github.com/TomasManazza80",
  demo: "https://lupetruccelli.com/",
  image: require(".//../../public/projects/PROYECTOS/ecommerce.png"),
  available: true,
},
 
  {
    id: 2,
    name: "EXODIUM GYM",
    description:
      "Built specifically for an AI startup, this website lets them present cutting-edge AI data processing solutions tailored to their customers' needs.",
    technologies: ["React", "Next.js", "Prismic CMS"],
    github: "https://github.com/TomasManazza80",
    demo: "https://exodium.netlify.app/",
    image: require(".//../../public/projects/PROYECTOS/Exodium.png"),
    available: true,
  },
 {
  id: 1,
  name: "NEW STYLE",
  description:
    "Este es un sistema de gestión integral diseñado para un gimnasio. Su característica principal es el módulo de control de pagos de usuarios. Incluye un Dashboard de Administración para monitorear el estado de las membresías, permitiendo identificar de forma clara y rápida qué usuarios han pagado y cuáles no. Posee integración con Mercado Pago para procesar las cuotas y un sistema de notificaciones para la administración.",
  technologies: ["React", "Tailwind CSS", "Framer Motion"],
  github: "https://github.com/TomasManazza80",
  demo: "https://newstylegym.life/",
  image: require(".//../../public/projects/PROYECTOS/newStyle.png"),
  available: true,
},
  // {
  //   id: 4,
  //   name: "Flixify",
  //   description:
  //     "Flixify lets you seamlessly explore movies and TV series, add bookmarks, and search across all pages. It offers user authentication along with a theme switch.",
  //   technologies: ["Next.js", "Typescript", "Prisma"],
  //   github: "https://github.com/TomasManazza80",
  //   demo: "https://flixify.victorwilliams.me/",
  //   image: require(".//../../public/projects/flixify.png"),
  //   available: true,
  // },
  // {
  //   id: 4,
  //   name: "SkyWatch",
  //   description:
  //     "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current weather and forecast for the next 2 days in any city.",
  //   technologies: ["React", "CSS", "Chart.js"],
  //   github: "https://github.com/victorcodess/weather-forecast-website",
  //   demo: "https://sky-watch.vercel.app/",
  //   image: require(".//../../public/projects/skywatch-flip.png"),
  //   available: true,
  // },
  // {
  //   id: 4,
  //   name: "Alpaca Image Generator",
  //   description:
  //     "An image generator website that allows users to generate, combine, and download images.",
  //   technologies: ["React", "CSS", "Merge Images"],
  //   github: "https://github.com/victorcodess/alpaca-image-generator",
  //   demo: "http://alpaca-image-generator-beta.vercel.app",
  //   image: require(".//../../public/projects/alpaca-flip.png"),
  //   available: true,
  // },

  // {
  //   id: 5,
  //   name: "Link Shortener",
  //   description:
  //     "A website that reduces the length of your URL using Bit.ly's API",
  //   technologies: ["JavaScript", "CSS", "Bit.ly's API"],
  //   github: "https://github.com/victorcodess/url-shortener",
  //   demo: "https://url-shortener-nine-delta.vercel.app",
  //   image: require(".//../../public/projects/shortener-new.webp"),
  //   available: true,
  // },
  // {
  //   id: 6,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/victorcodess/carpooling-service",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 7,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
