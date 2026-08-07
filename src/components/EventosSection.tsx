import React, { useState } from 'react';
import { Calendar, Share2, Check, DollarSign } from 'lucide-react';
import { churchConfig, isPending } from '../data/churchConfig';

export const EventosSection: React.FC = () => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const eventos = churchConfig.eventos || [];

  if (eventos.length === 0) return null;

  const handleShare = (id: string) => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 3000);
  };

  const gridContainerClass = eventos.length === 1
    ? 'max-w-xl mx-auto'
    : 'grid grid-cols-1 md:grid-cols-2 gap-8';

  return (
    <section id="eventos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-xs uppercase tracking-widest mb-3">
            Agenda da Igreja
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            Eventos
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Acompanhe nossas reprogramações, encontros e celebrações especiais.
          </p>
        </div>

        {/* Grid de Eventos */}
        <div className={gridContainerClass}>
          {eventos.map((evento) => {
            const hasData = !isPending(evento.data);
            const hasInvestimento = !isPending(evento.investimento);
            const hasDescricao = !isPending(evento.descricao);
            const hasLinkInscricao = !isPending(evento.linkInscricao);

            return (
              <div
                key={evento.id}
                className="bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all flex flex-col"
              >
                <div className="relative h-64 overflow-hidden bg-slate-900">
                  <img
                    src={evento.imagemUrl}
                    alt={evento.nome}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-heading font-extrabold">
                      {evento.nome}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    {hasData && (
                      <div className="flex flex-wrap gap-4 text-sm font-semibold text-slate-700">
                        <span className="flex items-center gap-1.5 text-brand-primary">
                          <Calendar className="w-4 h-4" />
                          {evento.data}
                        </span>
                      </div>
                    )}

                    {hasDescricao && (
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {evento.descricao}
                      </p>
                    )}

                    {hasInvestimento && (
                      <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-900 font-semibold flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>
                          {evento.investimento}
                          {!isPending(evento.observacao) && <span className="text-emerald-700 font-normal"> — {evento.observacao}</span>}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-3 pt-2">
                    {hasLinkInscricao && (
                      <a
                        href={evento.linkInscricao}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2.5 rounded-lg bg-brand-primary hover:bg-brand-primaryHover text-white font-bold text-xs shadow transition-all"
                      >
                        Inscrever-se
                      </a>
                    )}

                    <button
                      onClick={() => handleShare(evento.id)}
                      className={`px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold transition-all flex items-center gap-1.5 ${!hasLinkInscricao ? 'w-full justify-center' : ''}`}
                      title="Compartilhar evento"
                    >
                      {copiedId === evento.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                      <span>{copiedId === evento.id ? 'Link Copiado!' : 'Compartilhar Evento'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
