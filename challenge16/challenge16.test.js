import { describe, expect, it } from 'vitest'
import { fixLetter } from '../challenge16/challenge16.js'

describe('Challenge 16 Test', () => {
  it('should be a function', () => {
    expect(typeof fixLetter).toBe('function')
  })

  it('should return a fixed string', () => {
    expect(fixLetter(' hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  '))
      .toBe('Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.')
    expect(fixLetter("  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?"))
      .toBe("Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?")
    expect(fixLetter('  hi    santa    claus '))
      .toBe('Hi Santa Claus.')
    expect(fixLetter('  hi    santa    claus . santa claus is the best  '))
      .toBe('Hi Santa Claus. Santa Claus is the best.')
    expect(fixLetter('  hi,santa claus. are you there ?   '))
      .toBe('Hi, Santa Claus. Are you there?')
    expect(fixLetter('Hey santa Claus .  I want a bike.   I want a videogame! '))
      .toBe('Hey Santa Claus. I want a bike. I want a videogame!')
  })
})
