export type UnknownObject = Record<string, unknown>
export type Optional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: T[SubKey] }