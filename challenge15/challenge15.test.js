import { describe, expect, it } from 'vitest'
import { decorateTree } from '../challenge15/challenge15.js'
import { compareArrays } from '../utils/compare-arrays'

describe('Challenge 15 Test', () => {
  it('should be a function', () => {
    expect(typeof decorateTree).toBe('function')
  })

  it('should return a string', () => {
    expect(Array.isArray(decorateTree('B P R P'))).toBe(true)
  })

  it('should return the correct tree', () => {
    const expected = [
      'R',
      'P B',
      'R B B',
      'B P R P'
    ]
    expect(compareArrays(decorateTree('B P R P'), expected)).toBe(true)
  })

  it('should return the correct tree', () => {
    const expected = [
      'B',
      'B B'
    ]
    expect(compareArrays(decorateTree('B B'), expected)).toBe(true)
  })

  it('should return the correct tree', () => {
    const expected = [
      'B',
      'R P',
      'B P P',
      'P R B R',
      'P P B B P',
      'B R B B B R',
      'B B P R P R R'
    ]
    expect(compareArrays(decorateTree('B B P R P R R'), expected)).toBe(true)
  })

  it('should return the correct tree', () => {
    const expected = [
      'R',
      'R R',
      'P B P',
      'R B B R',
      'R R P R R'
    ]
    expect(compareArrays(decorateTree('R R P R R'), expected)).toBe(true)
  })
})
