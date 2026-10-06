import React, { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { Button } from '../design-system/primitives.jsx';
import { heroSlides } from '../content.js';

const DURATION = 7000;

export default function Hero({ onQuote }) {
  const reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(!reduce);
  const [tick, setTick] = useState(0);
  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => { setI(n => (n + 1) % heroSlides.length); setTick(k => k + 1); }, DURATION);
    return () => clearTimeout(t);
  }, [playing, i, tick]);
  const s = heroSlides[i];
  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Featured">
      <div className="hero-media">
        {heroSlides.map((slide, n) => <img key={slide.image} src={slide.image} alt={n === i ? slide.alt : ''} aria-hidden={n !== i} className={n === i ? 'on' : ''} style={{ objectPosition: slide.pos }} fetchPriority={n === 0 ? 'high' : 'auto'} />)}
        <div className="hero-shade" />
      </div>
      <div className="hero-block" aria-hidden="true" />
      <div className="hero-copy" aria-live={playing ? 'off' : 'polite'}>
        <h1 key={i} className="ds-display hero-title">{s.h1.map((line, n) => <span key={n}>{line}<br /></span>)}</h1>
      </div>
      <div className="hero-side">
        <p className="ds-lead">{s.p}</p>
        <Button tone="light" icon={false} onClick={() => onQuote()}>Get a free quote</Button>
      </div>
      <div className="hero-bar">
        <div className="hero-progress" role="tablist" aria-label="Choose slide">
          {heroSlides.map((_, n) => (
            <button key={n} role="tab" aria-selected={n === i} aria-label={`Slide ${n + 1}`} className={`seg ${n === i ? 'active' : ''}`} onClick={() => { setI(n); setTick(k => k + 1); }}>
              <span className="fill" style={n === i && playing ? { animation: `heroFill ${DURATION}ms linear forwards` } : n === i ? { width: '100%' } : undefined} key={`${n}-${i}-${tick}-${playing}`} />
            </button>
          ))}
        </div>
        <button className="hero-pause" onClick={() => setPlaying(p => !p)} aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}>{playing ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}</button>
      </div>
    </section>
  );
}
