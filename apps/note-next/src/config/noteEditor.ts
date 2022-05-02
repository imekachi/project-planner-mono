export type NoteEditorConfig = {
  readonly DEFERRED_SAVE_MS: number
}

export const NOTE_EDITOR: NoteEditorConfig = Object.freeze({
  DEFERRED_SAVE_MS: 1000,
})
