export type Culto = {
  id: string;
  titulo: string;
  data: string;
  youtubeUrl: string;
};

export const cultos: Culto[] = [
  {
    id: 'mtRsqFRepfM',
    titulo: 'Culto de Celebração',
    data: '2026-09-13',
    youtubeUrl: 'https://youtube.com/live/mtRsqFRepfM?feature=share',
  },
  {
    id: 'CBbx5fQbaHc',
    titulo: 'Culto de Celebração',
    data: '2026-09-06',
    youtubeUrl: 'https://youtube.com/live/CBbx5fQbaHc?feature=share',
  },
  {
    id: '-yO3X0wNBHA',
    titulo: 'BENEFÍCIOS DA FIDELIDADE A DEUS = AP SAULO JORGE - GRAÇA E PODER',
    data: '2026-08-30',
    youtubeUrl: 'https://www.youtube.com/live/-yO3X0wNBHA?is=yIhJWFN0YJXoSSGG',
  },
];

export function getYouTubeVideoId(url: string): string | null {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes('youtu.be')) {
      return parsed.pathname.replace('/', '') || null;
    }

    if (parsed.hostname.includes('youtube.com')) {
      if (parsed.pathname === '/watch') return parsed.searchParams.get('v');
      if (parsed.pathname.startsWith('/live/')) return parsed.pathname.split('/live/')[1]?.split('/')[0] || null;
      if (parsed.pathname.startsWith('/shorts/')) return parsed.pathname.split('/shorts/')[1]?.split('/')[0] || null;
      if (parsed.pathname.startsWith('/embed/')) return parsed.pathname.split('/embed/')[1]?.split('/')[0] || null;
    }
  } catch {
    return null;
  }

  return null;
}
