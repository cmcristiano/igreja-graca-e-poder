import React from 'react';
import { Menu, X, Radio, MapPin } from 'lucide-react';
import { churchConfig } from '../data/churchConfig';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);
  const estaAoVivo = churchConfig.transmissao.estaAoVivo === true;

  return (
    <header className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Logotipo Oficial Recortado da Arte */}
        <a href="#inicio" className="flex items-center gap-3 shrink-0 group py-1">
          {!imageError && churchConfig.logoUrl ? (
            <img
              src={churchConfig.logoUrl}
              alt={churchConfig.nomeOficial}
              onError={() => setImageError(true)}
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          ) : (
            <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white font-heading font-extrabold text-sm shadow-md group-hover:scale-105 transition-transform">
              GP
            </div>
          )}

          <div className="hidden sm:block">
            <span className="block font-heading font-bold text-slate-900 text-xs sm:text-sm leading-tight whitespace-nowrap">
              {churchConfig.nomeOficial}
            </span>
            <span className="block text-[10px] sm:text-[11px] text-brand-primary font-semibold tracking-wide whitespace-nowrap">
              Balneário Camboriú / SC
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 text-xs xl:text-sm font-semibold text-slate-700">
          <a href="#inicio" className="hover:text-brand-primary transition-colors whitespace-nowrap">Início</a>
          <a href="#nossa-igreja" className="hover:text-brand-primary transition-colors whitespace-nowrap">Nossa Igreja</a>
          <a href="#cultos" className="hover:text-brand-primary transition-colors whitespace-nowrap">Cultos</a>
          <a href="#ministerios" className="hover:text-brand-primary transition-colors whitespace-nowrap">Ministérios</a>
          <a href="#eventos" className="hover:text-brand-primary transition-colors whitespace-nowrap">Eventos</a>
          {churchConfig.mensagens && churchConfig.mensagens.length > 0 && (
            <a href="#mensagens" className="hover:text-brand-primary transition-colors whitespace-nowrap">Mensagens</a>
          )}
          <a href="#ao-vivo" className="flex items-center gap-1.5 hover:text-brand-primary transition-colors whitespace-nowrap">
            Ao Vivo
            {estaAoVivo && (
              <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-600 animate-pulse">
                <Radio className="w-3 h-3 mr-0.5" /> LIVE
              </span>
            )}
          </a>
          <a href="#oracao" className="hover:text-brand-primary transition-colors whitespace-nowrap">Pedido de Oração</a>
          <a href="#contribuicao" className="hover:text-brand-primary transition-colors whitespace-nowrap">Contribuição</a>
          <a href="#contato" className="hover:text-brand-primary transition-colors whitespace-nowrap">Contato</a>
        </nav>

        {/* CTA "Visite-nos" Button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-brand-primary hover:bg-brand-primaryHover text-white font-semibold text-xs xl:text-sm shadow-md hover:shadow-lg transition-all whitespace-nowrap"
          >
            <MapPin className="w-4 h-4" />
            Visite-nos
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 focus:outline-none"
          aria-label="Abrir Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 font-semibold text-slate-800 shadow-xl">
          <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-brand-primary border-b border-slate-100">Início</a>
          <a href="#nossa-igreja" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-brand-primary border-b border-slate-100">Nossa Igreja</a>
          <a href="#cultos" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-brand-primary border-b border-slate-100">Cultos</a>
          <a href="#ministerios" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-brand-primary border-b border-slate-100">Ministérios</a>
          <a href="#eventos" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-brand-primary border-b border-slate-100">Eventos</a>
          {churchConfig.mensagens && churchConfig.mensagens.length > 0 && (
            <a href="#mensagens" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-brand-primary border-b border-slate-100">Mensagens</a>
          )}
          <a href="#ao-vivo" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-brand-primary border-b border-slate-100">
            Ao Vivo {estaAoVivo && <span className="text-rose-600 text-xs font-bold ml-1">(LIVE)</span>}
          </a>
          <a href="#oracao" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-brand-primary border-b border-slate-100">Pedido de Oração</a>
          <a href="#contribuicao" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-brand-primary border-b border-slate-100">Contribuição</a>
          <a href="#contato" onClick={() => setIsMenuOpen(false)} className="block py-2 hover:text-brand-primary border-b border-slate-100">Contato</a>
          <div className="pt-2">
            <a
              href="#contato"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center inline-flex justify-center items-center gap-2 px-5 py-3 rounded-lg bg-brand-primary text-white font-semibold text-sm shadow-md"
            >
              <MapPin className="w-4 h-4" />
              Visite-nos
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
