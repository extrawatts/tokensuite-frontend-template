import React, { useEffect } from 'react';
import 'src/styles/global.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'default');
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
