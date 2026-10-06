import React, { useEffect, useRef, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { ArrowRight, Check, Clock3, Minus, Plus, ShieldCheck, Snowflake, Sun } from 'lucide-react';
import { Arrows, ArrowLink, Button, Container, Frame } from '../design-system/primitives.jsx';
import { BLOG, EMAIL, PHONE, PHONE_HREF, faqs, posts, services, steps, values, work } from '../content.js';

/* 02 — Intro statement (two columns) + seasonal toggle (React JSS) */
const useSeason = createUseStyles({
  panel: { background: ({ w }) => (w ? '#3168ff' : '#323232'), color: '#fff', transition: 'background 400ms ease' },
});
function Season() {
  const [season, setSeason] = useState('Winter');
  const c = useSeason({ w: season === 'Winter' });
  return (
    <div className={`season ${c.panel}`}>
      <div className="season-tabs" role="group" aria-label="Season">
        {['Winter', 'Summer'].map(s => <button key={s} aria-pressed={s === season} className={s === season ? 'active' : ''} onClick={() => setSeason(s)}>{s === 'Winter' ? <Snowflake size={18} strokeWidth={1.4} /> : <Sun size={18} strokeWidth={1.4} />}{s}</button>)}
      </div>
      <p aria-live="polite">{season === 'Winter' ? 'Keep the warmth where it belongs. Help slow heat loss and make your living spaces feel more comfortable.' : 'A cooler place to come home to. Help slow heat entering your home, so your spaces feel more comfortable.'}</p>
    </div>
  );
}
export function Intro() {
  return (
    <section className="ds-section intro" aria-labelledby="intro-h">
      <Container className="ds-grid-2 intro-grid">
        <h2 id="intro-h" className="ds-h2">The way a home comes together matters.</h2>
        <div>
          <p className="ds-body intro-copy">Insulation is something you rarely see, but feel every day. We take the time to understand your home (your space, your access and what’s already there) and help you choose what’s right for it. From removing what’s no longer working to installing what will, we make the next step feel simple.</p>
          <Season />
        </div>
      </Container>
    </section>
  );
}

/* 03 — Pinned process scene (blue). Desktop: sticky, scroll-driven. Mobile: stacked. */
export function ProcessScene() {
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  useEffect(() => {
    const el = ref.current;
    const onScroll = () => {
      if (window.innerWidth <= 800) return;
      const r = el.getBoundingClientRect();
      const total = r.height - window.innerHeight;
      const p = Math.min(0.9999, Math.max(0, -r.top / total));
      setActive(Math.floor(p * steps.length));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, []);
  const go = n => { const el = ref.current; const total = el.offsetHeight - window.innerHeight; window.scrollTo({ top: el.offsetTop + (total * (n + 0.5)) / steps.length, behavior: 'smooth' }); };
  return (
    <section className="scene" id="process" ref={ref} aria-label="How we work" style={{ '--steps': steps.length }}>
      <div className="scene-sticky">
        <div className="scene-rail" role="group" aria-label="Process progress">
          {steps.map((s, n) => <button key={s.title} className={n === active ? 'on' : n < active ? 'past' : ''} onClick={() => go(n)} aria-label={`Go to step ${n + 1}: ${s.title}`} aria-current={n === active} />)}
        </div>
        {steps.map((s, n) => (
          <article key={s.title} className={`scene-step ${n === active ? 'on' : ''}`} aria-hidden={undefined}>
            <div className="scene-text">
              <p className="ds-kicker">0{n + 1} — {s.kicker}</p>
              <h2 className="ds-h2">{s.title}</h2>
              <p className="ds-body scene-p">{s.text}</p>
            </div>
            <Frame className="scene-img" src={s.image} alt={s.alt} ratio="4 / 5" />
          </article>
        ))}
      </div>
    </section>
  );
}

/* 04 — Services: alternating rows */
export function Services({ onService, onQuote }) {
  return (
    <section className="ds-section ds-section--warm services" id="services" aria-labelledby="svc-h">
      <div className="services-block" aria-hidden="true" />
      <Container>
        <h2 id="svc-h" className="ds-h2 services-title">Built around what your home needs.</h2>
        <div className="svc-list">
          {services.map((s, i) => (
            <article key={s.id} className={`svc-row ${i % 2 ? 'flip' : ''}`}>
              <div className="svc-copy">
                <h3 className="ds-h3">{s.name}</h3>
                <p className="ds-body">{s.text}</p>
                <div className="svc-actions"><Button tone="outline" icon={false} onClick={() => onService(s)} aria-label={`Learn more about ${s.name}`}>Learn More</Button></div>
              </div>
              <div className="svc-media"><Frame src={`/images/${s.image}`} alt={s.alt} position={s.pos} ratio="1 / 1" /></div>
            </article>
          ))}
        </div>
        <p className="svc-extra ds-body">Need roof-space cleaning or insulation vacuum hire? <ArrowLink onClick={() => onQuote('Roof-space cleaning')}>Let’s talk about your project</ArrowLink></p>
      </Container>
    </section>
  );
}

/* 05 — VEU rebates */
export function Rebates({ onQuote }) {
  return (
    <section className="ds-section rebates" id="rebates" aria-labelledby="veu-h">
      <Container className="ds-grid-2 rebate-grid">
        <div>
          <p className="ds-kicker rebate-kicker">Victorian Energy Upgrades</p>
          <h2 id="veu-h" className="ds-h2">A little support. A more comfortable home.</h2>
          <p className="ds-body rebate-copy">Your ceiling insulation upgrade may be eligible for support through the VEU program. Let’s explore what’s possible for your property.</p>
          <div className="rebate-actions"><Button onClick={() => onQuote('VEU assessment')}>Ask about my eligibility</Button><ArrowLink href="https://www.energy.vic.gov.au/victorian-energy-upgrades/products/insulation-discounts" target="_blank" rel="noreferrer">Official VEU information</ArrowLink></div>
        </div>
        <div className="rebate-card">
          <h3 className="ds-h3">Could your home be suitable?</h3>
          <ul>{['Your property is in Victoria', 'Your ceiling has little or no insulation', 'Your roof space can be safely assessed'].map(t => <li key={t}><Check size={22} strokeWidth={1.4} />{t}</li>)}</ul>
          <p className="ds-small rebate-disclaimer"><ShieldCheck size={20} strokeWidth={1.4} /><span>Eligibility and discounts depend on current program rules, safety checks and Accredited Provider approval. PF Insulation works with a provider; an enquiry does not guarantee a rebate.</span></p>
        </div>
      </Container>
    </section>
  );
}

/* 06 — Work carousel (dark) */
export function WorkCarousel({ onOpen }) {
  const track = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });
  const update = () => { const t = track.current; if (!t) return; setEdge({ start: t.scrollLeft < 4, end: t.scrollLeft + t.clientWidth >= t.scrollWidth - 4 }); };
  useEffect(() => { update(); window.addEventListener('resize', update); return () => window.removeEventListener('resize', update); }, []);
  const by = dir => { const t = track.current; t.scrollBy({ left: dir * (t.firstElementChild.getBoundingClientRect().width + 40), behavior: 'smooth' }); };
  return (
    <section className="ds-section ds-section--ink work" id="our-work" aria-labelledby="work-h">
      <Container>
        <div className="row-head"><h2 id="work-h" className="ds-h2 work-title">Insulation at work.</h2><ArrowLink href={BLOG} target="_blank" rel="noreferrer">View Journal</ArrowLink></div>
      </Container>
      <div className="work-track-wrap">
        <ul className="work-track" ref={track} onScroll={update}>
          {work.map(w => (
            <li key={w.title}><button className="work-card" onClick={() => onOpen(w)} aria-label={`View ${w.title} photo`}><Frame src={`/images/${w.image}`} alt="" ratio="1 / 1" /><h3 className="ds-h4">{w.title}</h3><p className="ds-small">{w.sub}</p></button></li>
          ))}
        </ul>
      </div>
      <Container className="work-arrows"><Arrows light label="work" onPrev={() => by(-1)} onNext={() => by(1)} prevDisabled={edge.start} nextDisabled={edge.end} /></Container>
    </section>
  );
}

/* 07 — Statement panel (replaces the reference's customer testimonial: no verified testimonials exist yet) */
export function Statements() {
  const [n, setN] = useState(0);
  const v = values[n];
  return (
    <section className="ds-section statements" aria-label="How we work" aria-roledescription="carousel">
      <Container className="stmt">
        <div className="stmt-panel">
          <blockquote key={n}><p className="stmt-q">“{v.quote}”</p></blockquote>
          <p className="stmt-by"><ShieldCheck size={26} strokeWidth={1.3} /><span>{v.label}<br />PF Insulation</span></p>
        </div>
        <Frame className="stmt-img" src={v.image} alt={v.alt} ratio="4 / 5" notch={<Arrows label="statement" onPrev={() => setN((n + values.length - 1) % values.length)} onNext={() => setN((n + 1) % values.length)} />} />
      </Container>
    </section>
  );
}

/* 08 — Featured insights */
export function Journal() {
  return (
    <section className="ds-section journal" id="journal" aria-labelledby="journal-h">
      <Container>
        <div className="row-head"><h2 id="journal-h" className="ds-h3 journal-title">Featured Insights</h2><ArrowLink href={BLOG} target="_blank" rel="noreferrer">See More</ArrowLink></div>
        <div className="post-grid">
          {posts.map(p => (
            <a key={p.href} className="post" href={p.href} target="_blank" rel="noreferrer">
              <Frame src={p.image} alt={p.alt} ratio="1 / 1" notch={<><Clock3 size={20} strokeWidth={1.3} /> Read article</>} />
              <p className="ds-small post-tag">{p.tag}</p>
              <h3 className="ds-h4 post-title">{p.title}</h3>
              <p className="ds-body post-excerpt">{p.excerpt}</p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* 09 — FAQ */
export function Faq() {
  const cats = ['Getting started', 'The process', 'Rebates'];
  const [cat, setCat] = useState(cats[0]);
  const [open, setOpen] = useState(faqs[0].q);
  return (
    <section className="ds-section ds-section--warm faq" id="faqs" aria-labelledby="faq-h">
      <Container className="ds-grid-2 faq-grid">
        <div>
          <h2 id="faq-h" className="ds-h2">Good questions. Clear answers.</h2>
          <p className="ds-body faq-note">Still have something on your mind? We’re always happy to talk it through.</p>
          <ArrowLink href={PHONE_HREF}>{PHONE}</ArrowLink>
        </div>
        <div>
          <div className="faq-tabs" role="group" aria-label="Question categories">{cats.map(c => <button key={c} aria-pressed={c === cat} className={c === cat ? 'active' : ''} onClick={() => { setCat(c); setOpen(faqs.find(f => f.category === c).q); }}>{c}</button>)}</div>
          {faqs.filter(f => f.category === cat).map(f => { const id = `faq-${faqs.indexOf(f)}`; const isOpen = open === f.q; return (
            <div key={f.q} className={`faq-item ${isOpen ? 'open' : ''}`}>
              <h3><button aria-expanded={isOpen} aria-controls={id} onClick={() => setOpen(isOpen ? '' : f.q)}><span>{f.q}</span>{isOpen ? <Minus size={24} strokeWidth={1.4} /> : <Plus size={24} strokeWidth={1.4} />}</button></h3>
              <div id={id} hidden={!isOpen}><p className="ds-body">{f.a}</p></div>
            </div>); })}
        </div>
      </Container>
    </section>
  );
}

/* 10 — Paired CTA panels under a ruler strip */
export function CtaSplit({ onQuote }) {
  return (
    <section className="cta-split" aria-label="Get in touch">
      <div className="ds-ruler" aria-hidden="true" />
      <div className="cta-panels">
        <div className="cta-panel cta-panel--deep">
          <div className="cta-head"><h2 className="ds-h2">Let’s<br />connect.</h2><Button tone="light" icon={false} href={PHONE_HREF}>Call us</Button></div>
          <p className="ds-body">Ask a question, talk through your roof space or just learn more about how we work. Call {PHONE} or email {EMAIL}. No pressure. Just a conversation.</p>
        </div>
        <div className="cta-panel">
          <div className="cta-head"><h2 className="ds-h2">Let’s<br />insulate.</h2><Button tone="light" icon={false} onClick={() => onQuote()}>Get a free quote</Button></div>
          <p className="ds-body">Free measurement and quote for Melbourne and surrounding Victoria. Tell us about your home and we’ll help you choose what’s right for it.</p>
        </div>
      </div>
    </section>
  );
}
