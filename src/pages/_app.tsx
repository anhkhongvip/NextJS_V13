import { LayoutMain } from '@/components/layout';
import '@/styles/globals.scss'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app'
// Create a client
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <LayoutMain>
        <Component {...pageProps} />
      </LayoutMain>
    </QueryClientProvider>
  )
}
