import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

/* Base Design System primitives — the only place button/frame/arrow markup is defined. */

export const Container = ({ as: Tag = 'div', className = '', ...p }) => <Tag className={`ds-container ${className}`} {...p} />;

export function Button({ tone = 'ink', size, block, href, icon = true, className = '', children, ...p }) {
  const cls = `ds-btn ds-btn--${tone} ${size ? `ds-btn--${size}` : ''} ${block ? 'ds-btn--block' : ''} ${className}`;
  const inner = <>{children}{icon && <ArrowRight size={20} strokeWidth={1.6} aria-hidden="true" />}</>;
  return href ? <a className={cls} href={href} {...p}>{inner}</a> : <button className={cls} {...p}>{inner}</button>;
}

export function ArrowLink({ href, onClick, children, className = '', ...p }) {
  const inner = <>{children}<ArrowRight size={22} strokeWidth={1.5} aria-hidden="true" /></>;
  return href
    ? <a className={`ds-arrowlink ${className}`} href={href} onClick={onClick} {...p}>{inner}</a>
    : <button className={`ds-arrowlink ${className}`} onClick={onClick} {...p}>{inner}</button>;
}

/* Image frame; `notch` adds the white corner block that bites into the image. */
export function Frame({ src, alt = '', ratio = '1 / 1', notch, notchSide, position = 'center', className = '', children, ...p }) {
  return (
    <div className={`ds-frame ${className}`} style={{ aspectRatio: ratio }} {...p}>
      <img src={src} alt={alt} loading="lazy" style={{ objectPosition: position }} />
      {notch && <div className={`ds-notch ${notchSide === 'left' ? 'ds-notch--left' : ''}`}>{notch}</div>}
      {children}
    </div>
  );
}

export function Arrows({ onPrev, onNext, prevDisabled, nextDisabled, light, label = 'carousel' }) {
  const c = light ? '#fff' : 'currentColor';
  return (
    <div className="ds-arrows" role="group" aria-label={`${label} controls`}>
      <button onClick={onPrev} disabled={prevDisabled} aria-label={`Previous ${label} item`}><ArrowLeft size={34} strokeWidth={1.3} color={c} /></button>
      <button onClick={onNext} disabled={nextDisabled} aria-label={`Next ${label} item`}><ArrowRight size={34} strokeWidth={1.3} color={c} /></button>
    </div>
  );
}
