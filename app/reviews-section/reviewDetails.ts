import { StaticImageData } from "next/image";
// ⚠️ NOTA IMPORTANTE:
// DEBES colocar las imágenes reales de cada desarrollador 
// en la carpeta '../../public/' y renombrar los archivos si es necesario.
// Las rutas aquí son placeholders.
import joaquinImg from "../../public/persons/joa.png"; // Asume que existe una imagen para Joaquin
import matiasImg from "../../public/persons/mati.png";   // Asume que existe una imagen para Matias
import jeffersonImg from "../../public/persons/jeff.png"; // Asume que existe una imagen para Jefferson

export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};

/**
 * Detalles de los testimonios de colaboración.
 * Estos testimonios resaltan el trabajo de Tomas Manazza (el propietario del portafolio)
 * en la integración de pasarelas de pago y el desarrollo de la API de seguimiento de pagos,
 * según lo atestiguan sus colaboradores.
 */
export const reviewDetails = [
  {
    name: "Joaquin Ibañez",
    role: "Programador Front End | Colaborador de Equipo",
    company: "Proyecto API de Pagos", // Cambia esto al nombre de tu proyecto/empresa
    profileImg: joaquinImg,
    testimonial:
      "La contribución de Tomas fue fundamental para la integración fluida de las pasarelas de pago. Su trabajo en la API nos permitió conectar el Front End con el sistema de seguimiento de manera impecable y segura, mejorando la experiencia del usuario.",
  },
  {
    name: "Matias Ahumada",
    role: "Full Stack Developer | Líder de Back-end",
    company: "Proyecto API de Pagos", // Cambia esto al nombre de tu proyecto/empresa
    profileImg: matiasImg,
    testimonial:
      "Trabajar con Tomas en el desarrollo de la API para el sistema de seguimiento de pagos fue muy eficiente. Su enfoque en la estabilidad y la lógica de negocio aseguró que el servicio fuera robusto, escalable y cumpliera con todos los requisitos funcionales.",
  },
  {
    name: "Jefferson Camacho",
    role: "Full Stack Developer | Especialista en Transacciones",
    company: "Proyecto API de Pagos", // Cambia esto al nombre de tu proyecto/empresa
    profileImg: jeffersonImg,
    testimonial:
      "Tomas se encargó de la parte más crítica: la integración de pasarelas de pago. Su dedicación a los detalles y a la seguridad en el manejo de datos es de un nivel superior. Gracias a su colaboración, la API maneja las transacciones sin problemas.",
  },
];