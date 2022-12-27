import { describe, expect, it } from 'vitest'
import { executeCommands } from '../challenge23/challenge23.js'
import { compareArrays } from '../utils/compare-arrays'

describe('Challenge 23 Test', () => {
  it('should be a function', () => {
    expect(typeof executeCommands).toBe('function')
  })

  it('should return an array', () => {
    expect(Array.isArray(executeCommands([]))).toBe(true)
  })

  it('should return an appropiate array', () => {
    expect(compareArrays(executeCommands(
      [
        'MOV 5,V00',
        'MOV 10,V01',
        'DEC V00',
        'ADD V00,V01'
      ]),
    [14, 10, 0, 0, 0, 0, 0, 0])
    ).toBe(true)

    expect(compareArrays(executeCommands(
      [
        'MOV 255,V00',
        'INC V00',
        'DEC V01',
        'DEC V01'
      ]),
    [0, 254, 0, 0, 0, 0, 0, 0])
    ).toBe(true)

    expect(compareArrays(executeCommands(
      [
        'MOV 10,V00',
        'DEC V00',
        'INC V01',
        'JMP 1',
        'INC V06'
      ]),
    [0, 10, 0, 0, 0, 0, 1, 0])
    ).toBe(true)

    expect(compareArrays(executeCommands(
      [
        'MOV 10,V00',
        'MOV V00,V01',
        'MOV V01,V02',
        'MOV V02,V03',
        'MOV V03,V04'
      ]),
    [10, 10, 10, 10, 10, 0, 0, 0])
    ).toBe(true)
  })
})
