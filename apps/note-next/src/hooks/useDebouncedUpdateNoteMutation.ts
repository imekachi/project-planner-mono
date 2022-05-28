import { Note, NoteUpdateInput } from 'gql-schema'
import { useDebouncedCallback } from 'use-debounce'
import { NoteFormProps } from '../components/NoteEditor/NoteForm'
import { NOTE_EDITOR } from '../config/noteEditor'
import { checkIsPlaceholderNote } from '../domain/createNote'
import { useCreateNoteMutationWithCacheSync } from './graphql/useCreateNoteMutationWithCacheSync'
import { useUpdateNoteMutationWithCacheSync } from './graphql/useUpdateNoteMutationWithCacheSync'

export type UseDebouncedUpdateNoteMutationParams = {
  currentNote: Note | null | undefined
  onCreateNewNote?: (newNote: Note) => void
}

export function useDebouncedUpdateNoteMutation({ currentNote, onCreateNewNote }: UseDebouncedUpdateNoteMutationParams) {
  const [updateNoteMutation] = useUpdateNoteMutationWithCacheSync()
  const [createNoteMutation] = useCreateNoteMutationWithCacheSync()

  return useDebouncedCallback<NoteFormProps['onChange']>(
    async (updatedNote) => {
      const isTitleChanged = updatedNote.title !== currentNote?.title
      const isBodyChanged = updatedNote.body !== currentNote?.body
      const isDirty = isTitleChanged || isBodyChanged

      console.log(`> handleNoteChange:`, {
        isTitleChanged,
        isBodyChanged,
        isDirty,
        updatedNote,
        dataNote: currentNote,
      })

      // If nothing changed, do nothing
      if (!isDirty) return undefined

      // If it's a placeholder note, create a new note instead
      if (checkIsPlaceholderNote(updatedNote.id)) {
        const newNote = await createNoteMutation(updatedNote)
        if (newNote) {
          // callback
          onCreateNewNote?.(newNote)
        }
      } else {
        const updateData: NoteUpdateInput = {
          ...(isTitleChanged && { title: { set: updatedNote.title } }),
          ...(isBodyChanged && { body: { set: updatedNote.body } }),
        }

        updateNoteMutation({
          variables: { id: updatedNote.id, data: updateData },
        })
      }
    },
    NOTE_EDITOR.DEFERRED_SAVE_MS
  )
}
