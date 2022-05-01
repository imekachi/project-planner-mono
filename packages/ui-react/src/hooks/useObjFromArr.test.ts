import { renderHook } from '@testing-library/react'
import useObjFromArr from './useObjFromArr'

describe('useObjFromArr', () => {
  const mockList = [
    {
      id: 1,
      value: 2,
    },
    {
      id: 2,
      value: 3,
    },
  ]

  const mockKeyResolver = (obj: typeof mockList[number]) => obj.id

  const expectedOutput = {
    1: mockList[0],
    2: mockList[1],
  }

  it('should convert an array to an object correctly', () => {
    const { result } = renderHook(() =>
      useObjFromArr(mockList, mockKeyResolver)
    )
    expect(result.current.current).toEqual(expectedOutput)
  })

  it('should update the ref correctly', () => {
    const { result, rerender } = renderHook(
      ({
        list,
        keyResolver,
      }: {
        list: typeof mockList
        keyResolver: (item: typeof mockList[number]) => number
      }) => useObjFromArr(list, keyResolver),
      {
        initialProps: { list: mockList, keyResolver: mockKeyResolver },
      }
    )

    expect(result.current.current).toEqual(expectedOutput)

    const additionalItem = { id: 3, value: 3 }
    rerender({
      list: [...mockList, additionalItem],
      keyResolver: mockKeyResolver,
    })

    expect(result.current.current).toEqual({
      ...expectedOutput,
      3: additionalItem,
    })
  })
})
