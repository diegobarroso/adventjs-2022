import { describe, expect, it } from 'vitest'
import { checkJump } from '../challenge10/challenge10'

describe('Challenge 10 Test', () => {
  it('should be a function', () => {
    expect(typeof checkJump).toBe('function')
  })

  it('should return a boolena', () => {
    expect(checkJump([])).toBeTypeOf('boolean')
  })

  it('should return true', () => {
    expect(checkJump([1, 2, 1])).toBe(true)
    expect(checkJump([1, 3, 8, 5, 2])).toBe(true)
    expect(checkJump([1, 2, 3, 2, 1])).toBe(true)
    expect(checkJump([1, 2, 2, 2, 1])).toBe(true)
    expect(checkJump([0, 1, 0])).toBe(true)
    expect(checkJump([1, 1000, 900, 800])).toBe(true)
    expect(checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])).toBe(true)
  })

  it('should return false', () => {
    expect(checkJump([1, 7, 3, 5])).toBe(false)
    expect(checkJump([2, 2, 2, 2])).toBe(false)
    expect(checkJump([1, 2, 3])).toBe(false)
    expect(checkJump([1, 2, 3, 2, 1, 2, 3])).toBe(false)
    expect(checkJump([1, 1000, 100, 800])).toBe(false)
    expect(checkJump([1, 2, 3, 1, 3, 1])).toBe(false)
    expect(checkJump([1, 3, 2, 5, 4, 3, 2, 1])).toBe(false)
  })
})
