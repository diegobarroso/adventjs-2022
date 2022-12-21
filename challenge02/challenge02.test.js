import { describe, expect, it } from 'vitest'
import { countHours } from './challenge02'

describe('Challenge 2 Test', () => {
  it('should be a function', () => {
    expect(typeof countHours).toBe('function')
  })

  it('should return a number', () => {
    const count = countHours(2022, ['01/06'])
    expect(count).toBeTypeOf('number')
  })

  it('should return 0 when recieve an empty array', () => {
    const count = countHours(2022, [])
    expect(count).toBe(0)
  })

  it('should return correct hours', () => {
    const holidays = ['01/06', '04/01', '12/25']
    expect(countHours(2022, [...holidays])).toBe(4)
  })
})
