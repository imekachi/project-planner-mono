import { NotesQuery } from 'gql-schema'
import { ChangeEvent, useEffect } from 'react'
import { useState } from 'react'
import ReactTextareaAutosize from 'react-textarea-autosize'

export type NoteFormProps = {
  noteId: NotesQuery['notes'][number]['id'] | undefined
  title: string | undefined
  body: string | undefined
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

  const createOnChangeHandler =
    (name: string) =>
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: ChangeEvent<T>) =>
      setFormState((prevState) => ({
        ...prevState,
        [name]: event.target.value,
      }))

  return (
    <form className="mx-auto">
      <input
        type="text"
        id="note-title"
        className="mb-4 w-full text-lg font-bold focus-visible:outline-0"
        placeholder="Title"
        name="title"
        value={formState.title}
        onChange={createOnChangeHandler('title')}
      />
      <ReactTextareaAutosize
        id="note-body"
        className="w-full"
        minRows={6}
        placeholder="Type your note here..."
        name="body"
        value={formState.body}
        onChange={createOnChangeHandler('body')}
      />
    </form>
  )
}

export default NoteForm
