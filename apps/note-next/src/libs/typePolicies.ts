import { StrictTypedTypePolicies } from 'gql-schema'

export const typePolicies: StrictTypedTypePolicies = {
  Query: {
    fields: {
      note: {
        read(cachedNote, { args, toReference }) {
          if (cachedNote) return cachedNote
          if (!args?.where?.id) return undefined
          return toReference({ __typename: 'Note', id: args.where.id })
        },
      },
    },
  },
}
