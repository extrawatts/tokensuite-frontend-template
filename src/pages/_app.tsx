import React, { useEffect } from 'react';
import 'src/styles/global.scss';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import ModalsProvider from 'src/components/ui/organisms/modals';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'default');
  }, []);

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ModalsProvider>
        <Component {...pageProps} />
        <ReactQueryDevtools />
      </ModalsProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
