import NavBar from '@/component/layout/nav';
import '@/style/global.scss';
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: false,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Bakbak+One&family=Readex+Pro:wght@300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <NavBar />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
