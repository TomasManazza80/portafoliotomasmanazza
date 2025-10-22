import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={
            "INGENIERÍA INFORMÁTICA. CONSTRUYENDO ARQUITECTURAS SÓLIDAS Y ESCALABLES."
          }
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          {/* COLUMNA 1: INTRODUCCIÓN Y EXPERIENCIA (Sin asteriscos y pulido para contratación) */}
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[65%] lg:text-[24px] ">
            <AnimatedBody
              text={
                "Hola, soy Tomás Manazza, estudiante de Ingeniería Informática (UNL-FICH) y Desarrollador Full Stack. Mi especialización principal se centra en el Backend y la Arquitectura de Sistemas."
              }
            />
            {/* Texto de enfoque profesional */}
            <AnimatedBody
              text={
                "Mi enfoque es la ingeniería de software: diseño y desarrollo de sistemas escalables y de alto rendimiento, creando la lógica de negocio, bases de datos optimizadas y APIs REST robustas."
              }
            />
            <AnimatedBody
              text={
                "Cuento con experiencia comprobable en proyectos reales para empresas de Santa Fe, incluyendo plataformas de gestión para gimnasios y sistemas de e-commerce para vinotecas. Esta experiencia me ha dotado de la capacidad de entregar soluciones de valor en entornos productivos."
              }
            />
            <AnimatedBody
              text={
                "Me impulsa el desafío de convertir requerimientos complejos en soluciones de software eficientes y mantenibles, priorizando siempre la aplicación de buenas prácticas de ingeniería y la optimización de recursos."
              }
            />
            <AnimatedBody
              text={
                "Actualmente liderando proyectos innovadores. Estoy disponible para colaborar en roles donde mi experiencia en desarrollo Back-end y arquitectura sea un activo clave."
              }
            />
          </div>

          {/* COLUMNA 2: HABILIDADES TÉCNICAS (Stack) */}
          <div className="mb-24 flex w-[100%] flex-col gap-8 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[35%] lg:text-[18px]">
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"BACKEND CORE (Ingeniería)"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px] font-bold"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Node.js (Express.js), TypeScript, Nest.js, APIs RESTful, Arquitectura de Microservicios, Seguridad (OAuth/JWT), Docker"
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"DATOS & ALMACENAMIENTO"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px] font-bold"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "PostgreSQL, MongoDB, SQL/NoSQL, Redis (Caching), Optimización de consultas, ORMs (Sequelize, Mongoose)."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"STACK COMPLEMENTARIO & CI/CD"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px] font-bold"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "TypeScript, Next.js/React (Fundamentos), Git/GitHub, CI/CD (GitHub Actions/Vercel), Metodologías Ágiles, Pruebas Unitarias y de Integración."
                }
              />
            </div>
          </div>
        </div>

        {/* CARRUSEL DE MÚSICA */}
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
          <SongCarousel />
          <AnimatedBody
            text="Mi banda sonora mientras desarrollo: unas pocas recomendaciones si buscas algo nuevo."
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] "
          />
        </div>
      </div>
    </section>
  );
};

export default About;