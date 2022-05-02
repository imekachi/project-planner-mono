import { ChangeEvent, memo } from 'react'
import ReactTextareaAutosize from 'react-textarea-autosize'

export type NoteBodyInputProps = {
  value: string
  onChange: (newValue: string) => void
}

const NoteBodyInput = (props: NoteBodyInputProps): JSX.Element => {
  const { value, onChange } = props

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value)
  }

  return (
    <ReactTextareaAutosize
      id="note-body"
      className="w-full"
      minRows={6}
      placeholder="Type your note here..."
      name="body"
      value={value}
      onChange={handleChange}
    />
  )
}

export default memo(NoteBodyInput)
