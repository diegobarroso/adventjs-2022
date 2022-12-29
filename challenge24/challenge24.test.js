import { describe, expect, it } from 'vitest'
import { canExit } from '../challenge24/challenge24'

describe('Challenge 24 Test', () => {
  it('should be a function', () => {
    expect(typeof canExit).toBe('function')
  })

  it('should return a boolean', () => {
    const exit = canExit([
      [' ', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', 'W', 'W'],
      [' ', ' ', ' ', ' ', 'E']
    ])
    expect(exit).toBeTypeOf('boolean')
  })

  it('should return true', () => {
    expect(canExit([
      [' ', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', 'W', 'W'],
      [' ', ' ', ' ', ' ', 'E']
    ])).toBe(true)

    expect(canExit([
      ['E', ' ', ' ', ' ', 'S']
    ])).toBe(true)

    expect(canExit([
      ['E', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' ']
    ])).toBe(true)

    expect(canExit([
      ['E', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' '],
      ['W', 'W', 'W', 'W', 'W']
    ])).toBe(true)

    expect(canExit([
      ['E', 'S', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W', 'W'],
      ['W', 'W', 'W', 'W', 'W']
    ])).toBe(true)
  })

  it('should return false', () => {
    expect(canExit([
      [' ', ' ', 'W', 'W', 'S'],
      [' ', ' ', ' ', 'W', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', 'W', 'W'],
      [' ', ' ', ' ', ' ', 'E']
    ])).toBe(false)

    expect(canExit([
      [' ', ' ', 'W', 'W', 'S'],
      [' ', ' ', ' ', 'W', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', ' ', 'W'],
      [' ', ' ', ' ', ' ', 'E']
    ])).toBe(false)

    expect(canExit([
      ['E', ' ', 'W', ' ', 'S']
    ])).toBe(false)

    expect(canExit([
      ['E', ' ', 'W', ' ', 'S'],
      [' ', ' ', 'W', ' ', ' '],
      ['W', 'W', 'W', 'W', 'W']
    ])).toBe(false)
  })
})
