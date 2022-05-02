import { Note } from 'gql-schema'
import React from 'react'
import { cx } from 'ui-utils'

export type NoteListItemProps = {
  note: Pick<Note, 'id' | 'title'>
  isActive?: boolean
  onClick?: (noteId: Note['id']) => void
}

const NoteListItem = ({
  note,
  isActive,
  onClick,
}: NoteListItemProps): JSX.Element => {
  return (
    <li>
      <button
        className={cx('block w-full cursor-pointer py-2 px-6 text-left', [
          isActive && 'bg-neutral-100 font-bold',
        ])}
        onClick={() => onClick?.(note.id)}
      >
        {note.title}
      </button>
    </li>
  )
}

export default NoteListItem
