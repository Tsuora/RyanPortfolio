import React from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {illustration, contactInfo, greeting} from "../../portfolio";
import emailLaunch from "../../assets/lottie/emailLaunch";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function Contact() {
  return (
    <section
      className="main contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-header">
        <p className="section-eyebrow">Contact & resume</p>
        <h2 className="section-heading" id="contact-title">
          {contactInfo.title}
        </h2>
        <p className="section-intro">{contactInfo.subtitle}</p>
        <a
          className="contact-detail-email"
          href={`mailto:${contactInfo.email_address}`}
        >
          {contactInfo.email_address}
        </a>
        {greeting.resumeLink && (
          <Button text="View resume" href={greeting.resumeLink} newTab />
        )}
        <SocialMedia />
      </div>
      <div className="contact-image-div" aria-hidden="true" inert="">
        {illustration.animated ? (
          <DisplayLottie animationData={emailLaunch} h={300} />
        ) : (
          <img
            alt=""
            src={require("../../assets/images/contactMailDark.svg")}
          />
        )}
      </div>
    </section>
  );
}
