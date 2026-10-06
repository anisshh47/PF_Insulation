import React, { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import { Intro, ProcessScene, Services, Rebates, WorkCarousel, Statements, Journal, Faq, CtaSplit } from './components/Sections.jsx';
import { QuoteDialog, ServiceDialog, GalleryDialog } from './components/Dialogs.jsx';
import DesignSystemPage from './design-system/DesignSystemPage.jsx';

export default function App() {
  const [quote, setQuote] = useState(null);
  const [service, setService] = useState(null);
  const [gallery, setGallery] = useState(null);
  const [route, setRoute] = useState(window.location.hash);
  useEffect(() => { const h = () => setRoute(window.location.hash); window.addEventListener('hashchange', h); return () => window.removeEventListener('hashchange', h); }, []);
  const openQuote = (selected = '') => { setService(null); setQuote(selected); };

  if (route === '#design-system') return <DesignSystemPage />;
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Header onQuote={openQuote} />
    <main id="main">
      <Hero onQuote={openQuote} />
      <Intro />
      <ProcessScene />
      <Services onService={setService} onQuote={openQuote} />
      <Rebates onQuote={openQuote} />
      <WorkCarousel onOpen={setGallery} />
      <Statements />
      <Journal />
      <Faq />
      <CtaSplit onQuote={openQuote} />
    </main>
    <Footer onQuote={openQuote} />
    {quote !== null && <QuoteDialog initialService={quote} onClose={() => setQuote(null)} />}
    {service && <ServiceDialog service={service} onClose={() => setService(null)} onQuote={openQuote} />}
    {gallery && <GalleryDialog item={gallery} onClose={() => setGallery(null)} />}
  </>;
}
