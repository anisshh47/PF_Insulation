# PF Insulation — Base Design System

Design language measured from https://varcopruden.com/ (desktop 1440×900, laptop 1280×800, mobile 390×844) and re-expressed for PF Insulation. All values live in [`src/design-system/tokens.css`](src/design-system/tokens.css); markup primitives in [`src/design-system/primitives.jsx`](src/design-system/primitives.jsx). A live reference page is served at `/#design-system`.

## Principles (what makes the language)
1. **Flat colour fields.** One saturated blue (`#3168FF`) carries identity: header bar, hero corner block, pinned process scene, footer. Everything else is white, warm paper (`#F7F4F0`) or ink (`#323232`).
2. **Rectangles only.** `--radius: 0` — buttons, frames, panels, inputs, dialogs.
3. **Light, large type.** Headings are weight 400; UI/card titles 500. Statement headings are 64/76.8 with −0.024em tracking.
4. **Notched imagery.** Square image frames with a white block biting a corner (carries a label or carousel arrows). Hero has a blue corner block instead.
5. **Alternating, generous rhythm.** Two-column statements, alternating text/image rows, a pinned full-viewport scene, a dark carousel band, paired CTA panels under a ruler strip.
6. **Paired-arrow controls.** `→` on every CTA/link, `← →` on carousels.

## Tokens (measured → used)
| Token | Value | Source measurement |
|---|---|---|
| `--c-blue` | `#3168FF` | header, hero block, scene, footer (computed + pixel sample) |
| `--c-blue-deep` | `#0044B4` | left CTA panel |
| `--c-ink` | `#323232` | body text, dark band, solid button |
| `--c-paper-warm` | `#F7F4F0` | services band |
| `--c-rule` | `#D8D8D8` | ruler ticks, inactive progress |
| Display | 56/61.6 · 400 | `h1` |
| H2 | 64/76.8 · 400 · −1.536px | statement headings |
| H3 | 40/44 · 400 | row titles |
| H4 | 20/28 · 500 | card titles |
| Lead | 20/24 · 500 | hero paragraph |
| Body/UI | 18/23.4 (we use 1.4) · 400/500 | nav, buttons, copy |
| Gutter | 80px @1440 → 24px mobile | container padding |
| Header | 80px (60px ≤1100) | blue bar |
| Button | 60px tall · 14×30 padding · 18/500 · square | `Watch Video`, `Submit` |

Font: Varco uses the proprietary *Onsite Standard*. PF uses **Hanken Grotesk Variable** (bundled via `@fontsource-variable`, no external requests) as the closest open grotesque.

## Primitives
`Container`, `Button` (`tone`: `ink | light | outline | outline-light`), `ArrowLink`, `Frame` (+ `notch`), `Arrows`; CSS: `.ds-section(--blue|--ink|--warm)`, `.ds-grid-2`, `.ds-display/h2/h3/h4/lead/body`, `.ds-ruler`.

## Homepage section map (reference → PF)
| # | Varco Pruden | PF Insulation |
|---|---|---|
| 0 | Header: logo · nav · search square · white “Contact Us” | Logo · nav · phone square · white “Get a Quote” |
| 1 | Hero video, blue corner block, 3 slides, progress + pause | Hero slideshow (3 existing photos), same chrome |
| 2 | “The way a building comes together matters.” two-col | “The way a home comes together matters.” + season toggle |
| 3 | Pinned blue scene, vertical progress rail | Pinned “How we work” (4 steps) |
| 4 | “Built around what your project needs.” alternating rows | 4 service rows + service dialogs |
| – | — | VEU rebates (retained PF content, in the same language) |
| 5 | Dark “Industries at work.” carousel | Dark “Insulation at work.” carousel + lightbox |
| 6 | Customer-quote panel + portrait | PF value statements + storyboard portrait (no verified testimonials exist) |
| 7 | Featured Insights (3 cards, notch tag) | Featured Insights → PF journal posts |
| – | — | FAQ (retained PF content) |
| 8 | Ruler + “Let’s connect / Let’s build” | Ruler + “Let’s connect / Let’s insulate” |
| 9 | Blue footer, photo block, link columns, socials | Same |

## Assets
Real photography/logo come from the existing PF site (`public/images`, white logo derived from `logo.jpg`). Where a slot has no real photo, a **2D storyboard placeholder** (`public/storyboard/*.svg`, labelled “STORYBOARD · REPLACE WITH PHOTO”) is used. See `replication-workspace/brand/storyboard/asset-manifest.json`.
