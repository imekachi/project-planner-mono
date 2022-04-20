import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client'
import { useMemo } from 'react'
import { UnknownObject } from 'type-utils'
import { isOnBrowser } from '../utils/env'

export type ApolloCacheState = NormalizedCacheObject
export type ApolloClientInstance = ApolloClient<ApolloCacheState>

let apolloClient: ApolloClientInstance
export const APOLLO_STATE_PROP_NAME = 'initialApolloState'

export type PropsWithApolloState = {
  [APOLLO_STATE_PROP_NAME]: ApolloCacheState
}

export function extractApolloStateFromProps<
  T extends object & Partial<PropsWithApolloState>
>(
  props: T
): {
  apolloState: ApolloCacheState | undefined
  restProps: Omit<T, keyof PropsWithApolloState>
} {
  const { [APOLLO_STATE_PROP_NAME]: apolloState, ...restProps } = props
  return { apolloState, restProps }
}

export function useApollo(
  initialState?: ApolloCacheState
): ApolloClientInstance {
  return useMemo(() => initializeApollo(initialState), [initialState])
}

/**
 * Add apollo state to the page props
 * so that the _app can initialize the apollo client with preloaded cache
 */
export function createPropsWithInitialApolloState<T extends UnknownObject>(
  apolloClient: ApolloClientInstance,
  props: T = {} as T
): T & PropsWithApolloState {
  return { ...props, [APOLLO_STATE_PROP_NAME]: apolloClient.cache.extract() }
}

export function initializeApollo(
  initialState?: NormalizedCacheObject
): ApolloClientInstance {
  const newApolloClient = apolloClient ?? createApolloClient()
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = newApolloClient.extract()
    // Restore the cache using the data passed from getStaticProps/getServerSideProps
    // combined with the existing cached data
    newApolloClient.cache.restore({ ...existingCache, ...initialState })
  }
  // For SSG and SSR always create a new Apollo Client
  if (!isOnBrowser()) return newApolloClient
  // Create the Apollo Client once in the client
  if (!apolloClient) {
    apolloClient = newApolloClient
  }

  return newApolloClient
}

function createApolloClient(): ApolloClientInstance {
  return new ApolloClient({
    ssrMode: !isOnBrowser(),
    uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
    cache: new InMemoryCache(),
  })
}
