import { describe, expect, it } from 'vitest'
import { dryNumber } from '../challenge18/challenge18.js'
import { compareArrays } from '../utils/compare-arrays'

describe('Challenge 11 Test', () => {
  it('should be a function', () => {
    expect(typeof dryNumber).toBe('function')
  })

  it('should return an array', () => {
    expect(Array.isArray(dryNumber(1, 15))).toBe(true)
  })

  it('should return an empty array', () => {
    expect(dryNumber(9, 8).length).toBe(0)
  })

  it('should return an appropiate array', () => {
    expect(compareArrays(dryNumber(1, 15), [
      1,
      10,
      11,
      12,
      13,
      14,
      15
    ])).toBe(true)
  })

  it('should return an appropiate array', () => {
    expect(compareArrays(dryNumber(2, 20), [
      2,
      12,
      20
    ])).toBe(true)
  })

  it('should return an appropiate array', () => {
    expect(compareArrays(dryNumber(3, 33), [
      3,
      13,
      23,
      30,
      31,
      32,
      33
    ])).toBe(true)
  })

  it('should return an appropiate array', () => {
    expect(compareArrays(dryNumber(4, 45), [
      4,
      14,
      24,
      34,
      40,
      41,
      42,
      43,
      44,
      45
    ])).toBe(true)
  })

  it('should return an appropiate array', () => {
    expect(compareArrays(dryNumber(5, 55), [
      5,
      15,
      25,
      35,
      45,
      50,
      51,
      52,
      53,
      54,
      55
    ]
    )).toBe(true)
  })
})
