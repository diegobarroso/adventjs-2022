import { describe, expect, it } from 'vitest'
import { wrapping } from './challenge01'
import { compareArrays } from '../utils/compare-arrays'
describe('Challenge 1 Test', () => {
  it('should be a function', () => {
    expect(typeof wrapping).toBe('function')
  })

  it('should return an array', () => {
    const wrapped = wrapping([])
    expect(Array.isArray(wrapped)).toBe(true)
  })

  it('should return an empty array', () => {
    const wrapped = wrapping([])
    expect(wrapped.length).toBe(0)
  })

  it('should wrap gift', () => {
    const gifts = ['cat', 'game', 'socks']
    const wrapped = wrapping(gifts)
    const mockWrapped = [
      '*****\n*cat*\n*****',
      '******\n*game*\n******',
      '*******\n*socks*\n*******'
    ]
    expect(compareArrays(wrapped, mockWrapped)).toBe(true)
  })
})
