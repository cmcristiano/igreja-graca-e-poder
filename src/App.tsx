import React from 'react';
import { UnifiedChurchSite } from './components/UnifiedChurchSite';

export const App: React.FC = () => {
  const isMaintenanceMode = true;

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
      </main>
    );
  }

  return <UnifiedChurchSite />;
};
