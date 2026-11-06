import React from "react";
import "./Greeting.scss";
import deskCoding from "../../assets/lottie/deskCoding";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, greeting} from "../../portfolio";
import manOnTable from "../../assets/images/manOnTable.svg";

export default function Greeting() {
  if (!greeting.displayGreeting) return null;
  return (
    <section
      className="greet-main"
      id="greeting"
      aria-labelledby="greeting-title"
    >
      <div className="greeting-main">
        <div className="greeting-text-div">
          <p className="section-eyebrow greeting-eyebrow">{greeting.title}</p>
          <h1 className="greeting-text" id="greeting-title">
            {greeting.professionalTitle}
            <span className="greeting-specialization">
              {" "}
              {greeting.specialization}
            </span>
          </h1>
          <p className="greeting-text-p">{greeting.subTitle}</p>
          <p className="greeting-supporting-text">{greeting.supportingText}</p>
          <div className="greeting-experience-actions">
            <dl className="greeting-experience greeting-columns">
              {greeting.experienceSummary.map(item => (
                <div key={item.value}>
                  <dt>{item.value}</dt>
                  <dd>{item.label}</dd>
                </div>
              ))}
            </dl>
            <div className="button-greeting-div greeting-columns">
              <Button text="Contact me" href="#contact" />
              {greeting.resumeLink && (
                <Button text="View resume" newTab href={greeting.resumeLink} />
              )}
            </div>
          </div>
          <SocialMedia />
        </div>
        <div className="greeting-image-div" aria-hidden="true" inert="">
          {illustration.animated ? (
            <DisplayLottie animationData={deskCoding} h={360} />
          ) : (
            <img alt="" src={manOnTable} />
          )}
        </div>
      </div>
    </section>
  );
}
