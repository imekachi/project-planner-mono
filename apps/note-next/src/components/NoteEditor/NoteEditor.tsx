import { NoteUpdateInput, useNoteByIdQuery } from 'gql-schema'
import { useAtom } from 'jotai'
import { useDebouncedCallback } from 'use-debounce'
import { NOTE_EDITOR } from '../../config/noteEditor'
import { checkIsPlaceholderNote } from '../../domain/createNote'
import { useCreateNoteMutationWithCacheSync } from '../../hooks/graphql/useCreateNoteMutationWithCacheSync'
import { useUpdateNoteMutationWithCacheSync } from '../../hooks/graphql/useUpdateNoteMutationWithCacheSync'
import { activeNoteIdAtom } from '../../states/noteEditor'
import NoteForm, { NoteFormProps } from './NoteForm'

const NoteEditor = (): JSX.Element => {
  // Get activeNoteId from the atom (a context)
  const [activeNoteId, setActiveNoteId] = useAtom(activeNoteIdAtom)

  // Query the note data based on the activeNoteId.
  // Note: This will try to get data from the cache first,
  // it should hit the cache from the notesQuery.
  const {
    loading,
    data: noteQuery,
    error,
  } = useNoteByIdQuery({
    skip: !activeNoteId,
    variables: { id: activeNoteId as NonNullable<typeof activeNoteId> },
  })

  console.log(`> useNoteByIdQuery:`, { loading, noteQuery, error })

  // TODO: extract these into a custom hook
  const [updateNoteMutation] = useUpdateNoteMutationWithCacheSync()
  const [createNoteMutation] = useCreateNoteMutationWithCacheSync()
  const debouncedUpdateNote = useDebouncedCallback<NoteFormProps['onChange']>(
    async (updatedNote) => {
      const isTitleChanged = updatedNote.title !== noteQuery?.note?.title
      const isBodyChanged = updatedNote.body !== noteQuery?.note?.body
      const isDirty = isTitleChanged || isBodyChanged

      console.log(`> handleNoteChange:`, {
        isTitleChanged,
        isBodyChanged,
        isDirty,
        updatedNote,
        dataNote: noteQuery?.note,
      })

      // If nothing changed, do nothing
      if (!isDirty) return undefined

      // If it's a placeholder note, create a new note instead
      if (checkIsPlaceholderNote(updatedNote.id)) {
        const newNote = await createNoteMutation(updatedNote)
        if (newNote) {
          setActiveNoteId(newNote.id)
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

  if (loading) {
    return <div>loading...</div>
  }
  if (error) {
    return (
      <div>
        <h2>Error: </h2>
        <pre>{JSON.stringify(error)}</pre>
      </div>
    )
  }
  if (!activeNoteId) {
    return <div>Select some note from the side bar</div>
  }
  if (!noteQuery?.note) {
    return (
      <div>
        Note not found: <pre>id: {activeNoteId}</pre>
      </div>
    )
  }

  return (
    <div
      id="note-content"
      className="col-span-full col-start-2 bg-[#FFFEFC] py-4 px-6 pb-4"
    >
      <div id="status-bar" className="mb-4 flex justify-between text-xs">
        <div></div>
        <div id="status-right" className="flex justify-end">
          <span className="rounded-lg bg-green-100 py-1 px-2 text-green-600">
            Saved
          </span>
        </div>
      </div>
      <NoteForm note={noteQuery.note} onChange={debouncedUpdateNote} />
    </div>
  )
}

export default NoteEditor
