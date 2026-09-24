# PF Insulation website audit and redesign handover

Audit date: 19 September 2026. Findings describe the public website as observed; program, pricing, qualification and performance statements are recorded website claims, not independent verification.

## Business and contact details

| Detail | Observed value | Source/context |
|---|---|---|
| Brand | PF Insulation | Header, footer, metadata |
| Main call number | 0466 253 396 | Homepage `tel:0466253396`; rebate page |
| SMS / secondary number | 0451 337 015 | Footer `sms:+61451337015`; rebate blog lists both numbers |
| WhatsApp | Main number 0466 253 396 | Rebate CTAs; exact destinations in page inventory |
| General footer email | insulationremovalservice@gmail.com | Footer mail link |
| Other published email | PFInsulation01@gmail.com | Rebate page; homepage form success message uses lowercase variant |
| ABN | 26 651 803 664 | Rebate page only; not independently validated |
| Service area | Melbourne and eligible areas of Victoria | Rebate page; Melbourne in site metadata |
| Audience | Homeowners, landlords, property managers, tenants, builders | Rebate form role options; residential service copy |
| Facebook | Profile ID 100075873649564 | Navigation social link |
| Instagram | insulation_removal_service | Navigation social link |
| Blog author | Bishow Bhandari | Article bylines |
| Form signature | BILL.B / PF Insulation | Homepage success message configuration |

The two numbers may serve different purposes, but the site does not explain that distinction. The two email addresses also need a deliberate routing decision. No clear business hours, street address, detailed suburb list, warranty terms, team biography or customer review collection was found in the captured main content. Do not invent these for the redesign.

## Services to preserve

| Service | Evidence and scope | Handover note |
|---|---|---|
| Old insulation removal and disposal | Homepage hero and service accordion; old/damaged insulation and vacuum/manual removal | Primary offering |
| Ceiling/roof insulation supply and installation | Supply/install accordion, installation gallery and rebate page | Product brands and complete range not specified |
| Insulation replacement/upgrades | Homepage replacement section and rebate services | Keep removal, clean-up and replacement relationship clear |
| Underfloor insulation | Dedicated accordion and blog | Benefits discussed extensively; specific installation system not described |
| Existing-wall insulation | Service accordion, inquiry option and blow-in wall article | Accordion incorrectly contains underfloor copy; rewrite from verified scope |
| Insulation vacuum hire | Fifth accordion on `/new-page-1`, absent from homepage service list | Heading says “Hire insulation vaccum”; no hire terms, availability or model details |
| Roof-space vacuuming/cleaning | SEO description and rebate services | Dust/debris cleaning may be separately quoted |
| Ceiling insulation assessment and VEU-related installation | Dedicated rebate page and eligibility enquiry | Site says it works with an Accredited Provider; do not describe PF as the provider |
| R5, R6 and R7 options | Rebate page | Suitability depends on product, roof space and applicable requirements |
| Free measurement and quotation | Homepage lead section | Preserve offer, confirm actual response commitment |

Materials explicitly shown for removal: cellulose fibre, loose rockwool, foam/dust, old batts, blow-in insulation and seaweed (misspelled “Seeweed” in the marquee). The material gallery adds old glasswool batts and animal fur. Blog articles discuss fibreglass, foam, cellulose, reflective foil and mineral wool; discussing a material does not establish that PF supplies every one of these products.

Asbestos appears in generic informational copy. This does **not** establish a licensed asbestos-removal service. Avoid promoting that service without evidence.

## Site architecture

| URL | Observed purpose |
|---|---|
| `/` and `/home` | Same homepage content/alias |
| `/new-page-1` | Our Services; five service accordions |
| `/veu-ceiling-insulation-rebate-up-to-50-off-pf-insulation` | Detailed VEU information, preliminary eligibility calculator and enquiry CTAs |
| `/contact-for-rebate` | Rebate enquiry and property details form |
| `/inquiry` | General service enquiry form |
| `/blog-2-1` | Index of eight articles |
| `/new-page` | Sitemap-listed page with essentially header/footer and no substantive body copy |

Main navigation has Home, Our Services, the long VEU rebate title, Contact for Rebate, Blog and Inquiry. It also exposes social links and Squarespace menu/cart scaffolding. The generic slugs and long rebate navigation label are candidates for improvement; preserve redirects if URLs change.

### Homepage section sequence

1. Header with linked white PF monogram/roof logo on a black square and menu.
2. Worksite hero photograph, call CTA and large uppercase italic headline about removal/disposal.
3. Animated marquee of insulation materials separated by wave symbols.
4. Services image, heading and four accordions.
5. Replacement offer, free measurement/quote copy, “Get Quote in 5 minutes” and detailed quote form.
6. Old-insulation gallery: glasswool batts, seaweed, rockwool, animal fur and cellulose.
7. Installation image and three result images.
8. PF Insulation footer, SMS and email links, with background photography.

The team-quality sentence is a brand statement, not an attributed customer testimonial.

### Service accordion content

Removal contains 15 FAQs: definition; cost; signs replacement is needed; reuse; removal process; duration; reasons to remove; DIY/professional choice; replacement materials; wall removal; hazards; consequences of poor removal; mould/rodent signs; preventing future damage; environmental impact.

Underfloor content lists ten benefits: energy efficiency, comfort, heating costs, noise, moisture, environmental impact, pest protection, property value, flooring lifespan and indoor environment. Supply/install is only a short sentence. Existing-wall content is misplaced underfloor text. Vacuum hire has little explanatory detail.

### Blog inventory

All eight articles are archived in full as HTML and extracted text; source URLs and headings are in `content-inventory.md`.

| Article | Displayed index date |
|---|---|
| Government Insulation Rebates Available in 2025–2026 (Australia) | 29 January 2026 |
| The Best Types of Insulation for Your Home in Australia | 24 August 2025 |
| Blow-in Insulation Removal: A Detailed Process | 12 March 2025 |
| Blow-in Insulation for Wall Insulation Without Removing Drywall | 12 March 2025 |
| The Importance of Underfloor Insulation: Why You Shouldn't Overlook It | 15 February 2025 |
| How Much Does an Insulation Removal Vacuum Cost? | 15 February 2025 |
| The Comprehensive Handbook on Insulation Removal: Expenses, Hiring Choices, and Advantages of an Insulation Vacuum | 12 March 2019 |
| What is an Insulation Removal Vacuum and How Does it Work? | 12 March 2019 |

Several excerpts still contain “It all begins with an idea.” Multiple slugs retain template-style `blog-post-title-*` names. Publication dates and sitemap modification dates differ; preserve both concepts rather than treating last modification as original publication.

## Forms and conversion flows

No form was submitted. The following comes from rendered homepage fields and public form configuration, preserved in `forms.json`.

| Form | Fields and requirements | Behaviour in configuration |
|---|---|---|
| Homepage Quote Request | Required first/last name, email, phone, message; address group marked optional in configuration, though rendered address subfields show required markers | Submit button; CAPTCHA enabled; long thank-you message with main phone and pfinsulation01@gmail.com |
| Inquiry | Required first/last name, email, service checkbox selection and message; optional phone and project address | CAPTCHA; “Thank you!”; no success redirect; email field has mailing-list capability enabled |
| Rebate enquiry | Required first/last name, email, property type, customer role, existing insulation and address; optional phone | CAPTCHA; thank-you message; no success redirect |

Inquiry service options: insulation removal, insulation install, underfloor, wall insulation and all of them. Vacuum hire and roof cleaning are not separate choices.

Rebate property options: single story, double story, unit or appartment, **Option 4**. Role options: House owner, Landlord, Propert manager, Tenent, Builder. Existing insulation: No Insulation, Old Batt, Loose fill Or Blow-in insulation, Unsure. Preserve the intended choices but correct spelling and remove the unfinished option.

The rebate page also has a preliminary calculator with property type, insulation condition, safe roof access and approximate ceiling area. Its HTML and embedded logic are archived. Interactive outcomes were not browser-tested. Keep this separate from the contact form and from any final eligibility decision.

No privacy-policy URL is populated in the captured form definitions. A visible privacy explanation and verified consent behaviour should be part of the later form work. The archive does not establish the email inbox/CRM receiving submissions.

## Rebate content baseline

The current dedicated page states a 1 October 2026 expansion date, approximately 30–50% potential discount, indicative 150 m² examples of about $1,482 metropolitan / $2,104 regional, and a $200 including GST minimum contribution. It discusses existing insulation below R2.0, R5 minimum total thermal performance, possible R6/R7 options, required assessments and Accredited Provider approval. These are **captured claims**, not independently verified eligibility or financial guidance.

Its eight-stage process is enquiry, inspection, safety assessment, quote, approval, installation, evidence collection and VEU processing. It states PF is an independent contractor, is not the government/ESC/Accredited Provider, and works with an Accredited Provider. It also says removal/cleaning/electrical repairs may be separately quoted and that removing insulation simply to create eligibility is inappropriate.

The older rebate blog says “early 2026,” creating a discrepancy with the dedicated page. Before publication, recheck all dated claims against the official government links already on that page and the actual provider arrangement. Do not turn conditional discounts into guaranteed offers.

## Visual assets and existing styling

The actual header logo is `logos/pf-insulation-header-logo.jpg`: flat white roof/PF mark on black, 500 × 500. The social logo `logos/pf-insulation-social-logo.jpeg` is a different metallic treatment with a small Grok mark visible in the corner. They should not be treated as interchangeable production masters. Blog branding has another raster variant. No original vector logo was found.

Images include the removal-worker hero, insulation batts, attic/roof work, material closeups, installation/result photos, vacuum equipment, blog imagery and stock photographs. Use the gallery to make selections; source URLs and SHA-256 hashes allow tracing every file. Several URLs contain the same image bytes. Two result images are only about 341–342 pixels wide and are poor choices for large hero placements. The animal-fur PNG is approximately 3.7 MB. Keep originals archived and produce optimised responsive derivatives during redesign.

Homepage visual inspection found a busy worksite background, dark headline over a pale image overlay, very large italic serif type, a dark curved call button, black-square logo and purple marquee separators. HTML/CSS reference **Young Serif** and **Bitter**. The rebate block uses a system sans-serif stack and green, blue and slate styles, including `#166534`, `#16a34a`, `#2563eb`, `#111827`, `#f8fafc` and WhatsApp green `#25d366`. These are existing styles, not a proposed new palette.

Image ownership is not established by hosting on this site. Stock/third-party-looking imagery and the social logo's visible generation mark should be reviewed when choosing the final production set.

## Problems to resolve in phase 2

| Priority | Finding | Recommended treatment |
|---|---|---|
| High | Two contact numbers and two email addresses are presented without explanation | Agree primary contact and routing, then use consistently |
| High | Existing-wall service repeats underfloor copy | Replace with an accurate wall service description |
| High | Rebate dates differ; eligibility/pricing are time-sensitive | Revalidate against official sources before publishing |
| High | Rebate form contains “Option 4” and spelling errors | Clean all field labels/options and test validation |
| High | Homepage hero has weak visual text separation | Simplify composition and verify contrast at target breakpoints |
| Medium | Services are buried in long accordions; vacuum hire missing on homepage | Present a concise complete service overview with detail links |
| Medium | Long quote form and inconsistent required fields | Simplify first enquiry and clarify required inputs |
| Medium | Generic template paths and effectively empty `/new-page` | Plan page consolidation and redirects |
| Medium | Captured page titles repeat the homepage SEO title across the crawl | Give each meaningful page a specific title and description |
| Medium | Multiple H1s, including marquee content; source image alt values often empty | Rebuild heading hierarchy and write purposeful alt text |
| Medium | Missing clear proof of experience, reviews, warranty and coverage | Add verified business evidence when available |
| Medium | Inconsistent logo treatments, stock imagery and small result photos | Choose one logo system and stronger authentic project imagery |
| Medium | FAQ uses $/square-foot pricing and US-style terminology | Confirm Australian pricing units and localise wording |
| Low | Placeholder blog excerpts and inconsistent capitalisation/spelling | Editorial cleanup and article metadata review |

The source includes performance, moisture, pest and health claims that should receive a technical review before reuse. This audit does not validate those claims. No Lighthouse, Core Web Vitals, contrast-ratio measurements or full keyboard/mobile tests were completed, so no numerical performance/accessibility scores are asserted.

## Phase 2 starting brief

Keep PF Insulation recognisable while making it easier to understand the full service range and request a quote. A proposed information structure is Home, Services, Projects/Results, VEU Information, About and Contact, with Blog retained where useful. This is a discussion baseline; no redesign has been implemented.

The future homepage should quickly establish who PF serves, its main services, verified proof, the removal-to-replacement process, project results and a clear quote action. Treat VEU as a distinct conditional offer with its own enquiry path. Carry forward all approved services and contact behaviours, and maintain a redirect map for changed URLs.

Business decisions needed before final copy: preferred phone/SMS/email routing; actual service areas; vacuum-hire scope; supported products/brands; provider relationship; verified credentials/reviews/warranties; response-time promise; final logo choice; and image reuse rights. These are recorded for the next phase, not blockers to the completed archive.
