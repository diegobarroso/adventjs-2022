import { describe, expect, it } from 'vitest'
import { countTime } from '../challenge09/challenge09'

describe('Challenge 9 Test', () => {
  it('should be a function', () => {
    expect(typeof countTime).toBe('function')
  })

  it('should return a number', () => {
    expect(countTime([])).toBeTypeOf('number')
  })

  it('should return the appropiete value', () => {
    expect(countTime([0, 1, 1, 0, 1])).toBe(7)
    expect(countTime([0, 0, 0, 1])).toBe(21)
    expect(countTime([0, 0, 1, 0, 0])).toBe(28)
    expect(countTime([1, 0, 0, 1, 0, 0])).toBe(14)
    expect(countTime([1, 1, 0, 0, 0, 0])).toBe(28)
    expect(countTime([1, 1, 1])).toBe(0)
  })
})
