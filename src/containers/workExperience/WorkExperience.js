import React from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";

export default function WorkExperience() {
  if (!workExperiences.display) return null;
  return (
    <section
      id="experience"
      className="main experience-container"
      aria-labelledby="experience-title"
    >
      <p className="section-eyebrow">Enterprise IT & software development</p>
      <h2 className="section-heading" id="experience-title">
        Professional Experience
      </h2>
      <p className="section-intro">
        Enterprise application support, systems integration, and software development across municipal government and business environments.
      </p>
      <ol className="experience-list">
        {workExperiences.experience.map(card => (
          <li key={card.company}>
            <ExperienceCard cardInfo={card} />
          </li>
        ))}
      </ol>
    </section>
  );
}
