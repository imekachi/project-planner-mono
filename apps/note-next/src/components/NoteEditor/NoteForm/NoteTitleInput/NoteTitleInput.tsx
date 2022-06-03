import { ChangeEvent } from 'react'

export type NoteTitleInputProps = {
  value: string
  onChange: (newValue: string) => void
  showLoader?: boolean
}

const NoteTitleInput = (props: NoteTitleInputProps): JSX.Element => {
  const { value, onChange, showLoader } = props

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  if (showLoader) {
    return <div className="skeleton input-field w-full text-lg" />
  }

  return (
    <input
      className="w-full text-lg font-bold focus-visible:outline-0"
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
