import { useMemo, useRef } from 'react'

export default function useObjFromArr<T>(
  list: T[] | undefined,
  keyResolver: (item: T) => string | number
) {
  const objRef = useRef<Record<string, T>>({})
  useMemo(() => {
    const entries = list?.map((item) => [keyResolver(item), item])
    // Overwrite existing data in the ref
    objRef.current = entries ? Object.fromEntries(entries) : {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list])
  return objRef
}
