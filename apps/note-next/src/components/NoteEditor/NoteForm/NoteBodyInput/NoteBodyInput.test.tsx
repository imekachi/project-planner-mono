import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'
import NoteBodyInput, { NoteBodyInputProps } from './NoteBodyInput'

describe('NoteBodyInput', () => {
  const mockProps: NoteBodyInputProps = {
    value: 'foo',
    onChange: jest.fn(),
  }

  it('renders initial value', () => {
    render(<NoteBodyInput {...mockProps} />)

    const input = screen.getByTestId<HTMLTextAreaElement>('NoteBodyInput')
    expect(input.value).toBe('foo')
  })

  it('calls onChange when input value changes', async () => {
    const user = userEvent.setup()
    const Wrapper = () => {
      const [value, setValue] = useState(mockProps.value)
      const handleChange = (newValue: string) => {
        setValue(newValue)
        mockProps.onChange(newValue)
      }
      return <NoteBodyInput value={value} onChange={handleChange} />
    }

    render(<Wrapper />)

    const input = screen.getByTestId<HTMLTextAreaElement>('NoteBodyInput')
    const typeValue = 'bar'
    const expectedValue = mockProps.value + typeValue

    await user.click(input)
    await user.keyboard(typeValue)

    expect(mockProps.onChange).toHaveBeenCalledWith(expectedValue)
    expect(input.value).toBe(expectedValue)
  })
})
