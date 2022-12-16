import { describe, expect, it } from 'vitest'
import { getOptimalPath } from '../challenge14/challenge14.js'

describe('Challenge 13 Test', () => {
  it('should be a function', () => {
    expect(typeof getOptimalPath).toBe('function')
  })

  it('should return a number', () => {
    expect(getOptimalPath([[0], [7, 4], [2, 4, 6]])).toBeTypeOf('number')
  })

  it('should return 8', () => {
    expect(getOptimalPath([[0], [7, 4], [2, 4, 6]])).toBe(8)
  })

  it('should return 2', () => {
    expect(getOptimalPath([[0], [2, 3]])).toBe(2)
  })

  it('should return 5', () => {
    expect(getOptimalPath([[0], [3, 4], [9, 8, 1]])).toBe(5)
  })

  it('should return 8', () => {
    expect(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])).toBe(8)
  })

  it('should return 7', () => {
    expect(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]])).toBe(7)
  })
})
