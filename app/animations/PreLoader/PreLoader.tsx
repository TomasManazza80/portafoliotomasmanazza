"use client";
import { useEffect } from "react";
import { preLoaderAnim } from "./loader";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader h-screen w-full bg-[#0e1016] text-[#e4ded7] fixed bottom-0 left-0 right-0 z-[9999] flex justify-center items-center overflow-hidden">
      <div className="texts-container flex flex-col items-center justify-center gap-2 sm:gap-3 h-[60px]">
        <div className="preloader-name-line flex items-center gap-2 sm:gap-3">
          <span className="preloader-text inline-block text-sm sm:text-base md:text-lg lg:text-xl font-extrabold text-[#e4ded7] opacity-0 translate-y-full">
            TOMÁS
          </span>
          <span className="preloader-text inline-block text-sm sm:text-base md:text-lg lg:text-xl font-extrabold text-[#e4ded7] opacity-0 translate-y-full">
            MANAZZA
          </span>
          <span className="preloader-text inline-block text-sm sm:text-base md:text-lg lg:text-xl font-extrabold text-[#e4ded7] opacity-0 translate-y-full">
            |
          </span>
          <span className="preloader-text inline-block text-sm sm:text-base md:text-lg lg:text-xl font-extrabold text-[#e4ded7] opacity-0 translate-y-full">
            DEVELOPER
          </span>
        </div>
        <div className="preloader-ceo-line flex items-center gap-2">
          <span className="preloader-subtext inline-block text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#9ca3af] opacity-0 translate-y-full">
            PROGRAMADOR
          </span>
          <span className="preloader-subtext inline-block text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#9ca3af] opacity-0 translate-y-full">
            FULL
          </span>
          <span className="preloader-subtext inline-block text-xs sm:text-sm md:text-base lg:text-lg font-bold text-[#9ca3af] opacity-0 translate-y-full">
            STACK
          </span>
        </div>
      </div>
    </div>
  );
};

export default PreLoader;