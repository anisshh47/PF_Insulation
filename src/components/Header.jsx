import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Menu, Phone, X } from 'lucide-react';
import { PHONE_HREF, nav } from '../content.js';

export function Logo({ className = '' }) {
  return <a href="#top" className={`logo ${className}`} aria-label="PF Insulation home"><img src="/images/logo-white.png" alt="" width="279" height="330" /></a>;
}

export default function Header({ onQuote }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  useEffect(() => {
    if (!open) return;
    const close = e => { if (e.key === 'Escape') { setOpen(false); toggle.current?.focus(); } };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [open]);
  return (
    <header className="site-header" id="top">
      <Logo />
      <nav className="site-nav" aria-label="Main navigation">{nav.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</nav>
      <a className="hdr-square" href={PHONE_HREF} aria-label="Call PF Insulation"><Phone size={26} strokeWidth={1.4} /></a>
      <button className="hdr-cta" onClick={() => onQuote()}>Get a Quote <ArrowRight size={22} strokeWidth={1.5} /></button>
      <button ref={toggle} className="hdr-burger" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}</button>
      {open && <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile navigation">
        {nav.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}<ArrowRight size={26} strokeWidth={1.3} /></a>)}
        <button className="ds-btn ds-btn--light" onClick={() => { setOpen(false); onQuote(); }}>Get a Quote <ArrowRight size={20} strokeWidth={1.6} /></button>
      </nav>}
    </header>
  );
}
