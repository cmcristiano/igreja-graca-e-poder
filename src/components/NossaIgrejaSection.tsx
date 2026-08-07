import React from 'react';
import { Church, BookOpen, Compass, ShieldCheck, UserCheck } from 'lucide-react';
import { churchConfig, isPending } from '../data/churchConfig';

export const NossaIgrejaSection: React.FC = () => {
  const { quemSomos, historia, missao, visao, valores, lideranca } = churchConfig.institucional;

  const hasQuemSomos = !isPending(quemSomos);
  const hasHistoria = !isPending(historia);
  const hasMissaoOrVisao = !isPending(missao) || !isPending(visao);

  const hasCardContent = hasQuemSomos || hasHistoria || hasMissaoOrVisao;
  const hasValores = valores && valores.length > 0;
  const hasLideranca = lideranca && lideranca.length > 0 && lideranca.some(l => !isPending(l.nome));

  return (
    <section id="nossa-igreja" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-xs uppercase tracking-widest mb-3">
            Institucional
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            Nossa Igreja
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Saiba mais sobre os princípios e a comunidade do {churchConfig.nomeOficial}.
          </p>
        </div>

        {/* Cards de Apresentação */}
        {hasCardContent && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {hasQuemSomos && (
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-lg transition-all space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                  <Church className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900">Quem Somos</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{quemSomos}</p>
              </div>
            )}

            {hasHistoria && (
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-lg transition-all space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-amber/10 text-brand-amber flex items-center justify-center">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900">Nossa História</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{historia}</p>
              </div>
            )}

            {hasMissaoOrVisao && (
              <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:shadow-lg transition-all space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/10 text-brand-primary flex items-center justify-center">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900">Missão & Visão</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  {!isPending(missao) && <p><strong>Missão:</strong> {missao}</p>}
                  {!isPending(visao) && <p><strong>Visão:</strong> {visao}</p>}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Valores */}
        {hasValores && (
          <div className="p-8 rounded-2xl bg-brand-dark text-white mb-16">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-6 h-6 text-brand-gold" />
              <h3 className="text-2xl font-heading font-bold">Nossos Valores</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {valores.map((valor, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10 text-sm font-medium text-slate-200 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-gold" />
                  {valor}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Liderança Pastoral */}
        {hasLideranca && (
          <div>
            <h3 className="text-2xl font-heading font-bold text-center text-slate-900 mb-8 flex items-center justify-center gap-2">
              <UserCheck className="w-6 h-6 text-brand-primary" />
              Liderança Pastoral
            </h3>
            
            <div className="max-w-md mx-auto">
              {lideranca.filter(l => !isPending(l.nome)).map((leader) => (
                <div key={leader.id} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center space-y-3">
                  {leader.fotoUrl && (
                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-brand-primary">
                      <img src={leader.fotoUrl} alt={leader.nome} className="w-full h-full object-cover" />
                    </div>
                  )}
                  <h4 className="font-heading font-bold text-lg text-slate-900">{leader.nome}</h4>
                  {!isPending(leader.cargo) && <p className="text-xs font-semibold text-brand-primary uppercase tracking-wider">{leader.cargo}</p>}
                  {!isPending(leader.bio) && <p className="text-xs text-slate-600">{leader.bio}</p>}
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
