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
    return <div>Loading...</div>
  }

  if (!notes?.length) {
    return <div>Create a new note by clicking + icon</div>
  }

  return (
    <ul className="">
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
