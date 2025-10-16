import gsap from "gsap";

const tl = gsap.timeline();

// Preloader Animation
export const preLoaderAnim = () => {
  // Primero hacemos visible el contenedor
  gsap.set(".texts-container", { opacity: 1 });
  
  // Configuramos el estado inicial de los textos (fuera de la vista)
  gsap.set(".preloader-text, .preloader-subtext", { 
    opacity: 0, 
    y: 70 
  });

  tl.to(".texts-container", {
    duration: 0.5,
    opacity: 1,
    ease: "Power3.easeOut",
  })
  .fromTo(".preloader-text", 
    { opacity: 0, y: 70 },
    {
      duration: 1.5,
      opacity: 1,
      y: 0,
      skewY: 0,
      stagger: 0.2,
      ease: "Power3.easeOut",
    }
  )
  .fromTo(".preloader-subtext", 
    { opacity: 0, y: 70 },
    {
      duration: 1.5,
      opacity: 1,
      y: 0,
      skewY: 0,
      stagger: 0.2,
      ease: "Power3.easeOut",
    },
    "-=1.2"
  )
  .to(".preloader-text, .preloader-subtext", {
    duration: 1,
    y: -70,
    stagger: 0.1,
    ease: "Power3.easeOut",
  })
  .to("body", {
    duration: 0.01,
    css: { overflowY: "scroll" },
    ease: "power3.inOut",
  })
  .to(".preloader", {
    duration: 1.5,
    height: "0vh",
    ease: "Power3.easeOut",
    onComplete: () => {
      // Limpiar el preloader del DOM después de la animación
      const preloader = document.querySelector('.preloader');
      if (preloader && preloader.parentNode) {
        preloader.parentNode.removeChild(preloader);
      }
    }
  }, "-=1.5");
};

export const mobileLanding = () => {
  if (typeof window !== "undefined" && window.innerWidth < 763) {
    tl.from(".landing__main2", {
      duration: 1,
      delay: 0,
      opacity: 0,
      y: 80,
      ease: "expo.easeOut",
    });
  }
};