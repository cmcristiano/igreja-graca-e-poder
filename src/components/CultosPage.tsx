import React from 'react';
import {
  ArrowLeft,
  CalendarDays,
  ExternalLink,
  Facebook,
  Instagram,
  MessageCircle,
  PlayCircle,
  Youtube,
} from 'lucide-react';
import { cultos, getYouTubeVideoId } from '../data/cultos';

function formatDate(date: string) {
  if (!date) return '';
  const [year, month, day] = date.split('-').map(Number);
  return new Intl.DateTimeFormat('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' }).format(
    new Date(year, month - 1, day),
  );
}

const socialLinks = [
  {
    label: 'YouTube',
    href: 'https://youtube.com/@gracaepoderbc?si=BKyqACLfhbeSSGDd',
    icon: Youtube,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/gracaepoderbc/',
    icon: Facebook,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/gracaepoderbc',
    icon: Instagram,
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/554721258593',
    icon: MessageCircle,
  },
];

export const CultosPage: React.FC = () => {
  const latestThree = [...cultos]
    .sort((a, b) => b.data.localeCompare(a.data))
    .slice(0, 3);

  const latest = latestThree[0];
  const remainingCultos = latestThree.slice(1);
  const latestId = latest ? getYouTubeVideoId(latest.youtubeUrl) : null;

  return (
    <main className="min-h-screen bg-[#050812] text-white">
      <header className="border-b border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white">
            <ArrowLeft size={18} />
            Início
          </a>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">Graça e Poder</span>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-10 md:py-14">
        <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-amber-300">Cultos e mensagens</p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">Assista aos nossos últimos cultos</h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-white/65 md:text-lg">
          Acompanhe as transmissões e reveja as mensagens compartilhadas no Ministério Internacional Graça e Poder.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        {latest && latestId ? (
          <div className="mb-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
            <div className="grid md:grid-cols-[1.45fr_1fr]">
              <a href={latest.youtubeUrl} target="_blank" rel="noreferrer" className="group relative block aspect-video overflow-hidden bg-black">
                <img
                  src={`https://i.ytimg.com/vi/${latestId}/maxresdefault.jpg`}
                  alt={latest.titulo}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  onError={(event) => {
                    event.currentTarget.src = `https://i.ytimg.com/vi/${latestId}/hqdefault.jpg`;
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/15 transition group-hover:bg-black/25">
                  <PlayCircle size={64} className="drop-shadow-lg" />
                </div>
              </a>

              <div className="flex flex-col justify-center p-6 md:p-8">
                <span className="mb-3 w-fit rounded-full bg-red-500/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-red-300">Último culto</span>
                <h2 className="text-2xl font-bold md:text-3xl">{latest.titulo}</h2>
                <div className="mt-4 flex items-center gap-2 text-sm text-white/55">
                  <CalendarDays size={17} />
                  {formatDate(latest.data)}
                </div>
                <a
                  href={latest.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-black transition hover:bg-amber-300"
                >
                  Assistir no YouTube <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        ) : null}

        {latestThree.length > 0 ? (
          <div>
            {remainingCultos.length > 0 ? (
              <>
                <h2 className="mb-6 text-2xl font-bold">Cultos anteriores</h2>
                <div className="grid gap-6 sm:grid-cols-2">
                  {remainingCultos.map((culto) => {
                    const videoId = getYouTubeVideoId(culto.youtubeUrl);
                    if (!videoId) return null;

                    return (
                      <a
                        key={culto.id}
                        href={culto.youtubeUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition hover:-translate-y-1 hover:border-white/20"
                      >
                        <div className="relative aspect-video overflow-hidden bg-black">
                          <img
                            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                            alt={culto.titulo}
                            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 transition group-hover:bg-black/25 group-hover:opacity-100">
                            <PlayCircle size={48} />
                          </div>
                        </div>
                        <div className="p-5">
                          <h3 className="text-lg font-bold leading-snug">{culto.titulo}</h3>
                          <div className="mt-3 flex items-center gap-2 text-sm text-white/50">
                            <CalendarDays size={16} />
                            {formatDate(culto.data)}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </>
            ) : null}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.03] px-6 py-16 text-center">
            <PlayCircle size={48} className="mx-auto mb-4 text-white/30" />
            <h2 className="text-xl font-bold">Os cultos aparecerão aqui</h2>
            <p className="mx-auto mt-2 max-w-lg text-white/55">
              Assim que uma transmissão for cadastrada, a miniatura do YouTube e o link para assistir serão exibidos automaticamente nesta página.
            </p>
          </div>
        )}
      </section>

      <footer className="border-t border-white/10 bg-black/25">
        <div className="mx-auto max-w-6xl px-5 py-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="text-center md:text-left">
              <p className="font-bold">Ministério Internacional Graça e Poder</p>
              <p className="mt-1 text-sm text-white/50">Acompanhe nossas redes sociais</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/75 transition hover:-translate-y-0.5 hover:border-amber-300/50 hover:text-amber-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <p className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/35">
            Rua Dom Henrique, 111 · Vila Real · Balneário Camboriú-SC
          </p>
        </div>
      </footer>
    </main>
  );
};
