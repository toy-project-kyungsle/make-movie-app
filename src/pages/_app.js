import NavBar from '@/component/layout/nav/NavBar';
import '@/style/global.scss';
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
        <NavBar />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}
