import { render, screen } from '@testing-library/react'
import NoteListItem, { NoteListItemProps } from './NoteListItem'

describe('NoteListItem', () => {
  const mockNote: NoteListItemProps['note'] = {
    id: '1',
    title: 'Test note',
  }

  it('renders note title', () => {
    render(<NoteListItem note={mockNote} />)
    expect(screen.getByText(mockNote.title)).toBeInTheDocument()
  })

  it('calls onClick when the item is clicked', () => {
    const onClick = jest.fn()
    render(<NoteListItem note={mockNote} onClick={onClick} />)

    const noteListItem = screen.getByTestId('NoteListItem')
    noteListItem.click()

    expect(onClick).toHaveBeenCalledWith(mockNote.id)
  })

  it('should not throw when onClick is not provided', () => {
    render(<NoteListItem note={mockNote} />)

    const noteListItem = screen.getByTestId('NoteListItem')
    expect(() => noteListItem.click()).not.toThrow()
  })
})
