import React from "react";
import {techStack} from "../../portfolio";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";

export default function StackProgress() {
  if (!techStack.display) return null;

  return (
    <section
      className="main technical-skills-section"
      id="skills"
      aria-labelledby="technical-skills-title"
    >
      <p className="section-eyebrow">Applications, integration & development</p>
      <h2 className="section-heading" id="technical-skills-title">
        {techStack.title}
      </h2>
      <p className="section-intro">{techStack.subtitle}</p>
      <SoftwareSkill />
    </section>
  );
}
