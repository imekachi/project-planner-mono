import { Note } from 'gql-schema'
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
  activeNoteId: Note['id'] | undefined
  setActiveNoteId: Dispatch<SetStateAction<Note['id'] | undefined>>
}

const ActiveNoteIdContext = createContext<ActiveNoteIdContextValue | undefined>(
  undefined
)

export type ActiveNoteIdProviderProps = {
  children: ReactNode
  initialActiveNoteId?: Note['id']
}

export function ActiveNoteIdProvider(
  props: ActiveNoteIdProviderProps
): JSX.Element {
  const { children, initialActiveNoteId } = props

  const [activeNoteId, setActiveNoteId] = useState<Note['id'] | undefined>(
    initialActiveNoteId
  )

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
