import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { motion } from "framer-motion";
import heartIcon from "../../public/hearticon.png";

const Contact = () => {
  return (
    <motion.section
      className="relative z-10 flex min-h-[85vh] w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center py-10 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-0 lg:pb-28"
      id="contact"
      initial="initial"
      animate="animate"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center pt-10 md:pt-0">
        <div
          className={`flex flex-col items-center justify-center ${monaSans.className} relative w-full lg:max-w-[1440px]`}
        >
          <AnimatedWords2
            title={"Hablemos"}
            style={
              "flex max-w-[500px] flex-col items-center text-center text-[70px] font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:text-[100px] md:text-[150px] lg:text-[170px] xl:text-[200px] 2xl:text-[270px]"
            }
          />
          <Image
            src={heartIcon}
            alt="Heart Icon"
            className="heartbeat md:-bottom-18 absolute -bottom-5 left-64 w-[120px] sm:-bottom-14 sm:left-[40%] md:left-[40%] md:w-[150px] lg:-bottom-16 lg:left-[42%] lg:w-[230px] mb-[40px]"
          />
        </div>

        <div className="mt-12 flex w-full flex-col items-center justify-center gap-10 sm:mt-20 sm:gap-12 md:mt-28 md:flex-row md:items-start md:justify-between lg:mt-16 lg:max-w-[1440px]">
          <div className="flex w-full max-w-[90%] flex-col items-center text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[350px] md:w-[310px] md:items-start md:text-left md:text-[16px] lg:w-[420px] lg:text-[16px]">
            <AnimatedBody
              text={
                "¿Tienes alguna pregunta, propuesta, proyecto o quieres trabajar junto con nosotros en algo?"
              }
              className={
                "-mb-1 inline-block overflow-hidden pt-1 text-sm sm:text-base sm:-mb-2 md:-mb-3 lg:-mb-4 text-center md:text-left"
              }
            />
          </div>

          <div className="flex flex-col items-center gap-6 text-[16px] font-bold text-[#e4ded7] sm:flex-row sm:gap-10 sm:text-[18px] md:gap-8 md:text-[16px] lg:gap-12 lg:text-[20px] xl:gap-16 xl:text-[24px] 2xl:gap-20 2xl:text-[28px]">
            <Link
              href="https://github.com/TomasManazza80"
              target="_blank"
              aria-label="View GitHub Profile"
              className="hover:opacity-80 transition-opacity"
            >
              <AnimatedTitle
                text={"GitHub"}
                className={
                  "text-[14px] font-bold text-[#e4ded7] sm:text-[16px] md:text-[14px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/tomasmanazza/?locale=es_ES"
              target="_blank"
              aria-label="View LinkedIn Profile"
              className="hover:opacity-80 transition-opacity"
            >
              <AnimatedTitle
                text={"LinkedIn"}
                className={
                  "text-[14px] font-bold text-[#e4ded7] sm:text-[16px] md:text-[14px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
            <Link
              href="https://wa.me/+543425937358"
              target="_blank"
              aria-label="View WhatsApp"
              className="hover:opacity-80 transition-opacity"
            >
              <AnimatedTitle
                text={"WhatsApp"}
                className={
                  "text-[14px] font-bold text-[#e4ded7] sm:text-[16px] md:text-[14px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
            <Link
              href="https://www.instagram.com/empty_development/#"
              target="_blank"
              aria-label="View Instagram Profile"
              className="hover:opacity-80 transition-opacity"
            >
              <AnimatedTitle
                text={"Instagram"}
                className={
                  "text-[14px] font-bold text-[#e4ded7] sm:text-[16px] md:text-[14px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;