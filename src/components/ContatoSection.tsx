import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Navigation, MessageCircle, AlertCircle, CheckCircle } from 'lucide-react';
import { churchConfig, isPending } from '../data/churchConfig';

export const ContatoSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: '',
    honeypot: '',
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const { enderecoCompleto, telefone, whatsapp, email, horarioAtendimento, googleMapsEmbedUrl, googleMapsDirectLink } = churchConfig.contato;

  const hasTelefone = !isPending(telefone);
  const hasWhatsapp = !isPending(whatsapp);
  const hasEmail = !isPending(email);
  const hasHorarioAtendimento = !isPending(horarioAtendimento);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.honeypot) {
      console.warn('Bot detectado via honeypot.');
      return;
    }

    if (!formData.nome.trim() || !formData.email.trim() || !formData.mensagem.trim()) {
      setStatus('error');
      return;
    }

    console.log('Mensagem enviada com sucesso:', {
      nome: formData.nome,
      email: formData.email,
      timestamp: new Date().toISOString()
    });

    setStatus('success');
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      assunto: '',
      mensagem: '',
      honeypot: '',
    });
  };

  return (
    <section id="contato" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary font-bold text-xs uppercase tracking-widest mb-3">
            Fale Conosco & Visite-nos
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 tracking-tight">
            Contato e Localização
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Estamos de portas abertas para receber você e sua família.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Informações Oficiais de Contato */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-xl font-heading font-bold text-slate-900 border-b border-slate-100 pb-3">
                Informações Oficiais
              </h3>

              <div className="space-y-4 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-slate-900 font-semibold">Endereço Templo Principal:</strong>
                    <span>{enderecoCompleto}</span>
                  </div>
                </div>

                {hasTelefone && (
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-brand-primary shrink-0" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">Telefone:</strong>
                      <span>{telefone}</span>
                    </div>
                  </div>
                )}

                {hasWhatsapp && (
                  <div className="flex items-center gap-3">
                    <MessageCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">WhatsApp:</strong>
                      <span>{whatsapp}</span>
                    </div>
                  </div>
                )}

                {hasEmail && (
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-brand-primary shrink-0" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">E-mail:</strong>
                      <span>{email}</span>
                    </div>
                  </div>
                )}

                {hasHorarioAtendimento && (
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-brand-gold shrink-0" />
                    <div>
                      <strong className="block text-slate-900 font-semibold">Atendimento Secretaria:</strong>
                      <span>{horarioAtendimento}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <a
                href={googleMapsDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white font-bold text-xs shadow transition-all"
              >
                <Navigation className="w-4 h-4" />
                Como Chegar pelo Google Maps
              </a>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xl font-heading font-bold text-slate-900 border-b border-slate-100 pb-3">
              Envie uma Mensagem
            </h3>

            {status === 'success' && (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-sm flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>Mensagem enviada com sucesso! Responderemos em breve.</span>
              </div>
            )}

            {status === 'error' && (
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-sm flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-rose-600 shrink-0" />
                <span>Por favor, preencha seu nome, e-mail e mensagem.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <input
                type="text"
                name="user_check"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Nome *</label>
                <input
                  type="text"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  placeholder="Seu nome completo"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-brand-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">E-mail *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seuemail@exemplo.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-brand-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Assunto</label>
                <input
                  type="text"
                  value={formData.assunto}
                  onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                  placeholder="Motivo do contato"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-brand-primary focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Mensagem *</label>
                <textarea
                  rows={3}
                  required
                  value={formData.mensagem}
                  onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                  placeholder="Digite sua mensagem aqui..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-brand-primary focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-brand-primary hover:bg-brand-primaryHover text-white font-bold text-xs shadow transition-all"
              >
                <Send className="w-4 h-4" />
                Enviar Mensagem
              </button>

            </form>
          </div>

          {/* Mapa Incorporado */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between overflow-hidden">
            <h3 className="text-xl font-heading font-bold text-slate-900 p-4 border-b border-slate-100">
              Localização no Mapa
            </h3>
            <div className="w-full h-80 rounded-xl overflow-hidden bg-slate-100 mt-2">
              <iframe
                title="Mapa Templo Igreja"
                src={googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
