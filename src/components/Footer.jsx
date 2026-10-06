import React from 'react';
import { Facebook, Instagram, ArrowUpRight } from 'lucide-react';
import { BLOG, EMAIL, PHONE, PHONE_HREF } from '../content.js';
import { Logo } from './Header.jsx';

export default function Footer({ onQuote }) {
  return (
    <footer className="site-footer">
      <div className="footer-photo" aria-hidden="true"><img src="/images/ceiling.webp" alt="" loading="lazy" /></div>
      <div className="ds-container footer-inner">
        <div className="footer-brand"><Logo className="logo--footer" /><p className="ds-small footer-tag">Thoughtful insulation. Everyday comfort.</p></div>
        <nav className="footer-cols" aria-label="Footer">
          <div><h2>Services</h2><a href="#services">Insulation removal</a><a href="#services">Ceiling insulation</a><a href="#services">Underfloor insulation</a><a href="#services">Wall insulation</a></div>
          <div><h2>Company</h2><a href="#process">Why PF Insulation</a><a href="#our-work">Our work</a><a href="#rebates">VEU information</a><a href="#faqs">Common questions</a></div>
          <div><h2>Resources</h2><a href={BLOG} target="_blank" rel="noreferrer">Insulation journal <ArrowUpRight size={14} /></a><button onClick={() => onQuote('Vacuum hire')}>Vacuum hire</button><button onClick={() => onQuote('Roof-space cleaning')}>Roof-space cleaning</button></div>
          <div><h2>Contact</h2><a href={PHONE_HREF}>{PHONE}</a><a href={`mailto:${EMAIL}`}>{EMAIL}</a><button onClick={() => onQuote()}>Request a free quote</button><span>Melbourne & surrounding Victoria</span></div>
        </nav>
        <div className="footer-bottom">
          <div><p>© {new Date().getFullYear()} PF Insulation. All rights reserved.</p><p>ABN 26 651 803 664 · <a href="#top">Back to top ↑</a></p></div>
          <div className="footer-social"><a href="https://www.instagram.com/insulation_removal_service/" target="_blank" rel="noreferrer" aria-label="PF Insulation on Instagram"><Instagram size={26} /></a><a href="https://www.facebook.com/profile.php?id=100075873649564" target="_blank" rel="noreferrer" aria-label="PF Insulation on Facebook"><Facebook size={26} /></a></div>
        </div>
      </div>
    </footer>
  );
}
