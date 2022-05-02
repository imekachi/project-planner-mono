import { NotesQuery } from 'gql-schema'
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react'

export type ActiveNoteIdContextValue = {
  activeNoteId: NotesQuery['notes'][number]['id'] | undefined
  setActiveNoteId: Dispatch<
    SetStateAction<NotesQuery['notes'][number]['id'] | undefined>
  >
}

const ActiveNoteIdContext = createContext<ActiveNoteIdContextValue | undefined>(
  undefined
)

export type ActiveNoteIdProviderProps = {
  children: ReactNode
  initialActiveNoteId?: NotesQuery['notes'][number]['id']
}

export function ActiveNoteIdProvider(
  props: ActiveNoteIdProviderProps
): JSX.Element {
  const { children, initialActiveNoteId } = props

  const [activeNoteId, setActiveNoteId] = useState<
    NotesQuery['notes'][number]['id'] | undefined
  >(initialActiveNoteId)

  const context = useMemo(
    () => ({ activeNoteId, setActiveNoteId }),
    [activeNoteId]
  )

  return (
    <ActiveNoteIdContext.Provider value={context}>
      {children}
    </ActiveNoteIdContext.Provider>
  )
}

export function useActiveNoteId() {
  const value = useContext(ActiveNoteIdContext)
  if (value === undefined) {
    throw new Error(
      'useActiveNoteId() cannot be used outside ActiveNoteIdProvider'
    )
  }

  return value
}
