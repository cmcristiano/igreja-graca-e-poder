import React from 'react';
import { Play, Video } from 'lucide-react';
import { churchConfig, isPending } from '../data/churchConfig';

export const MensagensSection: React.FC = () => {
  const mensagens = churchConfig.mensagens || [];

  if (mensagens.length === 0) return null;

  const gridContainerClass = mensagens.length === 1
    ? 'max-w-2xl mx-auto'
    : mensagens.length === 2
    ? 'grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8'
    : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';

  return (
    <section id="mensagens" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-xs uppercase tracking-widest mb-3">
            Edificação Espiritual
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            Mensagens e Pregações
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Assista aos ensinamentos e ministrações da Palavra.
          </p>
        </div>

        {/* Grid Adaptável */}
        <div className={gridContainerClass}>
          {mensagens.map((msg) => (
            <div
              key={msg.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all flex flex-col"
            >
              <div className="relative h-56 overflow-hidden bg-slate-900 group">
                <img
                  src={msg.imagemCapa}
                  alt={msg.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-brand-primary text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
                {!isPending(msg.tema) && (
                  <div className="absolute bottom-3 left-3 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur">
                    {msg.tema}
                  </div>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-heading font-bold text-slate-900">
                    {msg.titulo}
                  </h3>
                  {!isPending(msg.textoBiblico) && (
                    <p className="text-xs text-brand-primary font-semibold">
                      Texto Bíblico: {msg.textoBiblico}
                    </p>
                  )}
                  {!isPending(msg.descricao) && (
                    <p className="text-slate-600 text-sm line-clamp-2">
                      {msg.descricao}
                    </p>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                  {!isPending(msg.pregador) && <span>Pregador: {msg.pregador}</span>}
                  <span className="flex items-center gap-1 text-slate-700 ml-auto">
                    <Video className="w-3.5 h-3.5" /> Vídeo
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
