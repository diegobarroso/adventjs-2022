import { describe, expect, it } from 'vitest'
import { sortToys } from '../challenge19/challenge19.js'
import { compareArrays } from '../utils/compare-arrays'

describe('Challenge 19 Test', () => {
  it('should be a function', () => {
    expect(typeof sortToys).toBe('function')
  })

  it('should return an array', () => {
    expect(Array.isArray(sortToys(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0]))).toBe(true)
  })

  it('should return an empty array', () => {
    expect(sortToys([], []).length).toBe(0)
  })

  it('should return an appropiate array', () => {
    expect(compareArrays(sortToys(['ball', 'doll', 'car', 'puzzle'], [2, 3, 1, 0]), [
      'puzzle',
      'car',
      'ball',
      'doll'
    ])).toBe(true)
  })

  it('should return an appropiate array', () => {
    expect(compareArrays(sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [3, 1, 0, 2, 4]), [
      'ps4',
      'xbox',
      'switch',
      'pc',
      'nintendo'
    ])).toBe(true)
  })

  it('should return an appropiate array', () => {
    expect(compareArrays(sortToys(['pc', 'xbox', 'ps4', 'switch', 'nintendo'], [8, 6, 5, 7, 9]), [
      'ps4',
      'xbox',
      'switch',
      'pc',
      'nintendo'
    ])).toBe(true)
  })

  it('should return an appropiate array', () => {
    expect(compareArrays(sortToys(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'j', 'k', 'l'], [1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1111]), [
      'l',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'j',
      'k'
    ])).toBe(true)
  })
})
