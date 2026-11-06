import React, {useContext} from "react";
import "./StartupProjects.scss";
import {bigProjects} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function StartupProject() {
  const {isDark} = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    <section className="main" id="projects" aria-labelledby="projects-title">
      <div>
        <h2 className="section-heading" id="projects-title">
          {bigProjects.title}
        </h2>
        <p className="section-intro project-subtitle">{bigProjects.subtitle}</p>

        <div className="projects-container">
          {bigProjects.projects.map((project, i) => {
            return (
              <div
                key={i}
                className={
                  isDark
                    ? "dark-mode project-card project-card-dark"
                    : "project-card project-card-light"
                }
              >
                {project.image ? (
                  <div className="project-image">
                    <img
                      src={project.image}
                      alt={project.projectName}
                      className="card-image"
                    ></img>
                  </div>
                ) : null}
                <div className="project-detail">
                  <h3 className="card-title">{project.projectName}</h3>
                  <p className={"card-subtitle"}>{project.projectDesc}</p>

                  <div className="project-bulletpoints">
                    <ul>
                      {project.projectBullets
                        ? project.projectBullets.map((item, i) => (
                            <li
                              key={i}
                              className={
                                isDark ? "subTitle dark-mode-text" : "subTitle"
                              }
                            >
                              {item}
                            </li>
                          ))
                        : null}
                    </ul>
                  </div>

                  {project.footerLink ? (
                    <div className="project-card-footer">
                      {project.footerLink.map((link, i) => {
                        return (
                          <a
                            key={i}
                            className={
                              isDark ? "dark-mode project-tag" : "project-tag"
                            }
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {link.name}
                          </a>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
