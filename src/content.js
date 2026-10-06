export const PHONE = '0466 253 396';
export const PHONE_HREF = 'tel:0466253396';
export const EMAIL = 'pfinsulation01@gmail.com';
export const BLOG = 'https://pfinsulation.com.au/blog-2-1';

export const nav = [['Services', '#services'], ['Why PF', '#process'], ['Our work', '#our-work'], ['VEU rebates', '#rebates'], ['Journal', '#journal'], ['FAQs', '#faqs']];

export const heroSlides = [
  { image: '/images/comfort.webp', alt: 'A calm, naturally lit living room with warm neutral furnishings', pos: '50% 40%', h1: ['Comfort starts', 'from within.'], p: 'A warmer winter. A cooler summer. A home that simply feels better. Thoughtful insulation solutions, from the ground up.' },
  { image: '/images/removal.webp', alt: 'Worker vacuuming old material from a roof space', pos: '50% 55%', h1: ['Out with the old.', 'In with the', 'comfort.'], p: 'We remove old, damaged and unwanted insulation, clean up what’s left behind, and install what suits your home.' },
  { image: '/images/ceiling.webp', alt: 'Insulation fitted between timber roof joists', pos: '50% 60%', h1: ['A better feeling', 'home, season', 'after season.'], p: 'Whatever Melbourne’s weather brings, the right insulation helps your home hold its temperature.' },
];

export const steps = [
  { kicker: 'Less guesswork. More comfort.', title: 'Let’s have a chat.', text: 'Tell us about your home, your suburb and what you’d like to improve. We’ll help you understand what your home needs, one clear step at a time.', image: '/storyboard/process-1-chat.svg', alt: 'Storyboard placeholder: a homeowner talking with the PF team' },
  { kicker: 'Less guesswork. More comfort.', title: 'A closer look.', text: 'We assess your space and explain the right options with a clear quote, so you know what’s included before any work begins.', image: '/storyboard/process-2-look.svg', alt: 'Storyboard placeholder: roof-space assessment' },
  { kicker: 'Less guesswork. More comfort.', title: 'We get to work.', text: 'Our team carries out the agreed removal, preparation and installation, with the details planned together.', image: '/images/installation.webp', alt: 'Insulation installation shown at several stages' },
  { kicker: 'Less guesswork. More comfort.', title: 'Feel the difference.', text: 'Settle into a home designed to feel more comfortable through the seasons: help slow heat loss in winter and heat gain in summer.', image: '/storyboard/process-4-feel.svg', alt: 'Storyboard placeholder: a comfortable home through the seasons' },
];

export const services = [
  { id: 'removal', name: 'Insulation removal', title: 'Out with the old.', image: 'removal.webp', pos: '50% 50%', icon: 'wind', alt: 'Worker vacuuming old material from a roof space', text: 'A fresh start for your roof space. We remove old, damaged and unwanted insulation, and clean up what’s left behind.', details: 'From loose-fill cellulose and rockwool to old glasswool batts, we assess the material and roof access before planning removal and disposal.', points: ['Old batts & loose-fill removal', 'Roof-space vacuuming', 'Disposal & clean-up'] },
  { id: 'ceiling', name: 'Ceiling insulation', title: 'In with the comfort.', image: 'ceiling.webp', pos: '50% 50%', alt: 'Insulation fitted between timber roof joists', text: 'Make home feel better, season after season. New insulation, supplied and installed to suit your ceiling space.', details: 'Whether you are replacing tired insulation or insulating for the first time, we can help you choose an appropriate solution. Ask about suitable R5, R6 and R7 options.', points: ['Supply & installation', 'Insulation replacement', 'Options to suit your roof space'] },
  { id: 'underfloor', name: 'Underfloor insulation', title: 'Warmth underfoot.', image: 'underfloor.webp', pos: '40% 50%', alt: 'Insulation fitted beneath timber flooring', text: 'Take the chill out of your floors. Insulate underneath your home for a more comfortable everyday living space.', details: 'We assess access beneath your home and the floor structure to recommend an appropriate underfloor insulation approach.', points: ['Existing-home upgrades', 'Accessible subfloor assessment', 'A more comfortable living space'] },
  { id: 'walls', name: 'Wall insulation', title: 'Comfort, all around.', image: 'wall.webp', pos: '50% 40%', alt: 'Insulation within a timber wall frame', text: 'Give your home another layer of comfort. Explore insulation options for existing walls and renovation projects.', details: 'Every wall is different. We review its construction and access before discussing suitable installation options, including blow-in insulation where appropriate.', points: ['Existing-wall assessment', 'Renovation projects', 'Property-specific advice'] },
];

export const work = [
  { image: 'ceiling.webp', title: 'Ceiling insulation', sub: 'A carefully fitted layer of comfort.' },
  { image: 'result.webp', title: 'Roof-space preparation', sub: 'The parts of your home you don’t often see.' },
  { image: 'removal.webp', title: 'Insulation removal', sub: 'Making room for a fresh start.' },
  { image: 'wall.webp', title: 'Wall insulation', sub: 'Another layer of comfort.' },
  { image: 'installation.webp', title: 'Installation', sub: 'Layer by layer.' },
  { image: 'underfloor.webp', title: 'Underfloor insulation', sub: 'Warmth underfoot.' },
];

export const values = [
  { label: 'A solution for your home', quote: 'Your space, access and existing insulation guide our advice.', image: '/storyboard/team-portrait.svg', alt: 'Storyboard placeholder: PF Insulation team portrait', placeholder: true },
  { label: 'Clarity from the start', quote: 'Understand the work, the options and what’s included in your quote.', image: '/images/installation.webp', alt: 'Insulation installation shown at several stages' },
  { label: 'The whole job, considered', quote: 'Removal, cleaning and installation, with the details planned together.', image: '/images/result.webp', alt: 'Roof-space insulation work in progress' },
];

export const posts = [
  { tag: 'Rebates', title: 'Government Insulation Rebates Available in 2025–2026 (Australia)', excerpt: 'Upgrading your home insulation is one of the most effective ways to reduce energy bills and improve comfort.', image: '/storyboard/insight-rebates.svg', alt: 'Storyboard placeholder: rebate guide', href: `${BLOG}/government-insulation-rebates-available-in-20252026-australia` },
  { tag: 'Process', title: 'Blow-in Insulation Removal: A Detailed Process', excerpt: 'Removing blow-in insulation can be necessary for several reasons, including degradation, contamination, or replacement.', image: '/images/removal.webp', alt: 'Roof space during insulation removal', href: `${BLOG}/blow-in-insulation-removal-a-detailed-process` },
  { tag: 'Walls', title: 'Blow-in Insulation for Wall Insulation Without Removing Drywall', excerpt: 'Blow-in insulation fills wall cavities with loose, lightweight material where batts are difficult to install.', image: '/images/wall.webp', alt: 'Insulation within a timber wall frame', href: `${BLOG}/blow-in-insulation-for-wall-insulation-without-removing-drywall` },
];

export const faqs = [
  { category: 'Getting started', q: 'How do I know if my insulation needs replacing?', a: 'Uneven temperatures or insulation that is visibly compressed, damaged or damp can be reasons to have it assessed. We can inspect the roof space and discuss whether removal, replacement or another approach suits your home.' },
  { category: 'Getting started', q: 'Can you remove the old insulation and install new insulation?', a: 'Yes. PF Insulation offers removal, roof-space cleaning, and new insulation supply and installation. Your quote will explain which services are included and any work that needs to be priced separately.' },
  { category: 'Getting started', q: 'Which areas do you service?', a: 'We service Melbourne and surrounding eligible areas of Victoria. Send us your suburb or postcode so we can confirm availability for your property.' },
  { category: 'The process', q: 'How much does insulation cost?', a: 'The price depends on the area, existing material, access, selected insulation and any removal or cleaning needed. Request a free measurement and quote for a price based on your home.' },
  { category: 'The process', q: 'How long does the work take?', a: 'Timing varies with the property and scope of work. Once we have assessed your home, we will discuss the expected schedule and access requirements with you.' },
  { category: 'The process', q: 'Do you offer insulation vacuum hire?', a: 'Yes, vacuum hire is one of our listed services. Contact us to discuss equipment availability, suitability, collection arrangements and hire terms.' },
  { category: 'Rebates', q: 'Could my home qualify for a VEU discount?', a: 'Eligibility depends on the current Victorian Energy Upgrades requirements, the property, existing insulation, safety checks and approval through the applicable Accredited Provider. Contact us for an assessment; an enquiry is not confirmation of a discount.' },
  { category: 'Rebates', q: 'Is PF Insulation a VEU Accredited Provider?', a: 'PF Insulation is an independent insulation contractor. For applicable VEU work, we work with an Accredited Provider. We are not the Victorian Government or the Accredited Provider.' },
];
