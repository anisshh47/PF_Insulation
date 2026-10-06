import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Check, CheckCheck, Copy, Mail, X } from 'lucide-react';
import { Button } from '../design-system/primitives.jsx';
import { EMAIL, PHONE, services } from '../content.js';

export function Dialog({ children, onClose, label, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const previous = document.activeElement;
    const dialog = ref.current;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    return () => { dialog.close(); document.body.style.overflow = oldOverflow; previous?.focus(); };
  }, []);
  const onBackdrop = e => {
    if (e.target !== e.currentTarget) return;
    const r = ref.current.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) onClose();
  };
  return (
    <dialog ref={ref} className={`modal ${className}`} aria-label={label} onCancel={onClose} onClick={onBackdrop}>
      <button className="modal-close" onClick={onClose} aria-label="Close dialog"><X size={26} strokeWidth={1.5} /></button>
      {children}
    </dialog>
  );
}

export function QuoteDialog({ initialService, onClose }) {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState(initialService || '');
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [details, setDetails] = useState({ name: '', email: '', phone: '', suburb: '', message: '' });
  const heading = useRef(null);
  useEffect(() => { heading.current?.focus(); }, [step]);
  const body = `Hello PF Insulation,\n\nI would like a quote for ${selected}.\n\nName: ${details.name}\nEmail: ${details.email}\nPhone: ${details.phone || 'Not provided'}\nSuburb / postcode: ${details.suburb}\n\n${details.message}\n\nPlease contact me to discuss an assessment.`;
  const update = e => setDetails({ ...details, [e.target.name]: e.target.value });
  const options = [...services.map(s => s.name), 'Roof-space cleaning', 'Vacuum hire', 'VEU assessment', 'Not sure yet'];
  return (
    <Dialog onClose={onClose} label="Request a free quote" className="quote-modal">
      <p className="ds-kicker modal-kicker">Let’s make home feel better</p>
      <div className="step-track" aria-label={`Step ${step} of 3`}>{[1, 2, 3].map(n => <span key={n} className={n <= step ? 'active' : ''} />)}</div>
      <p className="ds-small step-label">0{step} / 03 · {step === 1 ? 'Your project' : step === 2 ? 'Your details' : 'Your enquiry'}</p>
      <h2 className="ds-h3" ref={heading} tabIndex={-1}>{step === 1 ? 'What can we help with?' : step === 2 ? 'Tell us a little about you.' : 'Your enquiry is ready.'}</h2>

      {step === 1 && <>
        <p>Choose a service. Not sure? We’ll help you work it out.</p>
        <div className="quote-options">{options.map(s => <button key={s} className={selected === s ? 'selected' : ''} aria-pressed={selected === s} onClick={() => setSelected(s)}>{s}<span>{selected === s && <Check size={16} />}</span></button>)}</div>
        <Button block disabled={!selected} onClick={() => setStep(2)}>Continue</Button>
        <p className="form-note">Free measurement & quote. No obligation.</p>
      </>}

      {step === 2 && <form onSubmit={e => { e.preventDefault(); setStep(3); }}>
        <p>We’ll use these details to understand your project.</p>
        <div className="form-grid">
          <label>Your name<input name="name" autoComplete="name" required maxLength={100} value={details.name} onChange={update} placeholder="Full name" /></label>
          <label>Email address<input name="email" type="email" autoComplete="email" required maxLength={150} value={details.email} onChange={update} placeholder="you@example.com" /></label>
          <label>Phone <span>(optional)</span><input name="phone" type="tel" autoComplete="tel" value={details.phone} onChange={update} placeholder="04XX XXX XXX" maxLength={25} /></label>
          <label>Suburb or postcode<input name="suburb" autoComplete="address-level2" required maxLength={100} value={details.suburb} onChange={update} placeholder="e.g. Brunswick, 3056" /></label>
          <label className="full">Anything else? <span>(optional)</span><textarea name="message" rows={3} maxLength={1500} value={details.message} onChange={update} placeholder="Tell us about your home and existing insulation…" /></label>
        </div>
        <p className="form-note">Your details stay in this browser until you choose to send them using your email app.</p>
        <div className="modal-actions"><button type="button" className="ds-btn ds-btn--outline" onClick={() => setStep(1)}><ArrowLeft size={20} strokeWidth={1.6} /> Back</button><Button type="submit" className="grow">Review enquiry</Button></div>
      </form>}

      {step === 3 && <>
        <p>Review your details, then open your email app to send the request to our team.</p>
        <div className="enquiry-review"><span className="ds-small">{selected}</span><strong>{details.name}</strong><span>{details.email} · {details.suburb}</span>{details.phone && <span>{details.phone}</span>}{details.message && <p>{details.message}</p>}</div>
        <a className="ds-btn ds-btn--ink ds-btn--block" href={`mailto:${EMAIL}?subject=${encodeURIComponent(`Quote enquiry — ${selected}`)}&body=${encodeURIComponent(body)}`}><Mail size={20} strokeWidth={1.6} /> Open email to send</a>
        <p className="form-note">Nothing has been sent yet. Send the message from your email app, or copy it and email {EMAIL}.</p>
        <div className="modal-actions between">
          <button className="text-button" onClick={() => setStep(2)}><ArrowLeft size={18} /> Edit details</button>
          <button className="text-button" onClick={async () => { try { await navigator.clipboard.writeText(body); setCopied(true); setCopyError(false); } catch { setCopyError(true); } }}>{copied ? <CheckCheck size={18} /> : <Copy size={18} />}{copied ? 'Copied' : 'Copy enquiry'}</button>
        </div>
        <div role="status">{copyError && <p className="form-note">Copy is unavailable in this browser. Use the email button or call {PHONE}.</p>}</div>
      </>}
    </Dialog>
  );
}

export function ServiceDialog({ service, onClose, onQuote }) {
  return (
    <Dialog onClose={onClose} label={service.name} className="service-modal">
      <img src={`/images/${service.image}`} alt={service.alt} style={{ objectPosition: service.pos }} />
      <div className="service-modal-copy">
        <p className="ds-kicker modal-kicker">{service.name}</p>
        <h2 className="ds-h3">{service.title}</h2>
        <p>{service.details}</p>
        <ul>{service.points.map(p => <li key={p}><Check size={18} />{p}</li>)}</ul>
        <Button block onClick={() => onQuote(service.name)}>Request a quote</Button>
      </div>
    </Dialog>
  );
}

export function GalleryDialog({ item, onClose }) {
  return (
    <Dialog onClose={onClose} label={item.title} className="gallery-modal">
      <img src={`/images/${item.image}`} alt={item.title} />
      <h2 className="ds-h4">{item.title}</h2>
    </Dialog>
  );
}
