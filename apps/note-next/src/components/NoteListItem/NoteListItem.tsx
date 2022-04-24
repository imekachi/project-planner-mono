import clsx from 'clsx'
import { NotesQuery } from 'gql-schema'
import React from 'react'

export type NoteListItemProps = {
  note: Pick<NotesQuery['notes'][number], 'id' | 'title'>
  isActive?: boolean
  onClick?: (noteId: NotesQuery['notes'][number]['id']) => void
}

const NoteListItem = ({
  note,
  isActive,
  onClick,
}: NoteListItemProps): JSX.Element => {
  return (
    <li>
      <button
        className={clsx('block w-full cursor-pointer py-2 px-6 text-left', {
          'bg-neutral-100 font-bold': isActive,
        })}
        onClick={() => onClick?.(note.id)}
      >
        {note.title}
      </button>
    </li>
  )
}

export default NoteListItem
