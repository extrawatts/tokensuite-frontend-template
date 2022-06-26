import React, { useEffect } from 'react';
import 'src/styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ModalsProvider } from 'src/components/ui/organisms';
import { ethers } from 'ethers';
import { Web3ReactProvider } from '@web3-react/core';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'default');
  }, []);

  const queryClient = new QueryClient();

  const getLibrary = (provider: any): ethers.providers.Web3Provider =>
    new ethers.providers.Web3Provider(provider);

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <QueryClientProvider client={queryClient}>
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
      </QueryClientProvider>
    </Web3ReactProvider>
  );
}

export default MyApp;
