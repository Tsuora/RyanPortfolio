import React, {useContext, useEffect, useRef, useState} from "react";
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
  const [isMobile, setIsMobile] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const updateViewport = () => {
      const mobile = window.innerWidth <= 1100;
      setIsMobile(mobile);
      if (!mobile) setMenuOpen(false);
    };
    // Switching pin on after mount also fixes restored scroll positions.
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = event => {
      if (event.key !== "Escape") return;
      event.preventDefault();
      setMenuOpen(false);
      toggleRef.current?.focus({preventScroll: true});
    };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

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
    <Headroom pin={isMobile || menuOpen} style={{zIndex: isMobile ? 100 : 1}}>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a
          href="#greeting"
          className="logo"
          aria-label={`${greeting.username}, home`}
          onClick={() => setMenuOpen(false)}
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
          ref={toggleRef}
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="portfolio-navigation"
          onClick={() => setMenuOpen(open => !open)}
        >
          <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
          <span className="sr-only">
            {menuOpen ? "Close navigation" : "Open navigation"}
          </span>
        </button>
        <nav
          id="portfolio-navigation"
          className={
            menuOpen ? "portfolio-navigation is-open" : "portfolio-navigation"
          }
          aria-label="Main navigation"
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
