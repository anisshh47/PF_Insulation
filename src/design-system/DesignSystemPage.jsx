import React from 'react';
import { Arrows, ArrowLink, Button, Container, Frame } from './primitives.jsx';

const swatches = [['--c-blue', '#3168FF', 'Signature field: header, hero block, pinned scene, footer'], ['--c-blue-deep', '#0044B4', 'Secondary field: paired CTA'], ['--c-ink', '#323232', 'Text + dark section'], ['--c-paper-warm', '#F7F4F0', 'Tinted content section'], ['--c-paper', '#FFFFFF', 'Page'], ['--c-rule', '#D8D8D8', 'Hairlines, ruler, inactive progress']];
const type = [['Display', 'ds-display', '56/61.6 · 400', 'Comfort starts from within.'], ['H2 statement', 'ds-h2', '64/76.8 · 400 · −0.024em', 'The way a home comes together matters.'], ['H3 row title', 'ds-h3', '40/44 · 400', 'Ceiling insulation'], ['H4 card title', 'ds-h4', '20/28 · 500', 'Roof-space preparation'], ['Lead', 'ds-lead', '20/24 · 500', 'A warmer winter. A cooler summer.'], ['Body', 'ds-body', '18/1.4 · 400', 'We take the time to understand your home and help you choose what’s right for it.']];

export default function DesignSystemPage() {
  return (
    <main className="dsp">
      <Container>
        <p className="ds-kicker"><a href="#top" onClick={() => { window.location.hash = ''; }}>← Back to site</a></p>
        <h1 className="ds-display">PF Insulation — Base Design System</h1>
        <p className="ds-body dsp-intro">Language measured from varcopruden.com. Tokens live in <code>src/design-system/tokens.css</code>; primitives in <code>primitives.jsx</code>.</p>

        <h2 className="ds-h3">Colour</h2>
        <ul className="dsp-swatches">{swatches.map(([v, hex, use]) => <li key={v}><span style={{ background: hex }} /><b>{v}</b><i>{hex}</i><em>{use}</em></li>)}</ul>

        <h2 className="ds-h3">Type — Hanken Grotesk Variable (stand-in for Onsite Standard)</h2>
        <ul className="dsp-type">{type.map(([n, c, spec, sample]) => <li key={n}><small>{n} · {spec}</small><p className={c}>{sample}</p></li>)}</ul>

        <h2 className="ds-h3">Buttons &amp; links</h2>
        <div className="dsp-row">
          <Button tone="ink">Get a free quote</Button><Button tone="outline" icon={false}>Learn More</Button>
          <div className="dsp-dark"><Button tone="light" icon={false}>Watch Video</Button><ArrowLink href="#design-system">See More</ArrowLink><Arrows light label="demo" /></div>
        </div>

        <h2 className="ds-h3">Frame + notch</h2>
        <div className="dsp-frame"><Frame src="/images/installation.webp" alt="" ratio="4 / 3" notch="Read article" /></div>

        <h2 className="ds-h3">Rules</h2>
        <ul className="dsp-rules"><li>No border-radius. Rectangles only.</li><li>Colour is flat: blue fields, ink fields, white/warm paper. No gradients except the hero image shade.</li><li>Type is light and large: one weight (400) for headings, 500 for UI and card titles.</li><li>Imagery is square, with a white notch biting one corner.</li><li>Section rhythm: <code>--section-y</code>; side gutter <code>--gutter</code> (80px at 1440).</li></ul>
      </Container>
    </main>
  );
}
