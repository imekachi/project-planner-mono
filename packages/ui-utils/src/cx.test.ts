import { cx } from './cx'

describe('cx', () => {
  it('should return empty string when no className is passed', () => {
    expect(cx()).toBe('')
  })

  it('should return className when className is passed', () => {
    expect(cx('foo')).toBe('foo')
  })

  it('should return className when className is passed as an array', () => {
    expect(cx(['foo', 'bar'])).toBe('foo bar')
  })

  it('should remove null or undefined or boolean or empty string values', () => {
    expect(cx('foo', null, undefined, false, true, '')).toBe('foo')
    expect(cx(['foo', null, undefined, false, true, ''])).toBe('foo')
    expect(cx(['foo', null, ''], undefined, false, true)).toBe('foo')
  })

  it('should trim out spaces', () => {
    expect(cx(' foo ', ' bar ')).toBe('foo bar')
  })
})
