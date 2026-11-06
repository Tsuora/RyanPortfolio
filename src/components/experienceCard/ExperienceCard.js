import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo}) {
  return (
    <article className="portfolio-card experience-card">
      <header className="experience-role-details">
        <div className="experience-logo-frame" aria-hidden="true">
          <img
            className={[
              "experience-logo",
              cardInfo.logoVariant && `experience-logo--${cardInfo.logoVariant}`
            ]
              .filter(Boolean)
              .join(" ")}
            src={cardInfo.companylogo}
            alt=""
            loading="lazy"
          />
        </div>
        <div className="experience-company-info">
          <p className="experience-company">{cardInfo.company}</p>
          <h3 className="experience-text-role">{cardInfo.role}</h3>
          <p className="experience-text-date">{cardInfo.date}</p>
        </div>
      </header>
      <div className="experience-text-details">
        {cardInfo.desc && (
          <p className="experience-text-desc">{cardInfo.desc}</p>
        )}
        {/* eslint-disable-next-line jsx-a11y/no-redundant-roles -- Preserve Safari list semantics with custom CSS markers. */}
        <ul role="list">
          {cardInfo.descBullets?.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
