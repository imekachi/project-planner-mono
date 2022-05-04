export type UnknownObject = Record<string, unknown>

/**
 * Make some keys optional
 */
export type Optional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: T[SubKey] }

/**
 * Require some keys
 */
export type Required<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]-?: T[SubKey] }

/**
 * Require all keys, basically the built-in Require<T>
 */
export type RequiredAll<T> = { [K in keyof T]-?: T[K] }