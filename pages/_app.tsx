import { appWithTranslation, i18n } from 'next-i18next';
import type { AppProps } from 'next/app';
import Peer, { DataConnection } from 'peerjs';
import { useState } from 'react';
import Card from '~/game/Card';
import { GameClientContext, GameHostContext } from '~/game/Context';
import '../styles/globals.css';

if (process.env.NODE_ENV === 'development') {
  if (typeof window === 'undefined') {
    const { applyServerHMR } = require('i18next-hmr/server');
    applyServerHMR(i18n);
  } else {
    const { applyClientHMR } = require('i18next-hmr/client');
    applyClientHMR(i18n);
  }
}

const TranslatedApp = appWithTranslation(({ Component, pageProps, router }) => (
  <Component {...pageProps} router={router} />
));

function MyApp({ Component, pageProps, router }: AppProps) {
  const [peer, setPeer] = useState(null as Peer | null);
  const [conn, setConn] = useState(null as DataConnection | null); // TODO
  const [players, setPlayers] = useState({} as Record<string, Card | null>);

  return (
    <GameHostContext.Provider value={{ peer, setPeer, players, setPlayers }}>
      <GameClientContext.Provider
        value={{ conn, setConn, players, setPlayers }}
      >
        <TranslatedApp
          Component={Component}
          pageProps={pageProps}
          router={router}
        />
      </GameClientContext.Provider>
    </GameHostContext.Provider>
  );
}

export default MyApp;
