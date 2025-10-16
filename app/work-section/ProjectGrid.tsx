// Importaciones necesarias
import ProjectCard from "./ProjectCard";
import { devProjects, ProjectProps } from "./projectDetails";
import { useState } from "react";

const ProjectGrid = () => {
  // Nota: El código comentado para el filtro está bien, lo mantengo así para que veas la estructura.
  // const [filter, setFilter] = useState(true);

  return (
    <>
      {/*
      <div className="mb-10 flex gap-16 text-[#e4ded7] md:mb-16 lg:mb-20 ">
        <h4
          className={`text-[16px] md:text-[20px] lg:text-[24px] ${
            filter ? "text-[#e4ded7]" : "text-[#e4ded7]/30"
          }`}
          onClick={() => setFilter(true)}
        >
          Development
        </h4>
        <h4
          className={`text-[16px] md:text-[20px] lg:text-[24px] ${
            filter ? "text-[#e4ded7]/30" : "text-[#e4ded7]"
          }`}
          onClick={() => setFilter(false)}
        >
          Design
        </h4>
      </div>
      */}

      <div className="flex w-[90%] flex-col gap-10 lg:max-w-[1200px] lg:gap-20">
        {devProjects.map((project: ProjectProps) => (
          <ProjectCard
            id={project.id}
            key={project.id}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            demo={project.demo}
            image={project.image}
            available={project.available}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectGrid;