# NextGen Coders Academy Website

## Student Information

- Student Name: Kutloano [Sono]
- Student Number: [ST10527478]
- Module: WEDE5020
- Institution: Rosebank international university college


## Project Overview

NextGen Coders Academy is a student multi-page website project designed to introduce a fictional coding and technology academy. The website provides information about the academy, its courses, learning opportunities and contact details. It is designed to give visitors a clear understanding of what NextGen Coders Academy offers and how they can make an enquiry.

The website focuses on creating a simple, professional and user-friendly online presence for students and individuals who are interested in learning coding and technology skills.

### Target Audience

The target audience for NextGen Coders Academy includes:

- Students interested in learning programming.
- Beginners who want to start learning how to code.
- Young people interested in technology and software development.
- Individuals who want to improve their digital skills.
- People interested in web development and computer programming.
- Potential students looking for information about coding courses.
- Visitors who want to make an enquiry about the academy.

The website is designed to be suitable for users with different levels of technical knowledge, including complete beginners.


## Website Goals and Objectives

The purpose of the website is to:

- Introduce NextGen Coders Academy and its purpose.
- Provide information about the academy.
- Explain the courses and learning opportunities available.
- Give visitors an overview of coding and technology education.
- Allow potential students to submit an enquiry.
- Provide contact information for the academy.
- Make information easy to find through clear navigation.
- Create a professional and consistent website structure.
- Demonstrate the use of HTML5 to develop a multi-page website.



## Key Features and Functionality

### Website Pages

| Page | File | Purpose |
|---|---|---|
| Home | `index.html` | Introduces NextGen Coders Academy and provides an overview of the academy and its purpose. |
| About Us | `about.html` | Provides information about the academy, its purpose, mission, vision and learning environment. |
| Courses | `courses.html` | Provides information about the coding and technology courses offered by the academy. |
| Enquiry | `enquiry.html` | Allows visitors or potential students to submit an enquiry about the academy and its courses. |
| Contact Us | `contact.html` | Provides contact information and allows visitors to communicate with the academy. |

The five pages are connected through a consistent navigation menu.

### Main Features

- Consistent navigation across all pages.
- NextGen Coders Academy logo.
- Academy name and branding.
- Hero image/banner on the Home page.
- Introduction to the academy.
- Information about the academy's purpose.
- Mission and vision information.
- Coding and technology course information.
- Information aimed at beginner programmers.
- Enquiry form.
- Contact form.
- Contact information.
- Clear headings and sections.
- Images with alternative text.
- Footer information on each page.
- Internal links between website pages.
- Simple and easy-to-understand content.
- Sitemap showing the website structure.
- Low-fidelity wireframes showing the planned page layouts.

### Technologies Used

**HTML5**

HTML5 is the main technology used to create the website. HTML is used to structure the content and webpages. Semantic HTML elements are used where appropriate, including:

- `<header>`
- `<nav>`
- `<main>`
- `<section>`
- `<article>`
- `<footer>`
- `<form>`
- `<label>`
- `<input>`
- `<textarea>`
- `<button>`
- `<table>`
- `<ul>`
- `<ol>`

**CSS3**

CSS3 is used in Part 2 to style and add responsive behaviour to the website. The external stylesheet `css_assets/style.css` is linked to all five pages and includes:

- A CSS reset and base/default styles (colour scheme, font family, margin/padding).
- Typography styles using a `rem`-based type scale for consistent, accessible text sizing.
- Layout structure built with Flexbox (header and navigation) and CSS Grid (course cards, About Us mission/vision/values, and the home page introduction).
- Decorative and colour styling (borders, background colours, box-shadows) applied consistently across pages.
- Pseudo-classes (`:hover`, `:focus`, `:active`) on navigation links, in-page links, form fields, and buttons for interactive feedback.
- Responsive design using media queries at `768px` (tablet) and `480px` (mobile) breakpoints, relative units (`%`, `rem`), and responsive image sizing.


## File and Folder Structure

```
projectwebdev/
│
├── images_/
│   ├── Logo.jpeg
│   ├── heropicture.jpeg
│   ├── large picture.jpeg
│   ├── small picture.jpeg
│   └── coding picture.jpg
├── css_assets/
│   └── style.css
├── index.html
├── about.html
├── courses.html
├── enquiry.html
├── contact.html
└── README.md
```

The `css_assets` folder was added in Part 2 and contains the external stylesheet (`style.css`) linked to all five HTML pages. A `js_assets` folder will be added in Part 3 of this project.


## Sitemap

```
Home (index.html)
│
├── About Us (about.html)
├── Courses (courses.html)
├── Enquiry (enquiry.html)
└── Contact Us (contact.html)
```

All five pages share a consistent header, navigation menu, and footer. Every page links directly to every other page through the main navigation menu, so visitors can move between any two pages in a single click.


## Timeline and Milestones

| Milestone | Status |
|---|---|
| Target organisation selected (NextGen Coders Academy) | Complete |
| Website project proposals drafted and submitted | Complete |
| Target audience and goals/objectives defined | Complete |
| Wireframes created | Complete |
| Sitemap and file structure planned | Complete |
| HTML files created for all 5 pages | Complete |
| Semantic HTML5 structure implemented | Complete |
| Images integrated into pages | Complete |
| Enquiry and Contact forms added | Complete |
| Navigation tested across all pages | Complete |
| README.md compiled | Complete |
| GitHub repository set up and pushed | Complete |
| Part 1 feedback reviewed and corrections implemented | Complete |
| External stylesheet (`style.css`) created and linked to all pages | Complete |
| Base styles, typography, layout, decoration and colour applied | Complete |
| Pseudo-classes added to interactive elements | Complete |
| Responsive design implemented (media queries, relative units, responsive images) | Complete |
| Website tested across desktop, tablet and mobile screen sizes | Complete |
| README updated with Part 2 changelog | Complete |
| Part 2 changes committed and pushed to GitHub | Complete |


## Part 1 Details

Part 1 of the WEDE5020 POE covered:

- Website project proposal
- Target audience and website goals/objectives
- Website structure and planning (sitemap, wireframes, file structure)
- Initial HTML5 structure and basic content for all five pages

Part 3 (JavaScript functionality and further refinement) will follow in a future submission/edit to this repository and README.


## Working Through Feedback From Part 1

Following the release of marks and feedback for Part 1, the corrections/improvements below were implemented for Part 2. Each edit is also recorded in the Changelog section below.

| Feedback Received (Part 1) | Change Made in Part 2 |
|---|---|
| *[Insert lecturer feedback point 1]* | *[Insert what was changed/corrected]* |
| *[Insert lecturer feedback point 2]* | *[Insert what was changed/corrected]* |
| *[Insert lecturer feedback point 3]* | *[Insert what was changed/corrected]* |

> **Action needed:** Replace the placeholder rows above with the actual feedback received on Part 1 and the specific corrections made, so the lecturer can see exactly what was addressed.


## Part 2 Details

Part 2 of the WEDE5020 POE covers:

- Reviewing and implementing corrections from Part 1 feedback (see table above).
- Creating an external CSS stylesheet (`css_assets/style.css`) and linking it to all five HTML pages.
- Applying a base/default style, typography styles, layout structure (Flexbox and CSS Grid), and decorative/colour styling for the desktop version of the site.
- Using pseudo-classes (`:hover`, `:focus`, `:active`) to make navigation links, in-page links, form fields, and buttons interactive.
- Implementing responsive design for tablet and mobile using media queries, relative units (`%`, `rem`), and responsive image sizing.
- Testing the website across different screen sizes using browser developer tools.

### Screenshot Evidence of Responsive Testing

Screenshots below were taken using browser developer tools (device toolbar) on the Home page, confirming the layout, navigation and typography adjust correctly at each breakpoint.

**Desktop (1440px width)**

![Home page - desktop view](images_/screenshots/home-desktop-1440.png)

**Tablet (768px width)**

![Home page - tablet view](images_/screenshots/home-tablet-768.png)

At the 768px tablet breakpoint, the two-column introduction layout collapses to a single column and the page padding tightens, as defined in the tablet media query.

**Mobile (375px width)**

![Home page - mobile view](images_/screenshots/home-mobile-375.png)

At the 375px mobile breakpoint, the navigation menu stacks vertically, images scale to full width, and font sizes reduce, as defined in the mobile media query.


## Changelog

### [Unreleased]
- Planning for JavaScript form validation (Part 3)

### [2.0.0] - [Insert date]
- Reviewed Part 1 feedback and implemented corrections (see "Working Through Feedback From Part 1" section above).
- Created external stylesheet `css_assets/style.css` and linked it to all five HTML pages (`index.html`, `about.html`, `courses.html`, `enquiry.html`, `contact.html`).
- Added a CSS reset and default/base styles (colour scheme, font family, font size, margin/padding).
- Applied typography styles (`font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`) using a `rem`-based type scale.
- Built layout structure with Flexbox for the header/navigation and CSS Grid for the course cards (`courses.html`), the About Us mission/vision/values cards (`about.html`), and the home page introduction (`index.html`).
- Applied decorative and colour styling (borders, background colours, box-shadows) consistently across all pages.
- Added pseudo-classes (`:hover`, `:focus`, `:active`) to navigation links, in-page links, form inputs, and buttons for interactive feedback.
- Implemented responsive design with media queries at `768px` (tablet) and `480px` (mobile) breakpoints, relative units (`%`, `rem`), and responsive image sizing.
- Restructured the navigation menu and image sizing to adapt across desktop, tablet, and mobile screen widths.
- Tested the website using browser developer tools across desktop, tablet, and mobile screen sizes.
- Updated README with Part 2 details, changelog entries, and CSS-related references.

### [1.0.0] - [Insert date]
- Initial creation of five HTML pages: `index.html`, `about.html`, `courses.html`, `enquiry.html`, `contact.html`
- Added semantic HTML5 structure (`header`, `nav`, `main`, `section`, `article`, `footer`) across all pages
- Added enquiry form to `enquiry.html`
- Added contact form to `contact.html`
- Added logo, hero image, and supporting images across pages
- Added alt text to images for accessibility

### [0.1.0] - [Insert date]
- Created project folder and file structure
- Drafted website project proposals (NextGen Coders Academy and Elevate Events)
- Selected target organisation and defined target audience
- Created wireframes and sitemap for planning

> Update the dates above to match your actual GitHub commit history, and add new entries each time you push a meaningful change.


## References

W3Schools, 2026. *HTML Tutorial.* [online] Available at: <https://www.w3schools.com/html/> [Accessed 14 August 2026].

World Wide Web Consortium (W3C), 2021. *HTML.* [online] Available at: <https://www.w3.org/TR/html/> [Accessed 14 August 2026].

WHATWG, 2026. *HTML Living Standard.* [online] Available at: <https://html.spec.whatwg.org/multipage/> [Accessed 14 August 2026].

World Wide Web Consortium (W3C), 2026. *WAI-ARIA.* [online] Available at: <https://www.w3.org/WAI/standards-guidelines/aria/> [Accessed 14 August 2026].

MDN Web Docs, 2026. *HTML: Hypertext Markup Language.* [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/HTML> [Accessed 14 August 2026].

Google, 2026. *Web fundamentals.* [online] Available at: <https://developers.google.com/web> [Accessed 14 August 2026].

W3Schools, 2026. *CSS Tutorial.* [online] Available at: <https://www.w3schools.com/css/> [Accessed 15 September 2026].

MDN Web Docs, 2026. *CSS: Cascading Style Sheets.* [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/CSS> [Accessed 15 September 2026].

MDN Web Docs, 2026. *CSS Flexible Box Layout.* [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout> [Accessed 15 September 2026].

MDN Web Docs, 2026. *CSS Grid Layout.* [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout> [Accessed 15 September 2026].

MDN Web Docs, 2026. *Using media queries.* [online] Available at: <https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries> [Accessed 15 September 2026].

World Wide Web Consortium (W3C), 2026. *CSS.* [online] Available at: <https://www.w3.org/Style/CSS/> [Accessed 15 September 2026].

### Image References

Stoman, N. (2022) *A stack of books sitting in front of a computer.* Available at: https://unsplash.com/photos/a-stack-of-books-sitting-in-front-of-a-computer-1Lt1ny9nGWY (Accessed: 14 August 2026).

charlesdeluvio (2017) *Person facing computer desktop.* Available at: https://unsplash.com/photos/person-facing-computer-desktop-pjAH2Ax4uWk (Accessed: 14 August 2026).

Omron, M. (2026) *Person wearing headphones using a laptop with colorful lights.* Available at: https://unsplash.com/photos/person-wearing-headphones-using-a-laptop-with-colorful-lights-eCV5GzmbMAE (Accessed: 14 August 2026).

> **Note:** `Logo.jpeg` is an original NextGen Coders Academy logo and does not require an external citation. `coding picture.jpg` is not currently used on any page, so it has not been referenced here — add a citation for it if you place it into a page later.

