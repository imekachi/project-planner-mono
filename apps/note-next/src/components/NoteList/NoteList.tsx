import { NotesQuery } from 'gql-schema'
import React from 'react'
import NoteListItem from '../NoteListItem'

export type NoteListProps = {
  notes: Pick<NotesQuery['notes'][number], 'id' | 'title'>[] | undefined
  activeNoteId?: NotesQuery['notes'][number]['id']
  isLoading?: boolean
  onActiveNoteChange?: (
    newActiveNoteId: NotesQuery['notes'][number]['id']
  ) => void
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
