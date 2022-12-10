import { describe, expect, it } from 'vitest'
import { getGiftsToRefill } from '../challenge07/challenge07'
import { compareArrays } from '../utils/compare-arrays'

describe('Challenge 7 Test', () => {
  it('should be a function', () => {
    expect(typeof getGiftsToRefill).toBe('function')
  })

  it('should return an array', () => {
    const toRefill = getGiftsToRefill([], [], [])
    expect(Array.isArray(toRefill)).toBe(true)
  })

  it('should return an empty array', () => {
    const toRefill = getGiftsToRefill([], [], [])
    expect(toRefill.length).toBe(0)
  })

  it('should return an empty array', () => {
    const toRefill = getGiftsToRefill(['a', 'a'], ['a', 'a'], ['a', 'a'])
    expect(toRefill.length).toBe(0)
  })

  it('should return an appropriate array', () => {
    const toRefill = getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c'])
    expect(compareArrays(['a', 'b', 'c'], toRefill)).toBe(true)
  })

  it('should return an appropriate array', () => {
    const toRefill = getGiftsToRefill(['a', 'b'], ['c', 'd'], ['e', 'f'])
    expect(compareArrays(['a', 'b', 'c', 'd', 'e', 'f'], toRefill)).toBe(true)
  })
})
