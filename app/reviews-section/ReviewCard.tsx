import { reviewProps } from "./reviewDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";

import slash from "../../public/review-slash.svg";
import { motion } from "framer-motion";

// Se asume que este componente debería llamarse ReviewCard en lugar de BlogCard.
const BlogCard = ({ 
  name, 
  role, 
  company, 
  profileImg, 
  testimonial, 
  index 
}: reviewProps) => {
  
  const abbreviateName = (name: string): string => {
    // Esta función mantiene la abreviación del apellido (p. ej., Joaquin I.)
    const parts = name.split(" ");
    if (parts.length > 1) {
      const lastNameInitial = parts[parts.length - 1][0];
      return `${parts[0]} ${lastNameInitial}.`;
    }
    return name;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          delay: 0.1 * index,
          ease: [0.44, 0, 0.22, 0.99],
        },
      }}
      viewport={{
        amount: "some",
        once: true,
      }}
      // CLASES CORREGIDAS:
      // Se eliminó h-[473px] para usar min-h.
      // Se eliminó 'justify-between' para pantallas pequeñas para que el contenido fluya.
      // Se agregó 'gap-6' para separar el texto del autor.
      className="relative flex min-h-[400px] w-[100%] flex-col items-start rounded-[23px] border-[3px] border-[#212531] bg-transparent p-[28px] gap-6 lg:min-h-[393px] lg:max-w-[438px] "
    >
      <Image
        src={slash}
        alt={"title"}
        className="absolute top-[34px] left-[28px] w-[51px]"
      />

      {/* TEXTO DEL TESTIMONIO: flex-grow: permite que el texto use todo el espacio vertical disponible */}
      <p className="mt-10 text-[18px] font-[500] leading-relaxed tracking-wide text-[#e4ded7] flex-grow">
        {testimonial}
      </p>

      {/* CONTENEDOR DEL AUTOR: Se eliminó sm:absolute para evitar la superposición. 
          Ahora fluye justo después del texto. Se agregó mt-auto para empujarlo al fondo en pantallas grandes. */}
      <div className="flex gap-3 pt-4 mt-auto w-full"> 
        <Image
          src={profileImg}
          alt={name}
          width={41}
          height={41}
          // El tamaño de la imagen se define con w y h, no con width/height de Next/Image si usas object-cover
          className="h-[41px] w-[41px] rounded-full bg-contain bg-center object-cover grayscale" 
        />
        <div className="flex flex-col gap-1 pr-7">
          {/* Título: Se eliminó w-[176px] para permitir que el texto se ajuste si es largo */}
          <h3 className="text-[23px] font-bold uppercase leading-[20.7px] tracking-[-0.46056px] text-[#e4ded7]">
            {abbreviateName(name)}
          </h3>
          <p className="text-sm font-[500] leading-[16px] text-[#95979D]">
            {role} @ {company}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard; // Se recomienda renombrar el archivo a ReviewCard.tsx