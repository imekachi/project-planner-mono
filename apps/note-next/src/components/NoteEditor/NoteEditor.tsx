import { useNoteByIdQuery } from 'gql-schema'
import { useActiveNoteId } from '../../states/ActiveNoteId'
import NoteForm from './NoteForm'

export type NoteEditorProps = {
  //
}

const NoteEditor = (props: NoteEditorProps): JSX.Element => {
  const {} = props
  const { activeNoteId } = useActiveNoteId()
  // TODO: have apollo client to read cache from note list first
  const { loading, data, error } = useNoteByIdQuery({
    skip: !activeNoteId,
    variables: { id: activeNoteId as number },
  })

  console.log(`> useNoteByIdQuery:`, { loading, data, error })

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
  if (!data?.note) {
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
      <NoteForm note={data.note} />
    </div>
  )
}

export default NoteEditor
