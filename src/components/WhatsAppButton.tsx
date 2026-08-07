import React from 'react';
import { MessageCircle } from 'lucide-react';
import { churchConfig, isPending } from '../data/churchConfig';

export const WhatsAppButton: React.FC = () => {
  const rawWa = churchConfig.contato.whatsapp;
  const isWaPending = isPending(rawWa);

  if (isWaPending) {
    return null;
  }

  const whatsappNumber = rawWa.replace(/\D/g, '');
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-brand-whatsapp hover:bg-brand-whatsappHover text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
      aria-label="Falar pelo WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
      <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md">
        Fale conosco no WhatsApp
      </span>
    </a>
  );
};
