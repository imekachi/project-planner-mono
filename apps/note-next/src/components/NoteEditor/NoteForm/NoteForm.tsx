import { Note } from 'gql-schema'
import { useEffect, useState } from 'react'
import NoteBodyInput from './NoteBodyInput'
import NoteTitleInput from './NoteTitleInput'

type NoteData = Pick<Note, 'id' | 'title' | 'body'>

export type NoteFormProps = {
  note: NoteData | null | undefined
  onChange: (updatedNote: NoteData) => void
  showLoader?: boolean
}

const NoteForm = ({
  note,
  onChange,
  showLoader,
}: NoteFormProps): JSX.Element => {
  const { id, title, body } = note ?? {}

  const [inputTitle, setInputTitle] = useState(title ?? '')
  const [inputBody, setInputBody] = useState(body ?? '')

  // Update form state with new title and body props only when noteId changes
  useEffect(() => {
    if (id) {
      if (title && inputTitle !== title) {
        setInputTitle(title)
      }
      if (body && inputBody !== body) {
        setInputBody(body)
      }
    }
    // We want to run this effect only when note.id changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, title, body])

  useEffect(() => {
    if (id) {
      onChange({ id, title: inputTitle, body: inputBody })
    }
  }, [id, inputBody, inputTitle, onChange])

  return (
    <form className="mx-auto space-y-4">
      <NoteTitleInput
        showLoader={showLoader}
        value={inputTitle}
        onChange={setInputTitle}
      />
      <NoteBodyInput
        showLoader={showLoader}
        value={inputBody}
        onChange={setInputBody}
      />
    </form>
  )
}

export default NoteForm
