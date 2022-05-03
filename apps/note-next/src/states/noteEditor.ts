import { Note } from 'gql-schema'
import { atom } from 'jotai'

export const activeNoteIdAtom = atom<Note['id'] | undefined>(undefined)

