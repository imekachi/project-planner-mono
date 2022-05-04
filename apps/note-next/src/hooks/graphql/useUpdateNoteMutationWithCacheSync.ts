import { useApolloClient } from '@apollo/client'
import { NotesDocument, NotesQuery, useUpdateNoteMutation } from 'gql-schema'

export function useUpdateNoteMutationWithCacheSync() {
  const apolloClient = useApolloClient()

  return useUpdateNoteMutation({
    onCompleted: ({ updateNote }) => {
      if (!updateNote) return undefined

      // Get notes query cache
      const notesQueryCache = apolloClient.readQuery<NotesQuery>({
        query: NotesDocument,
      })
      // If there is no cache, no need to update
      if (!notesQueryCache) return undefined

      // Create the updated notes by merging the cache with data from the response
      const existingNote = notesQueryCache.notes.find(
        (note) => note.id === updateNote.id
      )
      const updatedNote = { ...existingNote, ...updateNote }

      // Reorder the cache by putting the updated note first by id to match the order when refreshes (orderBy updatedAt desc)
      const newNotes = [
        updatedNote,
        ...notesQueryCache.notes.filter((note) => note.id !== updateNote.id),
      ]

      // Update the cache
      apolloClient.writeQuery({
        query: NotesDocument,
        data: { notes: newNotes },
      })
    },
  })
}
