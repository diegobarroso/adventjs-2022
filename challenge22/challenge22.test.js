import { describe, expect, it } from 'vitest'
import { checkStepNumbers } from '../challenge22/challenge22.js'

describe('Challenge 22 Test', () => {
  it('should be a function', () => {
    expect(typeof checkStepNumbers).toBe('function')
  })

  it('should return a boolean', () => {
    expect(checkStepNumbers([], [])).toBeTypeOf('boolean')
  })

  it('should return true', () => {
    expect(checkStepNumbers(
      ['tree_1', 'tree_2', 'house', 'tree_1', 'tree_2', 'house'],
      [1, 33, 10, 2, 44, 20]
    )).toBe(true)

    expect(checkStepNumbers(
      ['tree_1', 'tree_1', 'house'], [1, 2, 10]
    )).toBe(true)
  })

  it('should return false', () => {
    expect(checkStepNumbers(
      ['tree_1', 'tree_1', 'house'], [2, 1, 10]
    )).toBe(false)

    expect(checkStepNumbers(
      ['house', 'house', 'tree_1', 'tree_1', 'house', 'tree_2', 'tree_2', 'tree_3'], [5, 2, 1, 2, 3, 4, 5, 6]
    )).toBe(false)
  })
})
