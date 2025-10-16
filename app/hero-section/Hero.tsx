import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
import profile from "../../public/profile.png";

const Hero = () => {
  return (
    <motion.section
      className="relative z-10 flex min-h-[85vh] w-full flex-col items-stretch justify-center bg-[url('.//../public/hero.jpg')] bg-cover bg-center py-0 sm:min-h-[90vh] md:min-h-[100vh] 3xl:min-h-[85vh]"
      id="home"
      initial="initial"
      animate="animate"
    >
      <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] mix-blend-color"></motion.div>

      <div className="absolute top-10 flex w-full justify-between px-5 sm:left-1/2 sm:w-[90%] sm:-translate-x-1/2 sm:px-0 lg:max-w-[1440px]">
        <div>
          <Link
            href="https://cal.com/rodrigo-garcia-9bkuon/30min?overlayCalendar=true"
            target="_blank"
            aria-label="AGENDAR REUNION"
          >
            <motion.button
              className="hidden rounded-md border-2 border-[#e4ded7] py-2 px-4 text-[14px] font-semibold text-[#e4ded7] transition-colors hover:bg-[#e4ded7] hover:text-[#0E1016] sm:block md:text-[16px] lg:block"
              variants={bodyAnimation}
            >
              AGENDAR REUNION
            </motion.button>
          </Link>
        </div>

        <div className="flex gap-10 text-[#e4ded7] sm:gap-12 md:gap-14 lg:gap-14">
          <Link
            href="https://github.com/TomasManazza80"
            target="_blank"
            aria-label="View GitHub Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              GitHub
            </motion.p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/tomasmanazza/"
            target="_blank"
            aria-label="View LinkedIn Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              LinkedIn
            </motion.p>
          </Link>
        </div>
      </div>

      <div className="z-10 -mt-36 flex flex-1 flex-col items-center justify-center sm:-mt-20 lg:my-40 lg:-mt-2 lg:py-40">
        <div
          className={`relative flex flex-col items-center justify-center ${monaSans.className}`}
        >
          <AnimatedWords
            title="TOMÁS MANAZZA"
            style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
          />
          <motion.div
            className="absolute bottom-[-110px] mx-auto sm:bottom-[-100px] md:bottom-[-130px] lg:bottom-[-150px]"
            variants={imageAnimation}
          >
            <Image
              src={profile}
              priority
              alt="Victor's headshot"
              data-blobity-tooltip="Giga Chad"
              data-blobity-invert="false"
              className="w-[120px] rounded-[16px] grayscale hover:grayscale-0 md:w-[150px] md:rounded-[32px] lg:w-[180px]"
            />
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 w-full max-w-[90%] -translate-x-1/2 transform items-center justify-center md:bottom-10 lg:flex lg:max-w-[1440px] lg:justify-between">
        <motion.div
          className="max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
          variants={bodyAnimation}
        >
          <p className="z-50 text-center text-[16px] font-medium text-[#e4ded7] md:text-[20px] lg:text-left">
            Programador Full Stack, con una especialización en Backend. CEO de{" "}
            <Link
              href="https://www.instagram.com/empty_development/#"
              target="_blank"
              className="underline underline-offset-2 hover:no-underline"
              aria-label="Kora Website"
            >
              EmptyDevelopment,
            </Link>{" "}
            StartUp de Sistemas de Gestión Privados
          </p>
        </motion.div>

        <motion.div
          className="mt-4 hidden max-w-[500px] lg:mt-0 lg:block lg:max-w-[420px]"
          variants={bodyAnimation}
        >
          <p className="text-right text-[16px] font-semibold text-[#e4ded7] md:text-[20px]">
            Estudiante de Ing.Informatica en la Facultad de Ingeniería y Ciencias Hidricas.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;