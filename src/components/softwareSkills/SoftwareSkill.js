import React from "react";
import "./SoftwareSkill.scss";
import {techStack} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div className="technical-skills-grid">
      {techStack.experience.map(group => (
        <article
          className="portfolio-card technical-skill-group"
          key={group.Stack}
        >
          <h3>{group.Stack}</h3>
          <ul className="skill-tags">
            {group.skills.map(skill => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
