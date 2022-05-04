import { NOTE_PLACEHOLDER_ID_PREFIX } from '../config/noteCreation'
import { checkIsPlaceholderNote, createPlaceholderNoteId } from './createNote'

describe('createPlaceholderNoteId', () => {
  it('creates an id with the configured prefix', () => {
    const id = createPlaceholderNoteId()
    expect(id.startsWith(NOTE_PLACEHOLDER_ID_PREFIX)).toBe(true)
  })
})

describe('checkIsPlaceholderNote', () => {
  it('returns true if noteId starts with configured prefix', () => {
    const id = `${NOTE_PLACEHOLDER_ID_PREFIX}123`
    expect(checkIsPlaceholderNote(id)).toBe(true)
  })

  it('returns false if noteId does not start with configured prefix', () => {
    const id = '123'
    expect(checkIsPlaceholderNote(id)).toBe(false)
  })

  it('takes undefined as an id and returns false', () => {
    expect(checkIsPlaceholderNote(undefined)).toBe(false)
  })

  it('takes null as an id and returns false', () => {
    expect(checkIsPlaceholderNote(undefined)).toBe(false)
  })
})
