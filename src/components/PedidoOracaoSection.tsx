import React, { useState } from 'react';
import { Send, ShieldCheck, HeartHandshake, AlertCircle } from 'lucide-react';

export const PedidoOracaoSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    contato: '',
    pedido: '',
    confidencial: true,
    consentimento: false,
    honeypot: '', // Campo anti-spam invisível
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Verificação honeypot anti-spam
    if (formData.honeypot) {
      console.warn('Bot detectado via honeypot.');
      return;
    }

    if (!formData.pedido.trim() || !formData.consentimento) {
      setStatus('error');
      return;
    }

    // Simulação segura de preparação para backend (sem armazenar no cliente)
    console.log('Pedido de oração pronto para envio seguro ao backend:', {
      confidencial: formData.confidencial,
      timestamp: new Date().toISOString()
    });

    setStatus('success');
    setFormData({
      nome: '',
      contato: '',
      pedido: '',
      confidencial: true,
      consentimento: false,
      honeypot: '',
    });
  };

  return (
    <section id="oracao" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto">
          
          {/* Cabeçalho */}
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-xs uppercase tracking-widest mb-3">
              Cuidado Pastoral
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
              Pedido de Oração
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Deixe aqui a sua intenção. Nossa equipe pastoral e de intercessão estará orando pela sua vida.
            </p>
          </div>

          {/* Card do Formulário */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-8 sm:p-10 space-y-6">
            
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <p>
                <strong>Compromisso de Confidencialidade:</strong> Seus pedidos de oração são tratados com absoluto respeito e sigilo. Eles não são exibidos publicamente em hipótese alguma.
              </p>
            </div>

            {status === 'success' && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm flex items-center gap-3">
                <HeartHandshake className="w-5 h-5 text-emerald-600 shrink-0" />
                <p>
                  <strong>Pedido Recebido!</strong> Agradecemos por compartilhar conosco. Estaremos em oração pela sua intenção.
                </p>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-sm flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <p>
                  Por favor, preencha a sua intenção de oração e aceite o consentimento para envio.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Campo Honeypot invisível para anti-spam */}
              <input
                type="text"
                name="website_address"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                    Seu Nome (Opcional)
                  </label>
                  <input
                    type="text"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Digite seu nome"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-brand-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                    Telefone ou E-mail (Opcional)
                  </label>
                  <input
                    type="text"
                    value={formData.contato}
                    onChange={(e) => setFormData({ ...formData, contato: e.target.value })}
                    placeholder="Para podermos entrar em contato"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-brand-primary focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-2">
                  Pedido de Oração *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.pedido}
                  onChange={(e) => setFormData({ ...formData, pedido: e.target.value })}
                  placeholder="Escreva aqui seu pedido com toda a liberdade..."
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-brand-primary focus:outline-none"
                />
              </div>

              <div className="space-y-3 pt-2">
                <label className="flex items-center gap-3 text-xs text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.confidencial}
                    onChange={(e) => setFormData({ ...formData, confidencial: e.target.checked })}
                    className="w-4 h-4 text-brand-primary rounded border-slate-300"
                  />
                  <span>Desejo que o pedido seja tratado de forma totalmente confidencial.</span>
                </label>

                <label className="flex items-center gap-3 text-xs text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    required
                    checked={formData.consentimento}
                    onChange={(e) => setFormData({ ...formData, consentimento: e.target.checked })}
                    className="w-4 h-4 text-brand-primary rounded border-slate-300"
                  />
                  <span>Autorizo o recebimento e leitura deste pedido pela equipe pastoral.</span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full inline-flex justify-center items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white font-bold text-sm shadow-md transition-all"
              >
                <Send className="w-4 h-4" />
                Enviar Pedido de Oração
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
