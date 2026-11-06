import React from "react";
import "./Skills.scss";
import {skillsSection} from "../../portfolio";

export default function Skills() {
  if (!skillsSection.display) return null;

  return (
    <section
      className="main capabilities-section"
      id="capabilities"
      aria-labelledby="capabilities-title"
    >
      <p className="section-eyebrow">{skillsSection.expertiseTitle}</p>
      <h2 className="section-heading" id="capabilities-title">
        {skillsSection.title}
      </h2>
      <p className="section-intro capabilities-intro">
        {skillsSection.subTitle}
      </p>
      <div className="capabilities-grid">
        {skillsSection.skills.map(skill => (
          <article className="portfolio-card capability-card" key={skill.title}>
            <i className={skill.icon} aria-hidden="true" />
            <p className="capability-expertise">{skill.expertise}</p>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
