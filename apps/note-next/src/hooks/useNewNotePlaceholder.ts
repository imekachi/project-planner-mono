import { useApolloClient } from '@apollo/client'
import { useMemo } from 'react'
import { addNotePlaceholderToApolloCache } from '../domain/createNote'
import { ApolloClientInstance } from '../libs/apollo'

/**
 * Use Apollo cache to create the new note placeholder
 */
export function useNewNotePlaceholder() {
  const apolloClient = useApolloClient()

  return useMemo(
    () => ({
      createNewNotePlaceholder: () =>
        addNotePlaceholderToApolloCache(apolloClient as ApolloClientInstance),
    }),
    [apolloClient]
  )
}
