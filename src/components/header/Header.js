import React, {useContext, useState} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  skillsSection,
  enterpriseHighlights,
  techStack,
  workExperiences,
  bigProjects
} from "../../portfolio";

export default function Header() {
  const {isDark} = useContext(StyleContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    {href: "#capabilities", text: "What I Do", display: skillsSection.display},
    {
      href: "#highlights",
      text: "Highlights",
      display: enterpriseHighlights.display
    },
    {href: "#skills", text: "Skills", display: techStack.display},
    {href: "#experience", text: "Experience", display: workExperiences.display},
    {href: "#projects", text: "Projects", display: bigProjects.display},
    {href: "#contact", text: "Contact", display: true}
  ];
  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a
          href="#greeting"
          className="logo"
          aria-label={`${greeting.username}, home`}
        >
          <span className="grey-color" aria-hidden="true">
            &lt;
          </span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color" aria-hidden="true">
            /&gt;
          </span>
        </a>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="portfolio-navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
          <span className="sr-only">Toggle navigation</span>
        </button>
        <nav
          id="portfolio-navigation"
          className={
            menuOpen ? "portfolio-navigation is-open" : "portfolio-navigation"
          }
          aria-label="Main navigation"
          onKeyDown={event => {
            if (event.key === "Escape") setMenuOpen(false);
          }}
        >
          <ul className="menu">
            {links
              .filter(link => link.display)
              .map(link => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setMenuOpen(false)}>
                    {link.text}
                  </a>
                </li>
              ))}
            <li className="theme-control">
              <ToggleSwitch />
            </li>
          </ul>
        </nav>
      </header>
    </Headroom>
  );
}
