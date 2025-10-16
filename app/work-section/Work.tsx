import ProjectGrid from "./ProjectGrid";

const Work = () => {
  return (
    <section
      className="relative z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] py-16 md:py-20 lg:py-24"
      id="work"
    >
      <h2 className="mb-10 text-[36px] font-bold text-[#e4ded7] md:mb-16 md:text-[42px] lg:mb-20 lg:text-[72px]">
        Proyectos Destacados
      </h2>

      <ProjectGrid />
    </section>
  );
};

export default Work;