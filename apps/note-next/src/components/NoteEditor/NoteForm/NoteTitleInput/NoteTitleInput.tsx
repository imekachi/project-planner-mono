import { ChangeEvent } from 'react'

export type NoteTitleInputProps = {
  value: string
  onChange: (newValue: string) => void
}

const NoteTitleInput = (props: NoteTitleInputProps): JSX.Element => {
  const { value, onChange } = props

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <input
      className="mb-4 w-full text-lg font-bold focus-visible:outline-0"
      name="title"
      type="text"
      placeholder="Title"
      value={value}
      onChange={handleChange}
      id="NoteTitleInput"
      data-testid="NoteTitleInput"
    />
  )
}

export default NoteTitleInput
