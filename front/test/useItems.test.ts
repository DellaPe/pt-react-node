import { renderHook, act } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import { useItems } from '../src/hooks/useItmes'

describe('useItems hook', () => {
  test('should add and remove items', () => {
    const { result } = renderHook(() => useItems())
    expect(result.current.items).toEqual([])

    const textTest = crypto.randomUUID()
    act(() => { result.current.addItem(textTest) })
    expect(result.current.items)
      .toEqual([{ id: expect.any(String), timestamp: expect.any(Number), name: textTest }])

    act(() => { result.current.deleteItem(result.current.items[0].id) })
    expect(result.current.items).toEqual([])
  })
}) 