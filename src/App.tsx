import React from 'react';
import { CultosPage } from './components/CultosPage';
import { UnifiedChurchSite } from './components/UnifiedChurchSite';

export const App: React.FC = () => {
  const params = new URLSearchParams(window.location.search);
  const redirectedPath = params.get('redirect');

  if (redirectedPath) {
    const safePath = redirectedPath.startsWith('/') ? redirectedPath : '/';
    window.history.replaceState(null, '', safePath);
  }

  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  if (path === '/culto') {
    return <CultosPage />;
  }

  const isMaintenanceMode = false;

  if (isMaintenanceMode) {
    return (
      <main
        aria-label="Site em manutenção"
        style={{
          alignItems: 'center',
          background: '#030a17',
          display: 'flex',
          height: '100dvh',
          justifyContent: 'center',
          overflow: 'hidden',
          width: '100vw',
        }}
      >
        <img
          alt="Nosso site está em manutenção"
          src="./images/maintenance/site-em-manutencao.png"
          style={{
            display: 'block',
            height: '100%',
            objectFit: 'contain',
            width: '100%',
          }}
        />
        <a
          aria-label="Como chegar à Igreja Graça e Poder pelo Google Maps"
          href="https://www.google.com/maps/search/?api=1&query=Rua%20Dom%20Henrique%20111%2C%20Vila%20Real%2C%20Balne%C3%A1rio%20Cambori%C3%BA%20SC"
          rel="noreferrer"
          target="_blank"
          style={{
            background: 'rgba(16, 12, 8, 0.88)',
            border: '1px solid #d9aa50',
            borderRadius: '999px',
            bottom: 'clamp(1rem, 3vw, 2rem)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.28)',
            color: '#f6d68d',
            fontFamily: 'Arial, sans-serif',
            fontSize: 'clamp(0.8rem, 2.5vw, 1rem)',
            fontWeight: 700,
            letterSpacing: '0.02em',
            padding: '0.72rem 1rem',
            position: 'absolute',
            right: 'clamp(1rem, 3vw, 2rem)',
            textDecoration: 'none',
            zIndex: 1,
          }}
        >
          📍 Como chegar
        </a>
      </main>
    );
  }

  return <UnifiedChurchSite />;
};
