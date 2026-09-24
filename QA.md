# UI verification — 19 September 2026

## Passed

- Vite production build: 1,634 modules transformed; output in `dist/`.
- Browser preview loads the React UI, local fonts and all eight image assets.
- Responsive widths checked: 320, 390, 768, 1024 and 1440 pixels. No horizontal document overflow after the 320px hero correction.
- Mobile navigation opens, closes after selection and provides section navigation.
- All in-page anchor destinations exist.
- Service detail dialogs open; selecting a quote carries the chosen service into the quote flow.
- Quote flow prevents advancement with missing name/email/suburb. The review contains entered details and constructs an encoded mailto URL. No email was sent.
- Returning to edit retains entered details.
- Native modal Escape handling closes the image viewer and returns focus to its trigger.
- Seasonal control updates the displayed content and JSS colour theme.
- FAQ categories change the question set and accordion buttons update expanded state.
- Image lightbox opens and closes.
- Desktop and mobile screenshots saved in `screenshots/`.

## Fixes during verification

- Replaced a materials illustration with actual roof-space imagery for the ceiling service and corrected a preparation-photo caption.
- Corrected the official VEU destination using the archived source link.
- Separated the React entry point from the application to avoid duplicate-root hot-refresh warnings.
- Closed native dialogs during cleanup so keyboard focus reliably returns to the triggering button.
- Corrected horizontal overflow at 320px and raised mobile form input font size to avoid iOS focus zoom.

## Boundaries

No backend submission, email delivery, phone call, external social action or deployment was performed. Clipboard permission-denied messaging exists but was not exercised. This is not a complete screen-reader, contrast or cross-browser certification. The existing blog remains externally linked. Production contact routing, content approval and image rights remain as documented in README.md and the phase-one audit.
