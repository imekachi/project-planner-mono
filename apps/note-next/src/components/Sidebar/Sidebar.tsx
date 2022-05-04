import { PlusIcon } from '@heroicons/react/outline'
import { useNotesQuery } from 'gql-schema'
import { useAtom } from 'jotai'
import { useEffect } from 'react'
import { useNewNotePlaceholder } from '../../hooks/useNewNotePlaceholder'
import { activeNoteIdAtom } from '../../states/noteEditor'
import NoteList from '../NoteList'

const Sidebar = (): JSX.Element => {
  const { loading, data } = useNotesQuery()
  const [activeNoteId, setActiveNoteId] = useAtom(activeNoteIdAtom)

  const { createNewNotePlaceholder } = useNewNotePlaceholder()

  useEffect(() => {
    // Initialize the activeNoteId
    // when it was loading before and the activeNoteId hasn't been initialized
    if (!loading && !activeNoteId && data?.notes[0]?.id) {
      setActiveNoteId(data.notes[0].id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeNoteId, data?.notes[0]?.id, loading])

  const handleCreateNewNote = () => {
    const newNote = createNewNotePlaceholder()
    setActiveNoteId(newNote.id)
  }

  return (
    <div id="note-list" className="bg-neutral-200 py-4">
      <div className="mb-2 flex items-center justify-between py-2 px-6">
        <h2 className="text-sm font-bold uppercase text-neutral-400">
          Your notes
        </h2>
        <button
          title="Add a new note"
          className="h-5 w-5 rounded border border-neutral-400 hover:bg-neutral-100"
          onClick={handleCreateNewNote}
          aria-label="Add a new note"
        >
          <PlusIcon className="mx-auto h-3 w-3" />
        </button>
      </div>
      <NoteList
        notes={data?.notes}
        isLoading={loading}
        activeNoteId={activeNoteId}
        onActiveNoteChange={setActiveNoteId}
      />
    </div>
  )
}

export default Sidebar
