import React from 'react';
import { Radio, Tv, Youtube } from 'lucide-react';
import { churchConfig, isPending } from '../data/churchConfig';

export const AoVivoSection: React.FC = () => {
  const { estaAoVivo, canalYoutube } = churchConfig.transmissao;
  const hasYoutubeLink = !isPending(canalYoutube);

  return (
    <section id="ao-vivo" className="py-20 bg-brand-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-slate-200 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <Radio className={`w-4 h-4 ${estaAoVivo ? 'text-rose-500 animate-pulse' : 'text-slate-400'}`} />
            <span>Transmissão Oficial</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight">
            Cultos Ao Vivo
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Acompanhe nossas celebrações presenciais ou online.
          </p>

          <div className="p-8 sm:p-12 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-6 shadow-2xl">
            <div className="w-20 h-20 mx-auto rounded-full bg-brand-primary/20 border border-brand-primary/40 flex items-center justify-center text-brand-primary">
              <Tv className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                {estaAoVivo ? 'Transmissão Ao Vivo Ativa!' : 'No momento não há transmissão ao vivo'}
              </h3>
              <p className="text-sm text-slate-400">
                Você pode participar dos nossos cultos presencialmente no templo ou acompanhar os horários da semana.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              {hasYoutubeLink && (
                <a
                  href={canalYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-lg transition-all"
                >
                  <Youtube className="w-5 h-5" />
                  Acessar Canal do YouTube
                </a>
              )}

              <a
                href="#cultos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all"
              >
                Ver Horários dos Cultos
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
