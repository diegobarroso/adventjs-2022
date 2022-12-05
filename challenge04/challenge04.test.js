import { describe, expect, it } from 'vitest'
import { fitsInOneBox } from '../challenge04/challenge04'

describe('Challenge 4 Test', () => {
  it('should be a function', () => {
    expect(typeof fitsInOneBox).toBe('function')
  })

  it('should return a boolean', () => {
    const fits = fitsInOneBox([], [])
    expect(fits).toBeTypeOf('boolean')
  })

  it('should return true', () => {
    const packs = fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 }
    ])
    expect(packs).toBe(true)
  })

  it('should return false', () => {
    const packs = fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 2, w: 10, h: 2 }
    ])
    expect(packs).toBe(false)
  })
})
