import React from "react";
import mock10 from '../assets/images/mock10.png'; // keeping a default image for now
import '../assets/styles/Project.scss';
import { ProjectData } from "../types/resume";

interface ProjectProps {
  data: ProjectData[];
}

function Project({ data }: ProjectProps) {
  return (
    <div className="projects-container" id="projects">
      <h1>Personal Projects</h1>
      <div className="projects-grid">
        {data.map((project) => (
          <div className="project" key={project.id}>
            <a href={project.url} target="_blank" rel="noreferrer">
              <img src={project.imageUrl || mock10} className="zoom" alt="thumbnail" width="100%" />
            </a>
            <a href={project.url} target="_blank" rel="noreferrer">
              <h2>{project.title}</h2>
            </a>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;