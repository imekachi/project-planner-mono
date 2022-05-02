import { Note } from 'gql-schema'
import { useEffect } from 'react'
import { useState } from 'react'
import NoteBodyInput from './NoteBodyInput'
import NoteTitleInput from './NoteTitleInput'

export type NoteFormProps = {
  noteId: Note['id'] | undefined
  title: Note['title'] | undefined
  body: Note['body'] | undefined
}

type FormState = {
  title: string
  body: string
}

const NoteForm = (props: NoteFormProps): JSX.Element => {
  const { noteId, title = '', body = '' } = props

  // TODO: A component that wraps each input then deferred update value to onDeferredChange
  // make it work first
  const [formState, setFormState] = useState<FormState>({ title, body })

  // Update form state with new title and body props only when noteId changes
  useEffect(() => {
    if (noteId) {
      setFormState({ title, body })
    }
    // We want to run this effect only when noteId changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [noteId])

  console.log(`> formState:`, formState)

  const createOnChangeHandler = (name: string) => (newValue: string) =>
    setFormState((prevState) => ({
      ...prevState,
      [name]: newValue,
    }))

  return (
    <form className="mx-auto">
      <NoteTitleInput
        value={formState.title}
        onChange={createOnChangeHandler('title')}
      />
      <NoteBodyInput
        value={formState.body}
        onChange={createOnChangeHandler('body')}
      />
    </form>
  )
}

export default NoteForm
