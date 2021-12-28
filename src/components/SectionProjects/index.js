import React from "react";
import { projects } from "../../projects";
import { CardProject } from "../CardProject";
import { SectionProjectsStyled } from "./styles";

export const SectionProjects = () => {
  return (
    <SectionProjectsStyled id="projects">
      <h2>Proyectos</h2>

      {projects.map((project) => {
        return (
          <CardProject
            title={project.title}
            description={project.description}
            repo={project.repo}
            deploy={project.deploy}
            image={project.image}
            key={project.id}
          />
        );
      })}
    </SectionProjectsStyled>
  );
};
