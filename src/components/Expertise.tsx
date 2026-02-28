import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faEthereum,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";
import { SkillCategory } from "../types/resume";

interface ExpertiseProps {
  data: SkillCategory[];
}

function Expertise({ data }: ExpertiseProps) {
  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "react": return faReact;
      case "ethereum": return faEthereum;
      case "docker": return faDocker;
      case "backend": return faNode;
      default: return faReact;
    }
  };

  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          {data.map((category, index) => (
            <div className="skill" key={index}>
              <FontAwesomeIcon icon={getIcon(category.iconType)} size="3x" />
              <h3>{category.title}</h3>
              <p>{category.description}</p>
              <div className="flex-chips">
                <span className="chip-title">Tech stack:</span>
                {category.skills.map((label, idx) => (
                  <Chip key={idx} className="chip" label={label} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expertise;
