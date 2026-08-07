import React, { useState } from 'react';
import { MapPin, Phone, Mail, Youtube, Instagram, Facebook } from 'lucide-react';
import { churchConfig, isPending } from '../data/churchConfig';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [imageError, setImageError] = useState(false);

  const { enderecoCompleto, telefone, email } = churchConfig.contato;
  const { youtube, instagram, facebook } = churchConfig.redesSociais;

  const hasTelefone = !isPending(telefone);
  const hasEmail = !isPending(email);
  const hasYoutube = !isPending(youtube);
  const hasInstagram = !isPending(instagram);
  const hasFacebook = !isPending(facebook);
  const hasAnySocial = hasYoutube || hasInstagram || hasFacebook;

  return (
    <footer className="bg-brand-dark text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Identidade / Logotipo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {!imageError && churchConfig.logoUrl ? (
                <img
                  src={churchConfig.logoUrl}
                  alt={churchConfig.nomeOficial}
                  onError={() => setImageError(true)}
                  className="h-10 sm:h-12 w-auto object-contain brightness-110"
                />
              ) : (
                <div className="w-9 h-9 rounded-full bg-brand-primary flex items-center justify-center text-white font-heading font-extrabold text-xs shadow">
                  GP
                </div>
              )}
              <span className="font-heading font-bold text-white text-base">
                {churchConfig.nomeOficial}
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Um ambiente de fé, palavra, comunhão e busca pela presença de Deus.
            </p>
          </div>

          {/* Endereço & Contato */}
          <div className="space-y-3">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
              Localização & Contato
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <span>{enderecoCompleto}</span>
              </li>
              {hasTelefone && (
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>{telefone}</span>
                </li>
              )}
              {hasEmail && (
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-brand-primary shrink-0" />
                  <span>{email}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-3">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="hover:text-brand-primary transition-colors">Início</a></li>
              <li><a href="#nossa-igreja" className="hover:text-brand-primary transition-colors">Nossa Igreja</a></li>
              <li><a href="#cultos" className="hover:text-brand-primary transition-colors">Horários de Culto</a></li>
              <li><a href="#oracao" className="hover:text-brand-primary transition-colors">Pedido de Oração</a></li>
              <li><a href="#contribuicao" className="hover:text-brand-primary transition-colors">Contribuições</a></li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-3">
            <h4 className="text-sm font-heading font-bold text-white uppercase tracking-wider">
              Conecte-se Conosco
            </h4>
            <p className="text-xs text-slate-400">
              Acompanhe as notícias e informações do {churchConfig.nomeOficial}.
            </p>
            {hasAnySocial && (
              <div className="flex gap-3 pt-2">
                {hasYoutube && (
                  <a
                    href={youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-rose-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                    title="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                )}

                {hasInstagram && (
                  <a
                    href={instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-pink-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                    title="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                )}

                {hasFacebook && (
                  <a
                    href={facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-600 hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                    title="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                )}
              </div>
            )}
          </div>

        </div>

        {/* Rodapé Direitos */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            &copy; {currentYear} {churchConfig.nomeOficial}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Política de Privacidade</a>
            <span>•</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Termos de Uso</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
