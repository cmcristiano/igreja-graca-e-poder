import React from 'react';
import { Users, Clock, Sparkles } from 'lucide-react';
import { churchConfig, isPending } from '../data/churchConfig';

export const MinisteriosSection: React.FC = () => {
  const ministerios = churchConfig.ministerios || [];

  if (ministerios.length === 0) return null;

  // Ajuste automático do layout conforme a quantidade de ministérios (1, 2 ou 3+)
  const gridContainerClass = ministerios.length === 1
    ? 'max-w-md mx-auto'
    : ministerios.length === 2
    ? 'grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8'
    : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8';

  return (
    <section id="ministerios" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-xs uppercase tracking-widest mb-3">
            Comunhão & Crescimento
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            Ministérios
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Conheça os departamentos e grupos de atuação do {churchConfig.nomeOficial}.
          </p>
        </div>

        {/* Grid Adaptável */}
        <div className={gridContainerClass}>
          {ministerios.map((ministerio) => (
            <div
              key={ministerio.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all flex flex-col"
            >
              <div className="relative h-60 overflow-hidden bg-slate-900">
                <img
                  src={ministerio.imagemUrl}
                  alt={ministerio.nome}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  {!isPending(ministerio.faixaEtaria) && (
                    <span className="inline-block px-2.5 py-1 rounded bg-brand-primary text-[10px] font-extrabold uppercase mb-1">
                      {ministerio.faixaEtaria}
                    </span>
                  )}
                  <h3 className="text-2xl font-heading font-extrabold">
                    {ministerio.nome}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {!isPending(ministerio.descricao) && (
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {ministerio.descricao}
                    </p>
                  )}

                  <div className="space-y-1.5 text-xs text-slate-700 font-semibold pt-2 border-t border-slate-100">
                    {(!isPending(ministerio.diasAtividades) || !isPending(ministerio.horario)) && (
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-brand-gold" />
                        <span>
                          {ministerio.diasAtividades}
                          {!isPending(ministerio.horario) && ` — ${ministerio.horario}`}
                        </span>
                      </div>
                    )}

                    {!isPending(ministerio.responsavel) && (
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-brand-primary" />
                        <span>Responsável: {ministerio.responsavel}</span>
                      </div>
                    )}
                  </div>
                </div>

                <a
                  href="#contato"
                  className="w-full text-center inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-brand-primary hover:text-white font-semibold text-xs text-slate-800 transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Saiba mais
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
