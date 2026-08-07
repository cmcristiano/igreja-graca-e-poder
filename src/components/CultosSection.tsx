import React from 'react';
import { Calendar, Clock, MapPin, Sparkles } from 'lucide-react';
import { churchConfig, isPending } from '../data/churchConfig';

export const CultosSection: React.FC = () => {
  return (
    <section id="cultos" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho de Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-xs uppercase tracking-widest mb-3">
            Nossa Programação
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            Cultos e Encontros de Oração
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Momentos especiais de adoração, comunhão e busca pela presença de Deus. Participe conosco!
          </p>
        </div>

        {/* Grid de Cultos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {churchConfig.cultos.map((culto) => (
            <div
              key={culto.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 flex flex-col"
            >
              {/* Imagem do Culto */}
              <div className="relative h-64 overflow-hidden bg-slate-900">
                <img
                  src={culto.imagemUrl}
                  alt={culto.nome}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                {culto.destaque && (
                  <div className="absolute top-4 right-4 bg-brand-gold text-slate-950 font-extrabold text-xs px-3 py-1.5 rounded-full flex items-center gap-1 shadow-md">
                    <Sparkles className="w-3.5 h-3.5" /> Destaque
                  </div>
                )}

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-2xl font-heading font-extrabold tracking-tight drop-shadow-md">
                    {culto.nome}
                  </h3>
                </div>
              </div>

              {/* Informações */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
                    {!isPending(culto.dia) && (
                      <span className="flex items-center gap-1.5 text-brand-primary">
                        <Calendar className="w-4 h-4" />
                        {culto.dia}
                      </span>
                    )}
                    {!isPending(culto.horario) && (
                      <span className="flex items-center gap-1.5 text-slate-900">
                        <Clock className="w-4 h-4 text-brand-gold" />
                        Horário: {culto.horario}
                      </span>
                    )}
                  </div>

                  {!isPending(culto.descricao) && (
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {culto.descricao}
                    </p>
                  )}

                  {!isPending(culto.versiculo) && (
                    <blockquote className="p-3 bg-slate-50 border-l-4 border-brand-primary rounded-r-lg text-xs italic text-slate-700">
                      "{culto.versiculo}"{!isPending(culto.referenciaBiblica) && <span> — <strong className="not-italic font-bold">{culto.referenciaBiblica}</strong></span>}
                    </blockquote>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
                    <MapPin className="w-4 h-4 text-brand-primary shrink-0" />
                    <span>{culto.endereco}</span>
                  </div>

                  <a
                    href="#contato"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary hover:text-brand-primaryHover transition-colors"
                  >
                    Ver localização &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
