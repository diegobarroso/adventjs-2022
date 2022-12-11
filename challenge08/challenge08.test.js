import { describe, expect, it } from 'vitest'
import { checkPart } from '../challenge08/challenge08'

describe('Challenge 8 Test', () => {
  it('should be a function', () => {
    expect(typeof checkPart).toBe('function')
  })

  it('should return a boolean', () => {
    const max = checkPart('')
    expect(max).toBeTypeOf('boolean')
  })

  it('should return true', () => {
    let isPalindrome = checkPart('uwu')
    expect(isPalindrome).toBe(true)

    isPalindrome = checkPart('miidim')
    expect(isPalindrome).toBe(true)
  })

  it('should return false', () => {
    const isPalindrome = checkPart('midu')
    expect(isPalindrome).toBe(false)
  })
})
