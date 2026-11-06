import React from "react";
import {createRoot} from "react-dom/client";
import {act} from "react-dom/test-utils";
import App from "./App";

global.IS_REACT_ACT_ENVIRONMENT = true;

jest.mock("./components/displayLottie/DisplayLottie", () => () => null);

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn()
  }))
});

let container;
let root;
beforeEach(() => {
  window.localStorage.clear();
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
  act(() => root.render(<App />));
});
afterEach(() => {
  act(() => root.unmount());
  container.remove();
});

it("presents enterprise expertise first and preserves the chronological employment record", () => {
  expect(container.querySelector("h1").textContent).toBe(
    "IT Applications Analyst Enterprise Systems & Integration"
  );
  expect(
    Array.from(container.querySelectorAll("main > section")).map(
      section => section.id
    )
  ).toEqual([
    "greeting",
    "capabilities",
    "highlights",
    "skills",
    "experience",
    "projects",
    "education",
    "contact"
  ]);
  expect(
    Array.from(container.querySelectorAll(".experience-company")).map(
      node => node.textContent
    )
  ).toEqual([
    "NeoDX",
    "Gachadiction",
    "City of Newport Beach",
    "Hitachi Consulting – Toyota Motor Sales"
  ]);
  expect(
    Array.from(container.querySelectorAll(".experience-text-date")).map(
      node => node.textContent
    )
  ).toEqual([
    "November 2024 – Present",
    "November 2022 – November 2024",
    "May 2015 – November 2022",
    "March 2014 – April 2015"
  ]);
  expect(container.querySelector(".experience-text-role").textContent).toBe(
    "Full-Stack Engineer"
  );
  const cityExperience = container.querySelectorAll(".experience-card")[2];
  expect(cityExperience.querySelectorAll("li")).toHaveLength(9);
  expect(cityExperience.textContent).toContain("500+ classes annually");
  expect(cityExperience.textContent).toContain("99% of legacy records");
  expect(container.querySelectorAll(".highlight-card")).toHaveLength(4);
  expect(container.querySelectorAll(".capability-card")).toHaveLength(4);
  expect(container.querySelectorAll(".technical-skill-group")).toHaveLength(4);
  expect(container.querySelector(".meter")).toBeNull();
  expect(container.textContent).not.toMatch(
    /Google Code-In|Google Assistant|Saad Pasta/
  );
});

it("shows career-wide highlights, integrated reporting skills, and education without template decorations", () => {
  expect(
    Array.from(container.querySelectorAll(".highlight-organization")).map(
      node => node.textContent
    )
  ).toEqual([
    "City of Newport Beach",
    "City of Newport Beach",
    "NeoDX",
    "Gachadiction"
  ]);
  expect(
    Array.from(container.querySelectorAll(".highlight-result strong")).map(
      node => node.textContent
    )
  ).toEqual([
    "100%",
    "the most tickets",
    "integrated production ordering platform",
    "500,000+ products"
  ]);
  expect(
    Array.from(container.querySelectorAll(".highlight-result-statement")).map(
      node => node.textContent
    )
  ).toEqual([
    "Accurately synchronized 100% of employee records.",
    "Consistently resolved the most tickets within the IT Applications division.",
    "Delivered an integrated production ordering platform supporting order intake, administration, and payments.",
    "Automated data collection and monitoring for 500,000+ products."
  ]);
  for (const card of container.querySelectorAll(".highlight-card")) {
    expect(
      Array.from(card.querySelectorAll("h4")).map(node => node.textContent)
    ).toEqual(["Business Need", "Solution", "RESULT", "Technologies"]);
    expect(card.querySelector("hr")).toBeNull();
  }
  const databaseSkills = Array.from(
    container.querySelectorAll(".technical-skill-group")
  ).find(
    card =>
      card.querySelector("h3").textContent === "Systems Integration & Databases"
  );
  const tags = Array.from(databaseSkills.querySelectorAll("li")).map(
    tag => tag.textContent
  );
  expect(tags).toEqual(expect.arrayContaining(["SSRS", "Crystal Reports"]));
  expect(container.querySelector(".additional-experience")).toBeNull();
  expect(container.querySelector(".experience-featured")).toBeNull();
  expect(container.querySelector(".experience-focus")).toBeNull();
  expect(container.querySelector(".education-card-border")).toBeNull();
  const education = container.querySelector("#education");
  expect(education.textContent).toContain(
    "California State Polytechnic University, Pomona"
  );
  expect(education.textContent).toContain(
    "Bachelor of Science in Computer Engineering"
  );
  expect(education.textContent).toContain("Minor in Computer Science");
  expect(education.textContent).toContain("Graduation: December 2013");
  expect(education.textContent).toContain("Dean's List");
  expect(education.querySelector("img")).not.toBeNull();
});

it("keeps navigation, contact, résumé, and the saved theme usable", () => {
  const toggle = container.querySelector(".menu-toggle");
  act(() => toggle.dispatchEvent(new MouseEvent("click", {bubbles: true})));
  expect(toggle.getAttribute("aria-expanded")).toBe("true");
  const navLinks = container.querySelectorAll("nav a");
  for (const link of navLinks) {
    expect(container.querySelector(link.getAttribute("href"))).not.toBeNull();
  }
  act(() =>
    navLinks[0].dispatchEvent(new MouseEvent("click", {bubbles: true}))
  );
  expect(toggle.getAttribute("aria-expanded")).toBe("false");
  const theme = container.querySelector('input[aria-label="Dark mode"]');
  expect(theme.checked).toBe(true);
  act(() => theme.dispatchEvent(new MouseEvent("click", {bubbles: true})));
  expect(theme.checked).toBe(false);
  expect(JSON.parse(window.localStorage.getItem("isDark"))).toBe(false);
  expect(
    container.querySelector('a[href="mailto:ryan.cabaruvias@gmail.com"]')
  ).not.toBeNull();
  expect(
    container.querySelector('a[href="https://github.com/Tsuora"]')
  ).not.toBeNull();
  expect(
    container.querySelector(
      'a[href="https://www.linkedin.com/in/ryan-cabaruvias-94060985/"]'
    )
  ).not.toBeNull();
  const resumeLinks = Array.from(container.querySelectorAll("a")).filter(link =>
    link.href.startsWith(
      "https://docs.google.com/document/d/1fIZk1iPLO9GD3zbKy_I3WHG4A7WDOk4D/"
    )
  );
  expect(resumeLinks).toHaveLength(2);
  expect(resumeLinks.every(link => link.textContent.trim().length > 0)).toBe(
    true
  );
});
