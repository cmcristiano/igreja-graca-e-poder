import React from 'react';
import { Calendar, ChevronRight, Sparkles } from 'lucide-react';
import { churchConfig, isPending } from '../data/churchConfig';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-brand-dark">
      {/* Background Image com sobreposição escura reforçada para legibilidade perfeita */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('./images/cultos/culto-fe-e-poder.png')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/70" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <div className="max-w-3xl space-y-8">
          
          {/* Badge Informativa */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-primary/20 border border-brand-primary/40 text-brand-primary text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span>{churchConfig.nomeOficial}</span>
          </div>

          {/* Título Principal */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-tight tracking-tight drop-shadow-md">
            {churchConfig.nomeOficial}
          </h1>

          {/* Subtítulo / Versículo do Hero */}
          {!isPending(churchConfig.subtituloHero) && (
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl italic">
              "{churchConfig.subtituloHero}"
            </p>
          )}

          {/* Frase Principal se fornecida */}
          {!isPending(churchConfig.frasePrincipal) && (
            <p className="text-base text-slate-400 max-w-xl">
              {churchConfig.frasePrincipal}
            </p>
          )}

          {/* Botões CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href="#nossa-igreja"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white font-bold text-base shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Conheça nossa igreja
              <ChevronRight className="w-5 h-5" />
            </a>

            <a
              href="#cultos"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 backdrop-blur-md transition-all"
            >
              <Calendar className="w-5 h-5 text-brand-gold" />
              Veja nossos cultos
            </a>
          </div>

          {/* Destaque Rápido dos Horários e Endereço */}
          <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-white/10">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="block text-xs uppercase tracking-wider text-brand-gold font-bold mb-1">
                Culto Fé e Poder
              </span>
              <span className="text-white font-semibold text-sm sm:text-base">
                Horário: 19h
              </span>
              <span className="block text-xs text-slate-400 mt-1">
                "Se creres, verás a glória de Deus" — Jo 11:40
              </span>
            </div>

            <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="block text-xs uppercase tracking-wider text-brand-gold font-bold mb-1">
                Reunião de Oração
              </span>
              <span className="text-white font-semibold text-sm sm:text-base">
                Terça-feira às 20h
              </span>
              <span className="block text-xs text-slate-400 mt-1">
                "Nunca deixem de orar" — 1Ts 5:17
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
