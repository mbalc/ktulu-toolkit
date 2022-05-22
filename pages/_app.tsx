import { appWithTranslation, i18n } from 'next-i18next';
import type { AppProps } from 'next/app';
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

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
