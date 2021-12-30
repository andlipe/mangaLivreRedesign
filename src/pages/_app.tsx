import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'
import { GlobalStyle } from '../app/styles/global'
import themes from '../app/styles/themes'
import Layout from '../app/components/Layout'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnReconnect: false,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={themes}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
