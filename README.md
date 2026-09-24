# PF Insulation UI redesign

React (JavaScript), React JSS and Tailwind CSS, bundled with Vite. The original website archive is preserved in `phase-1-audit/`.

## Run locally

Requires Node.js 20.19+ or 22.12+ and pnpm.

```sh
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## Features

- Responsive navigation and mobile call/quote actions.
- Service detail dialogs, with all audited service categories available in the quote flow.
- Winter/summer comfort panel styled with React JSS.
- Three-step quote flow with required-field validation, review, editable details, email composition and copy action.
- Categorised FAQs, image lightboxes, local image assets and reduced-motion support.
- Native modal dialogs, keyboard focus management, descriptive labels and semantic headings.

## Current scope and launch notes

This is a new homepage/UI, not a deployed replacement for Squarespace. The journal links to the existing blog. No live website was changed.

Quote enquiries are prepared locally and handed to the visitor's email app. The UI explicitly states that nothing has been sent. A server-side form/CRM integration is not configured. Personal data is not saved to local storage or automatically transmitted.

The design uses the existing flat PF logo and archived photography. Images are optimised WebP derivatives; originals remain untouched. Photography is not presented as verified testimonials or attributed customer projects.

Before production: confirm preferred contact routing, final image rights, ABN and service details; revalidate VEU information; connect and test enquiry delivery; supply the business privacy notice; map existing URLs and redirects; and finish any desired service/blog pages. No unverified rebate amounts, ratings, accreditations or customer counts were added.

## Design direction

Deep forest `#173c32` anchors the PF identity, warm ivory keeps the reading experience calm, and pale lime `#d9ef88` distinguishes important actions. This is a design intention, not a claim that colour guarantees conversions. Short sections, clear choices and approachable copy reduce the work needed to understand the services and enquire.

`src/App.jsx` contains the React UI; `src/main.jsx` is the entry point. `src/styles.css` contains Tailwind's import, theme and responsive component styles. The seasonal panel demonstrates dynamic React JSS styling.

