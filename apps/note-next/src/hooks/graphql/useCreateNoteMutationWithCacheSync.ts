import { useApolloClient } from '@apollo/client'
import {
  Note,
  NoteCreateInput,
  NotesDocument,
  NotesQuery,
  useCreateNoteMutation,
} from 'gql-schema'
import { useCallback } from 'react'

export function useCreateNoteMutationWithCacheSync() {
  const apolloClient = useApolloClient()
  const [createNoteMutation, mutationState] = useCreateNoteMutation()

  const createNote = useCallback(
    async (noteData: NoteCreateInput): Promise<Note | undefined> => {
      try {
        // Create the note
        const { data } = await createNoteMutation({
          variables: { data: { title: noteData.title, body: noteData.body } },
        })

        // if there is no data returned, something is wrong, log the error and stop
        if (!data) {
          console.error(`> createNoteMutation error: no data returned`, {
            data,
          })
          return undefined
        }

        // Add the note to the notes query cache
        const notesQueryCache = apolloClient.readQuery<NotesQuery>({
          query: NotesDocument,
        })

        const newNotesQueryCache: NotesQuery = {
          notes: [data.createNote],
        }
        if (notesQueryCache?.notes?.length) {
          newNotesQueryCache.notes = newNotesQueryCache.notes.concat(
            // Remove the existing note from the cache, since we already added it at the first index
            notesQueryCache.notes.filter((note) => note.id !== noteData.id)
          )
        }

        // Write the newNotesQueryCache to the cache
        apolloClient.writeQuery({
          query: NotesDocument,
          data: newNotesQueryCache,
        })

        // Remove the placeholder note from the cache
        apolloClient.cache.gc()

        return data.createNote
      } catch (err) {
        // TODO: add some good user feedback
        alert('An error occurred while creating the note')
        console.error(`> createNoteMutation error: `, { err })
      }
    },
    [apolloClient, createNoteMutation]
  )

  return [createNote, mutationState] as const
}
