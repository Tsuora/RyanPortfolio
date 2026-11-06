# Portfolio update: enterprise applications and systems integration

Updated the existing React portfolio in place using the supplied career facts. The established fonts, teal palette, illustrations, dark/light themes, real image assets, and résumé, GitHub, LinkedIn, and email URLs are retained. No dependencies or framework changes were introduced.

## Content and presentation

- The hero leads with “IT Applications Analyst | Enterprise Systems & Integration,” 12 years of combined IT/development experience, and 7+ years supporting municipal enterprise systems. The opening splash is disabled so this appears immediately.
- What I Do / Core Expertise presents four application support, integration, collaboration, and development cards. Numerical proficiency ratings were removed.
- `EnterpriseHighlights` renders four concise case studies spanning City of Newport Beach, NeoDX, and Gachadiction. Each follows Organization → Title → Business Need → Solution → Result → Technologies. Results are complete sentences with inline teal emphasis at a consistent font size, a small RESULT label, and the existing vertical accent line. The responsive 2×2 layout, card styling, and technology tags are retained; heights match within each row, and no horizontal dividers are added.
- Technical Skills groups enterprise operations first, followed by integrations/databases, development, and tools/deployment. The introduction describes the scope of technical experience; SSRS and Crystal Reports are included as database/integration skill tags, with no reporting footnote.
- `WorkExperience` and `ExperienceCard` display four stacked entries in reverse chronological order. Each card has a horizontal company header with a circular logo, company name, job title, and muted dates, followed by full-width accomplishments. The native employment content is unchanged, including all nine City bullets, 500+ classes, and the 99% migration. Small 6px teal markers align with each bullet's first line. Card widths, borders, backgrounds, corner radii, and outer spacing are retained. Logos remain 64px white circular badges with inherited subtle borders, proportional artwork, and unchanged asset files.
- Technical Projects & Automation reframes the existing Webscrapers and Community Data Lookup Bot around operational tools, ingestion, and databases.
- Education follows projects and retains the university logo, degree, minor, December 2013 graduation, and Dean's List; the template divider and its hover-animation styles are removed. The contact section includes the requested opportunity statement and a résumé link.
- `Header` has responsive, keyboard-operable navigation, current section targets, and an accessible theme control. A skip link, logical heading levels, labeled social links, visible focus indicators, and reduced-motion handling improve accessibility.
- Page, Open Graph, and Twitter metadata now use analyst branding. Person structured data, a matching 1200 × 630 social image with editable SVG source, and a single-page sitemap are included. Existing broken font preloads were removed; bundled fonts still load normally.
- Disabled template exports remain compatible with their optional components but no longer contain unrelated accomplishments, articles, talks, podcasts, or social profiles. A guard prevents the disabled GitHub projects section from requesting a nonexistent profile.json.

## Validation

The latest experience/header and highlight-alignment refinement changes only `src/components/experienceCard/ExperienceCard.js`, `src/components/experienceCard/ExperienceCard.scss`, `src/containers/enterpriseHighlights/EnterpriseHighlights.js`, `src/containers/enterpriseHighlights/EnterpriseHighlights.scss`, and this report. No portfolio data, bullet wording, dates, logos, packages, or unrelated sections changed. The highlights share natural content measurements across all four cards, so corresponding section headings align even across the two desktop card rows. ResizeObserver, viewport resize, and font loading refresh the row minima; content remains free to grow, and mobile clears the shared minima.

Build, all three existing tests, changed-source ESLint/Prettier, and whitespace checks passed. Production Chrome checks passed at 320, 390, 700, 701, 768, 1024, and 1440 pixels in both themes. They verified horizontal headers (with a compact stacked header at 320px), full-width semantic lists, 16px header/list spacing, 6px teal markers with 9px text spacing, first-line marker alignment, unchanged white circular badges/card borders/backgrounds, matching highlight section offsets across all four desktop cards, consistent 20px row gaps, and no overflow, horizontal dividers, failed requests, or JavaScript exceptions. A content-resize probe confirmed row measurements grow and shrink automatically. Preservation hashes confirmed 132 unrelated files, including all professional content and original logo artwork, are unchanged. No visual issues were observed in the checked layouts.

The latest highlight-card redesign changed `src/portfolio.js`, `src/containers/enterpriseHighlights/EnterpriseHighlights.js`, `src/containers/enterpriseHighlights/EnterpriseHighlights.scss`, the existing integration assertions in `src/App.test.js`, and this report. The existing three-test suite now checks full result sentences, emphasized phrases, and the heading order. Browser checks additionally confirmed inline emphasis, a consistent result font, the preserved left accent, no horizontal dividers or result backgrounds, equal heights within desktop rows, visible technology tags, and shared content-sized rows for Business Need, Solution, Result, and Technologies across all four desktop cards, separated by consistent 20px gaps. Mobile cards use natural row heights. Preservation checks verified that 132 unrelated source/public/asset/package files and every other portfolio export remain unchanged, together with the highlights section heading/subtitle and each card's title, organization, and technologies. No visual issues were observed in the checked Chrome layouts.

| Check                                                   | Result                                                                                                                                                                                                        |
| ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run build`                                         | Passed; production output generated in ignored `build/`.                                                                                                                                                      |
| `CI=true npm test -- --watchAll=false --runInBand`      | Passed: one suite, three integration tests.                                                                                                                                                                   |
| ESLint on every changed JavaScript file                 | Passed. This repository has no separate lint npm script.                                                                                                                                                      |
| Prettier check on changed JS, SCSS, CSS, HTML, and JSON | Passed.                                                                                                                                                                                                       |
| `git diff --check`                                      | Passed.                                                                                                                                                                                                       |
| Production browser checks in installed Chrome           | Passed at 320, 390, 700, 701, 768, 1024, and 1440 pixels in light and dark themes.                                                                                                                            |
| Browser behavior and assets                             | Navigation/menu clicks, theme switching and persistence, metadata/JSON-LD, heading structure, images, and horizontal overflow checked; zero JavaScript exceptions, failed requests, or failed resource loads. |
| `npm run check-format` across the entire repository     | Reports nine files: seven generated build artifacts plus untouched `src/_globalColor.scss` and `src/components/displayLottie/DisplayLottie copy.js`. Changed source files pass separately.                    |

Existing tooling emits warnings about old Browserslist data, the Create React App Babel preset's undeclared plugin dependency, and Node's deprecated fs.F_OK API. The extra Jest exit-delay warning was investigated with `--detectOpenHandles`; it points to a timeout in `@babel/plugin-proposal-private-property-in-object`, not portfolio application code.

The focused refinement checks additionally confirmed four career-wide organization labels, SSRS/Crystal Reports inside the database skills card, equal desktop highlight heights, matching computed borders/backgrounds/spacing on all four experience cards, circular 64 × 64 logo containers with `object-fit: contain`, removal of the reporting footnote and Education divider, and working navigation/theme persistence. A before/after configuration comparison confirmed that all employment text and dates, existing skill tags, education, branding, capabilities, and external links were preserved.

Files changed specifically for these refinements:

- `src/portfolio.js`
- `src/containers/enterpriseHighlights/EnterpriseHighlights.js` and `EnterpriseHighlights.scss`
- `src/containers/skillProgress/skillProgress.js`; unused `Progress.scss` removed
- `src/components/experienceCard/ExperienceCard.js` and `ExperienceCard.scss`
- `src/components/educationCard/EducationCard.js` and `EducationCard.scss`
- `src/App.test.js`
- `PORTFOLIO_UPDATE.md`

## Manual confirmation and limits

The latest hero/expertise/logo refinements increase only the hero greeting to 17px on desktop and 15px on mobile. The visible specialization reads Enterprise Systems & Integration without a leading pipe. A shared two-column grid style aligns CONTACT ME and VIEW RESUME with the statistics above them while preserving the measured statistic spacing, existing links, natural button widths, and equal button heights. The four small expertise labels now read SYSTEM RELIABILITY, WORKFLOW EFFICIENCY, CROSS-FUNCTIONAL DELIVERY, and TECHNICAL IMPLEMENTATION; competency headings, descriptions, icons, and card styling remain intact. Matching label space keeps headings aligned on shared rows. All logo frames now use white backgrounds in both themes, with their previous circular geometry, border inheritance, proportional artwork, and sizing adjustments retained.

Latest checks: production build, all three existing tests, changed-source ESLint/Prettier, and git whitespace checks passed. Chrome checks passed at 320, 360, 375, 390, 768, 1024, 1130, and 1440 pixels in both themes. Checks covered greeting sizes, exact CTA/statistic alignment, equal button heights, working contact navigation, preserved résumé URLs, exact expertise labels, heading alignment, white circular badges, and no horizontal overflow, failed requests, or JavaScript exceptions. Before/after measurements at 1440px and 390px confirm unchanged statistic positions and all four experience card dimensions/description alignment. Configuration and file comparisons confirm that only the requested four labels changed in portfolio content; employment information, hero copy, other descriptions, image assets, experience JSX, and package files are unchanged. No new image assets or packages were needed.

Files changed for the latest refinements:

- `src/containers/greeting/Greeting.js`
- `src/containers/greeting/Greeting.scss`
- `src/containers/skills/Skills.scss`
- `src/components/experienceCard/ExperienceCard.scss`
- `src/portfolio.js`
- `PORTFOLIO_UPDATE.md`

The subsequent logo standardization changed only `src/components/experienceCard/ExperienceCard.js`, its `ExperienceCard.scss`, logo presentation fields in `src/portfolio.js`, and this report. No image-processing dependencies or generated logo assets were needed. Build, all three existing tests, changed-source lint/formatting, and browser checks at 320, 390, 768, 1024, and 1440 pixels in both themes passed. The checks confirmed matching circular dimensions/borders, centered artwork, uniform company-name spacing, and zero failed requests or JavaScript exceptions. A preservation comparison confirmed that experience content, card grid/spacing/typography, and original asset bytes are unchanged.

- December 2013 graduation is retained and confirmed by the refinement brief.
- NeoDX now reuses the existing transparent neodxLogoOld.png asset. The original white-background PNG is retained. Gachadiction receives a presentation-only scale adjustment to compensate for transparent padding; Newport keeps its original seal. Hitachi retains its white-on-red artwork for contrast, with only blank red corners rounded in CSS. Read-only pixel checks confirm the important artwork stays inside its circular treatment. All original image file bytes are unchanged.
- Existing résumé and profile URLs were preserved. The remote résumé document and external profile content were not edited or independently reviewed.
- All employment dates and supplied achievement metrics use the brief as the source of truth. No certifications, management claims, residential location, salary expectations, or proprietary implementation details were added.
- Browser verification used Chrome with emulated viewport sizes, not physical mobile devices or every browser engine. Accessibility improvements are not a full accessibility audit.
- Work is local in this checkout and the production build is ready. No deployment, commit, or push was performed. Search indexing and social cache refresh must be checked after the normal deployment process.

## Files changed

- `PORTFOLIO_UPDATE.md`
- `public/index.html`
- `public/manifest.json`
- `public/robots.txt`
- `public/sitemap.xml`
- `public/social-preview.png`
- `public/social-preview.svg`
- `src/App.test.js`
- `src/components/button/Button.js`
- `src/components/button/Button.scss`
- `src/components/displayLottie/DisplayLottie.js`
- `src/components/educationCard/EducationCard.js`
- `src/components/educationCard/EducationCard.scss`
- `src/components/experienceCard/ExperienceCard.js`
- `src/components/experienceCard/ExperienceCard.scss`
- `src/components/footer/Footer.js`
- `src/components/footer/Footer.scss`
- `src/components/header/Header.js`
- `src/components/header/Header.scss`
- `src/components/socialMedia/SocialMedia.js`
- `src/components/softwareSkills/SoftwareSkill.js`
- `src/components/softwareSkills/SoftwareSkill.scss`
- `src/components/ToggleSwitch/ToggleSwitch.js`
- `src/components/ToggleSwitch/ToggleSwitch.scss`
- `src/containers/contact/Contact.js`
- `src/containers/contact/Contact.scss`
- `src/containers/education/Education.js`
- `src/containers/education/Education.scss`
- `src/containers/enterpriseHighlights/EnterpriseHighlights.js`
- `src/containers/enterpriseHighlights/EnterpriseHighlights.scss`
- `src/containers/greeting/Greeting.js`
- `src/containers/greeting/Greeting.scss`
- `src/containers/Main.js`
- `src/containers/Main.scss`
- `src/containers/projects/Projects.js`
- `src/containers/skillProgress/Progress.scss` (removed after its reporting footnote was removed)
- `src/containers/skillProgress/skillProgress.js`
- `src/containers/skills/Skills.js`
- `src/containers/skills/Skills.scss`
- `src/containers/StartupProjects/StartupProject.js`
- `src/containers/StartupProjects/StartupProjects.scss`
- `src/containers/workExperience/WorkExperience.js`
- `src/containers/workExperience/WorkExperience.scss`
- `src/index.css`
- `src/portfolio.js`
