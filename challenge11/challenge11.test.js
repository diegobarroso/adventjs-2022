import { describe, expect, it } from 'vitest'
import { getCompleted } from '../challenge11/challenge11.js'

describe('Challenge 11 Test', () => {
  it('should be a function', () => {
    expect(typeof getCompleted).toBe('function')
  })

  it('should return a string', () => {
    expect(getCompleted('01:00:00', '03:00:00')).toBeTypeOf('string')
  })

  it('should return the appropiate value', () => {
    expect(getCompleted('01:00:00', '03:00:00')).toBe('1/3')
    expect(getCompleted('02:00:00', '04:00:00')).toBe('1/2')
    expect(getCompleted('01:00:00', '01:00:00')).toBe('1/1')
    expect(getCompleted('01:10:10', '03:30:30')).toBe('1/3')
    expect(getCompleted('02:20:20', '03:30:30')).toBe('2/3')
    expect(getCompleted('03:30:30', '05:50:50')).toBe('3/5')
  })
})
