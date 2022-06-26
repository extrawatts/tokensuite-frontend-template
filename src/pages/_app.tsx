import React from 'react';
import 'src/styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ModalsProvider } from 'src/components/ui/organisms';
import { ethers } from 'ethers';
import { Web3ReactProvider } from '@web3-react/core';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from 'src/hooks/use-theme';

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  const getLibrary = (provider: any): ethers.providers.Web3Provider =>
    new ethers.providers.Web3Provider(provider);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <ModalsProvider>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <Component {...pageProps} />
            <ReactQueryDevtools />
          </ModalsProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
