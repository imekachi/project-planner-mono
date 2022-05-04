import { ChangeEvent } from 'react'
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
      className="w-full"
      name="body"
      placeholder="Type your note here..."
      value={value}
      onChange={handleChange}
      minRows={6}
      id="NoteBodyInput"
      data-testid="NoteBodyInput"
    />
  )
}

export default NoteBodyInput
