import { render, screen } from '@testing-library/react'
import NoteList, { NoteListProps } from './NoteList'

describe('NoteList', () => {
  const mockNotes: NoteListProps['notes'] = [
    { id: 1, title: 'Note 1' },
    { id: 2, title: 'Note 2' },
    { id: 3, title: 'Note 3' },
  ]

  it('renders notes', () => {
    render(<NoteList notes={mockNotes} />)
    mockNotes.forEach((note) => {
      expect(screen.getByText(note.title)).toBeInTheDocument()
    })
  })

  it('renders loading state', () => {
    render(<NoteList notes={undefined} isLoading />)
    expect(screen.getByTestId('NoteList.Loading')).toBeInTheDocument()
  })

  it('renders empty state', () => {
    render(<NoteList notes={undefined} />)
    expect(screen.getByTestId('NoteList.EmptyState')).toBeInTheDocument()
  })

  it('calls onActiveNoteChange when a note is clicked', () => {
    const onActiveNoteChange = jest.fn()
    render(
      <NoteList
        notes={mockNotes}
        activeNoteId={mockNotes[0].id}
        onActiveNoteChange={onActiveNoteChange}
      />
    )

    const note = screen.getByText(mockNotes[1].title)
    note.click()

    expect(onActiveNoteChange).toHaveBeenCalledWith(mockNotes[1].id)
  })

  it('should not throw when onActiveNoteChange is not provided', () => {
    render(<NoteList notes={mockNotes} />)

    const note = screen.getByText(mockNotes[1].title)
    expect(() => note.click()).not.toThrow()
  })
})
