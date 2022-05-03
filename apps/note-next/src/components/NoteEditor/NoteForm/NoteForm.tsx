import { Note } from 'gql-schema'
import { useEffect, useState } from 'react'
import { Optional } from 'type-utils'
import NoteBodyInput from './NoteBodyInput'
import NoteTitleInput from './NoteTitleInput'

type NoteData = Pick<Note, 'id' | 'title' | 'body'>

export type NoteFormProps = {
  note: NoteData | undefined
  onChange: (note: Optional<NoteData, 'id'>) => void
}

const NoteForm = ({ note, onChange }: NoteFormProps): JSX.Element => {
  const { id, title = '', body = '' } = note ?? {}

  const [inputTitle, setInputTitle] = useState(title)
  const [inputBody, setInputBody] = useState(body)

  // Update form state with new title and body props only when noteId changes
  useEffect(() => {
    if (id) {
      if (inputTitle !== title) {
        setInputTitle(title)
      }
      if (inputBody !== body) {
        setInputBody(body)
      }
    }
    // We want to run this effect only when note.id changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, title, body])

  useEffect(() => {
    onChange({ id, title: inputTitle, body: inputBody })
  }, [id, inputBody, inputTitle, onChange])

  return (
    <form className="mx-auto">
      <NoteTitleInput value={inputTitle} onChange={setInputTitle} />
      <NoteBodyInput value={inputBody} onChange={setInputBody} />
    </form>
  )
}

export default NoteForm
