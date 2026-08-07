import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CultosSection } from './components/CultosSection';
import { NossaIgrejaSection } from './components/NossaIgrejaSection';
import { MinisteriosSection } from './components/MinisteriosSection';
import { EventosSection } from './components/EventosSection';
import { MensagensSection } from './components/MensagensSection';
import { AoVivoSection } from './components/AoVivoSection';
import { PedidoOracaoSection } from './components/PedidoOracaoSection';
import { ContribuicoesSection } from './components/ContribuicoesSection';
import { ContatoSection } from './components/ContatoSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-brand-primary selection:text-white">
      <Header />
      <main>
        <Hero />
        <CultosSection />
        <NossaIgrejaSection />
        <MinisteriosSection />
        <EventosSection />
        <MensagensSection />
        <AoVivoSection />
        <PedidoOracaoSection />
        <ContribuicoesSection />
        <ContatoSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
