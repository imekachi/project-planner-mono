import { useNoteByIdQuery } from 'gql-schema'
import { useAtom } from 'jotai'
import { useDebouncedUpdateNoteMutation } from '../../hooks/useDebouncedUpdateNoteMutation'
import { activeNoteIdAtom } from '../../states/noteEditor'
import NoteForm from './NoteForm'

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

  const debouncedUpdateNote = useDebouncedUpdateNoteMutation({
    currentNote: noteQuery?.note,
    onCreateNewNote: (newNote) => setActiveNoteId(newNote.id),
  })

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
