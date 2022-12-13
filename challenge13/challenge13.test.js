import { describe, expect, it } from 'vitest'
import { getFilesToBackup } from '../challenge13/challenge13.js'
import { compareArrays } from '../utils/compare-arrays'

describe('Challenge 13 Test', () => {
  it('should be a function', () => {
    expect(typeof getFilesToBackup).toBe('function')
  })

  it('should return an array', () => {
    expect(Array.isArray(getFilesToBackup(1546300800, [
      [1, 1546300800],
      [2, 1546300800],
      [1, 1546300900],
      [1, 1546301000],
      [3, 1546301100]
    ]))).toBe(true)
  })

  it('should return an empty array', () => {
    expect(getFilesToBackup(1556300600, []).length).toBe(0)
  })

  it('should return an array', () => {
    expect(compareArrays((getFilesToBackup(1546300800, [
      [1, 1546300800],
      [2, 1546300800],
      [1, 1546300900],
      [1, 1546301000],
      [3, 1546301100]
    ])),
    [1, 3])).toBe(true)
  })

  it('should return an array', () => {
    expect(compareArrays((getFilesToBackup(1546300600, [
      [1, 1546300800],
      [2, 1546300800],
      [1, 1546300900],
      [1, 1546301000],
      [3, 1546301100]
    ])),
    [1, 2, 3])).toBe(true)
  })

  it('should return an array', () => {
    expect(compareArrays((getFilesToBackup(1556300600, [
      [1, 1546300800],
      [2, 1546300800],
      [1, 1546300900],
      [1, 1546301000],
      [3, 1546301100]
    ])),
    [])).toBe(true)
  })
})
