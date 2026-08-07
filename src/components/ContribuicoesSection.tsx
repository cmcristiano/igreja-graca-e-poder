import React, { useState } from 'react';
import { Copy, Check, AlertTriangle, HeartHandshake } from 'lucide-react';
import { churchConfig, isPending } from '../data/churchConfig';

export const ContribuicoesSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { explicacao, chavePix, favorecido, banco } = churchConfig.contribuicao;

  const hasChavePix = !isPending(chavePix);
  const hasFavorecido = !isPending(favorecido);
  const hasBanco = !isPending(banco);
  const hasExplicacao = !isPending(explicacao);

  const handleCopyPix = () => {
    if (hasChavePix) {
      navigator.clipboard.writeText(chavePix);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section id="contribuicao" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto">
          
          {/* Cabeçalho */}
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-xs uppercase tracking-widest mb-3">
              Generosidade & Sustento
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
              Dízimos e Ofertas
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Sua contribuição voluntária viabiliza as atividades e a manutenção do {churchConfig.nomeOficial}.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8 sm:p-10 space-y-8 shadow-sm">
            
            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full bg-brand-gold/10 text-brand-amber flex items-center justify-center">
                <HeartHandshake className="w-6 h-6" />
              </div>
              {hasExplicacao && (
                <p className="text-sm text-slate-600 italic">
                  "{explicacao}"
                </p>
              )}
            </div>

            {/* Caixa PIX se cadastrada */}
            {hasChavePix ? (
              <div className="p-6 rounded-xl bg-white border border-slate-200 space-y-4 text-center">
                <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Chave Pix Oficial
                </span>
                
                <div className="inline-flex items-center gap-3 px-4 py-3 bg-slate-100 rounded-lg border border-slate-300 font-mono text-sm sm:text-base font-bold text-slate-800">
                  <span>{chavePix}</span>
                </div>

                <div>
                  <button
                    onClick={handleCopyPix}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-brand-primary hover:bg-brand-primaryHover text-white font-bold text-xs shadow transition-all"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? 'Chave Copiada!' : 'Copiar Chave Pix'}</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-6 rounded-xl bg-white border border-slate-200 text-center text-sm text-slate-600">
                Informações para contribuição bancária/Pix podem ser solicitadas presencialmente nos cultos ou através dos nossos canais de atendimento.
              </div>
            )}

            {/* Informações Bancárias */}
            {(hasFavorecido || hasBanco) && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-slate-700 font-medium border-t border-slate-200 pt-6">
                {hasFavorecido && (
                  <div>
                    <span className="block text-xs font-bold text-slate-500 uppercase">Favorecido:</span>
                    <span>{favorecido}</span>
                  </div>
                )}

                {hasBanco && (
                  <div>
                    <span className="block text-xs font-bold text-slate-500 uppercase">Banco / Agência / Conta:</span>
                    <span>{banco}</span>
                  </div>
                )}
              </div>
            )}

            {/* Alerta de Verificação */}
            {hasChavePix && (
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <p>
                  <strong>Observação Importante:</strong> Por favor, verifique sempre os dados do favorecido antes de confirmar a sua transferência no aplicativo bancário.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
