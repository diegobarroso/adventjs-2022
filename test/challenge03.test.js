import { describe, expect, it } from 'vitest'
import { distributeGifts } from '../challenge03/challenge03'

describe('Challenge 3 Test', () => {
  it('should be a function', () => {
    expect(typeof distributeGifts).toBe('function')
  })

  it('should return a number', () => {
    const packs = distributeGifts(['book', 'doll', 'ball'], ['dasher', 'dancer'])
    expect(packs).toBeTypeOf('number')
  })

  it('should return 2', () => {
    const packs = distributeGifts(['book', 'doll', 'ball'], ['dasher', 'dancer'])
    expect(packs).toBe(2)
  })

  it('should return 1', () => {
    const packs = distributeGifts(['a', 'b', 'c'], ['d', 'e'])
    expect(packs).toBe(1)
  })

  it('should return 0 if reindeers can not carry any pack', () => {
    const packs = distributeGifts(['videogames', 'console'], ['midu'])
    expect(packs).toBe(0)
  })
})
