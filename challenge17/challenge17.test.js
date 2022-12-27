import { describe, expect, it } from 'vitest'
import { carryGifts } from '../challenge17/challenge17.js'
import { compareArrays } from '../utils/compare-arrays'

describe('Challenge 17 Test', () => {
  it('should be a function', () => {
    expect(typeof carryGifts).toBe('function')
  })

  it('should return an array', () => {
    expect(Array.isArray(carryGifts([]))).toBe(true)
  })

  it('should return an empty array', () => {
    expect(carryGifts(['toy', 'toy', 'toy', 'toy'], 2).length).toBe(0)
  })

  it('should return an appropiate array', () => {
    expect(compareArrays((carryGifts(['game', 'bike', 'book', 'toy'], 10)),
      [
        'game bike',
        'book toy'
      ])).toBe(true)

    expect(compareArrays((carryGifts(['game', 'bike', 'book', 'toy'], 7)),
      [
        'game',
        'bike',
        'book toy'
      ])).toBe(true)

    expect(compareArrays((carryGifts(['game', 'bike', 'book', 'toy'], 4)),
      [
        'game',
        'bike',
        'book',
        'toy'
      ])).toBe(true)

    expect(compareArrays((carryGifts(['toy', 'gamme', 'toy', 'bike'], 6)),
      [
        'toy',
        'gamme',
        'toy',
        'bike'
      ])).toBe(true)

    expect(compareArrays((carryGifts(['toy', 'toy', 'disk', 'disk', 'toy', 'toy'], 7)),
      [
        'toy toy',
        'disk',
        'disk toy',
        'toy'
      ])).toBe(true)
  })
})
