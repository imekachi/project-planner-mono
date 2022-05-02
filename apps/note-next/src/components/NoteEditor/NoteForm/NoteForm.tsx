import { Note } from 'gql-schema'
import { useEffect } from 'react'
import { useState } from 'react'
import NoteBodyInput from './NoteBodyInput'
import NoteTitleInput from './NoteTitleInput'

type NoteData = Pick<Note, 'id' | 'title' | 'body'>

export type NoteFormProps = {
  note: NoteData | undefined
  // onChange: (note: NoteData) => void
}

const NoteForm = ({ note }: NoteFormProps): JSX.Element => {
  const { id, title = '', body = '' } = note ?? {}

  const [inputTitle, setInputTitle] = useState(title)
  const [inputBody, setInputBody] = useState(body)

  // Update form state with new title and body props only when noteId changes
  useEffect(() => {
    if (id) {
      setInputTitle(title)
      setInputBody(body)
    }
    // We want to run this effect only when note.id changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  return (
    <form className="mx-auto">
      <NoteTitleInput value={inputTitle} onChange={setInputTitle} />
      <NoteBodyInput value={inputBody} onChange={setInputBody} />
    </form>
  )
}

export default NoteForm
