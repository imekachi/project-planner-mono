import { Maybe, Note, NotesDocument, NotesQuery } from 'gql-schema'
import { nanoid } from 'nanoid'
import { Required } from 'type-utils'
import { NOTE_PLACEHOLDER_ID_PREFIX } from '../config/noteCreation'
import { ApolloClientInstance } from '../libs/apollo'

export function createPlaceholderNoteId(): string {
  return `${NOTE_PLACEHOLDER_ID_PREFIX}${nanoid()}`
}

export function checkIsPlaceholderNote(
  id: Maybe<Note['id']> | undefined
): boolean {
  if (!id) return false
  return id.startsWith(NOTE_PLACEHOLDER_ID_PREFIX)
}

export function addNotePlaceholderToApolloCache(
  apolloClient: ApolloClientInstance
): Note {
  // Create an empty note with a fake id
  const newNotePlaceholder: Required<Note, '__typename'> = {
    id: createPlaceholderNoteId(),
    title: '',
    body: '',
    updatedAt: new Date().toISOString(),
    __typename: 'Note',
  }

  const notesQueryCache = apolloClient.readQuery<NotesQuery>({
    query: NotesDocument,
  })

  // Add the new note to the cache
  const newNotesQueryCache: NotesQuery = {
    notes: [newNotePlaceholder],
  }
  if (notesQueryCache?.notes?.length) {
    newNotesQueryCache.notes = newNotesQueryCache.notes.concat(
      notesQueryCache.notes
    )
  }

  apolloClient.writeQuery({ query: NotesDocument, data: newNotesQueryCache })

  return newNotePlaceholder
}
