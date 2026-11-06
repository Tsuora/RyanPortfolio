import React, {useLayoutEffect, useRef} from "react";
import {enterpriseHighlights} from "../../portfolio";
import "./EnterpriseHighlights.scss";

export default function EnterpriseHighlights() {
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const rows = [
      "header",
      "business-need",
      "solution",
      "result",
      "technologies"
    ];
    const contents = Array.from(
      grid.querySelectorAll(".highlight-row-content")
    );
    let pendingFrame;
    let disposed = false;

    // Share natural row sizes across all four cards, including the second row.
    // Minimum heights let longer content grow without clipping during a resize.
    const alignRows = () => {
      const stacked = window.innerWidth <= 700;
      for (const row of rows) {
        const matching = grid.querySelectorAll(
          `[data-highlight-row="${row}"] > .highlight-row-content`
        );
        const height = stacked
          ? 0
          : Math.ceil(
              Math.max(
                ...Array.from(
                  matching,
                  element => element.getBoundingClientRect().height
                )
              )
            );
        const property = `--highlight-${row}-height`;
        const value = `${height}px`;
        if (grid.style.getPropertyValue(property) !== value) {
          grid.style.setProperty(property, value);
        }
      }
    };
    const scheduleAlignment = () => {
      if (disposed) return;
      if (pendingFrame !== undefined) cancelAnimationFrame(pendingFrame);
      pendingFrame = requestAnimationFrame(alignRows);
    };

    alignRows();
    const observer =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(scheduleAlignment)
        : null;
    contents.forEach(element => observer?.observe(element));
    window.addEventListener("resize", scheduleAlignment);
    document.fonts?.ready.then(scheduleAlignment);

    return () => {
      disposed = true;
      observer?.disconnect();
      window.removeEventListener("resize", scheduleAlignment);
      if (pendingFrame !== undefined) cancelAnimationFrame(pendingFrame);
    };
  }, []);

  if (!enterpriseHighlights.display) return null;

  return (
    <section
      className="main enterprise-highlights"
      id="highlights"
      aria-labelledby="highlights-title"
    >
      <p className="section-eyebrow">Career accomplishments</p>
      <h2 className="section-heading" id="highlights-title">
        {enterpriseHighlights.title}
      </h2>
      <p className="section-intro">{enterpriseHighlights.subtitle}</p>
      <div className="highlights-grid" ref={gridRef}>
        {enterpriseHighlights.highlights.map(highlight => (
          <article
            className="portfolio-card highlight-card"
            key={highlight.title}
          >
            <div className="highlight-card-header" data-highlight-row="header">
              <div className="highlight-row-content">
                <p className="highlight-organization">
                  {highlight.organization}
                </p>
                <h3>{highlight.title}</h3>
              </div>
            </div>
            <div
              className="highlight-business-need highlight-detail"
              data-highlight-row="business-need"
            >
              <div className="highlight-row-content">
                <h4>Business Need</h4>
                <p>{highlight.businessNeed}</p>
              </div>
            </div>
            <div
              className="highlight-solution highlight-detail"
              data-highlight-row="solution"
            >
              <div className="highlight-row-content">
                <h4>Solution</h4>
                <p>{highlight.solution}</p>
              </div>
            </div>
            <div className="highlight-result" data-highlight-row="result">
              <div className="highlight-row-content">
                <h4 className="highlight-result-label">RESULT</h4>
                <p className="highlight-result-statement">
                  {highlight.result.prefix}
                  <strong>{highlight.result.emphasis}</strong>
                  {highlight.result.suffix}
                </p>
              </div>
            </div>
            <div
              className="highlight-technologies"
              data-highlight-row="technologies"
            >
              <div className="highlight-row-content">
                <h4>Technologies</h4>
                <ul className="skill-tags" aria-label="Relevant skills">
                  {highlight.skills.map(skill => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
