import React, { useState } from 'react';
import {
  CalendarDays,
  ExternalLink,
  Facebook,
  Images,
  Link as LinkIcon,
  MapPin,
  Menu,
  MessageCircle,
  Route,
  X,
  Youtube,
} from 'lucide-react';

const WHATSAPP_BASE_URL = 'https://wa.me/554721258593';
const createWhatsAppUrl = (message: string) => `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
const WHATSAPP_URL = createWhatsAppUrl(
  'Olá! Estou visitando o site da Igreja Graça e Poder e gostaria de receber mais informações sobre a igreja.',
);
const BAPTISM_WHATSAPP_URL = createWhatsAppUrl(
  'Olá! Estou visitando o site da Igreja Graça e Poder e gostaria de receber mais informações sobre o batismo. Como posso participar?',
);
const RETREAT_WHATSAPP_URL = createWhatsAppUrl(
  'Olá! Estou visitando o site da Igreja Graça e Poder e gostaria de saber mais sobre o Retiro da Família. Poderiam me enviar as informações?',
);
const SCHEDULE_WHATSAPP_URL = createWhatsAppUrl(
  'Olá! Estou visitando o site da Igreja Graça e Poder e gostaria de confirmar a programação dos cultos e eventos.',
);
const MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Rua%20Dom%20Henrique%20111%20Vila%20Real%20Balne%C3%A1rio%20Cambori%C3%BA';
const ASSET_ROOT = './images/site-unificado';
const LATEST_SERVICE_VIDEO_ID = '7Yfv4lcvum8';
const LATEST_SERVICE_URL = `https://www.youtube.com/watch?v=${LATEST_SERVICE_VIDEO_ID}`;

type ScheduleItem = {
  day: string;
  time: string;
  title: string;
  description: string;
  image: string;
};

const schedule: ScheduleItem[] = [
  {
    day: 'Domingo',
    time: '09h e 19h',
    title: 'Culto de Celebração',
    description: 'Um culto para toda a família, no qual caminhamos juntos para celebrar e adorar a Deus, fortalecer a fé e viver comunhão.',
    image: `${ASSET_ROOT}/domingo-culto-familia.jpeg`,
  },
  {
    day: 'Terça-feira',
    time: '20h',
    title: 'Reunião de Oração',
    description: 'Encontro dedicado à oração, à intercessão e à busca por Deus. Juntos, apresentamos nossas necessidades, agradecemos e oramos uns pelos outros.',
    image: `${ASSET_ROOT}/oracao.png`,
  },
  {
    day: 'Sábado',
    time: '14h',
    title: 'Projeto Oficinas',
    description: 'Aulas gratuitas de bateria, teclado e violão, abertas a toda a igreja. Um espaço de aprendizado, convivência e desenvolvimento de novos talentos.',
    image: `${ASSET_ROOT}/projeto-oficinas.jpg`,
  },
  {
    day: 'Sábado',
    time: '15h30 às 17h30',
    title: 'JUNAD',
    description: 'Culto para juniores e adolescentes de 7 a 16 anos. O encontro reúne Palavra de Deus, pequenos grupos para compartilhar a semana, acolhimento, orientação e um momento de diversão.',
    image: `${ASSET_ROOT}/junad-16x9.png`,
  },
  {
    day: 'Sábado',
    time: '19h',
    title: 'The Way',
    description: 'Grupo de jovens da igreja, aberto a todos que se consideram jovens — dos 0 aos 100 anos. Um espaço para conhecer pessoas e viver fé, amizade e comunhão.',
    image: `${ASSET_ROOT}/the-way-projecao.jpg`,
  },
];

type EventItem = {
  title: string;
  label: string;
  description: string;
  image: string;
  actionLabel?: string;
  actionHref?: string;
};

const events: EventItem[] = [
  {
    title: 'Culto de Ceia',
    label: 'Mensal',
    description: 'Culto de Ceia realizado no segundo domingo do mês, às 09h e 19h.',
    image: `${ASSET_ROOT}/ceia.png`,
  },
  {
    title: 'Culto Fé e Poder',
    label: 'Primeiro sábado do mês',
    description: 'Culto focado em fé, oração por curas e milagres, realizado no primeiro sábado do mês, às 19h.',
    image: `${ASSET_ROOT}/fe-e-poder.png`,
  },
  {
    title: 'Batismo',
    label: 'Celebração',
    description: 'Celebração pública de fé e compromisso com Deus. Para informações sobre preparação e participação, fale diretamente com a igreja.',
    image: `${ASSET_ROOT}/batismo-projecao.png`,
    actionLabel: 'Quero saber sobre o Batismo',
    actionHref: BAPTISM_WHATSAPP_URL,
  },
  {
    title: 'Retiro da Família',
    label: '23 a 25 de outubro',
    description: 'Uma oportunidade para viver dias de comunhão e fortalecer os vínculos em família. R$ 150 por pessoa · Crianças até 10 anos não pagam.',
    image: `${ASSET_ROOT}/retiro-familia.png`,
    actionLabel: 'Quero saber mais sobre o Retiro',
    actionHref: RETREAT_WHATSAPP_URL,
  },
];

const channels = [
  { label: 'WhatsApp', value: '(47) 2125-8593', href: WHATSAPP_URL, Icon: MessageCircle },
  { label: 'YouTube', value: '@GracaePoderBC', href: 'https://www.youtube.com/@GracaePoderBC', Icon: Youtube },
  { label: 'Facebook', value: 'gracaepoderbc', href: 'https://www.facebook.com/gracaepoderbc', Icon: Facebook },
  { label: 'Linktree', value: 'Links oficiais', href: 'https://linktr.ee/gracaepoderbc', Icon: LinkIcon },
  { label: 'Google Fotos', value: 'Galeria da igreja', href: 'https://photos.app.goo.gl/fPHMT2m8oLUbu6hz8', Icon: Images },
];

const navItems = [
  { label: 'Último culto', href: '#ultimo-culto' },
  { label: 'Programação', href: '#programacao' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Contato', href: '#contato' },
];

function WhatsAppLink({ children, className = '', href = WHATSAPP_URL }: { children: React.ReactNode; className?: string; href?: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      {children}
    </a>
  );
}

function ScheduleCard({ item, featured = false }: { item: ScheduleItem; featured?: boolean }) {
  return (
    <article
      className={`overflow-hidden rounded-2xl border border-white/10 bg-[#0d1321] shadow-lg shadow-black/20 ${
        featured ? 'lg:col-span-2 lg:grid lg:grid-cols-[1.16fr_0.84fr]' : ''
      }`}
    >
      <img
        src={item.image}
        alt={`Arte de ${item.title}`}
        loading="lazy"
        className={`w-full bg-[#080c17] object-contain ${featured ? 'aspect-video lg:h-full lg:min-h-[360px]' : 'aspect-video'}`}
      />
      <div className={`flex flex-col justify-center p-6 sm:p-8 ${featured ? 'lg:p-10' : ''}`}>
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-brand-gold">
          {item.day} · {item.time}
        </p>
        <h3 className="mt-3 font-heading text-2xl font-bold text-white sm:text-3xl">{item.title}</h3>
        <p className="mt-4 leading-relaxed text-slate-300">{item.description}</p>
      </div>
    </article>
  );
}

export const UnifiedChurchSite: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050812] text-white selection:bg-brand-primary selection:text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050812]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <a href="#inicio" className="flex min-w-0 items-center gap-4" onClick={() => setMenuOpen(false)}>
            <img
              src={`${ASSET_ROOT}/logo-graca-e-poder-white.png`}
              alt="Ministério Internacional Graça e Poder"
              className="h-9 w-auto object-contain sm:h-10"
            />
            <span className="hidden border-l border-white/20 pl-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300 xl:block">
              Balneário Camboriú · SC
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold text-slate-200 lg:flex" aria-label="Navegação principal">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <WhatsAppLink className="hidden items-center gap-2 rounded-lg bg-brand-primary px-5 py-3 text-sm font-bold shadow-lg shadow-red-950/30 transition hover:bg-brand-primaryHover sm:inline-flex">
            WhatsApp
          </WhatsAppLink>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-lg border border-white/10 p-2 text-white lg:hidden"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen ? (
          <nav className="border-t border-white/10 bg-[#080c17] px-4 py-5 lg:hidden" aria-label="Navegação móvel">
            <div className="mx-auto flex max-w-7xl flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-white/10 py-3 font-semibold text-slate-100"
                >
                  {item.label}
                </a>
              ))}
              <WhatsAppLink className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-brand-primary px-5 py-3 font-bold">
                Falar no WhatsApp
              </WhatsAppLink>
            </div>
          </nav>
        ) : null}
      </header>

      <main>
        <section id="inicio" className="relative min-h-[760px] scroll-mt-20 overflow-hidden border-b border-white/10 pt-[76px]">
          <img
            src={`${ASSET_ROOT}/fe-e-poder.png`}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-25"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(245,158,11,0.10),transparent_28%),linear-gradient(90deg,#050812_0%,rgba(5,8,18,0.96)_45%,rgba(5,8,18,0.72)_100%)]" />

          <div className="relative mx-auto grid min-h-[684px] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
            <div className="max-w-3xl">
              <h1 className="font-heading text-5xl font-bold leading-[0.96] tracking-[-0.055em] text-white sm:text-6xl lg:text-[76px]">
                Graça e Poder em Balneário Camboriú<span className="text-brand-primary">.</span>
              </h1>
              <div className="mt-8 h-1 w-40 bg-gradient-to-r from-brand-primary via-brand-gold to-transparent" />
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                Uma igreja para viver fé, família, oração, comunhão e serviço no coração da Vila Real.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <WhatsAppLink className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-4 font-bold shadow-xl shadow-red-950/30 transition hover:bg-brand-primaryHover">
                  Falar no WhatsApp
                </WhatsAppLink>
                <a href="#programacao" className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 bg-white/5 px-6 py-4 font-bold text-white transition hover:bg-white/10">
                  <CalendarDays className="h-5 w-5 text-brand-gold" />
                  Ver programação
                </a>
              </div>
              <p className="mt-8 flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" />
                Rua Dom Henrique, 111 · Vila Real · Balneário Camboriú · SC
              </p>
            </div>

            <div className="mx-auto hidden w-full max-w-lg grid-cols-2 gap-4 md:grid">
              <img
                src={`${ASSET_ROOT}/oracao.png`}
                alt="Reunião de Oração — terça-feira às 20h"
                className="col-span-2 ml-auto aspect-video w-[82%] rounded-2xl border border-brand-gold/30 object-cover shadow-2xl shadow-black/50"
              />
              <img
                src={`${ASSET_ROOT}/domingo-culto-familia.jpeg`}
                alt="Culto da Família — domingo às 09h e 19h"
                className="aspect-video w-full rounded-2xl border border-white/15 bg-[#08101a] object-contain shadow-xl shadow-black/40"
              />
              <img
                src={`${ASSET_ROOT}/the-way-projecao.jpg`}
                alt="The Way — sábado às 19h"
                className="aspect-video w-full rounded-2xl border border-white/15 object-cover shadow-xl shadow-black/40"
              />
            </div>
          </div>
        </section>

        <section id="ultimo-culto" className="scroll-mt-20 border-b border-white/10 bg-[#050812] py-20 sm:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14 lg:px-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">Última transmissão</span>
              <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                Assista ao último culto<span className="text-brand-primary">.</span>
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-400">
                Acompanhe a mensagem mais recente do Ministério Internacional Graça e Poder.
              </p>
              <a
                href={LATEST_SERVICE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-lg border border-brand-gold/70 px-6 py-4 font-bold text-white transition hover:bg-brand-gold/10"
              >
                <Youtube className="h-5 w-5 text-brand-gold" aria-hidden="true" />
                Assistir no YouTube
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/40">
              <iframe
                className="aspect-video w-full border-0"
                src={`https://www.youtube-nocookie.com/embed/${LATEST_SERVICE_VIDEO_ID}`}
                title="Último culto do Ministério Internacional Graça e Poder"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </section>

        <section id="programacao" className="scroll-mt-20 border-b border-white/10 bg-[#080c17] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                Programação da igreja<span className="text-brand-primary">.</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-400">
                Conheça cada encontro, para quem ele foi preparado e como você pode participar.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {schedule.map((item, index) => (
                <ScheduleCard key={item.title} item={item} featured={index === 0} />
              ))}
            </div>
          </div>
        </section>

        <section id="eventos" className="scroll-mt-20 border-y border-white/10 bg-[#080c17] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                Eventos e celebrações<span className="text-brand-primary">.</span>
              </h2>
              <p className="mt-4 text-lg text-slate-400">Acompanhe a agenda especial da igreja.</p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-12">
              {events.map((event, index) => (
                <article
                  key={event.title}
                  className={`overflow-hidden rounded-2xl border border-white/10 bg-[#0d1321] ${
                    index === 0 || index === 3 ? 'lg:col-span-7' : 'lg:col-span-5'
                  }`}
                >
                  <img src={event.image} alt={`Arte de ${event.title}`} loading="lazy" className="aspect-video w-full object-cover" />
                  <div className="p-6 sm:p-7">
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-gold">{event.label}</span>
                    <h3 className="mt-2 font-heading text-2xl font-bold">{event.title}</h3>
                    <p className="mt-3 leading-relaxed text-slate-400">{event.description}</p>
                    {event.actionLabel ? (
                      <WhatsAppLink href={event.actionHref} className="mt-6 inline-flex w-fit items-center gap-2 rounded-lg bg-brand-primary px-5 py-3 text-sm font-bold transition hover:bg-brand-primaryHover">
                        {event.actionLabel}
                      </WhatsAppLink>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>

            <WhatsAppLink href={SCHEDULE_WHATSAPP_URL} className="mt-10 inline-flex items-center gap-2 rounded-lg bg-brand-primary px-6 py-4 font-bold transition hover:bg-brand-primaryHover">
              Confirmar programação
            </WhatsAppLink>
          </div>
        </section>

        <section id="contato" className="scroll-mt-20 bg-[#050812] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <h2 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
                Venha nos visitar<span className="text-brand-primary">.</span>
              </h2>
              <p className="mt-6 flex items-start gap-3 text-lg text-slate-200">
                <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-brand-gold" />
                Rua Dom Henrique, 111 · Vila Real · Balneário Camboriú · SC
              </p>
              <p className="mt-3 max-w-2xl leading-relaxed text-slate-400">
                Fale com a igreja pelo WhatsApp para confirmar cultos, grupos, eventos e atendimento.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <WhatsAppLink className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-primary px-6 py-4 font-bold transition hover:bg-brand-primaryHover">
                  WhatsApp da igreja
                </WhatsAppLink>
                <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-gold/70 px-6 py-4 font-bold text-white transition hover:bg-brand-gold/10">
                  <Route className="h-5 w-5 text-brand-gold" />
                  Abrir rota
                </a>
              </div>
            </div>

            <div className="mt-12 grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white p-2">
                <iframe
                  title="Localização do Ministério Internacional Graça e Poder"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3554.4983050085817!2d-48.6185!3d-27.0019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d8b6287c!2sRua%20Dom%20Henrique%2C%20111%20-%20Vila%20Real%2C%20Balne%C3%A1rio%20Cambori%C3%BA%20-%20SC!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                  className="h-[430px] w-full rounded-xl border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="divide-y divide-white/10 border-y border-white/10">
                {channels.map(({ label, value, href, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-5">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-gold/40 text-brand-gold">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <strong className="block text-white">{label}</strong>
                      <span className="mt-1 block text-sm text-slate-400">{value}</span>
                    </span>
                    <ExternalLink className="h-4 w-4 text-brand-gold transition-transform group-hover:translate-x-1" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-brand-gold/20 bg-[#03050b] py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <img src={`${ASSET_ROOT}/logo-graca-e-poder-white.png`} alt="Ministério Internacional Graça e Poder" className="h-9 w-auto self-start object-contain" />
            <div className="border-white/15 text-sm text-slate-400 sm:border-l sm:pl-5">
              <strong className="block text-white">Balneário Camboriú · SC</strong>
              Rua Dom Henrique, 111 · Vila Real
            </div>
          </div>
          <WhatsAppLink className="inline-flex w-fit items-center gap-2 font-bold text-white transition hover:text-brand-gold">
            WhatsApp · (47) 2125-8593
          </WhatsAppLink>
        </div>
      </footer>

      <WhatsAppLink className="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/40 transition hover:scale-105 sm:w-auto sm:px-5">
        <span className="hidden sm:inline">WhatsApp</span>
      </WhatsAppLink>
    </div>
  );
};
