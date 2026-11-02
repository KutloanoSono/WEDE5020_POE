# NextGen Coders Academy — WEDE5020 Part 3

## Student Information

- **Student Name:** Kutloano Sono
- **Student Number:** ST10527478
- **Module:** WEDE5020
- **Institution:** Rosebank International University College

## Project Overview

NextGen Coders Academy is a fictional coding and technology academy website. The website introduces the academy, explains its mission and values, presents its courses, and gives visitors enquiry and contact options.

Part 3 adds JavaScript interactivity, SEO, validated forms and deployment. The Part 2 implementation focused on the requirements shown in the supplied Part 2 brief and rubric: an external CSS stylesheet, base styling, typography, Flexbox/Grid layout, visual styling, pseudo-classes, responsive breakpoints, relative units, responsive images, testing evidence, and a detailed changelog.

## Live Website

- **Deployed site (GitHub Pages):** https://kutloanosono.github.io/WEDE5020_POE/
- **Repository:** https://github.com/KutloanoSono/WEDE5020_POE

## Part 3 Requirements Checklist

### 1. Feedback from Part 2
 obtained 92% for part 2

### 2. Functionality (JavaScript, `js/main.js`)
| Requirement | Where | Implementation |
|---|---|---|
| Accordion | `index.html` | FAQ accordion with `aria-expanded` and animated open/close |
| Interactive map | `contact.html` | Leaflet 1.9.4 + OpenStreetMap map with marker and popup |
| Animations and transitions | all pages | CSS transitions and keyframes plus a JavaScript scroll-reveal (`IntersectionObserver`); respects `prefers-reduced-motion` |
| Advanced DOM manipulation | all pages | Elements created and updated by JavaScript: back-to-top button, character counters, error messages, lightbox, response panels, URL-based course preselection |
| Gallery with lightbox | `about.html` | Native `<dialog>` viewer with previous/next buttons, arrow keys and Esc |
| Dynamic content | `courses.html` | Course cards rendered from a JavaScript data array |
| Search / filter / sort | `courses.html` | Keyword search, level filter and sort, with a live result count |

### 3. Search Engine Optimisation
- **Keyword research:** each page targets its own keywords (for example "coding courses Johannesburg", "web development course", "cybersecurity course") used in titles, headings, descriptions and body text.
- **Title tags and meta descriptions:** unique on every page. **Meta keywords** added on every page.
- **Heading hierarchy:** one `<h1>` per page, then `<h2>` and `<h3>` in order.
- **Image optimisation:** descriptive file names (for example `students-learning-programming-1200.jpg`), descriptive `alt` text, `width`/`height` attributes, `srcset` and lazy loading.
- **URL structure:** short, lowercase, descriptive file names (`courses.html`, `enquiry.html`).
- **Internal linking:** body links between pages plus a footer navigation on every page.
- **Mobile-friendliness:** viewport meta tag and responsive layouts (Part 2).
- **Additional requests:** `robots.txt`, `sitemap.xml`, page speed (unused large originals removed, resized images, `defer` scripts) and security (Content-Security-Policy meta tag, referrer policy, `rel="noopener noreferrer"` on external links, user text escaped before display).

### 4. Form Functionality and Validation
- **enquiry.html:** full name, email, phone (optional), course, preferred start date, study mode (radio buttons), experience and enquiry message. After validation the page shows a response with the course fee for the chosen study mode, registration fee, estimated total, duration, next intake date and seat availability.
- **contact.html:** name, email, phone (optional), type of message and full message. After validation the details are compiled into an email addressed to the recipient set in the code (`RECIPIENT` in `js/main.js`), previewed on the page and opened in the visitor's email app.
- **Validation:** HTML5 attributes (`required`, `type`, `minlength`, `maxlength`) plus JavaScript checks: name letters only, email format, South African phone format, date not in the past, message length limits. Clear error messages appear next to each field (`role="alert"`, `aria-invalid`), with live character counters.
- **Form submission:** the `action` attribute is set on both forms (`mailto:` for contact). Processing happens client-side in JavaScript because the site is static; there is no server.

### 5. GitHub Repository
Changes were committed with descriptive messages and pushed to the remote repository. The repository link is submitted on the LMS and the site is deployed on GitHub Pages.

## Running the Site Locally
Open the project folder in VS Code and use the Live Server extension (right-click `index.html`, then "Open with Live Server"), or open `index.html` in a browser. The map needs an internet connection.

## Target Audience

The website is aimed at:

- School leavers and university students interested in coding.
- Beginners who want to learn programming.
- Young adults interested in technology.
- Career changers developing digital skills.
- People interested in web development, Java, Python and cybersecurity.
- Potential students who need course or academy information.

## Website Goals

The website aims to:

1. Introduce NextGen Coders Academy.
2. Explain the academy's purpose, mission, vision and values.
3. Present the available courses clearly.
4. Allow potential students to submit a course enquiry.
5. Provide contact information and a general contact form.
6. Use clear, consistent navigation across all five pages.
7. Demonstrate the Part 2 CSS and responsive-design requirements.

## Pages

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Introduces the academy, benefits and courses. |
| About Us | `about.html` | Explains the academy, mission, vision, values and audience. |
| Courses | `courses.html` | Presents the four technology courses. |
| Enquiry | `enquiry.html` | Provides a course enquiry form. |
| Contact | `contact.html` | Provides contact details and a general contact form. |

## Part 2 Requirements Checklist

### 2.1 External Stylesheet
- One external stylesheet is used: `css_assets/style.css`.
- All five HTML pages link to the same stylesheet.
- A consistent naming convention is used.

### 2.2 Base Style
The stylesheet includes:
- A CSS reset using `*`, `*::before` and `*::after`.
- A consistent font family.
- Base font size and line height.
- A defined colour scheme using CSS custom properties.
- Consistent spacing and box sizing.
- Consistent link and list defaults.

### 2.3 Typography
Typography is controlled through the external stylesheet and includes:
- `font-family`
- `font-size`
- `font-weight`
- `line-height`
- `letter-spacing`
- A responsive `clamp()` type scale.
- Relative `rem` units for spacing and text sizing.
- Consistent heading hierarchy.

### 2.4 Layout Structure
Both Flexbox and CSS Grid are used:
- Flexbox is used for the header, navigation, button groups and CTA.
- CSS Grid is used for the hero section, content layouts, course cards and information cards.
- Desktop layouts use multiple columns where appropriate.
- Tablet and mobile layouts switch to simpler single-column structures.

### 2.5 Visual Styles and Pseudo-classes
The site uses:
- `color`
- `background`
- `border`
- `border-radius`
- `box-shadow`
- Hover effects
- Focus-visible states
- Active states
- Interactive button feedback
- Card hover effects

### 3.1 Breakpoints
Responsive breakpoints are included at:
- **900px:** desktop/tablet layout adjustment.
- **768px:** tablet layout and grid changes.
- **480px:** mobile typography, navigation and button changes.

At smaller widths, multi-column layouts become single-column layouts and the navigation changes to a compact grid.

### 3.2 Relative Units
The CSS uses:
- `rem`
- `%`
- `vw`
- `clamp()`
- `min()`

These units allow spacing, typography and layout widths to respond to different screen sizes.

### 3.3 Responsive Images
Responsive image techniques have been added to the project:
- `srcset` provides multiple image resolutions.
- `sizes` tells the browser which image size is appropriate.
- The Home hero uses the `<picture>` element with different sources for screen sizes.
- Images use `max-width: 100%` and `height: auto`.
- Larger secondary images are lazy-loaded.

### 3.4 Testing and Iteration
The website was tested at desktop, tablet and mobile viewport sizes using browser developer tools. Updated screenshot evidence is included in:

`images_/screenshots/`

Evidence:
- `home-desktop-1440.png`
- `home-tablet-768.png`
- `home-mobile-375.png`

The README and layout were updated after checking the responsive behaviour.

## File and Folder Structure

```text
WEDE5020_POE/
│
├── css_assets/
│   └── style.css
├── js/
│   └── main.js
├── images_/
│   ├── nextgen-coders-academy-logo-160.jpg / -320.jpg
│   ├── students-learning-programming-480 / 800 / 1200 / 1600.jpg
│   ├── students-collaborating-project-320 / 640.jpg
│   ├── coding-learning-environment-320 / 640.jpg
│   ├── person-learning-programming-320 / 640 / 960.jpg
│   ├── learner-using-technology-320 / 640 / 960.jpg
│   └── screenshots/
│       ├── home-desktop-1440.png
│       ├── home-tablet-768.png
│       └── home-mobile-375.png
├── index.html
├── about.html
├── courses.html
├── enquiry.html
├── contact.html
├── robots.txt
├── sitemap.xml
├── LICENSE
└── README.md
```

## Sitemap

```text
Home
├── About Us
├── Courses
├── Enquiry
└── Contact
```

The main navigation appears consistently on all five pages.

## Changelog

### [3.0.0] — 27 October 2026

**Part 2 feedback edits**
- Renamed all images to descriptive, SEO-friendly file names and updated every reference in the HTML pages.
- Removed unused full-size original images (several were over 1 MB) to improve page speed; only the resized versions are kept.
- Added a consistent footer navigation to all five pages to improve navigation and internal linking.
- Added a "Skip to main content" link and an `id` on `<main>` to improve accessibility.
- Updated page titles and meta descriptions so every page is unique and descriptive.
- Updated the README structure, folder tree and references.

**New in Part 3**
- Added `js/main.js` and linked it on all pages with `defer`.
- Added a FAQ accordion on `index.html`.
- Added a gallery with a lightbox on `about.html`.
- Added dynamic course cards with search, level filter and sort on `courses.html`.
- Added an interactive Leaflet map on `contact.html`.
- Added scroll-reveal animations, accordion transitions, hover transitions and a back-to-top button, with reduced-motion support.
- Rebuilt the enquiry form with start date and study mode fields, JavaScript validation, character counters and a fee/availability response.
- Rebuilt the contact form with a message-type field, JavaScript validation and a compiled email sent to the recipient in the code.
- Added `robots.txt`, `sitemap.xml`, meta keywords, canonical links, Open Graph tags, a Content-Security-Policy and a referrer policy.
- Deployed the website to GitHub Pages.

### [2.1.0] — 18 September 2026
- Reviewed the supplied Part 2 brief and rubric requirements.
- Reworked the visual layout to provide a clearer desktop structure using CSS Grid and Flexbox.
- Improved the header and navigation so the menu is consistent across all five pages.
- Added a responsive hero layout to the Home page.
- Added responsive course and information card grids.
- Improved spacing, typography, borders, shadows and visual hierarchy.
- Added `:hover`, `:focus-visible` and `:active` states to navigation, links, buttons, form fields and cards.
- Added responsive breakpoints for desktop/tablet/mobile behaviour.
- Added `rem`, `%`, `vw`, `clamp()` and `min()` relative sizing techniques.
- Added `srcset` and `sizes` attributes to responsive images.
- Added the `<picture>` element to the Home page hero image.
- Added resized image variants so the browser can select an appropriate image resolution.
- Improved form layout, labels, field spacing and focus feedback.
- Added `aria-current="page"` to identify the active navigation page.
- Added `autocomplete` attributes to personal-information form fields.
- Updated the README to document the Part 2 requirements and implementation.
- Updated responsive screenshot evidence after the layout changes.

### [2.0.0] — 18 September 2026
- Created and linked the external `css_assets/style.css` stylesheet.
- Added the CSS reset and default styling.
- Added typography, layout, decoration and colour styling.
- Added Flexbox and CSS Grid layouts.
- Added pseudo-classes for interactive elements.
- Added responsive media queries.
- Added Part 2 responsive-testing documentation.

### [1.0.0] — Initial Part 1 version
- Created the five HTML pages.
- Added semantic HTML5 structure.
- Added the academy logo and supporting images.
- Added the enquiry and contact forms.
- Added navigation between the five pages.
- Added the initial README, sitemap and project information.

## References

- Leaflet, 2023. *Leaflet: an open-source JavaScript library for interactive maps (v1.9.4).* Available at: https://leafletjs.com/ [Accessed 27 October 2026].
- OpenStreetMap contributors, 2026. *OpenStreetMap.* Available at: https://www.openstreetmap.org/ [Accessed 27 October 2026].
- MDN Web Docs, 2026. *The Dialog element.* Available at: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog [Accessed 27 October 2026].
- MDN Web Docs, 2026. *Intersection Observer API.* Available at: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API [Accessed 27 October 2026].
- MDN Web Docs, 2026. *Client-side form validation.* Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation [Accessed 27 October 2026].
- Google, 2026. *Search Engine Optimization (SEO) Starter Guide.* Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide [Accessed 27 October 2026].

- W3Schools, 2026. *HTML Tutorial.* Available at: https://www.w3schools.com/html/ [Accessed 18 September 2026].
- World Wide Web Consortium (W3C), 2021. *HTML.* Available at: https://www.w3.org/TR/html/ [Accessed 18 September 2026].
- WHATWG, 2026. *HTML Living Standard.* Available at: https://html.spec.whatwg.org/ [Accessed 18 September 2026].
