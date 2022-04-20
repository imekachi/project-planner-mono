import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import { extractApolloStateFromProps, useApollo } from '../libs/apollo'
import '../styles/tailwind.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const { apolloState, restProps } = extractApolloStateFromProps(pageProps)
  const apolloClient = useApollo(apolloState)

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...restProps} />
    </ApolloProvider>
  )
}

export default MyApp
