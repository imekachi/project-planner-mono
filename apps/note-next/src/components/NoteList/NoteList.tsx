import { Note } from 'gql-schema'
import React from 'react'
import NoteListItem from './NoteListItem'

export type NoteListProps = {
  notes: Pick<Note, 'id' | 'title'>[] | undefined
  activeNoteId?: Note['id']
  isLoading?: boolean
  onActiveNoteChange?: (newActiveNoteId: Note['id']) => void
}

const NoteList = ({
  notes,
  isLoading,
  activeNoteId,
  onActiveNoteChange,
}: NoteListProps): JSX.Element => {
  if (isLoading) {
    return <div data-testid="NoteList.Loading">Loading...</div>
  }

  // TODO: render a mock list item with title Untitled
  if (!notes?.length) {
    return (
      <p
        data-testid="NoteList.EmptyState"
        className="grid min-h-[14rem] place-content-center p-6 text-center text-sm text-neutral-400"
      >
        No notes yet.
      </p>
    )
  }

  return (
    <ul>
      {notes.map((note) => (
        <NoteListItem
          key={note.id}
          note={note}
          isActive={activeNoteId === note.id}
          onClick={() => onActiveNoteChange?.(note.id)}
        />
      ))}
    </ul>
  )
}

export default NoteList
