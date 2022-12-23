import { describe, expect, it } from 'vitest'
import { selectSleigh } from '../challenge12/challenge12.js'

describe('Challenge 12 Test', () => {
  it('should be a function', () => {
    expect(typeof selectSleigh).toBe('function')
  })

  it('should return a string', () => {
    expect(selectSleigh(10, [
      { name: 'Pedrosillano', consumption: 1 },
      { name: 'SamarJaffal', consumption: 2 },
      { name: 'marcospage', consumption: 3 }
    ])).toBeTypeOf('string')
  })

  it('should return null', () => {
    expect(selectSleigh(50, [
      { name: 'Pedrosillano', consumption: 1 },
      { name: 'SamarJaffal', consumption: 2 },
      { name: 'marcospage', consumption: 3 }
    ])).toBe(null)
  })

  it('should return the appropiate value', () => {
    expect(selectSleigh(1, [
      { name: 'pheralb', consumption: 0.3 },
      { name: 'TMChein', consumption: 0.5 }
    ])).toBe('TMChein')

    expect(selectSleigh(10, [
      { name: 'Pedrosillano', consumption: 1 },
      { name: 'SamarJaffal', consumption: 5 }
    ])).toBe('Pedrosillano')

    expect(selectSleigh(10, [
      { name: 'Pedrosillano', consumption: 1 },
      { name: 'SamarJaffal', consumption: 2 },
      { name: 'marcospage', consumption: 3 }
    ])).toBe('SamarJaffal')
  })
})
