import { describe, expect, it } from 'vitest'
import { getMaxGifts } from '../challenge05/challenge05'

describe('Challenge 5 Test', () => {
  it('should be a function', () => {
    expect(typeof getMaxGifts).toBe('function')
  })

  it('should return a number', () => {
    const max = getMaxGifts([12, 3, 11, 5, 7], 20, 3)
    expect(max).toBeTypeOf('number')
  })

  it('should return 0', () => {
    const max = getMaxGifts([], 20, 3)
    expect(max).toBe(0)
  })

  it('should return 20', () => {
    const max = getMaxGifts([12, 3, 11, 5, 7], 20, 3)
    expect(max).toBe(20)
  })

  it('should return 0', () => {
    const max = getMaxGifts([50], 15, 1)
    expect(max).toBe(0)
  })

  it('should return 50', () => {
    const max = getMaxGifts([50], 100, 1)
    expect(max).toBe(50)
  })

  it('should return 70', () => {
    const max = getMaxGifts([50, 70], 100, 1)
    expect(max).toBe(70)
  })

  it('should return 100', () => {
    const max = getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)
    expect(max).toBe(100)
  })
})
