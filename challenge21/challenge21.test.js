import { describe, expect, it } from 'vitest'
import { printTable } from '../challenge21/challenge21.js'

describe('Challenge 21 Test', () => {
  it('should be a function', () => {
    expect(typeof printTable).toBe('function')
  })

  it('should return a string', () => {
    expect(printTable([], [])).toBeTypeOf('string')
  })

  it('should return the expected string', () => {
    const expected = '++++++++++++++++++++++++++++++++++++++\n| Gift               | Quantity      |\n| ------------------ | ------------- |\n| PlayStation 5      | 9234782374892 |\n| Book Learn Web Dev | 23531         |\n**************************************'
    expect(printTable([
      { name: 'PlayStation 5', quantity: 9234782374892 },
      { name: 'Book Learn Web Dev', quantity: 23531 }
    ])).toBe(expected)
  })

  it('should return the expected string', () => {
    const expected = '+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 2        |\n| Bike | 1        |\n| Book | 3        |\n*******************'
    expect(printTable([
      { name: 'Game', quantity: 2 },
      { name: 'Bike', quantity: 1 },
      { name: 'Book', quantity: 3 }
    ])).toBe(expected)
  })

  it('should return the expected string', () => {
    const expected = '+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 10000    |\n*******************'
    expect(printTable([
      { name: 'Game', quantity: 10000 }
    ])).toBe(expected)
  })

  it('should return the expected string', () => {
    const expected = '+++++++++++++++++++++\n| Gift | Quantity   |\n| ---- | ---------- |\n| Game | 1234567890 |\n*********************'
    expect(printTable([
      { name: 'Game', quantity: 1234567890 }
    ])).toBe(expected)
  })

  it('should return the expected string', () => {
    const expected = '+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Toy  | 12       |\n| Mic  | 123      |\n*******************'
    expect(printTable([
      { name: 'Toy', quantity: 12 },
      { name: 'Mic', quantity: 123 }
    ])).toBe(expected)
  })
})
