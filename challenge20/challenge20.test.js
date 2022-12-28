import { describe, expect, it } from 'vitest'
import { howManyReindeers } from '../challenge20/challenge20.js'
import { compareObjects } from '../utils/compare-objects.js'

describe('Challenge 20 Test', () => {
  it('should be a function', () => {
    expect(typeof howManyReindeers).toBe('function')
  })

  it('should return an array', () => {
    expect(Array.isArray(howManyReindeers([], []))).toBe(true)
  })

  it('should return an appropiate solution', () => {
    const toTest = howManyReindeers([
      { type: 'Nuclear', weightCapacity: 50 },
      { type: 'Electric', weightCapacity: 10 },
      { type: 'Gasoline', weightCapacity: 5 },
      { type: 'Diesel', weightCapacity: 1 }
    ], [
      { country: 'Spain', weight: 30 },
      { country: 'France', weight: 17 },
      { country: 'Italy', weight: 50 }
    ])
    const expected = [
      {
        country: 'Spain',
        reindeers: [
          {
            type: 'Electric',
            num: 1
          },
          {
            type: 'Gasoline',
            num: 3
          },
          {
            type: 'Diesel',
            num: 5
          }
        ]
      },
      {
        country: 'France',
        reindeers: [
          {
            type: 'Electric',
            num: 1
          },
          {
            type: 'Gasoline',
            num: 1
          },
          {
            type: 'Diesel',
            num: 2
          }
        ]
      },
      {
        country: 'Italy',
        reindeers: [
          {
            type: 'Electric',
            num: 3
          },
          {
            type: 'Gasoline',
            num: 3
          },
          {
            type: 'Diesel',
            num: 5
          }
        ]
      }
    ]
    expect(compareObjects(toTest, expected)).toBe(true)
  })

  it('should return an appropiate solution', () => {
    const toTest = howManyReindeers([
      { type: 'Electric', weightCapacity: 10 },
      { type: 'Gasoline', weightCapacity: 5 },
      { type: 'Diesel', weightCapacity: 1 }
    ],
    [{ country: 'Spain', weight: 37 }])

    const expected = [
      {
        country: 'Spain',
        reindeers: [
          {
            type: 'Electric',
            num: 2
          },
          {
            type: 'Gasoline',
            num: 2
          },
          {
            type: 'Diesel',
            num: 7
          }
        ]
      }
    ]
    expect(compareObjects(toTest, expected)).toBe(true)
  })

  it('should return an appropiate solution', () => {
    const toTest = howManyReindeers([
      { type: 'Nuclear', weightCapacity: 50 },
      { type: 'Electric', weightCapacity: 10 },
      { type: 'Gasoline', weightCapacity: 5 },
      { type: 'Diesel', weightCapacity: 1 }
    ],
    [
      { country: 'Spain', weight: 30 },
      { country: 'Germany', weight: 7 },
      { country: 'France', weight: 17 },
      { country: 'Italy', weight: 50 }
    ])

    const expected = [
      {
        country: 'Spain',
        reindeers: [
          {
            type: 'Electric',
            num: 1
          },
          {
            type: 'Gasoline',
            num: 3
          },
          {
            type: 'Diesel',
            num: 5
          }
        ]
      },
      {
        country: 'Germany',
        reindeers: [
          {
            type: 'Gasoline',
            num: 1
          },
          {
            type: 'Diesel',
            num: 2
          }
        ]
      },
      {
        country: 'France',
        reindeers: [
          {
            type: 'Electric',
            num: 1
          },
          {
            type: 'Gasoline',
            num: 1
          },
          {
            type: 'Diesel',
            num: 2
          }
        ]
      },
      {
        country: 'Italy',
        reindeers: [
          {
            type: 'Electric',
            num: 3
          },
          {
            type: 'Gasoline',
            num: 3
          },
          {
            type: 'Diesel',
            num: 5
          }
        ]
      }
    ]
    expect(compareObjects(toTest, expected)).toBe(true)
  })

  it('should return an appropiate solution', () => {
    const toTest = howManyReindeers([
      { type: 'Diesel', weightCapacity: 1 },
      { type: 'Gasoline', weightCapacity: 5 }
    ],
    [
      { country: 'Spain', weight: 30 },
      { country: 'Germany', weight: 7 }
    ])

    const expected = [
      {
        country: 'Spain',
        reindeers: [
          {
            type: 'Gasoline',
            num: 5
          },
          {
            type: 'Diesel',
            num: 5
          }
        ]
      },
      {
        country: 'Germany',
        reindeers: [
          {
            type: 'Gasoline',
            num: 1
          },
          {
            type: 'Diesel',
            num: 2
          }
        ]
      }
    ]
    expect(compareObjects(toTest, expected)).toBe(true)
  })
})
