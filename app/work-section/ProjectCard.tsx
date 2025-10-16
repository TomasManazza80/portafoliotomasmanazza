// Importaciones necesarias
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";

const cardVariants = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeInOut",
      staggerChildren: 0.2,
    },
  },
};

const textVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  github,
  demo,
  image,
  available,
}: ProjectProps) => {
  const isEven = id % 2 === 0;

  return (
    <motion.div
      variants={cardVariants}
      initial="initial"
      animate="animate"
      className={`group relative z-10 flex h-[650px] w-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-[#11131b] py-8 shadow-2xl md:h-[550px] lg:h-[500px] lg:flex-row lg:py-0 ${
        isEven ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* Contenedor de la información (texto y botones) */}
      <div
        className={`relative z-30 flex h-full w-full flex-col items-center p-6 text-white lg:w-1/2 lg:items-start lg:p-14 ${
          isEven ? "lg:text-right" : ""
        }`}
      >
        <div
          className={`mb-6 flex items-center gap-4 ${
            isEven ? "lg:self-end" : "lg:self-start"
          }`}
        >
          {available ? (
            <>
              <Link
                href={github}
                target="_blank"
                className="rounded-full bg-white p-5 text-gray-900 shadow-md transition-all duration-300 hover:scale-110 hover:bg-gray-200"
                aria-label="Open GitHub Repository"
              >
                <FontAwesomeIcon icon={faGithub} className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]" />
              </Link>
              <Link
                href={demo}
                target="_blank"
                className="rounded-full bg-white p-5 text-gray-900 shadow-md transition-all duration-300 hover:scale-110 hover:bg-gray-200"
                aria-label="Open Live Demo"
              >
                <FontAwesomeIcon icon={faLink} className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]" />
              </Link>
            </>
          ) : (
            <div className="flex items-center gap-4">
              <Link
                href={github}
                target="_blank"
                className="rounded-full bg-white p-5 text-gray-900 shadow-md transition-all duration-300 hover:scale-110 hover:bg-gray-200"
                aria-label="Open GitHub Repository"
              >
                <FontAwesomeIcon icon={faGithub} className="w-[20px] text-[20px] md:w-[25px] md:text-[24px] lg:w-[30px] lg:text-[28px]" />
              </Link>
              <div className="rounded-xl bg-white px-4 py-2 text-gray-900 shadow-md md:px-5 md:py-3 lg:px-6 lg:py-4">
                <h3 className="text-[16px] font-bold md:text-[18px] lg:text-[20px]">
                  Próximamente
                </h3>
              </div>
            </div>
          )}
        </div>
        <motion.div variants={textVariants}>
          <AnimatedTitle
            text={name}
            className={`text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl ${
              isEven ? "lg:text-right" : ""
            }`}
            wordSpace={"mr-[0.25em]"}
            charSpace={"-mr-[0.01em]"}
          />
        </motion.div>
        <motion.div variants={textVariants}>
          <AnimatedBody
            text={description}
            className={`mt-4 text-lg text-gray-300 md:w-[90%] lg:w-full ${
              isEven ? "lg:text-right" : ""
            }`}
          />
        </motion.div>
        <div
          className={`mt-9 flex flex-wrap gap-x-4 gap-y-2 ${
            isEven ? "lg:self-end" : "lg:self-start"
          }`}
        >
          {technologies.map((tech, idx) => (
            <motion.div variants={textVariants} key={idx}>
              <AnimatedTitle
                text={tech}
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
                className={"text-base font-bold uppercase text-gray-400 md:text-lg lg:text-xl"}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contenedor de la imagen */}
      <div className="relative flex h-full w-full items-center justify-center lg:w-1/2">
        {/* Enlace que envuelve la capa de desenfoque y la imagen */}
        {available ? (
          <Link href={demo} target="_blank" className="relative h-full w-full">
            <div
              className={`absolute inset-0 z-20 hidden backdrop-blur-md transition-all duration-500 group-hover:backdrop-blur-none lg:block ${
                isEven ? "left-0" : "right-0"
              }`}
            ></div>
            <Image
              src={image}
              alt={name}
              width={700}
              height={700}
              className="relative z-10 h-full w-full object-cover transition-all duration-500"
            />
          </Link>
        ) : (
          <>
            <div
              className={`absolute inset-0 z-20 hidden backdrop-blur-md transition-all duration-500 group-hover:backdrop-blur-none lg:block ${
                isEven ? "left-0" : "right-0"
              }`}
            ></div>
            <Image
              src={image}
              alt={name}
              width={700}
              height={700}
              className="relative z-10 h-full w-full object-cover transition-all duration-500"
            />
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;